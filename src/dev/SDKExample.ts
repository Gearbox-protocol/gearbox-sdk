import { readFile, writeFile } from "node:fs/promises";

import type { Address } from "viem";
import { isAddress, parseEther, stringToHex } from "viem";

import type { ILogger } from "../sdk";
import {
  ADDRESS_PROVIDER,
  GearboxSDK,
  iAddressProviderV300Abi,
  iAddressProviderV310Abi,
  json_stringify,
} from "../sdk";
import { createAnvilClient } from "./createAnvilClient";

export interface SDKExampleOptions {
  addressProvider?: string;
  addressProviderJson?: string;
  marketConfigurators: Address[];
  anvilUrl?: string;
  outFile?: string;
}

export class SDKExample {
  #sdk?: GearboxSDK;
  #logger?: ILogger;

  constructor(logger?: ILogger) {
    this.#logger = logger;
  }

  public async run(opts: SDKExampleOptions) {
    const {
      addressProvider: ap,
      addressProviderJson,
      marketConfigurators,
      anvilUrl = "http://127.0.0.1:8545",
      outFile,
    } = opts;
    const addressProvider = await this.#readConfigAddress(
      "addressProvider",
      ap,
      addressProviderJson,
    );

    this.#sdk = await GearboxSDK.attach({
      rpcURLs: [anvilUrl],
      timeout: 480_000,
      addressProvider,
      logger: this.#logger,
      ignoreUpdateablePrices: false,
      marketConfigurators,
    });
    this.#logger?.info("attached sdk");
    try {
      await this.#sdk.marketRegister.loadZappers();
    } catch (e) {
      this.#logger?.error(`failed to load zappers: ${e}`);
    }
    await this.#safeMigrateFaucet(addressProvider);

    await Promise.allSettled(
      this.#sdk.marketRegister.marketConfigurators.map(m =>
        m.loadCuratorName(),
      ),
    );
    this.#logger?.info("loaded curator names");

    if (outFile) {
      try {
        await writeFile(
          outFile,
          json_stringify(this.#sdk.stateHuman()),
          "utf-8",
        );
      } catch (e) {
        this.#logger?.error(`failed to write to ${outFile}: ${e}`);
      }
    }
  }

  async #readConfigAddress(
    name: string,
    value?: string,
    file?: string,
  ): Promise<Address> {
    let result = value;

    if (!result) {
      if (!file) {
        throw new Error(`${name} is not specified`);
      }

      this.#logger?.debug(`reading ${name} json ${file}`);
      const apFile = await readFile(file, "utf-8").then(JSON.parse);
      result = apFile[name];
    }
    if (!result) {
      throw new Error(`${name} is not specified`);
    }
    if (!isAddress(result)) {
      throw new Error(`${name} is not a valid address: ${result}`);
    }

    this.#logger?.info(`using ${name} ${result}`);
    return result;
  }

  async #safeMigrateFaucet(addressProvider: Address): Promise<void> {
    try {
      await this.#migrateFaucet(addressProvider);
      this.#logger?.info("faucet migrated successfully");
    } catch (e) {
      this.#logger?.error(`faucet migration failed: ${e}`);
    }
  }

  /**
   * Migrates faucet from address provider v3 to v3.1
   * @param addressProvider 3.1 address provider
   */
  async #migrateFaucet(addressProvider: Address): Promise<void> {
    const anvil = createAnvilClient({
      chain: this.sdk.provider.chain,
      transport: this.sdk.provider.transport,
    });

    const [faucetAddr, owner] = await anvil.multicall({
      contracts: [
        {
          abi: iAddressProviderV300Abi,
          address: ADDRESS_PROVIDER[this.sdk.provider.networkType],
          functionName: "getAddressOrRevert",
          args: [stringToHex("FAUCET", { size: 32 }), 0n],
        },
        {
          abi: iAddressProviderV310Abi,
          address: addressProvider,
          functionName: "owner",
          args: [],
        },
      ],
      allowFailure: false,
    });
    this.#logger?.debug(`faucet address: ${faucetAddr}, owner: ${owner}`);
    await anvil.impersonateAccount({ address: owner });
    await anvil.setBalance({
      address: owner,
      value: parseEther("100"),
    });
    await anvil.setBlockTimestampInterval({ interval: 0 });
    const hash = await anvil.writeContract({
      chain: anvil.chain,
      account: owner,
      address: addressProvider,
      abi: iAddressProviderV310Abi,
      functionName: "setAddress",
      args: [stringToHex("FAUCET", { size: 32 }), faucetAddr, true],
    });
    const receipt = await anvil.waitForTransactionReceipt({ hash });
    await anvil.removeBlockTimestampInterval();
    await anvil.stopImpersonatingAccount({ address: owner });
    if (receipt.status === "reverted") {
      throw new Error("faucet migration reverted");
    }
  }

  public get sdk(): GearboxSDK {
    if (!this.#sdk) {
      throw new Error("sdk is not attached");
    }
    return this.#sdk;
  }
}
