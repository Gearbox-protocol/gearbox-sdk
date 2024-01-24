/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IDegenNFTV2Events,
  IDegenNFTV2EventsInterface,
} from "../../IDegenNFTV2.sol/IDegenNFTV2Events";

const _abi = [
  {
    type: "event",
    name: "NewCreditFacadeAdded",
    inputs: [
      {
        name: "",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "NewCreditFacadeRemoved",
    inputs: [
      {
        name: "",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "NewMinterSet",
    inputs: [
      {
        name: "",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
] as const;

export class IDegenNFTV2Events__factory {
  static readonly abi = _abi;
  static createInterface(): IDegenNFTV2EventsInterface {
    return new utils.Interface(_abi) as IDegenNFTV2EventsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDegenNFTV2Events {
    return new Contract(address, _abi, signerOrProvider) as IDegenNFTV2Events;
  }
}
