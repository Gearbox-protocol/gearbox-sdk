/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IAddressProviderV3,
  IAddressProviderV3Interface,
} from "../../IAddressProviderV3.sol/IAddressProviderV3";

const _abi = [
  {
    type: "function",
    name: "addresses",
    inputs: [
      {
        name: "key",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_version",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getAddressOrRevert",
    inputs: [
      {
        name: "key",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_version",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "result",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "setAddress",
    inputs: [
      {
        name: "key",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "value",
        type: "address",
        internalType: "address",
      },
      {
        name: "saveVersion",
        type: "bool",
        internalType: "bool",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "version",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "SetAddress",
    inputs: [
      {
        name: "key",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "value",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "version",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
] as const;

export class IAddressProviderV3__factory {
  static readonly abi = _abi;
  static createInterface(): IAddressProviderV3Interface {
    return new Interface(_abi) as IAddressProviderV3Interface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IAddressProviderV3 {
    return new Contract(address, _abi, runner) as unknown as IAddressProviderV3;
  }
}
