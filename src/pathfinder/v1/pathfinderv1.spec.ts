import { RAY, tokenDataByNetwork } from "@gearbox-protocol/sdk-gov";
import { expect } from "chai";
import { providers } from "ethers";

import { CloseResult, PathFinderV1 } from "./pathfinderv1";

describe("PathFinderV1 test", () => {
  it("compare works correctly", () => {
    const r1: CloseResult = {
      amount: 2000n,
      gasUsage: 1000n,
      calls: [],
    };

    const r2: CloseResult = {
      amount: 3000n,
      gasUsage: 2000n,
      calls: [],
    };

    let result = PathFinderV1.compare(r1, r2, RAY);
    expect(result).to.be.eql(r2);

    result = PathFinderV1.compare(r1, r2, RAY * 2n);
    expect(result).to.be.eql(r1);
  });
  it("has all expected connectors", () => {
    const pf = new PathFinderV1("", new providers.JsonRpcProvider(), "Mainnet");
    const allowedTokens = {
      [tokenDataByNetwork.Mainnet.USDC.toLowerCase()]: true,
      [tokenDataByNetwork.Mainnet.WETH.toLowerCase()]: true,
      [tokenDataByNetwork.Mainnet.USDT.toLowerCase()]: true,
      [tokenDataByNetwork.Mainnet.FRAX.toLowerCase()]: true,
    } as const;
    expect(pf.getAvailableConnectors(allowedTokens)).to.be.deep.equal([
      tokenDataByNetwork.Mainnet.USDC.toLowerCase(),
      tokenDataByNetwork.Mainnet.WETH.toLowerCase(),
      tokenDataByNetwork.Mainnet.USDT.toLowerCase(),
      tokenDataByNetwork.Mainnet.FRAX.toLowerCase(),
    ]);
  });
});
