import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export declare type CollateralTokenStruct = {
    token: string;
    liquidationThreshold: BigNumberish;
};
export declare type CollateralTokenStructOutput = [string, number] & {
    token: string;
    liquidationThreshold: number;
};
export declare type CreditManagerOptsStruct = {
    minBorrowedAmount: BigNumberish;
    maxBorrowedAmount: BigNumberish;
    collateralTokens: CollateralTokenStruct[];
    degenNFT: string;
};
export declare type CreditManagerOptsStructOutput = [
    BigNumber,
    BigNumber,
    CollateralTokenStructOutput[],
    string
] & {
    minBorrowedAmount: BigNumber;
    maxBorrowedAmount: BigNumber;
    collateralTokens: CollateralTokenStructOutput[];
    degenNFT: string;
};
export declare type AdapterStruct = {
    adapter: string;
    targetContract: string;
};
export declare type AdapterStructOutput = [string, string] & {
    adapter: string;
    targetContract: string;
};
export interface CreditManagerFactoryInterface extends utils.Interface {
    functions: {
        "adapters(uint256)": FunctionFragment;
        "addAdapters((address,address)[])": FunctionFragment;
        "addressProvider()": FunctionFragment;
        "configure()": FunctionFragment;
        "creditConfigurator()": FunctionFragment;
        "creditFacade()": FunctionFragment;
        "creditManager()": FunctionFragment;
        "deploy(bytes,uint256)": FunctionFragment;
        "destoy()": FunctionFragment;
        "getAddress(bytes,uint256)": FunctionFragment;
        "getRootBack()": FunctionFragment;
        "owner()": FunctionFragment;
        "pool()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "root()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "adapters" | "addAdapters" | "addressProvider" | "configure" | "creditConfigurator" | "creditFacade" | "creditManager" | "deploy" | "destoy" | "getAddress" | "getRootBack" | "owner" | "pool" | "renounceOwnership" | "root" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "adapters", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "addAdapters", values: [AdapterStruct[]]): string;
    encodeFunctionData(functionFragment: "addressProvider", values?: undefined): string;
    encodeFunctionData(functionFragment: "configure", values?: undefined): string;
    encodeFunctionData(functionFragment: "creditConfigurator", values?: undefined): string;
    encodeFunctionData(functionFragment: "creditFacade", values?: undefined): string;
    encodeFunctionData(functionFragment: "creditManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "deploy", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "destoy", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAddress", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRootBack", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pool", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "root", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    decodeFunctionResult(functionFragment: "adapters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addAdapters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addressProvider", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "configure", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditConfigurator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditFacade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deploy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "destoy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRootBack", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "root", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface CreditManagerFactory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CreditManagerFactoryInterface;
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
        adapters(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string, string] & {
            adapter: string;
            targetContract: string;
        }>;
        addAdapters(_adapters: AdapterStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addressProvider(overrides?: CallOverrides): Promise<[string]>;
        configure(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        creditConfigurator(overrides?: CallOverrides): Promise<[string]>;
        creditFacade(overrides?: CallOverrides): Promise<[string]>;
        creditManager(overrides?: CallOverrides): Promise<[string]>;
        deploy(bytecode: BytesLike, _salt: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        destoy(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getAddress(bytecode: BytesLike, _salt: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getRootBack(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pool(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        root(overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    adapters(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string, string] & {
        adapter: string;
        targetContract: string;
    }>;
    addAdapters(_adapters: AdapterStruct[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addressProvider(overrides?: CallOverrides): Promise<string>;
    configure(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    creditConfigurator(overrides?: CallOverrides): Promise<string>;
    creditFacade(overrides?: CallOverrides): Promise<string>;
    creditManager(overrides?: CallOverrides): Promise<string>;
    deploy(bytecode: BytesLike, _salt: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    destoy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getAddress(bytecode: BytesLike, _salt: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getRootBack(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    pool(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    root(overrides?: CallOverrides): Promise<string>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        adapters(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string, string] & {
            adapter: string;
            targetContract: string;
        }>;
        addAdapters(_adapters: AdapterStruct[], overrides?: CallOverrides): Promise<void>;
        addressProvider(overrides?: CallOverrides): Promise<string>;
        configure(overrides?: CallOverrides): Promise<void>;
        creditConfigurator(overrides?: CallOverrides): Promise<string>;
        creditFacade(overrides?: CallOverrides): Promise<string>;
        creditManager(overrides?: CallOverrides): Promise<string>;
        deploy(bytecode: BytesLike, _salt: BigNumberish, overrides?: CallOverrides): Promise<void>;
        destoy(overrides?: CallOverrides): Promise<void>;
        getAddress(bytecode: BytesLike, _salt: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getRootBack(overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        pool(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        root(overrides?: CallOverrides): Promise<string>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        adapters(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        addAdapters(_adapters: AdapterStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addressProvider(overrides?: CallOverrides): Promise<BigNumber>;
        configure(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        creditConfigurator(overrides?: CallOverrides): Promise<BigNumber>;
        creditFacade(overrides?: CallOverrides): Promise<BigNumber>;
        creditManager(overrides?: CallOverrides): Promise<BigNumber>;
        deploy(bytecode: BytesLike, _salt: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        destoy(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getAddress(bytecode: BytesLike, _salt: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getRootBack(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pool(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        root(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        adapters(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addAdapters(_adapters: AdapterStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addressProvider(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        configure(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        creditConfigurator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditFacade(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deploy(bytecode: BytesLike, _salt: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        destoy(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getAddress(bytecode: BytesLike, _salt: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRootBack(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        root(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
