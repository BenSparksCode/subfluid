/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LensPeriphery, LensPeripheryInterface } from "../LensPeriphery";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ILensHub",
        name: "hub",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ArrayMismatch",
    type: "error",
  },
  {
    inputs: [],
    name: "FollowInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "NotProfileOwnerOrDispatcher",
    type: "error",
  },
  {
    inputs: [],
    name: "SignatureExpired",
    type: "error",
  },
  {
    inputs: [],
    name: "SignatureInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenDoesNotExist",
    type: "error",
  },
  {
    inputs: [],
    name: "HUB",
    outputs: [
      {
        internalType: "contract ILensHub",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "NAME",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    ],
    name: "getProfileMetadataURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
        internalType: "string",
        name: "metadata",
        type: "string",
      },
    ],
    name: "setProfileMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "profileId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "metadata",
            type: "string",
          },
          {
            components: [
              {
                internalType: "uint8",
                name: "v",
                type: "uint8",
              },
              {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
              },
              {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
              },
              {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
              },
            ],
            internalType: "struct DataTypes.EIP712Signature",
            name: "sig",
            type: "tuple",
          },
        ],
        internalType: "struct DataTypes.SetProfileMetadataWithSigData",
        name: "vars",
        type: "tuple",
      },
    ],
    name: "setProfileMetadataURIWithSig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "sigNonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "profileIds",
        type: "uint256[]",
      },
      {
        internalType: "bool[]",
        name: "enables",
        type: "bool[]",
      },
    ],
    name: "toggleFollow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "follower",
            type: "address",
          },
          {
            internalType: "uint256[]",
            name: "profileIds",
            type: "uint256[]",
          },
          {
            internalType: "bool[]",
            name: "enables",
            type: "bool[]",
          },
          {
            components: [
              {
                internalType: "uint8",
                name: "v",
                type: "uint8",
              },
              {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
              },
              {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
              },
              {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
              },
            ],
            internalType: "struct DataTypes.EIP712Signature",
            name: "sig",
            type: "tuple",
          },
        ],
        internalType: "struct DataTypes.ToggleFollowWithSigData",
        name: "vars",
        type: "tuple",
      },
    ],
    name: "toggleFollowWithSig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161122b38038061122b83398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b60805161117e6100ad6000396000818160ec0152818161023d0152818161075301528181610823015281816109e00152610a83015261117e6000f3fe608060405234801561001057600080fd5b50600436106100785760003560e01c80631bd7a4961461007d5780634f310384146100a6578063a3f4df7e146100bb578063a4c52b86146100e7578063a7698ac61461011b578063aa72c1ad1461012e578063efe4fd8314610141578063f990ccd714610154575b600080fd5b61009061008b366004610bc5565b610182565b60405161009d9190610bde565b60405180910390f35b6100b96100b4366004610c33565b610224565b005b6100906040518060400160405280600d81526020016c4c656e7350657269706865727960981b81525081565b61010e7f000000000000000000000000000000000000000000000000000000000000000081565b60405161009d9190610c74565b6100b9610129366004610cd3565b610384565b6100b961013c366004610d3e565b610397565b6100b961014f366004610d78565b6104c6565b610174610162366004610e08565b60006020819052908152604090205481565b60405190815260200161009d565b600081815260016020526040902080546060919061019f90610e25565b80601f01602080910402602001604051908101604052809291908181526020018280546101cb90610e25565b80156102185780601f106101ed57610100808354040283529160200191610218565b820191906000526020600020905b8154815290600101906020018083116101fb57829003601f168201915b50505050509050919050565b6040516331a9108f60e11b8152813560048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636352211e90602401602060405180830381865afa15801561028c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102b09190610e60565b90506103696103517fd46ddae52514a1aaf8b4d709742b061f33f2deaee1b2ecc97193734aa9c6e25f84356102e86020870187610e7d565b6040516102f6929190610ec3565b604080519182900382206001600160a01b038816600090815260208181529290208054600181019091556103369594939192909160a08b01359101610ed3565b604051602081830303815290604052805190602001206104df565b8261036436869003860160408701610ef6565b6105e4565b50610381813561037c6020840184610e7d565b6106c8565b50565b6103913385858585610723565b50505050565b6104976104787ecfb338e2b61ce79b6e570ede2bbd4588c3973904a7c46a87b69c09dfbd52096103ca6020850185610f78565b6040516020016103db929190610fc1565b604051602081830303815290604052805190602001208480604001906104019190610f78565b604051602001610412929190610ffb565b6040516020818303038152906040528051906020012060008087600001602081019061043e9190610e08565b6001600160a01b03168152602080820192909252604090810160002080546001810190915590516103369594939260c08a01359101610ed3565b6104856020840184610e08565b61036436859003850160608601610ef6565b6103816104a76020830183610e08565b6104b46020840184610f78565b6104c16040860186610f78565b610723565b6104cf836109ca565b6104da8383836106c8565b505050565b6000806105a5604080518082018252600d81526c4c656e7350657269706865727960981b60209182015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527f15755ebf4cd25adc855d8536ca663bff626d93da8b6f09dea8282fe714f22c4c818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a0808301919091528351808303909101815260c0909101909252815191012090565b60405161190160f01b602082015260228101919091526042810184905260620160408051601f1981840301815291905280516020909101209392505050565b428160600151101561060957604051630819bdcd60e01b815260040160405180910390fd5b600060018483600001518460200151856040015160405160008152602001604052604051610653949392919093845260ff9290921660208401526040830152606082015260800190565b6020604051602081039080840390855afa158015610675573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811615806106aa5750826001600160a01b0316816001600160a01b031614155b15610391576040516337e8456b60e01b815260040160405180910390fd5b60008381526001602052604090206106e1908383610b2c565b50827ff901a8b3832914a45999dd4c425fbe42eb4182724d394100401e633d9f0b286a83834260405161071693929190611036565b60405180910390a2505050565b8281146107435760405163b7c1140d60e01b815260040160405180910390fd5b8260005b818110156109785760007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a9ec65638888858181106107925761079261106f565b905060200201356040518263ffffffff1660e01b81526004016107b791815260200190565b602060405180830381865afa1580156107d4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107f89190610e60565b90506001600160a01b03811661082157604051636992d36b60e11b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316634f558e798888858181106108625761086261106f565b905060200201356040518263ffffffff1660e01b815260040161088791815260200190565b602060405180830381865afa1580156108a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108c89190611085565b6108e55760405163677510db60e11b815260040160405180910390fd5b6040516370a0823160e01b81526001600160a01b038216906370a0823190610911908b90600401610c74565b602060405180830381865afa15801561092e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061095291906110a2565b61096f57604051636992d36b60e11b815260040160405180910390fd5b50600101610747565b50856001600160a01b03167f5538c80c8d3bee397d87a7d153f7f085bb12adf2fe25a026c7cc4e83d8c5f1d786868686426040516109ba9594939291906110bb565b60405180910390a2505050505050565b6040516331a9108f60e11b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636352211e90602401602060405180830381865afa158015610a2f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a539190610e60565b6001600160a01b0316336001600160a01b03161480610b0b575060405163540528b960e01b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063540528b990602401602060405180830381865afa158015610ad2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af69190610e60565b6001600160a01b0316336001600160a01b0316145b15610b135750565b60405163f33ac98f60e01b815260040160405180910390fd5b828054610b3890610e25565b90600052602060002090601f016020900481019282610b5a5760008555610ba0565b82601f10610b735782800160ff19823516178555610ba0565b82800160010185558215610ba0579182015b82811115610ba0578235825591602001919060010190610b85565b50610bac929150610bb0565b5090565b5b80821115610bac5760008155600101610bb1565b600060208284031215610bd757600080fd5b5035919050565b600060208083528351808285015260005b81811015610c0b57858101830151858201604001528201610bef565b81811115610c1d576000604083870101525b50601f01601f1916929092016040019392505050565b600060208284031215610c4557600080fd5b81356001600160401b03811115610c5b57600080fd5b820160c08185031215610c6d57600080fd5b9392505050565b6001600160a01b0391909116815260200190565b60008083601f840112610c9a57600080fd5b5081356001600160401b03811115610cb157600080fd5b6020830191508360208260051b8501011115610ccc57600080fd5b9250929050565b60008060008060408587031215610ce957600080fd5b84356001600160401b0380821115610d0057600080fd5b610d0c88838901610c88565b90965094506020870135915080821115610d2557600080fd5b50610d3287828801610c88565b95989497509550505050565b600060208284031215610d5057600080fd5b81356001600160401b03811115610d6657600080fd5b820160e08185031215610c6d57600080fd5b600080600060408486031215610d8d57600080fd5b8335925060208401356001600160401b0380821115610dab57600080fd5b818601915086601f830112610dbf57600080fd5b813581811115610dce57600080fd5b876020828501011115610de057600080fd5b6020830194508093505050509250925092565b6001600160a01b038116811461038157600080fd5b600060208284031215610e1a57600080fd5b8135610c6d81610df3565b600181811c90821680610e3957607f821691505b60208210811415610e5a57634e487b7160e01b600052602260045260246000fd5b50919050565b600060208284031215610e7257600080fd5b8151610c6d81610df3565b6000808335601e19843603018112610e9457600080fd5b8301803591506001600160401b03821115610eae57600080fd5b602001915036819003821315610ccc57600080fd5b8183823760009101908152919050565b948552602085019390935260408401919091526060830152608082015260a00190565b600060808284031215610f0857600080fd5b604051608081016001600160401b0381118282101715610f3857634e487b7160e01b600052604160045260246000fd5b604052823560ff81168114610f4c57600080fd5b808252506020830135602082015260408301356040820152606083013560608201528091505092915050565b6000808335601e19843603018112610f8f57600080fd5b8301803591506001600160401b03821115610fa957600080fd5b6020019150600581901b3603821315610ccc57600080fd5b60006001600160fb1b03831115610fd757600080fd5b8260051b80858437600092019182525092915050565b801515811461038157600080fd5b60008184825b8581101561102b57813561101481610fed565b151583526020928301929190910190600101611001565b509095945050505050565b604081528260408201528284606083013760006060848301015260006060601f19601f8601168301019050826020830152949350505050565b634e487b7160e01b600052603260045260246000fd5b60006020828403121561109757600080fd5b8151610c6d81610fed565b6000602082840312156110b457600080fd5b5051919050565b6060808252810185905260006001600160fb1b038611156110db57600080fd5b8560051b8088608085013760809083018381038201602080860191909152918101869052869160009160a0015b8783101561113157833561111b81610fed565b1515815292810192600192909201918101611108565b80945050505050826040830152969550505050505056fea2646970667358221220223e102e3cb0a3a42df908c9539c0ad826147c5a42f4574df9551260096b06c964736f6c634300080a0033";

type LensPeripheryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LensPeripheryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LensPeriphery__factory extends ContractFactory {
  constructor(...args: LensPeripheryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "LensPeriphery";
  }

  deploy(
    hub: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LensPeriphery> {
    return super.deploy(hub, overrides || {}) as Promise<LensPeriphery>;
  }
  getDeployTransaction(
    hub: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(hub, overrides || {});
  }
  attach(address: string): LensPeriphery {
    return super.attach(address) as LensPeriphery;
  }
  connect(signer: Signer): LensPeriphery__factory {
    return super.connect(signer) as LensPeriphery__factory;
  }
  static readonly contractName: "LensPeriphery";
  public readonly contractName: "LensPeriphery";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LensPeripheryInterface {
    return new utils.Interface(_abi) as LensPeripheryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LensPeriphery {
    return new Contract(address, _abi, signerOrProvider) as LensPeriphery;
  }
}
