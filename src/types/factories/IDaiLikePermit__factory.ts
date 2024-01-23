/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IDaiLikePermit,
  IDaiLikePermitInterface,
} from "../IDaiLikePermit";

const _abi = [
  {
    type: "function",
    name: "permit",
    inputs: [
      {
        name: "holder",
        type: "address",
        internalType: "address",
      },
      {
        name: "spender",
        type: "address",
        internalType: "address",
      },
      {
        name: "nonce",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "expiry",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "allowed",
        type: "bool",
        internalType: "bool",
      },
      {
        name: "v",
        type: "uint8",
        internalType: "uint8",
      },
      {
        name: "r",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "s",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

export class IDaiLikePermit__factory {
  static readonly abi = _abi;
  static createInterface(): IDaiLikePermitInterface {
    return new utils.Interface(_abi) as IDaiLikePermitInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDaiLikePermit {
    return new Contract(address, _abi, signerOrProvider) as IDaiLikePermit;
  }
}
