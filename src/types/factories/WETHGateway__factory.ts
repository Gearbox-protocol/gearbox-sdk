/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { WETHGateway } from "../WETHGateway";

export class WETHGateway__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(addressProvider: string, overrides?: Overrides): Promise<WETHGateway> {
    return super.deploy(
      addressProvider,
      overrides || {}
    ) as Promise<WETHGateway>;
  }
  getDeployTransaction(
    addressProvider: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(addressProvider, overrides || {});
  }
  attach(address: string): WETHGateway {
    return super.attach(address) as WETHGateway;
  }
  connect(signer: Signer): WETHGateway__factory {
    return super.connect(signer) as WETHGateway__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WETHGateway {
    return new Contract(address, _abi, signerOrProvider) as WETHGateway;
  }
}

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
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "onBehalfOf",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "referralCode",
        type: "uint16",
      },
    ],
    name: "addLiquidityETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "creditManager",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "onBehalfOf",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "leverageFactor",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "referralCode",
        type: "uint256",
      },
    ],
    name: "openCreditAccountETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "to",
        type: "address",
      },
    ],
    name: "removeLiquidityETH",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "creditManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "repayCreditAccountETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "unwrapWETH",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "wethAddress",
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
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200240538038062002405833981810160405260208110156200003757600080fd5b81019080805190602001909291905050508073ffffffffffffffffffffffffffffffffffffffff16634c252f916040518163ffffffff1660e01b815260040160206040518083038186803b1580156200008f57600080fd5b505afa158015620000a4573d6000803e3d6000fd5b505050506040513d6020811015620000bb57600080fd5b81019080805190602001909291905050506000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff1663c513c9bb6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200015257600080fd5b505afa15801562000167573d6000803e3d6000fd5b505050506040513d60208110156200017e57600080fd5b8101908080519060200190929190505050600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505061222580620001e06000396000f3fe6080604052600436106100595760003560e01c80634f0e0ef3146101745780635869dba8146101b5578063a6eab5c214610210578063d8c99bc314610274578063deecfbc9146102ec578063e79a40891461035e5761016f565b3661016f5760008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161460405180606001604052806024815260200161214e602491399061016c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610131578082015181840152602081019050610116565b50505050905090810190601f16801561015e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50005b600080fd5b34801561018057600080fd5b506101896103d9565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101c157600080fd5b5061020e600480360360408110156101d857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506103fd565b005b6102726004803603604081101561022657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610591565b005b6102ea6004803603608081101561028a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190505050610b4d565b005b61035c6004803603606081101561030257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803561ffff169060200190929190505050610f8c565b005b34801561036a57600080fd5b506103d76004803603606081101561038157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506113c6565b005b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b33600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636fbc6f6b826040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561048757600080fd5b505afa15801561049b573d6000803e3d6000fd5b505050506040513d60208110156104b157600080fd5b81019080805190602001909291905050506040518060600160405280602f8152602001612172602f913990610581576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561054657808201518184015260208101905061052b565b50505050905090810190601f1680156105735780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5061058c8383611820565b505050565b81600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636fbc6f6b826040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561061b57600080fd5b505afa15801561062f573d6000803e3d6000fd5b505050506040513d602081101561064557600080fd5b81019080805190602001909291905050506040518060600160405280602f8152602001612172602f913990610715576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156106da5780820151818401526020810190506106bf565b50505050905090810190601f1680156107075780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16632495a5996040518163ffffffff1660e01b815260040160206040518083038186803b15801561079357600080fd5b505afa1580156107a7573d6000803e3d6000fd5b505050506040513d60208110156107bd57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff16146040518060600160405280603081526020016120be60309139906108a4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561086957808201518184015260208101905061084e565b50505050905090810190601f1680156108965780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600034905060008473ffffffffffffffffffffffffffffffffffffffff16633ce073553360006040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182151581526020019250505060206040518083038186803b15801561091e57600080fd5b505afa158015610932573d6000803e3d6000fd5b505050506040513d602081101561094857600080fd5b8101908080519060200190929190505050905060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b1580156109c357600080fd5b505af11580156109d7573d6000803e3d6000fd5b505050505060008573ffffffffffffffffffffffffffffffffffffffff1663570a7af26040518163ffffffff1660e01b815260040160206040518083038186803b158015610a2457600080fd5b505afa158015610a38573d6000803e3d6000fd5b505050506040513d6020811015610a4e57600080fd5b81019080805190602001909291905050509050610a6b81836118d8565b8573ffffffffffffffffffffffffffffffffffffffff1663a6eab5c233876040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff16815260200192505050600060405180830381600087803b158015610af257600080fd5b505af1158015610b06573d6000803e3d6000fd5b50505050610b45610b208385611ab190919063ffffffff16565b3373ffffffffffffffffffffffffffffffffffffffff16611b3490919063ffffffff16565b505050505050565b83600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636fbc6f6b826040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610bd757600080fd5b505afa158015610beb573d6000803e3d6000fd5b505050506040513d6020811015610c0157600080fd5b81019080805190602001909291905050506040518060600160405280602f8152602001612172602f913990610cd1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610c96578082015181840152602081019050610c7b565b50505050905090810190601f168015610cc35780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16632495a5996040518163ffffffff1660e01b815260040160206040518083038186803b158015610d4f57600080fd5b505afa158015610d63573d6000803e3d6000fd5b505050506040513d6020811015610d7957600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff16146040518060600160405280603081526020016120be6030913990610e60576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610e25578082015181840152602081019050610e0a565b50505050905090810190601f168015610e525780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50610e6b85346118d8565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b158015610ed357600080fd5b505af1158015610ee7573d6000803e3d6000fd5b50505050508473ffffffffffffffffffffffffffffffffffffffff16635288ba4b348686866040518563ffffffff1660e01b8152600401808581526020018473ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828152602001945050505050600060405180830381600087803b158015610f6d57600080fd5b505af1158015610f81573d6000803e3d6000fd5b505050505050505050565b82600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635b16ebb7826040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561101657600080fd5b505afa15801561102a573d6000803e3d6000fd5b505050506040513d602081101561104057600080fd5b81019080805190602001909291905050506040518060600160405280602581526020016121a16025913990611110576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156110d55780820151818401526020810190506110ba565b50505050905090810190601f1680156111025780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16632495a5996040518163ffffffff1660e01b815260040160206040518083038186803b15801561118e57600080fd5b505afa1580156111a2573d6000803e3d6000fd5b505050506040513d60208110156111b857600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff16146040518060600160405280603081526020016120be603091399061129f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611264578082015181840152602081019050611249565b50505050905090810190601f1680156112915780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b15801561130857600080fd5b505af115801561131c573d6000803e3d6000fd5b505050505061132b84346118d8565b8373ffffffffffffffffffffffffffffffffffffffff16639aa5d4623485856040518463ffffffff1660e01b8152600401808481526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018261ffff1681526020019350505050600060405180830381600087803b1580156113a857600080fd5b505af11580156113bc573d6000803e3d6000fd5b5050505050505050565b82600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635b16ebb7826040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561145057600080fd5b505afa158015611464573d6000803e3d6000fd5b505050506040513d602081101561147a57600080fd5b81019080805190602001909291905050506040518060600160405280602581526020016121a1602591399061154a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561150f5780820151818401526020810190506114f4565b50505050905090810190601f16801561153c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16632495a5996040518163ffffffff1660e01b815260040160206040518083038186803b1580156115c857600080fd5b505afa1580156115dc573d6000803e3d6000fd5b505050506040513d60208110156115f257600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff16146040518060600160405280603081526020016120be60309139906116d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561169e578082015181840152602081019050611683565b50505050905090810190601f1680156116cb5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506117873330858773ffffffffffffffffffffffffffffffffffffffff166336dda7d56040518163ffffffff1660e01b815260040160206040518083038186803b15801561172657600080fd5b505afa15801561173a573d6000803e3d6000fd5b505050506040513d602081101561175057600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff16611c6e909392919063ffffffff16565b8373ffffffffffffffffffffffffffffffffffffffff166305fe138b84306040518363ffffffff1660e01b8152600401808381526020018273ffffffffffffffffffffffffffffffffffffffff16815260200192505050600060405180830381600087803b1580156117f857600080fd5b505af115801561180c573d6000803e3d6000fd5b5050505061181a8284611820565b50505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561189357600080fd5b505af11580156118a7573d6000803e3d6000fd5b505050506118d4818373ffffffffffffffffffffffffffffffffffffffff16611b3490919063ffffffff16565b5050565b8060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b15801561197e57600080fd5b505afa158015611992573d6000803e3d6000fd5b505050506040513d60208110156119a857600080fd5b81019080805190602001909291905050501015611aad5760008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b3837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015611a7057600080fd5b505af1158015611a84573d6000803e3d6000fd5b505050506040513d6020811015611a9a57600080fd5b8101908080519060200190929190505050505b5050565b600082821115611b29576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b818303905092915050565b80471015611baa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a20696e73756666696369656e742062616c616e636500000081525060200191505060405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff168260405180600001905060006040518083038185875af1925050503d8060008114611c0a576040519150601f19603f3d011682016040523d82523d6000602084013e611c0f565b606091505b5050905080611c69576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603a8152602001806120ee603a913960400191505060405180910390fd5b505050565b611d29846323b872dd60e01b858585604051602401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611d2f565b50505050565b6000611d91826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611e1e9092919063ffffffff16565b9050600081511115611e1957808060200190516020811015611db257600080fd5b8101908080519060200190929190505050611e18576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a8152602001806121c6602a913960400191505060405180910390fd5b5b505050565b6060611e2d8484600085611e36565b90509392505050565b606082471015611e91576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806121286026913960400191505060405180910390fd5b611e9a85611fde565b611f0c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081525060200191505060405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b60208310611f5b5780518252602082019150602081019050602083039250611f38565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611fbd576040519150601f19603f3d011682016040523d82523d6000602084013e611fc2565b606091505b5091509150611fd2828286611ff1565b92505050949350505050565b600080823b905060008111915050919050565b60608315612001578290506120b6565b6000835111156120145782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561207b578082015181840152602081019050612060565b50505050905090810190601f1680156120a85780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b939250505056fe5745544820476174657761793a2044657374696e6174696f6e206973206e6f74205745544820636f6d70617469626c65416464726573733a20756e61626c6520746f2073656e642076616c75652c20726563697069656e74206d61792068617665207265766572746564416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c5745544820476174657761793a2052656365697665206973206e6f7420616c6c6f7765645745544820476174657761793a2044657374696e6174696f6e206973206e6f7420637265646974204d616e616765725745544820476174657761793a2044657374696e6174696f6e206973206e6f7420706f6f6c5361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a2646970667358221220d04b83e66d0124cd885e7fe4d814d42f1c14b8bd2c85de2977b58f31a9563c8c64736f6c63430007060033";
