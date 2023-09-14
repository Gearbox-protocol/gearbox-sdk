import {
  ADDRESS_0X0,
  PERCENTAGE_DECIMALS,
  PERCENTAGE_FACTOR,
  RAY,
  tokenSymbolByAddress,
} from "@gearbox-protocol/sdk-gov";

import { TxParser } from "../parsers/txParser";
import { MultiCall } from "../pathfinder/core";
import {
  ChartsCreditManagerPayload,
  CreditManagerDataPayload,
  QuotaInfo,
} from "../payload/creditManager";
import { LinearModel } from "../payload/pool";
import {
  IConvexV1BaseRewardPoolAdapter__factory,
  ICreditFacade__factory,
  ICreditFacadeExtended__factory,
} from "../types";
import { toBigInt } from "../utils/formatter";

export class CreditManagerData {
  readonly address: string;
  readonly underlyingToken: string;
  readonly pool: string;
  readonly creditFacade: string; // V2 only: address of creditFacade
  readonly creditConfigurator: string; // V2 only: address of creditFacade
  readonly degenNFT: string; // V2 only: degenNFT, address(0) if not in degen mode
  readonly isDegenMode: boolean;
  readonly version: number;
  readonly isPaused: boolean;
  readonly forbiddenTokenMask: bigint; // V2 only: mask which forbids some particular tokens
  readonly maxEnabledTokensLength: number;

  readonly borrowRate: number;

  readonly minDebt: bigint;
  readonly maxDebt: bigint;
  readonly availableToBorrow: bigint;
  readonly totalDebt: bigint;
  readonly totalDebtLimit: bigint;

  readonly feeInterest: number;
  readonly feeLiquidation: number;
  readonly liquidationDiscount: number;
  readonly feeLiquidationExpired: number;
  readonly liquidationDiscountExpired: number;

  readonly collateralTokens: Array<string> = [];
  readonly supportedTokens: Record<string, true> = {};
  readonly adapters: Record<string, string>;
  readonly liquidationThresholds: Record<string, bigint>;
  readonly quotas: Array<QuotaInfo>;
  readonly interestModel: LinearModel;

  constructor(payload: CreditManagerDataPayload) {
    this.address = payload.addr.toLowerCase();
    this.underlyingToken = payload.underlying.toLowerCase();
    this.pool = payload.pool.toLowerCase();
    this.creditFacade = payload.creditFacade.toLowerCase();
    this.creditConfigurator = payload.creditConfigurator.toLowerCase();
    this.degenNFT = payload.degenNFT.toLowerCase();
    this.isDegenMode = payload.isDegenMode || false;
    this.version = payload.cfVersion?.toNumber() || 0;
    this.isPaused = payload.isPaused || false;
    this.forbiddenTokenMask = toBigInt(payload.forbiddenTokenMask || 0);
    this.maxEnabledTokensLength = payload.maxEnabledTokensLength;

    this.borrowRate = Number(
      (toBigInt(payload.baseBorrowRate || 0) *
        (toBigInt(payload.feeInterest || 0) + PERCENTAGE_FACTOR) *
        PERCENTAGE_DECIMALS) /
        RAY,
    );

    this.minDebt = toBigInt(payload.minDebt || 0);
    this.maxDebt = toBigInt(payload.maxDebt || 0);
    this.availableToBorrow = toBigInt(payload.availableToBorrow || 0);
    this.totalDebt = toBigInt(payload.totalDebt || 0);
    this.totalDebtLimit = toBigInt(payload.totalDebtLimit || 0);

    this.feeInterest = payload.feeInterest || 0;
    this.feeLiquidation = payload.feeLiquidation || 0;
    this.liquidationDiscount = payload.liquidationDiscount || 0;
    this.feeLiquidationExpired = payload.feeLiquidationExpired || 0;
    this.liquidationDiscountExpired = payload.liquidationDiscountExpired || 0;

    payload.collateralTokens.forEach(t => {
      const tLc = t.toLowerCase();

      this.collateralTokens.push(tLc);
      this.supportedTokens[tLc] = true;
    });

    this.adapters = Object.fromEntries(
      payload.adapters.map(a => [
        a.targetContract.toLowerCase(),
        a.adapter.toLowerCase(),
      ]),
    );

    this.liquidationThresholds = payload.liquidationThresholds.reduce<
      Record<string, bigint>
    >((acc, threshold, index) => {
      const address = payload.collateralTokens[index];
      if (address) acc[address.toLowerCase()] = toBigInt(threshold || 0);
      return acc;
    }, {});

    this.quotas = payload.quotas.map(q => ({
      token: q.token.toLowerCase(),
      rate: q.rate,
      quotaIncreaseFee: q.quotaIncreaseFee,
      totalQuoted: toBigInt(q.totalQuoted || 0),
      limit: toBigInt(q.limit || 0),
      isActive: q.isActive || false,
    }));

    this.interestModel = {
      interestModel: payload.lirm.interestModel.toLowerCase(),
      U_1: payload.lirm.U_1 || 0,
      U_2: payload.lirm.U_2 || 0,
      R_base: payload.lirm.R_base || 0,
      R_slope1: payload.lirm.R_slope1 || 0,
      R_slope2: payload.lirm.R_slope2 || 0,
      R_slope3: payload.lirm.R_slope3 || 0,
      version: payload?.lirm?.version?.toNumber() || 0,
    };

    TxParser.addCreditManager(this.address, this.version);
    if (this.creditFacade !== "" && this.creditFacade !== ADDRESS_0X0) {
      TxParser.addCreditFacade(
        this.creditFacade,
        tokenSymbolByAddress[this.underlyingToken],
      );

      TxParser.addAdapters(
        payload.adapters.map(a => ({
          adapter: a.adapter,
          contract: a.targetContract,
        })),
      );
    }
  }

  encodeAddCollateral(
    accountAddress: string,
    tokenAddress: string,
    amount: bigint,
  ): MultiCall {
    if (this.version === 1)
      throw new Error("Multicall is eligible only for version 2");
    return {
      target: this.creditFacade,
      callData: ICreditFacade__factory.createInterface().encodeFunctionData(
        "addCollateral",
        [accountAddress, tokenAddress, amount],
      ),
    };
  }

  encodeIncreaseDebt(amount: bigint): MultiCall {
    if (this.version === 1)
      throw new Error("Multicall is eligible only for version 2");
    return {
      target: this.creditFacade,
      callData: ICreditFacade__factory.createInterface().encodeFunctionData(
        "increaseDebt",
        [amount],
      ),
    };
  }

  encodeDecreaseDebt(amount: bigint): MultiCall {
    if (this.version === 1)
      throw new Error("Multicall is eligible only for version 2");
    return {
      target: this.creditFacade,
      callData: ICreditFacade__factory.createInterface().encodeFunctionData(
        "decreaseDebt",
        [amount],
      ),
    };
  }

  encodeEnableToken(token: string): MultiCall {
    if (this.version === 1)
      throw new Error("Multicall is eligible only for version 2");
    return {
      target: this.creditFacade,
      callData: ICreditFacade__factory.createInterface().encodeFunctionData(
        "enableToken",
        [token],
      ),
    };
  }

  encodeDisableToken(token: string): MultiCall {
    if (this.version === 1)
      throw new Error("Multicall is eligible only for version 2");
    return {
      target: this.creditFacade,
      callData:
        ICreditFacadeExtended__factory.createInterface().encodeFunctionData(
          "disableToken",
          [token],
        ),
    };
  }

  static withdrawAllAndUnwrap_Convex(
    address: string,
    claim: boolean,
  ): MultiCall {
    return {
      target: address,
      callData:
        IConvexV1BaseRewardPoolAdapter__factory.createInterface().encodeFunctionData(
          "withdrawAllAndUnwrap",
          [claim],
        ),
    };
  }

  get id(): string {
    return this.address;
  }
}

export class ChartsCreditManagerData {
  readonly id: string;
  readonly address: string;
  readonly underlyingToken: string;
  readonly pool: string;
  readonly isWETH: boolean;

  readonly borrowRate: number;
  readonly borrowRateOld: number;
  readonly borrowRateChange: number;

  readonly minAmount: bigint;
  readonly maxAmount: bigint;
  readonly maxLeverageFactor: number; // for V1 only
  readonly availableLiquidity: bigint;
  readonly version: number;

  readonly feeInterest: number;
  readonly feeLiquidation: number;
  readonly feeLiquidationExpired: number;

  readonly openedAccountsCount: number;
  readonly totalOpenedAccounts: number;
  readonly totalClosedAccounts: number;
  readonly totalRepaidAccounts: number;
  readonly totalLiquidatedAccounts: number;

  readonly totalBorrowed: bigint;
  readonly totalBorrowedOld: bigint;
  readonly totalBorrowedChange: number;

  readonly totalRepaid: bigint;

  readonly totalProfit: bigint;
  readonly totalProfitOld: bigint;
  readonly pnlChange: number;
  readonly totalLosses: bigint;
  readonly totalLossesOld: bigint;

  readonly totalBorrowedInUSD: number;
  readonly totalLossesInUSD: number;
  readonly totalProfitInUSD: number;
  readonly totalRepaidInUSD: number;
  readonly availableLiquidityInUSD: number;
  readonly openedAccountsCountChange: number;
  readonly totalOpenedAccountsChange: number;
  readonly totalClosedAccountsChange: number;
  readonly totalLiquidatedAccountsChange: number;

  readonly liquidationThresholds: Record<string, bigint>;

  constructor(payload: ChartsCreditManagerPayload) {
    this.id = (payload.addr || "").toLowerCase();
    this.address = (payload.addr || "").toLowerCase();
    this.underlyingToken = (payload.underlyingToken || "").toLowerCase();
    this.pool = (payload.poolAddress || "").toLowerCase();
    this.version = payload.version || 2;
    this.isWETH = payload.isWeth || false;

    this.borrowRate = Number(
      (toBigInt(payload.borrowRate || 0) *
        (toBigInt(payload.feeInterest || 0) + PERCENTAGE_FACTOR) *
        PERCENTAGE_DECIMALS) /
        RAY,
    );
    this.borrowRateOld = Number(
      (toBigInt(payload.borrowRateOld || 0) *
        (toBigInt(payload.feeInterest || 0) + PERCENTAGE_FACTOR) *
        PERCENTAGE_DECIMALS) /
        RAY,
    );
    this.borrowRateChange = Number(
      toBigInt(payload.borrowRate10kBasis || 0) * PERCENTAGE_DECIMALS,
    );

    this.maxLeverageFactor = payload.maxLeverageFactor || 0;

    this.feeInterest = payload.feeInterest || 0;
    this.feeLiquidation = payload.feeLiquidation || 0;
    this.feeLiquidationExpired = payload.feeLiquidationExpired || 0;

    this.minAmount = toBigInt(payload.minAmount || 0);
    this.maxAmount = toBigInt(payload.maxAmount || 0);

    this.availableLiquidity = toBigInt(payload.availableLiquidity || 0);
    this.availableLiquidityInUSD = payload.availableLiquidityInUSD || 0;

    this.liquidationThresholds = Object.fromEntries(
      Object.entries(payload.liquidityThresholds || {}).map(([t, tr]) => [
        t.toLowerCase(),
        BigInt(tr),
      ]),
    );

    this.totalBorrowed = toBigInt(payload.totalBorrowed || 0);
    this.totalBorrowedOld = toBigInt(payload.totalBorrowedBIOld || 0);
    this.totalBorrowedInUSD = payload.totalBorrowedInUSD || 0;
    this.totalBorrowedChange = Number(
      toBigInt(payload.totalBorrowedBI10kBasis || 0) * PERCENTAGE_DECIMALS,
    );

    this.totalLosses = toBigInt(payload.totalLosses || 0);
    this.totalLossesOld = toBigInt(payload.totalLossesOld || 0);
    this.totalLossesInUSD = payload.totalLossesInUSD || 0;

    this.totalRepaid = toBigInt(payload.totalRepaid || 0);
    this.totalRepaidInUSD = payload.totalRepaidInUSD || 0;

    this.totalProfit = toBigInt(payload.totalProfit || 0);
    this.totalProfitOld = toBigInt(payload.totalProfitOld || 0);
    this.totalProfitInUSD = payload.totalProfitInUSD || 0;
    this.pnlChange = Number(
      toBigInt(payload.pnl10kBasis || 0) * PERCENTAGE_DECIMALS,
    );

    this.openedAccountsCount = payload.openedAccountsCount || 0;
    this.openedAccountsCountChange = payload.openedAccountsCountChange || 0;

    this.totalOpenedAccounts = payload.totalOpenedAccounts || 0;
    this.totalOpenedAccountsChange = payload.totalOpenedAccountsChange || 0;

    this.totalClosedAccounts = payload.totalClosedAccounts || 0;
    this.totalClosedAccountsChange = payload.totalClosedAccountsChange || 0;

    this.totalRepaidAccounts = payload.totalRepaidAccounts || 0;

    this.totalLiquidatedAccounts = payload.totalLiquidatedAccounts || 0;
    this.totalLiquidatedAccountsChange =
      payload.totalLiquidatedAccountsChange || 0;
  }
}
