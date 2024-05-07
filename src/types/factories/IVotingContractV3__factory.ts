/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IVotingContractV3,
  IVotingContractV3Interface,
} from "../IVotingContractV3";

const _abi = [
  {
    type: "function",
    name: "unvote",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address",
      },
      {
        name: "votes",
        type: "uint96",
        internalType: "uint96",
      },
      {
        name: "extraData",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "vote",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address",
      },
      {
        name: "votes",
        type: "uint96",
        internalType: "uint96",
      },
      {
        name: "extraData",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

export class IVotingContractV3__factory {
  static readonly abi = _abi;
  static createInterface(): IVotingContractV3Interface {
    return new Interface(_abi) as IVotingContractV3Interface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IVotingContractV3 {
    return new Contract(address, _abi, runner) as unknown as IVotingContractV3;
  }
}
