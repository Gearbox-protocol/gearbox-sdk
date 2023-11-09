import { SupportedContract } from "@gearbox-protocol/sdk-gov";

import { ILidoV1Adapter__factory } from "../types";
import { AbstractParser } from "./abstractParser";
import { IParser } from "./iParser";

export class LidoAdapterParser extends AbstractParser implements IParser {
  constructor(contract: SupportedContract, isContract: boolean) {
    super(contract);
    this.ifc = ILidoV1Adapter__factory.createInterface();
    if (!isContract) this.adapterName = "LidoV1Adapter";
  }
  parse(calldata: string): string {
    const { functionFragment, functionName } = this.parseSelector(calldata);

    switch (functionFragment.name) {
      case "submit": {
        const [amount] = this.decodeFunctionData(functionFragment, calldata);
        return `${functionName}(amount: ${this.formatBN(amount, "STETH")})`;
      }
      case "submitDiff": {
        const [leftoverAmount] = this.decodeFunctionData(
          functionFragment,
          calldata,
        );
        return `${functionName}(leftoverAmount: ${this.formatBN(
          leftoverAmount,
          "STETH",
        )})`;
      }

      default:
        return `${functionName}: Unknown operation ${functionFragment.name} with calldata ${calldata}`;
    }
  }
}
