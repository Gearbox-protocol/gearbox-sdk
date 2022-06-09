/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ICreditFacadeExceptions,
  ICreditFacadeExceptionsInterface,
} from "../../../../contracts/interfaces/ICreditFacade.sol/ICreditFacadeExceptions";

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
];

export class ICreditFacadeExceptions__factory {
  static readonly abi = _abi;
  static createInterface(): ICreditFacadeExceptionsInterface {
    return new utils.Interface(_abi) as ICreditFacadeExceptionsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICreditFacadeExceptions {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ICreditFacadeExceptions;
  }
}
