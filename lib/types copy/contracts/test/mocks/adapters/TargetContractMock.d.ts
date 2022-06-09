import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface TargetContractMockInterface extends utils.Interface {
    functions: {
        "callData()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "callData"): FunctionFragment;
    encodeFunctionData(functionFragment: "callData", values?: undefined): string;
    decodeFunctionResult(functionFragment: "callData", data: BytesLike): Result;
    events: {};
}
export interface TargetContractMock extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TargetContractMockInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        callData(overrides?: CallOverrides): Promise<[string]>;
    };
    callData(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        callData(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        callData(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        callData(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
