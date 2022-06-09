/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IUniswapV3SwapCallback,
  IUniswapV3SwapCallbackInterface,
} from "../../../../contracts/integrations/uniswap/IUniswapV3SwapCallback";

const _abi = [
  {
    inputs: [
      {
        internalType: "int256",
        name: "amount0Delta",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "amount1Delta",
        type: "int256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "uniswapV3SwapCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IUniswapV3SwapCallback__factory {
  static readonly abi = _abi;
  static createInterface(): IUniswapV3SwapCallbackInterface {
    return new utils.Interface(_abi) as IUniswapV3SwapCallbackInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUniswapV3SwapCallback {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IUniswapV3SwapCallback;
  }
}
