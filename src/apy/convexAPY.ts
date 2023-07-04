import { BigNumber } from "ethers";

import {
  contractParams,
  contractsByNetwork,
  ConvexPoolContract,
  ConvexPoolParams,
} from "../contracts/contracts";
import { NetworkType } from "../core/chains";
import { PRICE_DECIMALS, SECONDS_PER_YEAR, WAD } from "../core/constants";
import {
  ConvexPhantomTokenData,
  ConvexStakedPhantomToken,
} from "../tokens/convex";
import { CurveLPToken, CurveLPTokenData } from "../tokens/curveLP";
import {
  SupportedToken,
  supportedTokens,
  tokenDataByNetwork,
} from "../tokens/token";
import {
  IBaseRewardPool,
  IBaseRewardPool__factory,
  IConvexToken,
  IConvexToken__factory,
  ICurvePool,
  ICurvePool__factory,
} from "../types";
import { toBigInt } from "../utils/formatter";
import { MCall } from "../utils/multicall";
import { CurveAPYResult } from "./curveAPY";

type GetTokenPriceCallback = (
  tokenAddress: string,
  currency?: string,
) => bigint;

export interface GetConvexAPYBulkProps {
  getTokenPrice: GetTokenPriceCallback;
  curveAPY: CurveAPYResult;
  generated: GetConvexAPYBulkCallsReturns;
  response: Array<BigNumber>;
}

export function getConvexAPYBulk({
  generated,
  response,
  getTokenPrice,
  curveAPY,
}: GetConvexAPYBulkProps) {
  const { poolsInfo, calls } = generated;

  const [parsedResponse] = calls.reduce<[Array<Array<BigNumber>>, number]>(
    ([acc, start], call) => {
      const end = start + call.length;

      const currentResponse = response.slice(start, end);
      acc.push(currentResponse);

      return [acc, end];
    },
    [[], 0],
  );

  const apyList = parsedResponse.map(
    (
      [
        baseRewardsFinish,
        basePoolRate,
        basePoolSupply,
        vPrice,
        cvxSupply,
        ...rest
      ],
      i,
    ) => {
      const [poolParams, , , underlying, extraPoolAddresses, tokenList] =
        poolsInfo[i];

      const extra = rest.slice(0, extraPoolAddresses.length);
      const extraRewardsFinish = rest.slice(extraPoolAddresses.length);

      const apy = calculateConvexAPY({
        baseRewardsFinish: toBigInt(baseRewardsFinish),
        basePoolRate: toBigInt(basePoolRate),
        basePoolSupply: toBigInt(basePoolSupply),
        vPrice: toBigInt(vPrice),
        cvxSupply: toBigInt(cvxSupply),
        extra: extra.map(v => toBigInt(v)),
        extraRewardsFinish: extraRewardsFinish.map(v => toBigInt(v)),

        extraPoolAddresses,
        poolParams,
        underlying,

        getTokenPrice,
        curveAPY,
        tokenList,
      });

      return apy;
    },
  );

  return apyList;
}

interface GetPoolInfoProps {
  pool: ConvexPoolContract;
  networkType: NetworkType;
}

function getPoolInfo({ pool, networkType }: GetPoolInfoProps) {
  const tokenList = tokenDataByNetwork[networkType];
  const contractsList = contractsByNetwork[networkType];

  const poolParams = contractParams[pool] as ConvexPoolParams;
  const stakedTokenParams = supportedTokens[
    poolParams.stakedToken
  ] as ConvexPhantomTokenData;

  const { underlying } = stakedTokenParams;
  const basePoolAddress = contractsList[pool];

  const crvParams = supportedTokens[underlying] as CurveLPTokenData;

  const swapPoolAddress = contractsList[crvParams.pool];

  const extraPoolAddresses = poolParams.extraRewards.map(
    d => d.poolAddress[networkType],
  );

  return [
    poolParams,
    basePoolAddress,
    swapPoolAddress,
    underlying,
    extraPoolAddresses,
    tokenList,
  ] as const;
}

type GetConvexAPYBulkCallsReturns = ReturnType<typeof getConvexAPYBulkCalls>;

export interface GetConvexAPYBulkCallsProps {
  pools: Array<ConvexPoolContract>;
  networkType: NetworkType;
}

export function getConvexAPYBulkCalls({
  pools,
  networkType,
}: GetConvexAPYBulkCallsProps) {
  const poolsInfo = pools.map(pool => getPoolInfo({ networkType, pool }));

  const calls = poolsInfo.map(
    ([, basePoolAddress, swapPoolAddress, , extraPoolAddresses, tokenList]) =>
      getPoolDataCalls({
        basePoolAddress,
        swapPoolAddress,
        cvxAddress: tokenList.CVX,
        extraPoolAddresses,
      }),
  );

  return { poolsInfo, calls };
}

type IBaseRewardPoolInterface = IBaseRewardPool["interface"];
type IConvexTokenInterface = IConvexToken["interface"];
type CurveV1AdapterStETHInterface = ICurvePool["interface"];

interface GetPoolDataCallsProps {
  basePoolAddress: string;
  swapPoolAddress: string;
  cvxAddress: string;
  extraPoolAddresses: string[];
}

function getPoolDataCalls({
  basePoolAddress,
  swapPoolAddress,
  cvxAddress,
  extraPoolAddresses,
}: GetPoolDataCallsProps) {
  const calls: [
    MCall<IBaseRewardPoolInterface>,
    MCall<IBaseRewardPoolInterface>,
    MCall<IBaseRewardPoolInterface>,
    MCall<CurveV1AdapterStETHInterface>,
    MCall<IConvexTokenInterface>,
    ...Array<MCall<IBaseRewardPoolInterface>>,
  ] = [
    {
      address: basePoolAddress,
      interface: IBaseRewardPool__factory.createInterface(),
      method: "periodFinish()",
    },
    {
      address: basePoolAddress,
      interface: IBaseRewardPool__factory.createInterface(),
      method: "rewardRate()",
    },
    {
      address: basePoolAddress,
      interface: IBaseRewardPool__factory.createInterface(),
      method: "totalSupply()",
    },
    {
      address: swapPoolAddress,
      interface: ICurvePool__factory.createInterface(),
      method: "get_virtual_price()",
    },
    {
      address: cvxAddress,
      interface: IConvexToken__factory.createInterface(),
      method: "totalSupply()",
    },
    ...extraPoolAddresses.map(
      (extraPoolAddress): MCall<IBaseRewardPoolInterface> => ({
        address: extraPoolAddress,
        interface: IBaseRewardPool__factory.createInterface(),
        method: "rewardRate()",
      }),
    ),
    ...extraPoolAddresses.map(
      (extraPoolAddress): MCall<IBaseRewardPoolInterface> => ({
        address: extraPoolAddress,
        interface: IBaseRewardPool__factory.createInterface(),
        method: "periodFinish()",
      }),
    ),
  ];

  return calls;
}

const CVX_MAX_SUPPLY = WAD * 100000000n;
const CVX_REDUCTION_PER_CLIFF = 100000n;
const CVX_TOTAL_CLIFFS = WAD * 1000n;

export function getCVXMintAmount(crvAmount: bigint, cvxSupply: bigint) {
  const currentCliff = cvxSupply / CVX_REDUCTION_PER_CLIFF;

  if (currentCliff < CVX_TOTAL_CLIFFS) {
    const remainingCliffs = CVX_TOTAL_CLIFFS - currentCliff;

    const mintedAmount = (crvAmount * remainingCliffs) / CVX_TOTAL_CLIFFS;
    const amountTillMax = CVX_MAX_SUPPLY - cvxSupply;

    return mintedAmount > amountTillMax ? amountTillMax : mintedAmount;
  }

  return 0n;
}

export interface CalculateConvexAPYProps {
  baseRewardsFinish: bigint;
  basePoolRate: bigint;
  basePoolSupply: bigint;
  vPrice: bigint;
  cvxSupply: bigint;
  extra: Array<bigint>;
  extraRewardsFinish: Array<bigint>;

  extraPoolAddresses: string[];
  poolParams: ConvexPoolParams;
  underlying: CurveLPToken;

  getTokenPrice: GetTokenPriceCallback;
  curveAPY: CurveAPYResult;
  tokenList: Record<SupportedToken, string>;
}

function getTimestampInSeconds() {
  return Math.floor(Date.now() / 1000);
}

const CURRENCY_LIST: Partial<Record<ConvexStakedPhantomToken, SupportedToken>> =
  {
    stkcvxsteCRV: "WETH",
  };

function calculateConvexAPY({
  baseRewardsFinish,
  basePoolRate,
  basePoolSupply,
  vPrice,
  cvxSupply,
  extra,
  extraRewardsFinish,

  extraPoolAddresses,
  poolParams,
  underlying,

  getTokenPrice,
  curveAPY,
  tokenList,
}: CalculateConvexAPYProps) {
  const currentTimestamp = getTimestampInSeconds();

  const currencySymbol = CURRENCY_LIST[poolParams.stakedToken];
  const currency = currencySymbol && tokenList[currencySymbol || ""];

  const cvxPrice = getTokenPrice(tokenList.CVX, currency);
  const crvPrice = getTokenPrice(tokenList.CRV, currency);

  const crvPerSecond = basePoolRate;
  const virtualSupply = (basePoolSupply * vPrice) / WAD;
  const crvPerUnderlying = (crvPerSecond * WAD) / virtualSupply;

  const crvPerYear = crvPerUnderlying * BigInt(SECONDS_PER_YEAR);
  const cvxPerYear = getCVXMintAmount(crvPerYear, cvxSupply);

  const baseFinished = baseRewardsFinish <= currentTimestamp;

  const crvAPY = baseFinished ? 0n : (crvPerYear * crvPrice) / PRICE_DECIMALS;
  const cvxAPY = baseFinished ? 0n : (cvxPerYear * cvxPrice) / PRICE_DECIMALS;

  const extraAPRs = extraPoolAddresses.map((_, index) => {
    const extraRewardSymbol = poolParams.extraRewards[index].rewardToken;
    const extraPoolRate = extra[index];
    const extraFinished = extraRewardsFinish[index];

    const perUnderlying = (extraPoolRate * WAD) / virtualSupply;
    const perYear = perUnderlying * BigInt(SECONDS_PER_YEAR);

    const extraPrice = getTokenPrice(tokenList[extraRewardSymbol], currency);

    const extraAPY = (perYear * extraPrice) / PRICE_DECIMALS;

    const finished = extraFinished <= currentTimestamp;

    return finished ? 0n : extraAPY;
  });

  const extraAPYTotal = extraAPRs.reduce((acc, apy) => acc + apy, 0n);

  const baseApyWAD = curveAPY[underlying].base;
  return baseApyWAD + crvAPY + cvxAPY + extraAPYTotal;
}
