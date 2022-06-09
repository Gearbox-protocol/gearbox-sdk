import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export declare namespace IBooster {
    type PoolInfoStruct = {
        lptoken: string;
        token: string;
        gauge: string;
        crvRewards: string;
        stash: string;
        shutdown: boolean;
    };
    type PoolInfoStructOutput = [
        string,
        string,
        string,
        string,
        string,
        boolean
    ] & {
        lptoken: string;
        token: string;
        gauge: string;
        crvRewards: string;
        stash: string;
        shutdown: boolean;
    };
}
export interface ConvexV1BoosterAdapterInterface extends utils.Interface {
    functions: {
        "_gearboxAdapterType()": FunctionFragment;
        "_gearboxAdapterVersion()": FunctionFragment;
        "creditFacade()": FunctionFragment;
        "creditManager()": FunctionFragment;
        "crv()": FunctionFragment;
        "deposit(uint256,uint256,bool)": FunctionFragment;
        "depositAll(uint256,bool)": FunctionFragment;
        "minter()": FunctionFragment;
        "pause()": FunctionFragment;
        "paused()": FunctionFragment;
        "pidToPhantomToken(uint256)": FunctionFragment;
        "poolInfo(uint256)": FunctionFragment;
        "poolLength()": FunctionFragment;
        "staker()": FunctionFragment;
        "targetContract()": FunctionFragment;
        "unpause()": FunctionFragment;
        "updateStakedPhantomTokensMap()": FunctionFragment;
        "withdraw(uint256,uint256)": FunctionFragment;
        "withdrawAll(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_gearboxAdapterType" | "_gearboxAdapterVersion" | "creditFacade" | "creditManager" | "crv" | "deposit" | "depositAll" | "minter" | "pause" | "paused" | "pidToPhantomToken" | "poolInfo" | "poolLength" | "staker" | "targetContract" | "unpause" | "updateStakedPhantomTokensMap" | "withdraw" | "withdrawAll"): FunctionFragment;
    encodeFunctionData(functionFragment: "_gearboxAdapterType", values?: undefined): string;
    encodeFunctionData(functionFragment: "_gearboxAdapterVersion", values?: undefined): string;
    encodeFunctionData(functionFragment: "creditFacade", values?: undefined): string;
    encodeFunctionData(functionFragment: "creditManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "crv", values?: undefined): string;
    encodeFunctionData(functionFragment: "deposit", values: [BigNumberish, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "depositAll", values: [BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "minter", values?: undefined): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "pidToPhantomToken", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "poolInfo", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "poolLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "staker", values?: undefined): string;
    encodeFunctionData(functionFragment: "targetContract", values?: undefined): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateStakedPhantomTokensMap", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdrawAll", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "_gearboxAdapterType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_gearboxAdapterVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditFacade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "crv", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pidToPhantomToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "staker", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "targetContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateStakedPhantomTokensMap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawAll", data: BytesLike): Result;
    events: {
        "Paused(address)": EventFragment;
        "Unpaused(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}
export interface PausedEventObject {
    account: string;
}
export declare type PausedEvent = TypedEvent<[string], PausedEventObject>;
export declare type PausedEventFilter = TypedEventFilter<PausedEvent>;
export interface UnpausedEventObject {
    account: string;
}
export declare type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;
export declare type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export interface ConvexV1BoosterAdapter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ConvexV1BoosterAdapterInterface;
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
        _gearboxAdapterType(overrides?: CallOverrides): Promise<[number]>;
        _gearboxAdapterVersion(overrides?: CallOverrides): Promise<[number]>;
        creditFacade(overrides?: CallOverrides): Promise<[string]>;
        creditManager(overrides?: CallOverrides): Promise<[string]>;
        crv(overrides?: CallOverrides): Promise<[string]>;
        deposit(_pid: BigNumberish, arg1: BigNumberish, _stake: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        depositAll(_pid: BigNumberish, _stake: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        minter(overrides?: CallOverrides): Promise<[string]>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        pidToPhantomToken(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        poolInfo(i: BigNumberish, overrides?: CallOverrides): Promise<[IBooster.PoolInfoStructOutput]>;
        poolLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        staker(overrides?: CallOverrides): Promise<[string]>;
        targetContract(overrides?: CallOverrides): Promise<[string]>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateStakedPhantomTokensMap(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdraw(_pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawAll(_pid: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    _gearboxAdapterType(overrides?: CallOverrides): Promise<number>;
    _gearboxAdapterVersion(overrides?: CallOverrides): Promise<number>;
    creditFacade(overrides?: CallOverrides): Promise<string>;
    creditManager(overrides?: CallOverrides): Promise<string>;
    crv(overrides?: CallOverrides): Promise<string>;
    deposit(_pid: BigNumberish, arg1: BigNumberish, _stake: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    depositAll(_pid: BigNumberish, _stake: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    minter(overrides?: CallOverrides): Promise<string>;
    pause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    pidToPhantomToken(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    poolInfo(i: BigNumberish, overrides?: CallOverrides): Promise<IBooster.PoolInfoStructOutput>;
    poolLength(overrides?: CallOverrides): Promise<BigNumber>;
    staker(overrides?: CallOverrides): Promise<string>;
    targetContract(overrides?: CallOverrides): Promise<string>;
    unpause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateStakedPhantomTokensMap(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdraw(_pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawAll(_pid: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        _gearboxAdapterType(overrides?: CallOverrides): Promise<number>;
        _gearboxAdapterVersion(overrides?: CallOverrides): Promise<number>;
        creditFacade(overrides?: CallOverrides): Promise<string>;
        creditManager(overrides?: CallOverrides): Promise<string>;
        crv(overrides?: CallOverrides): Promise<string>;
        deposit(_pid: BigNumberish, arg1: BigNumberish, _stake: boolean, overrides?: CallOverrides): Promise<boolean>;
        depositAll(_pid: BigNumberish, _stake: boolean, overrides?: CallOverrides): Promise<boolean>;
        minter(overrides?: CallOverrides): Promise<string>;
        pause(overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        pidToPhantomToken(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        poolInfo(i: BigNumberish, overrides?: CallOverrides): Promise<IBooster.PoolInfoStructOutput>;
        poolLength(overrides?: CallOverrides): Promise<BigNumber>;
        staker(overrides?: CallOverrides): Promise<string>;
        targetContract(overrides?: CallOverrides): Promise<string>;
        unpause(overrides?: CallOverrides): Promise<void>;
        updateStakedPhantomTokensMap(overrides?: CallOverrides): Promise<void>;
        withdraw(_pid: BigNumberish, _amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        withdrawAll(_pid: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
    };
    estimateGas: {
        _gearboxAdapterType(overrides?: CallOverrides): Promise<BigNumber>;
        _gearboxAdapterVersion(overrides?: CallOverrides): Promise<BigNumber>;
        creditFacade(overrides?: CallOverrides): Promise<BigNumber>;
        creditManager(overrides?: CallOverrides): Promise<BigNumber>;
        crv(overrides?: CallOverrides): Promise<BigNumber>;
        deposit(_pid: BigNumberish, arg1: BigNumberish, _stake: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        depositAll(_pid: BigNumberish, _stake: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        minter(overrides?: CallOverrides): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        pidToPhantomToken(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        poolInfo(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        poolLength(overrides?: CallOverrides): Promise<BigNumber>;
        staker(overrides?: CallOverrides): Promise<BigNumber>;
        targetContract(overrides?: CallOverrides): Promise<BigNumber>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateStakedPhantomTokensMap(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdraw(_pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawAll(_pid: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _gearboxAdapterType(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _gearboxAdapterVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditFacade(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        crv(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deposit(_pid: BigNumberish, arg1: BigNumberish, _stake: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        depositAll(_pid: BigNumberish, _stake: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        minter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pidToPhantomToken(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolInfo(i: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        staker(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        targetContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateStakedPhantomTokensMap(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdraw(_pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawAll(_pid: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
