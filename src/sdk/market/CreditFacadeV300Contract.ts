import type {
  Address,
  ContractEventName,
  DecodeFunctionDataReturnType,
  Log,
} from "viem";
import { encodeFunctionData } from "viem";

import { creditFacadeV3Abi, iCreditFacadeV3MulticallAbi } from "../abi";
import { BaseContract, type CreditManagerData } from "../base";
import { ADDRESS_0X0 } from "../constants";
import type { GearboxSDK } from "../GearboxSDK";
import type { CreditFacadeState } from "../state";
import type { MultiCall, RawTx } from "../types";
import { fmtBinaryMask } from "../utils";
import type { OnDemandPriceUpdate } from "./PriceOracleContract";

type abi = typeof creditFacadeV3Abi;

export class CreditFacadeV300Contract extends BaseContract<abi> {
  public readonly state: CreditFacadeState;

  constructor(
    sdk: GearboxSDK,
    { creditFacade, creditManager }: CreditManagerData,
  ) {
    super(sdk, {
      ...creditFacade.baseParams,
      name: `CreditFacadeV3(${creditManager.name})`,
      // Add multicall strictly for parsing, but use only creditFacadeV3Abi in types, so only this part is visible to typescript elsewhere
      abi: [...creditFacadeV3Abi, ...iCreditFacadeV3MulticallAbi] as any,
    });

    this.state = {
      ...this.contractData,
      maxQuotaMultiplier: Number(creditFacade.maxQuotaMultiplier),
      expirable: creditFacade.expirable,
      isDegenMode: creditFacade.degenNFT !== ADDRESS_0X0,
      degenNFT: creditFacade.degenNFT,
      expirationDate: Number(creditFacade.expirationDate),
      maxDebtPerBlockMultiplier: Number(creditFacade.maxDebtPerBlockMultiplier),
      botList: creditFacade.botList,
      minDebt: creditFacade.minDebt,
      maxDebt: creditFacade.maxDebt,
      currentCumulativeLoss: 0n,
      maxCumulativeLoss: 0n,
      forbiddenTokenMask: creditFacade.forbiddenTokenMask,
      isPaused: creditFacade.isPaused,
    };
  }

  public override processLog(
    log: Log<
      bigint,
      number,
      false,
      undefined,
      undefined,
      abi,
      ContractEventName<abi>
    >,
  ): void {
    switch (log.eventName) {
      case "AddCollateral":
      case "CloseCreditAccount":
      case "DecreaseDebt":
      case "Execute":
      case "FinishMultiCall":
      case "IncreaseDebt":
      case "LiquidateCreditAccount":
      case "NewController":
      case "OpenCreditAccount":
      case "Paused":
      case "StartMultiCall":
      case "Unpaused":
      case "WithdrawCollateral":
        this.dirty = true;
        break;
    }
  }

  public encodeOnDemandPriceUpdates(
    updates: OnDemandPriceUpdate[],
  ): MultiCall[] {
    return updates.map(u => ({
      target: this.address,
      callData: encodeFunctionData({
        abi: iCreditFacadeV3MulticallAbi,
        functionName: "onDemandPriceUpdate",
        args: [u.token, u.reserve, u.data],
      }),
    }));
  }

  public liquidateCreditAccount(
    ca: Address,
    to: Address,
    calls: MultiCall[],
  ): RawTx {
    return this.createRawTx({
      functionName: "liquidateCreditAccount",
      args: [ca, to, calls],
    });
  }

  public closeCreditAccount(ca: Address, calls: MultiCall[]): RawTx {
    return this.createRawTx({
      functionName: "closeCreditAccount",
      args: [ca, calls],
    });
  }

  public multicall(ca: Address, calls: MultiCall[]): RawTx {
    return this.createRawTx({
      functionName: "multicall",
      args: [ca, calls],
    });
  }

  public parseFunctionParams(
    params: DecodeFunctionDataReturnType<abi>,
  ): string[] | undefined {
    switch (params.functionName) {
      case "openCreditAccount": {
        const [onBehalfOf, calls, referralCode] = params.args;
        return [
          this.addressLabels.get(onBehalfOf),
          this.sdk.parseMultiCall([...calls]).join(","),
          `${referralCode}`,
        ];
      }
      case "closeCreditAccount": {
        const [creditAccount, calls] = params.args;
        return [
          this.addressLabels.get(creditAccount),
          this.sdk.parseMultiCall([...calls]).join(","),
        ];
      }
      case "liquidateCreditAccount": {
        const [creditAccount, to, calls] = params.args;
        return [
          this.addressLabels.get(creditAccount),
          this.addressLabels.get(to),
          this.sdk.parseMultiCall([...calls]).join(","),
        ];
      }
      case "setBotPermissions": {
        const [creditAccount, bot, permissions] = params.args;
        return [
          this.addressLabels.get(creditAccount),
          this.addressLabels.get(bot),
          fmtBinaryMask(permissions),
        ];
      }

      default:
        return undefined;
    }
  }
}
