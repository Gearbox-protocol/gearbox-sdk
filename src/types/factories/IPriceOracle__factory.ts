/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IPriceOracle } from "../IPriceOracle";

export class IPriceOracle__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPriceOracle {
    return new Contract(address, _abi, signerOrProvider) as IPriceOracle;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "priceFeedToken",
        type: "address",
      },
    ],
    name: "addPriceFeed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "tokenFrom",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenTo",
        type: "address",
      },
    ],
    name: "convert",
    outputs: [
      {
        internalType: "uint256",
        name: "",
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
        name: "tokenFrom",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenTo",
        type: "address",
      },
    ],
    name: "getLastPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
