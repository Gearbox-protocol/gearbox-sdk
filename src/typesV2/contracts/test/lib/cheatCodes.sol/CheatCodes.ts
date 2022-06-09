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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../../common";

export interface CheatCodesInterface extends utils.Interface {
  functions: {
    "accesses(address)": FunctionFragment;
    "addr(uint256)": FunctionFragment;
    "assume(bool)": FunctionFragment;
    "clearMockedCalls()": FunctionFragment;
    "deal(address,uint256)": FunctionFragment;
    "etch(address,bytes)": FunctionFragment;
    "expectCall(address,bytes)": FunctionFragment;
    "expectEmit(bool,bool,bool,bool)": FunctionFragment;
    "expectRevert(bytes4)": FunctionFragment;
    "expectRevert(bytes)": FunctionFragment;
    "fee(uint256)": FunctionFragment;
    "ffi(string[])": FunctionFragment;
    "getCode(string)": FunctionFragment;
    "label(address,string)": FunctionFragment;
    "load(address,bytes32)": FunctionFragment;
    "mockCall(address,bytes,bytes)": FunctionFragment;
    "prank(address,address)": FunctionFragment;
    "prank(address)": FunctionFragment;
    "record()": FunctionFragment;
    "roll(uint256)": FunctionFragment;
    "sign(uint256,bytes32)": FunctionFragment;
    "startPrank(address)": FunctionFragment;
    "startPrank(address,address)": FunctionFragment;
    "stopPrank()": FunctionFragment;
    "store(address,bytes32,bytes32)": FunctionFragment;
    "warp(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "accesses"
      | "addr"
      | "assume"
      | "clearMockedCalls"
      | "deal"
      | "etch"
      | "expectCall"
      | "expectEmit"
      | "expectRevert(bytes4)"
      | "expectRevert(bytes)"
      | "fee"
      | "ffi"
      | "getCode"
      | "label"
      | "load"
      | "mockCall"
      | "prank(address,address)"
      | "prank(address)"
      | "record"
      | "roll"
      | "sign"
      | "startPrank(address)"
      | "startPrank(address,address)"
      | "stopPrank"
      | "store"
      | "warp"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "accesses", values: [string]): string;
  encodeFunctionData(functionFragment: "addr", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "assume", values: [boolean]): string;
  encodeFunctionData(
    functionFragment: "clearMockedCalls",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deal",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "etch",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "expectCall",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "expectEmit",
    values: [boolean, boolean, boolean, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "expectRevert(bytes4)",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "expectRevert(bytes)",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "fee", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "ffi", values: [string[]]): string;
  encodeFunctionData(functionFragment: "getCode", values: [string]): string;
  encodeFunctionData(
    functionFragment: "label",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "load",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "mockCall",
    values: [string, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "prank(address,address)",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "prank(address)",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "record", values?: undefined): string;
  encodeFunctionData(functionFragment: "roll", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "sign",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "startPrank(address)",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "startPrank(address,address)",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "stopPrank", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "store",
    values: [string, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "warp", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "accesses", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addr", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "assume", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "clearMockedCalls",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deal", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "etch", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "expectCall", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "expectEmit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "expectRevert(bytes4)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "expectRevert(bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ffi", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getCode", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "label", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "load", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mockCall", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "prank(address,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "prank(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "record", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "roll", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sign", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "startPrank(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startPrank(address,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stopPrank", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "store", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "warp", data: BytesLike): Result;

  events: {};
}

export interface CheatCodes extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CheatCodesInterface;

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
    accesses(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addr(
      privateKey: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    assume(
      arg0: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    clearMockedCalls(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deal(
      who: string,
      newBalance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    etch(
      who: string,
      code: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    expectCall(
      arg0: string,
      arg1: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    expectEmit(
      arg0: boolean,
      arg1: boolean,
      arg2: boolean,
      arg3: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "expectRevert(bytes4)"(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "expectRevert(bytes)"(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fee(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    ffi(
      arg0: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getCode(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    label(
      addr: string,
      label: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    load(
      account: string,
      slot: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mockCall(
      arg0: string,
      arg1: BytesLike,
      arg2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "prank(address,address)"(
      arg0: string,
      arg1: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "prank(address)"(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    record(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    roll(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sign(
      privateKey: BigNumberish,
      digest: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "startPrank(address)"(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "startPrank(address,address)"(
      arg0: string,
      arg1: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stopPrank(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    store(
      account: string,
      slot: BytesLike,
      value: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    warp(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  accesses(
    arg0: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addr(
    privateKey: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  assume(
    arg0: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  clearMockedCalls(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deal(
    who: string,
    newBalance: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  etch(
    who: string,
    code: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  expectCall(
    arg0: string,
    arg1: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  expectEmit(
    arg0: boolean,
    arg1: boolean,
    arg2: boolean,
    arg3: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "expectRevert(bytes4)"(
    arg0: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "expectRevert(bytes)"(
    arg0: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fee(
    arg0: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  ffi(
    arg0: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getCode(
    arg0: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  label(
    addr: string,
    label: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  load(
    account: string,
    slot: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mockCall(
    arg0: string,
    arg1: BytesLike,
    arg2: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "prank(address,address)"(
    arg0: string,
    arg1: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "prank(address)"(
    arg0: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  record(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  roll(
    arg0: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sign(
    privateKey: BigNumberish,
    digest: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "startPrank(address)"(
    arg0: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "startPrank(address,address)"(
    arg0: string,
    arg1: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stopPrank(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  store(
    account: string,
    slot: BytesLike,
    value: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  warp(
    arg0: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    accesses(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string[], string[]] & { reads: string[]; writes: string[] }>;

    addr(privateKey: BigNumberish, overrides?: CallOverrides): Promise<string>;

    assume(arg0: boolean, overrides?: CallOverrides): Promise<void>;

    clearMockedCalls(overrides?: CallOverrides): Promise<void>;

    deal(
      who: string,
      newBalance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    etch(
      who: string,
      code: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    expectCall(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    expectEmit(
      arg0: boolean,
      arg1: boolean,
      arg2: boolean,
      arg3: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "expectRevert(bytes4)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "expectRevert(bytes)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    fee(arg0: BigNumberish, overrides?: CallOverrides): Promise<void>;

    ffi(arg0: string[], overrides?: CallOverrides): Promise<string>;

    getCode(arg0: string, overrides?: CallOverrides): Promise<string>;

    label(
      addr: string,
      label: string,
      overrides?: CallOverrides
    ): Promise<void>;

    load(
      account: string,
      slot: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    mockCall(
      arg0: string,
      arg1: BytesLike,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "prank(address,address)"(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "prank(address)"(arg0: string, overrides?: CallOverrides): Promise<void>;

    record(overrides?: CallOverrides): Promise<void>;

    roll(arg0: BigNumberish, overrides?: CallOverrides): Promise<void>;

    sign(
      privateKey: BigNumberish,
      digest: BytesLike,
      overrides?: CallOverrides
    ): Promise<[number, string, string] & { v: number; r: string; s: string }>;

    "startPrank(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "startPrank(address,address)"(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<void>;

    stopPrank(overrides?: CallOverrides): Promise<void>;

    store(
      account: string,
      slot: BytesLike,
      value: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    warp(arg0: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    accesses(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addr(
      privateKey: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    assume(
      arg0: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    clearMockedCalls(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deal(
      who: string,
      newBalance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    etch(
      who: string,
      code: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    expectCall(
      arg0: string,
      arg1: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    expectEmit(
      arg0: boolean,
      arg1: boolean,
      arg2: boolean,
      arg3: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "expectRevert(bytes4)"(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "expectRevert(bytes)"(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fee(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    ffi(
      arg0: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getCode(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    label(
      addr: string,
      label: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    load(
      account: string,
      slot: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mockCall(
      arg0: string,
      arg1: BytesLike,
      arg2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "prank(address,address)"(
      arg0: string,
      arg1: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "prank(address)"(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    record(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    roll(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sign(
      privateKey: BigNumberish,
      digest: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "startPrank(address)"(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "startPrank(address,address)"(
      arg0: string,
      arg1: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stopPrank(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    store(
      account: string,
      slot: BytesLike,
      value: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    warp(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    accesses(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addr(
      privateKey: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    assume(
      arg0: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    clearMockedCalls(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deal(
      who: string,
      newBalance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    etch(
      who: string,
      code: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    expectCall(
      arg0: string,
      arg1: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    expectEmit(
      arg0: boolean,
      arg1: boolean,
      arg2: boolean,
      arg3: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "expectRevert(bytes4)"(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "expectRevert(bytes)"(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fee(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    ffi(
      arg0: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getCode(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    label(
      addr: string,
      label: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    load(
      account: string,
      slot: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mockCall(
      arg0: string,
      arg1: BytesLike,
      arg2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "prank(address,address)"(
      arg0: string,
      arg1: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "prank(address)"(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    record(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    roll(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sign(
      privateKey: BigNumberish,
      digest: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "startPrank(address)"(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "startPrank(address,address)"(
      arg0: string,
      arg1: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stopPrank(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    store(
      account: string,
      slot: BytesLike,
      value: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    warp(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
