/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UIDataProvider,
  UIDataProviderInterface,
} from "../UIDataProvider";

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
    inputs: [
      {
        internalType: "string",
        name: "handle",
        type: "string",
      },
    ],
    name: "getLatestDataByHandle",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "uint256",
                name: "pubCount",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "followModule",
                type: "address",
              },
              {
                internalType: "address",
                name: "followNFT",
                type: "address",
              },
              {
                internalType: "string",
                name: "handle",
                type: "string",
              },
              {
                internalType: "string",
                name: "imageURI",
                type: "string",
              },
              {
                internalType: "string",
                name: "followNFTURI",
                type: "string",
              },
            ],
            internalType: "struct DataTypes.ProfileStruct",
            name: "profileStruct",
            type: "tuple",
          },
          {
            components: [
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
                internalType: "string",
                name: "contentURI",
                type: "string",
              },
              {
                internalType: "address",
                name: "referenceModule",
                type: "address",
              },
              {
                internalType: "address",
                name: "collectModule",
                type: "address",
              },
              {
                internalType: "address",
                name: "collectNFT",
                type: "address",
              },
            ],
            internalType: "struct DataTypes.PublicationStruct",
            name: "publicationStruct",
            type: "tuple",
          },
        ],
        internalType: "struct LatestData",
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
    ],
    name: "getLatestDataByProfile",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "uint256",
                name: "pubCount",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "followModule",
                type: "address",
              },
              {
                internalType: "address",
                name: "followNFT",
                type: "address",
              },
              {
                internalType: "string",
                name: "handle",
                type: "string",
              },
              {
                internalType: "string",
                name: "imageURI",
                type: "string",
              },
              {
                internalType: "string",
                name: "followNFTURI",
                type: "string",
              },
            ],
            internalType: "struct DataTypes.ProfileStruct",
            name: "profileStruct",
            type: "tuple",
          },
          {
            components: [
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
                internalType: "string",
                name: "contentURI",
                type: "string",
              },
              {
                internalType: "address",
                name: "referenceModule",
                type: "address",
              },
              {
                internalType: "address",
                name: "collectModule",
                type: "address",
              },
              {
                internalType: "address",
                name: "collectNFT",
                type: "address",
              },
            ],
            internalType: "struct DataTypes.PublicationStruct",
            name: "publicationStruct",
            type: "tuple",
          },
        ],
        internalType: "struct LatestData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051610a1b380380610a1b83398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b6080516109756100a66000396000818160b20152818161014c015281816101ef01528181610292015261033d01526109756000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80639d933d401461003b578063ed88bde414610064575b600080fd5b61004e6100493660046104fe565b610077565b60405161005b919061063e565b60405180910390f35b61004e6100723660046106f5565b610271565b61007f6103be565b6040517f20fa728a0000000000000000000000000000000000000000000000000000000081526000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906320fa728a906100e790869060040161070e565b602060405180830381865afa158015610104573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101289190610728565b604051633c23d3d960e21b8152600481018290529091506000906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063f08f4f6490602401600060405180830381865afa158015610193573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526101bb91908101906107aa565b80516040805180820182528381529051630c736c9960e41b81526004810186905260248101839052929350909160208201907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c736c99090604401600060405180830381865afa15801561023e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610266919081019061088b565b905295945050505050565b6102796103be565b604051633c23d3d960e21b8152600481018390526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063f08f4f6490602401600060405180830381865afa1580156102e1573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261030991908101906107aa565b80516040805180820182528381529051630c736c9960e41b81526004810187905260248101839052929350909160208201907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c736c99090604401600060405180830381865afa15801561038c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103b4919081019061088b565b9052949350505050565b60405180604001604052806104146040518060c001604052806000815260200160006001600160a01b0316815260200160006001600160a01b031681526020016060815260200160608152602001606081525090565b81526040805160c0810182526000808252602082810182905260609383018490529282018190526080820181905260a082015291015290565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160c0810167ffffffffffffffff8111828210171561049f5761049f61044d565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156104ce576104ce61044d565b604052919050565b600067ffffffffffffffff8211156104f0576104f061044d565b50601f01601f191660200190565b60006020828403121561051057600080fd5b813567ffffffffffffffff81111561052757600080fd5b8201601f8101841361053857600080fd5b803561054b610546826104d6565b6104a5565b81815285602083850101111561056057600080fd5b81602084016020830137600091810160200191909152949350505050565b60005b83811015610599578181015183820152602001610581565b838111156105a8576000848401525b50505050565b600081518084526105c681602086016020860161057e565b601f01601f19169290920160200192915050565b80518252602081015160208301526000604082015160c0604085015261060360c08501826105ae565b905060608301516001600160a01b0380821660608701528060808601511660808701528060a08601511660a087015250508091505092915050565b6020815260008251604060208401528051606084015260208101516001600160a01b0380821660808601528060408401511660a08601525050606081015160c0808501526106906101208501826105ae565b90506080820151605f19808684030160e08701526106ae83836105ae565b925060a08401519350808684030161010087015250506106ce81836105ae565b9150506020840151601f198483030160408501526106ec82826105da565b95945050505050565b60006020828403121561070757600080fd5b5035919050565b60208152600061072160208301846105ae565b9392505050565b60006020828403121561073a57600080fd5b5051919050565b80516001600160a01b038116811461075857600080fd5b919050565b600082601f83011261076e57600080fd5b815161077c610546826104d6565b81815284602083860101111561079157600080fd5b6107a282602083016020870161057e565b949350505050565b6000602082840312156107bc57600080fd5b815167ffffffffffffffff808211156107d457600080fd5b9083019060c082860312156107e857600080fd5b6107f061047c565b8251815261080060208401610741565b602082015261081160408401610741565b604082015260608301518281111561082857600080fd5b6108348782860161075d565b60608301525060808301518281111561084c57600080fd5b6108588782860161075d565b60808301525060a08301518281111561087057600080fd5b61087c8782860161075d565b60a08301525095945050505050565b60006020828403121561089d57600080fd5b815167ffffffffffffffff808211156108b557600080fd5b9083019060c082860312156108c957600080fd5b6108d161047c565b82518152602083015160208201526040830151828111156108f157600080fd5b6108fd8782860161075d565b60408301525061090f60608401610741565b606082015261092060808401610741565b608082015261093160a08401610741565b60a08201529594505050505056fea2646970667358221220b7fa2eb8c734d6eeb45fc95610b1243266854edc8c69d6d52411a07c376e5aee64736f6c634300080a0033";

type UIDataProviderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UIDataProviderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UIDataProvider__factory extends ContractFactory {
  constructor(...args: UIDataProviderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "UIDataProvider";
  }

  deploy(
    hub: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UIDataProvider> {
    return super.deploy(hub, overrides || {}) as Promise<UIDataProvider>;
  }
  getDeployTransaction(
    hub: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(hub, overrides || {});
  }
  attach(address: string): UIDataProvider {
    return super.attach(address) as UIDataProvider;
  }
  connect(signer: Signer): UIDataProvider__factory {
    return super.connect(signer) as UIDataProvider__factory;
  }
  static readonly contractName: "UIDataProvider";
  public readonly contractName: "UIDataProvider";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UIDataProviderInterface {
    return new utils.Interface(_abi) as UIDataProviderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UIDataProvider {
    return new Contract(address, _abi, signerOrProvider) as UIDataProvider;
  }
}
