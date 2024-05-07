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
} from "./common";

export interface IERC4626AdapterInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "_gearboxAdapterType"
      | "_gearboxAdapterVersion"
      | "addressProvider"
      | "asset"
      | "assetMask"
      | "creditManager"
      | "deposit"
      | "depositDiff"
      | "mint"
      | "redeem"
      | "redeemDiff"
      | "sharesMask"
      | "targetContract"
      | "withdraw"
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
  encodeFunctionData(functionFragment: "asset", values?: undefined): string;
  encodeFunctionData(functionFragment: "assetMask", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "creditManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "depositDiff",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "redeem",
    values: [BigNumberish, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemDiff",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "sharesMask",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "targetContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, AddressLike, AddressLike]
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
  decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "assetMask", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "creditManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositDiff",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "redeemDiff", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sharesMask", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "targetContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}

export interface IERC4626Adapter extends BaseContract {
  connect(runner?: ContractRunner | null): IERC4626Adapter;
  waitForDeployment(): Promise<this>;

  interface: IERC4626AdapterInterface;

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

  asset: TypedContractMethod<[], [string], "view">;

  assetMask: TypedContractMethod<[], [bigint], "view">;

  creditManager: TypedContractMethod<[], [string], "view">;

  deposit: TypedContractMethod<
    [assets: BigNumberish, arg1: AddressLike],
    [[bigint, bigint] & { tokensToEnable: bigint; tokensToDisable: bigint }],
    "nonpayable"
  >;

  depositDiff: TypedContractMethod<
    [leftoverAmount: BigNumberish],
    [[bigint, bigint] & { tokensToEnable: bigint; tokensToDisable: bigint }],
    "nonpayable"
  >;

  mint: TypedContractMethod<
    [shares: BigNumberish, arg1: AddressLike],
    [[bigint, bigint] & { tokensToEnable: bigint; tokensToDisable: bigint }],
    "nonpayable"
  >;

  redeem: TypedContractMethod<
    [shares: BigNumberish, arg1: AddressLike, arg2: AddressLike],
    [[bigint, bigint] & { tokensToEnable: bigint; tokensToDisable: bigint }],
    "nonpayable"
  >;

  redeemDiff: TypedContractMethod<
    [leftoverAmount: BigNumberish],
    [[bigint, bigint] & { tokensToEnable: bigint; tokensToDisable: bigint }],
    "nonpayable"
  >;

  sharesMask: TypedContractMethod<[], [bigint], "view">;

  targetContract: TypedContractMethod<[], [string], "view">;

  withdraw: TypedContractMethod<
    [assets: BigNumberish, arg1: AddressLike, arg2: AddressLike],
    [[bigint, bigint] & { tokensToEnable: bigint; tokensToDisable: bigint }],
    "nonpayable"
  >;

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
    nameOrSignature: "asset"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "assetMask"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "creditManager"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "deposit"
  ): TypedContractMethod<
    [assets: BigNumberish, arg1: AddressLike],
    [[bigint, bigint] & { tokensToEnable: bigint; tokensToDisable: bigint }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "depositDiff"
  ): TypedContractMethod<
    [leftoverAmount: BigNumberish],
    [[bigint, bigint] & { tokensToEnable: bigint; tokensToDisable: bigint }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "mint"
  ): TypedContractMethod<
    [shares: BigNumberish, arg1: AddressLike],
    [[bigint, bigint] & { tokensToEnable: bigint; tokensToDisable: bigint }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "redeem"
  ): TypedContractMethod<
    [shares: BigNumberish, arg1: AddressLike, arg2: AddressLike],
    [[bigint, bigint] & { tokensToEnable: bigint; tokensToDisable: bigint }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "redeemDiff"
  ): TypedContractMethod<
    [leftoverAmount: BigNumberish],
    [[bigint, bigint] & { tokensToEnable: bigint; tokensToDisable: bigint }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "sharesMask"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "targetContract"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<
    [assets: BigNumberish, arg1: AddressLike, arg2: AddressLike],
    [[bigint, bigint] & { tokensToEnable: bigint; tokensToDisable: bigint }],
    "nonpayable"
  >;

  filters: {};
}
