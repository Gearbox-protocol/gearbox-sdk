/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  LidoV1Gateway,
  LidoV1GatewayInterface,
} from "../../../../../contracts/adapters/lido/LidoV1_WETHGateway.sol/LidoV1Gateway";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_weth",
        type: "address",
      },
      {
        internalType: "address",
        name: "_stETH",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ZeroAddressException",
    type: "error",
  },
  {
    inputs: [],
    name: "stETH",
    outputs: [
      {
        internalType: "contract IstETH",
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
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_referral",
        type: "address",
      },
    ],
    name: "submit",
    outputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "weth",
    outputs: [
      {
        internalType: "contract IWETH",
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
  "0x60c060405234801561001057600080fd5b506040516105813803806105818339818101604052604081101561003357600080fd5b5080516020909101516001600160a01b038216158061005957506001600160a01b038116155b1561007757604051635919af9760e11b815260040160405180910390fd5b6001600160a01b039081166080521660a05260805160a0516104b96100c860003960008181605601528181610183015261022f01526000818160b301528181610290015261037e01526104b96000f3fe6080604052600436106100385760003560e01c80633fc8cef314610044578063c1fe3e48146100a1578063f532e86a146100d557600080fd5b3661003f57005b600080fd5b34801561005057600080fd5b506100787f000000000000000000000000000000000000000000000000000000000000000081565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b3480156100ad57600080fd5b506100787f000000000000000000000000000000000000000000000000000000000000000081565b3480156100e157600080fd5b5061011b600480360360408110156100f857600080fd5b508035906020013573ffffffffffffffffffffffffffffffffffffffff1661012d565b60408051918252519081900360200190f35b604080517f23b872dd00000000000000000000000000000000000000000000000000000000815233600482015230602482015260448101849052905160009173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016916323b872dd91606480820192602092909190829003018187875af11580156101d0573d6000803e3d6000fd5b505050506040513d60208110156101e657600080fd5b5050604080517f2e1a7d4d00000000000000000000000000000000000000000000000000000000815260048101859052905173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001691632e1a7d4d91602480830192600092919082900301818387803b15801561027657600080fd5b505af115801561028a573d6000803e3d6000fd5b505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a1903eab84846040518363ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038185885af115801561031c573d6000803e3d6000fd5b50505050506040513d602081101561033357600080fd5b5051604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905191925073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163a9059cbb91339184916370a082319160248083019260209291908290030181865afa1580156103d3573d6000803e3d6000fd5b505050506040513d60208110156103e957600080fd5b5051604080517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b16815273ffffffffffffffffffffffffffffffffffffffff9093166004840152602483019190915251604480830192602092919082900301816000875af1158015610464573d6000803e3d6000fd5b505050506040513d602081101561047a57600080fd5b5090939250505056fea26469706673582212200a1dca36e5d8a44b348975a9fcace91dc9cc0600978afdd4551d67f8831f8a9e64736f6c634300080a0033";

type LidoV1GatewayConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LidoV1GatewayConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LidoV1Gateway__factory extends ContractFactory {
  constructor(...args: LidoV1GatewayConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _weth: string,
    _stETH: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LidoV1Gateway> {
    return super.deploy(
      _weth,
      _stETH,
      overrides || {}
    ) as Promise<LidoV1Gateway>;
  }
  override getDeployTransaction(
    _weth: string,
    _stETH: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_weth, _stETH, overrides || {});
  }
  override attach(address: string): LidoV1Gateway {
    return super.attach(address) as LidoV1Gateway;
  }
  override connect(signer: Signer): LidoV1Gateway__factory {
    return super.connect(signer) as LidoV1Gateway__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LidoV1GatewayInterface {
    return new utils.Interface(_abi) as LidoV1GatewayInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LidoV1Gateway {
    return new Contract(address, _abi, signerOrProvider) as LidoV1Gateway;
  }
}
