import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface IPriceFeedTypeInterface extends utils.Interface {
    functions: {
        "dependsOnAddress()": FunctionFragment;
        "priceFeedType()": FunctionFragment;
        "skipPriceCheck()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "dependsOnAddress" | "priceFeedType" | "skipPriceCheck"): FunctionFragment;
    encodeFunctionData(functionFragment: "dependsOnAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "priceFeedType", values?: undefined): string;
    encodeFunctionData(functionFragment: "skipPriceCheck", values?: undefined): string;
    decodeFunctionResult(functionFragment: "dependsOnAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "priceFeedType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "skipPriceCheck", data: BytesLike): Result;
    events: {};
}
export interface IPriceFeedType extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IPriceFeedTypeInterface;
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
        dependsOnAddress(overrides?: CallOverrides): Promise<[boolean]>;
        priceFeedType(overrides?: CallOverrides): Promise<[number]>;
        skipPriceCheck(overrides?: CallOverrides): Promise<[boolean]>;
    };
    dependsOnAddress(overrides?: CallOverrides): Promise<boolean>;
    priceFeedType(overrides?: CallOverrides): Promise<number>;
    skipPriceCheck(overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        dependsOnAddress(overrides?: CallOverrides): Promise<boolean>;
        priceFeedType(overrides?: CallOverrides): Promise<number>;
        skipPriceCheck(overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        dependsOnAddress(overrides?: CallOverrides): Promise<BigNumber>;
        priceFeedType(overrides?: CallOverrides): Promise<BigNumber>;
        skipPriceCheck(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        dependsOnAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        priceFeedType(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        skipPriceCheck(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
