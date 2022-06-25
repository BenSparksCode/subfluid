/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FreeCollectModule,
  FreeCollectModuleInterface,
} from "../FreeCollectModule";

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
    name: "NotHub",
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
    name: "initializePublicationCollectModule",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "referrerProfileId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "collector",
        type: "address",
      },
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
    name: "processCollect",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161080138038061080183398101604081905261002f916100a0565b806001600160a01b038116610057576040516348be0eb360e01b815260040160405180910390fd5b6001600160a01b03811660808190526040514281527ff1a1fa6b64aa95186f5a1285e76198d0da80d9c5a88062641d447f1d7c54e56c9060200160405180910390a250506100d0565b6000602082840312156100b257600080fd5b81516001600160a01b03811681146100c957600080fd5b9392505050565b6080516106fc61010560003960008181604b0152818160c5015281816101c8015281816102e601526103f701526106fc6000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063a4c52b8614610046578063c233f95114610083578063e49c3dda146100a3575b600080fd5b61006d7f000000000000000000000000000000000000000000000000000000000000000081565b60405161007a91906104b4565b60405180910390f35b610096610091366004610510565b6100b8565b60405161007a9190610562565b6100b66100b13660046105cf565b61017d565b005b6060336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610103576040516313bd2e8360e31b815260040160405180910390fd5b60006101118385018561064f565b9050801561013c576000868152602081815260408083208884529091529020805460ff191660011790555b83838080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929998505050505050505050565b60008481526020818152604080832086845290915290205460ff16156101a7576101a784866101af565b505050505050565b604051633648f48360e21b8152600481018390526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063d923d20c90602401602060405180830381865afa158015610217573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061023b9190610673565b905060006001600160a01b038216156102cd576040516311470f4360e21b8152600481018590526001600160a01b0384811660248301526000604483015283169063451c3d0c90606401602060405180830381865afa1580156102a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c69190610690565b90506103e2565b60405163a9ec656360e01b8152600481018590526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9ec656390602401602060405180830381865afa158015610335573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103599190610673565b90506001600160a01b038116158015906103de57506040516370a0823160e01b81526001600160a01b038216906370a082319061039a9087906004016104b4565b602060405180830381865afa1580156103b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103db91906106ad565b15155b9150505b801580156104905750826001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636352211e866040518263ffffffff1660e01b815260040161044391815260200190565b602060405180830381865afa158015610460573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104849190610673565b6001600160a01b031614155b156104ae57604051636992d36b60e11b815260040160405180910390fd5b50505050565b6001600160a01b0391909116815260200190565b60008083601f8401126104da57600080fd5b5081356001600160401b038111156104f157600080fd5b60208301915083602082850101111561050957600080fd5b9250929050565b6000806000806060858703121561052657600080fd5b843593506020850135925060408501356001600160401b0381111561054a57600080fd5b610556878288016104c8565b95989497509550505050565b600060208083528351808285015260005b8181101561058f57858101830151858201604001528201610573565b818111156105a1576000604083870101525b50601f01601f1916929092016040019392505050565b6001600160a01b03811681146105cc57600080fd5b50565b60008060008060008060a087890312156105e857600080fd5b8635955060208701356105fa816105b7565b9450604087013593506060870135925060808701356001600160401b0381111561062357600080fd5b61062f89828a016104c8565b979a9699509497509295939492505050565b80151581146105cc57600080fd5b60006020828403121561066157600080fd5b813561066c81610641565b9392505050565b60006020828403121561068557600080fd5b815161066c816105b7565b6000602082840312156106a257600080fd5b815161066c81610641565b6000602082840312156106bf57600080fd5b505191905056fea26469706673582212208e310448bd358bf97e0bc7dbfb2e7cf5dc51b8da099a5e6c0f9bf0188e392f0a64736f6c634300080a0033";

type FreeCollectModuleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FreeCollectModuleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FreeCollectModule__factory extends ContractFactory {
  constructor(...args: FreeCollectModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "FreeCollectModule";
  }

  deploy(
    hub: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FreeCollectModule> {
    return super.deploy(hub, overrides || {}) as Promise<FreeCollectModule>;
  }
  getDeployTransaction(
    hub: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(hub, overrides || {});
  }
  attach(address: string): FreeCollectModule {
    return super.attach(address) as FreeCollectModule;
  }
  connect(signer: Signer): FreeCollectModule__factory {
    return super.connect(signer) as FreeCollectModule__factory;
  }
  static readonly contractName: "FreeCollectModule";
  public readonly contractName: "FreeCollectModule";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FreeCollectModuleInterface {
    return new utils.Interface(_abi) as FreeCollectModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FreeCollectModule {
    return new Contract(address, _abi, signerOrProvider) as FreeCollectModule;
  }
}
