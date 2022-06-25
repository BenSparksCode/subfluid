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
  "0x60a060405234801561001057600080fd5b5060405161073038038061073083398101604081905261002f916100a0565b806001600160a01b038116610057576040516348be0eb360e01b815260040160405180910390fd5b6001600160a01b03811660808190526040514281527ff1a1fa6b64aa95186f5a1285e76198d0da80d9c5a88062641d447f1d7c54e56c9060200160405180910390a250506100d0565b6000602082840312156100b257600080fd5b81516001600160a01b03811681146100c957600080fd5b9392505050565b6080516106316100ff6000396000818160e201528181610127015281816101d3015261039201526106316000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063451c3d0c11610050578063451c3d0c146100955780639713958a146100bd578063a4c52b86146100dd57600080fd5b80630e096ae11461006c5780633cb22cc414610081575b600080fd5b61007f61007a366004610448565b61011c565b005b61007f61008f3660046104a4565b50505050565b6100a86100a33660046104ec565b610197565b60405190151581526020015b60405180910390f35b6100d06100cb366004610524565b610385565b6040516100b49190610570565b6101047f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100b4565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610165576040516313bd2e8360e31b815260040160405180910390fd5b6040517fd325a6d600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fa9ec65630000000000000000000000000000000000000000000000000000000081526004810184905260009081906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063a9ec656390602401602060405180830381865afa15801561021a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061023e91906105c5565b90506001600160a01b03811661025857600091505061037e565b82156102f4576040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018490526001600160a01b038086169190831690636352211e90602401602060405180830381865afa1580156102c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102e591906105c5565b6001600160a01b03161461037a565b6040517f70a082310000000000000000000000000000000000000000000000000000000081526001600160a01b0385811660048301528216906370a0823190602401602060405180830381865afa158015610353573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061037791906105e2565b15155b9150505b9392505050565b6060336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146103d0576040516313bd2e8360e31b815260040160405180910390fd5b505060408051600081526020810190915292915050565b6001600160a01b03811681146103fc57600080fd5b50565b60008083601f84011261041157600080fd5b50813567ffffffffffffffff81111561042957600080fd5b60208301915083602082850101111561044157600080fd5b9250929050565b6000806000806060858703121561045e57600080fd5b8435610469816103e7565b935060208501359250604085013567ffffffffffffffff81111561048c57600080fd5b610498878288016103ff565b95989497509550505050565b600080600080608085870312156104ba57600080fd5b8435935060208501356104cc816103e7565b925060408501356104dc816103e7565b9396929550929360600135925050565b60008060006060848603121561050157600080fd5b833592506020840135610513816103e7565b929592945050506040919091013590565b60008060006040848603121561053957600080fd5b83359250602084013567ffffffffffffffff81111561055757600080fd5b610563868287016103ff565b9497909650939450505050565b600060208083528351808285015260005b8181101561059d57858101830151858201604001528201610581565b818111156105af576000604083870101525b50601f01601f1916929092016040019392505050565b6000602082840312156105d757600080fd5b815161037e816103e7565b6000602082840312156105f457600080fd5b505191905056fea26469706673582212207228ff18f5b466a4a276bd2df62d6edd12554e9d703b3b2b30b10d316d6f185064736f6c634300080a0033";

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