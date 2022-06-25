/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockLensHubV2BadRevision,
  MockLensHubV2BadRevisionInterface,
} from "../MockLensHubV2BadRevision";

const _abi = [
  {
    inputs: [],
    name: "CannotInitImplementation",
    type: "error",
  },
  {
    inputs: [],
    name: "Initialized",
    type: "error",
  },
  {
    inputs: [],
    name: "NotOwnerOrApproved",
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
    name: "ZeroSpender",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
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
    name: "burnWithSig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "exists",
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
    inputs: [],
    name: "getAdditionalValue",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
    name: "getDomainSeparator",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getState",
    outputs: [
      {
        internalType: "enum DataTypes.ProtocolState",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "mintTimestampOf",
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
    inputs: [],
    name: "name",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
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
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
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
    name: "permitForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "setAdditionalValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
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
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [],
    name: "symbol",
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
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenDataOf",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint96",
            name: "mintTimestamp",
            type: "uint96",
          },
        ],
        internalType: "struct IERC721Time.TokenData",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
    inputs: [],
    name: "totalSupply",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040526000600b5534801561001557600080fd5b5030608052608051611f526100356000396000610e2c0152611f526000f3fe608060405234801561001057600080fd5b506004361061015f5760003560e01c806301ffc9a71461016457806306fdde031461018c578063081812fc146101a1578063095ea7b3146101cc57806318160ddd146101e15780631865c57d146101f357806323b872dd146102065780632f745c591461021957806342842e0e1461022c57806342966c681461023f578063493830a4146102525780634f558e79146102655780634f6ccce71461027857806350ddf35c1461028b5780636352211e1461029e57806370a08231146102b15780637ef67f99146102c457806385e922e7146102d757806389028a13146102df57806395d89b41146102f2578063a22cb465146102fa578063b88d4fde1461030d578063c0da9bcd14610320578063c87b56dd14610360578063dd69cdb114610373578063e985e9c514610386578063ed24911d14610399578063f990ccd7146103a1578063fe4b84df146103c1575b600080fd5b61017761017236600461191c565b6103d4565b60405190151581526020015b60405180910390f35b6101946103ff565b6040516101839190611991565b6101b46101af3660046119a4565b610491565b6040516001600160a01b039091168152602001610183565b6101df6101da3660046119d9565b61051e565b005b6008545b604051908152602001610183565b600c5460ff166040516101839190611a03565b6101df610214366004611a2b565b61062f565b6101e56102273660046119d9565b610660565b6101df61023a366004611a2b565b6106f6565b6101df61024d3660046119a4565b610711565b6101df6102603660046119a4565b601855565b6101776102733660046119a4565b610744565b6101e56102863660046119a4565b61074f565b6101e56102993660046119a4565b6107e2565b6101b46102ac3660046119a4565b610878565b6101e56102bf366004611a67565b6108ef565b6101df6102d2366004611a9a565b610976565b6018546101e5565b6101df6102ed366004611ae7565b610a5c565b610194610b21565b6101df610308366004611b3c565b610b30565b6101df61031b366004611b85565b610b94565b61033361032e3660046119a4565b610bc6565b6040805182516001600160a01b031681526020928301516001600160601b03169281019290925201610183565b61019461036e3660046119a4565b610c85565b6101df610381366004611c60565b610d5d565b610177610394366004611c84565b610deb565b6101e5610e19565b6101e56103af366004611a67565b600a6020526000908152604090205481565b6101df6103cf3660046119a4565b610e28565b60006001600160e01b0319821663780e9d6360e01b14806103f957506103f982610e9e565b92915050565b60606000805461040e90611cae565b80601f016020809104026020016040519081016040528092919081815260200182805461043a90611cae565b80156104875780601f1061045c57610100808354040283529160200191610487565b820191906000526020600020905b81548152906001019060200180831161046a57829003601f168201915b5050505050905090565b600061049c82610eee565b6105025760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061052982610878565b9050806001600160a01b0316836001600160a01b031614156105975760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084016104f9565b336001600160a01b03821614806105b357506105b38133610deb565b6106205760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776044820152771b995c881b9bdc88185c1c1c9bdd995908199bdc88185b1b60421b60648201526084016104f9565b61062a8383610f0b565b505050565b6106393382610f79565b6106555760405162461bcd60e51b81526004016104f990611ce3565b61062a838383611043565b600061066b836108ef565b82106106cd5760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b60648201526084016104f9565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b61062a83838360405180602001604052806000815250610b94565b61071b3382610f79565b61073857604051636d8a29e760e11b815260040160405180910390fd5b610741816111dc565b50565b60006103f982610eee565b600061075a60085490565b82106107bd5760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b60648201526084016104f9565b600882815481106107d0576107d0611d34565b90600052602060002001549050919050565b600081815260026020526040812054600160a01b90046001600160601b0316806108695760405162461bcd60e51b815260206004820152603260248201527f4552433732313a206d696e742074696d657374616d7020717565727920666f72604482015271103737b732bc34b9ba32b73a103a37b5b2b760711b60648201526084016104f9565b6001600160601b031692915050565b6000818152600260205260408120546001600160a01b0316806103f95760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b60648201526084016104f9565b60006001600160a01b03821661095a5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b60648201526084016104f9565b506001600160a01b031660009081526003602052604090205490565b6001600160a01b03831661099d576040516307eb16dd60e21b815260040160405180910390fd5b60006109a883610878565b6001600160a01b038181166000908152600a602090815260409182902080546001810190915582517f49ecf333e5b8c95c40fdafc95c1ad136e8914a8fb55e9dc8bb01eaa83a2df9ad9281019290925292881691810191909152606080820187905260808201929092529084013560a0820152909150610a4c90610a459060c0015b60405160208183030381529060405280519060200120611266565b82846112b0565b610a568484610f0b565b50505050565b6001600160a01b038316610a83576040516307eb16dd60e21b815260040160405180910390fd5b6001600160a01b038481166000818152600a602090815260409182902080546001810190915582517f47ab88482c90e4bb94b82a947ae78fa91fb25de1469ab491f4c15b9a0a2677ee9281019290925291810192909252918516606080830191909152841515608083015260a08201929092529082013560c0820152610b1690610b0f9060e001610a2a565b85836112b0565b610a5684848461138e565b60606001805461040e90611cae565b6001600160a01b038216331415610b855760405162461bcd60e51b815260206004820152601960248201527822a9219b99189d1030b8383937bb32903a379031b0b63632b960391b60448201526064016104f9565b610b9033838361138e565b5050565b610b9e3383610f79565b610bba5760405162461bcd60e51b81526004016104f990611ce3565b610a56848484846113fb565b6040805180820190915260008082526020820152610be382610eee565b610c465760405162461bcd60e51b815260206004820152602e60248201527f4552433732313a20746f6b656e206461746120717565727920666f72206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b60648201526084016104f9565b506000908152600260209081526040918290208251808401909352546001600160a01b0381168352600160a01b90046001600160601b03169082015290565b6060610c9082610eee565b610cf45760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b60648201526084016104f9565b6000610d0b60408051602081019091526000815290565b90506000815111610d2b5760405180602001604052806000815250610d56565b80610d358461142e565b604051602001610d46929190611d4a565b6040516020818303038152906040525b9392505050565b6000610d6883610878565b6001600160a01b0381166000908152600a602090815260409182902080546001810190915582517f108ccda6d7331b00561a3eea66a2ae331622356585681c62731e4a01aae2261a92810192909252918101869052606080820192909252908401356080820152909150610de290610a459060a001610a2a565b61062a836111dc565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6000610e2361152b565b905090565b60017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316301415610e74576040516325c7410560e21b815260040160405180910390fd5b600b548111610e96576040516302ed543d60e51b815260040160405180910390fd5b600b55601855565b60006001600160e01b031982166380ac58cd60e01b1480610ecf57506001600160e01b03198216635b5e139f60e01b145b806103f957506301ffc9a760e01b6001600160e01b03198316146103f9565b6000908152600260205260409020546001600160a01b0316151590565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610f4082610878565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610f8482610eee565b610fe55760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016104f9565b6000610ff083610878565b9050806001600160a01b0316846001600160a01b0316148061102b5750836001600160a01b031661102084610491565b6001600160a01b0316145b8061103b575061103b8185610deb565b949350505050565b826001600160a01b031661105682610878565b6001600160a01b0316146110be5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b60648201526084016104f9565b6001600160a01b0382166111205760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016104f9565b61112b8383836115c0565b611136600082610f0b565b6001600160a01b038316600090815260036020526040812080546001929061115f908490611d8f565b90915550506001600160a01b038216600090815260036020526040812080546001929061118d908490611da6565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b038681169182179092559151849391871691600080516020611efd83398151915291a4505050565b60006111e782610878565b90506111f5816000846115c0565b611200600083610f0b565b6001600160a01b0381166000908152600360205260408120805460019290611229908490611d8f565b9091555050600082815260026020526040808220829055518391906001600160a01b03841690600080516020611efd833981519152908390a45050565b60008061127161152b565b60405161190160f01b602082015260228101919091526042810184905260620160408051601f1981840301815291905280516020909101209392505050565b42816060013510156112d557604051630819bdcd60e01b815260040160405180910390fd5b60006001846112e76020850185611dbe565b604080516000815260208181018084529490945260ff9092168282015291850135606082015290840135608082015260a0016020604051602081039080840390855afa15801561133b573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811615806113705750826001600160a01b0316816001600160a01b031614155b15610a56576040516337e8456b60e01b815260040160405180910390fd5b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b611406848484611043565b61141284848484611678565b610a565760405162461bcd60e51b81526004016104f990611de1565b6060816114525750506040805180820190915260018152600360fc1b602082015290565b8160005b811561147c578061146681611e33565b91506114759050600a83611e64565b9150611456565b6000816001600160401b0381111561149657611496611b6f565b6040519080825280601f01601f1916602001820160405280156114c0576020820181803683370190505b5090505b841561103b576114d5600183611d8f565b91506114e2600a86611e78565b6114ed906030611da6565b60f81b81838151811061150257611502611d34565b60200101906001600160f81b031916908160001a905350611524600a86611e64565b94506114c4565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6115566103ff565b80516020918201206040805192830193909352918101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b6001600160a01b03831661161b5761161681600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b61163e565b816001600160a01b0316836001600160a01b03161461163e5761163e8382611776565b6001600160a01b0382166116555761062a81611813565b826001600160a01b0316826001600160a01b03161461062a5761062a82826118c2565b60006001600160a01b0384163b1561176b57604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906116bc903390899088908890600401611e8c565b6020604051808303816000875af19250505080156116f7575060408051601f3d908101601f191682019092526116f491810190611ec9565b60015b611751573d808015611725576040519150601f19603f3d011682016040523d82523d6000602084013e61172a565b606091505b5080516117495760405162461bcd60e51b81526004016104f990611de1565b805181602001fd5b6001600160e01b031916630a85bd0160e11b14905061103b565b506001949350505050565b60006001611783846108ef565b61178d9190611d8f565b6000838152600760205260409020549091508082146117e0576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b60085460009061182590600190611d8f565b6000838152600960205260408120546008805493945090928490811061184d5761184d611d34565b90600052602060002001549050806008838154811061186e5761186e611d34565b60009182526020808320909101929092558281526009909152604080822084905585825281205560088054806118a6576118a6611ee6565b6001900381819060005260206000200160009055905550505050565b60006118cd836108ef565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b6001600160e01b03198116811461074157600080fd5b60006020828403121561192e57600080fd5b8135610d5681611906565b60005b8381101561195457818101518382015260200161193c565b83811115610a565750506000910152565b6000815180845261197d816020860160208601611939565b601f01601f19169290920160200192915050565b602081526000610d566020830184611965565b6000602082840312156119b657600080fd5b5035919050565b80356001600160a01b03811681146119d457600080fd5b919050565b600080604083850312156119ec57600080fd5b6119f5836119bd565b946020939093013593505050565b6020810160038310611a2557634e487b7160e01b600052602160045260246000fd5b91905290565b600080600060608486031215611a4057600080fd5b611a49846119bd565b9250611a57602085016119bd565b9150604084013590509250925092565b600060208284031215611a7957600080fd5b610d56826119bd565b600060808284031215611a9457600080fd5b50919050565b600080600060c08486031215611aaf57600080fd5b611ab8846119bd565b925060208401359150611ace8560408601611a82565b90509250925092565b803580151581146119d457600080fd5b60008060008060e08587031215611afd57600080fd5b611b06856119bd565b9350611b14602086016119bd565b9250611b2260408601611ad7565b9150611b318660608701611a82565b905092959194509250565b60008060408385031215611b4f57600080fd5b611b58836119bd565b9150611b6660208401611ad7565b90509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215611b9b57600080fd5b611ba4856119bd565b9350611bb2602086016119bd565b92506040850135915060608501356001600160401b0380821115611bd557600080fd5b818701915087601f830112611be957600080fd5b813581811115611bfb57611bfb611b6f565b604051601f8201601f19908116603f01168101908382118183101715611c2357611c23611b6f565b816040528281528a6020848701011115611c3c57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060a08385031215611c7357600080fd5b82359150611b668460208501611a82565b60008060408385031215611c9757600080fd5b611ca0836119bd565b9150611b66602084016119bd565b600181811c90821680611cc257607f821691505b60208210811415611a9457634e487b7160e01b600052602260045260246000fd5b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b60008351611d5c818460208801611939565b835190830190611d70818360208801611939565b01949350505050565b634e487b7160e01b600052601160045260246000fd5b600082821015611da157611da1611d79565b500390565b60008219821115611db957611db9611d79565b500190565b600060208284031215611dd057600080fd5b813560ff81168114610d5657600080fd5b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6000600019821415611e4757611e47611d79565b5060010190565b634e487b7160e01b600052601260045260246000fd5b600082611e7357611e73611e4e565b500490565b600082611e8757611e87611e4e565b500690565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611ebf90830184611965565b9695505050505050565b600060208284031215611edb57600080fd5b8151610d5681611906565b634e487b7160e01b600052603160045260246000fdfeddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220d416c998ebd9d83181f72074a3b10c3bc0493f6ec1f44d4baf2181cd8b13444464736f6c634300080a0033";

type MockLensHubV2BadRevisionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockLensHubV2BadRevisionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockLensHubV2BadRevision__factory extends ContractFactory {
  constructor(...args: MockLensHubV2BadRevisionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MockLensHubV2BadRevision";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockLensHubV2BadRevision> {
    return super.deploy(overrides || {}) as Promise<MockLensHubV2BadRevision>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockLensHubV2BadRevision {
    return super.attach(address) as MockLensHubV2BadRevision;
  }
  connect(signer: Signer): MockLensHubV2BadRevision__factory {
    return super.connect(signer) as MockLensHubV2BadRevision__factory;
  }
  static readonly contractName: "MockLensHubV2BadRevision";
  public readonly contractName: "MockLensHubV2BadRevision";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockLensHubV2BadRevisionInterface {
    return new utils.Interface(_abi) as MockLensHubV2BadRevisionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockLensHubV2BadRevision {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockLensHubV2BadRevision;
  }
}
