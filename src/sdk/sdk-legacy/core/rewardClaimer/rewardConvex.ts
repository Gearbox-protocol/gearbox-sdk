import type { Abi, Address, PublicClient } from "viem";
import { encodeFunctionData } from "viem";

import { convexV1BaseRewardPoolAdapterAbi } from "../../../abi";
import type { NetworkType } from "../../../chain";
import { ADDRESS_0X0, MULTICALL_ADDRESS } from "../../../constants";
import type { GearboxSDK } from "../../../GearboxSDK";
import type { AdapterContractType } from "../../../market";
import type {
  AuraPoolParams,
  ContractParams,
  ConvexPoolParams,
  SupportedContract,
  SupportedToken,
} from "../../../sdk-gov-legacy";
import {
  AdapterInterface,
  contractParams,
  contractsByAddress,
  contractsByNetwork,
  Protocols,
} from "../../../sdk-gov-legacy";
import type { PartialRecord } from "../../../utils";
import { TypedObjectUtils } from "../../../utils";
import type { TokenData } from "../../tokens/tokenData";
import { iBaseRewardPoolAbi, iConvexTokenAbi } from "../../types";
import type { CreditAccountData_Legacy } from "../creditAccount";
import type { CreditManagerData_Legacy } from "../creditManager";
import type { AdapterInfo, Rewards } from ".";
import { getAURAMintAmount } from "./aura";
import { AURA_BOOSTER_ABI } from "./auraAbi";
import { getCVXMintAmount } from "./convex";

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

interface ParseProps {
  convexResponse: Array<bigint>;
  convexDistribution: DistributionList;
  convexTotalSupply: bigint;

  auraResponse: Array<bigint>;
  auraDistribution: DistributionList;
  auraTotalSupply: bigint;
}

// convex[totalSupply, ...tokens] aura[totalSupply, multiplier, ...tokens]
export class RewardConvex {
  static async findRewards(
    ca: CreditAccountData_Legacy,
    currentTokenData: Record<SupportedToken, Address>,
    provider: PublicClient,

    adapters: Array<AdapterInfo>,
    curveTokens: Array<Address | undefined>,
    stakedTokens: Array<Address | undefined>,
  ): Promise<Array<Rewards>> {
    const prepared = RewardConvex.prepareMultiCalls(
      ca.creditAccount,
      adapters,
      curveTokens,
      stakedTokens,
      currentTokenData,
    );

    if (!prepared) return [];
    const { auraCalls, auraDistribution, convexCalls, convexDistribution } =
      prepared;

    const auraTotal = auraCalls.flat(1);
    const convexTotal = convexCalls.flat(1);

    const allCalls = [...auraTotal, ...convexTotal];
    if (allCalls.length === 0) return [];

    const response = (await provider.multicall({
      allowFailure: false,
      multicallAddress: MULTICALL_ADDRESS,
      contracts: allCalls,
    })) as Array<bigint>;

    const auraEnd = auraTotal.length;
    const [auraTotalSupply, ...auraResponse] = response.slice(0, auraEnd);

    const convexEnd = auraEnd + convexTotal.length;
    const [convexTotalSupply, ...convexResponse] = response.slice(
      auraEnd,
      convexEnd,
    );

    const results = RewardConvex.parseResults({
      auraDistribution,
      auraResponse,
      auraTotalSupply: auraTotalSupply,

      convexDistribution,
      convexResponse,
      convexTotalSupply: convexTotalSupply,
    });

    return results;
  }

  static findAdapters(cm: CreditManagerData_Legacy, sdk: GearboxSDK) {
    const creditFactory = sdk.marketRegister.findCreditManager(cm.address);

    const adapters = creditFactory.creditManager.adapters
      .values()
      .filter(adapter => {
        const type = adapter.contractType as AdapterContractType;
        return type === "AD_CONVEX_V1_BASE_REWARD_POOL";
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

  static getRewardTokenCalls(cm: CreditManagerData_Legacy, sdk: GearboxSDK) {
    const adapters = this.findAdapters(cm, sdk);

    const stakingTokenCalls = adapters.reduce<CallsList>((acc, a) => {
      acc.push([
        {
          address: a.adapter,
          abi: convexV1BaseRewardPoolAdapterAbi,
          functionName: "stakedPhantomToken",
          args: [],
        },
      ]);

      return acc;
    }, []);

    const curveTokenCalls = adapters.reduce<CallsList>((acc, a) => {
      acc.push([
        {
          address: a.adapter,
          abi: convexV1BaseRewardPoolAdapterAbi,
          functionName: "curveLPtoken",
          args: [],
        },
      ]);

      return acc;
    }, []);

    return { stakingTokenCalls, curveTokenCalls, adapters };
  }

  static prepareMultiCalls(
    creditAccount: Address,
    adapters: Array<AdapterInfo>,
    curveTokens: Array<Address | undefined>,
    stakedTokens: Array<Address | undefined>,

    currentTokenData: Record<SupportedToken, Address>,
    tokensList: Record<`0x${string}`, TokenData>,
  ) {
    if (adapters.length === 0) return undefined;

    const res = adapters.reduce<{
      convexDistribution: DistributionList;
      auraDistribution: DistributionList;

      convexCalls: CallsList;
      auraCalls: CallsList;
    }>(
      (acc, a, i) => {
        const curveToken = curveTokens[i]?.toLowerCase() as Address;
        const stakedToken = stakedTokens[i]?.toLowerCase() as Address;

        const protocol = this.getProtocol(curveToken, currentTokenData);

        if (
          !protocol ||
          curveToken === ADDRESS_0X0 ||
          stakedToken === ADDRESS_0X0 ||
          !tokensList[curveToken || ""] ||
          !tokensList[stakedToken || ""]
        )
          return acc;

        const currentCalls: CallsList[number] = [
          ...(protocol === Protocols.Aura
            ? [
                {
                  address: contracts.AURA_BOOSTER,
                  abi: AURA_BOOSTER_ABI,
                  functionName: "getRewardMultipliers",
                  args: [currentTokenData[currentContract.stakedToken]],
                },
              ]
            : []),
        ];
        const currentDistribution: DistributionList[number] = [];

        currentCalls.push({
          address: a.contractAddress,
          abi: iBaseRewardPoolAbi,
          functionName: "earned",
          args: [creditAccount],
        });
        currentDistribution.push({
          protocol: protocol,
          contract: a.contractType,

          rewardToken: curveToken,
          stakedToken: stakedToken,

          contractAddress: a.contractAddress,
          adapter: a.adapter,
        });

        currentContract.extraRewards.forEach(extra => {
          currentCalls.push({
            address: extra.poolAddress[network],
            abi: iBaseRewardPoolAbi,
            functionName: "earned",
            args: [creditAccount],
          });

          currentDistribution.push({
            protocol: protocol,
            contract: a.contract,
            token: extra.rewardToken,

            contractAddress: a.contractAddress,
            adapter: a.adapter,
          });
        });

        if (protocol === Protocols.Aura) {
          acc.auraCalls.push(currentCalls);
          acc.auraDistribution.push(currentDistribution);
        } else if (protocol === Protocols.Convex) {
          acc.convexCalls.push(currentCalls);
          acc.convexDistribution.push(currentDistribution);
        }

        return acc;
      },
      {
        convexDistribution: [],
        auraDistribution: [],
        convexCalls: [
          [
            {
              address: currentTokenData.CVX,
              abi: iConvexTokenAbi,
              functionName: "totalSupply",
              args: [],
            },
          ],
        ],
        auraCalls: [
          [
            {
              address: currentTokenData.AURA,
              abi: iConvexTokenAbi,
              functionName: "totalSupply",
              args: [],
            },
          ],
        ],
      },
    );
    return res;
  }

  static parseResults({
    convexDistribution,
    convexResponse,
    convexTotalSupply,

    auraDistribution,
    auraResponse,
    auraTotalSupply,
  }: ParseProps): Array<Rewards> {
    const callData = encodeFunctionData({
      abi: iBaseRewardPoolAbi,
      functionName: "getReward",
      args: [],
    });

    const rewardsRecord: PartialRecord<SupportedContract, Rewards> = {};

    let start = 0;
    convexDistribution.forEach(list => {
      // rewards[]
      const end = start + list.length;
      const [baseRewardResp, ...rewardsResp] = convexResponse.slice(start, end);
      start = end;

      const [baseDistribution, ...extraDistribution] = list;

      const boostedRewardToken = this.getBBoostedRewardToken(
        baseDistribution.protocol,
      );

      if (
        rewardsResp.length !== extraDistribution.length ||
        baseRewardResp === undefined
      ) {
        throw new Error(
          `Rewards response length mismatch: expected: ${extraDistribution.length}, got: ${rewardsResp.length}`,
        );
      }
      if (!boostedRewardToken) {
        throw new Error(
          `Unknown rewards protocol: ${baseDistribution.protocol}`,
        );
      }

      // create base
      const rewardObject = this.getRewardObject(
        baseRewardResp || 0n,
        baseDistribution,
        boostedRewardToken,

        extraDistribution,
        rewardsResp,

        convexTotalSupply,
        callData,
        0n,
      );

      if (rewardObject) rewardsRecord[baseDistribution.contract] = rewardObject;
    });

    start = 0;
    auraDistribution.forEach(list => {
      // multiplier + rewards[]
      const end = start + list.length + 1;
      const [mp, baseRewardResp, ...rewardsResp] = auraResponse.slice(
        start,
        end,
      );
      start = end;

      const multiplier = mp;
      const [baseDistribution, ...extraDistribution] = list;

      const boostedRewardToken = this.getBBoostedRewardToken(
        baseDistribution.protocol,
      );

      if (
        rewardsResp.length !== extraDistribution.length ||
        mp === undefined ||
        baseRewardResp === undefined
      ) {
        throw new Error(
          `Rewards response length mismatch: expected: ${extraDistribution.length}, got: ${rewardsResp.length}`,
        );
      }
      if (!boostedRewardToken) {
        throw new Error(
          `Unknown rewards protocol: ${baseDistribution.protocol}`,
        );
      }

      // create base
      const rewardObject = this.getRewardObject(
        baseRewardResp || 0n,
        baseDistribution,
        boostedRewardToken,

        extraDistribution,
        rewardsResp,

        auraTotalSupply,
        callData,
        multiplier,
      );

      if (rewardObject) rewardsRecord[baseDistribution.contract] = rewardObject;
    });

    const result = Object.values(rewardsRecord);

    return result;
  }

  static getRewardObject(
    baseReward: bigint,
    baseDistribution: RewardDistribution,
    boostedRewardToken: SupportedToken,

    extraDistribution: Array<RewardDistribution>,
    rewardsResp: Array<bigint>,

    totalSupply: bigint,
    callData: Address,
    multiplier: bigint,
  ) {
    // create base
    const base: Rewards = {
      contract: baseDistribution.contract,
      protocol: baseDistribution.protocol,
      rewards: {
        [baseDistribution.token]: baseReward,
      },
      calls: [
        {
          target: baseDistribution.adapter,
          callData,
        },
      ],
    };

    // add boosted
    const boostedReward =
      baseDistribution.protocol === Protocols.Aura
        ? getAURAMintAmount(baseReward, totalSupply, multiplier)
        : getCVXMintAmount(baseReward, totalSupply);
    base.rewards = {
      ...base.rewards,
      [boostedRewardToken]: boostedReward,
    };

    // extra
    extraDistribution.forEach((distribution, j) => {
      const token = distribution.token;
      const prevReward = base.rewards[token] || 0n;
      const reward = rewardsResp[j] || 0n;

      base.rewards = {
        ...base.rewards,
        [token]: prevReward + reward,
      };
    });

    if (Object.values(base.rewards).some(r => r > 0)) {
      return base;
    }
    return undefined;
  }

  static getProtocol(
    convexToken: Address | undefined,
    currentTokenData: Record<SupportedToken, Address>,
  ): Protocols.Aura | Protocols.Convex | undefined {
    if (!convexToken) return undefined;
    return convexToken.toLowerCase() === currentTokenData.BAL
      ? Protocols.Aura
      : convexToken.toLowerCase() === currentTokenData.CRV
        ? Protocols.Convex
        : undefined;
  }
  static getBBoostedRewardToken(
    protocol: Protocols,
  ): SupportedToken | undefined {
    return protocol === Protocols.Aura
      ? "AURA"
      : protocol === Protocols.Convex
        ? "CVX"
        : undefined;
  }
}
