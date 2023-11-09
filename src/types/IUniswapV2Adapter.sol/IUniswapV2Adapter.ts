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
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export type UniswapV2PairStatusStruct = {
  token0: PromiseOrValue<string>;
  token1: PromiseOrValue<string>;
  allowed: PromiseOrValue<boolean>;
};

export type UniswapV2PairStatusStructOutput = [string, string, boolean] & {
  token0: string;
  token1: string;
  allowed: boolean;
};

export interface IUniswapV2AdapterInterface extends utils.Interface {
  functions: {
    "_gearboxAdapterType()": FunctionFragment;
    "_gearboxAdapterVersion()": FunctionFragment;
    "addressProvider()": FunctionFragment;
    "creditManager()": FunctionFragment;
    "isPairAllowed(address,address)": FunctionFragment;
    "setPairStatusBatch((address,address,bool)[])": FunctionFragment;
    "swapDiffTokensForTokens(uint256,uint256,address[],uint256)": FunctionFragment;
    "swapExactTokensForTokens(uint256,uint256,address[],address,uint256)": FunctionFragment;
    "swapTokensForExactTokens(uint256,uint256,address[],address,uint256)": FunctionFragment;
    "targetContract()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_gearboxAdapterType"
      | "_gearboxAdapterVersion"
      | "addressProvider"
      | "creditManager"
      | "isPairAllowed"
      | "setPairStatusBatch"
      | "swapDiffTokensForTokens"
      | "swapExactTokensForTokens"
      | "swapTokensForExactTokens"
      | "targetContract"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_gearboxAdapterType",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_gearboxAdapterVersion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addressProvider",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "creditManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isPairAllowed",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setPairStatusBatch",
    values: [UniswapV2PairStatusStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "swapDiffTokensForTokens",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactTokensForTokens",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>[],
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapTokensForExactTokens",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>[],
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "targetContract",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "_gearboxAdapterType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_gearboxAdapterVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addressProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creditManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isPairAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPairStatusBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapDiffTokensForTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactTokensForTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapTokensForExactTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "targetContract",
    data: BytesLike
  ): Result;

  events: {
    "SetPairStatus(address,address,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SetPairStatus"): EventFragment;
}

export interface SetPairStatusEventObject {
  token0: string;
  token1: string;
  allowed: boolean;
}
export type SetPairStatusEvent = TypedEvent<
  [string, string, boolean],
  SetPairStatusEventObject
>;

export type SetPairStatusEventFilter = TypedEventFilter<SetPairStatusEvent>;

export interface IUniswapV2Adapter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IUniswapV2AdapterInterface;

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
    _gearboxAdapterType(overrides?: CallOverrides): Promise<[number]>;

    _gearboxAdapterVersion(overrides?: CallOverrides): Promise<[number]>;

    addressProvider(overrides?: CallOverrides): Promise<[string]>;

    creditManager(overrides?: CallOverrides): Promise<[string]>;

    isPairAllowed(
      token0: PromiseOrValue<string>,
      token1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    setPairStatusBatch(
      pairs: UniswapV2PairStatusStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapDiffTokensForTokens(
      leftoverAmount: PromiseOrValue<BigNumberish>,
      rateMinRAY: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapExactTokensForTokens(
      amountIn: PromiseOrValue<BigNumberish>,
      amountOutMin: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      arg3: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapTokensForExactTokens(
      amountOut: PromiseOrValue<BigNumberish>,
      amountInMax: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      arg3: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    targetContract(overrides?: CallOverrides): Promise<[string]>;
  };

  _gearboxAdapterType(overrides?: CallOverrides): Promise<number>;

  _gearboxAdapterVersion(overrides?: CallOverrides): Promise<number>;

  addressProvider(overrides?: CallOverrides): Promise<string>;

  creditManager(overrides?: CallOverrides): Promise<string>;

  isPairAllowed(
    token0: PromiseOrValue<string>,
    token1: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  setPairStatusBatch(
    pairs: UniswapV2PairStatusStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapDiffTokensForTokens(
    leftoverAmount: PromiseOrValue<BigNumberish>,
    rateMinRAY: PromiseOrValue<BigNumberish>,
    path: PromiseOrValue<string>[],
    deadline: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapExactTokensForTokens(
    amountIn: PromiseOrValue<BigNumberish>,
    amountOutMin: PromiseOrValue<BigNumberish>,
    path: PromiseOrValue<string>[],
    arg3: PromiseOrValue<string>,
    deadline: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapTokensForExactTokens(
    amountOut: PromiseOrValue<BigNumberish>,
    amountInMax: PromiseOrValue<BigNumberish>,
    path: PromiseOrValue<string>[],
    arg3: PromiseOrValue<string>,
    deadline: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  targetContract(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    _gearboxAdapterType(overrides?: CallOverrides): Promise<number>;

    _gearboxAdapterVersion(overrides?: CallOverrides): Promise<number>;

    addressProvider(overrides?: CallOverrides): Promise<string>;

    creditManager(overrides?: CallOverrides): Promise<string>;

    isPairAllowed(
      token0: PromiseOrValue<string>,
      token1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setPairStatusBatch(
      pairs: UniswapV2PairStatusStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    swapDiffTokensForTokens(
      leftoverAmount: PromiseOrValue<BigNumberish>,
      rateMinRAY: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        tokensToEnable: BigNumber;
        tokensToDisable: BigNumber;
      }
    >;

    swapExactTokensForTokens(
      amountIn: PromiseOrValue<BigNumberish>,
      amountOutMin: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      arg3: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        tokensToEnable: BigNumber;
        tokensToDisable: BigNumber;
      }
    >;

    swapTokensForExactTokens(
      amountOut: PromiseOrValue<BigNumberish>,
      amountInMax: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      arg3: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        tokensToEnable: BigNumber;
        tokensToDisable: BigNumber;
      }
    >;

    targetContract(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "SetPairStatus(address,address,bool)"(
      token0?: PromiseOrValue<string> | null,
      token1?: PromiseOrValue<string> | null,
      allowed?: null
    ): SetPairStatusEventFilter;
    SetPairStatus(
      token0?: PromiseOrValue<string> | null,
      token1?: PromiseOrValue<string> | null,
      allowed?: null
    ): SetPairStatusEventFilter;
  };

  estimateGas: {
    _gearboxAdapterType(overrides?: CallOverrides): Promise<BigNumber>;

    _gearboxAdapterVersion(overrides?: CallOverrides): Promise<BigNumber>;

    addressProvider(overrides?: CallOverrides): Promise<BigNumber>;

    creditManager(overrides?: CallOverrides): Promise<BigNumber>;

    isPairAllowed(
      token0: PromiseOrValue<string>,
      token1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setPairStatusBatch(
      pairs: UniswapV2PairStatusStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapDiffTokensForTokens(
      leftoverAmount: PromiseOrValue<BigNumberish>,
      rateMinRAY: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapExactTokensForTokens(
      amountIn: PromiseOrValue<BigNumberish>,
      amountOutMin: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      arg3: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapTokensForExactTokens(
      amountOut: PromiseOrValue<BigNumberish>,
      amountInMax: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      arg3: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    targetContract(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    _gearboxAdapterType(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _gearboxAdapterVersion(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addressProvider(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    creditManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isPairAllowed(
      token0: PromiseOrValue<string>,
      token1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setPairStatusBatch(
      pairs: UniswapV2PairStatusStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapDiffTokensForTokens(
      leftoverAmount: PromiseOrValue<BigNumberish>,
      rateMinRAY: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapExactTokensForTokens(
      amountIn: PromiseOrValue<BigNumberish>,
      amountOutMin: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      arg3: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapTokensForExactTokens(
      amountOut: PromiseOrValue<BigNumberish>,
      amountInMax: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      arg3: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    targetContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
