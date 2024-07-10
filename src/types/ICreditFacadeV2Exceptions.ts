//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ICreditFacadeV2Exceptions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iCreditFacadeV2ExceptionsAbi = [
  { type: "error", inputs: [], name: "AccountTransferNotAllowedException" },
  {
    type: "error",
    inputs: [],
    name: "ActionProhibitedWithForbiddenTokensException",
  },
  { type: "error", inputs: [], name: "AdaptersOrCreditFacadeOnlyException" },
  { type: "error", inputs: [], name: "AllowanceFailedException" },
  {
    type: "error",
    inputs: [{ name: "", internalType: "address", type: "address" }],
    name: "BalanceLessThanMinimumDesiredException",
  },
  { type: "error", inputs: [], name: "BorrowAmountOutOfLimitsException" },
  { type: "error", inputs: [], name: "BorrowedBlockLimitException" },
  { type: "error", inputs: [], name: "CantLiquidateNonExpiredException" },
  {
    type: "error",
    inputs: [],
    name: "CantLiquidateWithSuchHealthFactorException",
  },
  {
    type: "error",
    inputs: [],
    name: "CantTransferLiquidatableAccountException",
  },
  { type: "error", inputs: [], name: "CreditConfiguratorOnlyException" },
  { type: "error", inputs: [], name: "CreditFacadeOnlyException" },
  { type: "error", inputs: [], name: "ExpectedBalancesAlreadySetException" },
  { type: "error", inputs: [], name: "ForbiddenDuringClosureException" },
  { type: "error", inputs: [], name: "HasNoOpenedAccountException" },
  { type: "error", inputs: [], name: "IncorrectCallDataException" },
  {
    type: "error",
    inputs: [],
    name: "IncreaseAndDecreaseForbiddenInOneCallException",
  },
  { type: "error", inputs: [], name: "IncreaseDebtForbiddenException" },
  { type: "error", inputs: [], name: "LiquiditySanityCheckException" },
  {
    type: "error",
    inputs: [],
    name: "NotAllowedForBlacklistedAddressException",
  },
  { type: "error", inputs: [], name: "NotAllowedInWhitelistedMode" },
  { type: "error", inputs: [], name: "NotAllowedWhenNotExpirableException" },
  { type: "error", inputs: [], name: "NotEnoughCollateralException" },
  {
    type: "error",
    inputs: [],
    name: "OpenAccountNotAllowedAfterExpirationException",
  },
  { type: "error", inputs: [], name: "ReentrancyLockException" },
  { type: "error", inputs: [], name: "TargetContractNotAllowedException" },
  { type: "error", inputs: [], name: "TokenAlreadyAddedException" },
  { type: "error", inputs: [], name: "TokenNotAllowedException" },
  { type: "error", inputs: [], name: "TooManyEnabledTokensException" },
  { type: "error", inputs: [], name: "TooManyTokensException" },
  { type: "error", inputs: [], name: "UnknownMethodException" },
  {
    type: "error",
    inputs: [],
    name: "ZeroAddressOrUserAlreadyHasAccountException",
  },
] as const

