/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ContractsRegister,
  ContractsRegisterInterface,
} from "../../../contracts/core/ContractsRegister";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "addressProvider",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "creditManager",
        type: "address",
      },
    ],
    name: "NewCreditManagerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "NewPoolAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newCreditManager",
        type: "address",
      },
    ],
    name: "addCreditManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newPoolAddress",
        type: "address",
      },
    ],
    name: "addPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "creditManagers",
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
    name: "getCreditManagers",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCreditManagersCount",
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
    name: "getPools",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPoolsCount",
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
        name: "",
        type: "address",
      },
    ],
    name: "isCreditManager",
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
        name: "",
        type: "address",
      },
    ],
    name: "isPool",
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
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "pools",
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
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
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
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161107438038061107483398101604081905261002f916100fb565b6000805460ff1916905560408051808201909152600281526105a360f41b602082015281906001600160a01b0382166100845760405162461bcd60e51b815260040161007b919061012b565b60405180910390fd5b50806001600160a01b031663087376956040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100e791906100fb565b6001600160a01b0316608052506101809050565b60006020828403121561010d57600080fd5b81516001600160a01b038116811461012457600080fd5b9392505050565b600060208083528351808285015260005b818110156101585785810183015185820160400152820161013c565b8181111561016a576000604083870101525b50601f01601f1916929092016040019392505050565b608051610ec46101b0600039600081816102800152818161041f015281816105c101526108ca0152610ec46000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80638456cb591161008c578063b4ac686011610066578063b4ac6860146101e5578063c29277cd146101ed578063d914cd4b146101f5578063e26b2f631461020857600080fd5b80638456cb59146101c257806394144856146101ca578063ac4afa38146101d257600080fd5b80635b16ebb7116100c85780635b16ebb71461014c5780635c975abb1461017f578063673a2a1f1461018a5780636fbc6f6b1461019f57600080fd5b80631e16e4fc146100ef5780633f4ba83a1461012c57806354fd4d5014610136575b600080fd5b6101026100fd366004610d49565b61021b565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b610134610252565b005b61013e600181565b604051908152602001610123565b61016f61015a366004610d62565b60026020526000908152604090205460ff1681565b6040519015158152602001610123565b60005460ff1661016f565b610192610382565b6040516101239190610d9f565b61016f6101ad366004610d62565b60046020526000908152604090205460ff1681565b6101346103f1565b610192610516565b6101026101e0366004610d49565b610583565b60015461013e565b60035461013e565b610134610203366004610d62565b610593565b610134610216366004610d62565b61089c565b6003818154811061022b57600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b6040517fd4eb5db00000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063d4eb5db090602401602060405180830381865afa1580156102dc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103009190610df9565b6040518060400160405280600481526020017f41434c310000000000000000000000000000000000000000000000000000000081525090610377576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036e9190610e1b565b60405180910390fd5b50610380610ba8565b565b606060018054806020026020016040519081016040528092919081815260200182805480156103e757602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff1681526001909101906020018083116103bc575b5050505050905090565b6040517f3a41ec640000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690633a41ec6490602401602060405180830381865afa15801561047b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061049f9190610df9565b6040518060400160405280600481526020017f41434c31000000000000000000000000000000000000000000000000000000008152509061050d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036e9190610e1b565b50610380610c89565b606060038054806020026020016040519081016040528092919081815260200182805480156103e75760200282019190600052602060002090815473ffffffffffffffffffffffffffffffffffffffff1681526001909101906020018083116103bc575050505050905090565b6001818154811061022b57600080fd5b6040517f5f259aba0000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690635f259aba90602401602060405180830381865afa15801561061d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106419190610df9565b6040518060400160405280600481526020017f41434c3200000000000000000000000000000000000000000000000000000000815250906106af576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036e9190610e1b565b5060408051808201909152600281527f5a30000000000000000000000000000000000000000000000000000000000000602082015273ffffffffffffffffffffffffffffffffffffffff8216610732576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036e9190610e1b565b5073ffffffffffffffffffffffffffffffffffffffff8116600090815260026020908152604091829020548251808401909352600383527f43523100000000000000000000000000000000000000000000000000000000009183019190915260ff16156107cc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036e9190610e1b565b506001805480820182557fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff841690811790915560008181526002602052604080822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016909417909355915190917ff816b5143086c89d103a0683286be86c2b741e83ebfa75135aae606e2f5c6e5391a250565b6040517f5f259aba0000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690635f259aba90602401602060405180830381865afa158015610926573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061094a9190610df9565b6040518060400160405280600481526020017f41434c3200000000000000000000000000000000000000000000000000000000815250906109b8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036e9190610e1b565b5060408051808201909152600281527f5a30000000000000000000000000000000000000000000000000000000000000602082015273ffffffffffffffffffffffffffffffffffffffff8216610a3b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036e9190610e1b565b5073ffffffffffffffffffffffffffffffffffffffff8116600090815260046020908152604091829020548251808401909352600383527f43523200000000000000000000000000000000000000000000000000000000009183019190915260ff1615610ad5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036e9190610e1b565b506003805460018082019092557fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b0180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff841690811790915560008181526004602052604080822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016909417909355915190917f58ad3cfc4b6552a53c8c4128ae9b080e14b4378a159280643a62c6f709cee24f91a250565b60005460ff16610c14576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604482015260640161036e565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390a1565b60005460ff1615610cf6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5061757361626c653a2070617573656400000000000000000000000000000000604482015260640161036e565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610c5f3390565b600060208284031215610d5b57600080fd5b5035919050565b600060208284031215610d7457600080fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610d9857600080fd5b9392505050565b6020808252825182820181905260009190848201906040850190845b81811015610ded57835173ffffffffffffffffffffffffffffffffffffffff1683529284019291840191600101610dbb565b50909695505050505050565b600060208284031215610e0b57600080fd5b81518015158114610d9857600080fd5b600060208083528351808285015260005b81811015610e4857858101830151858201604001528201610e2c565b81811115610e5a576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01692909201604001939250505056fea264697066735822122023e72a40930ff3d710a7e4193434fa8e28199d020bc56e10a5c9f26f576c5aec64736f6c634300080a0033";

type ContractsRegisterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ContractsRegisterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ContractsRegister__factory extends ContractFactory {
  constructor(...args: ContractsRegisterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    addressProvider: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractsRegister> {
    return super.deploy(
      addressProvider,
      overrides || {}
    ) as Promise<ContractsRegister>;
  }
  override getDeployTransaction(
    addressProvider: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(addressProvider, overrides || {});
  }
  override attach(address: string): ContractsRegister {
    return super.attach(address) as ContractsRegister;
  }
  override connect(signer: Signer): ContractsRegister__factory {
    return super.connect(signer) as ContractsRegister__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ContractsRegisterInterface {
    return new utils.Interface(_abi) as ContractsRegisterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ContractsRegister {
    return new Contract(address, _abi, signerOrProvider) as ContractsRegister;
  }
}
