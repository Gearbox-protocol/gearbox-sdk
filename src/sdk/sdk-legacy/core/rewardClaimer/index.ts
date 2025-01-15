import type { Address, PublicClient } from "viem";

import type { NetworkType } from "../../../chain";
import { MULTICALL_ADDRESS } from "../../../constants";
import type { GearboxSDK } from "../../../GearboxSDK";
import type { AdapterContractType } from "../../../market";
import type { Protocols, SupportedToken } from "../../../sdk-gov-legacy";
import type { MultiCall } from "../../../types";
import type { PartialRecord } from "../../../utils";
import type { TokenData } from "../../tokens/tokenData";
import type { CreditAccountData_Legacy } from "../creditAccount";
import type { CreditManagerData_Legacy } from "../creditManager";
import { RewardConvex } from "./rewardConvex";
import { StakingRewards } from "./stakingRewards";

export interface Rewards {
  contract: AdapterContractType;
  protocol: Protocols.Aura | Protocols.Convex | Protocols.Sky;
  stakingToken: Address;

  rewards: Record<Address, bigint>;
  calls: Array<MultiCall>;
}

export interface AdapterInfo {
  contractAddress: Address;
  adapter: Address;

  contractType: AdapterContractType;
  name: string;
}

export class RewardClaimer {
  static async findRewards(
    ca: CreditAccountData_Legacy,
    cm: CreditManagerData_Legacy,
    network: NetworkType,
    provider: PublicClient,
    tokensList: Record<Address, TokenData>,
    currentTokenData: Record<SupportedToken, Address>,
    sdk: GearboxSDK,
  ): Promise<Array<Rewards>> {
    const tokens = await RewardClaimer.findRewardTokens(cm, provider, sdk);

    const [convex, staking] = await Promise.all([
      RewardConvex.findRewards(
        ca,
        cm,
        currentTokenData,
        network,
        provider,
        sdk,

        tokens.convex.adapters,
        tokens.convex.curveTokens,
        tokens.convex.stakingTokens,
      ),

      StakingRewards.findRewards(
        ca,
        provider,
        tokens.staking.adapters,
        tokens.staking.rewardsTokens,
        tokens.staking.stakingTokens,
        tokensList,
      ),
    ]);
    return [...convex, ...staking];
  }

  static async findRewardTokens(
    cm: CreditManagerData_Legacy,
    provider: PublicClient,
    sdk: GearboxSDK,
  ) {
    const {
      rewardTokenCalls,
      tokenCalls: stakingTokenCalls_Sky,
      adapters: stakingAdapters,
    } = StakingRewards.getRewardTokenCalls(cm, sdk);

    const rewardCallsTotal_Sky = rewardTokenCalls.flat(1);
    const stakingCallsTotal_Sky = stakingTokenCalls_Sky.flat(1);

    const {
      stakingTokenCalls: stakingTokenCalls_Convex,
      curveTokenCalls,
      adapters: convexAdapters,
    } = RewardConvex.getRewardTokenCalls(cm, sdk);

    const stakingCallsTotal_Convex = stakingTokenCalls_Convex.flat(1);
    const curveCallsTotal_Convex = curveTokenCalls.flat(1);

    const response = await provider.multicall({
      allowFailure: true,
      multicallAddress: MULTICALL_ADDRESS,
      contracts: [
        ...rewardCallsTotal_Sky,
        ...stakingCallsTotal_Sky,
        ...stakingCallsTotal_Convex,
        ...curveCallsTotal_Convex,
      ],
    });

    const rewardTokensEnd_Sky = rewardCallsTotal_Sky.length;
    const rewardTokensResponse_Sky = response.slice(0, rewardTokensEnd_Sky);

    const stakingTokensEnd_Sky =
      rewardTokensEnd_Sky + stakingCallsTotal_Sky.length;
    const stakingTokensResponse_Sky = response.slice(
      rewardTokensEnd_Sky,
      stakingTokensEnd_Sky,
    );

    const stakingTokensEnd_Convex =
      stakingTokensEnd_Sky + stakingCallsTotal_Convex.length;
    const stakingTokensResponse_Convex = response.slice(
      stakingTokensEnd_Sky,
      stakingTokensEnd_Convex,
    );

    const curveTokenEnd_Convex =
      stakingTokensEnd_Convex + curveCallsTotal_Convex.length;
    const curveTokenResponse_Convex = response.slice(
      stakingTokensEnd_Convex,
      curveTokenEnd_Convex,
    );

    return {
      staking: {
        adapters: stakingAdapters,
        rewardsTokens: rewardTokensResponse_Sky.map(
          r => r?.result as Address | undefined,
        ),
        stakingTokens: stakingTokensResponse_Sky.map(
          r => r?.result as Address | undefined,
        ),
      },
      convex: {
        adapters: convexAdapters,
        curveTokens: curveTokenResponse_Convex.map(
          r => r?.result as Address | undefined,
        ),
        stakingTokens: stakingTokensResponse_Convex.map(
          r => r?.result as Address | undefined,
        ),
      },
    };
  }
}
