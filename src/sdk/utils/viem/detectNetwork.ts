import type { Address, PublicClient } from "viem";

import { ierc20MetadataAbi } from "../../abi";
import { type NetworkType, SUPPORTED_CHAINS } from "../../chain";
import { USDC } from "../../constants";

const WELL_KNOWN_TOKENS: Record<NetworkType, Address> = {
  ...USDC,
  Sonic: "0x29219dd400f2Bf60E5a23d13Be72B486D4038894", // USDC_e
};

export async function detectNetwork(
  client: PublicClient,
): Promise<NetworkType> {
  for (const chain of SUPPORTED_CHAINS) {
    try {
      await client.readContract({
        abi: ierc20MetadataAbi,
        address: WELL_KNOWN_TOKENS[chain],
        functionName: "symbol",
      });
      return chain;
    } catch {}
  }

  throw new Error("Unsupported network");
}
