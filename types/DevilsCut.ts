/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface DevilsCutInterface extends utils.Interface {
  functions: {
    "emergencyWithdraw(address,address)": FunctionFragment;
    "emergencyWithdraw(address)": FunctionFragment;
    "ghouls()": FunctionFragment;
    "owner()": FunctionFragment;
    "releasable(address,uint256)": FunctionFragment;
    "releasable(uint256)": FunctionFragment;
    "release(uint256[])": FunctionFragment;
    "release(uint256[],address)": FunctionFragment;
    "released(uint256)": FunctionFragment;
    "released(address,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setShares(uint256)": FunctionFragment;
    "shares()": FunctionFragment;
    "totalReleased(address)": FunctionFragment;
    "totalReleased()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "emergencyWithdraw(address,address)"
      | "emergencyWithdraw(address)"
      | "ghouls"
      | "owner"
      | "releasable(address,uint256)"
      | "releasable(uint256)"
      | "release(uint256[])"
      | "release(uint256[],address)"
      | "released(uint256)"
      | "released(address,uint256)"
      | "renounceOwnership"
      | "setShares"
      | "shares"
      | "totalReleased(address)"
      | "totalReleased()"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "emergencyWithdraw(address,address)",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyWithdraw(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "ghouls", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "releasable(address,uint256)",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "releasable(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "release(uint256[])",
    values: [PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "release(uint256[],address)",
    values: [PromiseOrValue<BigNumberish>[], PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "released(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "released(address,uint256)",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setShares",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "shares", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalReleased(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "totalReleased()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "emergencyWithdraw(address,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emergencyWithdraw(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ghouls", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "releasable(address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "releasable(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "release(uint256[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "release(uint256[],address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "released(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "released(address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setShares", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "shares", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalReleased(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalReleased()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "ERC20PaymentReleased(address,address,uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "PaymentReceived(address,uint256)": EventFragment;
    "PaymentReleased(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ERC20PaymentReleased"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PaymentReceived"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PaymentReleased"): EventFragment;
}

export interface ERC20PaymentReleasedEventObject {
  token: string;
  to: string;
  amount: BigNumber;
  tokenId: BigNumber;
}
export type ERC20PaymentReleasedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  ERC20PaymentReleasedEventObject
>;

export type ERC20PaymentReleasedEventFilter =
  TypedEventFilter<ERC20PaymentReleasedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface PaymentReceivedEventObject {
  from: string;
  amount: BigNumber;
}
export type PaymentReceivedEvent = TypedEvent<
  [string, BigNumber],
  PaymentReceivedEventObject
>;

export type PaymentReceivedEventFilter = TypedEventFilter<PaymentReceivedEvent>;

export interface PaymentReleasedEventObject {
  to: string;
  amount: BigNumber;
  tokenId: BigNumber;
}
export type PaymentReleasedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  PaymentReleasedEventObject
>;

export type PaymentReleasedEventFilter = TypedEventFilter<PaymentReleasedEvent>;

export interface DevilsCut extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DevilsCutInterface;

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
    "emergencyWithdraw(address,address)"(
      receiver: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "emergencyWithdraw(address)"(
      receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    ghouls(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "releasable(address,uint256)"(
      token: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "releasable(uint256)"(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "release(uint256[])"(
      ids: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "release(uint256[],address)"(
      ids: PromiseOrValue<BigNumberish>[],
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "released(uint256)"(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "released(address,uint256)"(
      token: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setShares(
      share_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    shares(overrides?: CallOverrides): Promise<[BigNumber]>;

    "totalReleased(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "totalReleased()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  "emergencyWithdraw(address,address)"(
    receiver: PromiseOrValue<string>,
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "emergencyWithdraw(address)"(
    receiver: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  ghouls(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "releasable(address,uint256)"(
    token: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "releasable(uint256)"(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "release(uint256[])"(
    ids: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "release(uint256[],address)"(
    ids: PromiseOrValue<BigNumberish>[],
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "released(uint256)"(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "released(address,uint256)"(
    token: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setShares(
    share_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  shares(overrides?: CallOverrides): Promise<BigNumber>;

  "totalReleased(address)"(
    token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "totalReleased()"(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    "emergencyWithdraw(address,address)"(
      receiver: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "emergencyWithdraw(address)"(
      receiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    ghouls(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "releasable(address,uint256)"(
      token: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "releasable(uint256)"(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "release(uint256[])"(
      ids: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    "release(uint256[],address)"(
      ids: PromiseOrValue<BigNumberish>[],
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "released(uint256)"(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "released(address,uint256)"(
      token: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setShares(
      share_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    shares(overrides?: CallOverrides): Promise<BigNumber>;

    "totalReleased(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalReleased()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ERC20PaymentReleased(address,address,uint256,uint256)"(
      token?: PromiseOrValue<string> | null,
      to?: null,
      amount?: null,
      tokenId?: null
    ): ERC20PaymentReleasedEventFilter;
    ERC20PaymentReleased(
      token?: PromiseOrValue<string> | null,
      to?: null,
      amount?: null,
      tokenId?: null
    ): ERC20PaymentReleasedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "PaymentReceived(address,uint256)"(
      from?: null,
      amount?: null
    ): PaymentReceivedEventFilter;
    PaymentReceived(from?: null, amount?: null): PaymentReceivedEventFilter;

    "PaymentReleased(address,uint256,uint256)"(
      to?: null,
      amount?: null,
      tokenId?: null
    ): PaymentReleasedEventFilter;
    PaymentReleased(
      to?: null,
      amount?: null,
      tokenId?: null
    ): PaymentReleasedEventFilter;
  };

  estimateGas: {
    "emergencyWithdraw(address,address)"(
      receiver: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "emergencyWithdraw(address)"(
      receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    ghouls(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "releasable(address,uint256)"(
      token: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "releasable(uint256)"(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "release(uint256[])"(
      ids: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "release(uint256[],address)"(
      ids: PromiseOrValue<BigNumberish>[],
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "released(uint256)"(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "released(address,uint256)"(
      token: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setShares(
      share_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    shares(overrides?: CallOverrides): Promise<BigNumber>;

    "totalReleased(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalReleased()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    "emergencyWithdraw(address,address)"(
      receiver: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "emergencyWithdraw(address)"(
      receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    ghouls(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "releasable(address,uint256)"(
      token: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "releasable(uint256)"(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "release(uint256[])"(
      ids: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "release(uint256[],address)"(
      ids: PromiseOrValue<BigNumberish>[],
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "released(uint256)"(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "released(address,uint256)"(
      token: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setShares(
      share_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    shares(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalReleased(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "totalReleased()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}