/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IBalancerV2VaultAdapterEvents,
  IBalancerV2VaultAdapterEventsInterface,
} from "../../IBalancerV2VaultAdapter.sol/IBalancerV2VaultAdapterEvents";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "poolId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "enum PoolStatus",
        name: "newStatus",
        type: "uint8",
      },
    ],
    name: "SetPoolStatus",
    type: "event",
  },
] as const;

export class IBalancerV2VaultAdapterEvents__factory {
  static readonly abi = _abi;
  static createInterface(): IBalancerV2VaultAdapterEventsInterface {
    return new utils.Interface(_abi) as IBalancerV2VaultAdapterEventsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBalancerV2VaultAdapterEvents {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IBalancerV2VaultAdapterEvents;
  }
}
