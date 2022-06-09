/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CurveV1MetapoolMock,
  CurveV1MetapoolMockInterface,
} from "../../../../../contracts/test/mocks/integrations/CurveV1MetapoolMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "_basePool",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "i",
        type: "uint256",
      },
    ],
    name: "balances",
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
    name: "basePool",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "coins",
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
        internalType: "int128",
        name: "i",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "j",
        type: "int128",
      },
      {
        internalType: "uint256",
        name: "dx",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "min_dy",
        type: "uint256",
      },
    ],
    name: "exchange",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int128",
        name: "i",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "j",
        type: "int128",
      },
      {
        internalType: "uint256",
        name: "dx",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "min_dy",
        type: "uint256",
      },
    ],
    name: "exchange_underlying",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int128",
        name: "i",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "j",
        type: "int128",
      },
      {
        internalType: "uint256",
        name: "dx",
        type: "uint256",
      },
    ],
    name: "get_dy",
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
        internalType: "int128",
        name: "i",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "j",
        type: "int128",
      },
      {
        internalType: "uint256",
        name: "dx",
        type: "uint256",
      },
    ],
    name: "get_dy_underlying",
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
    name: "get_virtual_price",
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
    name: "lp_token",
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
        name: "_token_amount",
        type: "uint256",
      },
      {
        internalType: "int128",
        name: "i",
        type: "int128",
      },
      {
        internalType: "uint256",
        name: "min_amount",
        type: "uint256",
      },
    ],
    name: "remove_liquidity_one_coin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int128",
        name: "i",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "j",
        type: "int128",
      },
      {
        internalType: "uint256",
        name: "rate_RAY",
        type: "uint256",
      },
    ],
    name: "setRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int128",
        name: "i",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "j",
        type: "int128",
      },
      {
        internalType: "uint256",
        name: "rate_RAY",
        type: "uint256",
      },
    ],
    name: "setRateUnderlying",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "set_virtual_price",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
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
        name: "i",
        type: "uint256",
      },
    ],
    name: "underlying_coins",
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
    name: "virtualPrice",
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
  "0x60806040523480156200001157600080fd5b5060405162002ea938038062002ea9833981016040819052620000349162000222565b6002805460018101825560008290527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0180546001600160a01b0319166001600160a01b038581169190911790915560408051637e062a3560e11b815290519184169163fc0c546a916004808201926020929091908290030181865afa158015620000c3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000e991906200025a565b81546001810183556000928352602083200180546001600160a01b0319166001600160a01b03929092169190911790556040516012906200012a90620001f7565b6060808252600790820152664352564d6f636b60c81b608082015260a0602082018190526015908201527f43525620666f72204375727665506f6f6c4d6f636b000000000000000000000060c082015260ff909116604082015260e001604051809103906000f080158015620001a4573d6000803e3d6000fd5b50600080546001600160a01b039283166001600160a01b03199182168117909255600180548216909217909155670de0b6b3a76400006006556003805494909216931692909217909155506200027f9050565b611758806200175183390190565b80516001600160a01b03811681146200021d57600080fd5b919050565b600080604083850312156200023657600080fd5b620002418362000205565b9150620002516020840162000205565b90509250929050565b6000602082840312156200026d57600080fd5b620002788262000205565b9392505050565b6114c2806200028f6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80638ea875f311610097578063bb7b8b8011610066578063bb7b8b8014610226578063c531e24f1461022e578063c66106571461024e578063fc0c546a1461026157600080fd5b80638ea875f3146101e4578063a6417ed6146101ed578063b91434d114610200578063b9947eb01461021357600080fd5b806356ac3503116100d357806356ac3503146101665780635e0d443f14610179578063710354181461018c57806382c630661461019f57600080fd5b806307211ef7146101055780631a4d01d21461012b5780633df02124146101405780634903b0d114610153575b600080fd5b610118610113366004611150565b610281565b6040519081526020015b60405180910390f35b61013e61013936600461118c565b6102d1565b005b61013e61014e3660046111b1565b6103c5565b6101186101613660046111f3565b6104ef565b61013e610174366004611150565b6105a5565b610118610187366004611150565b610606565b61013e61019a3660046111f3565b600655565b6001546101bf9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610122565b61011860065481565b61013e6101fb3660046111b1565b610642565b61013e61020e366004611150565b610ae0565b6101bf6102213660046111f3565b610b41565b600654610118565b6003546101bf9073ffffffffffffffffffffffffffffffffffffffff1681565b6101bf61025c3660046111f3565b610c11565b6000546101bf9073ffffffffffffffffffffffffffffffffffffffff1681565b600f83810b60009081526005602090815260408083209386900b8352929052908120546b033b2e3c9fd0803ce8000000906102bd90849061123b565b6102c79190611278565b90505b9392505050565b6000546040517f79cc67900000000000000000000000000000000000000000000000000000000081523360048201526024810185905273ffffffffffffffffffffffffffffffffffffffff909116906379cc6790906044016020604051808303816000875af1158015610348573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061036c91906112b3565b506103c033826002856fffffffffffffffffffffffffffffffff1681548110610397576103976112d5565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff169190610c48565b505050565b60006103d2858585610606565b905081811015610469576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f437572766556314d6f636b3a20494e53554646494349454e545f4f555450555460448201527f5f414d4f554e540000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6104be3330856002896fffffffffffffffffffffffffffffffff1681548110610494576104946112d5565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16929190610d1c565b6104e833826002876fffffffffffffffffffffffffffffffff1681548110610397576103976112d5565b5050505050565b600060028281548110610504576105046112d5565b6000918252602090912001546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff909116906370a0823190602401602060405180830381865afa15801561057b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061059f9190611304565b92915050565b600f83810b60009081526005602090815260408083209386900b8352929052208190556105de6b033b2e3c9fd0803ce800000082610d80565b600f92830b60009081526005602090815260408083209690950b825294909452919092205550565b600f83810b60009081526004602090815260408083209386900b8352929052908120546b033b2e3c9fd0803ce8000000906102bd90849061123b565b83600f0b60001415610712576002600081548110610662576106626112d5565b6000918252602090912001546040517f23b872dd0000000000000000000000000000000000000000000000000000000081523360048201523060248201526044810184905273ffffffffffffffffffffffffffffffffffffffff909116906323b872dd906064016020604051808303816000875af11580156106e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061070c91906112b3565b506107d2565b600061072f856fffffffffffffffffffffffffffffffff16610b41565b6040517f23b872dd0000000000000000000000000000000000000000000000000000000081523360048201523060248201526044810185905290915073ffffffffffffffffffffffffffffffffffffffff8216906323b872dd906064016020604051808303816000875af11580156107ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107cf91906112b3565b50505b60008085600f0b136107e55760006107e8565b60015b905060008085600f0b136107fd576000610800565b60015b9050600061080f838387610606565b9050600061081e888888610281565b9050848110156108b0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f437572766556314d6f636b3a20494e53554646494349454e545f4f555450555460448201527f5f414d4f554e54000000000000000000000000000000000000000000000000006064820152608401610460565b86600f0b6000141561097a5760026000815481106108d0576108d06112d5565b6000918252602090912001546040517fa9059cbb0000000000000000000000000000000000000000000000000000000081523360048201526024810183905273ffffffffffffffffffffffffffffffffffffffff9091169063a9059cbb906044016020604051808303816000875af1158015610950573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097491906112b3565b50610ad6565b6000610997886fffffffffffffffffffffffffffffffff16610b41565b60035490915073ffffffffffffffffffffffffffffffffffffffff16631a4d01d2846109c460018c61131d565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b1681526004810192909252600f0b602482015260448101859052606401600060405180830381600087803b158015610a2457600080fd5b505af1158015610a38573d6000803e3d6000fd5b50506040517fa9059cbb0000000000000000000000000000000000000000000000000000000081523360048201526024810185905273ffffffffffffffffffffffffffffffffffffffff8416925063a9059cbb91506044016020604051808303816000875af1158015610aaf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ad391906112b3565b50505b5050505050505050565b600f83810b60009081526004602090815260408083209386900b835292905220819055610b196b033b2e3c9fd0803ce800000082610d80565b600f92830b60009081526004602090815260408083209690950b825294909452919092205550565b600081610b84576002600081548110610b5c57610b5c6112d5565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1692915050565b60035473ffffffffffffffffffffffffffffffffffffffff1663c6610657610bad60018561138e565b6040518263ffffffff1660e01b8152600401610bcb91815260200190565b602060405180830381865afa158015610be8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061059f91906113a5565b919050565b60028181548110610c2157600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526103c09084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610ee6565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610d7a9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401610c9a565b50505050565b60408051808201909152600281527f4d33000000000000000000000000000000000000000000000000000000000000602082015260009082610def576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104609190611407565b506000610dfd600284611278565b90506b033b2e3c9fd0803ce8000000610e36827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61138e565b610e409190611278565b8411156040518060400160405280600281526020017f4d3100000000000000000000000000000000000000000000000000000000000081525090610eb1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104609190611407565b508281610eca6b033b2e3c9fd0803ce80000008761123b565b610ed49190611458565b610ede9190611278565b949350505050565b6000610f48826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610ff29092919063ffffffff16565b8051909150156103c05780806020019051810190610f6691906112b3565b6103c0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610460565b60606102c7848460008585843b611065576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610460565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161108e9190611470565b60006040518083038185875af1925050503d80600081146110cb576040519150601f19603f3d011682016040523d82523d6000602084013e6110d0565b606091505b50915091506110e08282866110eb565b979650505050505050565b606083156110fa5750816102ca565b82511561110a5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104609190611407565b8035600f81900b8114610c0c57600080fd5b60008060006060848603121561116557600080fd5b61116e8461113e565b925061117c6020850161113e565b9150604084013590509250925092565b6000806000606084860312156111a157600080fd5b8335925061117c6020850161113e565b600080600080608085870312156111c757600080fd5b6111d08561113e565b93506111de6020860161113e565b93969395505050506040820135916060013590565b60006020828403121561120557600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156112735761127361120c565b500290565b6000826112ae577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b6000602082840312156112c557600080fd5b815180151581146102ca57600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561131657600080fd5b5051919050565b600081600f0b83600f0b60008112817fffffffffffffffffffffffffffffffff80000000000000000000000000000000018312811516156113605761136061120c565b816f7fffffffffffffffffffffffffffffff0183138116156113845761138461120c565b5090039392505050565b6000828210156113a0576113a061120c565b500390565b6000602082840312156113b757600080fd5b815173ffffffffffffffffffffffffffffffffffffffff811681146102ca57600080fd5b60005b838110156113f65781810151838201526020016113de565b83811115610d7a5750506000910152565b60208152600082518060208401526114268160408501602087016113db565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b6000821982111561146b5761146b61120c565b500190565b600082516114828184602087016113db565b919091019291505056fea26469706673582212207ee8581ffdf33a909e691256dd6cbcc68ade0811291f9096218cd85855bde26b64736f6c634300080a003360a06040523480156200001157600080fd5b506040516200175838038062001758833981016040819052620000349162000269565b8251839083906200004d906003906020850190620000f6565b50805162000063906004906020840190620000f6565b505050620000806200007a620000a060201b60201c565b620000a4565b60ff166080525050600680546001600160a01b031916331790556200032b565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8280546200010490620002ee565b90600052602060002090601f01602090048101928262000128576000855562000173565b82601f106200014357805160ff191683800117855562000173565b8280016001018555821562000173579182015b828111156200017357825182559160200191906001019062000156565b506200018192915062000185565b5090565b5b8082111562000181576000815560010162000186565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001c457600080fd5b81516001600160401b0380821115620001e157620001e16200019c565b604051601f8301601f19908116603f011681019082821181831017156200020c576200020c6200019c565b816040528381526020925086838588010111156200022957600080fd5b600091505b838210156200024d57858201830151818301840152908201906200022e565b838211156200025f5760008385830101525b9695505050505050565b6000806000606084860312156200027f57600080fd5b83516001600160401b03808211156200029757600080fd5b620002a587838801620001b2565b94506020860151915080821115620002bc57600080fd5b50620002cb86828701620001b2565b925050604084015160ff81168114620002e357600080fd5b809150509250925092565b600181811c908216806200030357607f821691505b602082108114156200032557634e487b7160e01b600052602260045260246000fd5b50919050565b60805161141162000347600039600061025f01526114116000f3fe608060405234801561001057600080fd5b50600436106101515760003560e01c806370a08231116100cd5780639dc29fac11610081578063a9059cbb11610066578063a9059cbb1461034c578063dd62ed3e1461035f578063f2fde38b146103a557600080fd5b80639dc29fac14610326578063a457c2d71461033957600080fd5b806379cc6790116100b257806379cc6790146102ed5780638da5cb5b1461030057806395d89b411461031e57600080fd5b806370a08231146102af578063715018a6146102e557600080fd5b806318160ddd11610124578063313ce56711610109578063313ce56714610258578063395093511461028957806340c10f191461029c57600080fd5b806318160ddd1461023357806323b872dd1461024557600080fd5b806306fdde03146101565780630754617214610174578063095ea7b3146101b95780631652e9fc146101dc575b600080fd5b61015e6103b8565b60405161016b91906111d2565b60405180910390f35b6006546101949073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161016b565b6101cc6101c736600461126e565b61044a565b604051901515815260200161016b565b6102316101ea366004611298565b600680547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b005b6002545b60405190815260200161016b565b6101cc6102533660046112ba565b610460565b60405160ff7f000000000000000000000000000000000000000000000000000000000000000016815260200161016b565b6101cc61029736600461126e565b61054b565b6101cc6102aa36600461126e565b610594565b6102376102bd366004611298565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b6102316106a3565b6101cc6102fb36600461126e565b610730565b60055473ffffffffffffffffffffffffffffffffffffffff16610194565b61015e6107be565b6101cc61033436600461126e565b6107cd565b6101cc61034736600461126e565b6107d9565b6101cc61035a36600461126e565b6108b1565b61023761036d3660046112f6565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b6102316103b3366004611298565b6108be565b6060600380546103c790611329565b80601f01602080910402602001604051908101604052809291908181526020018280546103f390611329565b80156104405780601f1061041557610100808354040283529160200191610440565b820191906000526020600020905b81548152906001019060200180831161042357829003601f168201915b5050505050905090565b60006104573384846109ee565b50600192915050565b600061046d848484610ba2565b73ffffffffffffffffffffffffffffffffffffffff8416600090815260016020908152604080832033845290915290205482811015610533576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160448201527f6c6c6f77616e636500000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b61054085338584036109ee565b506001949350505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152812054909161045791859061058f9086906113ac565b6109ee565b60065460009073ffffffffffffffffffffffffffffffffffffffff163314610618576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4d696e7465722063616c6c73206f6e6c79000000000000000000000000000000604482015260640161052a565b60065473ffffffffffffffffffffffffffffffffffffffff163314610699576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4d696e7465722063616c6c73206f6e6c79000000000000000000000000000000604482015260640161052a565b6104578383610e56565b60055473ffffffffffffffffffffffffffffffffffffffff163314610724576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161052a565b61072e6000610f76565b565b60065460009073ffffffffffffffffffffffffffffffffffffffff1633146107b4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4d696e7465722063616c6c73206f6e6c79000000000000000000000000000000604482015260640161052a565b6104578383610fed565b6060600480546103c790611329565b60006104578383610fed565b33600090815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff861684529091528120548281101561089a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f000000000000000000000000000000000000000000000000000000606482015260840161052a565b6108a733858584036109ee565b5060019392505050565b6000610457338484610ba2565b60055473ffffffffffffffffffffffffffffffffffffffff16331461093f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161052a565b73ffffffffffffffffffffffffffffffffffffffff81166109e2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161052a565b6109eb81610f76565b50565b73ffffffffffffffffffffffffffffffffffffffff8316610a90576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161052a565b73ffffffffffffffffffffffffffffffffffffffff8216610b33576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015260840161052a565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8316610c45576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161052a565b73ffffffffffffffffffffffffffffffffffffffff8216610ce8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015260840161052a565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604090205481811015610d9e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e63650000000000000000000000000000000000000000000000000000606482015260840161052a565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260208190526040808220858503905591851681529081208054849290610de29084906113ac565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610e4891815260200190565b60405180910390a350505050565b73ffffffffffffffffffffffffffffffffffffffff8216610ed3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161052a565b8060026000828254610ee591906113ac565b909155505073ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604081208054839290610f1f9084906113ac565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6005805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b73ffffffffffffffffffffffffffffffffffffffff8216611090576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f7300000000000000000000000000000000000000000000000000000000000000606482015260840161052a565b73ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604090205481811015611146576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f6365000000000000000000000000000000000000000000000000000000000000606482015260840161052a565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604081208383039055600280548492906111829084906113c4565b909155505060405182815260009073ffffffffffffffffffffffffffffffffffffffff8516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610b95565b600060208083528351808285015260005b818110156111ff578581018301518582016040015282016111e3565b81811115611211576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461126957600080fd5b919050565b6000806040838503121561128157600080fd5b61128a83611245565b946020939093013593505050565b6000602082840312156112aa57600080fd5b6112b382611245565b9392505050565b6000806000606084860312156112cf57600080fd5b6112d884611245565b92506112e660208501611245565b9150604084013590509250925092565b6000806040838503121561130957600080fd5b61131283611245565b915061132060208401611245565b90509250929050565b600181811c9082168061133d57607f821691505b60208210811415611377577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600082198211156113bf576113bf61137d565b500190565b6000828210156113d6576113d661137d565b50039056fea26469706673582212203aca2c6f89034594a4c9be0759a151cd353681fd7e5092c7dafec71460ca6caf64736f6c634300080a0033";

type CurveV1MetapoolMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CurveV1MetapoolMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CurveV1MetapoolMock__factory extends ContractFactory {
  constructor(...args: CurveV1MetapoolMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _token0: string,
    _basePool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CurveV1MetapoolMock> {
    return super.deploy(
      _token0,
      _basePool,
      overrides || {}
    ) as Promise<CurveV1MetapoolMock>;
  }
  override getDeployTransaction(
    _token0: string,
    _basePool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_token0, _basePool, overrides || {});
  }
  override attach(address: string): CurveV1MetapoolMock {
    return super.attach(address) as CurveV1MetapoolMock;
  }
  override connect(signer: Signer): CurveV1MetapoolMock__factory {
    return super.connect(signer) as CurveV1MetapoolMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CurveV1MetapoolMockInterface {
    return new utils.Interface(_abi) as CurveV1MetapoolMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CurveV1MetapoolMock {
    return new Contract(address, _abi, signerOrProvider) as CurveV1MetapoolMock;
  }
}
