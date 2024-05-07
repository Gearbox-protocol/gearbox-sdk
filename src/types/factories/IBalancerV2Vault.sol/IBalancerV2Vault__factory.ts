/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IBalancerV2Vault,
  IBalancerV2VaultInterface,
} from "../../IBalancerV2Vault.sol/IBalancerV2Vault";

const _abi = [
  {
    type: "function",
    name: "batchSwap",
    inputs: [
      {
        name: "kind",
        type: "uint8",
        internalType: "enum SwapKind",
      },
      {
        name: "swaps",
        type: "tuple[]",
        internalType: "struct BatchSwapStep[]",
        components: [
          {
            name: "poolId",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "assetInIndex",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "assetOutIndex",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "userData",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
      {
        name: "assets",
        type: "address[]",
        internalType: "contract IAsset[]",
      },
      {
        name: "funds",
        type: "tuple",
        internalType: "struct FundManagement",
        components: [
          {
            name: "sender",
            type: "address",
            internalType: "address",
          },
          {
            name: "fromInternalBalance",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "recipient",
            type: "address",
            internalType: "address payable",
          },
          {
            name: "toInternalBalance",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
      {
        name: "limits",
        type: "int256[]",
        internalType: "int256[]",
      },
      {
        name: "deadline",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "assetDeltas",
        type: "int256[]",
        internalType: "int256[]",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "exitPool",
    inputs: [
      {
        name: "poolId",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "sender",
        type: "address",
        internalType: "address",
      },
      {
        name: "recipient",
        type: "address",
        internalType: "address payable",
      },
      {
        name: "request",
        type: "tuple",
        internalType: "struct ExitPoolRequest",
        components: [
          {
            name: "assets",
            type: "address[]",
            internalType: "contract IAsset[]",
          },
          {
            name: "minAmountsOut",
            type: "uint256[]",
            internalType: "uint256[]",
          },
          {
            name: "userData",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "toInternalBalance",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getPool",
    inputs: [
      {
        name: "poolId",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
      {
        name: "",
        type: "uint8",
        internalType: "enum PoolSpecialization",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPoolTokenInfo",
    inputs: [
      {
        name: "poolId",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "token",
        type: "address",
        internalType: "contract IERC20",
      },
    ],
    outputs: [
      {
        name: "cash",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "managed",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "lastChangeBlock",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "assetManager",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPoolTokens",
    inputs: [
      {
        name: "poolId",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        name: "tokens",
        type: "address[]",
        internalType: "contract IERC20[]",
      },
      {
        name: "balances",
        type: "uint256[]",
        internalType: "uint256[]",
      },
      {
        name: "lastChangeBlock",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "joinPool",
    inputs: [
      {
        name: "poolId",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "sender",
        type: "address",
        internalType: "address",
      },
      {
        name: "recipient",
        type: "address",
        internalType: "address",
      },
      {
        name: "request",
        type: "tuple",
        internalType: "struct JoinPoolRequest",
        components: [
          {
            name: "assets",
            type: "address[]",
            internalType: "contract IAsset[]",
          },
          {
            name: "maxAmountsIn",
            type: "uint256[]",
            internalType: "uint256[]",
          },
          {
            name: "userData",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "fromInternalBalance",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "queryBatchSwap",
    inputs: [
      {
        name: "kind",
        type: "uint8",
        internalType: "enum SwapKind",
      },
      {
        name: "swaps",
        type: "tuple[]",
        internalType: "struct BatchSwapStep[]",
        components: [
          {
            name: "poolId",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "assetInIndex",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "assetOutIndex",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "userData",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
      {
        name: "assets",
        type: "address[]",
        internalType: "contract IAsset[]",
      },
      {
        name: "funds",
        type: "tuple",
        internalType: "struct FundManagement",
        components: [
          {
            name: "sender",
            type: "address",
            internalType: "address",
          },
          {
            name: "fromInternalBalance",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "recipient",
            type: "address",
            internalType: "address payable",
          },
          {
            name: "toInternalBalance",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
    ],
    outputs: [
      {
        name: "assetDeltas",
        type: "int256[]",
        internalType: "int256[]",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "swap",
    inputs: [
      {
        name: "singleSwap",
        type: "tuple",
        internalType: "struct SingleSwap",
        components: [
          {
            name: "poolId",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "kind",
            type: "uint8",
            internalType: "enum SwapKind",
          },
          {
            name: "assetIn",
            type: "address",
            internalType: "contract IAsset",
          },
          {
            name: "assetOut",
            type: "address",
            internalType: "contract IAsset",
          },
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "userData",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
      {
        name: "funds",
        type: "tuple",
        internalType: "struct FundManagement",
        components: [
          {
            name: "sender",
            type: "address",
            internalType: "address",
          },
          {
            name: "fromInternalBalance",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "recipient",
            type: "address",
            internalType: "address payable",
          },
          {
            name: "toInternalBalance",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
      {
        name: "limit",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "deadline",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "amountCalculated",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
] as const;

export class IBalancerV2Vault__factory {
  static readonly abi = _abi;
  static createInterface(): IBalancerV2VaultInterface {
    return new Interface(_abi) as IBalancerV2VaultInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IBalancerV2Vault {
    return new Contract(address, _abi, runner) as unknown as IBalancerV2Vault;
  }
}
