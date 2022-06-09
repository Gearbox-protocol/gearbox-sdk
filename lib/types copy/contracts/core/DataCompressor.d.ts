import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export declare type TokenBalanceStruct = {
    token: string;
    balance: BigNumberish;
    isAllowed: boolean;
    isEnabled: boolean;
};
export declare type TokenBalanceStructOutput = [string, BigNumber, boolean, boolean] & {
    token: string;
    balance: BigNumber;
    isAllowed: boolean;
    isEnabled: boolean;
};
export declare type CreditAccountDataStruct = {
    addr: string;
    borrower: string;
    inUse: boolean;
    creditManager: string;
    underlying: string;
    borrowedAmountPlusInterest: BigNumberish;
    totalValue: BigNumberish;
    healthFactor: BigNumberish;
    borrowRate: BigNumberish;
    balances: TokenBalanceStruct[];
    repayAmount: BigNumberish;
    liquidationAmount: BigNumberish;
    canBeClosed: boolean;
    borrowedAmount: BigNumberish;
    cumulativeIndexAtOpen: BigNumberish;
    since: BigNumberish;
    version: BigNumberish;
    enabledTokenMask: BigNumberish;
};
export declare type CreditAccountDataStructOutput = [
    string,
    string,
    boolean,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    TokenBalanceStructOutput[],
    BigNumber,
    BigNumber,
    boolean,
    BigNumber,
    BigNumber,
    BigNumber,
    number,
    BigNumber
] & {
    addr: string;
    borrower: string;
    inUse: boolean;
    creditManager: string;
    underlying: string;
    borrowedAmountPlusInterest: BigNumber;
    totalValue: BigNumber;
    healthFactor: BigNumber;
    borrowRate: BigNumber;
    balances: TokenBalanceStructOutput[];
    repayAmount: BigNumber;
    liquidationAmount: BigNumber;
    canBeClosed: boolean;
    borrowedAmount: BigNumber;
    cumulativeIndexAtOpen: BigNumber;
    since: BigNumber;
    version: number;
    enabledTokenMask: BigNumber;
};
export declare type ContractAdapterStruct = {
    allowedContract: string;
    adapter: string;
};
export declare type ContractAdapterStructOutput = [string, string] & {
    allowedContract: string;
    adapter: string;
};
export declare type CreditManagerDataStruct = {
    addr: string;
    underlying: string;
    isWETH: boolean;
    canBorrow: boolean;
    borrowRate: BigNumberish;
    minAmount: BigNumberish;
    maxAmount: BigNumberish;
    maxLeverageFactor: BigNumberish;
    availableLiquidity: BigNumberish;
    collateralTokens: string[];
    adapters: ContractAdapterStruct[];
    liquidationThresholds: BigNumberish[];
    version: BigNumberish;
    creditFacade: string;
    isDegenMode: boolean;
    degenNFT: string;
    isIncreaseDebtForbidden: boolean;
    forbiddenTokenMask: BigNumberish;
};
export declare type CreditManagerDataStructOutput = [
    string,
    string,
    boolean,
    boolean,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string[],
    ContractAdapterStructOutput[],
    BigNumber[],
    number,
    string,
    boolean,
    string,
    boolean,
    BigNumber
] & {
    addr: string;
    underlying: string;
    isWETH: boolean;
    canBorrow: boolean;
    borrowRate: BigNumber;
    minAmount: BigNumber;
    maxAmount: BigNumber;
    maxLeverageFactor: BigNumber;
    availableLiquidity: BigNumber;
    collateralTokens: string[];
    adapters: ContractAdapterStructOutput[];
    liquidationThresholds: BigNumber[];
    version: number;
    creditFacade: string;
    isDegenMode: boolean;
    degenNFT: string;
    isIncreaseDebtForbidden: boolean;
    forbiddenTokenMask: BigNumber;
};
export declare type PoolDataStruct = {
    addr: string;
    isWETH: boolean;
    underlying: string;
    dieselToken: string;
    linearCumulativeIndex: BigNumberish;
    availableLiquidity: BigNumberish;
    expectedLiquidity: BigNumberish;
    expectedLiquidityLimit: BigNumberish;
    totalBorrowed: BigNumberish;
    depositAPY_RAY: BigNumberish;
    borrowAPY_RAY: BigNumberish;
    dieselRate_RAY: BigNumberish;
    withdrawFee: BigNumberish;
    cumulativeIndex_RAY: BigNumberish;
    timestampLU: BigNumberish;
    version: BigNumberish;
};
export declare type PoolDataStructOutput = [
    string,
    boolean,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    number
] & {
    addr: string;
    isWETH: boolean;
    underlying: string;
    dieselToken: string;
    linearCumulativeIndex: BigNumber;
    availableLiquidity: BigNumber;
    expectedLiquidity: BigNumber;
    expectedLiquidityLimit: BigNumber;
    totalBorrowed: BigNumber;
    depositAPY_RAY: BigNumber;
    borrowAPY_RAY: BigNumber;
    dieselRate_RAY: BigNumber;
    withdrawFee: BigNumber;
    cumulativeIndex_RAY: BigNumber;
    timestampLU: BigNumber;
    version: number;
};
export interface DataCompressorInterface extends utils.Interface {
    functions: {
        "WETHToken()": FunctionFragment;
        "addressProvider()": FunctionFragment;
        "contractsRegister()": FunctionFragment;
        "getAdapter(address,address)": FunctionFragment;
        "getCreditAccountData(address,address)": FunctionFragment;
        "getCreditAccountList(address)": FunctionFragment;
        "getCreditManagerData(address)": FunctionFragment;
        "getCreditManagersList()": FunctionFragment;
        "getPoolData(address)": FunctionFragment;
        "getPoolsList()": FunctionFragment;
        "hasOpenedCreditAccount(address,address)": FunctionFragment;
        "version()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "WETHToken" | "addressProvider" | "contractsRegister" | "getAdapter" | "getCreditAccountData" | "getCreditAccountList" | "getCreditManagerData" | "getCreditManagersList" | "getPoolData" | "getPoolsList" | "hasOpenedCreditAccount" | "version"): FunctionFragment;
    encodeFunctionData(functionFragment: "WETHToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "addressProvider", values?: undefined): string;
    encodeFunctionData(functionFragment: "contractsRegister", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAdapter", values: [string, string]): string;
    encodeFunctionData(functionFragment: "getCreditAccountData", values: [string, string]): string;
    encodeFunctionData(functionFragment: "getCreditAccountList", values: [string]): string;
    encodeFunctionData(functionFragment: "getCreditManagerData", values: [string]): string;
    encodeFunctionData(functionFragment: "getCreditManagersList", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPoolData", values: [string]): string;
    encodeFunctionData(functionFragment: "getPoolsList", values?: undefined): string;
    encodeFunctionData(functionFragment: "hasOpenedCreditAccount", values: [string, string]): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    decodeFunctionResult(functionFragment: "WETHToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addressProvider", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractsRegister", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAdapter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCreditAccountData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCreditAccountList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCreditManagerData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCreditManagersList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPoolData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPoolsList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasOpenedCreditAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
    events: {};
}
export interface DataCompressor extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DataCompressorInterface;
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
        WETHToken(overrides?: CallOverrides): Promise<[string]>;
        addressProvider(overrides?: CallOverrides): Promise<[string]>;
        contractsRegister(overrides?: CallOverrides): Promise<[string]>;
        getAdapter(_creditManager: string, _allowedContract: string, overrides?: CallOverrides): Promise<[string] & {
            adapter: string;
        }>;
        getCreditAccountData(_creditManager: string, borrower: string, overrides?: CallOverrides): Promise<[
            CreditAccountDataStructOutput
        ] & {
            result: CreditAccountDataStructOutput;
        }>;
        getCreditAccountList(borrower: string, overrides?: CallOverrides): Promise<[
            CreditAccountDataStructOutput[]
        ] & {
            result: CreditAccountDataStructOutput[];
        }>;
        getCreditManagerData(_creditManager: string, overrides?: CallOverrides): Promise<[
            CreditManagerDataStructOutput
        ] & {
            result: CreditManagerDataStructOutput;
        }>;
        getCreditManagersList(overrides?: CallOverrides): Promise<[
            CreditManagerDataStructOutput[]
        ] & {
            result: CreditManagerDataStructOutput[];
        }>;
        getPoolData(_pool: string, overrides?: CallOverrides): Promise<[PoolDataStructOutput] & {
            result: PoolDataStructOutput;
        }>;
        getPoolsList(overrides?: CallOverrides): Promise<[PoolDataStructOutput[]] & {
            result: PoolDataStructOutput[];
        }>;
        hasOpenedCreditAccount(_creditManager: string, borrower: string, overrides?: CallOverrides): Promise<[boolean]>;
        version(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    WETHToken(overrides?: CallOverrides): Promise<string>;
    addressProvider(overrides?: CallOverrides): Promise<string>;
    contractsRegister(overrides?: CallOverrides): Promise<string>;
    getAdapter(_creditManager: string, _allowedContract: string, overrides?: CallOverrides): Promise<string>;
    getCreditAccountData(_creditManager: string, borrower: string, overrides?: CallOverrides): Promise<CreditAccountDataStructOutput>;
    getCreditAccountList(borrower: string, overrides?: CallOverrides): Promise<CreditAccountDataStructOutput[]>;
    getCreditManagerData(_creditManager: string, overrides?: CallOverrides): Promise<CreditManagerDataStructOutput>;
    getCreditManagersList(overrides?: CallOverrides): Promise<CreditManagerDataStructOutput[]>;
    getPoolData(_pool: string, overrides?: CallOverrides): Promise<PoolDataStructOutput>;
    getPoolsList(overrides?: CallOverrides): Promise<PoolDataStructOutput[]>;
    hasOpenedCreditAccount(_creditManager: string, borrower: string, overrides?: CallOverrides): Promise<boolean>;
    version(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        WETHToken(overrides?: CallOverrides): Promise<string>;
        addressProvider(overrides?: CallOverrides): Promise<string>;
        contractsRegister(overrides?: CallOverrides): Promise<string>;
        getAdapter(_creditManager: string, _allowedContract: string, overrides?: CallOverrides): Promise<string>;
        getCreditAccountData(_creditManager: string, borrower: string, overrides?: CallOverrides): Promise<CreditAccountDataStructOutput>;
        getCreditAccountList(borrower: string, overrides?: CallOverrides): Promise<CreditAccountDataStructOutput[]>;
        getCreditManagerData(_creditManager: string, overrides?: CallOverrides): Promise<CreditManagerDataStructOutput>;
        getCreditManagersList(overrides?: CallOverrides): Promise<CreditManagerDataStructOutput[]>;
        getPoolData(_pool: string, overrides?: CallOverrides): Promise<PoolDataStructOutput>;
        getPoolsList(overrides?: CallOverrides): Promise<PoolDataStructOutput[]>;
        hasOpenedCreditAccount(_creditManager: string, borrower: string, overrides?: CallOverrides): Promise<boolean>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        WETHToken(overrides?: CallOverrides): Promise<BigNumber>;
        addressProvider(overrides?: CallOverrides): Promise<BigNumber>;
        contractsRegister(overrides?: CallOverrides): Promise<BigNumber>;
        getAdapter(_creditManager: string, _allowedContract: string, overrides?: CallOverrides): Promise<BigNumber>;
        getCreditAccountData(_creditManager: string, borrower: string, overrides?: CallOverrides): Promise<BigNumber>;
        getCreditAccountList(borrower: string, overrides?: CallOverrides): Promise<BigNumber>;
        getCreditManagerData(_creditManager: string, overrides?: CallOverrides): Promise<BigNumber>;
        getCreditManagersList(overrides?: CallOverrides): Promise<BigNumber>;
        getPoolData(_pool: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPoolsList(overrides?: CallOverrides): Promise<BigNumber>;
        hasOpenedCreditAccount(_creditManager: string, borrower: string, overrides?: CallOverrides): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        WETHToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addressProvider(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        contractsRegister(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAdapter(_creditManager: string, _allowedContract: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCreditAccountData(_creditManager: string, borrower: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCreditAccountList(borrower: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCreditManagerData(_creditManager: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCreditManagersList(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPoolData(_pool: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPoolsList(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hasOpenedCreditAccount(_creditManager: string, borrower: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
