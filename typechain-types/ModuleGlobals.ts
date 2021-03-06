/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ModuleGlobalsInterface extends utils.Interface {
  contractName: "ModuleGlobals";
  functions: {
    "getGovernance()": FunctionFragment;
    "getTreasury()": FunctionFragment;
    "getTreasuryData()": FunctionFragment;
    "getTreasuryFee()": FunctionFragment;
    "isCurrencyWhitelisted(address)": FunctionFragment;
    "setGovernance(address)": FunctionFragment;
    "setTreasury(address)": FunctionFragment;
    "setTreasuryFee(uint16)": FunctionFragment;
    "whitelistCurrency(address,bool)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getGovernance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTreasury",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTreasuryData",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTreasuryFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isCurrencyWhitelisted",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setGovernance",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setTreasury", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setTreasuryFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "whitelistCurrency",
    values: [string, boolean]
  ): string;

  decodeFunctionResult(
    functionFragment: "getGovernance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTreasuryData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTreasuryFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isCurrencyWhitelisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGovernance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTreasuryFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "whitelistCurrency",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ModuleGlobals extends BaseContract {
  contractName: "ModuleGlobals";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ModuleGlobalsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getGovernance(overrides?: CallOverrides): Promise<[string]>;

    getTreasury(overrides?: CallOverrides): Promise<[string]>;

    getTreasuryData(overrides?: CallOverrides): Promise<[string, number]>;

    getTreasuryFee(overrides?: CallOverrides): Promise<[number]>;

    isCurrencyWhitelisted(
      currency: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    setGovernance(
      newGovernance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTreasury(
      newTreasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTreasuryFee(
      newTreasuryFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    whitelistCurrency(
      currency: string,
      toWhitelist: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getGovernance(overrides?: CallOverrides): Promise<string>;

  getTreasury(overrides?: CallOverrides): Promise<string>;

  getTreasuryData(overrides?: CallOverrides): Promise<[string, number]>;

  getTreasuryFee(overrides?: CallOverrides): Promise<number>;

  isCurrencyWhitelisted(
    currency: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  setGovernance(
    newGovernance: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTreasury(
    newTreasury: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTreasuryFee(
    newTreasuryFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  whitelistCurrency(
    currency: string,
    toWhitelist: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getGovernance(overrides?: CallOverrides): Promise<string>;

    getTreasury(overrides?: CallOverrides): Promise<string>;

    getTreasuryData(overrides?: CallOverrides): Promise<[string, number]>;

    getTreasuryFee(overrides?: CallOverrides): Promise<number>;

    isCurrencyWhitelisted(
      currency: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setGovernance(
      newGovernance: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setTreasury(newTreasury: string, overrides?: CallOverrides): Promise<void>;

    setTreasuryFee(
      newTreasuryFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    whitelistCurrency(
      currency: string,
      toWhitelist: boolean,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getGovernance(overrides?: CallOverrides): Promise<BigNumber>;

    getTreasury(overrides?: CallOverrides): Promise<BigNumber>;

    getTreasuryData(overrides?: CallOverrides): Promise<BigNumber>;

    getTreasuryFee(overrides?: CallOverrides): Promise<BigNumber>;

    isCurrencyWhitelisted(
      currency: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setGovernance(
      newGovernance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTreasury(
      newTreasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTreasuryFee(
      newTreasuryFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    whitelistCurrency(
      currency: string,
      toWhitelist: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getGovernance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTreasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTreasuryData(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTreasuryFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isCurrencyWhitelisted(
      currency: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setGovernance(
      newGovernance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTreasury(
      newTreasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTreasuryFee(
      newTreasuryFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    whitelistCurrency(
      currency: string,
      toWhitelist: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
