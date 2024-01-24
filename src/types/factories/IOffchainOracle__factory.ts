/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IOffchainOracle,
  IOffchainOracleInterface,
} from "../IOffchainOracle";

const _abi = [
  {
    type: "function",
    name: "getRate",
    inputs: [
      {
        name: "srcToken",
        type: "address",
        internalType: "address",
      },
      {
        name: "dstToken",
        type: "address",
        internalType: "address",
      },
      {
        name: "useWrappers",
        type: "bool",
        internalType: "bool",
      },
    ],
    outputs: [
      {
        name: "weightedRate",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getRateToEth",
    inputs: [
      {
        name: "srcToken",
        type: "address",
        internalType: "address",
      },
      {
        name: "useSrcWrappers",
        type: "bool",
        internalType: "bool",
      },
    ],
    outputs: [
      {
        name: "weightedRate",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
] as const;

export class IOffchainOracle__factory {
  static readonly abi = _abi;
  static createInterface(): IOffchainOracleInterface {
    return new utils.Interface(_abi) as IOffchainOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOffchainOracle {
    return new Contract(address, _abi, signerOrProvider) as IOffchainOracle;
  }
}
