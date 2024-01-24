/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IBalancerV2VaultGetters,
  IBalancerV2VaultGettersInterface,
} from "../../IBalancerV2Vault.sol/IBalancerV2VaultGetters";

const _abi = [
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
] as const;

export class IBalancerV2VaultGetters__factory {
  static readonly abi = _abi;
  static createInterface(): IBalancerV2VaultGettersInterface {
    return new utils.Interface(_abi) as IBalancerV2VaultGettersInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBalancerV2VaultGetters {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IBalancerV2VaultGetters;
  }
}
