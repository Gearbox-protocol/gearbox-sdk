/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IClosePathResolver,
  IClosePathResolverInterface,
} from "../../../../contracts/pathfinder/interfaces/IClosePathResolver";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "creditAccount",
            type: "address",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "balance",
                type: "uint256",
              },
            ],
            internalType: "struct Balance[]",
            name: "balances",
            type: "tuple[]",
          },
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "connectors",
            type: "address[]",
          },
          {
            internalType: "address[]",
            name: "adapters",
            type: "address[]",
          },
          {
            internalType: "uint256",
            name: "slippage",
            type: "uint256",
          },
          {
            internalType: "enum TokenType",
            name: "targetType",
            type: "uint8",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "address[]",
                name: "adapters",
                type: "address[]",
              },
            ],
            internalType: "struct TokenAdapters[]",
            name: "foundAdapters",
            type: "tuple[]",
          },
          {
            internalType: "uint256",
            name: "gasPriceTargetRAY",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gasUsage",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "initTargetBalance",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "target",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "callData",
                type: "bytes",
              },
            ],
            internalType: "struct MultiCall[]",
            name: "calls",
            type: "tuple[]",
          },
        ],
        internalType: "struct StrategyPathTask",
        name: "task",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "uint8",
            name: "option",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "totalOptions",
            type: "uint8",
          },
        ],
        internalType: "struct PathOption[]",
        name: "pathOptions",
        type: "tuple[]",
      },
      {
        internalType: "uint256",
        name: "cycles",
        type: "uint256",
      },
    ],
    name: "findBestClosePath",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "creditAccount",
            type: "address",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "balance",
                type: "uint256",
              },
            ],
            internalType: "struct Balance[]",
            name: "balances",
            type: "tuple[]",
          },
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "connectors",
            type: "address[]",
          },
          {
            internalType: "address[]",
            name: "adapters",
            type: "address[]",
          },
          {
            internalType: "uint256",
            name: "slippage",
            type: "uint256",
          },
          {
            internalType: "enum TokenType",
            name: "targetType",
            type: "uint8",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "address[]",
                name: "adapters",
                type: "address[]",
              },
            ],
            internalType: "struct TokenAdapters[]",
            name: "foundAdapters",
            type: "tuple[]",
          },
          {
            internalType: "uint256",
            name: "gasPriceTargetRAY",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gasUsage",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "initTargetBalance",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "target",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "callData",
                type: "bytes",
              },
            ],
            internalType: "struct MultiCall[]",
            name: "calls",
            type: "tuple[]",
          },
        ],
        internalType: "struct StrategyPathTask",
        name: "result",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IClosePathResolver__factory {
  static readonly abi = _abi;
  static createInterface(): IClosePathResolverInterface {
    return new utils.Interface(_abi) as IClosePathResolverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IClosePathResolver {
    return new Contract(address, _abi, signerOrProvider) as IClosePathResolver;
  }
}
