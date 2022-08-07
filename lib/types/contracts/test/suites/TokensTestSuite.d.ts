import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export declare type PriceFeedConfigStruct = {
    token: string;
    priceFeed: string;
};
export declare type PriceFeedConfigStructOutput = [string, string] & {
    token: string;
    priceFeed: string;
};
export interface TokensTestSuiteInterface extends utils.Interface {
    functions: {
        "IS_TEST()": FunctionFragment;
        "addressOf(uint8)": FunctionFragment;
        "allowance(uint8,address,address)": FunctionFragment;
        "approve(uint8,address,address,uint256)": FunctionFragment;
        "approve(uint8,address,address)": FunctionFragment;
        "approve(address,address,address)": FunctionFragment;
        "balanceOf(uint8,address)": FunctionFragment;
        "burn(uint8,address,uint256)": FunctionFragment;
        "failed()": FunctionFragment;
        "getPriceFeeds()": FunctionFragment;
        "mint(address,address,uint256)": FunctionFragment;
        "mint(uint8,address,uint256)": FunctionFragment;
        "priceFeeds(uint256)": FunctionFragment;
        "priceFeedsMap(uint8)": FunctionFragment;
        "prices(uint8)": FunctionFragment;
        "symbols(uint8)": FunctionFragment;
        "tokenIndexes(address)": FunctionFragment;
        "tokenToType(uint8)": FunctionFragment;
        "topUpWETH()": FunctionFragment;
        "wethToken()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "IS_TEST" | "addressOf" | "allowance" | "approve(uint8,address,address,uint256)" | "approve(uint8,address,address)" | "approve(address,address,address)" | "balanceOf" | "burn" | "failed" | "getPriceFeeds" | "mint(address,address,uint256)" | "mint(uint8,address,uint256)" | "priceFeeds" | "priceFeedsMap" | "prices" | "symbols" | "tokenIndexes" | "tokenToType" | "topUpWETH" | "wethToken"): FunctionFragment;
    encodeFunctionData(functionFragment: "IS_TEST", values?: undefined): string;
    encodeFunctionData(functionFragment: "addressOf", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "allowance", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "approve(uint8,address,address,uint256)", values: [BigNumberish, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "approve(uint8,address,address)", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "approve(address,address,address)", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "burn", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "failed", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPriceFeeds", values?: undefined): string;
    encodeFunctionData(functionFragment: "mint(address,address,uint256)", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "mint(uint8,address,uint256)", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "priceFeeds", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "priceFeedsMap", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "prices", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "symbols", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "tokenIndexes", values: [string]): string;
    encodeFunctionData(functionFragment: "tokenToType", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "topUpWETH", values?: undefined): string;
    encodeFunctionData(functionFragment: "wethToken", values?: undefined): string;
    decodeFunctionResult(functionFragment: "IS_TEST", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addressOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve(uint8,address,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve(uint8,address,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve(address,address,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "failed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPriceFeeds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint(address,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint(uint8,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "priceFeeds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "priceFeedsMap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "prices", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbols", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenIndexes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenToType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "topUpWETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wethToken", data: BytesLike): Result;
    events: {
        "log(string)": EventFragment;
        "log_address(address)": EventFragment;
        "log_bytes(bytes)": EventFragment;
        "log_bytes32(bytes32)": EventFragment;
        "log_int(int256)": EventFragment;
        "log_named_address(string,address)": EventFragment;
        "log_named_bytes(string,bytes)": EventFragment;
        "log_named_bytes32(string,bytes32)": EventFragment;
        "log_named_decimal_int(string,int256,uint256)": EventFragment;
        "log_named_decimal_uint(string,uint256,uint256)": EventFragment;
        "log_named_int(string,int256)": EventFragment;
        "log_named_string(string,string)": EventFragment;
        "log_named_uint(string,uint256)": EventFragment;
        "log_string(string)": EventFragment;
        "log_uint(uint256)": EventFragment;
        "logs(bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "log"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_address"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_bytes"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_bytes32"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_int"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_address"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_bytes"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_bytes32"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_decimal_int"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_decimal_uint"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_int"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_string"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_uint"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_string"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_uint"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "logs"): EventFragment;
}
export interface logEventObject {
    arg0: string;
}
export declare type logEvent = TypedEvent<[string], logEventObject>;
export declare type logEventFilter = TypedEventFilter<logEvent>;
export interface log_addressEventObject {
    arg0: string;
}
export declare type log_addressEvent = TypedEvent<[string], log_addressEventObject>;
export declare type log_addressEventFilter = TypedEventFilter<log_addressEvent>;
export interface log_bytesEventObject {
    arg0: string;
}
export declare type log_bytesEvent = TypedEvent<[string], log_bytesEventObject>;
export declare type log_bytesEventFilter = TypedEventFilter<log_bytesEvent>;
export interface log_bytes32EventObject {
    arg0: string;
}
export declare type log_bytes32Event = TypedEvent<[string], log_bytes32EventObject>;
export declare type log_bytes32EventFilter = TypedEventFilter<log_bytes32Event>;
export interface log_intEventObject {
    arg0: BigNumber;
}
export declare type log_intEvent = TypedEvent<[BigNumber], log_intEventObject>;
export declare type log_intEventFilter = TypedEventFilter<log_intEvent>;
export interface log_named_addressEventObject {
    key: string;
    val: string;
}
export declare type log_named_addressEvent = TypedEvent<[
    string,
    string
], log_named_addressEventObject>;
export declare type log_named_addressEventFilter = TypedEventFilter<log_named_addressEvent>;
export interface log_named_bytesEventObject {
    key: string;
    val: string;
}
export declare type log_named_bytesEvent = TypedEvent<[
    string,
    string
], log_named_bytesEventObject>;
export declare type log_named_bytesEventFilter = TypedEventFilter<log_named_bytesEvent>;
export interface log_named_bytes32EventObject {
    key: string;
    val: string;
}
export declare type log_named_bytes32Event = TypedEvent<[
    string,
    string
], log_named_bytes32EventObject>;
export declare type log_named_bytes32EventFilter = TypedEventFilter<log_named_bytes32Event>;
export interface log_named_decimal_intEventObject {
    key: string;
    val: BigNumber;
    decimals: BigNumber;
}
export declare type log_named_decimal_intEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], log_named_decimal_intEventObject>;
export declare type log_named_decimal_intEventFilter = TypedEventFilter<log_named_decimal_intEvent>;
export interface log_named_decimal_uintEventObject {
    key: string;
    val: BigNumber;
    decimals: BigNumber;
}
export declare type log_named_decimal_uintEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], log_named_decimal_uintEventObject>;
export declare type log_named_decimal_uintEventFilter = TypedEventFilter<log_named_decimal_uintEvent>;
export interface log_named_intEventObject {
    key: string;
    val: BigNumber;
}
export declare type log_named_intEvent = TypedEvent<[
    string,
    BigNumber
], log_named_intEventObject>;
export declare type log_named_intEventFilter = TypedEventFilter<log_named_intEvent>;
export interface log_named_stringEventObject {
    key: string;
    val: string;
}
export declare type log_named_stringEvent = TypedEvent<[
    string,
    string
], log_named_stringEventObject>;
export declare type log_named_stringEventFilter = TypedEventFilter<log_named_stringEvent>;
export interface log_named_uintEventObject {
    key: string;
    val: BigNumber;
}
export declare type log_named_uintEvent = TypedEvent<[
    string,
    BigNumber
], log_named_uintEventObject>;
export declare type log_named_uintEventFilter = TypedEventFilter<log_named_uintEvent>;
export interface log_stringEventObject {
    arg0: string;
}
export declare type log_stringEvent = TypedEvent<[string], log_stringEventObject>;
export declare type log_stringEventFilter = TypedEventFilter<log_stringEvent>;
export interface log_uintEventObject {
    arg0: BigNumber;
}
export declare type log_uintEvent = TypedEvent<[BigNumber], log_uintEventObject>;
export declare type log_uintEventFilter = TypedEventFilter<log_uintEvent>;
export interface logsEventObject {
    arg0: string;
}
export declare type logsEvent = TypedEvent<[string], logsEventObject>;
export declare type logsEventFilter = TypedEventFilter<logsEvent>;
export interface TokensTestSuite extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TokensTestSuiteInterface;
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
        IS_TEST(overrides?: CallOverrides): Promise<[boolean]>;
        addressOf(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        allowance(t: BigNumberish, holder: string, targetContract: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        "approve(uint8,address,address,uint256)"(t: BigNumberish, holder: string, targetContract: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "approve(uint8,address,address)"(t: BigNumberish, holder: string, targetContract: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "approve(address,address,address)"(token: string, holder: string, targetContract: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceOf(t: BigNumberish, holder: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            balance: BigNumber;
        }>;
        burn(t: BigNumberish, from: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        failed(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getPriceFeeds(overrides?: CallOverrides): Promise<[PriceFeedConfigStructOutput[]]>;
        "mint(address,address,uint256)"(token: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "mint(uint8,address,uint256)"(t: BigNumberish, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        priceFeeds(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string, string] & {
            token: string;
            priceFeed: string;
        }>;
        priceFeedsMap(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        prices(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        symbols(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        tokenIndexes(arg0: string, overrides?: CallOverrides): Promise<[number]>;
        tokenToType(arg0: BigNumberish, overrides?: CallOverrides): Promise<[number]>;
        topUpWETH(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        wethToken(overrides?: CallOverrides): Promise<[string]>;
    };
    IS_TEST(overrides?: CallOverrides): Promise<boolean>;
    addressOf(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    allowance(t: BigNumberish, holder: string, targetContract: string, overrides?: CallOverrides): Promise<BigNumber>;
    "approve(uint8,address,address,uint256)"(t: BigNumberish, holder: string, targetContract: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "approve(uint8,address,address)"(t: BigNumberish, holder: string, targetContract: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "approve(address,address,address)"(token: string, holder: string, targetContract: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceOf(t: BigNumberish, holder: string, overrides?: CallOverrides): Promise<BigNumber>;
    burn(t: BigNumberish, from: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    failed(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getPriceFeeds(overrides?: CallOverrides): Promise<PriceFeedConfigStructOutput[]>;
    "mint(address,address,uint256)"(token: string, to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "mint(uint8,address,uint256)"(t: BigNumberish, to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    priceFeeds(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string, string] & {
        token: string;
        priceFeed: string;
    }>;
    priceFeedsMap(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    prices(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    symbols(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    tokenIndexes(arg0: string, overrides?: CallOverrides): Promise<number>;
    tokenToType(arg0: BigNumberish, overrides?: CallOverrides): Promise<number>;
    topUpWETH(overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    wethToken(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        IS_TEST(overrides?: CallOverrides): Promise<boolean>;
        addressOf(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        allowance(t: BigNumberish, holder: string, targetContract: string, overrides?: CallOverrides): Promise<BigNumber>;
        "approve(uint8,address,address,uint256)"(t: BigNumberish, holder: string, targetContract: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "approve(uint8,address,address)"(t: BigNumberish, holder: string, targetContract: string, overrides?: CallOverrides): Promise<void>;
        "approve(address,address,address)"(token: string, holder: string, targetContract: string, overrides?: CallOverrides): Promise<void>;
        balanceOf(t: BigNumberish, holder: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(t: BigNumberish, from: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        failed(overrides?: CallOverrides): Promise<boolean>;
        getPriceFeeds(overrides?: CallOverrides): Promise<PriceFeedConfigStructOutput[]>;
        "mint(address,address,uint256)"(token: string, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "mint(uint8,address,uint256)"(t: BigNumberish, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        priceFeeds(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string, string] & {
            token: string;
            priceFeed: string;
        }>;
        priceFeedsMap(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        prices(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        symbols(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        tokenIndexes(arg0: string, overrides?: CallOverrides): Promise<number>;
        tokenToType(arg0: BigNumberish, overrides?: CallOverrides): Promise<number>;
        topUpWETH(overrides?: CallOverrides): Promise<void>;
        wethToken(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "log(string)"(arg0?: null): logEventFilter;
        log(arg0?: null): logEventFilter;
        "log_address(address)"(arg0?: null): log_addressEventFilter;
        log_address(arg0?: null): log_addressEventFilter;
        "log_bytes(bytes)"(arg0?: null): log_bytesEventFilter;
        log_bytes(arg0?: null): log_bytesEventFilter;
        "log_bytes32(bytes32)"(arg0?: null): log_bytes32EventFilter;
        log_bytes32(arg0?: null): log_bytes32EventFilter;
        "log_int(int256)"(arg0?: null): log_intEventFilter;
        log_int(arg0?: null): log_intEventFilter;
        "log_named_address(string,address)"(key?: null, val?: null): log_named_addressEventFilter;
        log_named_address(key?: null, val?: null): log_named_addressEventFilter;
        "log_named_bytes(string,bytes)"(key?: null, val?: null): log_named_bytesEventFilter;
        log_named_bytes(key?: null, val?: null): log_named_bytesEventFilter;
        "log_named_bytes32(string,bytes32)"(key?: null, val?: null): log_named_bytes32EventFilter;
        log_named_bytes32(key?: null, val?: null): log_named_bytes32EventFilter;
        "log_named_decimal_int(string,int256,uint256)"(key?: null, val?: null, decimals?: null): log_named_decimal_intEventFilter;
        log_named_decimal_int(key?: null, val?: null, decimals?: null): log_named_decimal_intEventFilter;
        "log_named_decimal_uint(string,uint256,uint256)"(key?: null, val?: null, decimals?: null): log_named_decimal_uintEventFilter;
        log_named_decimal_uint(key?: null, val?: null, decimals?: null): log_named_decimal_uintEventFilter;
        "log_named_int(string,int256)"(key?: null, val?: null): log_named_intEventFilter;
        log_named_int(key?: null, val?: null): log_named_intEventFilter;
        "log_named_string(string,string)"(key?: null, val?: null): log_named_stringEventFilter;
        log_named_string(key?: null, val?: null): log_named_stringEventFilter;
        "log_named_uint(string,uint256)"(key?: null, val?: null): log_named_uintEventFilter;
        log_named_uint(key?: null, val?: null): log_named_uintEventFilter;
        "log_string(string)"(arg0?: null): log_stringEventFilter;
        log_string(arg0?: null): log_stringEventFilter;
        "log_uint(uint256)"(arg0?: null): log_uintEventFilter;
        log_uint(arg0?: null): log_uintEventFilter;
        "logs(bytes)"(arg0?: null): logsEventFilter;
        logs(arg0?: null): logsEventFilter;
    };
    estimateGas: {
        IS_TEST(overrides?: CallOverrides): Promise<BigNumber>;
        addressOf(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        allowance(t: BigNumberish, holder: string, targetContract: string, overrides?: CallOverrides): Promise<BigNumber>;
        "approve(uint8,address,address,uint256)"(t: BigNumberish, holder: string, targetContract: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "approve(uint8,address,address)"(t: BigNumberish, holder: string, targetContract: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "approve(address,address,address)"(token: string, holder: string, targetContract: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceOf(t: BigNumberish, holder: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(t: BigNumberish, from: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        failed(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getPriceFeeds(overrides?: CallOverrides): Promise<BigNumber>;
        "mint(address,address,uint256)"(token: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "mint(uint8,address,uint256)"(t: BigNumberish, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        priceFeeds(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        priceFeedsMap(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        prices(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        symbols(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        tokenIndexes(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        tokenToType(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        topUpWETH(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        wethToken(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        IS_TEST(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addressOf(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowance(t: BigNumberish, holder: string, targetContract: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "approve(uint8,address,address,uint256)"(t: BigNumberish, holder: string, targetContract: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "approve(uint8,address,address)"(t: BigNumberish, holder: string, targetContract: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "approve(address,address,address)"(token: string, holder: string, targetContract: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(t: BigNumberish, holder: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(t: BigNumberish, from: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        failed(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getPriceFeeds(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "mint(address,address,uint256)"(token: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "mint(uint8,address,uint256)"(t: BigNumberish, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        priceFeeds(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        priceFeedsMap(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        prices(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbols(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenIndexes(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenToType(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        topUpWETH(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        wethToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
