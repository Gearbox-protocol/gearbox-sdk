/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IGaugeV3, IGaugeV3Interface } from "../../IGaugeV3.sol/IGaugeV3";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "minRate",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "maxRate",
        type: "uint16",
      },
    ],
    name: "AddQuotaToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "SetFrozenEpoch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "minRate",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "maxRate",
        type: "uint16",
      },
    ],
    name: "SetQuotaTokenParams",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint96",
        name: "votes",
        type: "uint96",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "lpSide",
        type: "bool",
      },
    ],
    name: "Unvote",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "epochNow",
        type: "uint16",
      },
    ],
    name: "UpdateEpoch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint96",
        name: "votes",
        type: "uint96",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "lpSide",
        type: "bool",
      },
    ],
    name: "Vote",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "minRate",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "maxRate",
        type: "uint16",
      },
    ],
    name: "addQuotaToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "maxRate",
        type: "uint16",
      },
    ],
    name: "changeQuotaMaxRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "minRate",
        type: "uint16",
      },
    ],
    name: "changeQuotaMinRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "epochFrozen",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "epochLastUpdate",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
    ],
    name: "getRates",
    outputs: [
      {
        internalType: "uint16[]",
        name: "rates",
        type: "uint16[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "isTokenAdded",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pool",
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
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "quotaRateParams",
    outputs: [
      {
        internalType: "uint16",
        name: "minRate",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "maxRate",
        type: "uint16",
      },
      {
        internalType: "uint96",
        name: "totalVotesLpSide",
        type: "uint96",
      },
      {
        internalType: "uint96",
        name: "totalVotesCaSide",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "setFrozenEpoch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "votes",
        type: "uint96",
      },
      {
        internalType: "bytes",
        name: "extraData",
        type: "bytes",
      },
    ],
    name: "unvote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updateEpoch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "userTokenVotes",
    outputs: [
      {
        internalType: "uint96",
        name: "votesLpSide",
        type: "uint96",
      },
      {
        internalType: "uint96",
        name: "votesCaSide",
        type: "uint96",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "votes",
        type: "uint96",
      },
      {
        internalType: "bytes",
        name: "extraData",
        type: "bytes",
      },
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "voter",
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
] as const;

export class IGaugeV3__factory {
  static readonly abi = _abi;
  static createInterface(): IGaugeV3Interface {
    return new utils.Interface(_abi) as IGaugeV3Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IGaugeV3 {
    return new Contract(address, _abi, signerOrProvider) as IGaugeV3;
  }
}
