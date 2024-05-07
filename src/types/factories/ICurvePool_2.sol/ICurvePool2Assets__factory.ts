/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ICurvePool2Assets,
  ICurvePool2AssetsInterface,
} from "../../ICurvePool_2.sol/ICurvePool2Assets";

const _abi = [
  {
    type: "function",
    name: "A",
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
    name: "A_precise",
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
    name: "add_liquidity",
    inputs: [
      {
        name: "amounts",
        type: "uint256[2]",
        internalType: "uint256[2]",
      },
      {
        name: "min_mint_amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "admin",
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
    name: "admin_balances",
    inputs: [
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
    name: "admin_fee",
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
    name: "allowance",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
      {
        name: "",
        type: "address",
        internalType: "address",
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
    name: "balanceOf",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
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
    name: "balances",
    inputs: [
      {
        name: "",
        type: "int128",
        internalType: "int128",
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
    name: "balances",
    inputs: [
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
    name: "block_timestamp_last",
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
    name: "calc_token_amount",
    inputs: [
      {
        name: "_amounts",
        type: "uint256[2]",
        internalType: "uint256[2]",
      },
      {
        name: "_is_deposit",
        type: "bool",
        internalType: "bool",
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
    name: "calc_withdraw_one_coin",
    inputs: [
      {
        name: "_burn_amount",
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
    name: "calc_withdraw_one_coin",
    inputs: [
      {
        name: "_burn_amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "i",
        type: "int128",
        internalType: "int128",
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
    name: "coins",
    inputs: [
      {
        name: "",
        type: "int128",
        internalType: "int128",
      },
    ],
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
    name: "coins",
    inputs: [
      {
        name: "i",
        type: "uint256",
        internalType: "uint256",
      },
    ],
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
    name: "decimals",
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
    outputs: [],
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
    outputs: [],
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
    outputs: [],
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
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "fee",
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
    name: "future_A",
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
    name: "future_A_time",
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
    name: "get_balances",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256[2]",
        internalType: "uint256[2]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "get_dy",
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
    name: "get_dy",
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
    name: "get_dy_underlying",
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
    name: "get_dy_underlying",
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
    name: "get_previous_balances",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256[2]",
        internalType: "uint256[2]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "get_price_cumulative_last",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256[2]",
        internalType: "uint256[2]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "get_twap_balances",
    inputs: [
      {
        name: "_first_balances",
        type: "uint256[2]",
        internalType: "uint256[2]",
      },
      {
        name: "_last_balances",
        type: "uint256[2]",
        internalType: "uint256[2]",
      },
      {
        name: "_time_elapsed",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256[2]",
        internalType: "uint256[2]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "get_virtual_price",
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
    name: "initial_A",
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
    name: "initial_A_time",
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
    name: "mid_fee",
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
    name: "name",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "remove_liquidity",
    inputs: [
      {
        name: "_amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "min_amounts",
        type: "uint256[2]",
        internalType: "uint256[2]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "remove_liquidity_imbalance",
    inputs: [
      {
        name: "amounts",
        type: "uint256[2]",
        internalType: "uint256[2]",
      },
      {
        name: "max_burn_amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "remove_liquidity_one_coin",
    inputs: [
      {
        name: "_token_amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "i",
        type: "int128",
        internalType: "int128",
      },
      {
        name: "min_amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "remove_liquidity_one_coin",
    inputs: [
      {
        name: "_token_amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "i",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "min_amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "symbol",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
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
    name: "totalSupply",
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
    name: "underlying_coins",
    inputs: [
      {
        name: "",
        type: "int128",
        internalType: "int128",
      },
    ],
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
    name: "underlying_coins",
    inputs: [
      {
        name: "i",
        type: "uint256",
        internalType: "uint256",
      },
    ],
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
    name: "virtual_price",
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
] as const;

export class ICurvePool2Assets__factory {
  static readonly abi = _abi;
  static createInterface(): ICurvePool2AssetsInterface {
    return new Interface(_abi) as ICurvePool2AssetsInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ICurvePool2Assets {
    return new Contract(address, _abi, runner) as unknown as ICurvePool2Assets;
  }
}
