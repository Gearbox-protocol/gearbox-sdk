/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UniswapV3AdapterTestHelper,
  UniswapV3AdapterTestHelperInterface,
} from "../../../../../contracts/test/sigp/UniswapHelper.sol/UniswapV3AdapterTestHelper";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "v3path",
        type: "bytes",
      },
    ],
    name: "decodeFirstPool",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "fee",
        type: "uint24",
      },
      {
        internalType: "address",
        name: "token2",
        type: "address",
      },
      {
        internalType: "address",
        name: "token3",
        type: "address",
      },
    ],
    name: "encodePathMalicious",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "fee",
        type: "uint24",
      },
      {
        internalType: "address",
        name: "token2",
        type: "address",
      },
    ],
    name: "encodePathSingle",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "path",
        type: "bytes",
      },
    ],
    name: "extractTokens",
    outputs: [
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "path",
        type: "bytes",
      },
    ],
    name: "extractTokensNew",
    outputs: [
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "path",
        type: "bytes",
      },
    ],
    name: "hasMultiplePools",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "v3path",
        type: "bytes",
      },
    ],
    name: "skipToken",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610c8e806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063649fc2b61161005b578063649fc2b6146100fa5780639dc1c3911461010d578063bf8b627b14610130578063eadc682a1461014357600080fd5b806326efca5d1461008257806338812174146100c757806357df22c1146100da575b600080fd5b61009561009036600461096d565b61018e565b6040805173ffffffffffffffffffffffffffffffffffffffff9384168152929091166020830152015b60405180910390f35b6100956100d536600461096d565b610270565b6100ed6100e8366004610a78565b610290565b6040516100be9190610acc565b6100ed610108366004610b3f565b6103d6565b61012061011b36600461096d565b6104c7565b60405190151581526020016100be565b6100ed61013e36600461096d565b6104d8565b61015661015136600461096d565b6104e3565b6040805173ffffffffffffffffffffffffffffffffffffffff948516815293909216602084015262ffffff16908201526060016100be565b600080600361019f60146002610bb1565b6101a99190610bee565b83511015610218576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f496e636f7272656374506174684c656e677468457863657074696f6e0000000060448201526064015b60405180910390fd5b6102238360006104fe565b915061026961023460036014610bee565b61024060036014610bee565b6014865161024e9190610c06565b6102589190610c1d565b6102629190610bb1565b84906104fe565b9050915091565b60008061027d83826104fe565b9150610269601484516102629190610c06565b606060006103cc836040516020016102d3919060609190911b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016815260140190565b604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0018152828252606088811b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000090811660208601528351601481870301815260348601855260e88c901b7fffffff00000000000000000000000000000000000000000000000000000000001660548701528451603781880301815260578701909552918c901b16607785015290926103c6928391608b015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190529061058e565b9061058e565b9695505050505050565b606060006104be83604051602001610419919060609190911b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016815260140190565b604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe001815282825260e888901b7fffffff00000000000000000000000000000000000000000000000000000000001660208401528151600381850301815260238401909252606089901b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000166043840152916103c69190605701610392565b95945050505050565b60006104d282610629565b92915050565b60606104d282610663565b60008060006104f184610694565b9250925092509193909250565b600061050b826014610bee565b83511015610575576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f746f416464726573735f6f75744f66426f756e64730000000000000000000000604482015260640161020f565b5001602001516c01000000000000000000000000900490565b6060806040519050835180825260208201818101602087015b818310156105bf5780518352602092830192016105a7565b50855184518101855292509050808201602086015b818310156105ec5780518352602092830192016105d4565b508651929092011591909101601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660405250905092915050565b600061063760036014610bee565b6014610644600382610bee565b61064e9190610bee565b6106589190610bee565b825110159050919050565b60606104d261067460036014610bee565b61068060036014610bee565b845161068c9190610c06565b8491906106d0565b600080806106a284826104fe565b92506106af84601461084a565b90506106c76106c060036014610bee565b85906104fe565b91509193909250565b6060816106de81601f610bee565b1015610746576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f736c6963655f6f766572666c6f77000000000000000000000000000000000000604482015260640161020f565b6107508284610bee565b845110156107ba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f736c6963655f6f75744f66426f756e6473000000000000000000000000000000604482015260640161020f565b6060821580156107d95760405191506000825260208201604052610841565b6040519150601f8416801560200281840101858101878315602002848b0101015b818310156108125780518352602092830192016107fa565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b600081610858816003610bee565b10156108c0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f746f55696e7432345f6f766572666c6f77000000000000000000000000000000604482015260640161020f565b6108cb826003610bee565b83511015610935576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f746f55696e7432345f6f75744f66426f756e6473000000000000000000000000604482015260640161020f565b50016003015190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006020828403121561097f57600080fd5b813567ffffffffffffffff8082111561099757600080fd5b818401915084601f8301126109ab57600080fd5b8135818111156109bd576109bd61093e565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908382118183101715610a0357610a0361093e565b81604052828152876020848701011115610a1c57600080fd5b826020860160208301376000928101602001929092525095945050505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610a6057600080fd5b919050565b803562ffffff81168114610a6057600080fd5b60008060008060808587031215610a8e57600080fd5b610a9785610a3c565b9350610aa560208601610a65565b9250610ab360408601610a3c565b9150610ac160608601610a3c565b905092959194509250565b600060208083528351808285015260005b81811015610af957858101830151858201604001528201610add565b81811115610b0b576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b600080600060608486031215610b5457600080fd5b610b5d84610a3c565b9250610b6b60208501610a65565b9150610b7960408501610a3c565b90509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610be957610be9610b82565b500290565b60008219821115610c0157610c01610b82565b500190565b600082821015610c1857610c18610b82565b500390565b600082610c53577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b50049056fea26469706673582212208488602c75ae7d3ace59df832acd71c08679b5690beb140316f15b341587e84064736f6c634300080a0033";

type UniswapV3AdapterTestHelperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UniswapV3AdapterTestHelperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UniswapV3AdapterTestHelper__factory extends ContractFactory {
  constructor(...args: UniswapV3AdapterTestHelperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UniswapV3AdapterTestHelper> {
    return super.deploy(overrides || {}) as Promise<UniswapV3AdapterTestHelper>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): UniswapV3AdapterTestHelper {
    return super.attach(address) as UniswapV3AdapterTestHelper;
  }
  override connect(signer: Signer): UniswapV3AdapterTestHelper__factory {
    return super.connect(signer) as UniswapV3AdapterTestHelper__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapV3AdapterTestHelperInterface {
    return new utils.Interface(_abi) as UniswapV3AdapterTestHelperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapV3AdapterTestHelper {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as UniswapV3AdapterTestHelper;
  }
}
