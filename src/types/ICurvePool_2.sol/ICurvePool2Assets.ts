/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface ICurvePool2AssetsInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "A"
      | "A_precise"
      | "add_liquidity"
      | "admin"
      | "admin_balances"
      | "admin_fee"
      | "allowance"
      | "balanceOf"
      | "balances(int128)"
      | "balances(uint256)"
      | "block_timestamp_last"
      | "calc_token_amount"
      | "calc_withdraw_one_coin(uint256,uint256)"
      | "calc_withdraw_one_coin(uint256,int128)"
      | "coins(int128)"
      | "coins(uint256)"
      | "decimals"
      | "exchange(int128,int128,uint256,uint256)"
      | "exchange(uint256,uint256,uint256,uint256)"
      | "exchange_underlying(uint256,uint256,uint256,uint256)"
      | "exchange_underlying(int128,int128,uint256,uint256)"
      | "fee"
      | "future_A"
      | "future_A_time"
      | "get_balances"
      | "get_dy(uint256,uint256,uint256)"
      | "get_dy(int128,int128,uint256)"
      | "get_dy_underlying(int128,int128,uint256)"
      | "get_dy_underlying(uint256,uint256,uint256)"
      | "get_previous_balances"
      | "get_price_cumulative_last"
      | "get_twap_balances"
      | "get_virtual_price"
      | "initial_A"
      | "initial_A_time"
      | "mid_fee"
      | "name"
      | "remove_liquidity"
      | "remove_liquidity_imbalance"
      | "remove_liquidity_one_coin(uint256,int128,uint256)"
      | "remove_liquidity_one_coin(uint256,uint256,uint256)"
      | "symbol"
      | "token"
      | "totalSupply"
      | "underlying_coins(int128)"
      | "underlying_coins(uint256)"
      | "virtual_price"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "A", values?: undefined): string;
  encodeFunctionData(functionFragment: "A_precise", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "add_liquidity",
    values: [[BigNumberish, BigNumberish], BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "admin_balances",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "admin_fee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "balances(int128)",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balances(uint256)",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "block_timestamp_last",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "calc_token_amount",
    values: [[BigNumberish, BigNumberish], boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "calc_withdraw_one_coin(uint256,uint256)",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calc_withdraw_one_coin(uint256,int128)",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "coins(int128)",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "coins(uint256)",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "exchange(int128,int128,uint256,uint256)",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "exchange(uint256,uint256,uint256,uint256)",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "exchange_underlying(uint256,uint256,uint256,uint256)",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "exchange_underlying(int128,int128,uint256,uint256)",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "fee", values?: undefined): string;
  encodeFunctionData(functionFragment: "future_A", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "future_A_time",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "get_balances",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "get_dy(uint256,uint256,uint256)",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "get_dy(int128,int128,uint256)",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "get_dy_underlying(int128,int128,uint256)",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "get_dy_underlying(uint256,uint256,uint256)",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "get_previous_balances",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "get_price_cumulative_last",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "get_twap_balances",
    values: [
      [BigNumberish, BigNumberish],
      [BigNumberish, BigNumberish],
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "get_virtual_price",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "initial_A", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initial_A_time",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "mid_fee", values?: undefined): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "remove_liquidity",
    values: [BigNumberish, [BigNumberish, BigNumberish]]
  ): string;
  encodeFunctionData(
    functionFragment: "remove_liquidity_imbalance",
    values: [[BigNumberish, BigNumberish], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "remove_liquidity_one_coin(uint256,int128,uint256)",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "remove_liquidity_one_coin(uint256,uint256,uint256)",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "underlying_coins(int128)",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "underlying_coins(uint256)",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "virtual_price",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "A", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "A_precise", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "add_liquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "admin_balances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admin_fee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balances(int128)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "balances(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "block_timestamp_last",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calc_token_amount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calc_withdraw_one_coin(uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calc_withdraw_one_coin(uint256,int128)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "coins(int128)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "coins(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "exchange(int128,int128,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exchange(uint256,uint256,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exchange_underlying(uint256,uint256,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exchange_underlying(int128,int128,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "future_A", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "future_A_time",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_balances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_dy(uint256,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_dy(int128,int128,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_dy_underlying(int128,int128,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_dy_underlying(uint256,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_previous_balances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_price_cumulative_last",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_twap_balances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_virtual_price",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initial_A", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initial_A_time",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mid_fee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "remove_liquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "remove_liquidity_imbalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "remove_liquidity_one_coin(uint256,int128,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "remove_liquidity_one_coin(uint256,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "underlying_coins(int128)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "underlying_coins(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "virtual_price",
    data: BytesLike
  ): Result;
}

export interface ICurvePool2Assets extends BaseContract {
  connect(runner?: ContractRunner | null): ICurvePool2Assets;
  waitForDeployment(): Promise<this>;

  interface: ICurvePool2AssetsInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  A: TypedContractMethod<[], [bigint], "view">;

  A_precise: TypedContractMethod<[], [bigint], "view">;

  add_liquidity: TypedContractMethod<
    [amounts: [BigNumberish, BigNumberish], min_mint_amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  admin: TypedContractMethod<[], [string], "view">;

  admin_balances: TypedContractMethod<[i: BigNumberish], [bigint], "view">;

  admin_fee: TypedContractMethod<[], [bigint], "view">;

  allowance: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [bigint],
    "view"
  >;

  balanceOf: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  "balances(int128)": TypedContractMethod<
    [arg0: BigNumberish],
    [bigint],
    "view"
  >;

  "balances(uint256)": TypedContractMethod<[i: BigNumberish], [bigint], "view">;

  block_timestamp_last: TypedContractMethod<[], [bigint], "view">;

  calc_token_amount: TypedContractMethod<
    [_amounts: [BigNumberish, BigNumberish], _is_deposit: boolean],
    [bigint],
    "view"
  >;

  "calc_withdraw_one_coin(uint256,uint256)": TypedContractMethod<
    [_burn_amount: BigNumberish, i: BigNumberish],
    [bigint],
    "view"
  >;

  "calc_withdraw_one_coin(uint256,int128)": TypedContractMethod<
    [_burn_amount: BigNumberish, i: BigNumberish],
    [bigint],
    "view"
  >;

  "coins(int128)": TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  "coins(uint256)": TypedContractMethod<[i: BigNumberish], [string], "view">;

  decimals: TypedContractMethod<[], [bigint], "view">;

  "exchange(int128,int128,uint256,uint256)": TypedContractMethod<
    [i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish],
    [void],
    "nonpayable"
  >;

  "exchange(uint256,uint256,uint256,uint256)": TypedContractMethod<
    [i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish],
    [void],
    "nonpayable"
  >;

  "exchange_underlying(uint256,uint256,uint256,uint256)": TypedContractMethod<
    [i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish],
    [void],
    "nonpayable"
  >;

  "exchange_underlying(int128,int128,uint256,uint256)": TypedContractMethod<
    [i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish],
    [void],
    "nonpayable"
  >;

  fee: TypedContractMethod<[], [bigint], "view">;

  future_A: TypedContractMethod<[], [bigint], "view">;

  future_A_time: TypedContractMethod<[], [bigint], "view">;

  get_balances: TypedContractMethod<[], [[bigint, bigint]], "view">;

  "get_dy(uint256,uint256,uint256)": TypedContractMethod<
    [i: BigNumberish, j: BigNumberish, dx: BigNumberish],
    [bigint],
    "view"
  >;

  "get_dy(int128,int128,uint256)": TypedContractMethod<
    [i: BigNumberish, j: BigNumberish, dx: BigNumberish],
    [bigint],
    "view"
  >;

  "get_dy_underlying(int128,int128,uint256)": TypedContractMethod<
    [i: BigNumberish, j: BigNumberish, dx: BigNumberish],
    [bigint],
    "view"
  >;

  "get_dy_underlying(uint256,uint256,uint256)": TypedContractMethod<
    [i: BigNumberish, j: BigNumberish, dx: BigNumberish],
    [bigint],
    "view"
  >;

  get_previous_balances: TypedContractMethod<[], [[bigint, bigint]], "view">;

  get_price_cumulative_last: TypedContractMethod<
    [],
    [[bigint, bigint]],
    "view"
  >;

  get_twap_balances: TypedContractMethod<
    [
      _first_balances: [BigNumberish, BigNumberish],
      _last_balances: [BigNumberish, BigNumberish],
      _time_elapsed: BigNumberish
    ],
    [[bigint, bigint]],
    "view"
  >;

  get_virtual_price: TypedContractMethod<[], [bigint], "view">;

  initial_A: TypedContractMethod<[], [bigint], "view">;

  initial_A_time: TypedContractMethod<[], [bigint], "view">;

  mid_fee: TypedContractMethod<[], [bigint], "view">;

  name: TypedContractMethod<[], [string], "view">;

  remove_liquidity: TypedContractMethod<
    [_amount: BigNumberish, min_amounts: [BigNumberish, BigNumberish]],
    [void],
    "nonpayable"
  >;

  remove_liquidity_imbalance: TypedContractMethod<
    [amounts: [BigNumberish, BigNumberish], max_burn_amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  "remove_liquidity_one_coin(uint256,int128,uint256)": TypedContractMethod<
    [_token_amount: BigNumberish, i: BigNumberish, min_amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  "remove_liquidity_one_coin(uint256,uint256,uint256)": TypedContractMethod<
    [_token_amount: BigNumberish, i: BigNumberish, min_amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  symbol: TypedContractMethod<[], [string], "view">;

  token: TypedContractMethod<[], [string], "view">;

  totalSupply: TypedContractMethod<[], [bigint], "view">;

  "underlying_coins(int128)": TypedContractMethod<
    [arg0: BigNumberish],
    [string],
    "view"
  >;

  "underlying_coins(uint256)": TypedContractMethod<
    [i: BigNumberish],
    [string],
    "view"
  >;

  virtual_price: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(nameOrSignature: "A"): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "A_precise"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "add_liquidity"
  ): TypedContractMethod<
    [amounts: [BigNumberish, BigNumberish], min_mint_amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "admin"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "admin_balances"
  ): TypedContractMethod<[i: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "admin_fee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "allowance"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "balanceOf"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "balances(int128)"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "balances(uint256)"
  ): TypedContractMethod<[i: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "block_timestamp_last"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "calc_token_amount"
  ): TypedContractMethod<
    [_amounts: [BigNumberish, BigNumberish], _is_deposit: boolean],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "calc_withdraw_one_coin(uint256,uint256)"
  ): TypedContractMethod<
    [_burn_amount: BigNumberish, i: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "calc_withdraw_one_coin(uint256,int128)"
  ): TypedContractMethod<
    [_burn_amount: BigNumberish, i: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "coins(int128)"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "coins(uint256)"
  ): TypedContractMethod<[i: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "decimals"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "exchange(int128,int128,uint256,uint256)"
  ): TypedContractMethod<
    [i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "exchange(uint256,uint256,uint256,uint256)"
  ): TypedContractMethod<
    [i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "exchange_underlying(uint256,uint256,uint256,uint256)"
  ): TypedContractMethod<
    [i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "exchange_underlying(int128,int128,uint256,uint256)"
  ): TypedContractMethod<
    [i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "fee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "future_A"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "future_A_time"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "get_balances"
  ): TypedContractMethod<[], [[bigint, bigint]], "view">;
  getFunction(
    nameOrSignature: "get_dy(uint256,uint256,uint256)"
  ): TypedContractMethod<
    [i: BigNumberish, j: BigNumberish, dx: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "get_dy(int128,int128,uint256)"
  ): TypedContractMethod<
    [i: BigNumberish, j: BigNumberish, dx: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "get_dy_underlying(int128,int128,uint256)"
  ): TypedContractMethod<
    [i: BigNumberish, j: BigNumberish, dx: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "get_dy_underlying(uint256,uint256,uint256)"
  ): TypedContractMethod<
    [i: BigNumberish, j: BigNumberish, dx: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "get_previous_balances"
  ): TypedContractMethod<[], [[bigint, bigint]], "view">;
  getFunction(
    nameOrSignature: "get_price_cumulative_last"
  ): TypedContractMethod<[], [[bigint, bigint]], "view">;
  getFunction(
    nameOrSignature: "get_twap_balances"
  ): TypedContractMethod<
    [
      _first_balances: [BigNumberish, BigNumberish],
      _last_balances: [BigNumberish, BigNumberish],
      _time_elapsed: BigNumberish
    ],
    [[bigint, bigint]],
    "view"
  >;
  getFunction(
    nameOrSignature: "get_virtual_price"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "initial_A"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "initial_A_time"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "mid_fee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "name"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "remove_liquidity"
  ): TypedContractMethod<
    [_amount: BigNumberish, min_amounts: [BigNumberish, BigNumberish]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "remove_liquidity_imbalance"
  ): TypedContractMethod<
    [amounts: [BigNumberish, BigNumberish], max_burn_amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "remove_liquidity_one_coin(uint256,int128,uint256)"
  ): TypedContractMethod<
    [_token_amount: BigNumberish, i: BigNumberish, min_amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "remove_liquidity_one_coin(uint256,uint256,uint256)"
  ): TypedContractMethod<
    [_token_amount: BigNumberish, i: BigNumberish, min_amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "symbol"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "token"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "totalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "underlying_coins(int128)"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "underlying_coins(uint256)"
  ): TypedContractMethod<[i: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "virtual_price"
  ): TypedContractMethod<[], [bigint], "view">;

  filters: {};
}
