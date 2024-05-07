/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ICurveV1_3AssetsAdapter,
  ICurveV1_3AssetsAdapterInterface,
} from "../ICurveV1_3AssetsAdapter";

const _abi = [
  {
    type: "function",
    name: "_gearboxAdapterType",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "enum AdapterType",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "_gearboxAdapterVersion",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint16",
        internalType: "uint16",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "add_diff_liquidity_one_coin",
    inputs: [
      {
        name: "leftoverAmount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "i",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "rateMinRAY",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "tokensToEnable",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "tokensToDisable",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "add_liquidity",
    inputs: [
      {
        name: "amounts",
        type: "uint256[3]",
        internalType: "uint256[3]",
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "tokensToEnable",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "tokensToDisable",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "add_liquidity_one_coin",
    inputs: [
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "i",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "minAmount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "tokensToEnable",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "tokensToDisable",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "addressProvider",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "calc_add_one_coin",
    inputs: [
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "i",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "creditManager",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "exchange",
    inputs: [
      {
        name: "i",
        type: "int128",
        internalType: "int128",
      },
      {
        name: "j",
        type: "int128",
        internalType: "int128",
      },
      {
        name: "dx",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "min_dy",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "tokensToEnable",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "tokensToDisable",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "exchange",
    inputs: [
      {
        name: "i",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "j",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "dx",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "min_dy",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "tokensToEnable",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "tokensToDisable",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "exchange_diff",
    inputs: [
      {
        name: "i",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "j",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "leftoverAmount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "rateMinRAY",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "tokensToEnable",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "tokensToDisable",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "exchange_diff_underlying",
    inputs: [
      {
        name: "i",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "j",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "leftoverAmount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "rateMinRAY",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "tokensToEnable",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "tokensToDisable",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "exchange_underlying",
    inputs: [
      {
        name: "i",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "j",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "dx",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "min_dy",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "tokensToEnable",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "tokensToDisable",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "exchange_underlying",
    inputs: [
      {
        name: "i",
        type: "int128",
        internalType: "int128",
      },
      {
        name: "j",
        type: "int128",
        internalType: "int128",
      },
      {
        name: "dx",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "min_dy",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "tokensToEnable",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "tokensToDisable",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "lpTokenMask",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "lp_token",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "metapoolBase",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "nCoins",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "remove_diff_liquidity_one_coin",
    inputs: [
      {
        name: "leftoverAmount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "i",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "rateMinRAY",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "tokensToEnable",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "tokensToDisable",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "remove_liquidity",
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "",
        type: "uint256[3]",
        internalType: "uint256[3]",
      },
    ],
    outputs: [
      {
        name: "tokensToEnable",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "tokensToDisable",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "remove_liquidity_imbalance",
    inputs: [
      {
        name: "amounts",
        type: "uint256[3]",
        internalType: "uint256[3]",
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "tokensToEnable",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "tokensToDisable",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "remove_liquidity_one_coin",
    inputs: [
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "i",
        type: "int128",
        internalType: "int128",
      },
      {
        name: "minAmount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "tokensToEnable",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "tokensToDisable",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "remove_liquidity_one_coin",
    inputs: [
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "i",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "minAmount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "tokensToEnable",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "tokensToDisable",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "targetContract",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "token",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "token0",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "token0Mask",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "token1",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "token1Mask",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "token2",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "token2Mask",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "token3",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "token3Mask",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "underlying0",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "underlying0Mask",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "underlying1",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "underlying1Mask",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "underlying2",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "underlying2Mask",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "underlying3",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "underlying3Mask",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "use256",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
] as const;

export class ICurveV1_3AssetsAdapter__factory {
  static readonly abi = _abi;
  static createInterface(): ICurveV1_3AssetsAdapterInterface {
    return new Interface(_abi) as ICurveV1_3AssetsAdapterInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ICurveV1_3AssetsAdapter {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as ICurveV1_3AssetsAdapter;
  }
}
