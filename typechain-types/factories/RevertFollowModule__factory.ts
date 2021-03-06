/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  RevertFollowModule,
  RevertFollowModuleInterface,
} from "../RevertFollowModule";

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
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "followNFTTokenId",
        type: "uint256",
      },
    ],
    name: "followModuleTransferHook",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "initializeFollowModule",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
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
        internalType: "address",
        name: "follower",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "followNFTTokenId",
        type: "uint256",
      },
    ],
    name: "isFollowing",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "follower",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "processFollow",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b506040516106c53803806106c583398101604081905261002f916100a0565b806001600160a01b038116610057576040516348be0eb360e01b815260040160405180910390fd5b6001600160a01b03811660808190526040514281527ff1a1fa6b64aa95186f5a1285e76198d0da80d9c5a88062641d447f1d7c54e56c9060200160405180910390a250506100d0565b6000602082840312156100b257600080fd5b81516001600160a01b03811681146100c957600080fd5b9392505050565b6080516105c66100ff6000396000818160d20152818161010c01528181610186015261031601526105c66000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80630e096ae11461005c5780633cb22cc414610071578063451c3d0c146100855780639713958a146100ad578063a4c52b86146100cd575b600080fd5b61006f61006a3660046103cb565b610101565b005b61006f61007f366004610426565b50505050565b61009861009336600461046e565b610163565b60405190151581526020015b60405180910390f35b6100c06100bb3660046104a6565b610309565b6040516100a491906104f1565b6100f47f000000000000000000000000000000000000000000000000000000000000000081565b6040516100a49190610546565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461014a576040516313bd2e8360e31b815260040160405180910390fd5b604051636992d36b60e11b815260040160405180910390fd5b60405163a9ec656360e01b81526004810184905260009081906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063a9ec656390602401602060405180830381865afa1580156101cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101f1919061055a565b90506001600160a01b03811661020b576000915050610302565b821561028e576040516331a9108f60e11b8152600481018490526001600160a01b038086169190831690636352211e90602401602060405180830381865afa15801561025b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061027f919061055a565b6001600160a01b0316146102fe565b6040516370a0823160e01b81526001600160a01b038216906370a08231906102ba908790600401610546565b602060405180830381865afa1580156102d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102fb9190610577565b15155b9150505b9392505050565b6060336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610354576040516313bd2e8360e31b815260040160405180910390fd5b505060408051600081526020810190915292915050565b6001600160a01b038116811461038057600080fd5b50565b60008083601f84011261039557600080fd5b5081356001600160401b038111156103ac57600080fd5b6020830191508360208285010111156103c457600080fd5b9250929050565b600080600080606085870312156103e157600080fd5b84356103ec8161036b565b93506020850135925060408501356001600160401b0381111561040e57600080fd5b61041a87828801610383565b95989497509550505050565b6000806000806080858703121561043c57600080fd5b84359350602085013561044e8161036b565b9250604085013561045e8161036b565b9396929550929360600135925050565b60008060006060848603121561048357600080fd5b8335925060208401356104958161036b565b929592945050506040919091013590565b6000806000604084860312156104bb57600080fd5b8335925060208401356001600160401b038111156104d857600080fd5b6104e486828701610383565b9497909650939450505050565b600060208083528351808285015260005b8181101561051e57858101830151858201604001528201610502565b81811115610530576000604083870101525b50601f01601f1916929092016040019392505050565b6001600160a01b0391909116815260200190565b60006020828403121561056c57600080fd5b81516103028161036b565b60006020828403121561058957600080fd5b505191905056fea2646970667358221220b7f99d576226276655260ee082c9f2a17bbd2b8cf970ddde46bb2fb92253efd864736f6c634300080a0033";

type RevertFollowModuleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RevertFollowModuleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RevertFollowModule__factory extends ContractFactory {
  constructor(...args: RevertFollowModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "RevertFollowModule";
  }

  deploy(
    hub: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RevertFollowModule> {
    return super.deploy(hub, overrides || {}) as Promise<RevertFollowModule>;
  }
  getDeployTransaction(
    hub: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(hub, overrides || {});
  }
  attach(address: string): RevertFollowModule {
    return super.attach(address) as RevertFollowModule;
  }
  connect(signer: Signer): RevertFollowModule__factory {
    return super.connect(signer) as RevertFollowModule__factory;
  }
  static readonly contractName: "RevertFollowModule";
  public readonly contractName: "RevertFollowModule";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RevertFollowModuleInterface {
    return new utils.Interface(_abi) as RevertFollowModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RevertFollowModule {
    return new Contract(address, _abi, signerOrProvider) as RevertFollowModule;
  }
}
