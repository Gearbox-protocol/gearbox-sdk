import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface ICrvDepositInterface extends utils.Interface {
    functions: {
        "deposit(uint256,bool)": FunctionFragment;
        "lockIncentive()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "deposit" | "lockIncentive"): FunctionFragment;
    encodeFunctionData(functionFragment: "deposit", values: [BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "lockIncentive", values?: undefined): string;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockIncentive", data: BytesLike): Result;
    events: {};
}
export interface ICrvDeposit extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ICrvDepositInterface;
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
        deposit(arg0: BigNumberish, arg1: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        lockIncentive(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    deposit(arg0: BigNumberish, arg1: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    lockIncentive(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        deposit(arg0: BigNumberish, arg1: boolean, overrides?: CallOverrides): Promise<void>;
        lockIncentive(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        deposit(arg0: BigNumberish, arg1: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        lockIncentive(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        deposit(arg0: BigNumberish, arg1: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        lockIncentive(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
