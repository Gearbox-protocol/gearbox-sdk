import { NetworkType } from "../core/constants";
import {
  filterEmptyKeys,
  keyToLowercase,
  objectEntries,
  swapKeyValue,
} from "../utils/mappers";
import {
  ConvexLPToken,
  ConvexLPTokenData,
  ConvexPhantomTokenData,
  ConvexStakedPhantomToken,
  convexTokens,
} from "./convex";
import {
  CurveLPToken,
  CurveLPTokenData,
  curveTokens,
  MetaCurveLPTokenData,
} from "./curveLP";
import {
  DieselTokenData,
  DieselTokenTypes,
  GearboxToken,
  GearboxTokenData,
  gearTokens,
} from "./gear";
import { NormalToken, NormalTokenData, normalTokens } from "./normal";
import {
  YearnLPToken,
  yearnTokens,
  YearnVaultOfCurveLPTokenData,
  YearnVaultOfMetaCurveLPTokenData,
  YearnVaultTokenData,
} from "./yearn";

export type LPTokens =
  | YearnLPToken
  | CurveLPToken
  | ConvexLPToken
  | ConvexStakedPhantomToken;

export type SupportedToken =
  | NormalToken
  | LPTokens
  | DieselTokenTypes
  | GearboxToken;

export interface TokenBase {
  name: string;
  symbol: string;
  decimals: number;
}

export type LPTokenDataI =
  | CurveLPTokenData
  | MetaCurveLPTokenData
  | YearnVaultTokenData
  | YearnVaultOfCurveLPTokenData
  | YearnVaultOfMetaCurveLPTokenData
  | ConvexLPTokenData
  | ConvexPhantomTokenData;

export type TokenDataI =
  | NormalTokenData
  | LPTokenDataI
  | DieselTokenData
  | GearboxTokenData;

export const lpTokens: Record<LPTokens, LPTokenDataI> = {
  ...curveTokens,
  ...convexTokens,
  ...yearnTokens,
};

export const supportedTokens: Record<SupportedToken, TokenDataI> = {
  ...normalTokens,
  ...lpTokens,
  ...gearTokens,
};

export const tokenDataByNetwork: Record<
  NetworkType,
  Record<SupportedToken, string>
> = {
  //
  // MAINNET NETWORK
  Mainnet: {
    "1INCH": "0x111111111117dC0aa78b770fA6A738034120C302",
    AAVE: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
    COMP: "0xc00e94Cb662C3520282E6f5717214004A7f26888",
    CRV: "0xD533a949740bb3306d119CC777fa900bA034cd52",
    DAI: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    DPI: "0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b",
    FEI: "0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
    LINK: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
    SNX: "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
    SUSHI: "0x6B3595068778DD592e39A122f4f5a5cF09C90fE2",
    UNI: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
    USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    USDT: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    WBTC: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    WETH: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    YFI: "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",

    /// UPDATE
    STETH: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
    FTM: "0x4E15361FD6b4BB609Fa63C81A2be19d873717870",
    CVX: "0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B",
    FRAX: "0x853d955aCEf822Db058eb8505911ED77F175b99e",
    FXS: "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0",
    LDO: "0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32",
    SPELL: "0x090185f2135308BaD17527004364eBcC2D37e5F6",
    LUSD: "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0",
    sUSD: "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51",
    GUSD: "0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd",
    LUNA: "0xd2877702675e6cEb975b4A1dFf9fb7BAF4C91ea9",
    LQTY: "0x6DEA81C8171D0bA574754EF6F8b412F2Ed88c54D",

    // CURVE LP TOKENS
    "3Crv": "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490",
    steCRV: "0x06325440D014e39736583c165C2963BA99fAf14E",
    FRAX3CRV: "0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B",
    LUSD3CRV: "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA",
    crvPlain3andSUSD: "0xC25a3A3b969415c80451098fa907EC722572917F",
    gusd3CRV: "0xD2967f45c4f384DEEa880F807Be904762a3DeA07",

    // CONVEX LP TOKENS
    cvx3Crv: "0x30D9410ED1D5DA1F6C8391af5338C93ab8d4035C",
    cvxsteCRV: "0x9518c9063eB0262D791f38d8d6Eb0aca33c63ed0",
    cvxFRAX3CRV: "0xbE0F6478E0E4894CFb14f32855603A083A57c7dA",
    cvxLUSD3CRV: "0xFB9B2f06FDb404Fd3E2278E9A9edc8f252F273d0",
    cvxcrvPlain3andSUSD: "0x11D200ef1409cecA8D6d23e6496550f707772F11",
    cvxgusd3CRV: "0x15c2471ef46Fa721990730cfa526BcFb45574576",

    // CONVEX PHANTOM TOKEN ADDRESSES
    stkcvx3Crv: "0x2eD0f32d7C8b0f7EA7E40277C62Fb9C5DE092003",
    stkcvxsteCRV: "0x2210aa245Bf766eE99325c607807A08e636B5173",
    stkcvxFRAX3CRV: "0x2AF29502110080081FDF726dfBf61ABE3bA9Ef3C",
    stkcvxLUSD3CRV: "0x77e6290D1779B606235407fdf37A14D94D0DFB40",
    stkcvxcrvPlain3andSUSD: "0xd622AD90386BBf0310668175f76eD958030E3635",
    stkcvxgusd3CRV: "0x074f66aE6e28f7e01DFe598ECbfbd3034cf3De47",

    // YEARN TOKENS
    yvDAI: "0xdA816459F1AB5631232FE5e97a05BBBb94970c95",
    yvUSDC: "0xa354F35829Ae975e850e23e9615b11Da1B3dC4DE",
    yvWETH: "0xa258C4606Ca8206D8aA700cE2143D7db854D168c",
    yvWBTC: "0xA696a63cc78DfFa1a63E9E50587C197387FF6C7E",
    yvCurve_stETH: "0xdCD90C7f6324cfa40d7169ef80b12031770B4325",
    yvCurve_FRAX: "0xB4AdA607B9d6b2c9Ee07A275e9616B84AC560139",

    // GEARBOX
    dDAI: "0x6CFaF95457d7688022FC53e7AbE052ef8DFBbdBA",
    dUSDC: "0xc411dB5f5Eb3f7d552F9B8454B2D74097ccdE6E3",
    dWBTC: "0xe753260F1955e8678DCeA8887759e07aa57E8c54",
    dWETH: "0xF21fc650C1B34eb0FDE786D52d23dA99Db3D6278",

    GEAR: "0xBa3335588D9403515223F109EdC4eB7269a9Ab5D",
  },

  ///
  ///
  /// GOERLI NETWORK
  ///
  ///
  Goerli: {
    "1INCH": "0xC69D4e2940950bf26977b421BDB9a06F40D37db4",
    AAVE: "0xc28667333f193e0cfD69E8fbC60CC6cB875414fA",
    COMP: "0xaDa57f2C1Ba941509ffF0eEb7e846C95A5933951",
    CRV: "0x976d27eC7ebb1136cd7770F5e06aC917Aa9C672b",
    DAI: "0x55a309598ABf543bF76FbB22859938ba2F29C2eA",
    DPI: "0x130874718AfcC298894e0a60a1b87c9C2989C2E6",
    FEI: "0x49FCC2B5978839FAB2E0364C8ed4be222689f1aF",
    LINK: "0x609CeB4781A3A37C81122FD69b20dc5155dABe0B",
    SNX: "0x293177E8F7DEA75e44C6799e975A42222cBB326B",
    SUSHI: "0xe8e880b8280d264989e63cBD0b70C1EA52b5CD83",
    UNI: "0xd354fEF0E34ef0ee467d61eee5Af8336fd36Cb7D",
    USDT: "0xc81c248c44e96D85a0eCddc104843cE55B1ff35c",
    USDC: "0x1F2cd0D7E5a7d8fE41f886063E9F11A05dE217Fa",
    WBTC: "0x34852e54D9B4Ec4325C7344C28b584Ce972e5E62",
    WETH: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6", // Well-known
    YFI: "0xCad5D7701e0A85fe50B3aCaBDcdF7e75672F326e",

    /// UPDATE
    STETH: "0xd628baa42b3080593a231016bF3F229161C9F745",
    FTM: "0x0bf727bFFB6008Fa8b0B480Dd8f77Fa47B539830",
    CVX: "0x84F96e4e2c67C3737dA005572bEf639465a81777",
    FRAX: "0x92d43093959C7DDa89896418bCE9DE0B87879646",
    FXS: "0x34C035818Dd308f3aC20e68bC03C3E4FC8924d9d",
    LDO: "0x13781b54cd88cC115a17Db53b058706B29FaD341",
    SPELL: "0x7BEaF8B56974157b4Df2AFE139d6016572b0049D",
    LUSD: "0xF1D178615E7BB6a7331EE73F84D5Ac6c95d8BC91",
    sUSD: "0x4F02e25531520709114e470f45A1Fb50862e3147",
    GUSD: "0x50688e51B3941BFdf6a878F810dAF85bFc0657cf",
    LUNA: "0xc2b78fF97aF7b616DefE63285DA9cFf928eC9Af9",
    LQTY: "0x7f5E8e47d982052bD6A1CA26551b80821802847d",

    // YEARN TOKENS
    yvDAI: "0xd5bd19D424fF89131fE59993B97e7462f5B1c2fA",
    yvUSDC: "0x3ede142571Cfc7A6E4e1c78A9Ccf50f39f95B515",
    yvWETH: "0xecBf21B35f92335A13236661163d5585cF1EA2ea",
    yvWBTC: "0xfCa2ED758F053b5A2B323Edd454ba4FB83B0FE51",
    yvCurve_stETH: "0xAa2169Dc5Ae1C3F583CF8E5568226E465c260351",
    yvCurve_FRAX: "0x24DAD24b81c9C6501c7fF4C67b3CfA1a7d6CF93f",

    // CURVE LP TOKENS
    "3Crv": "0xb2f394A64966a8892a43CcfBBD48D28bC58Aeb67",
    steCRV: "0xf5c5e39F56fF90C0F63a97F3c77779eF495c1faD",
    crvPlain3andSUSD: "0xC3d328CCA12347A31126d891D16fe8C5466625a5",
    gusd3CRV: "0xbD919fcC47ae2b5Cc2fe646971aCcB1e88843DC5",
    FRAX3CRV: "0x12Ad3125C67eC5325Cc94AFdA8B26cd12BCe1E9b",
    LUSD3CRV: "0x348B1846b87cA12D23A9A4E73B1CfAc2Aad49cf4",

    // CONVEX LP TOKENS
    cvx3Crv: "0xC45ade6D45970e517A6792DB5323842eDAF45246",
    cvxsteCRV: "0x0d7380064d7C14Ac9ed2B4576fE7F3956CC1A4BB",
    cvxcrvPlain3andSUSD: "0x9F1aEA2CB12b923aF5f4163EdCcF0459Eec06B80",
    cvxFRAX3CRV: "0xfb899fb1869e4ac46fbA4bDbB7cFA2c0417bC6d3",
    cvxLUSD3CRV: "0xe5E3C00Edb8A5270B34737bf926E87346906227f",
    cvxgusd3CRV: "0xB8111E77D074Dd7820323751a373DC8d103c4EeD",

    // CONVEX PHANTOM TOKEN ADDRESSES
    stkcvx3Crv: "0x67dccf07a27182668ccF062392E696a95cDEfB7f",
    stkcvxFRAX3CRV: "0xF98b96D84c87c214DbE50922B65DB10768AF13B0",
    stkcvxgusd3CRV: "0x29532d0E34EAeda74e3c6620D1246C271D4cd3D3",
    stkcvxsteCRV: "0x6F73a8206DfEd633C43ce24E1e3Da4aC2Cd1b9E2",
    stkcvxcrvPlain3andSUSD: "0xC14f4b0c3483086ECE724F5a7771D144B45BdD1e",
    stkcvxLUSD3CRV: "0xb72CeF4FE4cA8d2683A9434385650C2A8A650F59",

    // GEARBOX
    dDAI: "TODO: DEPLOY ME", // DieselToken.sol
    dUSDC: "TODO: DEPLOY ME", // DieselToken.sol
    dWBTC: "TODO: DEPLOY ME", // DieselToken.sol
    dWETH: "TODO: DEPLOY ME", // DieselToken.sol

    GEAR: "TODO: DEPLOY ME",
  },
};

export const tokenSymbolByAddress = objectEntries(tokenDataByNetwork).reduce<
  Record<string, SupportedToken>
>(
  (acc, [, tokens]) => ({
    ...acc,
    ...filterEmptyKeys(keyToLowercase(swapKeyValue(tokens))),
  }),
  {},
);

export const isSupportedToken = (t: unknown): t is SupportedToken =>
  typeof t === "string" && !!supportedTokens[t as SupportedToken];

export const isLPToken = (t: unknown): t is LPTokens =>
  typeof t === "string" && !!lpTokens[t as LPTokens];
