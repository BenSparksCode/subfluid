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

export type ProfileDataStruct = {
  currency: string;
  amount: BigNumberish;
  recipient: string;
};

export type ProfileDataStructOutput = [string, BigNumber, string] & {
  currency: string;
  amount: BigNumber;
  recipient: string;
};

export interface FeeFollowModuleInterface extends utils.Interface {
  contractName: "FeeFollowModule";
  functions: {
    "HUB()": FunctionFragment;
    "MODULE_GLOBALS()": FunctionFragment;
    "followModuleTransferHook(uint256,address,address,uint256)": FunctionFragment;
    "getProfileData(uint256)": FunctionFragment;
    "initializeFollowModule(uint256,bytes)": FunctionFragment;
    "isFollowing(uint256,address,uint256)": FunctionFragment;
    "processFollow(address,uint256,bytes)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "HUB", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "MODULE_GLOBALS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "followModuleTransferHook",
    values: [BigNumberish, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getProfileData",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initializeFollowModule",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isFollowing",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "processFollow",
    values: [string, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "HUB", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "MODULE_GLOBALS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "followModuleTransferHook",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProfileData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializeFollowModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isFollowing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "processFollow",
    data: BytesLike
  ): Result;

  events: {};
}

export interface FeeFollowModule extends BaseContract {
  contractName: "FeeFollowModule";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FeeFollowModuleInterface;

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
    HUB(overrides?: CallOverrides): Promise<[string]>;

    MODULE_GLOBALS(overrides?: CallOverrides): Promise<[string]>;

    followModuleTransferHook(
      profileId: BigNumberish,
      from: string,
      to: string,
      followNFTTokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getProfileData(
      profileId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[ProfileDataStructOutput]>;

    initializeFollowModule(
      profileId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isFollowing(
      profileId: BigNumberish,
      follower: string,
      followNFTTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    processFollow(
      follower: string,
      profileId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  HUB(overrides?: CallOverrides): Promise<string>;

  MODULE_GLOBALS(overrides?: CallOverrides): Promise<string>;

  followModuleTransferHook(
    profileId: BigNumberish,
    from: string,
    to: string,
    followNFTTokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getProfileData(
    profileId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<ProfileDataStructOutput>;

  initializeFollowModule(
    profileId: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isFollowing(
    profileId: BigNumberish,
    follower: string,
    followNFTTokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  processFollow(
    follower: string,
    profileId: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    HUB(overrides?: CallOverrides): Promise<string>;

    MODULE_GLOBALS(overrides?: CallOverrides): Promise<string>;

    followModuleTransferHook(
      profileId: BigNumberish,
      from: string,
      to: string,
      followNFTTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getProfileData(
      profileId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<ProfileDataStructOutput>;

    initializeFollowModule(
      profileId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    isFollowing(
      profileId: BigNumberish,
      follower: string,
      followNFTTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    processFollow(
      follower: string,
      profileId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    HUB(overrides?: CallOverrides): Promise<BigNumber>;

    MODULE_GLOBALS(overrides?: CallOverrides): Promise<BigNumber>;

    followModuleTransferHook(
      profileId: BigNumberish,
      from: string,
      to: string,
      followNFTTokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getProfileData(
      profileId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initializeFollowModule(
      profileId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isFollowing(
      profileId: BigNumberish,
      follower: string,
      followNFTTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    processFollow(
      follower: string,
      profileId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    HUB(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MODULE_GLOBALS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    followModuleTransferHook(
      profileId: BigNumberish,
      from: string,
      to: string,
      followNFTTokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getProfileData(
      profileId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initializeFollowModule(
      profileId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isFollowing(
      profileId: BigNumberish,
      follower: string,
      followNFTTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    processFollow(
      follower: string,
      profileId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}