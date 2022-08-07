import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface IDepositInterface extends utils.Interface {
    functions: {
        "balanceOf(address)": FunctionFragment;
        "claimRewards(uint256,address)": FunctionFragment;
        "isShutdown()": FunctionFragment;
        "owner()": FunctionFragment;
        "poolInfo(uint256)": FunctionFragment;
        "rewardArbitrator()": FunctionFragment;
        "rewardClaimed(uint256,address,uint256)": FunctionFragment;
        "setGaugeRedirect(uint256)": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "withdrawTo(uint256,uint256,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "balanceOf" | "claimRewards" | "isShutdown" | "owner" | "poolInfo" | "rewardArbitrator" | "rewardClaimed" | "setGaugeRedirect" | "totalSupply" | "withdrawTo"): FunctionFragment;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "claimRewards", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "isShutdown", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "poolInfo", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "rewardArbitrator", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardClaimed", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setGaugeRedirect", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawTo", values: [BigNumberish, BigNumberish, string]): string;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isShutdown", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardArbitrator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardClaimed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGaugeRedirect", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawTo", data: BytesLike): Result;
    events: {};
}
export interface IDeposit extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IDepositInterface;
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
        balanceOf(_account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        claimRewards(arg0: BigNumberish, arg1: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isShutdown(overrides?: CallOverrides): Promise<[boolean]>;
        owner(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        poolInfo(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string, string, string, string, string, boolean]>;
        rewardArbitrator(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        rewardClaimed(arg0: BigNumberish, arg1: string, arg2: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setGaugeRedirect(_pid: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        withdrawTo(arg0: BigNumberish, arg1: BigNumberish, arg2: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    balanceOf(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
    claimRewards(arg0: BigNumberish, arg1: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isShutdown(overrides?: CallOverrides): Promise<boolean>;
    owner(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    poolInfo(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string, string, string, string, string, boolean]>;
    rewardArbitrator(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    rewardClaimed(arg0: BigNumberish, arg1: string, arg2: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setGaugeRedirect(_pid: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    withdrawTo(arg0: BigNumberish, arg1: BigNumberish, arg2: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        balanceOf(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        claimRewards(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<boolean>;
        isShutdown(overrides?: CallOverrides): Promise<boolean>;
        owner(overrides?: CallOverrides): Promise<string>;
        poolInfo(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string, string, string, string, string, boolean]>;
        rewardArbitrator(overrides?: CallOverrides): Promise<string>;
        rewardClaimed(arg0: BigNumberish, arg1: string, arg2: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setGaugeRedirect(_pid: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawTo(arg0: BigNumberish, arg1: BigNumberish, arg2: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        balanceOf(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        claimRewards(arg0: BigNumberish, arg1: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isShutdown(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        poolInfo(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        rewardArbitrator(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        rewardClaimed(arg0: BigNumberish, arg1: string, arg2: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setGaugeRedirect(_pid: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawTo(arg0: BigNumberish, arg1: BigNumberish, arg2: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        balanceOf(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimRewards(arg0: BigNumberish, arg1: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isShutdown(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        poolInfo(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardArbitrator(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        rewardClaimed(arg0: BigNumberish, arg1: string, arg2: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setGaugeRedirect(_pid: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawTo(arg0: BigNumberish, arg1: BigNumberish, arg2: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
