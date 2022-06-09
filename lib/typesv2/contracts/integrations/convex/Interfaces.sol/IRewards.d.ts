import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface IRewardsInterface extends utils.Interface {
    functions: {
        "addExtraReward(address)": FunctionFragment;
        "earned(address)": FunctionFragment;
        "exit(address)": FunctionFragment;
        "getReward(address)": FunctionFragment;
        "notifyRewardAmount(uint256)": FunctionFragment;
        "queueNewRewards(uint256)": FunctionFragment;
        "rewardToken()": FunctionFragment;
        "stake(address,uint256)": FunctionFragment;
        "stakeFor(address,uint256)": FunctionFragment;
        "stakingToken()": FunctionFragment;
        "withdraw(address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addExtraReward" | "earned" | "exit" | "getReward" | "notifyRewardAmount" | "queueNewRewards" | "rewardToken" | "stake" | "stakeFor" | "stakingToken" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "addExtraReward", values: [string]): string;
    encodeFunctionData(functionFragment: "earned", values: [string]): string;
    encodeFunctionData(functionFragment: "exit", values: [string]): string;
    encodeFunctionData(functionFragment: "getReward", values: [string]): string;
    encodeFunctionData(functionFragment: "notifyRewardAmount", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "queueNewRewards", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "rewardToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "stake", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "stakeFor", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "stakingToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "addExtraReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "earned", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "notifyRewardAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queueNewRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakeFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakingToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {};
}
export interface IRewards extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IRewardsInterface;
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
        addExtraReward(arg0: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        earned(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        exit(arg0: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getReward(arg0: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        notifyRewardAmount(arg0: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        queueNewRewards(arg0: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        rewardToken(overrides?: CallOverrides): Promise<[string]>;
        stake(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stakeFor(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stakingToken(overrides?: CallOverrides): Promise<[string]>;
        withdraw(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    addExtraReward(arg0: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    earned(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    exit(arg0: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getReward(arg0: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    notifyRewardAmount(arg0: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    queueNewRewards(arg0: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    rewardToken(overrides?: CallOverrides): Promise<string>;
    stake(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stakeFor(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stakingToken(overrides?: CallOverrides): Promise<string>;
    withdraw(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addExtraReward(arg0: string, overrides?: CallOverrides): Promise<void>;
        earned(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        exit(arg0: string, overrides?: CallOverrides): Promise<void>;
        getReward(arg0: string, overrides?: CallOverrides): Promise<void>;
        notifyRewardAmount(arg0: BigNumberish, overrides?: CallOverrides): Promise<void>;
        queueNewRewards(arg0: BigNumberish, overrides?: CallOverrides): Promise<void>;
        rewardToken(overrides?: CallOverrides): Promise<string>;
        stake(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<void>;
        stakeFor(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<void>;
        stakingToken(overrides?: CallOverrides): Promise<string>;
        withdraw(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        addExtraReward(arg0: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        earned(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        exit(arg0: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getReward(arg0: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        notifyRewardAmount(arg0: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        queueNewRewards(arg0: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        rewardToken(overrides?: CallOverrides): Promise<BigNumber>;
        stake(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stakeFor(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stakingToken(overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addExtraReward(arg0: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        earned(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        exit(arg0: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getReward(arg0: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        notifyRewardAmount(arg0: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        queueNewRewards(arg0: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stake(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stakeFor(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stakingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
