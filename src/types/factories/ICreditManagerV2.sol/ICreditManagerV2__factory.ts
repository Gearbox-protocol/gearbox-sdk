/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ICreditManagerV2,
  ICreditManagerV2Interface,
} from "../../ICreditManagerV2.sol/ICreditManagerV2";

const _abi = [
  {
    type: "function",
    name: "adapterToContract",
    inputs: [
      {
        name: "adapter",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "addCollateral",
    inputs: [
      {
        name: "payer",
        type: "address",
        internalType: "address",
      },
      {
        name: "creditAccount",
        type: "address",
        internalType: "address",
      },
      {
        name: "token",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "approveCreditAccount",
    inputs: [
      {
        name: "borrower",
        type: "address",
        internalType: "address",
      },
      {
        name: "targetContract",
        type: "address",
        internalType: "address",
      },
      {
        name: "token",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "calcClosePayments",
    inputs: [
      {
        name: "totalValue",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "closureActionType",
        type: "uint8",
        internalType: "enum ClosureAction",
      },
      {
        name: "borrowedAmount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "borrowedAmountWithInterest",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "amountToPool",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "remainingFunds",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "profit",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "loss",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "calcCreditAccountAccruedInterest",
    inputs: [
      {
        name: "creditAccount",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "borrowedAmount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "borrowedAmountWithInterest",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "borrowedAmountWithInterestAndFees",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "canLiquidateWhilePaused",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "checkAndEnableToken",
    inputs: [
      {
        name: "creditAccount",
        type: "address",
        internalType: "address",
      },
      {
        name: "token",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "checkAndOptimizeEnabledTokens",
    inputs: [
      {
        name: "creditAccount",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "checkEmergencyPausable",
    inputs: [
      {
        name: "caller",
        type: "address",
        internalType: "address",
      },
      {
        name: "state",
        type: "bool",
        internalType: "bool",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "closeCreditAccount",
    inputs: [
      {
        name: "borrower",
        type: "address",
        internalType: "address",
      },
      {
        name: "closureActionType",
        type: "uint8",
        internalType: "enum ClosureAction",
      },
      {
        name: "totalValue",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "payer",
        type: "address",
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        name: "skipTokenMask",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "convertWETH",
        type: "bool",
        internalType: "bool",
      },
    ],
    outputs: [
      {
        name: "remainingFunds",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "collateralTokens",
    inputs: [
      {
        name: "id",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "token",
        type: "address",
        internalType: "address",
      },
      {
        name: "liquidationThreshold",
        type: "uint16",
        internalType: "uint16",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "collateralTokensByMask",
    inputs: [
      {
        name: "tokenMask",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "token",
        type: "address",
        internalType: "address",
      },
      {
        name: "liquidationThreshold",
        type: "uint16",
        internalType: "uint16",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "collateralTokensCount",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "contractToAdapter",
    inputs: [
      {
        name: "targetContract",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "creditAccounts",
    inputs: [
      {
        name: "borrower",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "creditConfigurator",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "creditFacade",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "cumulativeDropAtFastCheckRAY",
    inputs: [
      {
        name: "creditAccount",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "disableToken",
    inputs: [
      {
        name: "creditAccount",
        type: "address",
        internalType: "address",
      },
      {
        name: "token",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "enabledTokensMap",
    inputs: [
      {
        name: "creditAccount",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "executeOrder",
    inputs: [
      {
        name: "borrower",
        type: "address",
        internalType: "address",
      },
      {
        name: "targetContract",
        type: "address",
        internalType: "address",
      },
      {
        name: "data",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "fastCollateralCheck",
    inputs: [
      {
        name: "creditAccount",
        type: "address",
        internalType: "address",
      },
      {
        name: "tokenIn",
        type: "address",
        internalType: "address",
      },
      {
        name: "tokenOut",
        type: "address",
        internalType: "address",
      },
      {
        name: "balanceInBefore",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "balanceOutBefore",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "fees",
    inputs: [],
    outputs: [
      {
        name: "feeInterest",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "feeLiquidation",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "liquidationDiscount",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "feeLiquidationExpired",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "liquidationDiscountExpired",
        type: "uint16",
        internalType: "uint16",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "forbiddenTokenMask",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "fullCollateralCheck",
    inputs: [
      {
        name: "creditAccount",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getCreditAccountOrRevert",
    inputs: [
      {
        name: "borrower",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "liquidationThresholds",
    inputs: [
      {
        name: "token",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint16",
        internalType: "uint16",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "manageDebt",
    inputs: [
      {
        name: "creditAccount",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "increase",
        type: "bool",
        internalType: "bool",
      },
    ],
    outputs: [
      {
        name: "newBorrowedAmount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "maxAllowedEnabledTokenLength",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "uint8",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "openCreditAccount",
    inputs: [
      {
        name: "borrowedAmount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "onBehalfOf",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "pool",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "poolService",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "priceOracle",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "tokenMasksMap",
    inputs: [
      {
        name: "token",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transferAccountOwnership",
    inputs: [
      {
        name: "from",
        type: "address",
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "underlying",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "universalAdapter",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "version",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "wethAddress",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "ExecuteOrder",
    inputs: [
      {
        name: "borrower",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "target",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "NewConfigurator",
    inputs: [
      {
        name: "newConfigurator",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "AdaptersOrCreditFacadeOnlyException",
    inputs: [],
  },
  {
    type: "error",
    name: "AllowanceFailedException",
    inputs: [],
  },
  {
    type: "error",
    name: "CreditConfiguratorOnlyException",
    inputs: [],
  },
  {
    type: "error",
    name: "CreditFacadeOnlyException",
    inputs: [],
  },
  {
    type: "error",
    name: "HasNoOpenedAccountException",
    inputs: [],
  },
  {
    type: "error",
    name: "NotEnoughCollateralException",
    inputs: [],
  },
  {
    type: "error",
    name: "ReentrancyLockException",
    inputs: [],
  },
  {
    type: "error",
    name: "TargetContractNotAllowedException",
    inputs: [],
  },
  {
    type: "error",
    name: "TokenAlreadyAddedException",
    inputs: [],
  },
  {
    type: "error",
    name: "TokenNotAllowedException",
    inputs: [],
  },
  {
    type: "error",
    name: "TooManyEnabledTokensException",
    inputs: [],
  },
  {
    type: "error",
    name: "TooManyTokensException",
    inputs: [],
  },
  {
    type: "error",
    name: "ZeroAddressOrUserAlreadyHasAccountException",
    inputs: [],
  },
] as const;

export class ICreditManagerV2__factory {
  static readonly abi = _abi;
  static createInterface(): ICreditManagerV2Interface {
    return new utils.Interface(_abi) as ICreditManagerV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICreditManagerV2 {
    return new Contract(address, _abi, signerOrProvider) as ICreditManagerV2;
  }
}
