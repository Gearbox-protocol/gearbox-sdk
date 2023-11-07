/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface IPriceOracleV3EventsInterface extends utils.Interface {
  functions: {};

  events: {
    "SetPriceFeed(address,address,uint32,bool)": EventFragment;
    "SetReservePriceFeed(address,address,uint32,bool)": EventFragment;
    "SetReservePriceFeedStatus(address,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SetPriceFeed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetReservePriceFeed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetReservePriceFeedStatus"): EventFragment;
}

export interface SetPriceFeedEventObject {
  token: string;
  priceFeed: string;
  stalenessPeriod: number;
  skipCheck: boolean;
}
export type SetPriceFeedEvent = TypedEvent<
  [string, string, number, boolean],
  SetPriceFeedEventObject
>;

export type SetPriceFeedEventFilter = TypedEventFilter<SetPriceFeedEvent>;

export interface SetReservePriceFeedEventObject {
  token: string;
  priceFeed: string;
  stalenessPeriod: number;
  skipCheck: boolean;
}
export type SetReservePriceFeedEvent = TypedEvent<
  [string, string, number, boolean],
  SetReservePriceFeedEventObject
>;

export type SetReservePriceFeedEventFilter =
  TypedEventFilter<SetReservePriceFeedEvent>;

export interface SetReservePriceFeedStatusEventObject {
  token: string;
  active: boolean;
}
export type SetReservePriceFeedStatusEvent = TypedEvent<
  [string, boolean],
  SetReservePriceFeedStatusEventObject
>;

export type SetReservePriceFeedStatusEventFilter =
  TypedEventFilter<SetReservePriceFeedStatusEvent>;

export interface IPriceOracleV3Events extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IPriceOracleV3EventsInterface;

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
    "SetPriceFeed(address,address,uint32,bool)"(
      token?: PromiseOrValue<string> | null,
      priceFeed?: PromiseOrValue<string> | null,
      stalenessPeriod?: null,
      skipCheck?: null
    ): SetPriceFeedEventFilter;
    SetPriceFeed(
      token?: PromiseOrValue<string> | null,
      priceFeed?: PromiseOrValue<string> | null,
      stalenessPeriod?: null,
      skipCheck?: null
    ): SetPriceFeedEventFilter;

    "SetReservePriceFeed(address,address,uint32,bool)"(
      token?: PromiseOrValue<string> | null,
      priceFeed?: PromiseOrValue<string> | null,
      stalenessPeriod?: null,
      skipCheck?: null
    ): SetReservePriceFeedEventFilter;
    SetReservePriceFeed(
      token?: PromiseOrValue<string> | null,
      priceFeed?: PromiseOrValue<string> | null,
      stalenessPeriod?: null,
      skipCheck?: null
    ): SetReservePriceFeedEventFilter;

    "SetReservePriceFeedStatus(address,bool)"(
      token?: PromiseOrValue<string> | null,
      active?: null
    ): SetReservePriceFeedStatusEventFilter;
    SetReservePriceFeedStatus(
      token?: PromiseOrValue<string> | null,
      active?: null
    ): SetReservePriceFeedStatusEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
