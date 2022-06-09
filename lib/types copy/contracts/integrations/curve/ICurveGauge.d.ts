import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface ICurveGaugeInterface extends utils.Interface {
    functions: {
        "claim_historic_rewards(address[8])": FunctionFragment;
        "claim_rewards()": FunctionFragment;
        "claimable_reward(address)": FunctionFragment;
        "claimable_tokens(address)": FunctionFragment;
        "controller()": FunctionFragment;
        "crv_token()": FunctionFragment;
        "deposit(uint256)": FunctionFragment;
        "future_epoch_time()": FunctionFragment;
        "kick(address)": FunctionFragment;
        "lp_token()": FunctionFragment;
        "minter()": FunctionFragment;
        "reward_tokens(uint256)": FunctionFragment;
        "set_approve_deposit(address,bool)": FunctionFragment;
        "user_checkpoint(address)": FunctionFragment;
        "voting_escrow()": FunctionFragment;
        "withdraw(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "claim_historic_rewards" | "claim_rewards" | "claimable_reward" | "claimable_tokens" | "controller" | "crv_token" | "deposit" | "future_epoch_time" | "kick" | "lp_token" | "minter" | "reward_tokens" | "set_approve_deposit" | "user_checkpoint" | "voting_escrow" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "claim_historic_rewards", values: [string[]]): string;
    encodeFunctionData(functionFragment: "claim_rewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimable_reward", values: [string]): string;
    encodeFunctionData(functionFragment: "claimable_tokens", values: [string]): string;
    encodeFunctionData(functionFragment: "controller", values?: undefined): string;
    encodeFunctionData(functionFragment: "crv_token", values?: undefined): string;
    encodeFunctionData(functionFragment: "deposit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "future_epoch_time", values?: undefined): string;
    encodeFunctionData(functionFragment: "kick", values: [string]): string;
    encodeFunctionData(functionFragment: "lp_token", values?: undefined): string;
    encodeFunctionData(functionFragment: "minter", values?: undefined): string;
    encodeFunctionData(functionFragment: "reward_tokens", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "set_approve_deposit", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "user_checkpoint", values: [string]): string;
    encodeFunctionData(functionFragment: "voting_escrow", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "claim_historic_rewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claim_rewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimable_reward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimable_tokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "crv_token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "future_epoch_time", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "kick", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lp_token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reward_tokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "set_approve_deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "user_checkpoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "voting_escrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {};
}
export interface ICurveGauge extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ICurveGaugeInterface;
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
        claim_historic_rewards(_reward_tokens: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claim_rewards(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimable_reward(addr: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        claimable_tokens(addr: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        controller(overrides?: CallOverrides): Promise<[string]>;
        crv_token(overrides?: CallOverrides): Promise<[string]>;
        deposit(_value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        future_epoch_time(overrides?: CallOverrides): Promise<[BigNumber]>;
        kick(addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        lp_token(overrides?: CallOverrides): Promise<[string]>;
        minter(overrides?: CallOverrides): Promise<[string]>;
        reward_tokens(i: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        set_approve_deposit(addr: string, can_deposit: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        user_checkpoint(addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        voting_escrow(overrides?: CallOverrides): Promise<[string]>;
        withdraw(_value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    claim_historic_rewards(_reward_tokens: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claim_rewards(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimable_reward(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
    claimable_tokens(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
    controller(overrides?: CallOverrides): Promise<string>;
    crv_token(overrides?: CallOverrides): Promise<string>;
    deposit(_value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    future_epoch_time(overrides?: CallOverrides): Promise<BigNumber>;
    kick(addr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    lp_token(overrides?: CallOverrides): Promise<string>;
    minter(overrides?: CallOverrides): Promise<string>;
    reward_tokens(i: BigNumberish, overrides?: CallOverrides): Promise<string>;
    set_approve_deposit(addr: string, can_deposit: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    user_checkpoint(addr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    voting_escrow(overrides?: CallOverrides): Promise<string>;
    withdraw(_value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        claim_historic_rewards(_reward_tokens: string[], overrides?: CallOverrides): Promise<void>;
        claim_rewards(overrides?: CallOverrides): Promise<void>;
        claimable_reward(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
        claimable_tokens(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
        controller(overrides?: CallOverrides): Promise<string>;
        crv_token(overrides?: CallOverrides): Promise<string>;
        deposit(_value: BigNumberish, overrides?: CallOverrides): Promise<void>;
        future_epoch_time(overrides?: CallOverrides): Promise<BigNumber>;
        kick(addr: string, overrides?: CallOverrides): Promise<void>;
        lp_token(overrides?: CallOverrides): Promise<string>;
        minter(overrides?: CallOverrides): Promise<string>;
        reward_tokens(i: BigNumberish, overrides?: CallOverrides): Promise<string>;
        set_approve_deposit(addr: string, can_deposit: boolean, overrides?: CallOverrides): Promise<void>;
        user_checkpoint(addr: string, overrides?: CallOverrides): Promise<boolean>;
        voting_escrow(overrides?: CallOverrides): Promise<string>;
        withdraw(_value: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        claim_historic_rewards(_reward_tokens: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claim_rewards(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimable_reward(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
        claimable_tokens(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
        controller(overrides?: CallOverrides): Promise<BigNumber>;
        crv_token(overrides?: CallOverrides): Promise<BigNumber>;
        deposit(_value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        future_epoch_time(overrides?: CallOverrides): Promise<BigNumber>;
        kick(addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        lp_token(overrides?: CallOverrides): Promise<BigNumber>;
        minter(overrides?: CallOverrides): Promise<BigNumber>;
        reward_tokens(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        set_approve_deposit(addr: string, can_deposit: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        user_checkpoint(addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        voting_escrow(overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(_value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        claim_historic_rewards(_reward_tokens: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claim_rewards(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimable_reward(addr: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimable_tokens(addr: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        crv_token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deposit(_value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        future_epoch_time(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        kick(addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        lp_token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        reward_tokens(i: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        set_approve_deposit(addr: string, can_deposit: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        user_checkpoint(addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        voting_escrow(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(_value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
