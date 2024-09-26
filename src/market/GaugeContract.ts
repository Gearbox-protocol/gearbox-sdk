import type { Address } from "viem";
import { decodeAbiParameters } from "viem";

import { gaugeV3Abi } from "../abi";
import type { PoolStruct, RateKeeperStruct } from "../base";
import { BaseContract } from "../base";
import type { GearboxSDK } from "../GearboxSDK";
import type { GaugeParams, GaugeState } from "../state";

type abi = typeof gaugeV3Abi;

export class GaugeContract extends BaseContract<abi> {
  state: GaugeState;

  constructor(pool: PoolStruct, gauge: RateKeeperStruct, sdk: GearboxSDK) {
    super({
      sdk,
      address: gauge.baseParams.addr,
      contractType: gauge.baseParams.contractType,
      version: Number(gauge.baseParams.version),
      name: `Gauge(${pool.name})`,
      abi: gaugeV3Abi,
    });

    const [voter, currentEpoch, epochFrozen, gaugeParams] = decodeAbiParameters(
      [
        { name: "voter", type: "address" },
        { name: "currentEpoch", type: "uint256" },
        { name: "epochFrozen", type: "bool" },
        {
          name: "quotaParams",
          type: "tuple[]",
          components: [
            { name: "token", type: "address" },
            { name: "minRate", type: "uint256" },
            { name: "maxRate", type: "uint256" },
            { name: "totalVotesLpSide", type: "uint256" },
            { name: "totalVotesCaSide", type: "uint256" },
          ],
        },
      ],
      gauge.baseParams.serializedParams,
    );

    const rates = Object.fromEntries(gauge.rates.map(r => [r.token, r.rate]));

    const quotaParams: Record<Address, GaugeParams> = {};

    for (const g of gaugeParams) {
      quotaParams[g.token] = {
        minRate: Number(g.minRate),
        maxRate: Number(g.maxRate),
        totalVotesLpSide: Number(g.totalVotesLpSide),
        totalVotesCaSide: Number(g.totalVotesCaSide),
        rate: rates[g.token] ?? 0,
      };
    }

    this.state = {
      address: gauge.baseParams.addr,
      contractType: gauge.baseParams.contractType,
      version: Number(gauge.baseParams.version),
      currentEpoch: Number(currentEpoch),
      epochFrozen,
      quotaParams,
    };
  }
}
