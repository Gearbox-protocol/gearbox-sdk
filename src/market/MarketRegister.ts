import type { Address } from "viem";

import { iMarketCompressorAbi } from "../abi";
import type { TokenMetaStruct } from "../base";
import { ADDRESS_0X0, AP_MARKET_COMPRESSOR } from "../constants";
import type { GearboxSDK } from "../GearboxSDK";
import type {
  CreditFactoryState,
  MarketState,
  PoolFactoryState,
} from "../state";
import type { ILogger } from "../types";
import { AddressMap, childLogger } from "../utils";
import { MarketFactory } from "./MarketFactory";

export class MarketRegister {
  #logger?: ILogger;
  /**
   * Mapping pool.name -> MarketFactory
   */
  #markets: Record<string, MarketFactory> = {};
  /**
   * Token metadata such as symbol and decimals, common across all markets
   */
  public readonly tokensMeta: AddressMap<TokenMetaStruct> = new AddressMap();

  readonly #sdk: GearboxSDK;

  constructor(sdk: GearboxSDK) {
    this.#sdk = sdk;
    this.#logger = childLogger("MarketRegister", sdk.logger);
  }

  public async loadMarkets(curators: Address[]): Promise<void> {
    this.#logger?.debug("loading markets");

    const marketCompressorAddress = this.#sdk.addressProvider.getAddress(
      AP_MARKET_COMPRESSOR,
      3_10,
    );
    const markets = await this.#sdk.provider.publicClient.readContract({
      address: marketCompressorAddress,
      abi: iMarketCompressorAbi,
      functionName: "getMarkets",
      args: [
        {
          curators,
          pools: [],
          underlying: ADDRESS_0X0,
        },
      ],
    });

    for (const data of markets) {
      this.#markets[data.pool.name] = new MarketFactory(data, this.#sdk);
    }

    this.#logger?.info(`loaded ${markets.length} markets`);
  }

  public get state(): Array<MarketState> {
    return Object.values(this.#markets).map(market => market.state);
  }

  public get poolState(): Array<PoolFactoryState> {
    return Object.values(this.#markets).map(market => market.poolFactory.state);
  }

  public get creditManagerState(): Array<CreditFactoryState> {
    return Object.values(this.#markets).flatMap(market =>
      market.creditManagers.map(cm => cm.state),
    );
  }

  public getPoolFactories(): PoolFactory[] {
    return this.markets.map(market => market!.poolFactory);
  }

  public get creditManagers(): Array<CreditFactory> {
    return this.markets.flatMap(market => market!.creditManagers);
  }

  public getNewCollateralTokens(): Set<Address> {
    return new Set(
      Object.values(this.#markets)
        .flatMap(market => market.creditManagers)
        .flatMap(cm => cm.newCollateralTokens),
    );
  }

  public findCreditManager(creditManager: Address): CreditFactory {
    for (const market of this.markets) {
      for (const cm of market.creditManagers) {
        if (cm.creditManager.address === creditManager) {
          return cm;
        }
      }
    }
    throw new Error(`cannot find credit manager ${creditManager}`);
  }

  public findByCreditManager(creditManager: Address): MarketFactory {
    const market = Object.values(this.#markets).find(m =>
      m.creditManagers.some(
        cm =>
          cm.creditManager.address.toLowerCase() ===
          creditManager.toLowerCase(),
      ),
    );
    if (!market) {
      throw new Error(`cannot find market for credit manager ${creditManager}`);
    }
    return market;
  }

  public get markets(): MarketFactory[] {
    return Object.values(this.#markets);
  }

  public async tvl() {
    const creditManagers = this.creditManagers;
    const tvls = await Promise.all(creditManagers.map(cm => cm.tvl()));
    return tvls.reduce(
      (acc, curr) => {
        acc.tvl += curr.tvl;
        acc.tvlUSD += curr.tvlUSD;
        return acc;
      },
      { tvl: 0n, tvlUSD: 0n },
    );
  }
}
