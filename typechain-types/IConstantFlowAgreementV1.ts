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

export interface IConstantFlowAgreementV1Interface extends utils.Interface {
  contractName: "IConstantFlowAgreementV1";
  functions: {
    "agreementType()": FunctionFragment;
    "authorizeFlowOperatorWithFullControl(address,address,bytes)": FunctionFragment;
    "createFlow(address,address,int96,bytes)": FunctionFragment;
    "createFlowByOperator(address,address,address,int96,bytes)": FunctionFragment;
    "deleteFlow(address,address,address,bytes)": FunctionFragment;
    "deleteFlowByOperator(address,address,address,bytes)": FunctionFragment;
    "getAccountFlowInfo(address,address)": FunctionFragment;
    "getDepositRequiredForFlowRate(address,int96)": FunctionFragment;
    "getFlow(address,address,address)": FunctionFragment;
    "getFlowByID(address,bytes32)": FunctionFragment;
    "getFlowOperatorData(address,address,address)": FunctionFragment;
    "getFlowOperatorDataByID(address,bytes32)": FunctionFragment;
    "getMaximumFlowRateFromDeposit(address,uint256)": FunctionFragment;
    "getNetFlow(address,address)": FunctionFragment;
    "isPatricianPeriod(address,address,uint256)": FunctionFragment;
    "isPatricianPeriodNow(address,address)": FunctionFragment;
    "realtimeBalanceOf(address,address,uint256)": FunctionFragment;
    "revokeFlowOperatorWithFullControl(address,address,bytes)": FunctionFragment;
    "updateFlow(address,address,int96,bytes)": FunctionFragment;
    "updateFlowByOperator(address,address,address,int96,bytes)": FunctionFragment;
    "updateFlowOperatorPermissions(address,address,uint8,int96,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "agreementType",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "authorizeFlowOperatorWithFullControl",
    values: [string, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createFlow",
    values: [string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createFlowByOperator",
    values: [string, string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "deleteFlow",
    values: [string, string, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "deleteFlowByOperator",
    values: [string, string, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getAccountFlowInfo",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getDepositRequiredForFlowRate",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getFlow",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getFlowByID",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getFlowOperatorData",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getFlowOperatorDataByID",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getMaximumFlowRateFromDeposit",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getNetFlow",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isPatricianPeriod",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isPatricianPeriodNow",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "realtimeBalanceOf",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeFlowOperatorWithFullControl",
    values: [string, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateFlow",
    values: [string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateFlowByOperator",
    values: [string, string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateFlowOperatorPermissions",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "agreementType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "authorizeFlowOperatorWithFullControl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "createFlow", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createFlowByOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deleteFlow", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deleteFlowByOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAccountFlowInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDepositRequiredForFlowRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getFlow", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getFlowByID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFlowOperatorData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFlowOperatorDataByID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMaximumFlowRateFromDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getNetFlow", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isPatricianPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isPatricianPeriodNow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "realtimeBalanceOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revokeFlowOperatorWithFullControl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "updateFlow", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateFlowByOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateFlowOperatorPermissions",
    data: BytesLike
  ): Result;

  events: {
    "FlowOperatorUpdated(address,address,address,uint8,int96)": EventFragment;
    "FlowUpdated(address,address,address,int96,int256,int256,bytes)": EventFragment;
    "FlowUpdatedExtension(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FlowOperatorUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FlowUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FlowUpdatedExtension"): EventFragment;
}

export type FlowOperatorUpdatedEvent = TypedEvent<
  [string, string, string, number, BigNumber],
  {
    token: string;
    sender: string;
    flowOperator: string;
    permissions: number;
    flowRateAllowance: BigNumber;
  }
>;

export type FlowOperatorUpdatedEventFilter =
  TypedEventFilter<FlowOperatorUpdatedEvent>;

export type FlowUpdatedEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber, BigNumber, string],
  {
    token: string;
    sender: string;
    receiver: string;
    flowRate: BigNumber;
    totalSenderFlowRate: BigNumber;
    totalReceiverFlowRate: BigNumber;
    userData: string;
  }
>;

export type FlowUpdatedEventFilter = TypedEventFilter<FlowUpdatedEvent>;

export type FlowUpdatedExtensionEvent = TypedEvent<
  [string, BigNumber],
  { flowOperator: string; deposit: BigNumber }
>;

export type FlowUpdatedExtensionEventFilter =
  TypedEventFilter<FlowUpdatedExtensionEvent>;

export interface IConstantFlowAgreementV1 extends BaseContract {
  contractName: "IConstantFlowAgreementV1";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IConstantFlowAgreementV1Interface;

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
    agreementType(overrides?: CallOverrides): Promise<[string]>;

    authorizeFlowOperatorWithFullControl(
      token: string,
      flowOperator: string,
      ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createFlow(
      token: string,
      receiver: string,
      flowRate: BigNumberish,
      ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createFlowByOperator(
      token: string,
      sender: string,
      receiver: string,
      flowRate: BigNumberish,
      ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deleteFlow(
      token: string,
      sender: string,
      receiver: string,
      ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deleteFlowByOperator(
      token: string,
      sender: string,
      receiver: string,
      ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAccountFlowInfo(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        timestamp: BigNumber;
        flowRate: BigNumber;
        deposit: BigNumber;
        owedDeposit: BigNumber;
      }
    >;

    getDepositRequiredForFlowRate(
      token: string,
      flowRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { deposit: BigNumber }>;

    getFlow(
      token: string,
      sender: string,
      receiver: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        timestamp: BigNumber;
        flowRate: BigNumber;
        deposit: BigNumber;
        owedDeposit: BigNumber;
      }
    >;

    getFlowByID(
      token: string,
      agreementId: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        timestamp: BigNumber;
        flowRate: BigNumber;
        deposit: BigNumber;
        owedDeposit: BigNumber;
      }
    >;

    getFlowOperatorData(
      token: string,
      sender: string,
      flowOperator: string,
      overrides?: CallOverrides
    ): Promise<
      [string, number, BigNumber] & {
        flowOperatorId: string;
        permissions: number;
        flowRateAllowance: BigNumber;
      }
    >;

    getFlowOperatorDataByID(
      token: string,
      flowOperatorId: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [number, BigNumber] & {
        permissions: number;
        flowRateAllowance: BigNumber;
      }
    >;

    getMaximumFlowRateFromDeposit(
      token: string,
      deposit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { flowRate: BigNumber }>;

    getNetFlow(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { flowRate: BigNumber }>;

    isPatricianPeriod(
      token: string,
      account: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isPatricianPeriodNow(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber] & {
        isCurrentlyPatricianPeriod: boolean;
        timestamp: BigNumber;
      }
    >;

    realtimeBalanceOf(
      token: string,
      account: string,
      time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        dynamicBalance: BigNumber;
        deposit: BigNumber;
        owedDeposit: BigNumber;
      }
    >;

    revokeFlowOperatorWithFullControl(
      token: string,
      flowOperator: string,
      ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateFlow(
      token: string,
      receiver: string,
      flowRate: BigNumberish,
      ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateFlowByOperator(
      token: string,
      sender: string,
      receiver: string,
      flowRate: BigNumberish,
      ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateFlowOperatorPermissions(
      token: string,
      flowOperator: string,
      permissions: BigNumberish,
      flowRateAllowance: BigNumberish,
      ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  agreementType(overrides?: CallOverrides): Promise<string>;

  authorizeFlowOperatorWithFullControl(
    token: string,
    flowOperator: string,
    ctx: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createFlow(
    token: string,
    receiver: string,
    flowRate: BigNumberish,
    ctx: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createFlowByOperator(
    token: string,
    sender: string,
    receiver: string,
    flowRate: BigNumberish,
    ctx: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deleteFlow(
    token: string,
    sender: string,
    receiver: string,
    ctx: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deleteFlowByOperator(
    token: string,
    sender: string,
    receiver: string,
    ctx: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAccountFlowInfo(
    token: string,
    account: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      timestamp: BigNumber;
      flowRate: BigNumber;
      deposit: BigNumber;
      owedDeposit: BigNumber;
    }
  >;

  getDepositRequiredForFlowRate(
    token: string,
    flowRate: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getFlow(
    token: string,
    sender: string,
    receiver: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      timestamp: BigNumber;
      flowRate: BigNumber;
      deposit: BigNumber;
      owedDeposit: BigNumber;
    }
  >;

  getFlowByID(
    token: string,
    agreementId: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      timestamp: BigNumber;
      flowRate: BigNumber;
      deposit: BigNumber;
      owedDeposit: BigNumber;
    }
  >;

  getFlowOperatorData(
    token: string,
    sender: string,
    flowOperator: string,
    overrides?: CallOverrides
  ): Promise<
    [string, number, BigNumber] & {
      flowOperatorId: string;
      permissions: number;
      flowRateAllowance: BigNumber;
    }
  >;

  getFlowOperatorDataByID(
    token: string,
    flowOperatorId: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [number, BigNumber] & { permissions: number; flowRateAllowance: BigNumber }
  >;

  getMaximumFlowRateFromDeposit(
    token: string,
    deposit: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getNetFlow(
    token: string,
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isPatricianPeriod(
    token: string,
    account: string,
    timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isPatricianPeriodNow(
    token: string,
    account: string,
    overrides?: CallOverrides
  ): Promise<
    [boolean, BigNumber] & {
      isCurrentlyPatricianPeriod: boolean;
      timestamp: BigNumber;
    }
  >;

  realtimeBalanceOf(
    token: string,
    account: string,
    time: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      dynamicBalance: BigNumber;
      deposit: BigNumber;
      owedDeposit: BigNumber;
    }
  >;

  revokeFlowOperatorWithFullControl(
    token: string,
    flowOperator: string,
    ctx: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateFlow(
    token: string,
    receiver: string,
    flowRate: BigNumberish,
    ctx: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateFlowByOperator(
    token: string,
    sender: string,
    receiver: string,
    flowRate: BigNumberish,
    ctx: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateFlowOperatorPermissions(
    token: string,
    flowOperator: string,
    permissions: BigNumberish,
    flowRateAllowance: BigNumberish,
    ctx: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    agreementType(overrides?: CallOverrides): Promise<string>;

    authorizeFlowOperatorWithFullControl(
      token: string,
      flowOperator: string,
      ctx: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    createFlow(
      token: string,
      receiver: string,
      flowRate: BigNumberish,
      ctx: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    createFlowByOperator(
      token: string,
      sender: string,
      receiver: string,
      flowRate: BigNumberish,
      ctx: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    deleteFlow(
      token: string,
      sender: string,
      receiver: string,
      ctx: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    deleteFlowByOperator(
      token: string,
      sender: string,
      receiver: string,
      ctx: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getAccountFlowInfo(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        timestamp: BigNumber;
        flowRate: BigNumber;
        deposit: BigNumber;
        owedDeposit: BigNumber;
      }
    >;

    getDepositRequiredForFlowRate(
      token: string,
      flowRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFlow(
      token: string,
      sender: string,
      receiver: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        timestamp: BigNumber;
        flowRate: BigNumber;
        deposit: BigNumber;
        owedDeposit: BigNumber;
      }
    >;

    getFlowByID(
      token: string,
      agreementId: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        timestamp: BigNumber;
        flowRate: BigNumber;
        deposit: BigNumber;
        owedDeposit: BigNumber;
      }
    >;

    getFlowOperatorData(
      token: string,
      sender: string,
      flowOperator: string,
      overrides?: CallOverrides
    ): Promise<
      [string, number, BigNumber] & {
        flowOperatorId: string;
        permissions: number;
        flowRateAllowance: BigNumber;
      }
    >;

    getFlowOperatorDataByID(
      token: string,
      flowOperatorId: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [number, BigNumber] & {
        permissions: number;
        flowRateAllowance: BigNumber;
      }
    >;

    getMaximumFlowRateFromDeposit(
      token: string,
      deposit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNetFlow(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isPatricianPeriod(
      token: string,
      account: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isPatricianPeriodNow(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber] & {
        isCurrentlyPatricianPeriod: boolean;
        timestamp: BigNumber;
      }
    >;

    realtimeBalanceOf(
      token: string,
      account: string,
      time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        dynamicBalance: BigNumber;
        deposit: BigNumber;
        owedDeposit: BigNumber;
      }
    >;

    revokeFlowOperatorWithFullControl(
      token: string,
      flowOperator: string,
      ctx: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    updateFlow(
      token: string,
      receiver: string,
      flowRate: BigNumberish,
      ctx: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    updateFlowByOperator(
      token: string,
      sender: string,
      receiver: string,
      flowRate: BigNumberish,
      ctx: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    updateFlowOperatorPermissions(
      token: string,
      flowOperator: string,
      permissions: BigNumberish,
      flowRateAllowance: BigNumberish,
      ctx: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "FlowOperatorUpdated(address,address,address,uint8,int96)"(
      token?: string | null,
      sender?: string | null,
      flowOperator?: string | null,
      permissions?: null,
      flowRateAllowance?: null
    ): FlowOperatorUpdatedEventFilter;
    FlowOperatorUpdated(
      token?: string | null,
      sender?: string | null,
      flowOperator?: string | null,
      permissions?: null,
      flowRateAllowance?: null
    ): FlowOperatorUpdatedEventFilter;

    "FlowUpdated(address,address,address,int96,int256,int256,bytes)"(
      token?: string | null,
      sender?: string | null,
      receiver?: string | null,
      flowRate?: null,
      totalSenderFlowRate?: null,
      totalReceiverFlowRate?: null,
      userData?: null
    ): FlowUpdatedEventFilter;
    FlowUpdated(
      token?: string | null,
      sender?: string | null,
      receiver?: string | null,
      flowRate?: null,
      totalSenderFlowRate?: null,
      totalReceiverFlowRate?: null,
      userData?: null
    ): FlowUpdatedEventFilter;

    "FlowUpdatedExtension(address,uint256)"(
      flowOperator?: string | null,
      deposit?: null
    ): FlowUpdatedExtensionEventFilter;
    FlowUpdatedExtension(
      flowOperator?: string | null,
      deposit?: null
    ): FlowUpdatedExtensionEventFilter;
  };

  estimateGas: {
    agreementType(overrides?: CallOverrides): Promise<BigNumber>;

    authorizeFlowOperatorWithFullControl(
      token: string,
      flowOperator: string,
      ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createFlow(
      token: string,
      receiver: string,
      flowRate: BigNumberish,
      ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createFlowByOperator(
      token: string,
      sender: string,
      receiver: string,
      flowRate: BigNumberish,
      ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deleteFlow(
      token: string,
      sender: string,
      receiver: string,
      ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deleteFlowByOperator(
      token: string,
      sender: string,
      receiver: string,
      ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAccountFlowInfo(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDepositRequiredForFlowRate(
      token: string,
      flowRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFlow(
      token: string,
      sender: string,
      receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFlowByID(
      token: string,
      agreementId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFlowOperatorData(
      token: string,
      sender: string,
      flowOperator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFlowOperatorDataByID(
      token: string,
      flowOperatorId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMaximumFlowRateFromDeposit(
      token: string,
      deposit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNetFlow(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isPatricianPeriod(
      token: string,
      account: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isPatricianPeriodNow(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    realtimeBalanceOf(
      token: string,
      account: string,
      time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    revokeFlowOperatorWithFullControl(
      token: string,
      flowOperator: string,
      ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateFlow(
      token: string,
      receiver: string,
      flowRate: BigNumberish,
      ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateFlowByOperator(
      token: string,
      sender: string,
      receiver: string,
      flowRate: BigNumberish,
      ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateFlowOperatorPermissions(
      token: string,
      flowOperator: string,
      permissions: BigNumberish,
      flowRateAllowance: BigNumberish,
      ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    agreementType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    authorizeFlowOperatorWithFullControl(
      token: string,
      flowOperator: string,
      ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createFlow(
      token: string,
      receiver: string,
      flowRate: BigNumberish,
      ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createFlowByOperator(
      token: string,
      sender: string,
      receiver: string,
      flowRate: BigNumberish,
      ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deleteFlow(
      token: string,
      sender: string,
      receiver: string,
      ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deleteFlowByOperator(
      token: string,
      sender: string,
      receiver: string,
      ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAccountFlowInfo(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDepositRequiredForFlowRate(
      token: string,
      flowRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFlow(
      token: string,
      sender: string,
      receiver: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFlowByID(
      token: string,
      agreementId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFlowOperatorData(
      token: string,
      sender: string,
      flowOperator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFlowOperatorDataByID(
      token: string,
      flowOperatorId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMaximumFlowRateFromDeposit(
      token: string,
      deposit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNetFlow(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isPatricianPeriod(
      token: string,
      account: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isPatricianPeriodNow(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    realtimeBalanceOf(
      token: string,
      account: string,
      time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    revokeFlowOperatorWithFullControl(
      token: string,
      flowOperator: string,
      ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateFlow(
      token: string,
      receiver: string,
      flowRate: BigNumberish,
      ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateFlowByOperator(
      token: string,
      sender: string,
      receiver: string,
      flowRate: BigNumberish,
      ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateFlowOperatorPermissions(
      token: string,
      flowOperator: string,
      permissions: BigNumberish,
      flowRateAllowance: BigNumberish,
      ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
