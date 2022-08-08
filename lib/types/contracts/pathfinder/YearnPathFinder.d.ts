import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export declare type BalanceStruct = {
    token: string;
    balance: BigNumberish;
};
export declare type BalanceStructOutput = [string, BigNumber] & {
    token: string;
    balance: BigNumber;
};
export declare type MultiCallStruct = {
    target: string;
    callData: BytesLike;
};
export declare type MultiCallStructOutput = [string, string] & {
    target: string;
    callData: string;
};
export interface YearnPathFinderInterface extends utils.Interface {
    functions: {
        "estimateWithdraw(address,uint256)": FunctionFragment;
        "filterYearnAdapters(address[])": FunctionFragment;
        "withdrawAll((address,uint256)[],address[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "estimateWithdraw" | "filterYearnAdapters" | "withdrawAll"): FunctionFragment;
    encodeFunctionData(functionFragment: "estimateWithdraw", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "filterYearnAdapters", values: [string[]]): string;
    encodeFunctionData(functionFragment: "withdrawAll", values: [BalanceStruct[], string[]]): string;
    decodeFunctionResult(functionFragment: "estimateWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "filterYearnAdapters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawAll", data: BytesLike): Result;
    events: {};
}
export interface YearnPathFinder extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: YearnPathFinderInterface;
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
        estimateWithdraw(yVault: string, amount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        filterYearnAdapters(adapters: string[], overrides?: CallOverrides): Promise<[string[]] & {
            result: string[];
        }>;
        withdrawAll(b: BalanceStruct[], adapters: string[], overrides?: CallOverrides): Promise<[BalanceStructOutput[], MultiCallStructOutput[]]>;
    };
    estimateWithdraw(yVault: string, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    filterYearnAdapters(adapters: string[], overrides?: CallOverrides): Promise<string[]>;
    withdrawAll(b: BalanceStruct[], adapters: string[], overrides?: CallOverrides): Promise<[BalanceStructOutput[], MultiCallStructOutput[]]>;
    callStatic: {
        estimateWithdraw(yVault: string, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        filterYearnAdapters(adapters: string[], overrides?: CallOverrides): Promise<string[]>;
        withdrawAll(b: BalanceStruct[], adapters: string[], overrides?: CallOverrides): Promise<[BalanceStructOutput[], MultiCallStructOutput[]]>;
    };
    filters: {};
    estimateGas: {
        estimateWithdraw(yVault: string, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        filterYearnAdapters(adapters: string[], overrides?: CallOverrides): Promise<BigNumber>;
        withdrawAll(b: BalanceStruct[], adapters: string[], overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        estimateWithdraw(yVault: string, amount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        filterYearnAdapters(adapters: string[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawAll(b: BalanceStruct[], adapters: string[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
