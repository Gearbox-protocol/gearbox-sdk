/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ILPPriceFeedExceptions,
  ILPPriceFeedExceptionsInterface,
} from "../../ILPPriceFeed.sol/ILPPriceFeedExceptions";

const _abi = [
  {
    inputs: [],
    name: "ExchangeRateOutOfBoundsException",
    type: "error",
  },
  {
    inputs: [],
    name: "ReserveFeedMustNotBeSelfException",
    type: "error",
  },
  {
    inputs: [],
    name: "UpdateBoundsBeforeCooldownException",
    type: "error",
  },
  {
    inputs: [],
    name: "UpdateBoundsNotAllowedException",
    type: "error",
  },
] as const;

export class ILPPriceFeedExceptions__factory {
  static readonly abi = _abi;
  static createInterface(): ILPPriceFeedExceptionsInterface {
    return new utils.Interface(_abi) as ILPPriceFeedExceptionsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ILPPriceFeedExceptions {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ILPPriceFeedExceptions;
  }
}
