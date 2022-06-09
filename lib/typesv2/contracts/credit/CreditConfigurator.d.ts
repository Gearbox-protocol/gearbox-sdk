import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export declare type CollateralTokenStruct = {
    token: string;
    liquidationThreshold: BigNumberish;
};
export declare type CollateralTokenStructOutput = [string, number] & {
    token: string;
    liquidationThreshold: number;
};
export declare type CreditManagerOptsStruct = {
    minBorrowedAmount: BigNumberish;
    maxBorrowedAmount: BigNumberish;
    collateralTokens: CollateralTokenStruct[];
    degenNFT: string;
};
export declare type CreditManagerOptsStructOutput = [
    BigNumber,
    BigNumber,
    CollateralTokenStructOutput[],
    string
] & {
    minBorrowedAmount: BigNumber;
    maxBorrowedAmount: BigNumber;
    collateralTokens: CollateralTokenStructOutput[];
    degenNFT: string;
};
export interface CreditConfiguratorInterface extends utils.Interface {
    functions: {
        "addCollateralToken(address,uint16)": FunctionFragment;
        "addressProvider()": FunctionFragment;
        "allowContract(address,address)": FunctionFragment;
        "allowToken(address)": FunctionFragment;
        "allowedContracts(uint256)": FunctionFragment;
        "allowedContractsCount()": FunctionFragment;
        "creditFacade()": FunctionFragment;
        "creditManager()": FunctionFragment;
        "forbidContract(address)": FunctionFragment;
        "forbidToken(address)": FunctionFragment;
        "pause()": FunctionFragment;
        "paused()": FunctionFragment;
        "setFees(uint16,uint16,uint16)": FunctionFragment;
        "setIncreaseDebtForbidden(bool)": FunctionFragment;
        "setLimitPerBlock(uint128)": FunctionFragment;
        "setLimits(uint128,uint128)": FunctionFragment;
        "setLiquidationThreshold(address,uint16)": FunctionFragment;
        "underlying()": FunctionFragment;
        "unpause()": FunctionFragment;
        "upgradeCreditConfigurator(address)": FunctionFragment;
        "upgradeCreditFacade(address,bool)": FunctionFragment;
        "upgradePriceOracle()": FunctionFragment;
        "version()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addCollateralToken" | "addressProvider" | "allowContract" | "allowToken" | "allowedContracts" | "allowedContractsCount" | "creditFacade" | "creditManager" | "forbidContract" | "forbidToken" | "pause" | "paused" | "setFees" | "setIncreaseDebtForbidden" | "setLimitPerBlock" | "setLimits" | "setLiquidationThreshold" | "underlying" | "unpause" | "upgradeCreditConfigurator" | "upgradeCreditFacade" | "upgradePriceOracle" | "version"): FunctionFragment;
    encodeFunctionData(functionFragment: "addCollateralToken", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "addressProvider", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowContract", values: [string, string]): string;
    encodeFunctionData(functionFragment: "allowToken", values: [string]): string;
    encodeFunctionData(functionFragment: "allowedContracts", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "allowedContractsCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "creditFacade", values?: undefined): string;
    encodeFunctionData(functionFragment: "creditManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "forbidContract", values: [string]): string;
    encodeFunctionData(functionFragment: "forbidToken", values: [string]): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "setFees", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setIncreaseDebtForbidden", values: [boolean]): string;
    encodeFunctionData(functionFragment: "setLimitPerBlock", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setLimits", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setLiquidationThreshold", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "underlying", values?: undefined): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "upgradeCreditConfigurator", values: [string]): string;
    encodeFunctionData(functionFragment: "upgradeCreditFacade", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "upgradePriceOracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    decodeFunctionResult(functionFragment: "addCollateralToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addressProvider", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowedContracts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowedContractsCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditFacade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forbidContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forbidToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setIncreaseDebtForbidden", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLimitPerBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLimits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLiquidationThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "underlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeCreditConfigurator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeCreditFacade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradePriceOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
    events: {
        "ContractAllowed(address,address)": EventFragment;
        "ContractForbidden(address)": EventFragment;
        "CreditConfiguratorUpgraded(address)": EventFragment;
        "CreditFacadeUpgraded(address)": EventFragment;
        "DegenModeUpdated(bool)": EventFragment;
        "FeesUpdated(uint16,uint16,uint16)": EventFragment;
        "IncreaseDebtModeUpdated(bool)": EventFragment;
        "LimitPerBlockUpdated(uint128)": EventFragment;
        "LimitsUpdated(uint256,uint256)": EventFragment;
        "Paused(address)": EventFragment;
        "PriceOracleUpgraded(address)": EventFragment;
        "TokenAllowed(address)": EventFragment;
        "TokenForbidden(address)": EventFragment;
        "TokenLiquidationThresholdUpdated(address,uint16)": EventFragment;
        "Unpaused(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ContractAllowed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ContractForbidden"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CreditConfiguratorUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CreditFacadeUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DegenModeUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FeesUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IncreaseDebtModeUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LimitPerBlockUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LimitsUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PriceOracleUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenAllowed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenForbidden"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenLiquidationThresholdUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
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
export interface CreditConfiguratorUpgradedEventObject {
    newCreditConfigurator: string;
}
export declare type CreditConfiguratorUpgradedEvent = TypedEvent<[
    string
], CreditConfiguratorUpgradedEventObject>;
export declare type CreditConfiguratorUpgradedEventFilter = TypedEventFilter<CreditConfiguratorUpgradedEvent>;
export interface CreditFacadeUpgradedEventObject {
    newCreditFacade: string;
}
export declare type CreditFacadeUpgradedEvent = TypedEvent<[
    string
], CreditFacadeUpgradedEventObject>;
export declare type CreditFacadeUpgradedEventFilter = TypedEventFilter<CreditFacadeUpgradedEvent>;
export interface DegenModeUpdatedEventObject {
    arg0: boolean;
}
export declare type DegenModeUpdatedEvent = TypedEvent<[
    boolean
], DegenModeUpdatedEventObject>;
export declare type DegenModeUpdatedEventFilter = TypedEventFilter<DegenModeUpdatedEvent>;
export interface FeesUpdatedEventObject {
    feeInterest: number;
    feeLiquidation: number;
    liquidationPremium: number;
}
export declare type FeesUpdatedEvent = TypedEvent<[
    number,
    number,
    number
], FeesUpdatedEventObject>;
export declare type FeesUpdatedEventFilter = TypedEventFilter<FeesUpdatedEvent>;
export interface IncreaseDebtModeUpdatedEventObject {
    arg0: boolean;
}
export declare type IncreaseDebtModeUpdatedEvent = TypedEvent<[
    boolean
], IncreaseDebtModeUpdatedEventObject>;
export declare type IncreaseDebtModeUpdatedEventFilter = TypedEventFilter<IncreaseDebtModeUpdatedEvent>;
export interface LimitPerBlockUpdatedEventObject {
    arg0: BigNumber;
}
export declare type LimitPerBlockUpdatedEvent = TypedEvent<[
    BigNumber
], LimitPerBlockUpdatedEventObject>;
export declare type LimitPerBlockUpdatedEventFilter = TypedEventFilter<LimitPerBlockUpdatedEvent>;
export interface LimitsUpdatedEventObject {
    minBorrowedAmount: BigNumber;
    maxBorrowedAmount: BigNumber;
}
export declare type LimitsUpdatedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], LimitsUpdatedEventObject>;
export declare type LimitsUpdatedEventFilter = TypedEventFilter<LimitsUpdatedEvent>;
export interface PausedEventObject {
    account: string;
}
export declare type PausedEvent = TypedEvent<[string], PausedEventObject>;
export declare type PausedEventFilter = TypedEventFilter<PausedEvent>;
export interface PriceOracleUpgradedEventObject {
    newPriceOracle: string;
}
export declare type PriceOracleUpgradedEvent = TypedEvent<[
    string
], PriceOracleUpgradedEventObject>;
export declare type PriceOracleUpgradedEventFilter = TypedEventFilter<PriceOracleUpgradedEvent>;
export interface TokenAllowedEventObject {
    token: string;
}
export declare type TokenAllowedEvent = TypedEvent<[string], TokenAllowedEventObject>;
export declare type TokenAllowedEventFilter = TypedEventFilter<TokenAllowedEvent>;
export interface TokenForbiddenEventObject {
    token: string;
}
export declare type TokenForbiddenEvent = TypedEvent<[
    string
], TokenForbiddenEventObject>;
export declare type TokenForbiddenEventFilter = TypedEventFilter<TokenForbiddenEvent>;
export interface TokenLiquidationThresholdUpdatedEventObject {
    token: string;
    liquidityThreshold: number;
}
export declare type TokenLiquidationThresholdUpdatedEvent = TypedEvent<[
    string,
    number
], TokenLiquidationThresholdUpdatedEventObject>;
export declare type TokenLiquidationThresholdUpdatedEventFilter = TypedEventFilter<TokenLiquidationThresholdUpdatedEvent>;
export interface UnpausedEventObject {
    account: string;
}
export declare type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;
export declare type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export interface CreditConfigurator extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CreditConfiguratorInterface;
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
        addCollateralToken(token: string, liquidationThreshold: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addressProvider(overrides?: CallOverrides): Promise<[string]>;
        allowContract(targetContract: string, adapter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        allowToken(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        allowedContracts(i: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        allowedContractsCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        creditFacade(overrides?: CallOverrides): Promise<[string]>;
        creditManager(overrides?: CallOverrides): Promise<[string]>;
        forbidContract(targetContract: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        forbidToken(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        setFees(_feeInterest: BigNumberish, _feeLiquidation: BigNumberish, _liquidationPremium: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setIncreaseDebtForbidden(_mode: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setLimitPerBlock(newLimit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setLimits(_minBorrowedAmount: BigNumberish, _maxBorrowedAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setLiquidationThreshold(token: string, liquidationThreshold: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        underlying(overrides?: CallOverrides): Promise<[string]>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        upgradeCreditConfigurator(_creditConfigurator: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        upgradeCreditFacade(_creditFacade: string, migrateLimits: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        upgradePriceOracle(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        version(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    addCollateralToken(token: string, liquidationThreshold: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addressProvider(overrides?: CallOverrides): Promise<string>;
    allowContract(targetContract: string, adapter: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    allowToken(token: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    allowedContracts(i: BigNumberish, overrides?: CallOverrides): Promise<string>;
    allowedContractsCount(overrides?: CallOverrides): Promise<BigNumber>;
    creditFacade(overrides?: CallOverrides): Promise<string>;
    creditManager(overrides?: CallOverrides): Promise<string>;
    forbidContract(targetContract: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    forbidToken(token: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    pause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    setFees(_feeInterest: BigNumberish, _feeLiquidation: BigNumberish, _liquidationPremium: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setIncreaseDebtForbidden(_mode: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setLimitPerBlock(newLimit: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setLimits(_minBorrowedAmount: BigNumberish, _maxBorrowedAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setLiquidationThreshold(token: string, liquidationThreshold: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    underlying(overrides?: CallOverrides): Promise<string>;
    unpause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    upgradeCreditConfigurator(_creditConfigurator: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    upgradeCreditFacade(_creditFacade: string, migrateLimits: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    upgradePriceOracle(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    version(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        addCollateralToken(token: string, liquidationThreshold: BigNumberish, overrides?: CallOverrides): Promise<void>;
        addressProvider(overrides?: CallOverrides): Promise<string>;
        allowContract(targetContract: string, adapter: string, overrides?: CallOverrides): Promise<void>;
        allowToken(token: string, overrides?: CallOverrides): Promise<void>;
        allowedContracts(i: BigNumberish, overrides?: CallOverrides): Promise<string>;
        allowedContractsCount(overrides?: CallOverrides): Promise<BigNumber>;
        creditFacade(overrides?: CallOverrides): Promise<string>;
        creditManager(overrides?: CallOverrides): Promise<string>;
        forbidContract(targetContract: string, overrides?: CallOverrides): Promise<void>;
        forbidToken(token: string, overrides?: CallOverrides): Promise<void>;
        pause(overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        setFees(_feeInterest: BigNumberish, _feeLiquidation: BigNumberish, _liquidationPremium: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setIncreaseDebtForbidden(_mode: boolean, overrides?: CallOverrides): Promise<void>;
        setLimitPerBlock(newLimit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setLimits(_minBorrowedAmount: BigNumberish, _maxBorrowedAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setLiquidationThreshold(token: string, liquidationThreshold: BigNumberish, overrides?: CallOverrides): Promise<void>;
        underlying(overrides?: CallOverrides): Promise<string>;
        unpause(overrides?: CallOverrides): Promise<void>;
        upgradeCreditConfigurator(_creditConfigurator: string, overrides?: CallOverrides): Promise<void>;
        upgradeCreditFacade(_creditFacade: string, migrateLimits: boolean, overrides?: CallOverrides): Promise<void>;
        upgradePriceOracle(overrides?: CallOverrides): Promise<void>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "ContractAllowed(address,address)"(protocol?: string | null, adapter?: string | null): ContractAllowedEventFilter;
        ContractAllowed(protocol?: string | null, adapter?: string | null): ContractAllowedEventFilter;
        "ContractForbidden(address)"(protocol?: string | null): ContractForbiddenEventFilter;
        ContractForbidden(protocol?: string | null): ContractForbiddenEventFilter;
        "CreditConfiguratorUpgraded(address)"(newCreditConfigurator?: string | null): CreditConfiguratorUpgradedEventFilter;
        CreditConfiguratorUpgraded(newCreditConfigurator?: string | null): CreditConfiguratorUpgradedEventFilter;
        "CreditFacadeUpgraded(address)"(newCreditFacade?: string | null): CreditFacadeUpgradedEventFilter;
        CreditFacadeUpgraded(newCreditFacade?: string | null): CreditFacadeUpgradedEventFilter;
        "DegenModeUpdated(bool)"(arg0?: null): DegenModeUpdatedEventFilter;
        DegenModeUpdated(arg0?: null): DegenModeUpdatedEventFilter;
        "FeesUpdated(uint16,uint16,uint16)"(feeInterest?: null, feeLiquidation?: null, liquidationPremium?: null): FeesUpdatedEventFilter;
        FeesUpdated(feeInterest?: null, feeLiquidation?: null, liquidationPremium?: null): FeesUpdatedEventFilter;
        "IncreaseDebtModeUpdated(bool)"(arg0?: null): IncreaseDebtModeUpdatedEventFilter;
        IncreaseDebtModeUpdated(arg0?: null): IncreaseDebtModeUpdatedEventFilter;
        "LimitPerBlockUpdated(uint128)"(arg0?: null): LimitPerBlockUpdatedEventFilter;
        LimitPerBlockUpdated(arg0?: null): LimitPerBlockUpdatedEventFilter;
        "LimitsUpdated(uint256,uint256)"(minBorrowedAmount?: null, maxBorrowedAmount?: null): LimitsUpdatedEventFilter;
        LimitsUpdated(minBorrowedAmount?: null, maxBorrowedAmount?: null): LimitsUpdatedEventFilter;
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "PriceOracleUpgraded(address)"(newPriceOracle?: string | null): PriceOracleUpgradedEventFilter;
        PriceOracleUpgraded(newPriceOracle?: string | null): PriceOracleUpgradedEventFilter;
        "TokenAllowed(address)"(token?: string | null): TokenAllowedEventFilter;
        TokenAllowed(token?: string | null): TokenAllowedEventFilter;
        "TokenForbidden(address)"(token?: string | null): TokenForbiddenEventFilter;
        TokenForbidden(token?: string | null): TokenForbiddenEventFilter;
        "TokenLiquidationThresholdUpdated(address,uint16)"(token?: string | null, liquidityThreshold?: null): TokenLiquidationThresholdUpdatedEventFilter;
        TokenLiquidationThresholdUpdated(token?: string | null, liquidityThreshold?: null): TokenLiquidationThresholdUpdatedEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
    };
    estimateGas: {
        addCollateralToken(token: string, liquidationThreshold: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addressProvider(overrides?: CallOverrides): Promise<BigNumber>;
        allowContract(targetContract: string, adapter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        allowToken(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        allowedContracts(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        allowedContractsCount(overrides?: CallOverrides): Promise<BigNumber>;
        creditFacade(overrides?: CallOverrides): Promise<BigNumber>;
        creditManager(overrides?: CallOverrides): Promise<BigNumber>;
        forbidContract(targetContract: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        forbidToken(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        setFees(_feeInterest: BigNumberish, _feeLiquidation: BigNumberish, _liquidationPremium: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setIncreaseDebtForbidden(_mode: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setLimitPerBlock(newLimit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setLimits(_minBorrowedAmount: BigNumberish, _maxBorrowedAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setLiquidationThreshold(token: string, liquidationThreshold: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        underlying(overrides?: CallOverrides): Promise<BigNumber>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        upgradeCreditConfigurator(_creditConfigurator: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        upgradeCreditFacade(_creditFacade: string, migrateLimits: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        upgradePriceOracle(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        addCollateralToken(token: string, liquidationThreshold: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addressProvider(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowContract(targetContract: string, adapter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        allowToken(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        allowedContracts(i: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowedContractsCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditFacade(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        forbidContract(targetContract: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        forbidToken(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setFees(_feeInterest: BigNumberish, _feeLiquidation: BigNumberish, _liquidationPremium: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setIncreaseDebtForbidden(_mode: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setLimitPerBlock(newLimit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setLimits(_minBorrowedAmount: BigNumberish, _maxBorrowedAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setLiquidationThreshold(token: string, liquidationThreshold: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        underlying(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        upgradeCreditConfigurator(_creditConfigurator: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        upgradeCreditFacade(_creditFacade: string, migrateLimits: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        upgradePriceOracle(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
