/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BytesLike,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FollowNFTProxy,
  FollowNFTProxyInterface,
} from "../FollowNFTProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b506040516106e63803806106e683398101604081905261002f9161025f565b336001600160a01b03166080816001600160a01b0316815250506100ca81336001600160a01b0316633502ac4b6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561008b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100af919061030b565b6001600160a01b03166100d160201b6100291790919060201c565b5050610383565b60606100f683836040518060600160405280602781526020016106bf602791396100fd565b9392505050565b60606001600160a01b0384163b61016a5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084015b60405180910390fd5b600080856001600160a01b0316856040516101859190610334565b600060405180830381855af49150503d80600081146101c0576040519150601f19603f3d011682016040523d82523d6000602084013e6101c5565b606091505b5090925090506101d68282866101e0565b9695505050505050565b606083156101ef5750816100f6565b8251156101ff5782518084602001fd5b8160405162461bcd60e51b81526004016101619190610350565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561024a578181015183820152602001610232565b83811115610259576000848401525b50505050565b60006020828403121561027157600080fd5b81516001600160401b038082111561028857600080fd5b818401915084601f83011261029c57600080fd5b8151818111156102ae576102ae610219565b604051601f8201601f19908116603f011681019083821181831017156102d6576102d6610219565b816040528281528760208487010111156102ef57600080fd5b61030083602083016020880161022f565b979650505050505050565b60006020828403121561031d57600080fd5b81516001600160a01b03811681146100f657600080fd5b6000825161034681846020870161022f565b9190910192915050565b602081526000825180602084015261036f81604085016020870161022f565b601f01601f19169190910160400192915050565b60805161032261039d6000396000605901526103226000f3fe60806040523661001357610011610017565b005b6100115b610027610022610055565b6100de565b565b606061004e83836040518060600160405280602781526020016102c660279139610102565b9392505050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316633502ac4b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100d9919061021d565b905090565b3660008037600080366000845af43d6000803e8080156100fd573d6000f35b3d6000fd5b60606001600160a01b0384163b61016f5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084015b60405180910390fd5b600080856001600160a01b03168560405161018a9190610276565b600060405180830381855af49150503d80600081146101c5576040519150601f19603f3d011682016040523d82523d6000602084013e6101ca565b606091505b50915091506101da8282866101e4565b9695505050505050565b606083156101f357508161004e565b8251156102035782518084602001fd5b8160405162461bcd60e51b81526004016101669190610292565b60006020828403121561022f57600080fd5b81516001600160a01b038116811461004e57600080fd5b60005b83811015610261578181015183820152602001610249565b83811115610270576000848401525b50505050565b60008251610288818460208701610246565b9190910192915050565b60208152600082518060208401526102b1816040850160208701610246565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212205c6f1fe833aa61a6486d7544ef7c67f9cb0f0619b923b2a0919b092d8c58b7e764736f6c634300080a0033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564";

type FollowNFTProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FollowNFTProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FollowNFTProxy__factory extends ContractFactory {
  constructor(...args: FollowNFTProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "FollowNFTProxy";
  }

  deploy(
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FollowNFTProxy> {
    return super.deploy(data, overrides || {}) as Promise<FollowNFTProxy>;
  }
  getDeployTransaction(
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(data, overrides || {});
  }
  attach(address: string): FollowNFTProxy {
    return super.attach(address) as FollowNFTProxy;
  }
  connect(signer: Signer): FollowNFTProxy__factory {
    return super.connect(signer) as FollowNFTProxy__factory;
  }
  static readonly contractName: "FollowNFTProxy";
  public readonly contractName: "FollowNFTProxy";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FollowNFTProxyInterface {
    return new utils.Interface(_abi) as FollowNFTProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FollowNFTProxy {
    return new Contract(address, _abi, signerOrProvider) as FollowNFTProxy;
  }
}
