import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface DummyMulticallTargetInterface extends utils.Interface {
    functions: {
        "failedCall(uint256)": FunctionFragment;
        "log1(uint256)": FunctionFragment;
        "log2(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "failedCall" | "log1" | "log2"): FunctionFragment;
    encodeFunctionData(functionFragment: "failedCall", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "log1", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "log2", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "failedCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "log1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "log2", data: BytesLike): Result;
    events: {
        "Log1(uint256)": EventFragment;
        "Log2(uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Log1"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Log2"): EventFragment;
}
export interface Log1EventObject {
    _data: BigNumber;
}
export declare type Log1Event = TypedEvent<[BigNumber], Log1EventObject>;
export declare type Log1EventFilter = TypedEventFilter<Log1Event>;
export interface Log2EventObject {
    _data: BigNumber;
}
export declare type Log2Event = TypedEvent<[BigNumber], Log2EventObject>;
export declare type Log2EventFilter = TypedEventFilter<Log2Event>;
export interface DummyMulticallTarget extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DummyMulticallTargetInterface;
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
        failedCall(arg0: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        log1(_data: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        log2(_data: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    failedCall(arg0: BigNumberish, overrides?: CallOverrides): Promise<void>;
    log1(_data: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    log2(_data: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        failedCall(arg0: BigNumberish, overrides?: CallOverrides): Promise<void>;
        log1(_data: BigNumberish, overrides?: CallOverrides): Promise<void>;
        log2(_data: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Log1(uint256)"(_data?: null): Log1EventFilter;
        Log1(_data?: null): Log1EventFilter;
        "Log2(uint256)"(_data?: null): Log2EventFilter;
        Log2(_data?: null): Log2EventFilter;
    };
    estimateGas: {
        failedCall(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        log1(_data: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        log2(_data: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        failedCall(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        log1(_data: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        log2(_data: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
