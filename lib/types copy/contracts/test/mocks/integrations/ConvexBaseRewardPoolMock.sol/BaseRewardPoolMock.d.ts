import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../../common";
export interface BaseRewardPoolMockInterface extends utils.Interface {
    functions: {
        "addExtraReward(address)": FunctionFragment;
        "addRewardAmount(uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "clearExtraRewards()": FunctionFragment;
        "currentRewards()": FunctionFragment;
        "donate(uint256)": FunctionFragment;
        "duration()": FunctionFragment;
        "earned(address)": FunctionFragment;
        "extraRewards(uint256)": FunctionFragment;
        "extraRewardsLength()": FunctionFragment;
        "getReward()": FunctionFragment;
        "getReward(address,bool)": FunctionFragment;
        "historicalRewards()": FunctionFragment;
        "lastTimeRewardApplicable()": FunctionFragment;
        "lastUpdateTime()": FunctionFragment;
        "newRewardRatio()": FunctionFragment;
        "operator()": FunctionFragment;
        "periodFinish()": FunctionFragment;
        "pid()": FunctionFragment;
        "queueNewRewards(uint256)": FunctionFragment;
        "queuedRewards()": FunctionFragment;
        "rewardManager()": FunctionFragment;
        "rewardPerToken()": FunctionFragment;
        "rewardPerTokenStored()": FunctionFragment;
        "rewardRate()": FunctionFragment;
        "rewardToken()": FunctionFragment;
        "rewards(address)": FunctionFragment;
        "stake(uint256)": FunctionFragment;
        "stakeAll()": FunctionFragment;
        "stakeFor(address,uint256)": FunctionFragment;
        "stakingToken()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "userRewardPerTokenPaid(address)": FunctionFragment;
        "withdraw(uint256,bool)": FunctionFragment;
        "withdrawAll(bool)": FunctionFragment;
        "withdrawAllAndUnwrap(bool)": FunctionFragment;
        "withdrawAndUnwrap(uint256,bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addExtraReward" | "addRewardAmount" | "balanceOf" | "clearExtraRewards" | "currentRewards" | "donate" | "duration" | "earned" | "extraRewards" | "extraRewardsLength" | "getReward()" | "getReward(address,bool)" | "historicalRewards" | "lastTimeRewardApplicable" | "lastUpdateTime" | "newRewardRatio" | "operator" | "periodFinish" | "pid" | "queueNewRewards" | "queuedRewards" | "rewardManager" | "rewardPerToken" | "rewardPerTokenStored" | "rewardRate" | "rewardToken" | "rewards" | "stake" | "stakeAll" | "stakeFor" | "stakingToken" | "totalSupply" | "userRewardPerTokenPaid" | "withdraw" | "withdrawAll" | "withdrawAllAndUnwrap" | "withdrawAndUnwrap"): FunctionFragment;
    encodeFunctionData(functionFragment: "addExtraReward", values: [string]): string;
    encodeFunctionData(functionFragment: "addRewardAmount", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "clearExtraRewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "currentRewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "donate", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "duration", values?: undefined): string;
    encodeFunctionData(functionFragment: "earned", values: [string]): string;
    encodeFunctionData(functionFragment: "extraRewards", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "extraRewardsLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "getReward()", values?: undefined): string;
    encodeFunctionData(functionFragment: "getReward(address,bool)", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "historicalRewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "lastTimeRewardApplicable", values?: undefined): string;
    encodeFunctionData(functionFragment: "lastUpdateTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "newRewardRatio", values?: undefined): string;
    encodeFunctionData(functionFragment: "operator", values?: undefined): string;
    encodeFunctionData(functionFragment: "periodFinish", values?: undefined): string;
    encodeFunctionData(functionFragment: "pid", values?: undefined): string;
    encodeFunctionData(functionFragment: "queueNewRewards", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "queuedRewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardPerToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardPerTokenStored", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewards", values: [string]): string;
    encodeFunctionData(functionFragment: "stake", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "stakeAll", values?: undefined): string;
    encodeFunctionData(functionFragment: "stakeFor", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "stakingToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "userRewardPerTokenPaid", values: [string]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "withdrawAll", values: [boolean]): string;
    encodeFunctionData(functionFragment: "withdrawAllAndUnwrap", values: [boolean]): string;
    encodeFunctionData(functionFragment: "withdrawAndUnwrap", values: [BigNumberish, boolean]): string;
    decodeFunctionResult(functionFragment: "addExtraReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addRewardAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "clearExtraRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "donate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "duration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "earned", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "extraRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "extraRewardsLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReward()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReward(address,bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "historicalRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastTimeRewardApplicable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastUpdateTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "newRewardRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "operator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "periodFinish", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pid", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queueNewRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queuedRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardPerToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardPerTokenStored", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakeAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakeFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakingToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userRewardPerTokenPaid", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawAllAndUnwrap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawAndUnwrap", data: BytesLike): Result;
    events: {
        "Mock_BaseRewardPaid(uint256,address,uint256)": EventFragment;
        "Mock_BaseStaked(uint256,address,uint256)": EventFragment;
        "Mock_BaseWithdrawn(uint256,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Mock_BaseRewardPaid"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Mock_BaseStaked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Mock_BaseWithdrawn"): EventFragment;
}
export interface Mock_BaseRewardPaidEventObject {
    index: BigNumber;
    user: string;
    reward: BigNumber;
}
export declare type Mock_BaseRewardPaidEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], Mock_BaseRewardPaidEventObject>;
export declare type Mock_BaseRewardPaidEventFilter = TypedEventFilter<Mock_BaseRewardPaidEvent>;
export interface Mock_BaseStakedEventObject {
    index: BigNumber;
    user: string;
    amount: BigNumber;
}
export declare type Mock_BaseStakedEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], Mock_BaseStakedEventObject>;
export declare type Mock_BaseStakedEventFilter = TypedEventFilter<Mock_BaseStakedEvent>;
export interface Mock_BaseWithdrawnEventObject {
    index: BigNumber;
    user: string;
    amount: BigNumber;
}
export declare type Mock_BaseWithdrawnEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], Mock_BaseWithdrawnEventObject>;
export declare type Mock_BaseWithdrawnEventFilter = TypedEventFilter<Mock_BaseWithdrawnEvent>;
export interface BaseRewardPoolMock extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BaseRewardPoolMockInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        addExtraReward(_reward: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addRewardAmount(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        clearExtraRewards(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        currentRewards(overrides?: CallOverrides): Promise<[BigNumber]>;
        donate(_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        duration(overrides?: CallOverrides): Promise<[BigNumber]>;
        earned(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        extraRewards(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        extraRewardsLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        "getReward()"(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "getReward(address,bool)"(_account: string, _claimExtras: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        historicalRewards(overrides?: CallOverrides): Promise<[BigNumber]>;
        lastTimeRewardApplicable(overrides?: CallOverrides): Promise<[BigNumber]>;
        lastUpdateTime(overrides?: CallOverrides): Promise<[BigNumber]>;
        newRewardRatio(overrides?: CallOverrides): Promise<[BigNumber]>;
        operator(overrides?: CallOverrides): Promise<[string]>;
        periodFinish(overrides?: CallOverrides): Promise<[BigNumber]>;
        pid(overrides?: CallOverrides): Promise<[BigNumber]>;
        queueNewRewards(_rewards: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        queuedRewards(overrides?: CallOverrides): Promise<[BigNumber]>;
        rewardManager(overrides?: CallOverrides): Promise<[string]>;
        rewardPerToken(overrides?: CallOverrides): Promise<[BigNumber]>;
        rewardPerTokenStored(overrides?: CallOverrides): Promise<[BigNumber]>;
        rewardRate(overrides?: CallOverrides): Promise<[BigNumber]>;
        rewardToken(overrides?: CallOverrides): Promise<[string]>;
        rewards(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        stake(_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stakeAll(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stakeFor(_for: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stakingToken(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        userRewardPerTokenPaid(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        withdraw(amount: BigNumberish, claim: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawAll(claim: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawAllAndUnwrap(claim: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawAndUnwrap(amount: BigNumberish, claim: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    addExtraReward(_reward: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addRewardAmount(amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    clearExtraRewards(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    currentRewards(overrides?: CallOverrides): Promise<BigNumber>;
    donate(_amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    duration(overrides?: CallOverrides): Promise<BigNumber>;
    earned(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    extraRewards(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    extraRewardsLength(overrides?: CallOverrides): Promise<BigNumber>;
    "getReward()"(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "getReward(address,bool)"(_account: string, _claimExtras: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    historicalRewards(overrides?: CallOverrides): Promise<BigNumber>;
    lastTimeRewardApplicable(overrides?: CallOverrides): Promise<BigNumber>;
    lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;
    newRewardRatio(overrides?: CallOverrides): Promise<BigNumber>;
    operator(overrides?: CallOverrides): Promise<string>;
    periodFinish(overrides?: CallOverrides): Promise<BigNumber>;
    pid(overrides?: CallOverrides): Promise<BigNumber>;
    queueNewRewards(_rewards: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    queuedRewards(overrides?: CallOverrides): Promise<BigNumber>;
    rewardManager(overrides?: CallOverrides): Promise<string>;
    rewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;
    rewardPerTokenStored(overrides?: CallOverrides): Promise<BigNumber>;
    rewardRate(overrides?: CallOverrides): Promise<BigNumber>;
    rewardToken(overrides?: CallOverrides): Promise<string>;
    rewards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    stake(_amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stakeAll(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stakeFor(_for: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stakingToken(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    userRewardPerTokenPaid(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    withdraw(amount: BigNumberish, claim: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawAll(claim: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawAllAndUnwrap(claim: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawAndUnwrap(amount: BigNumberish, claim: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addExtraReward(_reward: string, overrides?: CallOverrides): Promise<boolean>;
        addRewardAmount(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        clearExtraRewards(overrides?: CallOverrides): Promise<void>;
        currentRewards(overrides?: CallOverrides): Promise<BigNumber>;
        donate(_amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        duration(overrides?: CallOverrides): Promise<BigNumber>;
        earned(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        extraRewards(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        extraRewardsLength(overrides?: CallOverrides): Promise<BigNumber>;
        "getReward()"(overrides?: CallOverrides): Promise<boolean>;
        "getReward(address,bool)"(_account: string, _claimExtras: boolean, overrides?: CallOverrides): Promise<boolean>;
        historicalRewards(overrides?: CallOverrides): Promise<BigNumber>;
        lastTimeRewardApplicable(overrides?: CallOverrides): Promise<BigNumber>;
        lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;
        newRewardRatio(overrides?: CallOverrides): Promise<BigNumber>;
        operator(overrides?: CallOverrides): Promise<string>;
        periodFinish(overrides?: CallOverrides): Promise<BigNumber>;
        pid(overrides?: CallOverrides): Promise<BigNumber>;
        queueNewRewards(_rewards: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        queuedRewards(overrides?: CallOverrides): Promise<BigNumber>;
        rewardManager(overrides?: CallOverrides): Promise<string>;
        rewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;
        rewardPerTokenStored(overrides?: CallOverrides): Promise<BigNumber>;
        rewardRate(overrides?: CallOverrides): Promise<BigNumber>;
        rewardToken(overrides?: CallOverrides): Promise<string>;
        rewards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        stake(_amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        stakeAll(overrides?: CallOverrides): Promise<boolean>;
        stakeFor(_for: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        stakingToken(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        userRewardPerTokenPaid(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(amount: BigNumberish, claim: boolean, overrides?: CallOverrides): Promise<boolean>;
        withdrawAll(claim: boolean, overrides?: CallOverrides): Promise<void>;
        withdrawAllAndUnwrap(claim: boolean, overrides?: CallOverrides): Promise<void>;
        withdrawAndUnwrap(amount: BigNumberish, claim: boolean, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "Mock_BaseRewardPaid(uint256,address,uint256)"(index?: BigNumberish | null, user?: string | null, reward?: null): Mock_BaseRewardPaidEventFilter;
        Mock_BaseRewardPaid(index?: BigNumberish | null, user?: string | null, reward?: null): Mock_BaseRewardPaidEventFilter;
        "Mock_BaseStaked(uint256,address,uint256)"(index?: BigNumberish | null, user?: string | null, amount?: null): Mock_BaseStakedEventFilter;
        Mock_BaseStaked(index?: BigNumberish | null, user?: string | null, amount?: null): Mock_BaseStakedEventFilter;
        "Mock_BaseWithdrawn(uint256,address,uint256)"(index?: BigNumberish | null, user?: string | null, amount?: null): Mock_BaseWithdrawnEventFilter;
        Mock_BaseWithdrawn(index?: BigNumberish | null, user?: string | null, amount?: null): Mock_BaseWithdrawnEventFilter;
    };
    estimateGas: {
        addExtraReward(_reward: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addRewardAmount(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        clearExtraRewards(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        currentRewards(overrides?: CallOverrides): Promise<BigNumber>;
        donate(_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        duration(overrides?: CallOverrides): Promise<BigNumber>;
        earned(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        extraRewards(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        extraRewardsLength(overrides?: CallOverrides): Promise<BigNumber>;
        "getReward()"(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "getReward(address,bool)"(_account: string, _claimExtras: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        historicalRewards(overrides?: CallOverrides): Promise<BigNumber>;
        lastTimeRewardApplicable(overrides?: CallOverrides): Promise<BigNumber>;
        lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;
        newRewardRatio(overrides?: CallOverrides): Promise<BigNumber>;
        operator(overrides?: CallOverrides): Promise<BigNumber>;
        periodFinish(overrides?: CallOverrides): Promise<BigNumber>;
        pid(overrides?: CallOverrides): Promise<BigNumber>;
        queueNewRewards(_rewards: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        queuedRewards(overrides?: CallOverrides): Promise<BigNumber>;
        rewardManager(overrides?: CallOverrides): Promise<BigNumber>;
        rewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;
        rewardPerTokenStored(overrides?: CallOverrides): Promise<BigNumber>;
        rewardRate(overrides?: CallOverrides): Promise<BigNumber>;
        rewardToken(overrides?: CallOverrides): Promise<BigNumber>;
        rewards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        stake(_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stakeAll(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stakeFor(_for: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stakingToken(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        userRewardPerTokenPaid(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(amount: BigNumberish, claim: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawAll(claim: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawAllAndUnwrap(claim: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawAndUnwrap(amount: BigNumberish, claim: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addExtraReward(_reward: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addRewardAmount(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        clearExtraRewards(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        currentRewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        donate(_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        duration(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        earned(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        extraRewards(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        extraRewardsLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getReward()"(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "getReward(address,bool)"(_account: string, _claimExtras: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        historicalRewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastTimeRewardApplicable(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastUpdateTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        newRewardRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        operator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        periodFinish(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pid(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        queueNewRewards(_rewards: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        queuedRewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardPerToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardPerTokenStored(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewards(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stake(_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stakeAll(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stakeFor(_for: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stakingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        userRewardPerTokenPaid(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(amount: BigNumberish, claim: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawAll(claim: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawAllAndUnwrap(claim: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawAndUnwrap(amount: BigNumberish, claim: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
