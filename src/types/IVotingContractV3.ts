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
  PromiseOrValue,
} from "./common";

export interface IVotingContractV3Interface extends utils.Interface {
  functions: {
    "unvote(address,uint96,bytes)": FunctionFragment;
    "vote(address,uint96,bytes)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "unvote" | "vote"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "unvote",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "vote",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "unvote", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;

  events: {};
}

export interface IVotingContractV3 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IVotingContractV3Interface;

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
    unvote(
      user: PromiseOrValue<string>,
      votes: PromiseOrValue<BigNumberish>,
      extraData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    vote(
      user: PromiseOrValue<string>,
      votes: PromiseOrValue<BigNumberish>,
      extraData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  unvote(
    user: PromiseOrValue<string>,
    votes: PromiseOrValue<BigNumberish>,
    extraData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  vote(
    user: PromiseOrValue<string>,
    votes: PromiseOrValue<BigNumberish>,
    extraData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    unvote(
      user: PromiseOrValue<string>,
      votes: PromiseOrValue<BigNumberish>,
      extraData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    vote(
      user: PromiseOrValue<string>,
      votes: PromiseOrValue<BigNumberish>,
      extraData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    unvote(
      user: PromiseOrValue<string>,
      votes: PromiseOrValue<BigNumberish>,
      extraData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    vote(
      user: PromiseOrValue<string>,
      votes: PromiseOrValue<BigNumberish>,
      extraData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    unvote(
      user: PromiseOrValue<string>,
      votes: PromiseOrValue<BigNumberish>,
      extraData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    vote(
      user: PromiseOrValue<string>,
      votes: PromiseOrValue<BigNumberish>,
      extraData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
