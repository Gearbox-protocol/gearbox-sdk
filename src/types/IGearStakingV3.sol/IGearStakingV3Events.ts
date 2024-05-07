/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  FunctionFragment,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
} from "../common";

export interface IGearStakingV3EventsInterface extends Interface {
  getEvent(
    nameOrSignatureOrTopic:
      | "ClaimGearWithdrawal"
      | "DepositGear"
      | "MigrateGear"
      | "ScheduleGearWithdrawal"
      | "SetMigrator"
      | "SetSuccessor"
      | "SetVotingContractStatus"
  ): EventFragment;
}

export namespace ClaimGearWithdrawalEvent {
  export type InputTuple = [
    user: AddressLike,
    to: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [user: string, to: string, amount: bigint];
  export interface OutputObject {
    user: string;
    to: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DepositGearEvent {
  export type InputTuple = [user: AddressLike, amount: BigNumberish];
  export type OutputTuple = [user: string, amount: bigint];
  export interface OutputObject {
    user: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MigrateGearEvent {
  export type InputTuple = [
    user: AddressLike,
    successor: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [user: string, successor: string, amount: bigint];
  export interface OutputObject {
    user: string;
    successor: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ScheduleGearWithdrawalEvent {
  export type InputTuple = [user: AddressLike, amount: BigNumberish];
  export type OutputTuple = [user: string, amount: bigint];
  export interface OutputObject {
    user: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetMigratorEvent {
  export type InputTuple = [migrator: AddressLike];
  export type OutputTuple = [migrator: string];
  export interface OutputObject {
    migrator: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetSuccessorEvent {
  export type InputTuple = [successor: AddressLike];
  export type OutputTuple = [successor: string];
  export interface OutputObject {
    successor: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetVotingContractStatusEvent {
  export type InputTuple = [votingContract: AddressLike, status: BigNumberish];
  export type OutputTuple = [votingContract: string, status: bigint];
  export interface OutputObject {
    votingContract: string;
    status: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IGearStakingV3Events extends BaseContract {
  connect(runner?: ContractRunner | null): IGearStakingV3Events;
  waitForDeployment(): Promise<this>;

  interface: IGearStakingV3EventsInterface;

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

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getEvent(
    key: "ClaimGearWithdrawal"
  ): TypedContractEvent<
    ClaimGearWithdrawalEvent.InputTuple,
    ClaimGearWithdrawalEvent.OutputTuple,
    ClaimGearWithdrawalEvent.OutputObject
  >;
  getEvent(
    key: "DepositGear"
  ): TypedContractEvent<
    DepositGearEvent.InputTuple,
    DepositGearEvent.OutputTuple,
    DepositGearEvent.OutputObject
  >;
  getEvent(
    key: "MigrateGear"
  ): TypedContractEvent<
    MigrateGearEvent.InputTuple,
    MigrateGearEvent.OutputTuple,
    MigrateGearEvent.OutputObject
  >;
  getEvent(
    key: "ScheduleGearWithdrawal"
  ): TypedContractEvent<
    ScheduleGearWithdrawalEvent.InputTuple,
    ScheduleGearWithdrawalEvent.OutputTuple,
    ScheduleGearWithdrawalEvent.OutputObject
  >;
  getEvent(
    key: "SetMigrator"
  ): TypedContractEvent<
    SetMigratorEvent.InputTuple,
    SetMigratorEvent.OutputTuple,
    SetMigratorEvent.OutputObject
  >;
  getEvent(
    key: "SetSuccessor"
  ): TypedContractEvent<
    SetSuccessorEvent.InputTuple,
    SetSuccessorEvent.OutputTuple,
    SetSuccessorEvent.OutputObject
  >;
  getEvent(
    key: "SetVotingContractStatus"
  ): TypedContractEvent<
    SetVotingContractStatusEvent.InputTuple,
    SetVotingContractStatusEvent.OutputTuple,
    SetVotingContractStatusEvent.OutputObject
  >;

  filters: {
    "ClaimGearWithdrawal(address,address,uint256)": TypedContractEvent<
      ClaimGearWithdrawalEvent.InputTuple,
      ClaimGearWithdrawalEvent.OutputTuple,
      ClaimGearWithdrawalEvent.OutputObject
    >;
    ClaimGearWithdrawal: TypedContractEvent<
      ClaimGearWithdrawalEvent.InputTuple,
      ClaimGearWithdrawalEvent.OutputTuple,
      ClaimGearWithdrawalEvent.OutputObject
    >;

    "DepositGear(address,uint256)": TypedContractEvent<
      DepositGearEvent.InputTuple,
      DepositGearEvent.OutputTuple,
      DepositGearEvent.OutputObject
    >;
    DepositGear: TypedContractEvent<
      DepositGearEvent.InputTuple,
      DepositGearEvent.OutputTuple,
      DepositGearEvent.OutputObject
    >;

    "MigrateGear(address,address,uint256)": TypedContractEvent<
      MigrateGearEvent.InputTuple,
      MigrateGearEvent.OutputTuple,
      MigrateGearEvent.OutputObject
    >;
    MigrateGear: TypedContractEvent<
      MigrateGearEvent.InputTuple,
      MigrateGearEvent.OutputTuple,
      MigrateGearEvent.OutputObject
    >;

    "ScheduleGearWithdrawal(address,uint256)": TypedContractEvent<
      ScheduleGearWithdrawalEvent.InputTuple,
      ScheduleGearWithdrawalEvent.OutputTuple,
      ScheduleGearWithdrawalEvent.OutputObject
    >;
    ScheduleGearWithdrawal: TypedContractEvent<
      ScheduleGearWithdrawalEvent.InputTuple,
      ScheduleGearWithdrawalEvent.OutputTuple,
      ScheduleGearWithdrawalEvent.OutputObject
    >;

    "SetMigrator(address)": TypedContractEvent<
      SetMigratorEvent.InputTuple,
      SetMigratorEvent.OutputTuple,
      SetMigratorEvent.OutputObject
    >;
    SetMigrator: TypedContractEvent<
      SetMigratorEvent.InputTuple,
      SetMigratorEvent.OutputTuple,
      SetMigratorEvent.OutputObject
    >;

    "SetSuccessor(address)": TypedContractEvent<
      SetSuccessorEvent.InputTuple,
      SetSuccessorEvent.OutputTuple,
      SetSuccessorEvent.OutputObject
    >;
    SetSuccessor: TypedContractEvent<
      SetSuccessorEvent.InputTuple,
      SetSuccessorEvent.OutputTuple,
      SetSuccessorEvent.OutputObject
    >;

    "SetVotingContractStatus(address,uint8)": TypedContractEvent<
      SetVotingContractStatusEvent.InputTuple,
      SetVotingContractStatusEvent.OutputTuple,
      SetVotingContractStatusEvent.OutputObject
    >;
    SetVotingContractStatus: TypedContractEvent<
      SetVotingContractStatusEvent.InputTuple,
      SetVotingContractStatusEvent.OutputTuple,
      SetVotingContractStatusEvent.OutputObject
    >;
  };
}
