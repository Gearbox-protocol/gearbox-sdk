/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IDegenNFTV2Exceptions,
  IDegenNFTV2ExceptionsInterface,
} from "../../IDegenNFTV2.sol/IDegenNFTV2Exceptions";

const _abi = [
  {
    type: "error",
    name: "CreditFacadeOrConfiguratorOnlyException",
    inputs: [],
  },
  {
    type: "error",
    name: "InsufficientBalanceException",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidCreditFacadeException",
    inputs: [],
  },
  {
    type: "error",
    name: "MinterOnlyException",
    inputs: [],
  },
] as const;

export class IDegenNFTV2Exceptions__factory {
  static readonly abi = _abi;
  static createInterface(): IDegenNFTV2ExceptionsInterface {
    return new utils.Interface(_abi) as IDegenNFTV2ExceptionsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDegenNFTV2Exceptions {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IDegenNFTV2Exceptions;
  }
}
