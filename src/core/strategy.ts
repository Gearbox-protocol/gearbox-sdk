import { decimals } from "../tokens/decimals";
import { tokenSymbolByAddress } from "../tokens/token";
import { calcTotalPrice } from "../utils/price";
import {
  LEVERAGE_DECIMALS,
  PERCENTAGE_FACTOR,
  PRICE_DECIMALS,
  WAD,
} from "./constants";
import { CreditManagerData } from "./creditManager";

export interface StrategyPayload {
  apy?: number;

  name: string;
  lpToken: string;
  pools: Array<string>;

  unleveragableCollateral: Array<string>;
  leveragableCollateral: Array<string>;

  baseAssets: Array<string>;
}

interface LiquidationPriceProps {
  prices: Record<string, bigint>;
  liquidationThresholds: Record<string, bigint>;

  borrowed: bigint;
  underlyingToken: string;

  lpAmount: bigint;
  lpToken: string;
}

export class Strategy {
  apy: number | undefined;
  name: string;
  lpToken: string;
  pools: Array<string>;
  unleveragableCollateral: Array<string>;
  leveragableCollateral: Array<string>;
  baseAssets: Array<string>;

  constructor(payload: StrategyPayload) {
    this.apy = payload.apy;

    this.name = payload.name;
    this.lpToken = payload.lpToken.toLowerCase();
    this.pools = payload.pools.map(addr => addr.toLowerCase());
    this.unleveragableCollateral = payload.unleveragableCollateral.map(addr =>
      addr.toLowerCase(),
    );
    this.leveragableCollateral = payload.leveragableCollateral.map(addr =>
      addr.toLowerCase(),
    );
    this.baseAssets = payload.baseAssets.map(addr => addr.toLowerCase());
  }

  static maxLeverage(lpToken: string, cms: Array<PartialCM>) {
    const [maxThreshold] = maxLeverageThreshold(lpToken, cms);

    const maxLeverage =
      (PERCENTAGE_FACTOR * LEVERAGE_DECIMALS) /
      (PERCENTAGE_FACTOR - maxThreshold);
    return Number(maxLeverage - LEVERAGE_DECIMALS);
  }

  maxAPY(baseAPY: number, maxLeverage: number, borrowAPY: number) {
    return (
      baseAPY +
      ((baseAPY - borrowAPY) * (maxLeverage - Number(LEVERAGE_DECIMALS))) /
        Number(LEVERAGE_DECIMALS)
    );
  }

  overallAPY(
    apy: number,
    leverage: number,
    depositCollateral: string,
    borrowAPY: number,
  ) {
    const farmLev = this.farmLev(leverage, depositCollateral);

    return roi(apy, farmLev, leverage - Number(LEVERAGE_DECIMALS), borrowAPY);
  }

  static liquidationPrice({
    prices,
    liquidationThresholds,

    borrowed,
    underlyingToken,

    lpAmount,
    lpToken,
  }: LiquidationPriceProps) {
    const underlyingTokenAddressLC = underlyingToken.toLowerCase();
    const underlyingTokenSymbol =
      tokenSymbolByAddress[underlyingTokenAddressLC];
    const underlyingTokenDecimals = decimals[underlyingTokenSymbol];

    const underlyingPrice = prices[underlyingTokenAddressLC] || PRICE_DECIMALS;
    const borrowedMoney = calcTotalPrice(
      underlyingPrice,
      borrowed,
      underlyingTokenDecimals,
    );

    const lpTokenAddressLC = lpToken.toLowerCase();
    const lpTokenSymbol = tokenSymbolByAddress[lpTokenAddressLC];
    const lpTokenDecimals = decimals[lpTokenSymbol];
    const lpLT = liquidationThresholds[lpTokenAddressLC] || 0n;

    const lpPrice = prices[lpTokenAddressLC] || PRICE_DECIMALS;
    const lpMoney = calcTotalPrice(lpPrice, lpAmount, lpTokenDecimals);
    const lpLTMoney = (lpMoney * lpLT) / PERCENTAGE_FACTOR;

    if (lpLTMoney > 0) {
      const lqPrice = (borrowedMoney * WAD) / lpLTMoney;
      return lqPrice >= 0 ? lqPrice : 0n;
    }

    return 0n;
  }

  protected farmLev(leverage: number, depositCollateral: string) {
    return this.inBaseAssets(depositCollateral) ||
      this.inLeveragableAssets(depositCollateral)
      ? leverage
      : leverage - Number(LEVERAGE_DECIMALS);
  }

  protected inBaseAssets(depositCollateral: string) {
    return this.baseAssets.some(c => c === depositCollateral.toLowerCase());
  }

  protected inLeveragableAssets(depositCollateral: string) {
    return this.leveragableCollateral.some(
      c => c === depositCollateral.toLowerCase(),
    );
  }
}

function roi(apy: number, farmLev: number, debtLev: number, borrowAPY: number) {
  return (apy * farmLev - borrowAPY * debtLev) / Number(LEVERAGE_DECIMALS);
}

type PartialCM = Pick<CreditManagerData, "liquidationThresholds" | "address">;

function maxLeverageThreshold(lpToken: string, cms: Array<PartialCM>) {
  const lpTokenLC = lpToken.toLowerCase();
  const ltByCM: Array<[string, bigint]> = cms.map(cm => {
    const lt = cm.liquidationThresholds[lpTokenLC] || 0n;
    return [cm.address, lt];
  });

  const sorted = ltByCM.sort(([, ltA], [, ltB]) => {
    if (ltA > ltB) return 1;
    if (ltB > ltA) return -1;
    return 0;
  });

  const [cm = "", lt = 0n] = sorted[0] || [];

  return [lt, cm] as const;
}
