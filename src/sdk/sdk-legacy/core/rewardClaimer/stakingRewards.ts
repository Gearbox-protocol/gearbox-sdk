import type { Abi, Address, PublicClient } from "viem";
import { encodeFunctionData } from "viem";

import { iStakingRewardsAdapterAbi } from "../../../abi";
import { ADDRESS_0X0, MULTICALL_ADDRESS } from "../../../constants";
import type { GearboxSDK } from "../../../GearboxSDK";
import type { AdapterContractType } from "../../../market";
import { Protocols } from "../../../sdk-gov-legacy";
import type { PartialRecord } from "../../../utils";
import type { TokenData } from "../../tokens/tokenData";
import { iBaseRewardPoolAbi } from "../../types";
import type { CreditAccountData_Legacy } from "../creditAccount";
import type { CreditManagerData_Legacy } from "../creditManager";
import type { AdapterInfo, Rewards } from ".";

type DistributionList = Array<Array<RewardDistribution>>;
type CallsList = Array<
  Array<{
    address: Address;
    abi: Abi;
    functionName: string;
    args: unknown[];
  }>
>;

export interface RewardDistribution {
  contract: AdapterContractType;
  protocol: Rewards["protocol"];

  rewardToken: Address;
  stakedToken: Address;

  adapter: Address;
  contractAddress: Address;
}

export class StakingRewards {
  static async findRewards(
    ca: CreditAccountData_Legacy,
    provider: PublicClient,

    adapters: Array<AdapterInfo>,
    rewardTokens: Array<Address | undefined>,
    stakedTokens: Array<Address | undefined>,

    tokensList: Record<Address, TokenData>,
  ): Promise<Array<Rewards>> {
    const prepared = StakingRewards.prepareMultiCalls(
      ca.creditAccount,
      adapters,
      rewardTokens,
      stakedTokens,
      tokensList,
    );

    if (!prepared) return [];
    const { calls, distribution } = prepared;

    const callsTotal = calls.flat(1);

    const allCalls = [...callsTotal];
    if (allCalls.length === 0) return [];

    const response = (await provider.multicall({
      allowFailure: false,
      multicallAddress: MULTICALL_ADDRESS,
      contracts: allCalls,
    })) as Array<bigint>;

    const callsEnd = callsTotal.length;
    const callsResponse = response.slice(0, callsEnd);

    const results = StakingRewards.parseResults(callsResponse, distribution);

    return results;
  }

  static getRewardTokenCalls(cm: CreditManagerData_Legacy, sdk: GearboxSDK) {
    const adapters = this.findAdapters(cm, sdk);

    const rewardTokenCalls = adapters.reduce<CallsList>((acc, a) => {
      acc.push([
        {
          address: a.adapter,
          abi: iStakingRewardsAdapterAbi,
          functionName: "rewardsToken",
          args: [],
        },
      ]);

      return acc;
    }, []);

    const tokenCalls = adapters.reduce<CallsList>((acc, a) => {
      acc.push([
        {
          address: a.adapter,
          abi: iStakingRewardsAdapterAbi,
          functionName: "stakedPhantomToken",
          args: [],
        },
      ]);

      return acc;
    }, []);

    return { rewardTokenCalls, tokenCalls, adapters };
  }

  private static findAdapters(cm: CreditManagerData_Legacy, sdk: GearboxSDK) {
    const creditFactory = sdk.marketRegister.findCreditManager(cm.address);
    const adapters = creditFactory.creditManager.adapters
      .values()
      .filter(adapter => {
        const type = adapter.contractType as AdapterContractType;
        return type === "AD_STAKING_REWARDS";
      })
      .map((adapter): AdapterInfo => {
        return {
          adapter: adapter.address.toLowerCase() as Address,
          contractAddress: adapter.targetContract.toLowerCase() as Address,
          contractType: adapter.contractType as AdapterContractType,
          name: adapter.name,
        };
      });

    return adapters;
  }

  static prepareMultiCalls(
    creditAccount: Address,
    adapters: Array<AdapterInfo>,
    rewardTokens: Array<Address | undefined>,
    stakedTokens: Array<Address | undefined>,
    tokensList: Record<Address, TokenData>,
  ) {
    if (adapters.length === 0) return undefined;

    const res = adapters.reduce<{
      distribution: DistributionList;
      calls: CallsList;
    }>(
      (acc, a, i) => {
        const rewardToken = rewardTokens[i]?.toLowerCase() as Address;
        const stakedToken = stakedTokens[i]?.toLowerCase() as Address;

        const currentCalls: CallsList[number] = [];
        const currentDistribution: DistributionList[number] = [];

        if (
          rewardToken &&
          stakedToken &&
          rewardToken !== ADDRESS_0X0 &&
          stakedToken !== ADDRESS_0X0 &&
          tokensList[rewardToken] &&
          tokensList[stakedToken]
        ) {
          // since we generate 1 call above
          currentCalls.push({
            address: a.contractAddress,
            abi: iBaseRewardPoolAbi,
            functionName: "earned",
            args: [creditAccount],
          });
          currentDistribution.push({
            protocol: Protocols.Sky,
            contract: a.contractType,

            rewardToken: rewardToken,
            stakedToken: stakedToken,

            contractAddress: a.contractAddress,
            adapter: a.adapter,
          });

          acc.calls.push(currentCalls);
          acc.distribution.push(currentDistribution);
        }

        return acc;
      },
      {
        distribution: [],
        calls: [],
      },
    );
    return res;
  }

  private static parseResults(
    response: Array<bigint>,
    distribution: DistributionList,
  ): Array<Rewards> {
    const rewardsRecord: PartialRecord<AdapterContractType, Rewards> = {};

    let start = 0;
    distribution.forEach(list => {
      // rewards[]
      const end = start + list.length;
      const rewardsResp = response.slice(start, end);
      start = end;

      if (rewardsResp.length !== list.length) {
        throw new Error(
          `Rewards response length mismatch: expected: ${list.length}, got: ${rewardsResp.length}`,
        );
      }

      const rewardObject = this.getRewardObject(rewardsResp[0] || 0n, list[0]);

      if (rewardObject) rewardsRecord[list[0].contract] = rewardObject;
    });

    const result = Object.values(rewardsRecord);

    return result;
  }

  private static getRewardObject(
    reward: bigint,
    distribution: RewardDistribution,
  ) {
    const callData = encodeFunctionData({
      abi: iBaseRewardPoolAbi,
      functionName: "getReward",
      args: [],
    });

    const base: Rewards = {
      contract: distribution.contract,
      protocol: distribution.protocol,
      stakedToken: distribution.stakedToken,

      rewards: {
        [distribution.rewardToken]: reward,
      },
      calls: [
        {
          target: distribution.adapter,
          callData,
        },
      ],
    };

    if (Object.values(base.rewards).some(r => r > 0)) {
      return base;
    }
    return undefined;
  }
}
