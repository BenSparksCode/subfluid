/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TimedFeeCollectModule,
  TimedFeeCollectModuleInterface,
} from "../TimedFeeCollectModule";

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
    name: "CollectExpired",
    type: "error",
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
        internalType: "uint256",
        name: "pubId",
        type: "uint256",
      },
    ],
    name: "getPublicationData",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint16",
            name: "referralFee",
            type: "uint16",
          },
          {
            internalType: "bool",
            name: "followerOnly",
            type: "bool",
          },
          {
            internalType: "uint40",
            name: "endTimestamp",
            type: "uint40",
          },
        ],
        internalType: "struct ProfilePublicationData",
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
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b506040516200167a3803806200167a833981016040819052620000349162000131565b81816001600160a01b0381166200005e576040516348be0eb360e01b815260040160405180910390fd5b6001600160a01b03811660808190526040514281527f4e84a529f4c627b5e787037d117873af1018768804cca3c7f0d47041fe2c89ed9060200160405180910390a2506001600160a01b038116620000c9576040516348be0eb360e01b815260040160405180910390fd5b6001600160a01b03811660a08190526040514281527ff1a1fa6b64aa95186f5a1285e76198d0da80d9c5a88062641d447f1d7c54e56c9060200160405180910390a250505062000169565b80516001600160a01b03811681146200012c57600080fd5b919050565b600080604083850312156200014557600080fd5b620001508362000114565b9150620001606020840162000114565b90509250929050565b60805160a0516114b3620001c7600039600081816101e60152818161024a0152818161051c0152818161070201528181610852015281816109790152610c230152600081816101a70152818161065d0152610d7f01526114b36000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063a4c52b8611610050578063a4c52b86146101e1578063c233f95114610208578063e49c3dda1461022857600080fd5b80633f5038921461006c57806388ffe851146101a2575b600080fd5b61013161007a366004611100565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091525060009182526020828152604080842092845291815291819020815160c0810183528154815260018201546001600160a01b039081169482019490945260029091015492831691810191909152600160a01b820461ffff166060820152600160b01b820460ff1615156080820152600160b81b90910464ffffffffff1660a082015290565b6040516101999190600060c0820190508251825260208301516001600160a01b038082166020850152806040860151166040850152505061ffff606084015116606083015260808301511515608083015264ffffffffff60a08401511660a083015292915050565b60405180910390f35b6101c97f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610199565b6101c97f000000000000000000000000000000000000000000000000000000000000000081565b61021b61021636600461116b565b61023d565b6040516101999190611216565b61023b610236366004611241565b610511565b005b6060336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610288576040516313bd2e8360e31b815260040160405180910390fd5b4262015180016000808080806102a0888a018a6112d2565b945094509450945094506102b384610622565b15806102c657506001600160a01b038316155b806102d6575061271061ffff8316115b806102df575084155b15610316576040517f48be0eb300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b846000808d815260200190815260200160002060008c815260200190815260200160002060000181905550836000808d815260200190815260200160002060008c815260200190815260200160002060010160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550826000808d815260200190815260200160002060008c815260200190815260200160002060020160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550816000808d815260200190815260200160002060008c815260200190815260200160002060020160146101000a81548161ffff021916908361ffff160217905550806000808d815260200190815260200160002060008c815260200190815260200160002060020160166101000a81548160ff021916908315150217905550856000808d815260200190815260200160002060008c815260200190815260200160002060020160176101000a81548164ffffffffff021916908364ffffffffff16021790555084848484848a6040516020016104f2969594939291909586526001600160a01b03948516602087015292909316604085015261ffff166060840152901515608083015264ffffffffff1660a082015260c00190565b6040516020818303038152906040529650505050505050949350505050565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461055a576040516313bd2e8360e31b815260040160405180910390fd5b600084815260208181526040808320868452909152902060020154600160b01b900460ff161561058e5761058e84866106d0565b600084815260208181526040808320868452909152902060020154600160b81b900464ffffffffff16428110156105f1576040517f99ae072000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8487141561060b576106068686868686610a4f565b610619565b610619878787878787610b24565b50505050505050565b6040517f43b938c50000000000000000000000000000000000000000000000000000000081526001600160a01b0382811660048301526000917f0000000000000000000000000000000000000000000000000000000000000000909116906343b938c590602401602060405180830381865afa1580156106a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ca919061133a565b92915050565b6040517fd923d20c000000000000000000000000000000000000000000000000000000008152600481018390526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063d923d20c90602401602060405180830381865afa158015610751573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107759190611357565b905060006001600160a01b03821615610820576040517f451c3d0c000000000000000000000000000000000000000000000000000000008152600481018590526001600160a01b0384811660248301526000604483015283169063451c3d0c90606401602060405180830381865afa1580156107f5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610819919061133a565b9050610964565b6040517fa9ec6563000000000000000000000000000000000000000000000000000000008152600481018590526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9ec656390602401602060405180830381865afa1580156108a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108c59190611357565b90506001600160a01b0381161580159061096057506040517f70a082310000000000000000000000000000000000000000000000000000000081526001600160a01b0385811660048301528216906370a0823190602401602060405180830381865afa158015610939573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061095d9190611374565b15155b9150505b80158015610a125750826001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636352211e866040518263ffffffff1660e01b81526004016109c591815260200190565b602060405180830381865afa1580156109e2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a069190611357565b6001600160a01b031614155b15610a49576040517fd325a6d600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b600084815260208181526040808320868452909152902080546001909101546001600160a01b0316610a8384848385610d07565b600080610a8e610d7a565b60008a8152602081815260408083208c84529091528120600201549294509092506001600160a01b0390911690612710610acc61ffff8516886113a3565b610ad691906113c2565b90506000610ae482886113e4565b9050610afb6001600160a01b0387168d8584610e06565b8115610b1657610b166001600160a01b0387168d8785610e06565b505050505050505050505050565b600084815260208181526040808320868452909152902080546001909101546001600160a01b0316610b5884848385610d07565b600086815260208181526040808320888452909152812060020154600160a01b900461ffff16908080610b89610d7a565b9093509050612710610b9f61ffff8316886113a3565b610ba991906113c2565b915060009050610bb982876113e4565b90508315610ca8576000612710610bd086846113a3565b610bda91906113c2565b9050610be681836113e4565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018f90529092506000906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690636352211e90602401602060405180830381865afa158015610c6a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c8e9190611357565b9050610ca56001600160a01b0388168e8385610e06565b50505b60008a8152602081815260408083208c84529091529020600201546001600160a01b0390811690610cdd9087168d8385610e06565b8215610cf857610cf86001600160a01b0387168d8686610e06565b50505050505050505050505050565b600080610d16858701876113fb565b915091508281141580610d3b5750836001600160a01b0316826001600160a01b031614155b15610d72576040517f46308bd500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166398f965d16040518163ffffffff1660e01b81526004016040805180830381865afa158015610dda573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dfe9190611427565b915091509091565b604080516001600160a01b038581166024830152848116604483015260648083018590528351808403909101815260849092018352602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd0000000000000000000000000000000000000000000000000000000017905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656490840152610a4992879291600091610ecc918516908490610f66565b805190915015610f615780806020019051810190610eea919061133a565b610f615760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b505050565b6060610f758484600085610f7f565b90505b9392505050565b606082471015610ff75760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610f58565b6001600160a01b0385163b61104e5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610f58565b600080866001600160a01b0316858760405161106a9190611461565b60006040518083038185875af1925050503d80600081146110a7576040519150601f19603f3d011682016040523d82523d6000602084013e6110ac565b606091505b50915091506110bc8282866110c7565b979650505050505050565b606083156110d6575081610f78565b8251156110e65782518084602001fd5b8160405162461bcd60e51b8152600401610f589190611216565b6000806040838503121561111357600080fd5b50508035926020909101359150565b60008083601f84011261113457600080fd5b50813567ffffffffffffffff81111561114c57600080fd5b60208301915083602082850101111561116457600080fd5b9250929050565b6000806000806060858703121561118157600080fd5b8435935060208501359250604085013567ffffffffffffffff8111156111a657600080fd5b6111b287828801611122565b95989497509550505050565b60005b838110156111d95781810151838201526020016111c1565b83811115610a495750506000910152565b600081518084526112028160208601602086016111be565b601f01601f19169290920160200192915050565b602081526000610f7860208301846111ea565b6001600160a01b038116811461123e57600080fd5b50565b60008060008060008060a0878903121561125a57600080fd5b86359550602087013561126c81611229565b94506040870135935060608701359250608087013567ffffffffffffffff81111561129657600080fd5b6112a289828a01611122565b979a9699509497509295939492505050565b61ffff8116811461123e57600080fd5b801515811461123e57600080fd5b600080600080600060a086880312156112ea57600080fd5b8535945060208601356112fc81611229565b9350604086013561130c81611229565b9250606086013561131c816112b4565b9150608086013561132c816112c4565b809150509295509295909350565b60006020828403121561134c57600080fd5b8151610f78816112c4565b60006020828403121561136957600080fd5b8151610f7881611229565b60006020828403121561138657600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b60008160001904831182151516156113bd576113bd61138d565b500290565b6000826113df57634e487b7160e01b600052601260045260246000fd5b500490565b6000828210156113f6576113f661138d565b500390565b6000806040838503121561140e57600080fd5b823561141981611229565b946020939093013593505050565b6000806040838503121561143a57600080fd5b825161144581611229565b6020840151909250611456816112b4565b809150509250929050565b600082516114738184602087016111be565b919091019291505056fea2646970667358221220f04a08727b5015bf35b89eeaf2089c1c5913709fe6e2f555bbf10414c1fc845f64736f6c634300080a0033";

type TimedFeeCollectModuleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TimedFeeCollectModuleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TimedFeeCollectModule__factory extends ContractFactory {
  constructor(...args: TimedFeeCollectModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TimedFeeCollectModule";
  }

  deploy(
    hub: string,
    moduleGlobals: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TimedFeeCollectModule> {
    return super.deploy(
      hub,
      moduleGlobals,
      overrides || {}
    ) as Promise<TimedFeeCollectModule>;
  }
  getDeployTransaction(
    hub: string,
    moduleGlobals: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(hub, moduleGlobals, overrides || {});
  }
  attach(address: string): TimedFeeCollectModule {
    return super.attach(address) as TimedFeeCollectModule;
  }
  connect(signer: Signer): TimedFeeCollectModule__factory {
    return super.connect(signer) as TimedFeeCollectModule__factory;
  }
  static readonly contractName: "TimedFeeCollectModule";
  public readonly contractName: "TimedFeeCollectModule";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimedFeeCollectModuleInterface {
    return new utils.Interface(_abi) as TimedFeeCollectModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TimedFeeCollectModule {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TimedFeeCollectModule;
  }
}
