/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FeeFollowModule,
  FeeFollowModuleInterface,
} from "../FeeFollowModule";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "hub",
        type: "address",
      },
      {
        internalType: "address",
        name: "moduleGlobals",
        type: "address",
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
    inputs: [],
    name: "ModuleDataMismatch",
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
    inputs: [],
    name: "MODULE_GLOBALS",
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
    ],
    name: "getProfileData",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
        ],
        internalType: "struct ProfileData",
        name: "",
        type: "tuple",
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
  "0x60c060405234801561001057600080fd5b5060405161106f38038061106f83398101604081905261002f91610128565b81816001600160a01b038116610058576040516348be0eb360e01b815260040160405180910390fd5b6001600160a01b03811660808190526040514281527f4e84a529f4c627b5e787037d117873af1018768804cca3c7f0d47041fe2c89ed9060200160405180910390a2506001600160a01b0381166100c2576040516348be0eb360e01b815260040160405180910390fd5b6001600160a01b03811660a08190526040514281527ff1a1fa6b64aa95186f5a1285e76198d0da80d9c5a88062641d447f1d7c54e56c9060200160405180910390a250505061015b565b80516001600160a01b038116811461012357600080fd5b919050565b6000806040838503121561013b57600080fd5b6101448361010c565b91506101526020840161010c565b90509250929050565b60805160a051610ecc6101a3600039600081816101cb015281816101f80152818161033301526104f201526000818161016c015281816106b401526107fe0152610ecc6000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806345b7f60a1161005b57806345b7f60a146100d357806388ffe851146101675780639713958a146101a6578063a4c52b86146101c657600080fd5b80630e096ae1146100825780633cb22cc414610097578063451c3d0c146100ab575b600080fd5b610095610090366004610b59565b6101ed565b005b6100956100a5366004610bb5565b50505050565b6100be6100b9366004610bfd565b6102f7565b60405190151581526020015b60405180910390f35b6101376100e1366004610c35565b604080516060808201835260008083526020808401829052928401819052938452838252928290208251938401835280546001600160a01b03908116855260018201549285019290925260020154169082015290565b6040805182516001600160a01b0390811682526020808501519083015292820151909216908201526060016100ca565b61018e7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100ca565b6101b96101b4366004610c4e565b6104e5565b6040516100ca9190610cf2565b61018e7f000000000000000000000000000000000000000000000000000000000000000081565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610236576040516313bd2e8360e31b815260040160405180910390fd5b6000838152602081905260409020600181015490546001600160a01b03166102608484838561063c565b60008061026b6106af565b6000898152602081905260408120600201549294509092506001600160a01b03909116906127106102a061ffff851688610d1b565b6102aa9190610d3a565b905060006102b88288610d5c565b90506102cf6001600160a01b0387168c858461073b565b81156102ea576102ea6001600160a01b0387168c878561073b565b5050505050505050505050565b6040517fa9ec65630000000000000000000000000000000000000000000000000000000081526004810184905260009081906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063a9ec656390602401602060405180830381865afa15801561037a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061039e9190610d73565b90506001600160a01b0381166103b85760009150506104de565b8215610454576040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018490526001600160a01b038086169190831690636352211e90602401602060405180830381865afa158015610421573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104459190610d73565b6001600160a01b0316146104da565b6040517f70a082310000000000000000000000000000000000000000000000000000000081526001600160a01b0385811660048301528216906370a0823190602401602060405180830381865afa1580156104b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104d79190610d90565b15155b9150505b9392505050565b6060336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610530576040516313bd2e8360e31b815260040160405180910390fd5b6000808061054085870187610da9565b92509250925061054f826107c3565b158061056257506001600160a01b038116155b8061056b575082155b156105a2576040517f48be0eb300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600087815260208181526040918290206001810186905580546001600160a01b038087167fffffffffffffffffffffffff000000000000000000000000000000000000000092831617835560029092018054928616929091169190911790558151601f88018290048202810182019092528682528790879081908401838280828437600092019190915250929a9950505050505050505050565b60008061064b85870187610deb565b9150915082811415806106705750836001600160a01b0316826001600160a01b031614155b156106a7576040517f46308bd500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166398f965d16040518163ffffffff1660e01b81526004016040805180830381865afa15801561070f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107339190610e17565b915091509091565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd000000000000000000000000000000000000000000000000000000001790526100a5908590610871565b6040517f43b938c50000000000000000000000000000000000000000000000000000000081526001600160a01b0382811660048301526000917f0000000000000000000000000000000000000000000000000000000000000000909116906343b938c590602401602060405180830381865afa158015610847573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061086b9190610e58565b92915050565b60006108c6826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166109609092919063ffffffff16565b80519091501561095b57808060200190518101906108e49190610e58565b61095b5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b505050565b606061096f8484600085610977565b949350505050565b6060824710156109ef5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610952565b6001600160a01b0385163b610a465760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610952565b600080866001600160a01b03168587604051610a629190610e7a565b60006040518083038185875af1925050503d8060008114610a9f576040519150601f19603f3d011682016040523d82523d6000602084013e610aa4565b606091505b5091509150610ab4828286610abf565b979650505050505050565b60608315610ace5750816104de565b825115610ade5782518084602001fd5b8160405162461bcd60e51b81526004016109529190610cf2565b6001600160a01b0381168114610b0d57600080fd5b50565b60008083601f840112610b2257600080fd5b50813567ffffffffffffffff811115610b3a57600080fd5b602083019150836020828501011115610b5257600080fd5b9250929050565b60008060008060608587031215610b6f57600080fd5b8435610b7a81610af8565b935060208501359250604085013567ffffffffffffffff811115610b9d57600080fd5b610ba987828801610b10565b95989497509550505050565b60008060008060808587031215610bcb57600080fd5b843593506020850135610bdd81610af8565b92506040850135610bed81610af8565b9396929550929360600135925050565b600080600060608486031215610c1257600080fd5b833592506020840135610c2481610af8565b929592945050506040919091013590565b600060208284031215610c4757600080fd5b5035919050565b600080600060408486031215610c6357600080fd5b83359250602084013567ffffffffffffffff811115610c8157600080fd5b610c8d86828701610b10565b9497909650939450505050565b60005b83811015610cb5578181015183820152602001610c9d565b838111156100a55750506000910152565b60008151808452610cde816020860160208601610c9a565b601f01601f19169290920160200192915050565b6020815260006104de6020830184610cc6565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615610d3557610d35610d05565b500290565b600082610d5757634e487b7160e01b600052601260045260246000fd5b500490565b600082821015610d6e57610d6e610d05565b500390565b600060208284031215610d8557600080fd5b81516104de81610af8565b600060208284031215610da257600080fd5b5051919050565b600080600060608486031215610dbe57600080fd5b833592506020840135610dd081610af8565b91506040840135610de081610af8565b809150509250925092565b60008060408385031215610dfe57600080fd5b8235610e0981610af8565b946020939093013593505050565b60008060408385031215610e2a57600080fd5b8251610e3581610af8565b602084015190925061ffff81168114610e4d57600080fd5b809150509250929050565b600060208284031215610e6a57600080fd5b815180151581146104de57600080fd5b60008251610e8c818460208701610c9a565b919091019291505056fea2646970667358221220d29c47526558adb2bf0d3952385463cc57df35f1c9d50a4ade9af118de30571d64736f6c634300080a0033";

type FeeFollowModuleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FeeFollowModuleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FeeFollowModule__factory extends ContractFactory {
  constructor(...args: FeeFollowModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "FeeFollowModule";
  }

  deploy(
    hub: string,
    moduleGlobals: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FeeFollowModule> {
    return super.deploy(
      hub,
      moduleGlobals,
      overrides || {}
    ) as Promise<FeeFollowModule>;
  }
  getDeployTransaction(
    hub: string,
    moduleGlobals: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(hub, moduleGlobals, overrides || {});
  }
  attach(address: string): FeeFollowModule {
    return super.attach(address) as FeeFollowModule;
  }
  connect(signer: Signer): FeeFollowModule__factory {
    return super.connect(signer) as FeeFollowModule__factory;
  }
  static readonly contractName: "FeeFollowModule";
  public readonly contractName: "FeeFollowModule";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FeeFollowModuleInterface {
    return new utils.Interface(_abi) as FeeFollowModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FeeFollowModule {
    return new Contract(address, _abi, signerOrProvider) as FeeFollowModule;
  }
}