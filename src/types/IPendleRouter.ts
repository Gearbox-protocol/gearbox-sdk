//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IPendleRouter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iPendleRouterAbi = [
  {
    type: "function",
    inputs: [
      { name: "receiver", internalType: "address", type: "address" },
      { name: "YT", internalType: "address", type: "address" },
      { name: "netPyIn", internalType: "uint256", type: "uint256" },
      {
        name: "output",
        internalType: "struct TokenOutput",
        type: "tuple",
        components: [
          { name: "tokenOut", internalType: "address", type: "address" },
          { name: "minTokenOut", internalType: "uint256", type: "uint256" },
          { name: "tokenRedeemSy", internalType: "address", type: "address" },
          { name: "pendleSwap", internalType: "address", type: "address" },
          {
            name: "swapData",
            internalType: "struct SwapData",
            type: "tuple",
            components: [
              {
                name: "swapType",
                internalType: "enum SwapType",
                type: "uint8",
              },
              { name: "extRouter", internalType: "address", type: "address" },
              { name: "extCalldata", internalType: "bytes", type: "bytes" },
              { name: "needScale", internalType: "bool", type: "bool" },
            ],
          },
        ],
      },
    ],
    name: "redeemPyToToken",
    outputs: [
      { name: "netTokenOut", internalType: "uint256", type: "uint256" },
      { name: "netSyInterm", internalType: "uint256", type: "uint256" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "receiver", internalType: "address", type: "address" },
      { name: "market", internalType: "address", type: "address" },
      { name: "exactPtIn", internalType: "uint256", type: "uint256" },
      {
        name: "output",
        internalType: "struct TokenOutput",
        type: "tuple",
        components: [
          { name: "tokenOut", internalType: "address", type: "address" },
          { name: "minTokenOut", internalType: "uint256", type: "uint256" },
          { name: "tokenRedeemSy", internalType: "address", type: "address" },
          { name: "pendleSwap", internalType: "address", type: "address" },
          {
            name: "swapData",
            internalType: "struct SwapData",
            type: "tuple",
            components: [
              {
                name: "swapType",
                internalType: "enum SwapType",
                type: "uint8",
              },
              { name: "extRouter", internalType: "address", type: "address" },
              { name: "extCalldata", internalType: "bytes", type: "bytes" },
              { name: "needScale", internalType: "bool", type: "bool" },
            ],
          },
        ],
      },
      {
        name: "limit",
        internalType: "struct LimitOrderData",
        type: "tuple",
        components: [
          { name: "limitRouter", internalType: "address", type: "address" },
          { name: "epsSkipMarket", internalType: "uint256", type: "uint256" },
          {
            name: "normalFills",
            internalType: "struct FillOrderParams[]",
            type: "tuple[]",
            components: [
              {
                name: "order",
                internalType: "struct Order",
                type: "tuple",
                components: [
                  { name: "salt", internalType: "uint256", type: "uint256" },
                  { name: "expiry", internalType: "uint256", type: "uint256" },
                  { name: "nonce", internalType: "uint256", type: "uint256" },
                  {
                    name: "orderType",
                    internalType: "enum OrderType",
                    type: "uint8",
                  },
                  { name: "token", internalType: "address", type: "address" },
                  { name: "YT", internalType: "address", type: "address" },
                  { name: "maker", internalType: "address", type: "address" },
                  {
                    name: "receiver",
                    internalType: "address",
                    type: "address",
                  },
                  {
                    name: "makingAmount",
                    internalType: "uint256",
                    type: "uint256",
                  },
                  {
                    name: "lnImpliedRate",
                    internalType: "uint256",
                    type: "uint256",
                  },
                  {
                    name: "failSafeRate",
                    internalType: "uint256",
                    type: "uint256",
                  },
                  { name: "permit", internalType: "bytes", type: "bytes" },
                ],
              },
              { name: "signature", internalType: "bytes", type: "bytes" },
              {
                name: "makingAmount",
                internalType: "uint256",
                type: "uint256",
              },
            ],
          },
          {
            name: "flashFills",
            internalType: "struct FillOrderParams[]",
            type: "tuple[]",
            components: [
              {
                name: "order",
                internalType: "struct Order",
                type: "tuple",
                components: [
                  { name: "salt", internalType: "uint256", type: "uint256" },
                  { name: "expiry", internalType: "uint256", type: "uint256" },
                  { name: "nonce", internalType: "uint256", type: "uint256" },
                  {
                    name: "orderType",
                    internalType: "enum OrderType",
                    type: "uint8",
                  },
                  { name: "token", internalType: "address", type: "address" },
                  { name: "YT", internalType: "address", type: "address" },
                  { name: "maker", internalType: "address", type: "address" },
                  {
                    name: "receiver",
                    internalType: "address",
                    type: "address",
                  },
                  {
                    name: "makingAmount",
                    internalType: "uint256",
                    type: "uint256",
                  },
                  {
                    name: "lnImpliedRate",
                    internalType: "uint256",
                    type: "uint256",
                  },
                  {
                    name: "failSafeRate",
                    internalType: "uint256",
                    type: "uint256",
                  },
                  { name: "permit", internalType: "bytes", type: "bytes" },
                ],
              },
              { name: "signature", internalType: "bytes", type: "bytes" },
              {
                name: "makingAmount",
                internalType: "uint256",
                type: "uint256",
              },
            ],
          },
          { name: "optData", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "swapExactPtForToken",
    outputs: [
      { name: "netTokenOut", internalType: "uint256", type: "uint256" },
      { name: "netSyFee", internalType: "uint256", type: "uint256" },
      { name: "netSyInterm", internalType: "uint256", type: "uint256" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "receiver", internalType: "address", type: "address" },
      { name: "market", internalType: "address", type: "address" },
      { name: "minPtOut", internalType: "uint256", type: "uint256" },
      {
        name: "guessPtOut",
        internalType: "struct ApproxParams",
        type: "tuple",
        components: [
          { name: "guessMin", internalType: "uint256", type: "uint256" },
          { name: "guessMax", internalType: "uint256", type: "uint256" },
          { name: "guessOffchain", internalType: "uint256", type: "uint256" },
          { name: "maxIteration", internalType: "uint256", type: "uint256" },
          { name: "eps", internalType: "uint256", type: "uint256" },
        ],
      },
      {
        name: "input",
        internalType: "struct TokenInput",
        type: "tuple",
        components: [
          { name: "tokenIn", internalType: "address", type: "address" },
          { name: "netTokenIn", internalType: "uint256", type: "uint256" },
          { name: "tokenMintSy", internalType: "address", type: "address" },
          { name: "pendleSwap", internalType: "address", type: "address" },
          {
            name: "swapData",
            internalType: "struct SwapData",
            type: "tuple",
            components: [
              {
                name: "swapType",
                internalType: "enum SwapType",
                type: "uint8",
              },
              { name: "extRouter", internalType: "address", type: "address" },
              { name: "extCalldata", internalType: "bytes", type: "bytes" },
              { name: "needScale", internalType: "bool", type: "bool" },
            ],
          },
        ],
      },
      {
        name: "limit",
        internalType: "struct LimitOrderData",
        type: "tuple",
        components: [
          { name: "limitRouter", internalType: "address", type: "address" },
          { name: "epsSkipMarket", internalType: "uint256", type: "uint256" },
          {
            name: "normalFills",
            internalType: "struct FillOrderParams[]",
            type: "tuple[]",
            components: [
              {
                name: "order",
                internalType: "struct Order",
                type: "tuple",
                components: [
                  { name: "salt", internalType: "uint256", type: "uint256" },
                  { name: "expiry", internalType: "uint256", type: "uint256" },
                  { name: "nonce", internalType: "uint256", type: "uint256" },
                  {
                    name: "orderType",
                    internalType: "enum OrderType",
                    type: "uint8",
                  },
                  { name: "token", internalType: "address", type: "address" },
                  { name: "YT", internalType: "address", type: "address" },
                  { name: "maker", internalType: "address", type: "address" },
                  {
                    name: "receiver",
                    internalType: "address",
                    type: "address",
                  },
                  {
                    name: "makingAmount",
                    internalType: "uint256",
                    type: "uint256",
                  },
                  {
                    name: "lnImpliedRate",
                    internalType: "uint256",
                    type: "uint256",
                  },
                  {
                    name: "failSafeRate",
                    internalType: "uint256",
                    type: "uint256",
                  },
                  { name: "permit", internalType: "bytes", type: "bytes" },
                ],
              },
              { name: "signature", internalType: "bytes", type: "bytes" },
              {
                name: "makingAmount",
                internalType: "uint256",
                type: "uint256",
              },
            ],
          },
          {
            name: "flashFills",
            internalType: "struct FillOrderParams[]",
            type: "tuple[]",
            components: [
              {
                name: "order",
                internalType: "struct Order",
                type: "tuple",
                components: [
                  { name: "salt", internalType: "uint256", type: "uint256" },
                  { name: "expiry", internalType: "uint256", type: "uint256" },
                  { name: "nonce", internalType: "uint256", type: "uint256" },
                  {
                    name: "orderType",
                    internalType: "enum OrderType",
                    type: "uint8",
                  },
                  { name: "token", internalType: "address", type: "address" },
                  { name: "YT", internalType: "address", type: "address" },
                  { name: "maker", internalType: "address", type: "address" },
                  {
                    name: "receiver",
                    internalType: "address",
                    type: "address",
                  },
                  {
                    name: "makingAmount",
                    internalType: "uint256",
                    type: "uint256",
                  },
                  {
                    name: "lnImpliedRate",
                    internalType: "uint256",
                    type: "uint256",
                  },
                  {
                    name: "failSafeRate",
                    internalType: "uint256",
                    type: "uint256",
                  },
                  { name: "permit", internalType: "bytes", type: "bytes" },
                ],
              },
              { name: "signature", internalType: "bytes", type: "bytes" },
              {
                name: "makingAmount",
                internalType: "uint256",
                type: "uint256",
              },
            ],
          },
          { name: "optData", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "swapExactTokenForPt",
    outputs: [
      { name: "netPtOut", internalType: "uint256", type: "uint256" },
      { name: "netSyFee", internalType: "uint256", type: "uint256" },
      { name: "netSyInterm", internalType: "uint256", type: "uint256" },
    ],
    stateMutability: "payable",
  },
] as const

