/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../common";

export interface ICurvePoolStETHInterface extends utils.Interface {
  functions: {
    "add_liquidity(uint256[2],uint256)": FunctionFragment;
    "balances(uint256)": FunctionFragment;
    "coins(uint256)": FunctionFragment;
    "exchange(int128,int128,uint256,uint256)": FunctionFragment;
    "exchange_underlying(int128,int128,uint256,uint256)": FunctionFragment;
    "get_dy(int128,int128,uint256)": FunctionFragment;
    "get_dy_underlying(int128,int128,uint256)": FunctionFragment;
    "get_virtual_price()": FunctionFragment;
    "lp_token()": FunctionFragment;
    "remove_liquidity(uint256,uint256[2])": FunctionFragment;
    "remove_liquidity_imbalance(uint256[2],uint256)": FunctionFragment;
    "remove_liquidity_one_coin(uint256,int128,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "add_liquidity"
      | "balances"
      | "coins"
      | "exchange"
      | "exchange_underlying"
      | "get_dy"
      | "get_dy_underlying"
      | "get_virtual_price"
      | "lp_token"
      | "remove_liquidity"
      | "remove_liquidity_imbalance"
      | "remove_liquidity_one_coin"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "add_liquidity",
    values: [[BigNumberish, BigNumberish], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balances",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "coins", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "exchange",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "exchange_underlying",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "get_dy",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "get_dy_underlying",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "get_virtual_price",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "lp_token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "remove_liquidity",
    values: [BigNumberish, [BigNumberish, BigNumberish]]
  ): string;
  encodeFunctionData(
    functionFragment: "remove_liquidity_imbalance",
    values: [[BigNumberish, BigNumberish], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "remove_liquidity_one_coin",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "add_liquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balances", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "coins", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exchange", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "exchange_underlying",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "get_dy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "get_dy_underlying",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_virtual_price",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lp_token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "remove_liquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "remove_liquidity_imbalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "remove_liquidity_one_coin",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ICurvePoolStETH extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ICurvePoolStETHInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    add_liquidity(
      amounts: [BigNumberish, BigNumberish],
      min_mint_amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balances(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    coins(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    exchange(
      i: BigNumberish,
      j: BigNumberish,
      dx: BigNumberish,
      min_dy: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exchange_underlying(
      i: BigNumberish,
      j: BigNumberish,
      dx: BigNumberish,
      min_dy: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    get_dy(
      i: BigNumberish,
      j: BigNumberish,
      dx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    get_dy_underlying(
      i: BigNumberish,
      j: BigNumberish,
      dx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    get_virtual_price(overrides?: CallOverrides): Promise<[BigNumber]>;

    lp_token(overrides?: CallOverrides): Promise<[string]>;

    remove_liquidity(
      _amount: BigNumberish,
      min_amounts: [BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    remove_liquidity_imbalance(
      amounts: [BigNumberish, BigNumberish],
      max_burn_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    remove_liquidity_one_coin(
      _token_amount: BigNumberish,
      i: BigNumberish,
      min_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  add_liquidity(
    amounts: [BigNumberish, BigNumberish],
    min_mint_amount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balances(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  coins(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  exchange(
    i: BigNumberish,
    j: BigNumberish,
    dx: BigNumberish,
    min_dy: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exchange_underlying(
    i: BigNumberish,
    j: BigNumberish,
    dx: BigNumberish,
    min_dy: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  get_dy(
    i: BigNumberish,
    j: BigNumberish,
    dx: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  get_dy_underlying(
    i: BigNumberish,
    j: BigNumberish,
    dx: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  get_virtual_price(overrides?: CallOverrides): Promise<BigNumber>;

  lp_token(overrides?: CallOverrides): Promise<string>;

  remove_liquidity(
    _amount: BigNumberish,
    min_amounts: [BigNumberish, BigNumberish],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  remove_liquidity_imbalance(
    amounts: [BigNumberish, BigNumberish],
    max_burn_amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  remove_liquidity_one_coin(
    _token_amount: BigNumberish,
    i: BigNumberish,
    min_amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    add_liquidity(
      amounts: [BigNumberish, BigNumberish],
      min_mint_amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    balances(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    coins(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    exchange(
      i: BigNumberish,
      j: BigNumberish,
      dx: BigNumberish,
      min_dy: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    exchange_underlying(
      i: BigNumberish,
      j: BigNumberish,
      dx: BigNumberish,
      min_dy: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    get_dy(
      i: BigNumberish,
      j: BigNumberish,
      dx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    get_dy_underlying(
      i: BigNumberish,
      j: BigNumberish,
      dx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    get_virtual_price(overrides?: CallOverrides): Promise<BigNumber>;

    lp_token(overrides?: CallOverrides): Promise<string>;

    remove_liquidity(
      _amount: BigNumberish,
      min_amounts: [BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<void>;

    remove_liquidity_imbalance(
      amounts: [BigNumberish, BigNumberish],
      max_burn_amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    remove_liquidity_one_coin(
      _token_amount: BigNumberish,
      i: BigNumberish,
      min_amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    add_liquidity(
      amounts: [BigNumberish, BigNumberish],
      min_mint_amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balances(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    coins(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    exchange(
      i: BigNumberish,
      j: BigNumberish,
      dx: BigNumberish,
      min_dy: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exchange_underlying(
      i: BigNumberish,
      j: BigNumberish,
      dx: BigNumberish,
      min_dy: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    get_dy(
      i: BigNumberish,
      j: BigNumberish,
      dx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    get_dy_underlying(
      i: BigNumberish,
      j: BigNumberish,
      dx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    get_virtual_price(overrides?: CallOverrides): Promise<BigNumber>;

    lp_token(overrides?: CallOverrides): Promise<BigNumber>;

    remove_liquidity(
      _amount: BigNumberish,
      min_amounts: [BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    remove_liquidity_imbalance(
      amounts: [BigNumberish, BigNumberish],
      max_burn_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    remove_liquidity_one_coin(
      _token_amount: BigNumberish,
      i: BigNumberish,
      min_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    add_liquidity(
      amounts: [BigNumberish, BigNumberish],
      min_mint_amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balances(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    coins(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    exchange(
      i: BigNumberish,
      j: BigNumberish,
      dx: BigNumberish,
      min_dy: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exchange_underlying(
      i: BigNumberish,
      j: BigNumberish,
      dx: BigNumberish,
      min_dy: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    get_dy(
      i: BigNumberish,
      j: BigNumberish,
      dx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    get_dy_underlying(
      i: BigNumberish,
      j: BigNumberish,
      dx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    get_virtual_price(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lp_token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    remove_liquidity(
      _amount: BigNumberish,
      min_amounts: [BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    remove_liquidity_imbalance(
      amounts: [BigNumberish, BigNumberish],
      max_burn_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    remove_liquidity_one_coin(
      _token_amount: BigNumberish,
      i: BigNumberish,
      min_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
