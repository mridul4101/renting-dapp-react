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

interface RentingDappManagerInterface extends ethers.utils.Interface {
  functions: {
    "addItem(string,string,uint256,uint256,uint256,string)": FunctionFragment;
    "isAuthorised(address)": FunctionFragment;
    "isAvailable(address)": FunctionFragment;
    "items(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "removeItem(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addItem",
    values: [string, string, BigNumberish, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isAuthorised",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "isAvailable", values: [string]): string;
  encodeFunctionData(functionFragment: "items", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "removeItem", values: [string]): string;

  decodeFunctionResult(functionFragment: "addItem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isAuthorised",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAvailable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "items", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "removeItem", data: BytesLike): Result;

  events: {
    "ProductDetails(address,address,string,string,string,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ProductDetails"): EventFragment;
}

export class RentingDappManager extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: RentingDappManagerInterface;

  functions: {
    addItem(
      _name: string,
      _location: string,
      _maxRent: BigNumberish,
      _security: BigNumberish,
      _cancellationFee: BigNumberish,
      _description: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addItem(string,string,uint256,uint256,uint256,string)"(
      _name: string,
      _location: string,
      _maxRent: BigNumberish,
      _security: BigNumberish,
      _cancellationFee: BigNumberish,
      _description: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

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

    isAvailable(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isAvailable(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    items(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "items(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    owner(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "owner()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    removeItem(
      _item: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "removeItem(address)"(
      _item: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  addItem(
    _name: string,
    _location: string,
    _maxRent: BigNumberish,
    _security: BigNumberish,
    _cancellationFee: BigNumberish,
    _description: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addItem(string,string,uint256,uint256,uint256,string)"(
    _name: string,
    _location: string,
    _maxRent: BigNumberish,
    _security: BigNumberish,
    _cancellationFee: BigNumberish,
    _description: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  isAuthorised(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "isAuthorised(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isAvailable(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "isAvailable(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  items(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "items(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  removeItem(
    _item: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "removeItem(address)"(
    _item: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    addItem(
      _name: string,
      _location: string,
      _maxRent: BigNumberish,
      _security: BigNumberish,
      _cancellationFee: BigNumberish,
      _description: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "addItem(string,string,uint256,uint256,uint256,string)"(
      _name: string,
      _location: string,
      _maxRent: BigNumberish,
      _security: BigNumberish,
      _cancellationFee: BigNumberish,
      _description: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isAuthorised(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "isAuthorised(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isAvailable(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "isAvailable(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    items(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "items(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    removeItem(_item: string, overrides?: CallOverrides): Promise<void>;

    "removeItem(address)"(
      _item: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    ProductDetails(
      lessor: null,
      item: null,
      _name: null,
      _description: null,
      _location: null,
      _maxRent: null,
      _security: null,
      _cancellationFee: null
    ): EventFilter;
  };

  estimateGas: {
    addItem(
      _name: string,
      _location: string,
      _maxRent: BigNumberish,
      _security: BigNumberish,
      _cancellationFee: BigNumberish,
      _description: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addItem(string,string,uint256,uint256,uint256,string)"(
      _name: string,
      _location: string,
      _maxRent: BigNumberish,
      _security: BigNumberish,
      _cancellationFee: BigNumberish,
      _description: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    isAuthorised(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isAuthorised(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isAvailable(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isAvailable(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    items(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "items(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    removeItem(_item: string, overrides?: Overrides): Promise<BigNumber>;

    "removeItem(address)"(
      _item: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addItem(
      _name: string,
      _location: string,
      _maxRent: BigNumberish,
      _security: BigNumberish,
      _cancellationFee: BigNumberish,
      _description: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addItem(string,string,uint256,uint256,uint256,string)"(
      _name: string,
      _location: string,
      _maxRent: BigNumberish,
      _security: BigNumberish,
      _cancellationFee: BigNumberish,
      _description: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    isAuthorised(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isAuthorised(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isAvailable(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isAvailable(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    items(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "items(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeItem(
      _item: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "removeItem(address)"(
      _item: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
