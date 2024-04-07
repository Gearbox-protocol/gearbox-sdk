import {
  LPTokens,
  lpTokens,
  PartialRecord,
  SupportedToken,
} from "@gearbox-protocol/sdk-gov";

export type AdditionalTokenWithAPY = Extract<
  SupportedToken,
  | "STETH"
  | "weETH"
  | "osETH"
  | "rETH"
  | "wstETH"
  | "ezETH"
  | "cbETH"
  | "sfrxETH"
  | "USDe"
  | "rsETH"
>;
export const additionalTokensWithAPY: Record<AdditionalTokenWithAPY, true> = {
  STETH: true,
  weETH: true,
  osETH: true,
  rETH: true,
  wstETH: true,
  ezETH: true,
  cbETH: true,
  sfrxETH: true,
  USDe: true,
  rsETH: true,
};

export type TokensWithAPY = LPTokens | AdditionalTokenWithAPY;
export type LpTokensAPY = PartialRecord<TokensWithAPY, number>;

export const isTokenWithAPY = (t: unknown): t is TokensWithAPY =>
  typeof t === "string" &&
  (!!lpTokens[t as LPTokens] ||
    !!additionalTokensWithAPY[t as AdditionalTokenWithAPY]);

export * from "./convexAPY";
export * from "./curveAPY";
export * from "./defiLamaAPY";
export * from "./lidoAPY";
export * from "./yearnAPY";
