/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
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

export type BalanceStruct = { token: string; balance: BigNumberish };

export type BalanceStructOutput = [string, BigNumber] & {
  token: string;
  balance: BigNumber;
};

export type TokenAdaptersStruct = {
  token: string;
  depositAdapter: string;
  withdrawAdapter: string;
};

export type TokenAdaptersStructOutput = [string, string, string] & {
  token: string;
  depositAdapter: string;
  withdrawAdapter: string;
};

export type MultiCallStruct = { target: string; callData: BytesLike };

export type MultiCallStructOutput = [string, string] & {
  target: string;
  callData: string;
};

export type StrategyPathTaskStruct = {
  creditAccount: string;
  balances: BalanceStruct[];
  target: string;
  connectors: string[];
  adapters: string[];
  slippagePerStep: BigNumberish;
  force: boolean;
  targetType: BigNumberish;
  foundAdapters: TokenAdaptersStruct[];
  gasPriceTargetRAY: BigNumberish;
  gasUsage: BigNumberish;
  slippageMultiplier: BigNumberish;
  initTargetBalance: BigNumberish;
  calls: MultiCallStruct[];
};

export type StrategyPathTaskStructOutput = [
  string,
  BalanceStructOutput[],
  string,
  string[],
  string[],
  BigNumber,
  boolean,
  number,
  TokenAdaptersStructOutput[],
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  MultiCallStructOutput[]
] & {
  creditAccount: string;
  balances: BalanceStructOutput[];
  target: string;
  connectors: string[];
  adapters: string[];
  slippagePerStep: BigNumber;
  force: boolean;
  targetType: number;
  foundAdapters: TokenAdaptersStructOutput[];
  gasPriceTargetRAY: BigNumber;
  gasUsage: BigNumber;
  slippageMultiplier: BigNumber;
  initTargetBalance: BigNumber;
  calls: MultiCallStructOutput[];
};

export type PathOptionStruct = {
  target: string;
  option: BigNumberish;
  totalOptions: BigNumberish;
};

export type PathOptionStructOutput = [string, number, number] & {
  target: string;
  option: number;
  totalOptions: number;
};

export interface IWithdrawerOptionsInterface extends utils.Interface {
  functions: {
    "getComponentId()": FunctionFragment;
    "getUnderlyings(uint8,address,(address,(address,uint256)[],address,address[],address[],uint256,bool,uint8,(address,address,address)[],uint256,uint256,uint256,uint256,(address,bytes)[]))": FunctionFragment;
    "version()": FunctionFragment;
    "withdraw(address,uint256,uint8,address,(address,(address,uint256)[],address,address[],address[],uint256,bool,uint8,(address,address,address)[],uint256,uint256,uint256,uint256,(address,bytes)[]))": FunctionFragment;
    "withdrawAll(address,uint8,address,(address,(address,uint256)[],address,address[],address[],uint256,bool,uint8,(address,address,address)[],uint256,uint256,uint256,uint256,(address,bytes)[]))": FunctionFragment;
    "withdrawAllTokens((address,(address,uint256)[],address,address[],address[],uint256,bool,uint8,(address,address,address)[],uint256,uint256,uint256,uint256,(address,bytes)[]),(address,uint8,uint8)[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getComponentId"
      | "getUnderlyings"
      | "version"
      | "withdraw"
      | "withdrawAll"
      | "withdrawAllTokens"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getComponentId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUnderlyings",
    values: [BigNumberish, string, StrategyPathTaskStruct]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, BigNumberish, BigNumberish, string, StrategyPathTaskStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawAll",
    values: [string, BigNumberish, string, StrategyPathTaskStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawAllTokens",
    values: [StrategyPathTaskStruct, PathOptionStruct[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "getComponentId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUnderlyings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAllTokens",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IWithdrawerOptions extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IWithdrawerOptionsInterface;

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
    getComponentId(overrides?: CallOverrides): Promise<[number]>;

    getUnderlyings(
      ttIn: BigNumberish,
      tokenOut: string,
      task: StrategyPathTaskStruct,
      overrides?: CallOverrides
    ): Promise<
      [string[], StrategyPathTaskStructOutput] & { tokensIn: string[] }
    >;

    version(overrides?: CallOverrides): Promise<[BigNumber]>;

    withdraw(
      tokenIn: string,
      amount: BigNumberish,
      ttOut: BigNumberish,
      tokenOut: string,
      task: StrategyPathTaskStruct,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, StrategyPathTaskStructOutput] & { amountOut: BigNumber }
    >;

    withdrawAll(
      tokenIn: string,
      ttOut: BigNumberish,
      tokenOut: string,
      task: StrategyPathTaskStruct,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, StrategyPathTaskStructOutput] & { amountOut: BigNumber }
    >;

    withdrawAllTokens(
      task: StrategyPathTaskStruct,
      pathOptions: PathOptionStruct[],
      overrides?: CallOverrides
    ): Promise<[StrategyPathTaskStructOutput]>;
  };

  getComponentId(overrides?: CallOverrides): Promise<number>;

  getUnderlyings(
    ttIn: BigNumberish,
    tokenOut: string,
    task: StrategyPathTaskStruct,
    overrides?: CallOverrides
  ): Promise<[string[], StrategyPathTaskStructOutput] & { tokensIn: string[] }>;

  version(overrides?: CallOverrides): Promise<BigNumber>;

  withdraw(
    tokenIn: string,
    amount: BigNumberish,
    ttOut: BigNumberish,
    tokenOut: string,
    task: StrategyPathTaskStruct,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, StrategyPathTaskStructOutput] & { amountOut: BigNumber }
  >;

  withdrawAll(
    tokenIn: string,
    ttOut: BigNumberish,
    tokenOut: string,
    task: StrategyPathTaskStruct,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, StrategyPathTaskStructOutput] & { amountOut: BigNumber }
  >;

  withdrawAllTokens(
    task: StrategyPathTaskStruct,
    pathOptions: PathOptionStruct[],
    overrides?: CallOverrides
  ): Promise<StrategyPathTaskStructOutput>;

  callStatic: {
    getComponentId(overrides?: CallOverrides): Promise<number>;

    getUnderlyings(
      ttIn: BigNumberish,
      tokenOut: string,
      task: StrategyPathTaskStruct,
      overrides?: CallOverrides
    ): Promise<
      [string[], StrategyPathTaskStructOutput] & { tokensIn: string[] }
    >;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      tokenIn: string,
      amount: BigNumberish,
      ttOut: BigNumberish,
      tokenOut: string,
      task: StrategyPathTaskStruct,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, StrategyPathTaskStructOutput] & { amountOut: BigNumber }
    >;

    withdrawAll(
      tokenIn: string,
      ttOut: BigNumberish,
      tokenOut: string,
      task: StrategyPathTaskStruct,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, StrategyPathTaskStructOutput] & { amountOut: BigNumber }
    >;

    withdrawAllTokens(
      task: StrategyPathTaskStruct,
      pathOptions: PathOptionStruct[],
      overrides?: CallOverrides
    ): Promise<StrategyPathTaskStructOutput>;
  };

  filters: {};

  estimateGas: {
    getComponentId(overrides?: CallOverrides): Promise<BigNumber>;

    getUnderlyings(
      ttIn: BigNumberish,
      tokenOut: string,
      task: StrategyPathTaskStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      tokenIn: string,
      amount: BigNumberish,
      ttOut: BigNumberish,
      tokenOut: string,
      task: StrategyPathTaskStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawAll(
      tokenIn: string,
      ttOut: BigNumberish,
      tokenOut: string,
      task: StrategyPathTaskStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawAllTokens(
      task: StrategyPathTaskStruct,
      pathOptions: PathOptionStruct[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getComponentId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUnderlyings(
      ttIn: BigNumberish,
      tokenOut: string,
      task: StrategyPathTaskStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      tokenIn: string,
      amount: BigNumberish,
      ttOut: BigNumberish,
      tokenOut: string,
      task: StrategyPathTaskStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawAll(
      tokenIn: string,
      ttOut: BigNumberish,
      tokenOut: string,
      task: StrategyPathTaskStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawAllTokens(
      task: StrategyPathTaskStruct,
      pathOptions: PathOptionStruct[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
