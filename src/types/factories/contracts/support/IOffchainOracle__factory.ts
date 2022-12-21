/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IOffchainOracle,
  IOffchainOracleInterface,
} from "../../../contracts/support/IOffchainOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "srcToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "dstToken",
        type: "address",
      },
      {
        internalType: "bool",
        name: "useWrappers",
        type: "bool",
      },
    ],
    name: "getRate",
    outputs: [
      {
        internalType: "uint256",
        name: "weightedRate",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "srcToken",
        type: "address",
      },
      {
        internalType: "bool",
        name: "useSrcWrappers",
        type: "bool",
      },
    ],
    name: "getRateToEth",
    outputs: [
      {
        internalType: "uint256",
        name: "weightedRate",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

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
