import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface CurveLPPriceFeedTestInterface extends utils.Interface {
    functions: {
        "IS_TEST()": FunctionFragment;
        "addressProvider()": FunctionFragment;
        "c2feed()": FunctionFragment;
        "c3feed()": FunctionFragment;
        "c4feed()": FunctionFragment;
        "curveV1Mock()": FunctionFragment;
        "failed()": FunctionFragment;
        "pfm1()": FunctionFragment;
        "pfm2()": FunctionFragment;
        "pfm3()": FunctionFragment;
        "pfm4()": FunctionFragment;
        "setUp()": FunctionFragment;
        "test_OCLP_01_constructor_sets_correct_values()": FunctionFragment;
        "test_OCLP_02_constructor_reverts_for_zero_addresses()": FunctionFragment;
        "test_OCLP_03_constructor_reverts_at_getRoundData_call()": FunctionFragment;
        "test_OCLP_04_latestRoundData_works_correctly_for_2_assets_CurveLPPriceFeed()": FunctionFragment;
        "test_OCLP_05_latestRoundData_works_correctly_for_3_assets_CurveLPPriceFeed()": FunctionFragment;
        "test_OCLP_06_latestRoundData_works_correctly_for_4_assets_CurveLPPriceFeed()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "IS_TEST" | "addressProvider" | "c2feed" | "c3feed" | "c4feed" | "curveV1Mock" | "failed" | "pfm1" | "pfm2" | "pfm3" | "pfm4" | "setUp" | "test_OCLP_01_constructor_sets_correct_values" | "test_OCLP_02_constructor_reverts_for_zero_addresses" | "test_OCLP_03_constructor_reverts_at_getRoundData_call" | "test_OCLP_04_latestRoundData_works_correctly_for_2_assets_CurveLPPriceFeed" | "test_OCLP_05_latestRoundData_works_correctly_for_3_assets_CurveLPPriceFeed" | "test_OCLP_06_latestRoundData_works_correctly_for_4_assets_CurveLPPriceFeed"): FunctionFragment;
    encodeFunctionData(functionFragment: "IS_TEST", values?: undefined): string;
    encodeFunctionData(functionFragment: "addressProvider", values?: undefined): string;
    encodeFunctionData(functionFragment: "c2feed", values?: undefined): string;
    encodeFunctionData(functionFragment: "c3feed", values?: undefined): string;
    encodeFunctionData(functionFragment: "c4feed", values?: undefined): string;
    encodeFunctionData(functionFragment: "curveV1Mock", values?: undefined): string;
    encodeFunctionData(functionFragment: "failed", values?: undefined): string;
    encodeFunctionData(functionFragment: "pfm1", values?: undefined): string;
    encodeFunctionData(functionFragment: "pfm2", values?: undefined): string;
    encodeFunctionData(functionFragment: "pfm3", values?: undefined): string;
    encodeFunctionData(functionFragment: "pfm4", values?: undefined): string;
    encodeFunctionData(functionFragment: "setUp", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_OCLP_01_constructor_sets_correct_values", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_OCLP_02_constructor_reverts_for_zero_addresses", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_OCLP_03_constructor_reverts_at_getRoundData_call", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_OCLP_04_latestRoundData_works_correctly_for_2_assets_CurveLPPriceFeed", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_OCLP_05_latestRoundData_works_correctly_for_3_assets_CurveLPPriceFeed", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_OCLP_06_latestRoundData_works_correctly_for_4_assets_CurveLPPriceFeed", values?: undefined): string;
    decodeFunctionResult(functionFragment: "IS_TEST", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addressProvider", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c2feed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c3feed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c4feed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "curveV1Mock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "failed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pfm1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pfm2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pfm3", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pfm4", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_OCLP_01_constructor_sets_correct_values", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_OCLP_02_constructor_reverts_for_zero_addresses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_OCLP_03_constructor_reverts_at_getRoundData_call", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_OCLP_04_latestRoundData_works_correctly_for_2_assets_CurveLPPriceFeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_OCLP_05_latestRoundData_works_correctly_for_3_assets_CurveLPPriceFeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_OCLP_06_latestRoundData_works_correctly_for_4_assets_CurveLPPriceFeed", data: BytesLike): Result;
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
export interface CurveLPPriceFeedTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CurveLPPriceFeedTestInterface;
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
        addressProvider(overrides?: CallOverrides): Promise<[string]>;
        c2feed(overrides?: CallOverrides): Promise<[string]>;
        c3feed(overrides?: CallOverrides): Promise<[string]>;
        c4feed(overrides?: CallOverrides): Promise<[string]>;
        curveV1Mock(overrides?: CallOverrides): Promise<[string]>;
        failed(overrides?: CallOverrides): Promise<[boolean]>;
        pfm1(overrides?: CallOverrides): Promise<[string]>;
        pfm2(overrides?: CallOverrides): Promise<[string]>;
        pfm3(overrides?: CallOverrides): Promise<[string]>;
        pfm4(overrides?: CallOverrides): Promise<[string]>;
        setUp(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_OCLP_01_constructor_sets_correct_values(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_OCLP_02_constructor_reverts_for_zero_addresses(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_OCLP_03_constructor_reverts_at_getRoundData_call(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_OCLP_04_latestRoundData_works_correctly_for_2_assets_CurveLPPriceFeed(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_OCLP_05_latestRoundData_works_correctly_for_3_assets_CurveLPPriceFeed(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_OCLP_06_latestRoundData_works_correctly_for_4_assets_CurveLPPriceFeed(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    IS_TEST(overrides?: CallOverrides): Promise<boolean>;
    addressProvider(overrides?: CallOverrides): Promise<string>;
    c2feed(overrides?: CallOverrides): Promise<string>;
    c3feed(overrides?: CallOverrides): Promise<string>;
    c4feed(overrides?: CallOverrides): Promise<string>;
    curveV1Mock(overrides?: CallOverrides): Promise<string>;
    failed(overrides?: CallOverrides): Promise<boolean>;
    pfm1(overrides?: CallOverrides): Promise<string>;
    pfm2(overrides?: CallOverrides): Promise<string>;
    pfm3(overrides?: CallOverrides): Promise<string>;
    pfm4(overrides?: CallOverrides): Promise<string>;
    setUp(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_OCLP_01_constructor_sets_correct_values(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_OCLP_02_constructor_reverts_for_zero_addresses(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_OCLP_03_constructor_reverts_at_getRoundData_call(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_OCLP_04_latestRoundData_works_correctly_for_2_assets_CurveLPPriceFeed(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_OCLP_05_latestRoundData_works_correctly_for_3_assets_CurveLPPriceFeed(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_OCLP_06_latestRoundData_works_correctly_for_4_assets_CurveLPPriceFeed(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        IS_TEST(overrides?: CallOverrides): Promise<boolean>;
        addressProvider(overrides?: CallOverrides): Promise<string>;
        c2feed(overrides?: CallOverrides): Promise<string>;
        c3feed(overrides?: CallOverrides): Promise<string>;
        c4feed(overrides?: CallOverrides): Promise<string>;
        curveV1Mock(overrides?: CallOverrides): Promise<string>;
        failed(overrides?: CallOverrides): Promise<boolean>;
        pfm1(overrides?: CallOverrides): Promise<string>;
        pfm2(overrides?: CallOverrides): Promise<string>;
        pfm3(overrides?: CallOverrides): Promise<string>;
        pfm4(overrides?: CallOverrides): Promise<string>;
        setUp(overrides?: CallOverrides): Promise<void>;
        test_OCLP_01_constructor_sets_correct_values(overrides?: CallOverrides): Promise<void>;
        test_OCLP_02_constructor_reverts_for_zero_addresses(overrides?: CallOverrides): Promise<void>;
        test_OCLP_03_constructor_reverts_at_getRoundData_call(overrides?: CallOverrides): Promise<void>;
        test_OCLP_04_latestRoundData_works_correctly_for_2_assets_CurveLPPriceFeed(overrides?: CallOverrides): Promise<void>;
        test_OCLP_05_latestRoundData_works_correctly_for_3_assets_CurveLPPriceFeed(overrides?: CallOverrides): Promise<void>;
        test_OCLP_06_latestRoundData_works_correctly_for_4_assets_CurveLPPriceFeed(overrides?: CallOverrides): Promise<void>;
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
        addressProvider(overrides?: CallOverrides): Promise<BigNumber>;
        c2feed(overrides?: CallOverrides): Promise<BigNumber>;
        c3feed(overrides?: CallOverrides): Promise<BigNumber>;
        c4feed(overrides?: CallOverrides): Promise<BigNumber>;
        curveV1Mock(overrides?: CallOverrides): Promise<BigNumber>;
        failed(overrides?: CallOverrides): Promise<BigNumber>;
        pfm1(overrides?: CallOverrides): Promise<BigNumber>;
        pfm2(overrides?: CallOverrides): Promise<BigNumber>;
        pfm3(overrides?: CallOverrides): Promise<BigNumber>;
        pfm4(overrides?: CallOverrides): Promise<BigNumber>;
        setUp(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_OCLP_01_constructor_sets_correct_values(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_OCLP_02_constructor_reverts_for_zero_addresses(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_OCLP_03_constructor_reverts_at_getRoundData_call(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_OCLP_04_latestRoundData_works_correctly_for_2_assets_CurveLPPriceFeed(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_OCLP_05_latestRoundData_works_correctly_for_3_assets_CurveLPPriceFeed(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_OCLP_06_latestRoundData_works_correctly_for_4_assets_CurveLPPriceFeed(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        IS_TEST(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addressProvider(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c2feed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c3feed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c4feed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        curveV1Mock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        failed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pfm1(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pfm2(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pfm3(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pfm4(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setUp(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_OCLP_01_constructor_sets_correct_values(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_OCLP_02_constructor_reverts_for_zero_addresses(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_OCLP_03_constructor_reverts_at_getRoundData_call(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_OCLP_04_latestRoundData_works_correctly_for_2_assets_CurveLPPriceFeed(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_OCLP_05_latestRoundData_works_correctly_for_3_assets_CurveLPPriceFeed(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_OCLP_06_latestRoundData_works_correctly_for_4_assets_CurveLPPriceFeed(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
