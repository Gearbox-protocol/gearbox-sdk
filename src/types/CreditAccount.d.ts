/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface CreditAccountInterface extends ethers.utils.Interface {
  functions: {
    "approveToken(address,address)": FunctionFragment;
    "borrowedAmount()": FunctionFragment;
    "creditManager()": FunctionFragment;
    "cumulativeIndexAtOpen()": FunctionFragment;
    "getGenericParameters()": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setGenericParameters(uint256,uint256)": FunctionFragment;
    "since()": FunctionFragment;
    "transfer(address,address,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateBorrowedAmount(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "approveToken",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "borrowedAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "creditManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "cumulativeIndexAtOpen",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getGenericParameters",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setGenericParameters",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "since", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateBorrowedAmount",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "approveToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "borrowedAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creditManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cumulativeIndexAtOpen",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGenericParameters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGenericParameters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "since", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateBorrowedAmount",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class CreditAccount extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: CreditAccountInterface;

  functions: {
    approveToken(
      token: string,
      swapContract: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "approveToken(address,address)"(
      token: string,
      swapContract: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    borrowedAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "borrowedAmount()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    creditManager(overrides?: CallOverrides): Promise<[string]>;

    "creditManager()"(overrides?: CallOverrides): Promise<[string]>;

    cumulativeIndexAtOpen(overrides?: CallOverrides): Promise<[BigNumber]>;

    "cumulativeIndexAtOpen()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    getGenericParameters(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        _borrowedAmount: BigNumber;
        _cumulativeIndexAtOpen: BigNumber;
      }
    >;

    "getGenericParameters()"(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        _borrowedAmount: BigNumber;
        _cumulativeIndexAtOpen: BigNumber;
      }
    >;

    initialize(
      _creditManager: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(address)"(
      _creditManager: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    setGenericParameters(
      _borrowedAmount: BigNumberish,
      _cumulativeIndexAtOpen: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setGenericParameters(uint256,uint256)"(
      _borrowedAmount: BigNumberish,
      _cumulativeIndexAtOpen: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    since(overrides?: CallOverrides): Promise<[BigNumber]>;

    "since()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transfer(address,address,uint256)"(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    updateBorrowedAmount(
      _borrowedAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "updateBorrowedAmount(uint256)"(
      _borrowedAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  approveToken(
    token: string,
    swapContract: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "approveToken(address,address)"(
    token: string,
    swapContract: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  borrowedAmount(overrides?: CallOverrides): Promise<BigNumber>;

  "borrowedAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

  creditManager(overrides?: CallOverrides): Promise<string>;

  "creditManager()"(overrides?: CallOverrides): Promise<string>;

  cumulativeIndexAtOpen(overrides?: CallOverrides): Promise<BigNumber>;

  "cumulativeIndexAtOpen()"(overrides?: CallOverrides): Promise<BigNumber>;

  getGenericParameters(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      _borrowedAmount: BigNumber;
      _cumulativeIndexAtOpen: BigNumber;
    }
  >;

  "getGenericParameters()"(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      _borrowedAmount: BigNumber;
      _cumulativeIndexAtOpen: BigNumber;
    }
  >;

  initialize(
    _creditManager: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(address)"(
    _creditManager: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  setGenericParameters(
    _borrowedAmount: BigNumberish,
    _cumulativeIndexAtOpen: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setGenericParameters(uint256,uint256)"(
    _borrowedAmount: BigNumberish,
    _cumulativeIndexAtOpen: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  since(overrides?: CallOverrides): Promise<BigNumber>;

  "since()"(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    token: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transfer(address,address,uint256)"(
    token: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  updateBorrowedAmount(
    _borrowedAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "updateBorrowedAmount(uint256)"(
    _borrowedAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    approveToken(
      token: string,
      swapContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "approveToken(address,address)"(
      token: string,
      swapContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    borrowedAmount(overrides?: CallOverrides): Promise<BigNumber>;

    "borrowedAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

    creditManager(overrides?: CallOverrides): Promise<string>;

    "creditManager()"(overrides?: CallOverrides): Promise<string>;

    cumulativeIndexAtOpen(overrides?: CallOverrides): Promise<BigNumber>;

    "cumulativeIndexAtOpen()"(overrides?: CallOverrides): Promise<BigNumber>;

    getGenericParameters(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        _borrowedAmount: BigNumber;
        _cumulativeIndexAtOpen: BigNumber;
      }
    >;

    "getGenericParameters()"(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        _borrowedAmount: BigNumber;
        _cumulativeIndexAtOpen: BigNumber;
      }
    >;

    initialize(
      _creditManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(address)"(
      _creditManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    setGenericParameters(
      _borrowedAmount: BigNumberish,
      _cumulativeIndexAtOpen: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setGenericParameters(uint256,uint256)"(
      _borrowedAmount: BigNumberish,
      _cumulativeIndexAtOpen: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    since(overrides?: CallOverrides): Promise<BigNumber>;

    "since()"(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "transfer(address,address,uint256)"(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateBorrowedAmount(
      _borrowedAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateBorrowedAmount(uint256)"(
      _borrowedAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimateGas: {
    approveToken(
      token: string,
      swapContract: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "approveToken(address,address)"(
      token: string,
      swapContract: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    borrowedAmount(overrides?: CallOverrides): Promise<BigNumber>;

    "borrowedAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

    creditManager(overrides?: CallOverrides): Promise<BigNumber>;

    "creditManager()"(overrides?: CallOverrides): Promise<BigNumber>;

    cumulativeIndexAtOpen(overrides?: CallOverrides): Promise<BigNumber>;

    "cumulativeIndexAtOpen()"(overrides?: CallOverrides): Promise<BigNumber>;

    getGenericParameters(overrides?: CallOverrides): Promise<BigNumber>;

    "getGenericParameters()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _creditManager: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize(address)"(
      _creditManager: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    setGenericParameters(
      _borrowedAmount: BigNumberish,
      _cumulativeIndexAtOpen: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setGenericParameters(uint256,uint256)"(
      _borrowedAmount: BigNumberish,
      _cumulativeIndexAtOpen: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    since(overrides?: CallOverrides): Promise<BigNumber>;

    "since()"(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transfer(address,address,uint256)"(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    updateBorrowedAmount(
      _borrowedAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "updateBorrowedAmount(uint256)"(
      _borrowedAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approveToken(
      token: string,
      swapContract: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "approveToken(address,address)"(
      token: string,
      swapContract: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    borrowedAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "borrowedAmount()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    creditManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "creditManager()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cumulativeIndexAtOpen(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "cumulativeIndexAtOpen()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGenericParameters(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getGenericParameters()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _creditManager: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(address)"(
      _creditManager: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    setGenericParameters(
      _borrowedAmount: BigNumberish,
      _cumulativeIndexAtOpen: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setGenericParameters(uint256,uint256)"(
      _borrowedAmount: BigNumberish,
      _cumulativeIndexAtOpen: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    since(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "since()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transfer(address,address,uint256)"(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    updateBorrowedAmount(
      _borrowedAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "updateBorrowedAmount(uint256)"(
      _borrowedAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
