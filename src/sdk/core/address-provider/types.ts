import type { Address } from "viem";

import type { IBaseContract } from "../../base";
import type { AddressProviderV3StateHuman } from "../../types";

export interface IAddressProviderContract extends IBaseContract {
  getAddress: (contract: string, version?: number) => Address;
  getLatestVersion: (contract: string) => Address;
  syncState: (blockNumber: bigint) => Promise<void>;
  stateHuman: (raw?: boolean) => AddressProviderV3StateHuman;
}
