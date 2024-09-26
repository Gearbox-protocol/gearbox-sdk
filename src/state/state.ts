import type { Address } from "viem";

import type { CoreState } from "./coreState";
import type { MarketState } from "./marketState";
import type { RouterState } from "./routerState";

export interface BaseContractState {
  address: Address;
  version: number;
  contractType: string;
}

export interface GearboxState {
  block: number;
  timestamp: number;
  core: CoreState;
  markets: Array<MarketState>;
  // priceOracle: PriceOracleState;
  // poolState: Array<PoolFactoryState>;
  // creditState: Array<CreditFactoryState>;
  routerState?: RouterState;
  contractLabels: Record<Address, string>;
}
