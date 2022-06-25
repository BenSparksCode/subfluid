/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FollowerOnlyReferenceModule,
  FollowerOnlyReferenceModuleInterface,
} from "../FollowerOnlyReferenceModule";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "hub",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "FollowInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "InitParamsInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "HUB",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pubId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "initializeReferenceModule",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "profileIdPointed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pubIdPointed",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "processComment",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "profileIdPointed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pubIdPointed",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "processMirror",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161081138038061081183398101604081905261002f916100a0565b806001600160a01b038116610057576040516348be0eb360e01b815260040160405180910390fd5b6001600160a01b03811660808190526040514281527ff1a1fa6b64aa95186f5a1285e76198d0da80d9c5a88062641d447f1d7c54e56c9060200160405180910390a250506100d0565b6000602082840312156100b257600080fd5b81516001600160a01b03811681146100c957600080fd5b9392505050565b60805161070b6101066000396000818160a601528181610112015281816101cb0152818161031b0152610442015261070b6000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806356014afa1461005157806357ba55841461008c578063a2830b2e1461008c578063a4c52b86146100a1575b600080fd5b61007661005f366004610561565b505060408051600081526020810190915292915050565b60405161008391906105b4565b60405180910390f35b61009f61009a366004610609565b6100e0565b005b6100c87f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610083565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018690526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636352211e90602401602060405180830381865afa158015610161573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610185919061066a565b90506101918582610199565b505050505050565b6040517fd923d20c000000000000000000000000000000000000000000000000000000008152600481018390526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063d923d20c90602401602060405180830381865afa15801561021a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061023e919061066a565b905060006001600160a01b038216156102e9576040517f451c3d0c000000000000000000000000000000000000000000000000000000008152600481018590526001600160a01b0384811660248301526000604483015283169063451c3d0c90606401602060405180830381865afa1580156102be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102e2919061069a565b905061042d565b6040517fa9ec6563000000000000000000000000000000000000000000000000000000008152600481018590526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9ec656390602401602060405180830381865afa15801561036a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061038e919061066a565b90506001600160a01b0381161580159061042957506040517f70a082310000000000000000000000000000000000000000000000000000000081526001600160a01b0385811660048301528216906370a0823190602401602060405180830381865afa158015610402573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061042691906106bc565b15155b9150505b801580156104db5750826001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636352211e866040518263ffffffff1660e01b815260040161048e91815260200190565b602060405180830381865afa1580156104ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104cf919061066a565b6001600160a01b031614155b15610512576040517fd325a6d600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b60008083601f84011261052a57600080fd5b50813567ffffffffffffffff81111561054257600080fd5b60208301915083602082850101111561055a57600080fd5b9250929050565b6000806000806060858703121561057757600080fd5b8435935060208501359250604085013567ffffffffffffffff81111561059c57600080fd5b6105a887828801610518565b95989497509550505050565b600060208083528351808285015260005b818110156105e1578581018301518582016040015282016105c5565b818111156105f3576000604083870101525b50601f01601f1916929092016040019392505050565b60008060008060006080868803121561062157600080fd5b853594506020860135935060408601359250606086013567ffffffffffffffff81111561064d57600080fd5b61065988828901610518565b969995985093965092949392505050565b60006020828403121561067c57600080fd5b81516001600160a01b038116811461069357600080fd5b9392505050565b6000602082840312156106ac57600080fd5b8151801515811461069357600080fd5b6000602082840312156106ce57600080fd5b505191905056fea264697066735822122031c2c96d334f84f902016eb2777ad874ebbf7129b775fce84d9f87048ec3fbfb64736f6c634300080a0033";

type FollowerOnlyReferenceModuleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FollowerOnlyReferenceModuleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FollowerOnlyReferenceModule__factory extends ContractFactory {
  constructor(...args: FollowerOnlyReferenceModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "FollowerOnlyReferenceModule";
  }

  deploy(
    hub: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FollowerOnlyReferenceModule> {
    return super.deploy(
      hub,
      overrides || {}
    ) as Promise<FollowerOnlyReferenceModule>;
  }
  getDeployTransaction(
    hub: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(hub, overrides || {});
  }
  attach(address: string): FollowerOnlyReferenceModule {
    return super.attach(address) as FollowerOnlyReferenceModule;
  }
  connect(signer: Signer): FollowerOnlyReferenceModule__factory {
    return super.connect(signer) as FollowerOnlyReferenceModule__factory;
  }
  static readonly contractName: "FollowerOnlyReferenceModule";
  public readonly contractName: "FollowerOnlyReferenceModule";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FollowerOnlyReferenceModuleInterface {
    return new utils.Interface(_abi) as FollowerOnlyReferenceModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FollowerOnlyReferenceModule {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as FollowerOnlyReferenceModule;
  }
}