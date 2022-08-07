import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface IStashInterface extends utils.Interface {
    functions: {
        "claimRewards()": FunctionFragment;
        "initialize(uint256,address,address,address,address)": FunctionFragment;
        "processStash()": FunctionFragment;
        "stashRewards()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "claimRewards" | "initialize" | "processStash" | "stashRewards"): FunctionFragment;
    encodeFunctionData(functionFragment: "claimRewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [BigNumberish, string, string, string, string]): string;
    encodeFunctionData(functionFragment: "processStash", values?: undefined): string;
    encodeFunctionData(functionFragment: "stashRewards", values?: undefined): string;
    decodeFunctionResult(functionFragment: "claimRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "processStash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stashRewards", data: BytesLike): Result;
    events: {};
}
export interface IStash extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IStashInterface;
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
        claimRewards(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initialize(_pid: BigNumberish, _operator: string, _staker: string, _gauge: string, _rewardFactory: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        processStash(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stashRewards(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    claimRewards(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initialize(_pid: BigNumberish, _operator: string, _staker: string, _gauge: string, _rewardFactory: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    processStash(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stashRewards(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        claimRewards(overrides?: CallOverrides): Promise<boolean>;
        initialize(_pid: BigNumberish, _operator: string, _staker: string, _gauge: string, _rewardFactory: string, overrides?: CallOverrides): Promise<void>;
        processStash(overrides?: CallOverrides): Promise<boolean>;
        stashRewards(overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        claimRewards(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initialize(_pid: BigNumberish, _operator: string, _staker: string, _gauge: string, _rewardFactory: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        processStash(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stashRewards(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        claimRewards(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initialize(_pid: BigNumberish, _operator: string, _staker: string, _gauge: string, _rewardFactory: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        processStash(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stashRewards(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
