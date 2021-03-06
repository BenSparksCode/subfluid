/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SubfluidFollowModule,
  SubfluidFollowModuleInterface,
} from "../SubfluidFollowModule";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_lensHub",
        type: "address",
      },
      {
        internalType: "contract ISuperfluid",
        name: "_superfluid",
        type: "address",
      },
      {
        internalType: "contract IConstantFlowAgreementV1",
        name: "_cfa",
        type: "address",
      },
      {
        internalType: "contract ERC20",
        name: "_dai",
        type: "address",
      },
      {
        internalType: "contract ISuperToken",
        name: "_daix",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_testMode",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InitParamsInvalid",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "follower",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "SubfluidFollow",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipientAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "subscribeRate",
        type: "uint256",
      },
    ],
    name: "SubfluidFollowInitialized",
    type: "event",
  },
  {
    inputs: [],
    name: "CFA",
    outputs: [
      {
        internalType: "contract IConstantFlowAgreementV1",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DAI",
    outputs: [
      {
        internalType: "contract ERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DAIx",
    outputs: [
      {
        internalType: "contract ISuperToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
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
    inputs: [],
    name: "SUPERFLUID",
    outputs: [
      {
        internalType: "contract ISuperfluid",
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
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x61012060405234801561001157600080fd5b50604051610a74380380610a7483398101604081905261003091610108565b856001600160a01b038116610058576040516348be0eb360e01b815260040160405180910390fd5b6001600160a01b03811660808190526040514281527ff1a1fa6b64aa95186f5a1285e76198d0da80d9c5a88062641d447f1d7c54e56c9060200160405180910390a2506001600160a01b0394851660a05292841660c05290831661010090815290831660e052600080546001600160a81b031916921515610100600160a81b0319169290921793909216909102919091179055610194565b6001600160a01b038116811461010557600080fd5b50565b60008060008060008060c0878903121561012157600080fd5b865161012c816100f0565b602088015190965061013d816100f0565b604088015190955061014e816100f0565b606088015190945061015f816100f0565b6080880151909350610170816100f0565b60a0880151909250801515811461018657600080fd5b809150509295509295509295565b60805160a05160c05160e051610100516108886101ec600039600061018f01526000818161016801526103f30152600081816101b601526103ca01526000818160a201526103a30152600061014101526108886000f3fe608060405234801561001057600080fd5b50600436106100835760003560e01c80630e096ae114610088578063373ce2581461009d5780633cb22cc4146100e1578063451c3d0c146100f55780639713958a1461011c578063a4c52b861461013c578063af51addc14610163578063e0bab4c41461018a578063e0c80cca146101b1575b600080fd5b61009b610096366004610543565b6101d8565b005b6100c47f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b61009b6100ef36600461059e565b50505050565b61010c6101033660046105e6565b60009392505050565b60405190151581526020016100d8565b61012f61012a36600461061e565b610258565b6040516100d891906106c1565b6100c47f000000000000000000000000000000000000000000000000000000000000000081565b6100c47f000000000000000000000000000000000000000000000000000000000000000081565b6100c47f000000000000000000000000000000000000000000000000000000000000000081565b6100c47f000000000000000000000000000000000000000000000000000000000000000081565b6000838152600160205260409020546102069085906001600160a01b03600160601b82041690600b0b610399565b6000838152600160205260408082205490516001600160a01b03600160601b909204821692918716917f39825bf306062049f90beca0460fbd00a8159a8da32052600c37f71e37e6b8cb91a350505050565b60005460609060ff166102c15760005461010090046001600160a01b031633146102c15760405162461bcd60e51b815260206004820152601660248201527529aaa123262aa4a21d102727aa102622a72990242aa160511b604482015260640160405180910390fd5b6000806102d0848601866106db565b604080518082018252600b84900b81526001600160a01b03838116602080840182815260008e81526001835286902094519051909316600160601b026001600160601b03909316929092179092559151848152939550919350909188917fb63c2526c17499eadaaecce8696637699372924a808269f2e96549f76376aa49910160405180910390a384848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929998505050505050505050565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166339255d5b7f00000000000000000000000000000000000000000000000000000000000000006394229ecb60e01b7f000000000000000000000000000000000000000000000000000000000000000087878760006040519080825280601f01601f191660200182016040528015610441576020820181803683370190505b50604051602401610456959493929190610721565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199485161790525160e085901b909216825261049c929160040161076a565b6000604051808303816000875af11580156104bb573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526100ef91908101906107b1565b6001600160a01b03811681146104f857600080fd5b50565b60008083601f84011261050d57600080fd5b5081356001600160401b0381111561052457600080fd5b60208301915083602082850101111561053c57600080fd5b9250929050565b6000806000806060858703121561055957600080fd5b8435610564816104e3565b93506020850135925060408501356001600160401b0381111561058657600080fd5b610592878288016104fb565b95989497509550505050565b600080600080608085870312156105b457600080fd5b8435935060208501356105c6816104e3565b925060408501356105d6816104e3565b9396929550929360600135925050565b6000806000606084860312156105fb57600080fd5b83359250602084013561060d816104e3565b929592945050506040919091013590565b60008060006040848603121561063357600080fd5b8335925060208401356001600160401b0381111561065057600080fd5b61065c868287016104fb565b9497909650939450505050565b60005b8381101561068457818101518382015260200161066c565b838111156100ef5750506000910152565b600081518084526106ad816020860160208601610669565b601f01601f19169290920160200192915050565b6020815260006106d46020830184610695565b9392505050565b600080604083850312156106ee57600080fd5b823591506020830135610700816104e3565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038681168252858116602083015284166040820152600b83900b606082015260a06080820181905260009061075f90830184610695565b979650505050505050565b6001600160a01b038316815260606020820181905260009061078e90830184610695565b8281036040938401526002815261060f60f31b6020820152919091019392505050565b6000602082840312156107c357600080fd5b81516001600160401b03808211156107da57600080fd5b818401915084601f8301126107ee57600080fd5b8151818111156108005761080061070b565b604051601f8201601f19908116603f011681019083821181831017156108285761082861070b565b8160405282815287602084870101111561084157600080fd5b61075f83602083016020880161066956fea26469706673582212209be15c2af408dd5e7a47860447cbed92bfb91073ed335622f1b5c97aa551a2c964736f6c634300080a0033";

type SubfluidFollowModuleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SubfluidFollowModuleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SubfluidFollowModule__factory extends ContractFactory {
  constructor(...args: SubfluidFollowModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "SubfluidFollowModule";
  }

  deploy(
    _lensHub: string,
    _superfluid: string,
    _cfa: string,
    _dai: string,
    _daix: string,
    _testMode: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SubfluidFollowModule> {
    return super.deploy(
      _lensHub,
      _superfluid,
      _cfa,
      _dai,
      _daix,
      _testMode,
      overrides || {}
    ) as Promise<SubfluidFollowModule>;
  }
  getDeployTransaction(
    _lensHub: string,
    _superfluid: string,
    _cfa: string,
    _dai: string,
    _daix: string,
    _testMode: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _lensHub,
      _superfluid,
      _cfa,
      _dai,
      _daix,
      _testMode,
      overrides || {}
    );
  }
  attach(address: string): SubfluidFollowModule {
    return super.attach(address) as SubfluidFollowModule;
  }
  connect(signer: Signer): SubfluidFollowModule__factory {
    return super.connect(signer) as SubfluidFollowModule__factory;
  }
  static readonly contractName: "SubfluidFollowModule";
  public readonly contractName: "SubfluidFollowModule";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SubfluidFollowModuleInterface {
    return new utils.Interface(_abi) as SubfluidFollowModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SubfluidFollowModule {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SubfluidFollowModule;
  }
}
