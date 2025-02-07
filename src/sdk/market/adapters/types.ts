import type { Address } from "viem";

import type { IBaseContract } from "../../base";

export type AdapterContractTypeLegacy =
  | "AD_UNISWAP_V2_ROUTER"
  | "AD_UNISWAP_V3_ROUTER"
  | "AD_CURVE_V1_EXCHANGE_ONLY"
  | "AD_YEARN_V2"
  | "AD_CURVE_V1_2ASSETS"
  | "AD_CURVE_V1_3ASSETS"
  | "AD_CURVE_V1_4ASSETS"
  | "AD_CURVE_V1_STECRV_POOL"
  | "AD_CURVE_V1_WRAPPER"
  | "AD_CONVEX_V1_BASE_REWARD_POOL"
  | "AD_CONVEX_V1_BOOSTER"
  | "AD_LIDO_V1"
  | "AD_LIDO_WSTETH_V1"
  | "AD_BALANCER_VAULT"
  | "AD_ERC4626_VAULT"
  | "AD_VELODROME_V2_ROUTER"
  | "AD_CURVE_STABLE_NG"
  | "AD_CAMELOT_V3_ROUTER"
  | "AD_CONVEX_L2_BOOSTER"
  | "AD_CONVEX_L2_REWARD_POOL"
  | "AD_AAVE_V3_LENDING_POOL"
  | "AD_ZIRCUIT_POOL"
  | "AD_SYMBIOTIC_DEFAULT_COLLATERAL"
  | "AD_MELLOW_LRT_VAULT"
  | "AD_PENDLE_ROUTER"
  | "AD_MELLOW_ERC4626_VAULT"
  | "AD_DAI_USDS_EXCHANGE"
  | "AD_STAKING_REWARDS"
  | "AD_EQUALIZER_ROUTER";

export type AdapterContractType =
  | "ADAPTER::UNISWAP_V2_ROUTER"
  | "ADAPTER::UNISWAP_V3_ROUTER"
  | "ADAPTER::CURVE_V1_EXCHANGE_ONLY"
  | "ADAPTER::YEARN_V2"
  | "ADAPTER::CURVE_V1_2ASSETS"
  | "ADAPTER::CURVE_V1_3ASSETS"
  | "ADAPTER::CURVE_V1_4ASSETS"
  | "ADAPTER::CURVE_V1_STECRV_POOL"
  | "ADAPTER::CURVE_V1_WRAPPER"
  | "ADAPTER::CVX_V1_BASE_REWARD_POOL"
  | "ADAPTER::CVX_V1_BOOSTER"
  | "ADAPTER::LIDO_V1"
  | "ADAPTER::LIDO_WSTETH_V1"
  | "ADAPTER::BALANCER_VAULT"
  | "ADAPTER::BALANCER_V3_ROUTER"
  | "ADAPTER::ERC4626_VAULT"
  | "ADAPTER::VELODROME_V2_ROUTER"
  | "ADAPTER::CURVE_STABLE_NG"
  | "ADAPTER::CAMELOT_V3_ROUTER"
  | "ADAPTER::CONVEX_L2_BOOSTER"
  | "ADAPTER::CONVEX_L2_REWARD_POOL"
  | "ADAPTER::AAVE_V3_LENDING_POOL"
  | "ADAPTER::ZIRCUIT_POOL"
  | "ADAPTER::SYMBIOTIC_DEFAULT_COLLATERAL"
  | "ADAPTER::MELLOW_LRT_VAULT"
  | "ADAPTER::PENDLE_ROUTER"
  | "ADAPTER::MELLOW_ERC4626_VAULT"
  | "ADAPTER::DAI_USDS_EXCHANGE"
  | "ADAPTER::STAKING_REWARDS"
  | "ADAPTER::EQUALIZER_ROUTER";

export interface IAdapterContract extends IBaseContract {
  targetContract: Address;
}
