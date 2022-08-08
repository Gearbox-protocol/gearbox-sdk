import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface IWalletCheckerInterface extends utils.Interface {
    functions: {
        "check(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "check"): FunctionFragment;
    encodeFunctionData(functionFragment: "check", values: [string]): string;
    decodeFunctionResult(functionFragment: "check", data: BytesLike): Result;
    events: {};
}
export interface IWalletChecker extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IWalletCheckerInterface;
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
        check(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
    };
    check(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        check(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        check(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        check(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
