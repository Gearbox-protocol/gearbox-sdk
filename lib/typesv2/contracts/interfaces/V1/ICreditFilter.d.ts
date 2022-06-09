import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface ICreditFilterInterface extends utils.Interface {
    functions: {
        "allowContract(address,address)": FunctionFragment;
        "allowToken(address,uint256)": FunctionFragment;
        "allowanceForAccountTransfers(address,address)": FunctionFragment;
        "allowedContracts(uint256)": FunctionFragment;
        "allowedContractsCount()": FunctionFragment;
        "allowedTokens(uint256)": FunctionFragment;
        "allowedTokensCount()": FunctionFragment;
        "approveAccountTransfer(address,bool)": FunctionFragment;
        "calcCreditAccountAccruedInterest(address)": FunctionFragment;
        "calcCreditAccountHealthFactor(address)": FunctionFragment;
        "calcThresholdWeightedValue(address)": FunctionFragment;
        "calcTotalValue(address)": FunctionFragment;
        "checkAndEnableToken(address,address)": FunctionFragment;
        "checkCollateralChange(address,address,address,uint256,uint256)": FunctionFragment;
        "checkMultiTokenCollateral(address,uint256[],uint256[],address[],address[])": FunctionFragment;
        "connectCreditManager(address)": FunctionFragment;
        "contractToAdapter(address)": FunctionFragment;
        "enabledTokens(address)": FunctionFragment;
        "forbidContract(address)": FunctionFragment;
        "getCreditAccountTokenById(address,uint256)": FunctionFragment;
        "initEnabledTokens(address)": FunctionFragment;
        "isTokenAllowed(address)": FunctionFragment;
        "liquidationThresholds(address)": FunctionFragment;
        "priceOracle()": FunctionFragment;
        "revertIfAccountTransferIsNotAllowed(address,address)": FunctionFragment;
        "revertIfCantIncreaseBorrowing(address,uint256)": FunctionFragment;
        "revertIfTokenNotAllowed(address)": FunctionFragment;
        "underlyingToken()": FunctionFragment;
        "updateUnderlyingTokenLiquidationThreshold()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "allowContract" | "allowToken" | "allowanceForAccountTransfers" | "allowedContracts" | "allowedContractsCount" | "allowedTokens" | "allowedTokensCount" | "approveAccountTransfer" | "calcCreditAccountAccruedInterest" | "calcCreditAccountHealthFactor" | "calcThresholdWeightedValue" | "calcTotalValue" | "checkAndEnableToken" | "checkCollateralChange" | "checkMultiTokenCollateral" | "connectCreditManager" | "contractToAdapter" | "enabledTokens" | "forbidContract" | "getCreditAccountTokenById" | "initEnabledTokens" | "isTokenAllowed" | "liquidationThresholds" | "priceOracle" | "revertIfAccountTransferIsNotAllowed" | "revertIfCantIncreaseBorrowing" | "revertIfTokenNotAllowed" | "underlyingToken" | "updateUnderlyingTokenLiquidationThreshold"): FunctionFragment;
    encodeFunctionData(functionFragment: "allowContract", values: [string, string]): string;
    encodeFunctionData(functionFragment: "allowToken", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "allowanceForAccountTransfers", values: [string, string]): string;
    encodeFunctionData(functionFragment: "allowedContracts", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "allowedContractsCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowedTokens", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "allowedTokensCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "approveAccountTransfer", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "calcCreditAccountAccruedInterest", values: [string]): string;
    encodeFunctionData(functionFragment: "calcCreditAccountHealthFactor", values: [string]): string;
    encodeFunctionData(functionFragment: "calcThresholdWeightedValue", values: [string]): string;
    encodeFunctionData(functionFragment: "calcTotalValue", values: [string]): string;
    encodeFunctionData(functionFragment: "checkAndEnableToken", values: [string, string]): string;
    encodeFunctionData(functionFragment: "checkCollateralChange", values: [string, string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "checkMultiTokenCollateral", values: [string, BigNumberish[], BigNumberish[], string[], string[]]): string;
    encodeFunctionData(functionFragment: "connectCreditManager", values: [string]): string;
    encodeFunctionData(functionFragment: "contractToAdapter", values: [string]): string;
    encodeFunctionData(functionFragment: "enabledTokens", values: [string]): string;
    encodeFunctionData(functionFragment: "forbidContract", values: [string]): string;
    encodeFunctionData(functionFragment: "getCreditAccountTokenById", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "initEnabledTokens", values: [string]): string;
    encodeFunctionData(functionFragment: "isTokenAllowed", values: [string]): string;
    encodeFunctionData(functionFragment: "liquidationThresholds", values: [string]): string;
    encodeFunctionData(functionFragment: "priceOracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "revertIfAccountTransferIsNotAllowed", values: [string, string]): string;
    encodeFunctionData(functionFragment: "revertIfCantIncreaseBorrowing", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "revertIfTokenNotAllowed", values: [string]): string;
    encodeFunctionData(functionFragment: "underlyingToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateUnderlyingTokenLiquidationThreshold", values?: undefined): string;
    decodeFunctionResult(functionFragment: "allowContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowanceForAccountTransfers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowedContracts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowedContractsCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowedTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowedTokensCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approveAccountTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calcCreditAccountAccruedInterest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calcCreditAccountHealthFactor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calcThresholdWeightedValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calcTotalValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkAndEnableToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkCollateralChange", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkMultiTokenCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "connectCreditManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractToAdapter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enabledTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forbidContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCreditAccountTokenById", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initEnabledTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTokenAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidationThresholds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "priceOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revertIfAccountTransferIsNotAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revertIfCantIncreaseBorrowing", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revertIfTokenNotAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "underlyingToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateUnderlyingTokenLiquidationThreshold", data: BytesLike): Result;
    events: {
        "ContractAllowed(address,address)": EventFragment;
        "ContractForbidden(address)": EventFragment;
        "NewFastCheckParameters(uint256,uint256)": EventFragment;
        "PriceOracleUpdated(address)": EventFragment;
        "TokenAllowed(address,uint256)": EventFragment;
        "TokenForbidden(address)": EventFragment;
        "TransferAccountAllowed(address,address,bool)": EventFragment;
        "TransferPluginAllowed(address,bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ContractAllowed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ContractForbidden"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewFastCheckParameters"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PriceOracleUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenAllowed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenForbidden"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferAccountAllowed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferPluginAllowed"): EventFragment;
}
export interface ContractAllowedEventObject {
    protocol: string;
    adapter: string;
}
export declare type ContractAllowedEvent = TypedEvent<[
    string,
    string
], ContractAllowedEventObject>;
export declare type ContractAllowedEventFilter = TypedEventFilter<ContractAllowedEvent>;
export interface ContractForbiddenEventObject {
    protocol: string;
}
export declare type ContractForbiddenEvent = TypedEvent<[
    string
], ContractForbiddenEventObject>;
export declare type ContractForbiddenEventFilter = TypedEventFilter<ContractForbiddenEvent>;
export interface NewFastCheckParametersEventObject {
    chiThreshold: BigNumber;
    fastCheckDelay: BigNumber;
}
export declare type NewFastCheckParametersEvent = TypedEvent<[
    BigNumber,
    BigNumber
], NewFastCheckParametersEventObject>;
export declare type NewFastCheckParametersEventFilter = TypedEventFilter<NewFastCheckParametersEvent>;
export interface PriceOracleUpdatedEventObject {
    newPriceOracle: string;
}
export declare type PriceOracleUpdatedEvent = TypedEvent<[
    string
], PriceOracleUpdatedEventObject>;
export declare type PriceOracleUpdatedEventFilter = TypedEventFilter<PriceOracleUpdatedEvent>;
export interface TokenAllowedEventObject {
    token: string;
    liquidityThreshold: BigNumber;
}
export declare type TokenAllowedEvent = TypedEvent<[
    string,
    BigNumber
], TokenAllowedEventObject>;
export declare type TokenAllowedEventFilter = TypedEventFilter<TokenAllowedEvent>;
export interface TokenForbiddenEventObject {
    token: string;
}
export declare type TokenForbiddenEvent = TypedEvent<[
    string
], TokenForbiddenEventObject>;
export declare type TokenForbiddenEventFilter = TypedEventFilter<TokenForbiddenEvent>;
export interface TransferAccountAllowedEventObject {
    from: string;
    to: string;
    state: boolean;
}
export declare type TransferAccountAllowedEvent = TypedEvent<[
    string,
    string,
    boolean
], TransferAccountAllowedEventObject>;
export declare type TransferAccountAllowedEventFilter = TypedEventFilter<TransferAccountAllowedEvent>;
export interface TransferPluginAllowedEventObject {
    pugin: string;
    state: boolean;
}
export declare type TransferPluginAllowedEvent = TypedEvent<[
    string,
    boolean
], TransferPluginAllowedEventObject>;
export declare type TransferPluginAllowedEventFilter = TypedEventFilter<TransferPluginAllowedEvent>;
export interface ICreditFilter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ICreditFilterInterface;
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
        allowContract(targetContract: string, adapter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        allowToken(token: string, liquidationThreshold: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        allowanceForAccountTransfers(from: string, to: string, overrides?: CallOverrides): Promise<[boolean]>;
        allowedContracts(id: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        allowedContractsCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        allowedTokens(id: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        allowedTokensCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        approveAccountTransfer(from: string, state: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        calcCreditAccountAccruedInterest(creditAccount: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        calcCreditAccountHealthFactor(creditAccount: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        calcThresholdWeightedValue(creditAccount: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            total: BigNumber;
        }>;
        calcTotalValue(creditAccount: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            total: BigNumber;
        }>;
        checkAndEnableToken(creditAccount: string, token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        checkCollateralChange(creditAccount: string, tokenIn: string, tokenOut: string, amountIn: BigNumberish, amountOut: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        checkMultiTokenCollateral(creditAccount: string, amountIn: BigNumberish[], amountOut: BigNumberish[], tokenIn: string[], tokenOut: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        connectCreditManager(poolService: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        contractToAdapter(allowedContract: string, overrides?: CallOverrides): Promise<[string]>;
        enabledTokens(creditAccount: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        forbidContract(targetContract: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getCreditAccountTokenById(creditAccount: string, id: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            token: string;
            balance: BigNumber;
            tv: BigNumber;
            twv: BigNumber;
        }>;
        initEnabledTokens(creditAccount: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isTokenAllowed(token: string, overrides?: CallOverrides): Promise<[boolean]>;
        liquidationThresholds(token: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        priceOracle(overrides?: CallOverrides): Promise<[string]>;
        revertIfAccountTransferIsNotAllowed(onwer: string, creditAccount: string, overrides?: CallOverrides): Promise<[void]>;
        revertIfCantIncreaseBorrowing(creditAccount: string, minHealthFactor: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        revertIfTokenNotAllowed(token: string, overrides?: CallOverrides): Promise<[void]>;
        underlyingToken(overrides?: CallOverrides): Promise<[string]>;
        updateUnderlyingTokenLiquidationThreshold(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    allowContract(targetContract: string, adapter: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    allowToken(token: string, liquidationThreshold: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    allowanceForAccountTransfers(from: string, to: string, overrides?: CallOverrides): Promise<boolean>;
    allowedContracts(id: BigNumberish, overrides?: CallOverrides): Promise<string>;
    allowedContractsCount(overrides?: CallOverrides): Promise<BigNumber>;
    allowedTokens(id: BigNumberish, overrides?: CallOverrides): Promise<string>;
    allowedTokensCount(overrides?: CallOverrides): Promise<BigNumber>;
    approveAccountTransfer(from: string, state: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    calcCreditAccountAccruedInterest(creditAccount: string, overrides?: CallOverrides): Promise<BigNumber>;
    calcCreditAccountHealthFactor(creditAccount: string, overrides?: CallOverrides): Promise<BigNumber>;
    calcThresholdWeightedValue(creditAccount: string, overrides?: CallOverrides): Promise<BigNumber>;
    calcTotalValue(creditAccount: string, overrides?: CallOverrides): Promise<BigNumber>;
    checkAndEnableToken(creditAccount: string, token: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    checkCollateralChange(creditAccount: string, tokenIn: string, tokenOut: string, amountIn: BigNumberish, amountOut: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    checkMultiTokenCollateral(creditAccount: string, amountIn: BigNumberish[], amountOut: BigNumberish[], tokenIn: string[], tokenOut: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    connectCreditManager(poolService: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    contractToAdapter(allowedContract: string, overrides?: CallOverrides): Promise<string>;
    enabledTokens(creditAccount: string, overrides?: CallOverrides): Promise<BigNumber>;
    forbidContract(targetContract: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getCreditAccountTokenById(creditAccount: string, id: BigNumberish, overrides?: CallOverrides): Promise<[
        string,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        token: string;
        balance: BigNumber;
        tv: BigNumber;
        twv: BigNumber;
    }>;
    initEnabledTokens(creditAccount: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isTokenAllowed(token: string, overrides?: CallOverrides): Promise<boolean>;
    liquidationThresholds(token: string, overrides?: CallOverrides): Promise<BigNumber>;
    priceOracle(overrides?: CallOverrides): Promise<string>;
    revertIfAccountTransferIsNotAllowed(onwer: string, creditAccount: string, overrides?: CallOverrides): Promise<void>;
    revertIfCantIncreaseBorrowing(creditAccount: string, minHealthFactor: BigNumberish, overrides?: CallOverrides): Promise<void>;
    revertIfTokenNotAllowed(token: string, overrides?: CallOverrides): Promise<void>;
    underlyingToken(overrides?: CallOverrides): Promise<string>;
    updateUnderlyingTokenLiquidationThreshold(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        allowContract(targetContract: string, adapter: string, overrides?: CallOverrides): Promise<void>;
        allowToken(token: string, liquidationThreshold: BigNumberish, overrides?: CallOverrides): Promise<void>;
        allowanceForAccountTransfers(from: string, to: string, overrides?: CallOverrides): Promise<boolean>;
        allowedContracts(id: BigNumberish, overrides?: CallOverrides): Promise<string>;
        allowedContractsCount(overrides?: CallOverrides): Promise<BigNumber>;
        allowedTokens(id: BigNumberish, overrides?: CallOverrides): Promise<string>;
        allowedTokensCount(overrides?: CallOverrides): Promise<BigNumber>;
        approveAccountTransfer(from: string, state: boolean, overrides?: CallOverrides): Promise<void>;
        calcCreditAccountAccruedInterest(creditAccount: string, overrides?: CallOverrides): Promise<BigNumber>;
        calcCreditAccountHealthFactor(creditAccount: string, overrides?: CallOverrides): Promise<BigNumber>;
        calcThresholdWeightedValue(creditAccount: string, overrides?: CallOverrides): Promise<BigNumber>;
        calcTotalValue(creditAccount: string, overrides?: CallOverrides): Promise<BigNumber>;
        checkAndEnableToken(creditAccount: string, token: string, overrides?: CallOverrides): Promise<void>;
        checkCollateralChange(creditAccount: string, tokenIn: string, tokenOut: string, amountIn: BigNumberish, amountOut: BigNumberish, overrides?: CallOverrides): Promise<void>;
        checkMultiTokenCollateral(creditAccount: string, amountIn: BigNumberish[], amountOut: BigNumberish[], tokenIn: string[], tokenOut: string[], overrides?: CallOverrides): Promise<void>;
        connectCreditManager(poolService: string, overrides?: CallOverrides): Promise<void>;
        contractToAdapter(allowedContract: string, overrides?: CallOverrides): Promise<string>;
        enabledTokens(creditAccount: string, overrides?: CallOverrides): Promise<BigNumber>;
        forbidContract(targetContract: string, overrides?: CallOverrides): Promise<void>;
        getCreditAccountTokenById(creditAccount: string, id: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            token: string;
            balance: BigNumber;
            tv: BigNumber;
            twv: BigNumber;
        }>;
        initEnabledTokens(creditAccount: string, overrides?: CallOverrides): Promise<void>;
        isTokenAllowed(token: string, overrides?: CallOverrides): Promise<boolean>;
        liquidationThresholds(token: string, overrides?: CallOverrides): Promise<BigNumber>;
        priceOracle(overrides?: CallOverrides): Promise<string>;
        revertIfAccountTransferIsNotAllowed(onwer: string, creditAccount: string, overrides?: CallOverrides): Promise<void>;
        revertIfCantIncreaseBorrowing(creditAccount: string, minHealthFactor: BigNumberish, overrides?: CallOverrides): Promise<void>;
        revertIfTokenNotAllowed(token: string, overrides?: CallOverrides): Promise<void>;
        underlyingToken(overrides?: CallOverrides): Promise<string>;
        updateUnderlyingTokenLiquidationThreshold(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ContractAllowed(address,address)"(protocol?: string | null, adapter?: string | null): ContractAllowedEventFilter;
        ContractAllowed(protocol?: string | null, adapter?: string | null): ContractAllowedEventFilter;
        "ContractForbidden(address)"(protocol?: string | null): ContractForbiddenEventFilter;
        ContractForbidden(protocol?: string | null): ContractForbiddenEventFilter;
        "NewFastCheckParameters(uint256,uint256)"(chiThreshold?: null, fastCheckDelay?: null): NewFastCheckParametersEventFilter;
        NewFastCheckParameters(chiThreshold?: null, fastCheckDelay?: null): NewFastCheckParametersEventFilter;
        "PriceOracleUpdated(address)"(newPriceOracle?: string | null): PriceOracleUpdatedEventFilter;
        PriceOracleUpdated(newPriceOracle?: string | null): PriceOracleUpdatedEventFilter;
        "TokenAllowed(address,uint256)"(token?: string | null, liquidityThreshold?: null): TokenAllowedEventFilter;
        TokenAllowed(token?: string | null, liquidityThreshold?: null): TokenAllowedEventFilter;
        "TokenForbidden(address)"(token?: string | null): TokenForbiddenEventFilter;
        TokenForbidden(token?: string | null): TokenForbiddenEventFilter;
        "TransferAccountAllowed(address,address,bool)"(from?: string | null, to?: string | null, state?: null): TransferAccountAllowedEventFilter;
        TransferAccountAllowed(from?: string | null, to?: string | null, state?: null): TransferAccountAllowedEventFilter;
        "TransferPluginAllowed(address,bool)"(pugin?: string | null, state?: null): TransferPluginAllowedEventFilter;
        TransferPluginAllowed(pugin?: string | null, state?: null): TransferPluginAllowedEventFilter;
    };
    estimateGas: {
        allowContract(targetContract: string, adapter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        allowToken(token: string, liquidationThreshold: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        allowanceForAccountTransfers(from: string, to: string, overrides?: CallOverrides): Promise<BigNumber>;
        allowedContracts(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        allowedContractsCount(overrides?: CallOverrides): Promise<BigNumber>;
        allowedTokens(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        allowedTokensCount(overrides?: CallOverrides): Promise<BigNumber>;
        approveAccountTransfer(from: string, state: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        calcCreditAccountAccruedInterest(creditAccount: string, overrides?: CallOverrides): Promise<BigNumber>;
        calcCreditAccountHealthFactor(creditAccount: string, overrides?: CallOverrides): Promise<BigNumber>;
        calcThresholdWeightedValue(creditAccount: string, overrides?: CallOverrides): Promise<BigNumber>;
        calcTotalValue(creditAccount: string, overrides?: CallOverrides): Promise<BigNumber>;
        checkAndEnableToken(creditAccount: string, token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        checkCollateralChange(creditAccount: string, tokenIn: string, tokenOut: string, amountIn: BigNumberish, amountOut: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        checkMultiTokenCollateral(creditAccount: string, amountIn: BigNumberish[], amountOut: BigNumberish[], tokenIn: string[], tokenOut: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        connectCreditManager(poolService: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        contractToAdapter(allowedContract: string, overrides?: CallOverrides): Promise<BigNumber>;
        enabledTokens(creditAccount: string, overrides?: CallOverrides): Promise<BigNumber>;
        forbidContract(targetContract: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getCreditAccountTokenById(creditAccount: string, id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        initEnabledTokens(creditAccount: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isTokenAllowed(token: string, overrides?: CallOverrides): Promise<BigNumber>;
        liquidationThresholds(token: string, overrides?: CallOverrides): Promise<BigNumber>;
        priceOracle(overrides?: CallOverrides): Promise<BigNumber>;
        revertIfAccountTransferIsNotAllowed(onwer: string, creditAccount: string, overrides?: CallOverrides): Promise<BigNumber>;
        revertIfCantIncreaseBorrowing(creditAccount: string, minHealthFactor: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        revertIfTokenNotAllowed(token: string, overrides?: CallOverrides): Promise<BigNumber>;
        underlyingToken(overrides?: CallOverrides): Promise<BigNumber>;
        updateUnderlyingTokenLiquidationThreshold(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        allowContract(targetContract: string, adapter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        allowToken(token: string, liquidationThreshold: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        allowanceForAccountTransfers(from: string, to: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowedContracts(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowedContractsCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowedTokens(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowedTokensCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approveAccountTransfer(from: string, state: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        calcCreditAccountAccruedInterest(creditAccount: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calcCreditAccountHealthFactor(creditAccount: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calcThresholdWeightedValue(creditAccount: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calcTotalValue(creditAccount: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkAndEnableToken(creditAccount: string, token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        checkCollateralChange(creditAccount: string, tokenIn: string, tokenOut: string, amountIn: BigNumberish, amountOut: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        checkMultiTokenCollateral(creditAccount: string, amountIn: BigNumberish[], amountOut: BigNumberish[], tokenIn: string[], tokenOut: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        connectCreditManager(poolService: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        contractToAdapter(allowedContract: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        enabledTokens(creditAccount: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        forbidContract(targetContract: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getCreditAccountTokenById(creditAccount: string, id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initEnabledTokens(creditAccount: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isTokenAllowed(token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        liquidationThresholds(token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        priceOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        revertIfAccountTransferIsNotAllowed(onwer: string, creditAccount: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        revertIfCantIncreaseBorrowing(creditAccount: string, minHealthFactor: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        revertIfTokenNotAllowed(token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        underlyingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateUnderlyingTokenLiquidationThreshold(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
