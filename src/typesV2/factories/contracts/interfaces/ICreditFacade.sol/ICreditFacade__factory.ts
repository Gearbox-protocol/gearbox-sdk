/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ICreditFacade,
  ICreditFacadeInterface,
} from "../../../../contracts/interfaces/ICreditFacade.sol/ICreditFacade";

const _abi = [
  {
    inputs: [],
    name: "AccountTransferNotAllowedException",
    type: "error",
  },
  {
    inputs: [],
    name: "AdaptersOrCreditFacadeOnlyException",
    type: "error",
  },
  {
    inputs: [],
    name: "AllowanceFailedExpcetion",
    type: "error",
  },
  {
    inputs: [],
    name: "BorrowAmountOutOfLimitsException",
    type: "error",
  },
  {
    inputs: [],
    name: "BorrowedBlockLimitException",
    type: "error",
  },
  {
    inputs: [],
    name: "CantLiquidateWithSuchHealthFactorException",
    type: "error",
  },
  {
    inputs: [],
    name: "CantTransferLiquidatableAccountException",
    type: "error",
  },
  {
    inputs: [],
    name: "CreditConfiguratorOnlyException",
    type: "error",
  },
  {
    inputs: [],
    name: "CreditFacadeOnlyException",
    type: "error",
  },
  {
    inputs: [],
    name: "ForbiddenDuringClosureException",
    type: "error",
  },
  {
    inputs: [],
    name: "HasNoOpenedAccountException",
    type: "error",
  },
  {
    inputs: [],
    name: "IncorrectCallDataException",
    type: "error",
  },
  {
    inputs: [],
    name: "IncreaseAndDecreaseForbiddenInOneCallException",
    type: "error",
  },
  {
    inputs: [],
    name: "IncreaseDebtForbiddenException",
    type: "error",
  },
  {
    inputs: [],
    name: "NotAllowedInWhitelistedMode",
    type: "error",
  },
  {
    inputs: [],
    name: "NotEnoughCollateralException",
    type: "error",
  },
  {
    inputs: [],
    name: "TargetContractNotAllowedExpcetion",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenAlreadyAddedException",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenNotAllowedException",
    type: "error",
  },
  {
    inputs: [],
    name: "TooMuchTokensException",
    type: "error",
  },
  {
    inputs: [],
    name: "UnknownMethodException",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddressOrUserAlreadyHasAccountException",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "onBehalfOf",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "AddCollateral",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "CloseCreditAccount",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "DecreaseBorrowedAmount",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "IncreaseBorrowedAmount",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "liquidator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "remainingFunds",
        type: "uint256",
      },
    ],
    name: "LiquidateCreditAccount",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "MultiCallFinished",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "borrower",
        type: "address",
      },
    ],
    name: "MultiCallStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "onBehalfOf",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "creditAccount",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "borrowAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "referralCode",
        type: "uint16",
      },
    ],
    name: "OpenCreditAccount",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "TransferAccount",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "state",
        type: "bool",
      },
    ],
    name: "TransferAccountAllowed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "onBehalfOf",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "addCollateral",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "targetContract",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "bool",
        name: "state",
        type: "bool",
      },
    ],
    name: "approveAccountTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "creditAccount",
        type: "address",
      },
    ],
    name: "calcCreditAccountHealthFactor",
    outputs: [
      {
        internalType: "uint256",
        name: "hf",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "creditAccount",
        type: "address",
      },
    ],
    name: "calcTotalValue",
    outputs: [
      {
        internalType: "uint256",
        name: "total",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "twv",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "skipTokenMask",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "convertWETH",
        type: "bool",
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
    name: "closeCreditAccount",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "creditManager",
    outputs: [
      {
        internalType: "contract ICreditManagerV2",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "decreaseDebt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "degenNFT",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "enableToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "borrower",
        type: "address",
      },
    ],
    name: "hasOpenedCreditAccount",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "increaseDebt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "isTokenAllowed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "limits",
    outputs: [
      {
        internalType: "uint128",
        name: "minBorrowedAmount",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "maxBorrowedAmount",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "skipTokenMask",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "convertWETH",
        type: "bool",
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
    name: "liquidateCreditAccount",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
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
    name: "multicall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "onBehalfOf",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "leverageFactor",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "referralCode",
        type: "uint16",
      },
    ],
    name: "openCreditAccount",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "borrowedAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "onBehalfOf",
        type: "address",
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
      {
        internalType: "uint16",
        name: "referralCode",
        type: "uint16",
      },
    ],
    name: "openCreditAccountMulticall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "params",
    outputs: [
      {
        internalType: "uint128",
        name: "maxBorrowedAmountPerBlock",
        type: "uint128",
      },
      {
        internalType: "bool",
        name: "isIncreaseDebtForbidden",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "transferAccountOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "transfersAllowed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ICreditFacade__factory {
  static readonly abi = _abi;
  static createInterface(): ICreditFacadeInterface {
    return new utils.Interface(_abi) as ICreditFacadeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICreditFacade {
    return new Contract(address, _abi, signerOrProvider) as ICreditFacade;
  }
}
