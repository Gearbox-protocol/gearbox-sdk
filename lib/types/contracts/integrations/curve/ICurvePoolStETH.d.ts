import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface ICurvePoolStETHInterface extends utils.Interface {
    functions: {
        "A()": FunctionFragment;
        "A_precise()": FunctionFragment;
        "add_liquidity(uint256[2],uint256)": FunctionFragment;
        "admin()": FunctionFragment;
        "admin_balances(uint256)": FunctionFragment;
        "admin_fee()": FunctionFragment;
        "balances(uint256)": FunctionFragment;
        "block_timestamp_last()": FunctionFragment;
        "calc_token_amount(uint256[2],bool)": FunctionFragment;
        "calc_withdraw_one_coin(uint256,int128)": FunctionFragment;
        "coins(uint256)": FunctionFragment;
        "exchange(int128,int128,uint256,uint256)": FunctionFragment;
        "exchange_underlying(int128,int128,uint256,uint256)": FunctionFragment;
        "fee()": FunctionFragment;
        "future_A()": FunctionFragment;
        "future_A_time()": FunctionFragment;
        "get_dy(int128,int128,uint256)": FunctionFragment;
        "get_dy_underlying(int128,int128,uint256)": FunctionFragment;
        "get_virtual_price()": FunctionFragment;
        "initial_A()": FunctionFragment;
        "initial_A_time()": FunctionFragment;
        "lp_token()": FunctionFragment;
        "remove_liquidity(uint256,uint256[2])": FunctionFragment;
        "remove_liquidity_imbalance(uint256[2],uint256)": FunctionFragment;
        "remove_liquidity_one_coin(uint256,int128,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "A" | "A_precise" | "add_liquidity" | "admin" | "admin_balances" | "admin_fee" | "balances" | "block_timestamp_last" | "calc_token_amount" | "calc_withdraw_one_coin" | "coins" | "exchange" | "exchange_underlying" | "fee" | "future_A" | "future_A_time" | "get_dy" | "get_dy_underlying" | "get_virtual_price" | "initial_A" | "initial_A_time" | "lp_token" | "remove_liquidity" | "remove_liquidity_imbalance" | "remove_liquidity_one_coin"): FunctionFragment;
    encodeFunctionData(functionFragment: "A", values?: undefined): string;
    encodeFunctionData(functionFragment: "A_precise", values?: undefined): string;
    encodeFunctionData(functionFragment: "add_liquidity", values: [[BigNumberish, BigNumberish], BigNumberish]): string;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "admin_balances", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "admin_fee", values?: undefined): string;
    encodeFunctionData(functionFragment: "balances", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "block_timestamp_last", values?: undefined): string;
    encodeFunctionData(functionFragment: "calc_token_amount", values: [[BigNumberish, BigNumberish], boolean]): string;
    encodeFunctionData(functionFragment: "calc_withdraw_one_coin", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "coins", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "exchange", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "exchange_underlying", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "fee", values?: undefined): string;
    encodeFunctionData(functionFragment: "future_A", values?: undefined): string;
    encodeFunctionData(functionFragment: "future_A_time", values?: undefined): string;
    encodeFunctionData(functionFragment: "get_dy", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "get_dy_underlying", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "get_virtual_price", values?: undefined): string;
    encodeFunctionData(functionFragment: "initial_A", values?: undefined): string;
    encodeFunctionData(functionFragment: "initial_A_time", values?: undefined): string;
    encodeFunctionData(functionFragment: "lp_token", values?: undefined): string;
    encodeFunctionData(functionFragment: "remove_liquidity", values: [BigNumberish, [BigNumberish, BigNumberish]]): string;
    encodeFunctionData(functionFragment: "remove_liquidity_imbalance", values: [[BigNumberish, BigNumberish], BigNumberish]): string;
    encodeFunctionData(functionFragment: "remove_liquidity_one_coin", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "A", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "A_precise", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "add_liquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin_balances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin_fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "block_timestamp_last", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calc_token_amount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calc_withdraw_one_coin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "coins", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchange", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchange_underlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "future_A", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "future_A_time", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_dy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_dy_underlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_virtual_price", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initial_A", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initial_A_time", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lp_token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove_liquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove_liquidity_imbalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove_liquidity_one_coin", data: BytesLike): Result;
    events: {};
}
export interface ICurvePoolStETH extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ICurvePoolStETHInterface;
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
        A(overrides?: CallOverrides): Promise<[BigNumber]>;
        A_precise(overrides?: CallOverrides): Promise<[BigNumber]>;
        add_liquidity(amounts: [BigNumberish, BigNumberish], min_mint_amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        admin(overrides?: CallOverrides): Promise<[string]>;
        admin_balances(i: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        admin_fee(overrides?: CallOverrides): Promise<[BigNumber]>;
        balances(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        block_timestamp_last(overrides?: CallOverrides): Promise<[BigNumber]>;
        calc_token_amount(_amounts: [BigNumberish, BigNumberish], _is_deposit: boolean, overrides?: CallOverrides): Promise<[BigNumber]>;
        calc_withdraw_one_coin(_burn_amount: BigNumberish, i: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        coins(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        exchange(i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        exchange_underlying(i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        fee(overrides?: CallOverrides): Promise<[BigNumber]>;
        future_A(overrides?: CallOverrides): Promise<[BigNumber]>;
        future_A_time(overrides?: CallOverrides): Promise<[BigNumber]>;
        get_dy(i: BigNumberish, j: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        get_dy_underlying(i: BigNumberish, j: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        get_virtual_price(overrides?: CallOverrides): Promise<[BigNumber]>;
        initial_A(overrides?: CallOverrides): Promise<[BigNumber]>;
        initial_A_time(overrides?: CallOverrides): Promise<[BigNumber]>;
        lp_token(overrides?: CallOverrides): Promise<[string]>;
        remove_liquidity(_amount: BigNumberish, min_amounts: [BigNumberish, BigNumberish], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        remove_liquidity_imbalance(amounts: [BigNumberish, BigNumberish], max_burn_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        remove_liquidity_one_coin(_token_amount: BigNumberish, i: BigNumberish, min_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    A(overrides?: CallOverrides): Promise<BigNumber>;
    A_precise(overrides?: CallOverrides): Promise<BigNumber>;
    add_liquidity(amounts: [BigNumberish, BigNumberish], min_mint_amount: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    admin(overrides?: CallOverrides): Promise<string>;
    admin_balances(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    admin_fee(overrides?: CallOverrides): Promise<BigNumber>;
    balances(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    block_timestamp_last(overrides?: CallOverrides): Promise<BigNumber>;
    calc_token_amount(_amounts: [BigNumberish, BigNumberish], _is_deposit: boolean, overrides?: CallOverrides): Promise<BigNumber>;
    calc_withdraw_one_coin(_burn_amount: BigNumberish, i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    coins(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    exchange(i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    exchange_underlying(i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    fee(overrides?: CallOverrides): Promise<BigNumber>;
    future_A(overrides?: CallOverrides): Promise<BigNumber>;
    future_A_time(overrides?: CallOverrides): Promise<BigNumber>;
    get_dy(i: BigNumberish, j: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    get_dy_underlying(i: BigNumberish, j: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    get_virtual_price(overrides?: CallOverrides): Promise<BigNumber>;
    initial_A(overrides?: CallOverrides): Promise<BigNumber>;
    initial_A_time(overrides?: CallOverrides): Promise<BigNumber>;
    lp_token(overrides?: CallOverrides): Promise<string>;
    remove_liquidity(_amount: BigNumberish, min_amounts: [BigNumberish, BigNumberish], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    remove_liquidity_imbalance(amounts: [BigNumberish, BigNumberish], max_burn_amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    remove_liquidity_one_coin(_token_amount: BigNumberish, i: BigNumberish, min_amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        A(overrides?: CallOverrides): Promise<BigNumber>;
        A_precise(overrides?: CallOverrides): Promise<BigNumber>;
        add_liquidity(amounts: [BigNumberish, BigNumberish], min_mint_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        admin(overrides?: CallOverrides): Promise<string>;
        admin_balances(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        admin_fee(overrides?: CallOverrides): Promise<BigNumber>;
        balances(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        block_timestamp_last(overrides?: CallOverrides): Promise<BigNumber>;
        calc_token_amount(_amounts: [BigNumberish, BigNumberish], _is_deposit: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        calc_withdraw_one_coin(_burn_amount: BigNumberish, i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        coins(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        exchange(i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: CallOverrides): Promise<void>;
        exchange_underlying(i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: CallOverrides): Promise<void>;
        fee(overrides?: CallOverrides): Promise<BigNumber>;
        future_A(overrides?: CallOverrides): Promise<BigNumber>;
        future_A_time(overrides?: CallOverrides): Promise<BigNumber>;
        get_dy(i: BigNumberish, j: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        get_dy_underlying(i: BigNumberish, j: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        get_virtual_price(overrides?: CallOverrides): Promise<BigNumber>;
        initial_A(overrides?: CallOverrides): Promise<BigNumber>;
        initial_A_time(overrides?: CallOverrides): Promise<BigNumber>;
        lp_token(overrides?: CallOverrides): Promise<string>;
        remove_liquidity(_amount: BigNumberish, min_amounts: [BigNumberish, BigNumberish], overrides?: CallOverrides): Promise<void>;
        remove_liquidity_imbalance(amounts: [BigNumberish, BigNumberish], max_burn_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        remove_liquidity_one_coin(_token_amount: BigNumberish, i: BigNumberish, min_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        A(overrides?: CallOverrides): Promise<BigNumber>;
        A_precise(overrides?: CallOverrides): Promise<BigNumber>;
        add_liquidity(amounts: [BigNumberish, BigNumberish], min_mint_amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        admin(overrides?: CallOverrides): Promise<BigNumber>;
        admin_balances(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        admin_fee(overrides?: CallOverrides): Promise<BigNumber>;
        balances(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        block_timestamp_last(overrides?: CallOverrides): Promise<BigNumber>;
        calc_token_amount(_amounts: [BigNumberish, BigNumberish], _is_deposit: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        calc_withdraw_one_coin(_burn_amount: BigNumberish, i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        coins(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        exchange(i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        exchange_underlying(i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        fee(overrides?: CallOverrides): Promise<BigNumber>;
        future_A(overrides?: CallOverrides): Promise<BigNumber>;
        future_A_time(overrides?: CallOverrides): Promise<BigNumber>;
        get_dy(i: BigNumberish, j: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        get_dy_underlying(i: BigNumberish, j: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        get_virtual_price(overrides?: CallOverrides): Promise<BigNumber>;
        initial_A(overrides?: CallOverrides): Promise<BigNumber>;
        initial_A_time(overrides?: CallOverrides): Promise<BigNumber>;
        lp_token(overrides?: CallOverrides): Promise<BigNumber>;
        remove_liquidity(_amount: BigNumberish, min_amounts: [BigNumberish, BigNumberish], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        remove_liquidity_imbalance(amounts: [BigNumberish, BigNumberish], max_burn_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        remove_liquidity_one_coin(_token_amount: BigNumberish, i: BigNumberish, min_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        A(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        A_precise(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        add_liquidity(amounts: [BigNumberish, BigNumberish], min_mint_amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        admin_balances(i: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        admin_fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balances(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        block_timestamp_last(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calc_token_amount(_amounts: [BigNumberish, BigNumberish], _is_deposit: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calc_withdraw_one_coin(_burn_amount: BigNumberish, i: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        coins(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        exchange(i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        exchange_underlying(i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        future_A(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        future_A_time(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_dy(i: BigNumberish, j: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_dy_underlying(i: BigNumberish, j: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_virtual_price(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initial_A(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initial_A_time(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lp_token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        remove_liquidity(_amount: BigNumberish, min_amounts: [BigNumberish, BigNumberish], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        remove_liquidity_imbalance(amounts: [BigNumberish, BigNumberish], max_burn_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        remove_liquidity_one_coin(_token_amount: BigNumberish, i: BigNumberish, min_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
