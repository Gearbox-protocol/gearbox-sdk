import type { Address } from "viem";

import type { NetworkType } from "../chain";
import { NOT_DEPLOYED } from "./addresses";

export const NO_VERSION = 0;

export const AP_ACL = "ACL";
export const AP_CONTRACTS_REGISTER = "CONTRACTS_REGISTER";
export const AP_PRICE_ORACLE = "PRICE_ORACLE";
export const AP_ACCOUNT_FACTORY = "ACCOUNT_FACTORY";
export const AP_DATA_COMPRESSOR = "DATA_COMPRESSOR";
export const AP_MARKET_COMPRESSOR = "MARKET_COMPRESSOR";
export const AP_MARKET_CONFIGURATOR = "MARKET_CONFIGURATOR";
export const AP_PRICE_FEED_COMPRESSOR = "PRICE_FEED_COMPRESSOR";
export const AP_CREDIT_ACCOUNT_COMPRESSOR = "CREDIT_ACCOUNT_COMPRESSOR";
export const AP_ADAPTER_COMPRESSOR = "ADAPTER_COMPRESSOR";
export const AP_TREASURY = "TREASURY";
export const AP_GEAR_TOKEN = "GEAR_TOKEN";
export const AP_WETH_TOKEN = "WETH_TOKEN";
export const AP_WETH_GATEWAY = "WETH_GATEWAY";
export const AP_ROUTER = "ROUTER";
export const AP_BOT_LIST = "BOT_LIST";
export const AP_GEAR_STAKING = "GEAR_STAKING";
export const AP_ZAPPER_REGISTER = "ZAPPER_REGISTER";
export const AP_CONTROLLER_TIMELOCK = "CONTROLLER_TIMELOCK";
export const AP_DEGEN_NFT = "DEGEN_NFT";
export const AP_ZERO_PRICE_FEED = "ZERO_PRICE_FEED";
export const AP_DEGEN_DISTRIBUTOR = "DEGEN_DISTRIBUTOR";
export const AP_MULTI_PAUSE = "MULTI_PAUSE";
export const AP_INFLATION_ATTACK_BLOCKER = "INFLATION_ATTACK_BLOCKER";
export const AP_INSOLVENCY_CHECKER = "INSOLVENCY_CHECKER";
export const AP_PARTIAL_LIQUIDATION_BOT = "PARTIAL_LIQUIDATION_BOT";
export const AP_DELEVERAGE_BOT_PEGGED = "DELEVERAGE_BOT_PEGGED";
export const AP_DELEVERAGE_BOT_LV = "DELEVERAGE_BOT_LV";
export const AP_DELEVERAGE_BOT_HV = "DELEVERAGE_BOT_HV";

export const ADDRESS_PROVIDER: Record<NetworkType, Address> = {
  Mainnet: "0x9ea7b04Da02a5373317D745c1571c84aaD03321D",
  Arbitrum: "0x7d04eCdb892Ae074f03B5D0aBA03796F90F3F2af",
  Optimism: "0x3761ca4BFAcFCFFc1B8034e69F19116dD6756726",
  Base: NOT_DEPLOYED,
};

/**
 * Block number when address provider was deployed
 */
export const ADDRESS_PROVIDER_BLOCK: Record<NetworkType, bigint> = {
  Mainnet: 18433056n,
  Arbitrum: 184650310n,
  Optimism: 118410666n,
  Base: 0n,
};
