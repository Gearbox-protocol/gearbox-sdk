import type { Address, Hex } from "viem";
import { createPublicClient, parseEventLogs } from "viem";

import type { BaseContract } from "./base";
import { TokensMeta } from "./base";
import type {
  ConnectionOptions,
  NetworkOptions,
  TransportOptions,
} from "./chain";
import { createTransport, Provider } from "./chain";
import {
  ADDRESS_PROVIDER,
  AP_BOT_LIST,
  AP_GEAR_STAKING,
  AP_GEAR_TOKEN,
  AP_ROUTER,
  TIMELOCK,
} from "./constants";
import {
  AddressProviderContractV3_1,
  BotListContract,
  GearStakingContract,
} from "./core";
import { MarketRegister } from "./market/MarketRegister";
import { PriceFeedRegister } from "./market/pricefeeds";
import { RouterV3Contract } from "./router";
import type { GearboxStateHuman, ILogger, MultiCall } from "./types";
import { AddressMap, formatBN } from "./utils";
import { detectNetwork } from "./utils/viem";

export interface SDKOptions {
  /**
   * If not set, address provider address is determinted automatically from networkType
   */
  addressProvider?: Address;
  /**
   * Risk curators, defaults to gearbox own
   */
  riskCurators?: Address[];
  /**
   * Attach and load state at this specific block number
   */
  blockNumber?: bigint | number;
  /**
   * Bring your own logger
   */
  logger?: ILogger;
}

interface SDKContructorArgs {
  provider: Provider;
  logger?: ILogger;
}

export interface SyncStateOptions {
  blockNumber: bigint;
  timestamp: bigint;
}

export class GearboxSDK {
  // Represents chain object
  readonly #provider: Provider;

  // Block which was use for data query
  #currentBlock?: bigint;
  #timestamp?: bigint;
  #syncing = false;

  #gear?: Address;

  // Collection of core singleton contracts
  #addressProvider?: AddressProviderContractV3_1;
  #botListContract?: BotListContract;
  #gearStakingContract?: GearStakingContract;

  // Collection of markets
  #marketRegister?: MarketRegister;

  // Router contract
  #router?: RouterV3Contract;

  public readonly logger?: ILogger;

  /**
   * Interest rate models can be reused across chain (and SDK operates on chain level)
   * TODO: use whatever interface is necessary for InterestRateModels
   */
  public readonly interestRateModels = new AddressMap<
    BaseContract<readonly unknown[]>
  >();
  /**
   * All price feeds known to sdk, without oracle-related data (stalenessPeriod, main/reserve, etc.)
   */
  public readonly priceFeeds: PriceFeedRegister;
  /**
   * All contracts known to sdk
   */
  public readonly contracts = new AddressMap<BaseContract<any>>();
  /**
   * Token metadata such as symbol and decimals
   */
  public readonly tokensMeta = new TokensMeta();

  public static async attach(
    options: SDKOptions &
      Partial<NetworkOptions> &
      ConnectionOptions &
      TransportOptions,
  ): Promise<GearboxSDK> {
    const { logger, riskCurators, blockNumber } = options;
    let { networkType, addressProvider, chainId } = options;

    const attachClient = createPublicClient({
      transport: createTransport(options),
    });
    if (!networkType) {
      networkType = await detectNetwork(attachClient);
    }
    if (!chainId) {
      chainId = await attachClient.getChainId();
    }
    if (!addressProvider) {
      addressProvider = ADDRESS_PROVIDER[networkType];
    }

    const provider = new Provider({
      ...options,
      chainId,
      networkType,
    });
    logger?.debug(
      { networkType, chainId, addressProvider },
      "attaching gearbox sdk",
    );

    return new GearboxSDK({
      provider,
      logger,
    }).#attach(addressProvider, riskCurators, blockNumber);
  }

  private constructor(options: SDKContructorArgs) {
    this.#provider = options.provider;
    this.logger = options.logger;
    this.priceFeeds = new PriceFeedRegister(this);
  }

  async #attach(
    addressProviderAddress: Address,
    riskCurators?: Address[],
    blockNumber?: bigint | number,
  ): Promise<this> {
    const time = Date.now();

    const block = await this.provider.publicClient.getBlock(
      blockNumber
        ? { blockNumber: BigInt(blockNumber) }
        : {
            blockTag: "latest",
          },
    );
    this.#currentBlock = block.number;
    this.#timestamp = block.timestamp;

    this.logger?.info("Attaching to address provider", addressProviderAddress);
    this.#addressProvider = new AddressProviderContractV3_1(
      this,
      addressProviderAddress,
    );
    await this.#addressProvider.fetchState(this.currentBlock);

    // Attaching bot list contract
    const botListAddress = this.#addressProvider.getAddress(AP_BOT_LIST, 300);
    this.#botListContract = new BotListContract(this, botListAddress);

    // Attaching gear staking contract
    this.#gear = this.#addressProvider.getAddress(AP_GEAR_TOKEN);
    const gearStakingAddress = this.#addressProvider.getAddress(
      AP_GEAR_STAKING,
      300,
    );
    this.#gearStakingContract = new GearStakingContract(
      this,
      gearStakingAddress,
    );

    this.#marketRegister = new MarketRegister(this);
    await this.#marketRegister.loadMarkets(
      riskCurators ?? [TIMELOCK[this.provider.networkType]],
    );

    try {
      const router = this.#addressProvider.getLatestVersion(AP_ROUTER);
      this.#router = new RouterV3Contract(this, router);
    } catch (e) {
      this.logger?.warn("Router not found", e);
    }

    this.logger?.info(`attach time: ${Date.now() - time} ms`);

    return this;
  }

  /**
   * Converts contract call into some human-friendly string
   * @param address
   * @param calldata
   * @returns
   */
  public parseFunctionData(address: Address, calldata: Hex): string {
    const contract = this.contracts.get(address);
    // todo: fallback to 4bytes directory
    return contract
      ? contract.parseFunctionData(calldata)
      : `unknown: ${address}.${calldata.slice(0, 10)}`;
  }

  /**
   * Converts multicalls into some human-friendly strings
   * @param address
   * @param calldata
   * @returns
   */
  public parseMultiCall(calls: MultiCall[]): string[] {
    return calls.map(call =>
      this.parseFunctionData(call.target, call.callData),
    );
  }

  public stateHuman(raw = true): GearboxStateHuman {
    return {
      block: Number(this.currentBlock),
      timestamp: Number(this.timestamp),
      core: {
        addressProviderV3: this.addressProvider.stateHuman(raw),
        botList: this.botListContract.stateHuman(raw),
        gearStakingV3: this.gearStakingContract.stateHuman(raw),
      },
      markets: this.marketRegister.stateHuman(raw),
    };
  }

  public async tvl(): Promise<void> {
    const { tvl, tvlUSD } = await this.marketRegister.tvl();
    this.logger?.info(tvl);
    this.logger?.info(`Total TVL: ${formatBN(tvlUSD, 8)}`);
  }

  /**
   * Reloads markets states based on events from last processed block to new block (defaults to latest block)
   * @param opts
   * @returns
   */
  public async syncState(opts?: SyncStateOptions): Promise<void> {
    let { blockNumber, timestamp } = opts ?? {};
    if (!blockNumber) {
      const block = await this.provider.publicClient.getBlock({
        blockTag: "latest",
      });
      blockNumber = block.number;
      timestamp = block.timestamp;
    }
    if (blockNumber <= this.currentBlock) {
      return;
    }
    if (this.#syncing) {
      this.logger?.warn(`cannot sync to ${blockNumber}, already syncing`);
      return;
    }
    this.#syncing = true;
    this.logger?.debug(`syncing state to block ${blockNumber}...`);

    const logs = await this.provider.publicClient.getLogs({
      fromBlock: this.currentBlock,
      toBlock: blockNumber,
    });

    for (const log of logs) {
      const contract = this.contracts.get(log.address);
      if (contract) {
        const event = parseEventLogs({
          abi: contract.abi,
          logs: [log],
        })[0];
        contract.processLog(event);
      }
    }

    // This will reload all or some markets
    await this.marketRegister.syncState();
    // TODO: do wee need to sync state on botlist and others?

    this.#currentBlock = blockNumber;
    this.#timestamp = timestamp;
    this.#syncing = false;
    this.logger?.debug(`synced state to block ${blockNumber}`);
  }

  public get provider(): Provider {
    return this.#provider;
  }

  public get currentBlock(): bigint {
    if (this.#currentBlock === undefined) {
      throw new Error("Gearbox SDK not attached");
    }
    return this.#currentBlock;
  }

  public get timestamp(): bigint {
    if (this.#timestamp === undefined) {
      throw new Error("Gearbox SDK not attached");
    }
    return this.#timestamp;
  }

  public get gear(): Address {
    if (this.#gear === undefined) {
      throw new Error("Gearbox SDK not attached");
    }
    return this.#gear;
  }

  public get addressProvider(): AddressProviderContractV3_1 {
    if (this.#addressProvider === undefined) {
      throw new Error("Gearbox SDK not attached");
    }
    return this.#addressProvider;
  }

  public get botListContract(): BotListContract {
    if (this.#botListContract === undefined) {
      throw new Error("Gearbox SDK not attached");
    }
    return this.#botListContract;
  }

  public get gearStakingContract(): GearStakingContract {
    if (this.#gearStakingContract === undefined) {
      throw new Error("Gearbox SDK not attached");
    }
    return this.#gearStakingContract;
  }

  public get marketRegister(): MarketRegister {
    if (this.#marketRegister === undefined) {
      throw new Error("Gearbox SDK not attached");
    }
    return this.#marketRegister;
  }

  public get router(): RouterV3Contract {
    if (this.#router === undefined) {
      throw new Error("Gearbox SDK not attached");
    }
    return this.#router;
  }
}
