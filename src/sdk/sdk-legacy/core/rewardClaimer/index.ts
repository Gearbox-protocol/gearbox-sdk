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
  stakedToken: Address;

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
      RewardConvex.findRewards(ca, cm, currentTokenData, network, provider),

      StakingRewards.findRewards(
        ca,
        provider,
        tokens.staking.adapters,
        tokens.staking.rewardsTokens,
        tokens.staking.stakedTokens,
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
      tokenCalls,
      adapters: stakingAdapters,
    } = StakingRewards.getRewardTokenCalls(cm, sdk);

    const rewardCallsTotal = rewardTokenCalls.flat(1);
    const tokenCallsTotal = tokenCalls.flat(1);

    const response = await provider.multicall({
      allowFailure: true,
      multicallAddress: MULTICALL_ADDRESS,
      contracts: [...rewardCallsTotal, ...tokenCallsTotal],
    });

    const stakingRewardTokensEnd = rewardCallsTotal.length;
    const stakingRewardTokensResponse = response.slice(
      0,
      stakingRewardTokensEnd,
    );

    const stakingTokensEnd = stakingRewardTokensEnd + tokenCallsTotal.length;
    const stakingTokensResponse = response.slice(
      stakingRewardTokensEnd,
      stakingTokensEnd,
    );

    return {
      staking: {
        adapters: stakingAdapters,
        rewardsTokens: stakingRewardTokensResponse.map(
          r => r?.result as Address | undefined,
        ),
        stakedTokens: stakingTokensResponse.map(
          r => r?.result as Address | undefined,
        ),
      },
    };
  }
}
