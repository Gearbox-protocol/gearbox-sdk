/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IPriceOracleV2Exceptions,
  IPriceOracleV2ExceptionsInterface,
} from "../../IPriceOracle.sol/IPriceOracleV2Exceptions";

const _abi = [
  {
    type: "error",
    name: "ChainPriceStaleException",
    inputs: [],
  },
  {
    type: "error",
    name: "PriceOracleNotExistsException",
    inputs: [],
  },
  {
    type: "error",
    name: "ZeroPriceException",
    inputs: [],
  },
] as const;

export class IPriceOracleV2Exceptions__factory {
  static readonly abi = _abi;
  static createInterface(): IPriceOracleV2ExceptionsInterface {
    return new utils.Interface(_abi) as IPriceOracleV2ExceptionsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPriceOracleV2Exceptions {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IPriceOracleV2Exceptions;
  }
}
