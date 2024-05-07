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
} from "./common";

export interface IwstETHV1AdapterInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "_gearboxAdapterType"
      | "_gearboxAdapterVersion"
      | "addressProvider"
      | "creditManager"
      | "stETH"
      | "stETHTokenMask"
      | "targetContract"
      | "unwrap"
      | "unwrapDiff"
      | "wrap"
      | "wrapDiff"
      | "wstETHTokenMask"
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
  encodeFunctionData(functionFragment: "stETH", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "stETHTokenMask",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "targetContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unwrap",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unwrapDiff",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "wrap", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "wrapDiff",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wstETHTokenMask",
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
  decodeFunctionResult(functionFragment: "stETH", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stETHTokenMask",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "targetContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unwrap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unwrapDiff", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wrap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wrapDiff", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "wstETHTokenMask",
    data: BytesLike
  ): Result;
}

export interface IwstETHV1Adapter extends BaseContract {
  connect(runner?: ContractRunner | null): IwstETHV1Adapter;
  waitForDeployment(): Promise<this>;

  interface: IwstETHV1AdapterInterface;

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

  _gearboxAdapterType: TypedContractMethod<[], [bigint], "view">;

  _gearboxAdapterVersion: TypedContractMethod<[], [bigint], "view">;

  addressProvider: TypedContractMethod<[], [string], "view">;

  creditManager: TypedContractMethod<[], [string], "view">;

  stETH: TypedContractMethod<[], [string], "view">;

  stETHTokenMask: TypedContractMethod<[], [bigint], "view">;

  targetContract: TypedContractMethod<[], [string], "view">;

  unwrap: TypedContractMethod<
    [amount: BigNumberish],
    [[bigint, bigint] & { tokensToEnable: bigint; tokensToDisable: bigint }],
    "nonpayable"
  >;

  unwrapDiff: TypedContractMethod<
    [leftoverAmount: BigNumberish],
    [[bigint, bigint] & { tokensToEnable: bigint; tokensToDisable: bigint }],
    "nonpayable"
  >;

  wrap: TypedContractMethod<
    [amount: BigNumberish],
    [[bigint, bigint] & { tokensToEnable: bigint; tokensToDisable: bigint }],
    "nonpayable"
  >;

  wrapDiff: TypedContractMethod<
    [leftoverAmount: BigNumberish],
    [[bigint, bigint] & { tokensToEnable: bigint; tokensToDisable: bigint }],
    "nonpayable"
  >;

  wstETHTokenMask: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "_gearboxAdapterType"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "_gearboxAdapterVersion"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "addressProvider"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "creditManager"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "stETH"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "stETHTokenMask"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "targetContract"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "unwrap"
  ): TypedContractMethod<
    [amount: BigNumberish],
    [[bigint, bigint] & { tokensToEnable: bigint; tokensToDisable: bigint }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "unwrapDiff"
  ): TypedContractMethod<
    [leftoverAmount: BigNumberish],
    [[bigint, bigint] & { tokensToEnable: bigint; tokensToDisable: bigint }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "wrap"
  ): TypedContractMethod<
    [amount: BigNumberish],
    [[bigint, bigint] & { tokensToEnable: bigint; tokensToDisable: bigint }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "wrapDiff"
  ): TypedContractMethod<
    [leftoverAmount: BigNumberish],
    [[bigint, bigint] & { tokensToEnable: bigint; tokensToDisable: bigint }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "wstETHTokenMask"
  ): TypedContractMethod<[], [bigint], "view">;

  filters: {};
}
