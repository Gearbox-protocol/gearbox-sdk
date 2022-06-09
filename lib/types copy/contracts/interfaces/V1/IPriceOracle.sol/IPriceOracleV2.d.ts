import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface IPriceOracleV2Interface extends utils.Interface {
    functions: {
        "addPriceFeed(address,address)": FunctionFragment;
        "convert(uint256,address,address)": FunctionFragment;
        "getLastPrice(address,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addPriceFeed" | "convert" | "getLastPrice"): FunctionFragment;
    encodeFunctionData(functionFragment: "addPriceFeed", values: [string, string]): string;
    encodeFunctionData(functionFragment: "convert", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "getLastPrice", values: [string, string]): string;
    decodeFunctionResult(functionFragment: "addPriceFeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convert", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLastPrice", data: BytesLike): Result;
    events: {
        "NewPriceFeed(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "NewPriceFeed"): EventFragment;
}
export interface NewPriceFeedEventObject {
    token: string;
    priceFeed: string;
}
export declare type NewPriceFeedEvent = TypedEvent<[
    string,
    string
], NewPriceFeedEventObject>;
export declare type NewPriceFeedEventFilter = TypedEventFilter<NewPriceFeedEvent>;
export interface IPriceOracleV2 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IPriceOracleV2Interface;
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
        addPriceFeed(token: string, priceFeedToken: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        convert(amount: BigNumberish, tokenFrom: string, tokenTo: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getLastPrice(tokenFrom: string, tokenTo: string, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    addPriceFeed(token: string, priceFeedToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    convert(amount: BigNumberish, tokenFrom: string, tokenTo: string, overrides?: CallOverrides): Promise<BigNumber>;
    getLastPrice(tokenFrom: string, tokenTo: string, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        addPriceFeed(token: string, priceFeedToken: string, overrides?: CallOverrides): Promise<void>;
        convert(amount: BigNumberish, tokenFrom: string, tokenTo: string, overrides?: CallOverrides): Promise<BigNumber>;
        getLastPrice(tokenFrom: string, tokenTo: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "NewPriceFeed(address,address)"(token?: string | null, priceFeed?: string | null): NewPriceFeedEventFilter;
        NewPriceFeed(token?: string | null, priceFeed?: string | null): NewPriceFeedEventFilter;
    };
    estimateGas: {
        addPriceFeed(token: string, priceFeedToken: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        convert(amount: BigNumberish, tokenFrom: string, tokenTo: string, overrides?: CallOverrides): Promise<BigNumber>;
        getLastPrice(tokenFrom: string, tokenTo: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        addPriceFeed(token: string, priceFeedToken: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        convert(amount: BigNumberish, tokenFrom: string, tokenTo: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLastPrice(tokenFrom: string, tokenTo: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
