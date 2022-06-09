import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export declare type ExchangeStruct = {
    path: string[];
    amountOutMin: BigNumberish;
};
export declare type ExchangeStructOutput = [string[], BigNumber] & {
    path: string[];
    amountOutMin: BigNumber;
};
export interface ICreditManagerInterface extends utils.Interface {
    functions: {
        "_calcClosePayments(address,uint256,bool)": FunctionFragment;
        "addCollateral(address,address,uint256)": FunctionFragment;
        "approve(address,address)": FunctionFragment;
        "calcRepayAmount(address,bool)": FunctionFragment;
        "closeCreditAccount(address,(address[],uint256)[])": FunctionFragment;
        "creditAccounts(address)": FunctionFragment;
        "creditFilter()": FunctionFragment;
        "defaultSwapContract()": FunctionFragment;
        "executeOrder(address,address,bytes)": FunctionFragment;
        "feeInterest()": FunctionFragment;
        "feeLiquidation()": FunctionFragment;
        "getCreditAccountOrRevert(address)": FunctionFragment;
        "hasOpenedCreditAccount(address)": FunctionFragment;
        "increaseBorrowedAmount(uint256)": FunctionFragment;
        "liquidateCreditAccount(address,address,bool)": FunctionFragment;
        "liquidationDiscount()": FunctionFragment;
        "maxAmount()": FunctionFragment;
        "maxLeverageFactor()": FunctionFragment;
        "minAmount()": FunctionFragment;
        "minHealthFactor()": FunctionFragment;
        "openCreditAccount(uint256,address,uint256,uint256)": FunctionFragment;
        "poolService()": FunctionFragment;
        "provideCreditAccountAllowance(address,address,address)": FunctionFragment;
        "repayCreditAccount(address)": FunctionFragment;
        "repayCreditAccountETH(address,address)": FunctionFragment;
        "transferAccountOwnership(address)": FunctionFragment;
        "underlyingToken()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_calcClosePayments" | "addCollateral" | "approve" | "calcRepayAmount" | "closeCreditAccount" | "creditAccounts" | "creditFilter" | "defaultSwapContract" | "executeOrder" | "feeInterest" | "feeLiquidation" | "getCreditAccountOrRevert" | "hasOpenedCreditAccount" | "increaseBorrowedAmount" | "liquidateCreditAccount" | "liquidationDiscount" | "maxAmount" | "maxLeverageFactor" | "minAmount" | "minHealthFactor" | "openCreditAccount" | "poolService" | "provideCreditAccountAllowance" | "repayCreditAccount" | "repayCreditAccountETH" | "transferAccountOwnership" | "underlyingToken"): FunctionFragment;
    encodeFunctionData(functionFragment: "_calcClosePayments", values: [string, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "addCollateral", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "approve", values: [string, string]): string;
    encodeFunctionData(functionFragment: "calcRepayAmount", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "closeCreditAccount", values: [string, ExchangeStruct[]]): string;
    encodeFunctionData(functionFragment: "creditAccounts", values: [string]): string;
    encodeFunctionData(functionFragment: "creditFilter", values?: undefined): string;
    encodeFunctionData(functionFragment: "defaultSwapContract", values?: undefined): string;
    encodeFunctionData(functionFragment: "executeOrder", values: [string, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "feeInterest", values?: undefined): string;
    encodeFunctionData(functionFragment: "feeLiquidation", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCreditAccountOrRevert", values: [string]): string;
    encodeFunctionData(functionFragment: "hasOpenedCreditAccount", values: [string]): string;
    encodeFunctionData(functionFragment: "increaseBorrowedAmount", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "liquidateCreditAccount", values: [string, string, boolean]): string;
    encodeFunctionData(functionFragment: "liquidationDiscount", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxLeverageFactor", values?: undefined): string;
    encodeFunctionData(functionFragment: "minAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "minHealthFactor", values?: undefined): string;
    encodeFunctionData(functionFragment: "openCreditAccount", values: [BigNumberish, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "poolService", values?: undefined): string;
    encodeFunctionData(functionFragment: "provideCreditAccountAllowance", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "repayCreditAccount", values: [string]): string;
    encodeFunctionData(functionFragment: "repayCreditAccountETH", values: [string, string]): string;
    encodeFunctionData(functionFragment: "transferAccountOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "underlyingToken", values?: undefined): string;
    decodeFunctionResult(functionFragment: "_calcClosePayments", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calcRepayAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "closeCreditAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditAccounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditFilter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "defaultSwapContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeInterest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeLiquidation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCreditAccountOrRevert", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasOpenedCreditAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseBorrowedAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidateCreditAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidationDiscount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxLeverageFactor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minHealthFactor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openCreditAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolService", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "provideCreditAccountAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repayCreditAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repayCreditAccountETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferAccountOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "underlyingToken", data: BytesLike): Result;
    events: {
        "AddCollateral(address,address,uint256)": EventFragment;
        "CloseCreditAccount(address,address,uint256)": EventFragment;
        "ExecuteOrder(address,address)": EventFragment;
        "IncreaseBorrowedAmount(address,uint256)": EventFragment;
        "LiquidateCreditAccount(address,address,uint256)": EventFragment;
        "NewParameters(uint256,uint256,uint256,uint256,uint256,uint256)": EventFragment;
        "OpenCreditAccount(address,address,address,uint256,uint256,uint256)": EventFragment;
        "RepayCreditAccount(address,address)": EventFragment;
        "TransferAccount(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddCollateral"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CloseCreditAccount"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExecuteOrder"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IncreaseBorrowedAmount"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiquidateCreditAccount"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewParameters"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OpenCreditAccount"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RepayCreditAccount"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferAccount"): EventFragment;
}
export interface AddCollateralEventObject {
    onBehalfOf: string;
    token: string;
    value: BigNumber;
}
export declare type AddCollateralEvent = TypedEvent<[
    string,
    string,
    BigNumber
], AddCollateralEventObject>;
export declare type AddCollateralEventFilter = TypedEventFilter<AddCollateralEvent>;
export interface CloseCreditAccountEventObject {
    owner: string;
    to: string;
    remainingFunds: BigNumber;
}
export declare type CloseCreditAccountEvent = TypedEvent<[
    string,
    string,
    BigNumber
], CloseCreditAccountEventObject>;
export declare type CloseCreditAccountEventFilter = TypedEventFilter<CloseCreditAccountEvent>;
export interface ExecuteOrderEventObject {
    borrower: string;
    target: string;
}
export declare type ExecuteOrderEvent = TypedEvent<[
    string,
    string
], ExecuteOrderEventObject>;
export declare type ExecuteOrderEventFilter = TypedEventFilter<ExecuteOrderEvent>;
export interface IncreaseBorrowedAmountEventObject {
    borrower: string;
    amount: BigNumber;
}
export declare type IncreaseBorrowedAmountEvent = TypedEvent<[
    string,
    BigNumber
], IncreaseBorrowedAmountEventObject>;
export declare type IncreaseBorrowedAmountEventFilter = TypedEventFilter<IncreaseBorrowedAmountEvent>;
export interface LiquidateCreditAccountEventObject {
    owner: string;
    liquidator: string;
    remainingFunds: BigNumber;
}
export declare type LiquidateCreditAccountEvent = TypedEvent<[
    string,
    string,
    BigNumber
], LiquidateCreditAccountEventObject>;
export declare type LiquidateCreditAccountEventFilter = TypedEventFilter<LiquidateCreditAccountEvent>;
export interface NewParametersEventObject {
    minAmount: BigNumber;
    maxAmount: BigNumber;
    maxLeverage: BigNumber;
    feeInterest: BigNumber;
    feeLiquidation: BigNumber;
    liquidationDiscount: BigNumber;
}
export declare type NewParametersEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], NewParametersEventObject>;
export declare type NewParametersEventFilter = TypedEventFilter<NewParametersEvent>;
export interface OpenCreditAccountEventObject {
    sender: string;
    onBehalfOf: string;
    creditAccount: string;
    amount: BigNumber;
    borrowAmount: BigNumber;
    referralCode: BigNumber;
}
export declare type OpenCreditAccountEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], OpenCreditAccountEventObject>;
export declare type OpenCreditAccountEventFilter = TypedEventFilter<OpenCreditAccountEvent>;
export interface RepayCreditAccountEventObject {
    owner: string;
    to: string;
}
export declare type RepayCreditAccountEvent = TypedEvent<[
    string,
    string
], RepayCreditAccountEventObject>;
export declare type RepayCreditAccountEventFilter = TypedEventFilter<RepayCreditAccountEvent>;
export interface TransferAccountEventObject {
    oldOwner: string;
    newOwner: string;
}
export declare type TransferAccountEvent = TypedEvent<[
    string,
    string
], TransferAccountEventObject>;
export declare type TransferAccountEventFilter = TypedEventFilter<TransferAccountEvent>;
export interface ICreditManager extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ICreditManagerInterface;
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
        _calcClosePayments(creditAccount: string, totalValue: BigNumberish, isLiquidated: boolean, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            _borrowedAmount: BigNumber;
            amountToPool: BigNumber;
            remainingFunds: BigNumber;
            profit: BigNumber;
            loss: BigNumber;
        }>;
        addCollateral(onBehalfOf: string, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        approve(targetContract: string, token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        calcRepayAmount(borrower: string, isLiquidated: boolean, overrides?: CallOverrides): Promise<[BigNumber]>;
        closeCreditAccount(to: string, paths: ExchangeStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        creditAccounts(borrower: string, overrides?: CallOverrides): Promise<[string]>;
        creditFilter(overrides?: CallOverrides): Promise<[string]>;
        defaultSwapContract(overrides?: CallOverrides): Promise<[string]>;
        executeOrder(borrower: string, target: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        feeInterest(overrides?: CallOverrides): Promise<[BigNumber]>;
        feeLiquidation(overrides?: CallOverrides): Promise<[BigNumber]>;
        getCreditAccountOrRevert(borrower: string, overrides?: CallOverrides): Promise<[string]>;
        hasOpenedCreditAccount(borrower: string, overrides?: CallOverrides): Promise<[boolean]>;
        increaseBorrowedAmount(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        liquidateCreditAccount(borrower: string, to: string, force: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        liquidationDiscount(overrides?: CallOverrides): Promise<[BigNumber]>;
        maxAmount(overrides?: CallOverrides): Promise<[BigNumber]>;
        maxLeverageFactor(overrides?: CallOverrides): Promise<[BigNumber]>;
        minAmount(overrides?: CallOverrides): Promise<[BigNumber]>;
        minHealthFactor(overrides?: CallOverrides): Promise<[BigNumber]>;
        openCreditAccount(amount: BigNumberish, onBehalfOf: string, leverageFactor: BigNumberish, referralCode: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        poolService(overrides?: CallOverrides): Promise<[string]>;
        provideCreditAccountAllowance(creditAccount: string, toContract: string, token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        repayCreditAccount(to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        repayCreditAccountETH(borrower: string, to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferAccountOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        underlyingToken(overrides?: CallOverrides): Promise<[string]>;
    };
    _calcClosePayments(creditAccount: string, totalValue: BigNumberish, isLiquidated: boolean, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        _borrowedAmount: BigNumber;
        amountToPool: BigNumber;
        remainingFunds: BigNumber;
        profit: BigNumber;
        loss: BigNumber;
    }>;
    addCollateral(onBehalfOf: string, token: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    approve(targetContract: string, token: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    calcRepayAmount(borrower: string, isLiquidated: boolean, overrides?: CallOverrides): Promise<BigNumber>;
    closeCreditAccount(to: string, paths: ExchangeStruct[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    creditAccounts(borrower: string, overrides?: CallOverrides): Promise<string>;
    creditFilter(overrides?: CallOverrides): Promise<string>;
    defaultSwapContract(overrides?: CallOverrides): Promise<string>;
    executeOrder(borrower: string, target: string, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    feeInterest(overrides?: CallOverrides): Promise<BigNumber>;
    feeLiquidation(overrides?: CallOverrides): Promise<BigNumber>;
    getCreditAccountOrRevert(borrower: string, overrides?: CallOverrides): Promise<string>;
    hasOpenedCreditAccount(borrower: string, overrides?: CallOverrides): Promise<boolean>;
    increaseBorrowedAmount(amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    liquidateCreditAccount(borrower: string, to: string, force: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    liquidationDiscount(overrides?: CallOverrides): Promise<BigNumber>;
    maxAmount(overrides?: CallOverrides): Promise<BigNumber>;
    maxLeverageFactor(overrides?: CallOverrides): Promise<BigNumber>;
    minAmount(overrides?: CallOverrides): Promise<BigNumber>;
    minHealthFactor(overrides?: CallOverrides): Promise<BigNumber>;
    openCreditAccount(amount: BigNumberish, onBehalfOf: string, leverageFactor: BigNumberish, referralCode: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    poolService(overrides?: CallOverrides): Promise<string>;
    provideCreditAccountAllowance(creditAccount: string, toContract: string, token: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    repayCreditAccount(to: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    repayCreditAccountETH(borrower: string, to: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferAccountOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    underlyingToken(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        _calcClosePayments(creditAccount: string, totalValue: BigNumberish, isLiquidated: boolean, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            _borrowedAmount: BigNumber;
            amountToPool: BigNumber;
            remainingFunds: BigNumber;
            profit: BigNumber;
            loss: BigNumber;
        }>;
        addCollateral(onBehalfOf: string, token: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        approve(targetContract: string, token: string, overrides?: CallOverrides): Promise<void>;
        calcRepayAmount(borrower: string, isLiquidated: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        closeCreditAccount(to: string, paths: ExchangeStruct[], overrides?: CallOverrides): Promise<void>;
        creditAccounts(borrower: string, overrides?: CallOverrides): Promise<string>;
        creditFilter(overrides?: CallOverrides): Promise<string>;
        defaultSwapContract(overrides?: CallOverrides): Promise<string>;
        executeOrder(borrower: string, target: string, data: BytesLike, overrides?: CallOverrides): Promise<string>;
        feeInterest(overrides?: CallOverrides): Promise<BigNumber>;
        feeLiquidation(overrides?: CallOverrides): Promise<BigNumber>;
        getCreditAccountOrRevert(borrower: string, overrides?: CallOverrides): Promise<string>;
        hasOpenedCreditAccount(borrower: string, overrides?: CallOverrides): Promise<boolean>;
        increaseBorrowedAmount(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        liquidateCreditAccount(borrower: string, to: string, force: boolean, overrides?: CallOverrides): Promise<void>;
        liquidationDiscount(overrides?: CallOverrides): Promise<BigNumber>;
        maxAmount(overrides?: CallOverrides): Promise<BigNumber>;
        maxLeverageFactor(overrides?: CallOverrides): Promise<BigNumber>;
        minAmount(overrides?: CallOverrides): Promise<BigNumber>;
        minHealthFactor(overrides?: CallOverrides): Promise<BigNumber>;
        openCreditAccount(amount: BigNumberish, onBehalfOf: string, leverageFactor: BigNumberish, referralCode: BigNumberish, overrides?: CallOverrides): Promise<void>;
        poolService(overrides?: CallOverrides): Promise<string>;
        provideCreditAccountAllowance(creditAccount: string, toContract: string, token: string, overrides?: CallOverrides): Promise<void>;
        repayCreditAccount(to: string, overrides?: CallOverrides): Promise<void>;
        repayCreditAccountETH(borrower: string, to: string, overrides?: CallOverrides): Promise<BigNumber>;
        transferAccountOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        underlyingToken(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "AddCollateral(address,address,uint256)"(onBehalfOf?: string | null, token?: string | null, value?: null): AddCollateralEventFilter;
        AddCollateral(onBehalfOf?: string | null, token?: string | null, value?: null): AddCollateralEventFilter;
        "CloseCreditAccount(address,address,uint256)"(owner?: string | null, to?: string | null, remainingFunds?: null): CloseCreditAccountEventFilter;
        CloseCreditAccount(owner?: string | null, to?: string | null, remainingFunds?: null): CloseCreditAccountEventFilter;
        "ExecuteOrder(address,address)"(borrower?: string | null, target?: string | null): ExecuteOrderEventFilter;
        ExecuteOrder(borrower?: string | null, target?: string | null): ExecuteOrderEventFilter;
        "IncreaseBorrowedAmount(address,uint256)"(borrower?: string | null, amount?: null): IncreaseBorrowedAmountEventFilter;
        IncreaseBorrowedAmount(borrower?: string | null, amount?: null): IncreaseBorrowedAmountEventFilter;
        "LiquidateCreditAccount(address,address,uint256)"(owner?: string | null, liquidator?: string | null, remainingFunds?: null): LiquidateCreditAccountEventFilter;
        LiquidateCreditAccount(owner?: string | null, liquidator?: string | null, remainingFunds?: null): LiquidateCreditAccountEventFilter;
        "NewParameters(uint256,uint256,uint256,uint256,uint256,uint256)"(minAmount?: null, maxAmount?: null, maxLeverage?: null, feeInterest?: null, feeLiquidation?: null, liquidationDiscount?: null): NewParametersEventFilter;
        NewParameters(minAmount?: null, maxAmount?: null, maxLeverage?: null, feeInterest?: null, feeLiquidation?: null, liquidationDiscount?: null): NewParametersEventFilter;
        "OpenCreditAccount(address,address,address,uint256,uint256,uint256)"(sender?: string | null, onBehalfOf?: string | null, creditAccount?: string | null, amount?: null, borrowAmount?: null, referralCode?: null): OpenCreditAccountEventFilter;
        OpenCreditAccount(sender?: string | null, onBehalfOf?: string | null, creditAccount?: string | null, amount?: null, borrowAmount?: null, referralCode?: null): OpenCreditAccountEventFilter;
        "RepayCreditAccount(address,address)"(owner?: string | null, to?: string | null): RepayCreditAccountEventFilter;
        RepayCreditAccount(owner?: string | null, to?: string | null): RepayCreditAccountEventFilter;
        "TransferAccount(address,address)"(oldOwner?: string | null, newOwner?: string | null): TransferAccountEventFilter;
        TransferAccount(oldOwner?: string | null, newOwner?: string | null): TransferAccountEventFilter;
    };
    estimateGas: {
        _calcClosePayments(creditAccount: string, totalValue: BigNumberish, isLiquidated: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        addCollateral(onBehalfOf: string, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        approve(targetContract: string, token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        calcRepayAmount(borrower: string, isLiquidated: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        closeCreditAccount(to: string, paths: ExchangeStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        creditAccounts(borrower: string, overrides?: CallOverrides): Promise<BigNumber>;
        creditFilter(overrides?: CallOverrides): Promise<BigNumber>;
        defaultSwapContract(overrides?: CallOverrides): Promise<BigNumber>;
        executeOrder(borrower: string, target: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        feeInterest(overrides?: CallOverrides): Promise<BigNumber>;
        feeLiquidation(overrides?: CallOverrides): Promise<BigNumber>;
        getCreditAccountOrRevert(borrower: string, overrides?: CallOverrides): Promise<BigNumber>;
        hasOpenedCreditAccount(borrower: string, overrides?: CallOverrides): Promise<BigNumber>;
        increaseBorrowedAmount(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        liquidateCreditAccount(borrower: string, to: string, force: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        liquidationDiscount(overrides?: CallOverrides): Promise<BigNumber>;
        maxAmount(overrides?: CallOverrides): Promise<BigNumber>;
        maxLeverageFactor(overrides?: CallOverrides): Promise<BigNumber>;
        minAmount(overrides?: CallOverrides): Promise<BigNumber>;
        minHealthFactor(overrides?: CallOverrides): Promise<BigNumber>;
        openCreditAccount(amount: BigNumberish, onBehalfOf: string, leverageFactor: BigNumberish, referralCode: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        poolService(overrides?: CallOverrides): Promise<BigNumber>;
        provideCreditAccountAllowance(creditAccount: string, toContract: string, token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        repayCreditAccount(to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        repayCreditAccountETH(borrower: string, to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferAccountOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        underlyingToken(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        _calcClosePayments(creditAccount: string, totalValue: BigNumberish, isLiquidated: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addCollateral(onBehalfOf: string, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        approve(targetContract: string, token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        calcRepayAmount(borrower: string, isLiquidated: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        closeCreditAccount(to: string, paths: ExchangeStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        creditAccounts(borrower: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditFilter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        defaultSwapContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        executeOrder(borrower: string, target: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        feeInterest(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        feeLiquidation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCreditAccountOrRevert(borrower: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hasOpenedCreditAccount(borrower: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseBorrowedAmount(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        liquidateCreditAccount(borrower: string, to: string, force: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        liquidationDiscount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxLeverageFactor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minHealthFactor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        openCreditAccount(amount: BigNumberish, onBehalfOf: string, leverageFactor: BigNumberish, referralCode: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        poolService(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        provideCreditAccountAllowance(creditAccount: string, toContract: string, token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        repayCreditAccount(to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        repayCreditAccountETH(borrower: string, to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferAccountOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        underlyingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
