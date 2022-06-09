import type { BaseContract, BigNumber, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../../common";
export interface ILidoMockEventsInterface extends utils.Interface {
    functions: {};
    events: {
        "Mock_Submitted(address,uint256,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Mock_Submitted"): EventFragment;
}
export interface Mock_SubmittedEventObject {
    sender: string;
    amount: BigNumber;
    referral: string;
}
export declare type Mock_SubmittedEvent = TypedEvent<[
    string,
    BigNumber,
    string
], Mock_SubmittedEventObject>;
export declare type Mock_SubmittedEventFilter = TypedEventFilter<Mock_SubmittedEvent>;
export interface ILidoMockEvents extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ILidoMockEventsInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {};
    callStatic: {};
    filters: {
        "Mock_Submitted(address,uint256,address)"(sender?: string | null, amount?: null, referral?: null): Mock_SubmittedEventFilter;
        Mock_Submitted(sender?: string | null, amount?: null, referral?: null): Mock_SubmittedEventFilter;
    };
    estimateGas: {};
    populateTransaction: {};
}
