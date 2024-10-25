import { WAD } from "@gearbox-protocol/sdk-gov";

const CVX_MAX_SUPPLY = WAD * 100000000n;
const CVX_REDUCTION_PER_CLIFF = 100000n;
const CVX_TOTAL_CLIFFS = WAD * 1000n;

export function getCVXMintAmount(crvAmount: bigint, cvxTokenSupply: bigint) {
  const currentCliff = cvxTokenSupply / CVX_REDUCTION_PER_CLIFF;

  if (currentCliff < CVX_TOTAL_CLIFFS) {
    const remainingCliffs = CVX_TOTAL_CLIFFS - currentCliff;

    const mintedAmount = (crvAmount * remainingCliffs) / CVX_TOTAL_CLIFFS;
    const amountTillMax = CVX_MAX_SUPPLY - cvxTokenSupply;

    return mintedAmount > amountTillMax ? amountTillMax : mintedAmount;
  }

  return 0n;
}
