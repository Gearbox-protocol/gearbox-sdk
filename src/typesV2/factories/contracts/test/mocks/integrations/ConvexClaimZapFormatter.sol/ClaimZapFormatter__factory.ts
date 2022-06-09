/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ClaimZapFormatter,
  ClaimZapFormatterInterface,
} from "../../../../../../contracts/test/mocks/integrations/ConvexClaimZapFormatter.sol/ClaimZapFormatter";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "rewardContracts",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "extraRewardContracts",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "tokenRewardContracts",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "tokenRewardTokens",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "depositCrvMaxAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minAmountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "depositCvxMaxAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "spendCvxAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "options",
        type: "uint256",
      },
    ],
    name: "claimRewards",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506102e5806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80635a7b87f214610030575b600080fd5b6101d9600480360361012081101561004757600080fd5b810190808035906020019064010000000081111561006457600080fd5b82018360208201111561007657600080fd5b8035906020019184602083028401116401000000008311171561009857600080fd5b9091929391929390803590602001906401000000008111156100b957600080fd5b8201836020820111156100cb57600080fd5b803590602001918460208302840111640100000000831117156100ed57600080fd5b90919293919293908035906020019064010000000081111561010e57600080fd5b82018360208201111561012057600080fd5b8035906020019184602083028401116401000000008311171561014257600080fd5b90919293919293908035906020019064010000000081111561016357600080fd5b82018360208201111561017557600080fd5b8035906020019184602083028401116401000000008311171561019757600080fd5b90919293919293908035906020019092919080359060200190929190803590602001909291908035906020019092919080359060200190929190505050610254565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102195780820151818401526020810190506101fe565b50505050905090810190601f1680156102465780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60606000368080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505090509d9c5050505050505050505050505056fea264697066735822122029ab5a73f680b051fecfd765c89943c9e9ad5babe8cdc3215377b871e9ae6ffc64736f6c634300080a0033";

type ClaimZapFormatterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ClaimZapFormatterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ClaimZapFormatter__factory extends ContractFactory {
  constructor(...args: ClaimZapFormatterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ClaimZapFormatter> {
    return super.deploy(overrides || {}) as Promise<ClaimZapFormatter>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ClaimZapFormatter {
    return super.attach(address) as ClaimZapFormatter;
  }
  override connect(signer: Signer): ClaimZapFormatter__factory {
    return super.connect(signer) as ClaimZapFormatter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ClaimZapFormatterInterface {
    return new utils.Interface(_abi) as ClaimZapFormatterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ClaimZapFormatter {
    return new Contract(address, _abi, signerOrProvider) as ClaimZapFormatter;
  }
}
