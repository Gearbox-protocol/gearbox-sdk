/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IDegenNFT,
  IDegenNFTInterface,
} from "../../../../contracts/interfaces/IDegenNFT.sol/IDegenNFT";

const _abi = [
  {
    inputs: [],
    name: "CreditFacadeOrConfiguratorOnlyException",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientBalanceException",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidCreditFacadeException",
    type: "error",
  },
  {
    inputs: [],
    name: "MinterOnlyException",
    type: "error",
  },
  {
    inputs: [],
    name: "baseURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "minter",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
    inputs: [],
    name: "version",
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

export class IDegenNFT__factory {
  static readonly abi = _abi;
  static createInterface(): IDegenNFTInterface {
    return new utils.Interface(_abi) as IDegenNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDegenNFT {
    return new Contract(address, _abi, signerOrProvider) as IDegenNFT;
  }
}
