import type { ContractEventName, Log } from "viem";

import { poolQuotaKeeperV3Abi } from "../abi";
import { BaseContract } from "../base";
import type { PoolData, PoolQuotaKeeperData } from "../base/types";
import type { GearboxSDK } from "../GearboxSDK";
import type { PoolQuotaKeeperState } from "../state/poolState";

type abi = typeof poolQuotaKeeperV3Abi;

export class PoolQuotaKeeperContract extends BaseContract<abi> {
  public readonly decimals: number;
  public readonly state: PoolQuotaKeeperState;

  constructor(sdk: GearboxSDK, pool: PoolData, pqk: PoolQuotaKeeperData) {
    super(sdk, {
      ...pqk.baseParams,
      name: `PoolQuotaKeeper(${pool.name})`,
      abi: poolQuotaKeeperV3Abi,
    });

    this.decimals = sdk.marketRegister.tokensMeta.mustGet(
      pool.underlying,
    ).decimals;

    this.state = {
      ...this.contractData,
      quotas: Object.fromEntries(
        pqk.quotas.map(q => {
          return [q.token, q];
        }),
      ),
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
      case "AddCreditManager":
      case "AddQuotaToken":
      case "NewController":
      case "Paused":
      case "SetGauge":
      case "SetQuotaIncreaseFee":
      case "SetTokenLimit":
      case "Unpaused":
      case "UpdateQuota":
      case "UpdateTokenQuotaRate":
        this.dirty = true;
        break;
    }
  }
}
