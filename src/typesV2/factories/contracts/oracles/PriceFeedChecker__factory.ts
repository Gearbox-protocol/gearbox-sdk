/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PriceFeedChecker,
  PriceFeedCheckerInterface,
} from "../../../contracts/oracles/PriceFeedChecker";

const _abi = [
  {
    inputs: [],
    name: "ChainPriceStaleException",
    type: "error",
  },
  {
    inputs: [],
    name: "PriceFeedRequiresAddressException",
    type: "error",
  },
  {
    inputs: [],
    name: "PriceOracleNotExistsException",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroPriceException",
    type: "error",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea2646970667358221220a33aafe67efbe3015894938eb9c9b098fb0182df4748946f715ea1097e913ba164736f6c634300080a0033";

type PriceFeedCheckerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PriceFeedCheckerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PriceFeedChecker__factory extends ContractFactory {
  constructor(...args: PriceFeedCheckerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PriceFeedChecker> {
    return super.deploy(overrides || {}) as Promise<PriceFeedChecker>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PriceFeedChecker {
    return super.attach(address) as PriceFeedChecker;
  }
  override connect(signer: Signer): PriceFeedChecker__factory {
    return super.connect(signer) as PriceFeedChecker__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PriceFeedCheckerInterface {
    return new utils.Interface(_abi) as PriceFeedCheckerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PriceFeedChecker {
    return new Contract(address, _abi, signerOrProvider) as PriceFeedChecker;
  }
}
