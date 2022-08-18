/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IAccountFactoryEvents,
  IAccountFactoryEventsInterface,
} from "../../../../contracts/interfaces/IAccountFactory.sol/IAccountFactoryEvents";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "miner",
        type: "address",
      },
    ],
    name: "AccountMinerChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "creditManager",
        type: "address",
      },
    ],
    name: "InitializeCreditAccount",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "NewCreditAccount",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "ReturnCreditAccount",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "creditAccount",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "TakeForever",
    type: "event",
  },
];

export class IAccountFactoryEvents__factory {
  static readonly abi = _abi;
  static createInterface(): IAccountFactoryEventsInterface {
    return new utils.Interface(_abi) as IAccountFactoryEventsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAccountFactoryEvents {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IAccountFactoryEvents;
  }
}
