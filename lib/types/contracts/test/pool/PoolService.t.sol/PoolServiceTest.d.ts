import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface PoolServiceTestInterface extends utils.Interface {
    functions: {
        "IS_TEST()": FunctionFragment;
        "failed()": FunctionFragment;
        "setUp()": FunctionFragment;
        "test_PS_01_start_parameters_correct()": FunctionFragment;
        "test_PS_02_add_liquidity_adds_correctly()": FunctionFragment;
        "test_PS_03_remove_liquidity_removes_correctly()": FunctionFragment;
        "test_PS_04_cannot_be_used_while_paused()": FunctionFragment;
        "test_PS_05_starting_cumulative_index_correct()": FunctionFragment;
        "test_PS_06_diesel_rate_computes_correctly()": FunctionFragment;
        "test_PS_07_correctly_adds_liquidity_at_new_diesel_rate()": FunctionFragment;
        "test_PS_08_correctly_removes_liquidity_at_new_diesel_rate()": FunctionFragment;
        "test_PS_09_admin_functions_revert_on_non_admin()": FunctionFragment;
        "test_PS_10_connectCreditManager_fails_on_incompatible_CM()": FunctionFragment;
        "test_PS_11_CM_is_connected_correctly()": FunctionFragment;
        "test_PS_12_CA_can_be_lent_repaid_only_by_CM()": FunctionFragment;
        "test_PS_13_lendCreditAccount_reverts_on_forbidden_CM()": FunctionFragment;
        "test_PS_14_lendCreditAccount_correctly_transfers_tokens()": FunctionFragment;
        "test_PS_15_lendCreditAccount_emits_event()": FunctionFragment;
        "test_PS_16_lendCreditAccount_correctly_updates_parameters()": FunctionFragment;
        "test_PS_17_lendCreditAccount_correctly_updates_borrow_rate()": FunctionFragment;
        "test_PS_18_repayCreditAccount_emits_event()": FunctionFragment;
        "test_PS_19_repayCreditAccount_correctly_updates_on_uncovered_loss()": FunctionFragment;
        "test_PS_20_repayCreditAccount_correctly_updates_on_covered_loss()": FunctionFragment;
        "test_PS_21_repayCreditAccount_correctly_updates_on_profit()": FunctionFragment;
        "test_PS_22_repayCreditAccount_does_not_change_diesel_rate()": FunctionFragment;
        "test_PS_23_diesel_conversion_is_correct()": FunctionFragment;
        "test_PS_24_updateInterestRateModel_works_correctly_and_emits_event()": FunctionFragment;
        "test_PS_25_updateInterestRateModel_correctly_computes_new_borrow_rate()": FunctionFragment;
        "test_PS_26_updateBorrowRate_correct()": FunctionFragment;
        "test_PS_27_calcLinearCumulative_RAY_correct()": FunctionFragment;
        "test_PS_28_expectedLiquidity_correct()": FunctionFragment;
        "test_PS_29_setExpectedLiquidityLimit_correct_and_emits_event()": FunctionFragment;
        "test_PS_30_addLiquidity_reverts_above_liquidity_limit()": FunctionFragment;
        "test_PS_31_setWithdrawFee_reverts_on_fee_too_lage()": FunctionFragment;
        "test_PS_32_setWithdrawFee_correct_and_emits_event()": FunctionFragment;
        "test_PS_33_removeLiquidity_takes_withdrawal_fee()": FunctionFragment;
        "test_PS_34_connectCreditManager_reverts_on_duplicate()": FunctionFragment;
        "test_PS_35_updateInterestRateModel_reverts_on_zero_address()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "IS_TEST" | "failed" | "setUp" | "test_PS_01_start_parameters_correct" | "test_PS_02_add_liquidity_adds_correctly" | "test_PS_03_remove_liquidity_removes_correctly" | "test_PS_04_cannot_be_used_while_paused" | "test_PS_05_starting_cumulative_index_correct" | "test_PS_06_diesel_rate_computes_correctly" | "test_PS_07_correctly_adds_liquidity_at_new_diesel_rate" | "test_PS_08_correctly_removes_liquidity_at_new_diesel_rate" | "test_PS_09_admin_functions_revert_on_non_admin" | "test_PS_10_connectCreditManager_fails_on_incompatible_CM" | "test_PS_11_CM_is_connected_correctly" | "test_PS_12_CA_can_be_lent_repaid_only_by_CM" | "test_PS_13_lendCreditAccount_reverts_on_forbidden_CM" | "test_PS_14_lendCreditAccount_correctly_transfers_tokens" | "test_PS_15_lendCreditAccount_emits_event" | "test_PS_16_lendCreditAccount_correctly_updates_parameters" | "test_PS_17_lendCreditAccount_correctly_updates_borrow_rate" | "test_PS_18_repayCreditAccount_emits_event" | "test_PS_19_repayCreditAccount_correctly_updates_on_uncovered_loss" | "test_PS_20_repayCreditAccount_correctly_updates_on_covered_loss" | "test_PS_21_repayCreditAccount_correctly_updates_on_profit" | "test_PS_22_repayCreditAccount_does_not_change_diesel_rate" | "test_PS_23_diesel_conversion_is_correct" | "test_PS_24_updateInterestRateModel_works_correctly_and_emits_event" | "test_PS_25_updateInterestRateModel_correctly_computes_new_borrow_rate" | "test_PS_26_updateBorrowRate_correct" | "test_PS_27_calcLinearCumulative_RAY_correct" | "test_PS_28_expectedLiquidity_correct" | "test_PS_29_setExpectedLiquidityLimit_correct_and_emits_event" | "test_PS_30_addLiquidity_reverts_above_liquidity_limit" | "test_PS_31_setWithdrawFee_reverts_on_fee_too_lage" | "test_PS_32_setWithdrawFee_correct_and_emits_event" | "test_PS_33_removeLiquidity_takes_withdrawal_fee" | "test_PS_34_connectCreditManager_reverts_on_duplicate" | "test_PS_35_updateInterestRateModel_reverts_on_zero_address"): FunctionFragment;
    encodeFunctionData(functionFragment: "IS_TEST", values?: undefined): string;
    encodeFunctionData(functionFragment: "failed", values?: undefined): string;
    encodeFunctionData(functionFragment: "setUp", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_PS_01_start_parameters_correct", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_PS_02_add_liquidity_adds_correctly", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_PS_03_remove_liquidity_removes_correctly", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_PS_04_cannot_be_used_while_paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_PS_05_starting_cumulative_index_correct", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_PS_06_diesel_rate_computes_correctly", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_PS_07_correctly_adds_liquidity_at_new_diesel_rate", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_PS_08_correctly_removes_liquidity_at_new_diesel_rate", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_PS_09_admin_functions_revert_on_non_admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_PS_10_connectCreditManager_fails_on_incompatible_CM", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_PS_11_CM_is_connected_correctly", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_PS_12_CA_can_be_lent_repaid_only_by_CM", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_PS_13_lendCreditAccount_reverts_on_forbidden_CM", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_PS_14_lendCreditAccount_correctly_transfers_tokens", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_PS_15_lendCreditAccount_emits_event", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_PS_16_lendCreditAccount_correctly_updates_parameters", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_PS_17_lendCreditAccount_correctly_updates_borrow_rate", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_PS_18_repayCreditAccount_emits_event", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_PS_19_repayCreditAccount_correctly_updates_on_uncovered_loss", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_PS_20_repayCreditAccount_correctly_updates_on_covered_loss", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_PS_21_repayCreditAccount_correctly_updates_on_profit", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_PS_22_repayCreditAccount_does_not_change_diesel_rate", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_PS_23_diesel_conversion_is_correct", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_PS_24_updateInterestRateModel_works_correctly_and_emits_event", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_PS_25_updateInterestRateModel_correctly_computes_new_borrow_rate", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_PS_26_updateBorrowRate_correct", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_PS_27_calcLinearCumulative_RAY_correct", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_PS_28_expectedLiquidity_correct", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_PS_29_setExpectedLiquidityLimit_correct_and_emits_event", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_PS_30_addLiquidity_reverts_above_liquidity_limit", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_PS_31_setWithdrawFee_reverts_on_fee_too_lage", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_PS_32_setWithdrawFee_correct_and_emits_event", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_PS_33_removeLiquidity_takes_withdrawal_fee", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_PS_34_connectCreditManager_reverts_on_duplicate", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_PS_35_updateInterestRateModel_reverts_on_zero_address", values?: undefined): string;
    decodeFunctionResult(functionFragment: "IS_TEST", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "failed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_PS_01_start_parameters_correct", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_PS_02_add_liquidity_adds_correctly", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_PS_03_remove_liquidity_removes_correctly", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_PS_04_cannot_be_used_while_paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_PS_05_starting_cumulative_index_correct", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_PS_06_diesel_rate_computes_correctly", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_PS_07_correctly_adds_liquidity_at_new_diesel_rate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_PS_08_correctly_removes_liquidity_at_new_diesel_rate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_PS_09_admin_functions_revert_on_non_admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_PS_10_connectCreditManager_fails_on_incompatible_CM", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_PS_11_CM_is_connected_correctly", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_PS_12_CA_can_be_lent_repaid_only_by_CM", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_PS_13_lendCreditAccount_reverts_on_forbidden_CM", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_PS_14_lendCreditAccount_correctly_transfers_tokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_PS_15_lendCreditAccount_emits_event", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_PS_16_lendCreditAccount_correctly_updates_parameters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_PS_17_lendCreditAccount_correctly_updates_borrow_rate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_PS_18_repayCreditAccount_emits_event", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_PS_19_repayCreditAccount_correctly_updates_on_uncovered_loss", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_PS_20_repayCreditAccount_correctly_updates_on_covered_loss", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_PS_21_repayCreditAccount_correctly_updates_on_profit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_PS_22_repayCreditAccount_does_not_change_diesel_rate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_PS_23_diesel_conversion_is_correct", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_PS_24_updateInterestRateModel_works_correctly_and_emits_event", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_PS_25_updateInterestRateModel_correctly_computes_new_borrow_rate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_PS_26_updateBorrowRate_correct", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_PS_27_calcLinearCumulative_RAY_correct", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_PS_28_expectedLiquidity_correct", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_PS_29_setExpectedLiquidityLimit_correct_and_emits_event", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_PS_30_addLiquidity_reverts_above_liquidity_limit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_PS_31_setWithdrawFee_reverts_on_fee_too_lage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_PS_32_setWithdrawFee_correct_and_emits_event", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_PS_33_removeLiquidity_takes_withdrawal_fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_PS_34_connectCreditManager_reverts_on_duplicate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_PS_35_updateInterestRateModel_reverts_on_zero_address", data: BytesLike): Result;
    events: {
        "AddLiquidity(address,address,uint256,uint256)": EventFragment;
        "Borrow(address,address,uint256)": EventFragment;
        "BorrowForbidden(address)": EventFragment;
        "NewCreditManagerConnected(address)": EventFragment;
        "NewExpectedLiquidityLimit(uint256)": EventFragment;
        "NewInterestRateModel(address)": EventFragment;
        "NewWithdrawFee(uint256)": EventFragment;
        "RemoveLiquidity(address,address,uint256)": EventFragment;
        "Repay(address,uint256,uint256,uint256)": EventFragment;
        "UncoveredLoss(address,uint256)": EventFragment;
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
    getEvent(nameOrSignatureOrTopic: "AddLiquidity"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Borrow"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BorrowForbidden"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewCreditManagerConnected"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewExpectedLiquidityLimit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewInterestRateModel"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewWithdrawFee"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveLiquidity"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Repay"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UncoveredLoss"): EventFragment;
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
export interface AddLiquidityEventObject {
    sender: string;
    onBehalfOf: string;
    amount: BigNumber;
    referralCode: BigNumber;
}
export declare type AddLiquidityEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], AddLiquidityEventObject>;
export declare type AddLiquidityEventFilter = TypedEventFilter<AddLiquidityEvent>;
export interface BorrowEventObject {
    creditManager: string;
    creditAccount: string;
    amount: BigNumber;
}
export declare type BorrowEvent = TypedEvent<[
    string,
    string,
    BigNumber
], BorrowEventObject>;
export declare type BorrowEventFilter = TypedEventFilter<BorrowEvent>;
export interface BorrowForbiddenEventObject {
    creditManager: string;
}
export declare type BorrowForbiddenEvent = TypedEvent<[
    string
], BorrowForbiddenEventObject>;
export declare type BorrowForbiddenEventFilter = TypedEventFilter<BorrowForbiddenEvent>;
export interface NewCreditManagerConnectedEventObject {
    creditManager: string;
}
export declare type NewCreditManagerConnectedEvent = TypedEvent<[
    string
], NewCreditManagerConnectedEventObject>;
export declare type NewCreditManagerConnectedEventFilter = TypedEventFilter<NewCreditManagerConnectedEvent>;
export interface NewExpectedLiquidityLimitEventObject {
    newLimit: BigNumber;
}
export declare type NewExpectedLiquidityLimitEvent = TypedEvent<[
    BigNumber
], NewExpectedLiquidityLimitEventObject>;
export declare type NewExpectedLiquidityLimitEventFilter = TypedEventFilter<NewExpectedLiquidityLimitEvent>;
export interface NewInterestRateModelEventObject {
    newInterestRateModel: string;
}
export declare type NewInterestRateModelEvent = TypedEvent<[
    string
], NewInterestRateModelEventObject>;
export declare type NewInterestRateModelEventFilter = TypedEventFilter<NewInterestRateModelEvent>;
export interface NewWithdrawFeeEventObject {
    fee: BigNumber;
}
export declare type NewWithdrawFeeEvent = TypedEvent<[
    BigNumber
], NewWithdrawFeeEventObject>;
export declare type NewWithdrawFeeEventFilter = TypedEventFilter<NewWithdrawFeeEvent>;
export interface RemoveLiquidityEventObject {
    sender: string;
    to: string;
    amount: BigNumber;
}
export declare type RemoveLiquidityEvent = TypedEvent<[
    string,
    string,
    BigNumber
], RemoveLiquidityEventObject>;
export declare type RemoveLiquidityEventFilter = TypedEventFilter<RemoveLiquidityEvent>;
export interface RepayEventObject {
    creditManager: string;
    borrowedAmount: BigNumber;
    profit: BigNumber;
    loss: BigNumber;
}
export declare type RepayEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber
], RepayEventObject>;
export declare type RepayEventFilter = TypedEventFilter<RepayEvent>;
export interface UncoveredLossEventObject {
    creditManager: string;
    loss: BigNumber;
}
export declare type UncoveredLossEvent = TypedEvent<[
    string,
    BigNumber
], UncoveredLossEventObject>;
export declare type UncoveredLossEventFilter = TypedEventFilter<UncoveredLossEvent>;
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
export interface PoolServiceTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PoolServiceTestInterface;
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
        failed(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setUp(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_PS_01_start_parameters_correct(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_PS_02_add_liquidity_adds_correctly(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_PS_03_remove_liquidity_removes_correctly(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_PS_04_cannot_be_used_while_paused(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_PS_05_starting_cumulative_index_correct(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_PS_06_diesel_rate_computes_correctly(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_PS_07_correctly_adds_liquidity_at_new_diesel_rate(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_PS_08_correctly_removes_liquidity_at_new_diesel_rate(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_PS_09_admin_functions_revert_on_non_admin(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_PS_10_connectCreditManager_fails_on_incompatible_CM(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_PS_11_CM_is_connected_correctly(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_PS_12_CA_can_be_lent_repaid_only_by_CM(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_PS_13_lendCreditAccount_reverts_on_forbidden_CM(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_PS_14_lendCreditAccount_correctly_transfers_tokens(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_PS_15_lendCreditAccount_emits_event(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_PS_16_lendCreditAccount_correctly_updates_parameters(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_PS_17_lendCreditAccount_correctly_updates_borrow_rate(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_PS_18_repayCreditAccount_emits_event(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_PS_19_repayCreditAccount_correctly_updates_on_uncovered_loss(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_PS_20_repayCreditAccount_correctly_updates_on_covered_loss(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_PS_21_repayCreditAccount_correctly_updates_on_profit(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_PS_22_repayCreditAccount_does_not_change_diesel_rate(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_PS_23_diesel_conversion_is_correct(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_PS_24_updateInterestRateModel_works_correctly_and_emits_event(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_PS_25_updateInterestRateModel_correctly_computes_new_borrow_rate(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_PS_26_updateBorrowRate_correct(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_PS_27_calcLinearCumulative_RAY_correct(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_PS_28_expectedLiquidity_correct(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_PS_29_setExpectedLiquidityLimit_correct_and_emits_event(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_PS_30_addLiquidity_reverts_above_liquidity_limit(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_PS_31_setWithdrawFee_reverts_on_fee_too_lage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_PS_32_setWithdrawFee_correct_and_emits_event(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_PS_33_removeLiquidity_takes_withdrawal_fee(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_PS_34_connectCreditManager_reverts_on_duplicate(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_PS_35_updateInterestRateModel_reverts_on_zero_address(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    IS_TEST(overrides?: CallOverrides): Promise<boolean>;
    failed(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setUp(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_PS_01_start_parameters_correct(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_PS_02_add_liquidity_adds_correctly(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_PS_03_remove_liquidity_removes_correctly(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_PS_04_cannot_be_used_while_paused(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_PS_05_starting_cumulative_index_correct(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_PS_06_diesel_rate_computes_correctly(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_PS_07_correctly_adds_liquidity_at_new_diesel_rate(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_PS_08_correctly_removes_liquidity_at_new_diesel_rate(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_PS_09_admin_functions_revert_on_non_admin(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_PS_10_connectCreditManager_fails_on_incompatible_CM(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_PS_11_CM_is_connected_correctly(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_PS_12_CA_can_be_lent_repaid_only_by_CM(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_PS_13_lendCreditAccount_reverts_on_forbidden_CM(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_PS_14_lendCreditAccount_correctly_transfers_tokens(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_PS_15_lendCreditAccount_emits_event(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_PS_16_lendCreditAccount_correctly_updates_parameters(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_PS_17_lendCreditAccount_correctly_updates_borrow_rate(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_PS_18_repayCreditAccount_emits_event(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_PS_19_repayCreditAccount_correctly_updates_on_uncovered_loss(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_PS_20_repayCreditAccount_correctly_updates_on_covered_loss(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_PS_21_repayCreditAccount_correctly_updates_on_profit(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_PS_22_repayCreditAccount_does_not_change_diesel_rate(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_PS_23_diesel_conversion_is_correct(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_PS_24_updateInterestRateModel_works_correctly_and_emits_event(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_PS_25_updateInterestRateModel_correctly_computes_new_borrow_rate(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_PS_26_updateBorrowRate_correct(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_PS_27_calcLinearCumulative_RAY_correct(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_PS_28_expectedLiquidity_correct(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_PS_29_setExpectedLiquidityLimit_correct_and_emits_event(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_PS_30_addLiquidity_reverts_above_liquidity_limit(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_PS_31_setWithdrawFee_reverts_on_fee_too_lage(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_PS_32_setWithdrawFee_correct_and_emits_event(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_PS_33_removeLiquidity_takes_withdrawal_fee(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_PS_34_connectCreditManager_reverts_on_duplicate(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_PS_35_updateInterestRateModel_reverts_on_zero_address(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        IS_TEST(overrides?: CallOverrides): Promise<boolean>;
        failed(overrides?: CallOverrides): Promise<boolean>;
        setUp(overrides?: CallOverrides): Promise<void>;
        test_PS_01_start_parameters_correct(overrides?: CallOverrides): Promise<void>;
        test_PS_02_add_liquidity_adds_correctly(overrides?: CallOverrides): Promise<void>;
        test_PS_03_remove_liquidity_removes_correctly(overrides?: CallOverrides): Promise<void>;
        test_PS_04_cannot_be_used_while_paused(overrides?: CallOverrides): Promise<void>;
        test_PS_05_starting_cumulative_index_correct(overrides?: CallOverrides): Promise<void>;
        test_PS_06_diesel_rate_computes_correctly(overrides?: CallOverrides): Promise<void>;
        test_PS_07_correctly_adds_liquidity_at_new_diesel_rate(overrides?: CallOverrides): Promise<void>;
        test_PS_08_correctly_removes_liquidity_at_new_diesel_rate(overrides?: CallOverrides): Promise<void>;
        test_PS_09_admin_functions_revert_on_non_admin(overrides?: CallOverrides): Promise<void>;
        test_PS_10_connectCreditManager_fails_on_incompatible_CM(overrides?: CallOverrides): Promise<void>;
        test_PS_11_CM_is_connected_correctly(overrides?: CallOverrides): Promise<void>;
        test_PS_12_CA_can_be_lent_repaid_only_by_CM(overrides?: CallOverrides): Promise<void>;
        test_PS_13_lendCreditAccount_reverts_on_forbidden_CM(overrides?: CallOverrides): Promise<void>;
        test_PS_14_lendCreditAccount_correctly_transfers_tokens(overrides?: CallOverrides): Promise<void>;
        test_PS_15_lendCreditAccount_emits_event(overrides?: CallOverrides): Promise<void>;
        test_PS_16_lendCreditAccount_correctly_updates_parameters(overrides?: CallOverrides): Promise<void>;
        test_PS_17_lendCreditAccount_correctly_updates_borrow_rate(overrides?: CallOverrides): Promise<void>;
        test_PS_18_repayCreditAccount_emits_event(overrides?: CallOverrides): Promise<void>;
        test_PS_19_repayCreditAccount_correctly_updates_on_uncovered_loss(overrides?: CallOverrides): Promise<void>;
        test_PS_20_repayCreditAccount_correctly_updates_on_covered_loss(overrides?: CallOverrides): Promise<void>;
        test_PS_21_repayCreditAccount_correctly_updates_on_profit(overrides?: CallOverrides): Promise<void>;
        test_PS_22_repayCreditAccount_does_not_change_diesel_rate(overrides?: CallOverrides): Promise<void>;
        test_PS_23_diesel_conversion_is_correct(overrides?: CallOverrides): Promise<void>;
        test_PS_24_updateInterestRateModel_works_correctly_and_emits_event(overrides?: CallOverrides): Promise<void>;
        test_PS_25_updateInterestRateModel_correctly_computes_new_borrow_rate(overrides?: CallOverrides): Promise<void>;
        test_PS_26_updateBorrowRate_correct(overrides?: CallOverrides): Promise<void>;
        test_PS_27_calcLinearCumulative_RAY_correct(overrides?: CallOverrides): Promise<void>;
        test_PS_28_expectedLiquidity_correct(overrides?: CallOverrides): Promise<void>;
        test_PS_29_setExpectedLiquidityLimit_correct_and_emits_event(overrides?: CallOverrides): Promise<void>;
        test_PS_30_addLiquidity_reverts_above_liquidity_limit(overrides?: CallOverrides): Promise<void>;
        test_PS_31_setWithdrawFee_reverts_on_fee_too_lage(overrides?: CallOverrides): Promise<void>;
        test_PS_32_setWithdrawFee_correct_and_emits_event(overrides?: CallOverrides): Promise<void>;
        test_PS_33_removeLiquidity_takes_withdrawal_fee(overrides?: CallOverrides): Promise<void>;
        test_PS_34_connectCreditManager_reverts_on_duplicate(overrides?: CallOverrides): Promise<void>;
        test_PS_35_updateInterestRateModel_reverts_on_zero_address(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AddLiquidity(address,address,uint256,uint256)"(sender?: string | null, onBehalfOf?: string | null, amount?: null, referralCode?: null): AddLiquidityEventFilter;
        AddLiquidity(sender?: string | null, onBehalfOf?: string | null, amount?: null, referralCode?: null): AddLiquidityEventFilter;
        "Borrow(address,address,uint256)"(creditManager?: string | null, creditAccount?: string | null, amount?: null): BorrowEventFilter;
        Borrow(creditManager?: string | null, creditAccount?: string | null, amount?: null): BorrowEventFilter;
        "BorrowForbidden(address)"(creditManager?: string | null): BorrowForbiddenEventFilter;
        BorrowForbidden(creditManager?: string | null): BorrowForbiddenEventFilter;
        "NewCreditManagerConnected(address)"(creditManager?: string | null): NewCreditManagerConnectedEventFilter;
        NewCreditManagerConnected(creditManager?: string | null): NewCreditManagerConnectedEventFilter;
        "NewExpectedLiquidityLimit(uint256)"(newLimit?: null): NewExpectedLiquidityLimitEventFilter;
        NewExpectedLiquidityLimit(newLimit?: null): NewExpectedLiquidityLimitEventFilter;
        "NewInterestRateModel(address)"(newInterestRateModel?: string | null): NewInterestRateModelEventFilter;
        NewInterestRateModel(newInterestRateModel?: string | null): NewInterestRateModelEventFilter;
        "NewWithdrawFee(uint256)"(fee?: null): NewWithdrawFeeEventFilter;
        NewWithdrawFee(fee?: null): NewWithdrawFeeEventFilter;
        "RemoveLiquidity(address,address,uint256)"(sender?: string | null, to?: string | null, amount?: null): RemoveLiquidityEventFilter;
        RemoveLiquidity(sender?: string | null, to?: string | null, amount?: null): RemoveLiquidityEventFilter;
        "Repay(address,uint256,uint256,uint256)"(creditManager?: string | null, borrowedAmount?: null, profit?: null, loss?: null): RepayEventFilter;
        Repay(creditManager?: string | null, borrowedAmount?: null, profit?: null, loss?: null): RepayEventFilter;
        "UncoveredLoss(address,uint256)"(creditManager?: string | null, loss?: null): UncoveredLossEventFilter;
        UncoveredLoss(creditManager?: string | null, loss?: null): UncoveredLossEventFilter;
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
        failed(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setUp(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_PS_01_start_parameters_correct(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_PS_02_add_liquidity_adds_correctly(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_PS_03_remove_liquidity_removes_correctly(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_PS_04_cannot_be_used_while_paused(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_PS_05_starting_cumulative_index_correct(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_PS_06_diesel_rate_computes_correctly(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_PS_07_correctly_adds_liquidity_at_new_diesel_rate(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_PS_08_correctly_removes_liquidity_at_new_diesel_rate(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_PS_09_admin_functions_revert_on_non_admin(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_PS_10_connectCreditManager_fails_on_incompatible_CM(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_PS_11_CM_is_connected_correctly(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_PS_12_CA_can_be_lent_repaid_only_by_CM(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_PS_13_lendCreditAccount_reverts_on_forbidden_CM(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_PS_14_lendCreditAccount_correctly_transfers_tokens(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_PS_15_lendCreditAccount_emits_event(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_PS_16_lendCreditAccount_correctly_updates_parameters(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_PS_17_lendCreditAccount_correctly_updates_borrow_rate(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_PS_18_repayCreditAccount_emits_event(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_PS_19_repayCreditAccount_correctly_updates_on_uncovered_loss(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_PS_20_repayCreditAccount_correctly_updates_on_covered_loss(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_PS_21_repayCreditAccount_correctly_updates_on_profit(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_PS_22_repayCreditAccount_does_not_change_diesel_rate(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_PS_23_diesel_conversion_is_correct(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_PS_24_updateInterestRateModel_works_correctly_and_emits_event(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_PS_25_updateInterestRateModel_correctly_computes_new_borrow_rate(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_PS_26_updateBorrowRate_correct(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_PS_27_calcLinearCumulative_RAY_correct(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_PS_28_expectedLiquidity_correct(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_PS_29_setExpectedLiquidityLimit_correct_and_emits_event(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_PS_30_addLiquidity_reverts_above_liquidity_limit(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_PS_31_setWithdrawFee_reverts_on_fee_too_lage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_PS_32_setWithdrawFee_correct_and_emits_event(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_PS_33_removeLiquidity_takes_withdrawal_fee(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_PS_34_connectCreditManager_reverts_on_duplicate(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_PS_35_updateInterestRateModel_reverts_on_zero_address(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        IS_TEST(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        failed(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setUp(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_PS_01_start_parameters_correct(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_PS_02_add_liquidity_adds_correctly(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_PS_03_remove_liquidity_removes_correctly(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_PS_04_cannot_be_used_while_paused(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_PS_05_starting_cumulative_index_correct(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_PS_06_diesel_rate_computes_correctly(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_PS_07_correctly_adds_liquidity_at_new_diesel_rate(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_PS_08_correctly_removes_liquidity_at_new_diesel_rate(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_PS_09_admin_functions_revert_on_non_admin(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_PS_10_connectCreditManager_fails_on_incompatible_CM(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_PS_11_CM_is_connected_correctly(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_PS_12_CA_can_be_lent_repaid_only_by_CM(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_PS_13_lendCreditAccount_reverts_on_forbidden_CM(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_PS_14_lendCreditAccount_correctly_transfers_tokens(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_PS_15_lendCreditAccount_emits_event(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_PS_16_lendCreditAccount_correctly_updates_parameters(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_PS_17_lendCreditAccount_correctly_updates_borrow_rate(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_PS_18_repayCreditAccount_emits_event(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_PS_19_repayCreditAccount_correctly_updates_on_uncovered_loss(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_PS_20_repayCreditAccount_correctly_updates_on_covered_loss(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_PS_21_repayCreditAccount_correctly_updates_on_profit(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_PS_22_repayCreditAccount_does_not_change_diesel_rate(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_PS_23_diesel_conversion_is_correct(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_PS_24_updateInterestRateModel_works_correctly_and_emits_event(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_PS_25_updateInterestRateModel_correctly_computes_new_borrow_rate(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_PS_26_updateBorrowRate_correct(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_PS_27_calcLinearCumulative_RAY_correct(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_PS_28_expectedLiquidity_correct(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_PS_29_setExpectedLiquidityLimit_correct_and_emits_event(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_PS_30_addLiquidity_reverts_above_liquidity_limit(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_PS_31_setWithdrawFee_reverts_on_fee_too_lage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_PS_32_setWithdrawFee_correct_and_emits_event(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_PS_33_removeLiquidity_takes_withdrawal_fee(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_PS_34_connectCreditManager_reverts_on_duplicate(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_PS_35_updateInterestRateModel_reverts_on_zero_address(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
