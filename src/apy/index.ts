import {
  LPTokens,
  lpTokens,
  PartialRecord,
  SupportedToken,
} from "@gearbox-protocol/sdk-gov";

export type AdditionalTokenWithAPY = Extract<
  SupportedToken,
  "STETH" | "weETH" | "osETH" | "rETH" | "wstETH" | "ezETH"
>;
export const additionalTokensWIthAPY: Record<AdditionalTokenWithAPY, true> = {
  STETH: true,
  weETH: true,
  osETH: true,
  rETH: true,
  wstETH: true,
  ezETH: true,
};

export type TokensWithAPY = LPTokens | AdditionalTokenWithAPY;
export type LpTokensAPY = PartialRecord<TokensWithAPY, number>;

export const isTokenWithAPY = (t: unknown): t is TokensWithAPY =>
  typeof t === "string" &&
  (!!lpTokens[t as LPTokens] ||
    !!additionalTokensWIthAPY[t as AdditionalTokenWithAPY]);

export * from "./convexAPY";
export * from "./curveAPY";
export * from "./defiLamaAPY";
export * from "./lidoAPY";
export * from "./yearnAPY";
