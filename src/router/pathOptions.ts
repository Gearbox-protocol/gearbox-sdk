import type {
  Address,
  BalancerLPToken,
  ConvexLPToken,
  CurveLPToken,
  CurveParams,
  NetworkType,
  YearnLPToken,
} from "@gearbox-protocol/sdk-gov";
import {
  balancerLpTokens,
  contractParams,
  convexTokens,
  curveTokens,
  getTokenSymbol,
  isBalancerLPToken,
  isCurveLPToken,
  toBigInt,
  tokenDataByNetwork,
  yearnTokens,
} from "@gearbox-protocol/sdk-gov";
import type {
  AuraLPToken,
  AuraStakedToken,
} from "@gearbox-protocol/sdk-gov/lib/tokens/aura";
import { auraTokens } from "@gearbox-protocol/sdk-gov/lib/tokens/aura";

export interface PathOption {
  target: Address;
  option: number;
  totalOptions: number;
}

export type PathOptionSerie = Array<PathOption>;

export interface TokenBalance {
  token: Address;
  balance: bigint;
}

export class PathOptionFactory {
  static generatePathOptions(
    balances: Array<TokenBalance>,
    network: NetworkType,
    loopsInTx: number,
  ): Array<PathOptionSerie> {
    const curvePools = PathOptionFactory.getCurvePools(balances);
    const balancerPools = PathOptionFactory.getBalancerPools(balances);

    const curveInitPO: PathOptionSerie = curvePools.map(symbol => {
      return {
        target: tokenDataByNetwork[network][symbol],
        option: 0,
        totalOptions: (contractParams[curveTokens[symbol].pool] as CurveParams)
          .tokens.length,
      };
    });
    const balancerInitPO: PathOptionSerie = balancerPools.map(symbol => {
      return {
        target: tokenDataByNetwork[network][symbol],
        option: 0,
        totalOptions: balancerLpTokens[symbol].underlying.length,
      };
    });
    const initPO = [...curveInitPO, ...balancerInitPO];

    const totalLoops = initPO.reduce<number>(
      (acc, item) => acc * item.totalOptions,
      1,
    );

    const result: Array<PathOptionSerie> = [];

    let currentPo = [...initPO];

    for (let i = 0; i < totalLoops; i++) {
      if (i % loopsInTx === 0) {
        result.push(currentPo);
      }
      if (i < totalLoops - 1) {
        currentPo = PathOptionFactory.next(currentPo);
      }
    }

    return result;
  }

  static getCurvePools(balances: Array<TokenBalance>): Array<CurveLPToken> {
    const nonZeroBalances = balances.filter(b => b.balance > 1n);

    const curvePools = nonZeroBalances
      .map(b => getTokenSymbol(b.token))
      .filter(symbol => isCurveLPToken(symbol)) as Array<CurveLPToken>;

    const yearnCurveTokens = Object.entries(yearnTokens)
      .filter(([, data]) => isCurveLPToken(data.underlying))
      .map(([token]) => token);

    const curvePoolsFromYearn = nonZeroBalances
      .map(b => getTokenSymbol(b.token)!)
      .filter(symbol => yearnCurveTokens.includes(symbol))
      .map(
        symbol => yearnTokens[symbol as YearnLPToken].underlying,
      ) as Array<CurveLPToken>;

    const convexCurveTokens = Object.entries(convexTokens)
      .filter(([, data]) => isCurveLPToken(data.underlying))
      .map(([token]) => token);

    const curvePoolsFromConvex = nonZeroBalances
      .map(b => getTokenSymbol(b.token)!)
      .filter(symbol => convexCurveTokens.includes(symbol))
      .map(symbol => convexTokens[symbol as ConvexLPToken].underlying);

    const curveSet = new Set([
      ...curvePools,
      ...curvePoolsFromYearn,
      ...curvePoolsFromConvex,
    ]);
    return Array.from(curveSet.values());
  }

  static getBalancerPools(
    balances: Array<TokenBalance>,
  ): Array<BalancerLPToken> {
    const nonZeroBalances = Object.entries(balances).filter(
      ([, balance]) => toBigInt(balance.balance) > 1,
    );

    const balancerPools = nonZeroBalances
      .map(([token]) => getTokenSymbol(token as Address)!)
      .filter(symbol => isBalancerLPToken(symbol)) as Array<BalancerLPToken>;

    const balancerAuraTokens = Object.entries(auraTokens)
      .filter(([, data]) => isBalancerLPToken(data.underlying))
      .map(([token]) => token);

    const balancerTokensFromAura = nonZeroBalances
      .map(([token]) => getTokenSymbol(token as Address)!)
      .filter(symbol => balancerAuraTokens.includes(symbol))
      .map(
        symbol =>
          auraTokens[symbol as AuraLPToken | AuraStakedToken].underlying,
      );

    const balancerSet = new Set([...balancerPools, ...balancerTokensFromAura]);

    return Array.from(balancerSet.values());
  }

  static next(path: PathOptionSerie): PathOptionSerie {
    let newPath = [...path];
    for (let i = path.length - 1; i >= 0; i--) {
      const po = { ...newPath[i] };
      po.option++;
      newPath[i] = po;

      if (po.option < po.totalOptions) return newPath;
      po.option = 0;
    }

    throw new Error("Path options overflow");
  }
}
