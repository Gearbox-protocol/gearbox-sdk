import { DUMB_ADDRESS, WAD } from "@gearbox-protocol/sdk-gov";
import { expect } from "chai";

import { IYearnV2Adapter__factory } from "../types";
import { YearnV2AdapterParser } from "./yearnV2AdapterParser";

describe("YearnV2AdapterParser test", () => {
  it("deposit / withdraw functions works well", () => {
    let parser = new YearnV2AdapterParser("YEARN_CURVE_STETH_VAULT", false);

    const ifc = IYearnV2Adapter__factory.createInterface();

    let parsed = parser.parse(
      ifc.encodeFunctionData("depositDiff", [WAD * 19000n]),
    );
    expect(parsed).to.be.eq(
      "YearnV2Adapter[YEARN_CURVE_STETH_VAULT].depositDiff(leftoverAmount: 19.00K [19000000000000000000000])",
      "Incorrect parse depositDiff",
    );

    parsed = parser.parse(
      ifc.encodeFunctionData("deposit(uint256)", [WAD * 19000n]),
    );
    expect(parsed).to.be.eq(
      "YearnV2Adapter[YEARN_CURVE_STETH_VAULT].deposit(amount: 19.00K [19000000000000000000000])",
      "Incorrect parse deposit(amount)",
    );

    parsed = parser.parse(
      ifc.encodeFunctionData("deposit(uint256,address)", [
        WAD * 19000n,
        DUMB_ADDRESS,
      ]),
    );
    expect(parsed).to.be.eq(
      `YearnV2Adapter[YEARN_CURVE_STETH_VAULT].deposit(amount: 19.00K [19000000000000000000000], address: ${DUMB_ADDRESS})`,
      "Incorrect parse deposit(amount,address)",
    );

    parsed = parser.parse(
      ifc.encodeFunctionData("withdrawDiff", [WAD * 19000n]),
    );
    expect(parsed).to.be.eq(
      "YearnV2Adapter[YEARN_CURVE_STETH_VAULT].withdrawDiff(leftoverAmount: 19.00K [19000000000000000000000])",
      "Incorrect parse withdrawDiff",
    );

    parsed = parser.parse(
      ifc.encodeFunctionData("withdraw(uint256)", [WAD * 19000n]),
    );
    expect(parsed).to.be.eq(
      "YearnV2Adapter[YEARN_CURVE_STETH_VAULT].withdraw(amount: 19.00K [19000000000000000000000])",
      "Incorrect parse withdraw(amount)",
    );

    parsed = parser.parse(
      ifc.encodeFunctionData("withdraw(uint256,address)", [
        WAD * 19000n,
        DUMB_ADDRESS,
      ]),
    );
    expect(parsed).to.be.eq(
      `YearnV2Adapter[YEARN_CURVE_STETH_VAULT].withdraw(amount: 19.00K [19000000000000000000000], address: ${DUMB_ADDRESS})`,
      "Incorrect parse withdraw(amount,address)",
    );

    parsed = parser.parse(
      ifc.encodeFunctionData("withdraw(uint256,address,uint256)", [
        WAD * 19000n,
        DUMB_ADDRESS,
        555,
      ]),
    );
    expect(parsed).to.be.eq(
      `YearnV2Adapter[YEARN_CURVE_STETH_VAULT].withdraw(amount: 19.00K [19000000000000000000000], address: ${DUMB_ADDRESS}, maxLoss: 555)`,
      "Incorrect parse withdraw(amount,address,uint256)",
    );
  });
});
