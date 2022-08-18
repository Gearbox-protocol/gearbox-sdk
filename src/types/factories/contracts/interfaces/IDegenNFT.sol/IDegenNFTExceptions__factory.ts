/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IDegenNFTExceptions,
  IDegenNFTExceptionsInterface,
} from "../../../../contracts/interfaces/IDegenNFT.sol/IDegenNFTExceptions";

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
];

export class IDegenNFTExceptions__factory {
  static readonly abi = _abi;
  static createInterface(): IDegenNFTExceptionsInterface {
    return new utils.Interface(_abi) as IDegenNFTExceptionsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDegenNFTExceptions {
    return new Contract(address, _abi, signerOrProvider) as IDegenNFTExceptions;
  }
}
