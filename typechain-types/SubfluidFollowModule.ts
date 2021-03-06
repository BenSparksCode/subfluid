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
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface SubfluidFollowModuleInterface extends utils.Interface {
  contractName: "SubfluidFollowModule";
  functions: {
    "CFA()": FunctionFragment;
    "DAI()": FunctionFragment;
    "DAIx()": FunctionFragment;
    "HUB()": FunctionFragment;
    "SUPERFLUID()": FunctionFragment;
    "followModuleTransferHook(uint256,address,address,uint256)": FunctionFragment;
    "initializeFollowModule(uint256,bytes)": FunctionFragment;
    "isFollowing(uint256,address,uint256)": FunctionFragment;
    "processFollow(address,uint256,bytes)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "CFA", values?: undefined): string;
  encodeFunctionData(functionFragment: "DAI", values?: undefined): string;
  encodeFunctionData(functionFragment: "DAIx", values?: undefined): string;
  encodeFunctionData(functionFragment: "HUB", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "SUPERFLUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "followModuleTransferHook",
    values: [BigNumberish, string, string, BigNumberish]
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

  decodeFunctionResult(functionFragment: "CFA", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "DAI", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "DAIx", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "HUB", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "SUPERFLUID", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "followModuleTransferHook",
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

  events: {
    "SubfluidFollow(address,address)": EventFragment;
    "SubfluidFollowInitialized(uint256,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SubfluidFollow"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SubfluidFollowInitialized"): EventFragment;
}

export type SubfluidFollowEvent = TypedEvent<
  [string, string],
  { follower: string; recipient: string }
>;

export type SubfluidFollowEventFilter = TypedEventFilter<SubfluidFollowEvent>;

export type SubfluidFollowInitializedEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  { profileId: BigNumber; recipientAddress: string; subscribeRate: BigNumber }
>;

export type SubfluidFollowInitializedEventFilter =
  TypedEventFilter<SubfluidFollowInitializedEvent>;

export interface SubfluidFollowModule extends BaseContract {
  contractName: "SubfluidFollowModule";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SubfluidFollowModuleInterface;

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
    CFA(overrides?: CallOverrides): Promise<[string]>;

    DAI(overrides?: CallOverrides): Promise<[string]>;

    DAIx(overrides?: CallOverrides): Promise<[string]>;

    HUB(overrides?: CallOverrides): Promise<[string]>;

    SUPERFLUID(overrides?: CallOverrides): Promise<[string]>;

    followModuleTransferHook(
      profileId: BigNumberish,
      from: string,
      to: string,
      followNFTTokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

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

  CFA(overrides?: CallOverrides): Promise<string>;

  DAI(overrides?: CallOverrides): Promise<string>;

  DAIx(overrides?: CallOverrides): Promise<string>;

  HUB(overrides?: CallOverrides): Promise<string>;

  SUPERFLUID(overrides?: CallOverrides): Promise<string>;

  followModuleTransferHook(
    profileId: BigNumberish,
    from: string,
    to: string,
    followNFTTokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

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
    CFA(overrides?: CallOverrides): Promise<string>;

    DAI(overrides?: CallOverrides): Promise<string>;

    DAIx(overrides?: CallOverrides): Promise<string>;

    HUB(overrides?: CallOverrides): Promise<string>;

    SUPERFLUID(overrides?: CallOverrides): Promise<string>;

    followModuleTransferHook(
      profileId: BigNumberish,
      from: string,
      to: string,
      followNFTTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

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

  filters: {
    "SubfluidFollow(address,address)"(
      follower?: string | null,
      recipient?: string | null
    ): SubfluidFollowEventFilter;
    SubfluidFollow(
      follower?: string | null,
      recipient?: string | null
    ): SubfluidFollowEventFilter;

    "SubfluidFollowInitialized(uint256,address,uint256)"(
      profileId?: BigNumberish | null,
      recipientAddress?: string | null,
      subscribeRate?: null
    ): SubfluidFollowInitializedEventFilter;
    SubfluidFollowInitialized(
      profileId?: BigNumberish | null,
      recipientAddress?: string | null,
      subscribeRate?: null
    ): SubfluidFollowInitializedEventFilter;
  };

  estimateGas: {
    CFA(overrides?: CallOverrides): Promise<BigNumber>;

    DAI(overrides?: CallOverrides): Promise<BigNumber>;

    DAIx(overrides?: CallOverrides): Promise<BigNumber>;

    HUB(overrides?: CallOverrides): Promise<BigNumber>;

    SUPERFLUID(overrides?: CallOverrides): Promise<BigNumber>;

    followModuleTransferHook(
      profileId: BigNumberish,
      from: string,
      to: string,
      followNFTTokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
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
    CFA(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DAI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DAIx(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    HUB(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SUPERFLUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    followModuleTransferHook(
      profileId: BigNumberish,
      from: string,
      to: string,
      followNFTTokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
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
