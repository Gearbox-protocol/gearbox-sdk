/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, BigNumber, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface IGearStakingV3EventsInterface extends utils.Interface {
  functions: {};

  events: {
    "ClaimGearWithdrawal(address,address,uint256)": EventFragment;
    "DepositGear(address,uint256)": EventFragment;
    "MigrateGear(address,address,uint256)": EventFragment;
    "ScheduleGearWithdrawal(address,uint256)": EventFragment;
    "SetMigrator(address)": EventFragment;
    "SetSuccessor(address)": EventFragment;
    "SetVotingContractStatus(address,uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ClaimGearWithdrawal"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DepositGear"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MigrateGear"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ScheduleGearWithdrawal"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetMigrator"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetSuccessor"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetVotingContractStatus"): EventFragment;
}

export interface ClaimGearWithdrawalEventObject {
  user: string;
  to: string;
  amount: BigNumber;
}
export type ClaimGearWithdrawalEvent = TypedEvent<
  [string, string, BigNumber],
  ClaimGearWithdrawalEventObject
>;

export type ClaimGearWithdrawalEventFilter =
  TypedEventFilter<ClaimGearWithdrawalEvent>;

export interface DepositGearEventObject {
  user: string;
  amount: BigNumber;
}
export type DepositGearEvent = TypedEvent<
  [string, BigNumber],
  DepositGearEventObject
>;

export type DepositGearEventFilter = TypedEventFilter<DepositGearEvent>;

export interface MigrateGearEventObject {
  user: string;
  successor: string;
  amount: BigNumber;
}
export type MigrateGearEvent = TypedEvent<
  [string, string, BigNumber],
  MigrateGearEventObject
>;

export type MigrateGearEventFilter = TypedEventFilter<MigrateGearEvent>;

export interface ScheduleGearWithdrawalEventObject {
  user: string;
  amount: BigNumber;
}
export type ScheduleGearWithdrawalEvent = TypedEvent<
  [string, BigNumber],
  ScheduleGearWithdrawalEventObject
>;

export type ScheduleGearWithdrawalEventFilter =
  TypedEventFilter<ScheduleGearWithdrawalEvent>;

export interface SetMigratorEventObject {
  migrator: string;
}
export type SetMigratorEvent = TypedEvent<[string], SetMigratorEventObject>;

export type SetMigratorEventFilter = TypedEventFilter<SetMigratorEvent>;

export interface SetSuccessorEventObject {
  successor: string;
}
export type SetSuccessorEvent = TypedEvent<[string], SetSuccessorEventObject>;

export type SetSuccessorEventFilter = TypedEventFilter<SetSuccessorEvent>;

export interface SetVotingContractStatusEventObject {
  votingContract: string;
  status: number;
}
export type SetVotingContractStatusEvent = TypedEvent<
  [string, number],
  SetVotingContractStatusEventObject
>;

export type SetVotingContractStatusEventFilter =
  TypedEventFilter<SetVotingContractStatusEvent>;

export interface IGearStakingV3Events extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IGearStakingV3EventsInterface;

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
    "ClaimGearWithdrawal(address,address,uint256)"(
      user?: PromiseOrValue<string> | null,
      to?: null,
      amount?: null
    ): ClaimGearWithdrawalEventFilter;
    ClaimGearWithdrawal(
      user?: PromiseOrValue<string> | null,
      to?: null,
      amount?: null
    ): ClaimGearWithdrawalEventFilter;

    "DepositGear(address,uint256)"(
      user?: PromiseOrValue<string> | null,
      amount?: null
    ): DepositGearEventFilter;
    DepositGear(
      user?: PromiseOrValue<string> | null,
      amount?: null
    ): DepositGearEventFilter;

    "MigrateGear(address,address,uint256)"(
      user?: PromiseOrValue<string> | null,
      successor?: PromiseOrValue<string> | null,
      amount?: null
    ): MigrateGearEventFilter;
    MigrateGear(
      user?: PromiseOrValue<string> | null,
      successor?: PromiseOrValue<string> | null,
      amount?: null
    ): MigrateGearEventFilter;

    "ScheduleGearWithdrawal(address,uint256)"(
      user?: PromiseOrValue<string> | null,
      amount?: null
    ): ScheduleGearWithdrawalEventFilter;
    ScheduleGearWithdrawal(
      user?: PromiseOrValue<string> | null,
      amount?: null
    ): ScheduleGearWithdrawalEventFilter;

    "SetMigrator(address)"(
      migrator?: PromiseOrValue<string> | null
    ): SetMigratorEventFilter;
    SetMigrator(
      migrator?: PromiseOrValue<string> | null
    ): SetMigratorEventFilter;

    "SetSuccessor(address)"(
      successor?: PromiseOrValue<string> | null
    ): SetSuccessorEventFilter;
    SetSuccessor(
      successor?: PromiseOrValue<string> | null
    ): SetSuccessorEventFilter;

    "SetVotingContractStatus(address,uint8)"(
      votingContract?: PromiseOrValue<string> | null,
      status?: null
    ): SetVotingContractStatusEventFilter;
    SetVotingContractStatus(
      votingContract?: PromiseOrValue<string> | null,
      status?: null
    ): SetVotingContractStatusEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
