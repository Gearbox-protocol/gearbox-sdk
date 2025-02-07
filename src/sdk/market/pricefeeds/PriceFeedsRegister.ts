import {
  type Address,
  getChainContractAddress,
  type Hex,
  multicall3Abi,
} from "viem";

import { iMarketCompressorAbi } from "../../abi";
import type { BaseParams, PriceFeedTreeNode } from "../../base";
import { SDKConstruct } from "../../base";
import { ADDRESS_0X0, AP_MARKET_COMPRESSOR } from "../../constants";
import type { GearboxSDK } from "../../GearboxSDK";
import type { ILogger, RawTx } from "../../types";
import {
  AddressMap,
  bytes32ToString,
  childLogger,
  createRawTx,
} from "../../utils";
import type { IHooks } from "../../utils/internal";
import { Hooks } from "../../utils/internal";
import type { PartialPriceFeedTreeNode } from "./AbstractPriceFeed";
import { BalancerStablePriceFeedContract } from "./BalancerStablePriceFeed";
import { BalancerWeightedPriceFeedContract } from "./BalancerWeightedPriceFeed";
import { BoundedPriceFeedContract } from "./BoundedPriceFeed";
import { ChainlinkPriceFeedContract } from "./ChainlinkPriceFeed";
import { CompositePriceFeedContract } from "./CompositePriceFeed";
import { CurveCryptoPriceFeedContract } from "./CurveCryptoPriceFeed";
import { CurveStablePriceFeedContract } from "./CurveStablePriceFeed";
import { CurveUSDPriceFeedContract } from "./CurveUSDPriceFeed";
import { Erc4626PriceFeedContract } from "./Erc4626PriceFeed";
import { MellowLRTPriceFeedContract } from "./MellowLRTPriceFeed";
import { PendleTWAPPTPriceFeed } from "./PendleTWAPPTPriceFeed";
import { RedstonePriceFeedContract } from "./RedstonePriceFeed";
import { RedstoneUpdater } from "./RedstoneUpdater";
import type {
  IPriceFeedContract,
  PriceFeedContractType,
  UpdatePriceFeedsResult,
} from "./types";
import { WstETHPriceFeedContract } from "./WstETHPriceFeed";
import { YearnPriceFeedContract } from "./YearnPriceFeed";
import { ZeroPriceFeedContract } from "./ZeroPriceFeed";

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type PriceFeedRegisterHooks = {
  /**
   * Emitted when transactions to update price feeds have been generated, but before they're used anywhere
   */
  updatesGenerated: [UpdatePriceFeedsResult];
};

/**
 * PriceFeedRegister acts as a chain-level cache to avoid creating multiple contract instances.
 * It's reused by PriceOracles belonging to different markets
 *
 **/
export class PriceFeedRegister
  extends SDKConstruct
  implements IHooks<PriceFeedRegisterHooks>
{
  public readonly logger?: ILogger;
  readonly #hooks = new Hooks<PriceFeedRegisterHooks>();
  #feeds = new AddressMap<IPriceFeedContract>();
  public readonly redstoneUpdater: RedstoneUpdater;

  constructor(sdk: GearboxSDK) {
    super(sdk);
    this.logger = childLogger("PriceFeedRegister", sdk.logger);
    this.redstoneUpdater = new RedstoneUpdater(sdk);
  }

  public addHook = this.#hooks.addHook.bind(this.#hooks);
  public removeHook = this.#hooks.removeHook.bind(this.#hooks);

  /**
   * Returns RawTxs to update price feeds
   * @param priceFeeds top-level price feeds, actual updatable price feeds will be derived. If not provided will use all price feeds that are attached
   * @param logContext extra information for logging
   * @returns
   */
  public async generatePriceFeedsUpdateTxs(
    priceFeeds?: IPriceFeedContract[],
    logContext: Record<string, any> = {},
  ): Promise<UpdatePriceFeedsResult> {
    const updateables = priceFeeds
      ? priceFeeds.flatMap(pf => pf.updatableDependencies())
      : this.#feeds.values();
    return this.#generatePriceFeedsUpdateTxs(updateables, logContext);
  }

  public has(address: Address): boolean {
    return this.#feeds.has(address);
  }

  public mustGet(address: Address): IPriceFeedContract {
    return this.#feeds.mustGet(address);
  }

  public getOrCreate(data: PriceFeedTreeNode): IPriceFeedContract {
    const existing = this.#feeds.get(data.baseParams.addr);
    // it's possible to have non-loaded price feed here first from MarketCompressor.getUpdatablePriceFeeds
    // we ovewrite them using full tree nodes
    if (existing?.loaded) {
      return existing;
    }
    const feed = this.create(data);
    this.#feeds.upsert(data.baseParams.addr, feed);
    return feed;
  }

  /**
   * Loads PARTIAL information about all updatable price feeds from MarketCompressor
   * This can later be used to load price feed updates
   */
  public async preloadUpdatablePriceFeeds(
    marketConfigurators?: Address[],
    pools?: Address[],
  ): Promise<void> {
    const feedsData = await this.#loadUpdatablePriceFeeds(
      marketConfigurators,
      pools,
    );
    for (const data of feedsData) {
      const feed = this.create({ baseParams: data });
      this.#feeds.upsert(feed.address, feed);
    }
  }

  /**
   * Generates price update transaction via multicall3 without any market data knowledge
   * @param marketConfigurators
   * @param pools
   * @returns
   */
  public async getUpdatePriceFeedsTx(
    marketConfigurators?: Address[],
    pools?: Address[],
  ): Promise<RawTx> {
    const feedsData = await this.#loadUpdatablePriceFeeds(
      marketConfigurators,
      pools,
    );
    const feeds = feedsData.map(data => this.create({ baseParams: data }));
    const updates = await this.#generatePriceFeedsUpdateTxs(feeds);

    return createRawTx(
      getChainContractAddress({
        chain: this.sdk.provider.chain,
        contract: "multicall3",
      }),
      {
        abi: multicall3Abi,
        functionName: "aggregate3",
        args: [
          updates.txs.map(tx => ({
            target: tx.to,
            allowFailure: false,
            callData: tx.callData,
          })),
        ],
      },
    );
  }

  async #generatePriceFeedsUpdateTxs(
    updateables: IPriceFeedContract[],
    logContext: Record<string, any> = {},
  ): Promise<UpdatePriceFeedsResult> {
    const txs: RawTx[] = [];
    const redstonePFs: RedstonePriceFeedContract[] = [];

    for (const pf of updateables) {
      if (pf instanceof RedstonePriceFeedContract) {
        redstonePFs.push(pf);
      }
    }

    let maxTimestamp = 0;
    if (redstonePFs.length > 0) {
      const redstoneUpdates = await this.redstoneUpdater.getUpdateTxs(
        redstonePFs,
        logContext,
      );
      for (const { tx, timestamp } of redstoneUpdates) {
        if (timestamp > maxTimestamp) {
          maxTimestamp = timestamp;
        }
        txs.push(tx);
      }
    }

    const result: UpdatePriceFeedsResult = { txs, timestamp: maxTimestamp };
    this.logger?.debug(
      logContext,
      `generated ${txs.length} price feed update transactions, timestamp: ${maxTimestamp}`,
    );
    if (txs.length) {
      await this.#hooks.triggerHooks("updatesGenerated", result);
    }
    return result;
  }

  async #loadUpdatablePriceFeeds(
    marketConfigurators?: Address[],
    pools?: Address[],
  ): Promise<readonly BaseParams[]> {
    const marketCompressorAddress = this.sdk.addressProvider.getAddress(
      AP_MARKET_COMPRESSOR,
      3_10,
    );
    const configurators =
      marketConfigurators ??
      this.sdk.marketRegister.marketConfigurators.map(mc => mc.address);
    this.logger?.debug(
      { configurators, pools },
      "calling getUpdatablePriceFeeds",
    );
    const result = await this.provider.publicClient.readContract({
      address: marketCompressorAddress,
      abi: iMarketCompressorAbi,
      functionName: "getUpdatablePriceFeeds",
      args: [
        {
          configurators,
          pools: pools ?? [],
          underlying: ADDRESS_0X0,
        },
      ],
      // It's passed as ...rest in viem readContract action, but this might change
      // @ts-ignore
      // gas: 500_000_000n,
    });
    this.logger?.debug(`loaded ${result.length} updatable price feeds`);
    return result;
  }

  public create(data: PartialPriceFeedTreeNode): IPriceFeedContract {
    const contractType = bytes32ToString(
      data.baseParams.contractType as Hex,
    ) as PriceFeedContractType;

    switch (contractType) {
      case "PF_CHAINLINK_ORACLE":
        return new ChainlinkPriceFeedContract(this.sdk, data);

      case "PF_YEARN_ORACLE":
        return new YearnPriceFeedContract(this.sdk, data);

      case "PF_CURVE_STABLE_LP_ORACLE":
        return new CurveStablePriceFeedContract(this.sdk, data);

      case "PF_WSTETH_ORACLE":
        return new WstETHPriceFeedContract(this.sdk, data);

      case "PF_BOUNDED_ORACLE":
        return new BoundedPriceFeedContract(this.sdk, data);

      case "PF_COMPOSITE_ORACLE":
        return new CompositePriceFeedContract(this.sdk, data);

      case "PF_BALANCER_STABLE_LP_ORACLE":
        return new BalancerStablePriceFeedContract(this.sdk, data);

      case "PF_BALANCER_WEIGHTED_LP_ORACLE":
        return new BalancerWeightedPriceFeedContract(this.sdk, data);

      case "PF_CURVE_CRYPTO_LP_ORACLE":
        return new CurveCryptoPriceFeedContract(this.sdk, data);

      case "PF_REDSTONE_ORACLE":
        return new RedstonePriceFeedContract(this.sdk, data);

      case "PF_ERC4626_ORACLE":
        return new Erc4626PriceFeedContract(this.sdk, data);

      case "PF_CURVE_USD_ORACLE":
        return new CurveUSDPriceFeedContract(this.sdk, data);

      case "PF_ZERO_ORACLE":
        return new ZeroPriceFeedContract(this.sdk, data);

      case "PF_MELLOW_LRT_ORACLE":
        return new MellowLRTPriceFeedContract(this.sdk, data);

      case "PF_PENDLE_PT_TWAP_ORACLE":
        return new PendleTWAPPTPriceFeed(this.sdk, data);

      default:
        throw new Error(`Price feed type ${contractType} not supported, `);
    }
  }
}
