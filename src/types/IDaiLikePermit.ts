//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IDaiLikePermit
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iDaiLikePermitAbi = [
  {
    type: "function",
    inputs: [
      { name: "holder", internalType: "address", type: "address" },
      { name: "spender", internalType: "address", type: "address" },
      { name: "nonce", internalType: "uint256", type: "uint256" },
      { name: "expiry", internalType: "uint256", type: "uint256" },
      { name: "allowed", internalType: "bool", type: "bool" },
      { name: "v", internalType: "uint8", type: "uint8" },
      { name: "r", internalType: "bytes32", type: "bytes32" },
      { name: "s", internalType: "bytes32", type: "bytes32" },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const

