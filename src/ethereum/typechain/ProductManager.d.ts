/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ProductManagerInterface extends ethers.utils.Interface {
  functions: {
    "addDiscount(uint256)": FunctionFragment;
    "bookedDates(uint256,uint256)": FunctionFragment;
    "bookings()": FunctionFragment;
    "cancellationFee()": FunctionFragment;
    "createAgreement(uint256,uint256,uint256)": FunctionFragment;
    "description()": FunctionFragment;
    "discounts(uint256)": FunctionFragment;
    "emitEndEvent(address)": FunctionFragment;
    "emitNewRentingEvent(address,address,string)": FunctionFragment;
    "endAgreement()": FunctionFragment;
    "endingTime(uint256)": FunctionFragment;
    "getBookedDates()": FunctionFragment;
    "getDiscounts()": FunctionFragment;
    "getNumberOfRents()": FunctionFragment;
    "isAuthorised(address)": FunctionFragment;
    "isRentValid(address)": FunctionFragment;
    "isRented()": FunctionFragment;
    "itemId()": FunctionFragment;
    "lessorAddress()": FunctionFragment;
    "lessorName()": FunctionFragment;
    "location()": FunctionFragment;
    "manager()": FunctionFragment;
    "maxRent()": FunctionFragment;
    "possibleRents(uint256)": FunctionFragment;
    "removeDiscount(uint256)": FunctionFragment;
    "rents(uint256)": FunctionFragment;
    "security()": FunctionFragment;
    "startingTime(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addDiscount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "bookedDates",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "bookings", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "cancellationFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createAgreement",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "description",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "discounts",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "emitEndEvent",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "emitNewRentingEvent",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "endAgreement",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "endingTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getBookedDates",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDiscounts",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNumberOfRents",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isAuthorised",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "isRentValid", values: [string]): string;
  encodeFunctionData(functionFragment: "isRented", values?: undefined): string;
  encodeFunctionData(functionFragment: "itemId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lessorAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lessorName",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "location", values?: undefined): string;
  encodeFunctionData(functionFragment: "manager", values?: undefined): string;
  encodeFunctionData(functionFragment: "maxRent", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "possibleRents",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeDiscount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "rents", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "security", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "startingTime",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addDiscount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bookedDates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bookings", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cancellationFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createAgreement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "description",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "discounts", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emitEndEvent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emitNewRentingEvent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "endAgreement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "endingTime", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getBookedDates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDiscounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNumberOfRents",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAuthorised",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isRentValid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isRented", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "itemId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lessorAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lessorName", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "location", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "manager", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maxRent", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "possibleRents",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeDiscount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rents", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "security", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "startingTime",
    data: BytesLike
  ): Result;

  events: {
    "EndRentalContract(address,address)": EventFragment;
    "NewRentalContract(address,address,uint256,uint256,uint256,uint256,uint256,uint256,string)": EventFragment;
    "NewRenting(address,address,address,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "EndRentalContract"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewRentalContract"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewRenting"): EventFragment;
}

export class ProductManager extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ProductManagerInterface;

  functions: {
    addDiscount(
      _discount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addDiscount(uint256)"(
      _discount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    bookedDates(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "bookedDates(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    bookings(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "bookings()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    cancellationFee(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "cancellationFee()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    createAgreement(
      _incentive: BigNumberish,
      start: BigNumberish,
      end: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createAgreement(uint256,uint256,uint256)"(
      _incentive: BigNumberish,
      start: BigNumberish,
      end: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    description(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "description()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    discounts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "discounts(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    emitEndEvent(
      _lessor: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "emitEndEvent(address)"(
      _lessor: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    emitNewRentingEvent(
      _lessorAddress: string,
      _lesseeAddress: string,
      _item: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "emitNewRentingEvent(address,address,string)"(
      _lessorAddress: string,
      _lesseeAddress: string,
      _item: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    endAgreement(overrides?: Overrides): Promise<ContractTransaction>;

    "endAgreement()"(overrides?: Overrides): Promise<ContractTransaction>;

    endingTime(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "endingTime(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getBookedDates(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber[][];
    }>;

    "getBookedDates()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber[][];
    }>;

    getDiscounts(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber[];
    }>;

    "getDiscounts()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber[];
    }>;

    getNumberOfRents(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getNumberOfRents()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    isAuthorised(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isAuthorised(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    isRentValid(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isRentValid(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    isRented(
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isRented()"(
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    itemId(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "itemId()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    lessorAddress(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "lessorAddress()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    lessorName(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "lessorName()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    location(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "location()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    manager(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "manager()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    maxRent(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "maxRent()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    possibleRents(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "possibleRents(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    removeDiscount(
      _discount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "removeDiscount(uint256)"(
      _discount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    rents(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "rents(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    security(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "security()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    startingTime(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "startingTime(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;
  };

  addDiscount(
    _discount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addDiscount(uint256)"(
    _discount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  bookedDates(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "bookedDates(uint256,uint256)"(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  bookings(overrides?: CallOverrides): Promise<BigNumber>;

  "bookings()"(overrides?: CallOverrides): Promise<BigNumber>;

  cancellationFee(overrides?: CallOverrides): Promise<BigNumber>;

  "cancellationFee()"(overrides?: CallOverrides): Promise<BigNumber>;

  createAgreement(
    _incentive: BigNumberish,
    start: BigNumberish,
    end: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createAgreement(uint256,uint256,uint256)"(
    _incentive: BigNumberish,
    start: BigNumberish,
    end: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  description(overrides?: CallOverrides): Promise<string>;

  "description()"(overrides?: CallOverrides): Promise<string>;

  discounts(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  "discounts(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  emitEndEvent(
    _lessor: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "emitEndEvent(address)"(
    _lessor: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  emitNewRentingEvent(
    _lessorAddress: string,
    _lesseeAddress: string,
    _item: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "emitNewRentingEvent(address,address,string)"(
    _lessorAddress: string,
    _lesseeAddress: string,
    _item: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  endAgreement(overrides?: Overrides): Promise<ContractTransaction>;

  "endAgreement()"(overrides?: Overrides): Promise<ContractTransaction>;

  endingTime(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  "endingTime(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getBookedDates(overrides?: CallOverrides): Promise<BigNumber[][]>;

  "getBookedDates()"(overrides?: CallOverrides): Promise<BigNumber[][]>;

  getDiscounts(overrides?: CallOverrides): Promise<BigNumber[]>;

  "getDiscounts()"(overrides?: CallOverrides): Promise<BigNumber[]>;

  getNumberOfRents(overrides?: CallOverrides): Promise<BigNumber>;

  "getNumberOfRents()"(overrides?: CallOverrides): Promise<BigNumber>;

  isAuthorised(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "isAuthorised(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isRentValid(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "isRentValid(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isRented(overrides?: CallOverrides): Promise<boolean>;

  "isRented()"(overrides?: CallOverrides): Promise<boolean>;

  itemId(overrides?: CallOverrides): Promise<BigNumber>;

  "itemId()"(overrides?: CallOverrides): Promise<BigNumber>;

  lessorAddress(overrides?: CallOverrides): Promise<string>;

  "lessorAddress()"(overrides?: CallOverrides): Promise<string>;

  lessorName(overrides?: CallOverrides): Promise<string>;

  "lessorName()"(overrides?: CallOverrides): Promise<string>;

  location(overrides?: CallOverrides): Promise<string>;

  "location()"(overrides?: CallOverrides): Promise<string>;

  manager(overrides?: CallOverrides): Promise<string>;

  "manager()"(overrides?: CallOverrides): Promise<string>;

  maxRent(overrides?: CallOverrides): Promise<BigNumber>;

  "maxRent()"(overrides?: CallOverrides): Promise<BigNumber>;

  possibleRents(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "possibleRents(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  removeDiscount(
    _discount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "removeDiscount(uint256)"(
    _discount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  rents(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "rents(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  security(overrides?: CallOverrides): Promise<BigNumber>;

  "security()"(overrides?: CallOverrides): Promise<BigNumber>;

  startingTime(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "startingTime(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    addDiscount(
      _discount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "addDiscount(uint256)"(
      _discount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    bookedDates(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "bookedDates(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    bookings(overrides?: CallOverrides): Promise<BigNumber>;

    "bookings()"(overrides?: CallOverrides): Promise<BigNumber>;

    cancellationFee(overrides?: CallOverrides): Promise<BigNumber>;

    "cancellationFee()"(overrides?: CallOverrides): Promise<BigNumber>;

    createAgreement(
      _incentive: BigNumberish,
      start: BigNumberish,
      end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "createAgreement(uint256,uint256,uint256)"(
      _incentive: BigNumberish,
      start: BigNumberish,
      end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    description(overrides?: CallOverrides): Promise<string>;

    "description()"(overrides?: CallOverrides): Promise<string>;

    discounts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "discounts(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    emitEndEvent(_lessor: string, overrides?: CallOverrides): Promise<void>;

    "emitEndEvent(address)"(
      _lessor: string,
      overrides?: CallOverrides
    ): Promise<void>;

    emitNewRentingEvent(
      _lessorAddress: string,
      _lesseeAddress: string,
      _item: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "emitNewRentingEvent(address,address,string)"(
      _lessorAddress: string,
      _lesseeAddress: string,
      _item: string,
      overrides?: CallOverrides
    ): Promise<void>;

    endAgreement(overrides?: CallOverrides): Promise<void>;

    "endAgreement()"(overrides?: CallOverrides): Promise<void>;

    endingTime(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "endingTime(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBookedDates(overrides?: CallOverrides): Promise<BigNumber[][]>;

    "getBookedDates()"(overrides?: CallOverrides): Promise<BigNumber[][]>;

    getDiscounts(overrides?: CallOverrides): Promise<BigNumber[]>;

    "getDiscounts()"(overrides?: CallOverrides): Promise<BigNumber[]>;

    getNumberOfRents(overrides?: CallOverrides): Promise<BigNumber>;

    "getNumberOfRents()"(overrides?: CallOverrides): Promise<BigNumber>;

    isAuthorised(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "isAuthorised(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isRentValid(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "isRentValid(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isRented(overrides?: CallOverrides): Promise<boolean>;

    "isRented()"(overrides?: CallOverrides): Promise<boolean>;

    itemId(overrides?: CallOverrides): Promise<BigNumber>;

    "itemId()"(overrides?: CallOverrides): Promise<BigNumber>;

    lessorAddress(overrides?: CallOverrides): Promise<string>;

    "lessorAddress()"(overrides?: CallOverrides): Promise<string>;

    lessorName(overrides?: CallOverrides): Promise<string>;

    "lessorName()"(overrides?: CallOverrides): Promise<string>;

    location(overrides?: CallOverrides): Promise<string>;

    "location()"(overrides?: CallOverrides): Promise<string>;

    manager(overrides?: CallOverrides): Promise<string>;

    "manager()"(overrides?: CallOverrides): Promise<string>;

    maxRent(overrides?: CallOverrides): Promise<BigNumber>;

    "maxRent()"(overrides?: CallOverrides): Promise<BigNumber>;

    possibleRents(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "possibleRents(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeDiscount(
      _discount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "removeDiscount(uint256)"(
      _discount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    rents(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "rents(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    security(overrides?: CallOverrides): Promise<BigNumber>;

    "security()"(overrides?: CallOverrides): Promise<BigNumber>;

    startingTime(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "startingTime(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    EndRentalContract(
      _lessor: string | null,
      _contractAddress: string | null
    ): EventFilter;

    NewRentalContract(
      _deployer: string | null,
      _contractAddress: null,
      _start: null,
      _end: null,
      _rent: null,
      _security: null,
      _cancellationFee: null,
      _incentive: null,
      _item: null
    ): EventFilter;

    NewRenting(
      _rentAddress: string | null,
      _lessorAddress: string | null,
      _lesseeAddress: string | null,
      _item: null
    ): EventFilter;
  };

  estimateGas: {
    addDiscount(
      _discount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addDiscount(uint256)"(
      _discount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    bookedDates(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "bookedDates(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    bookings(overrides?: CallOverrides): Promise<BigNumber>;

    "bookings()"(overrides?: CallOverrides): Promise<BigNumber>;

    cancellationFee(overrides?: CallOverrides): Promise<BigNumber>;

    "cancellationFee()"(overrides?: CallOverrides): Promise<BigNumber>;

    createAgreement(
      _incentive: BigNumberish,
      start: BigNumberish,
      end: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createAgreement(uint256,uint256,uint256)"(
      _incentive: BigNumberish,
      start: BigNumberish,
      end: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    description(overrides?: CallOverrides): Promise<BigNumber>;

    "description()"(overrides?: CallOverrides): Promise<BigNumber>;

    discounts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "discounts(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    emitEndEvent(_lessor: string, overrides?: Overrides): Promise<BigNumber>;

    "emitEndEvent(address)"(
      _lessor: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    emitNewRentingEvent(
      _lessorAddress: string,
      _lesseeAddress: string,
      _item: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "emitNewRentingEvent(address,address,string)"(
      _lessorAddress: string,
      _lesseeAddress: string,
      _item: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    endAgreement(overrides?: Overrides): Promise<BigNumber>;

    "endAgreement()"(overrides?: Overrides): Promise<BigNumber>;

    endingTime(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "endingTime(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBookedDates(overrides?: CallOverrides): Promise<BigNumber>;

    "getBookedDates()"(overrides?: CallOverrides): Promise<BigNumber>;

    getDiscounts(overrides?: CallOverrides): Promise<BigNumber>;

    "getDiscounts()"(overrides?: CallOverrides): Promise<BigNumber>;

    getNumberOfRents(overrides?: CallOverrides): Promise<BigNumber>;

    "getNumberOfRents()"(overrides?: CallOverrides): Promise<BigNumber>;

    isAuthorised(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isAuthorised(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isRentValid(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isRentValid(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isRented(overrides?: CallOverrides): Promise<BigNumber>;

    "isRented()"(overrides?: CallOverrides): Promise<BigNumber>;

    itemId(overrides?: CallOverrides): Promise<BigNumber>;

    "itemId()"(overrides?: CallOverrides): Promise<BigNumber>;

    lessorAddress(overrides?: CallOverrides): Promise<BigNumber>;

    "lessorAddress()"(overrides?: CallOverrides): Promise<BigNumber>;

    lessorName(overrides?: CallOverrides): Promise<BigNumber>;

    "lessorName()"(overrides?: CallOverrides): Promise<BigNumber>;

    location(overrides?: CallOverrides): Promise<BigNumber>;

    "location()"(overrides?: CallOverrides): Promise<BigNumber>;

    manager(overrides?: CallOverrides): Promise<BigNumber>;

    "manager()"(overrides?: CallOverrides): Promise<BigNumber>;

    maxRent(overrides?: CallOverrides): Promise<BigNumber>;

    "maxRent()"(overrides?: CallOverrides): Promise<BigNumber>;

    possibleRents(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "possibleRents(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeDiscount(
      _discount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "removeDiscount(uint256)"(
      _discount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    rents(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "rents(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    security(overrides?: CallOverrides): Promise<BigNumber>;

    "security()"(overrides?: CallOverrides): Promise<BigNumber>;

    startingTime(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "startingTime(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addDiscount(
      _discount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addDiscount(uint256)"(
      _discount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    bookedDates(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "bookedDates(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bookings(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "bookings()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cancellationFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "cancellationFee()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createAgreement(
      _incentive: BigNumberish,
      start: BigNumberish,
      end: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createAgreement(uint256,uint256,uint256)"(
      _incentive: BigNumberish,
      start: BigNumberish,
      end: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    description(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "description()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    discounts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "discounts(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    emitEndEvent(
      _lessor: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "emitEndEvent(address)"(
      _lessor: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    emitNewRentingEvent(
      _lessorAddress: string,
      _lesseeAddress: string,
      _item: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "emitNewRentingEvent(address,address,string)"(
      _lessorAddress: string,
      _lesseeAddress: string,
      _item: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    endAgreement(overrides?: Overrides): Promise<PopulatedTransaction>;

    "endAgreement()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    endingTime(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "endingTime(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBookedDates(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getBookedDates()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDiscounts(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getDiscounts()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getNumberOfRents(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getNumberOfRents()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isAuthorised(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isAuthorised(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isRentValid(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isRentValid(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isRented(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isRented()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    itemId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "itemId()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lessorAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lessorAddress()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lessorName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lessorName()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    location(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "location()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    manager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "manager()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxRent(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "maxRent()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    possibleRents(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "possibleRents(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeDiscount(
      _discount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "removeDiscount(uint256)"(
      _discount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    rents(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "rents(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    security(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "security()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    startingTime(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "startingTime(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}