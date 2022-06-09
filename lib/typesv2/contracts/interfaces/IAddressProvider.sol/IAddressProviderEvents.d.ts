import type { BaseContract, BytesLike, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface IAddressProviderEventsInterface extends utils.Interface {
    functions: {};
    events: {
        "AddressSet(bytes32,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddressSet"): EventFragment;
}
export interface AddressSetEventObject {
    service: string;
    newAddress: string;
}
export declare type AddressSetEvent = TypedEvent<[
    string,
    string
], AddressSetEventObject>;
export declare type AddressSetEventFilter = TypedEventFilter<AddressSetEvent>;
export interface IAddressProviderEvents extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IAddressProviderEventsInterface;
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
        "AddressSet(bytes32,address)"(service?: BytesLike | null, newAddress?: string | null): AddressSetEventFilter;
        AddressSet(service?: BytesLike | null, newAddress?: string | null): AddressSetEventFilter;
    };
    estimateGas: {};
    populateTransaction: {};
}
