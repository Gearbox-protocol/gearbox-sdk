/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, BytesLike, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface IControllerTimelockV3EventsInterface extends utils.Interface {
  functions: {};

  events: {
    "CancelTransaction(bytes32)": EventFragment;
    "ExecuteTransaction(bytes32)": EventFragment;
    "QueueTransaction(bytes32,address,address,string,bytes,uint40)": EventFragment;
    "SetVetoAdmin(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CancelTransaction"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExecuteTransaction"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "QueueTransaction"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetVetoAdmin"): EventFragment;
}

export interface CancelTransactionEventObject {
  txHash: string;
}
export type CancelTransactionEvent = TypedEvent<
  [string],
  CancelTransactionEventObject
>;

export type CancelTransactionEventFilter =
  TypedEventFilter<CancelTransactionEvent>;

export interface ExecuteTransactionEventObject {
  txHash: string;
}
export type ExecuteTransactionEvent = TypedEvent<
  [string],
  ExecuteTransactionEventObject
>;

export type ExecuteTransactionEventFilter =
  TypedEventFilter<ExecuteTransactionEvent>;

export interface QueueTransactionEventObject {
  txHash: string;
  executor: string;
  target: string;
  signature: string;
  data: string;
  eta: number;
}
export type QueueTransactionEvent = TypedEvent<
  [string, string, string, string, string, number],
  QueueTransactionEventObject
>;

export type QueueTransactionEventFilter =
  TypedEventFilter<QueueTransactionEvent>;

export interface SetVetoAdminEventObject {
  newAdmin: string;
}
export type SetVetoAdminEvent = TypedEvent<[string], SetVetoAdminEventObject>;

export type SetVetoAdminEventFilter = TypedEventFilter<SetVetoAdminEvent>;

export interface IControllerTimelockV3Events extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IControllerTimelockV3EventsInterface;

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

  functions: {};

  callStatic: {};

  filters: {
    "CancelTransaction(bytes32)"(
      txHash?: PromiseOrValue<BytesLike> | null
    ): CancelTransactionEventFilter;
    CancelTransaction(
      txHash?: PromiseOrValue<BytesLike> | null
    ): CancelTransactionEventFilter;

    "ExecuteTransaction(bytes32)"(
      txHash?: PromiseOrValue<BytesLike> | null
    ): ExecuteTransactionEventFilter;
    ExecuteTransaction(
      txHash?: PromiseOrValue<BytesLike> | null
    ): ExecuteTransactionEventFilter;

    "QueueTransaction(bytes32,address,address,string,bytes,uint40)"(
      txHash?: PromiseOrValue<BytesLike> | null,
      executor?: PromiseOrValue<string> | null,
      target?: null,
      signature?: null,
      data?: null,
      eta?: null
    ): QueueTransactionEventFilter;
    QueueTransaction(
      txHash?: PromiseOrValue<BytesLike> | null,
      executor?: PromiseOrValue<string> | null,
      target?: null,
      signature?: null,
      data?: null,
      eta?: null
    ): QueueTransactionEventFilter;

    "SetVetoAdmin(address)"(
      newAdmin?: PromiseOrValue<string> | null
    ): SetVetoAdminEventFilter;
    SetVetoAdmin(
      newAdmin?: PromiseOrValue<string> | null
    ): SetVetoAdminEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
