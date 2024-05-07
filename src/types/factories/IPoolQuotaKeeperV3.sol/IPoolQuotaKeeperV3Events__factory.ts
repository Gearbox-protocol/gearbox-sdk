/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IPoolQuotaKeeperV3Events,
  IPoolQuotaKeeperV3EventsInterface,
} from "../../IPoolQuotaKeeperV3.sol/IPoolQuotaKeeperV3Events";

const _abi = [
  {
    type: "event",
    name: "AddCreditManager",
    inputs: [
      {
        name: "creditManager",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "AddQuotaToken",
    inputs: [
      {
        name: "token",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "SetGauge",
    inputs: [
      {
        name: "newGauge",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "SetQuotaIncreaseFee",
    inputs: [
      {
        name: "token",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "fee",
        type: "uint16",
        indexed: false,
        internalType: "uint16",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "SetTokenLimit",
    inputs: [
      {
        name: "token",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "limit",
        type: "uint96",
        indexed: false,
        internalType: "uint96",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "UpdateQuota",
    inputs: [
      {
        name: "creditAccount",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "token",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "quotaChange",
        type: "int96",
        indexed: false,
        internalType: "int96",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "UpdateTokenQuotaRate",
    inputs: [
      {
        name: "token",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "rate",
        type: "uint16",
        indexed: false,
        internalType: "uint16",
      },
    ],
    anonymous: false,
  },
] as const;

export class IPoolQuotaKeeperV3Events__factory {
  static readonly abi = _abi;
  static createInterface(): IPoolQuotaKeeperV3EventsInterface {
    return new Interface(_abi) as IPoolQuotaKeeperV3EventsInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IPoolQuotaKeeperV3Events {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IPoolQuotaKeeperV3Events;
  }
}
