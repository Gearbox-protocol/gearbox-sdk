//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ICompoundV2_Exceptions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iCompoundV2ExceptionsAbi = [
  {
    type: "error",
    inputs: [{ name: "errorCode", internalType: "uint256", type: "uint256" }],
    name: "CTokenError",
  },
] as const

