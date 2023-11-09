import { WAD } from "@gearbox-protocol/sdk-gov";
import { expect } from "chai";

import { IConvexV1BoosterAdapter__factory } from "../types";
import { ConvexBoosterAdapterParser } from "./convexBoosterAdapterParser";

describe("ConvexV1BaseRewardPoolAdapterParser test", () => {
  it("stake / withdraw functions works well", () => {
    let parser = new ConvexBoosterAdapterParser("CONVEX_BOOSTER", false);

    const ifc = IConvexV1BoosterAdapter__factory.createInterface();

    let parsed = parser.parse(
      ifc.encodeFunctionData("deposit", [9, WAD * 19999n, false]),
    );
    expect(parsed).to.be.eq(
      "ConvexV1BoosterAdapter[CONVEX_BOOSTER].deposit(pid: 9 [CONVEX_3CRV_POOL], amount: 19.99K [19999000000000000000000], stake: false)",
      "Incorrect parse deposit",
    );

    parsed = parser.parse(
      ifc.encodeFunctionData("depositDiff", [32, WAD * 19999n, true]),
    );
    expect(parsed).to.be.eq(
      "ConvexV1BoosterAdapter[CONVEX_BOOSTER].depositDiff(pid: 32 [CONVEX_FRAX3CRV_POOL], leftoverAmount: 19.99K [19999000000000000000000], stake: true)",
      "Incorrect parse depositDiff",
    );

    parsed = parser.parse(
      ifc.encodeFunctionData("withdraw", [9, (WAD * 555n) / 10n]),
    );
    expect(parsed).to.be.eq(
      "ConvexV1BoosterAdapter[CONVEX_BOOSTER].withdraw(pid: 9 [CONVEX_3CRV_POOL], amount: 55.50 [55500000000000000000])",
      "Incorrect parse withdraw",
    );

    parsed = parser.parse(
      ifc.encodeFunctionData("withdrawDiff", [32, (WAD * 555n) / 10n]),
    );
    expect(parsed).to.be.eq(
      "ConvexV1BoosterAdapter[CONVEX_BOOSTER].withdrawDiff(pid: 32 [CONVEX_FRAX3CRV_POOL], leftoverAmount: 55.50 [55500000000000000000])",
      "Incorrect parse withdrawDiff",
    );
  });
});
