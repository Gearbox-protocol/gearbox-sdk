import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PoolServiceMock, PoolServiceMockInterface } from "../../../../../contracts/test/mocks/pool/PoolServiceMock";
declare type PoolServiceMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PoolServiceMock__factory extends ContractFactory {
    constructor(...args: PoolServiceMockConstructorParams);
    deploy(_addressProvider: string, _underlyingToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<PoolServiceMock>;
    getDeployTransaction(_addressProvider: string, _underlyingToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): PoolServiceMock;
    connect(signer: Signer): PoolServiceMock__factory;
    static readonly bytecode = "0x60806040526016805460ff1916905534801561001a57600080fd5b506040516110a73803806110a7833981016040819052610039916100b6565b600080546001600160a01b038085166001600160a01b0319928316179092556003805492841692909116919091179055610080600a6b033b2e3c9fd0803ce80000006100e9565b60075550506b033b2e3c9fd0803ce800000060155561010b565b80516001600160a01b03811681146100b157600080fd5b919050565b600080604083850312156100c957600080fd5b6100d28361009a565b91506100e06020840161009a565b90509250929050565b60008261010657634e487b7160e01b600052601260045260246000fd5b500490565b610f8d8061011a6000396000f3fe608060405234801561001057600080fd5b50600436106102e95760003560e01c806367c99d5811610191578063c5f956af116100e3578063dbcb313b11610097578063f11a648711610071578063f11a648714610320578063f3fdb15a146105f1578063fe14112d1461061157600080fd5b8063dbcb313b146105d6578063e941fa78146105df578063ef8d9603146105e857600080fd5b8063cb3905e1116100c8578063cb3905e1146105c4578063cf33d95514610320578063d0efe753146105cd57600080fd5b8063c5f956af14610588578063ca9505e4146105a857600080fd5b80639aa5d46211610145578063b6ac642a1161011f578063b6ac642a14610567578063bb04b19314610567578063bf28068b1461057557600080fd5b80639aa5d46214610544578063a4e8273e14610557578063b3554a0a1461055e57600080fd5b8063788c6bfe11610176578063788c6bfe146104ef5780638456cb591461050157806396df5dc01461053157600080fd5b806367c99d58146104de57806374375359146104e757600080fd5b806336dda7d51161024a5780634d778ad1116101fe57806354fd4d50116101d857806354fd4d50146104c05780635c975abb146104c8578063609ae317146104d557600080fd5b80634d778ad114610491578063532fe502146104a45780635427c938146104ad57600080fd5b80633f4ba83a1161022f5780633f4ba83a1461045257806345d31f9d1461047f5780634c19386c1461048857600080fd5b806336dda7d51461040f5780633e163df01461042f57600080fd5b80632495a599116102a157806329f3d3b61161028657806329f3d3b6146103b35780632a3354c9146103bc5780632e97ca21146103dc57600080fd5b80632495a599146103735780632954018c1461039357600080fd5b8063078c4781116102d2578063078c4781146103205780630fce70fb146103335780631e16e4fc1461033b57600080fd5b8063030dbb04146102ee57806305fe138b1461030a575b600080fd5b6102f760105481565b6040519081526020015b60405180910390f35b6102f7610318366004610ce8565b600092915050565b61033161032e366004610d14565b50565b005b6015546102f7565b61034e610349366004610d2f565b610618565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610301565b60035461034e9073ffffffffffffffffffffffffffffffffffffffff1681565b60005461034e9073ffffffffffffffffffffffffffffffffffffffff1681565b6102f760095481565b600a5461034e9073ffffffffffffffffffffffffffffffffffffffff1681565b6103ff6103ea366004610d14565b60066020526000908152604090205460ff1681565b6040519015158152602001610301565b60055461034e9073ffffffffffffffffffffffffffffffffffffffff1681565b6103ff61043d366004610d14565b60146020526000908152604090205460ff1681565b610331601680547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b6102f760075481565b6102f760015481565b6102f761049f366004610d2f565b61064f565b6102f760115481565b6102f76104bb366004610d2f565b61066d565b6102f7600181565b6016546103ff9060ff1681565b6102f760085481565b6102f7600d5481565b6102f7610685565b6b033b2e3c9fd0803ce80000006102f7565b610331601680547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b61033161053f366004610d2f565b601555565b610331610552366004610d48565b505050565b60016102f7565b6102f7600e5481565b61033161032e366004610d2f565b610331610583366004610ce8565b61071d565b60135461034e9073ffffffffffffffffffffffffffffffffffffffff1681565b6103316105b6366004610d7d565b600b92909255600c55600d55565b6102f7600c5481565b6102f7600b5481565b6102f760155481565b6102f7600f5481565b6102f760025481565b60125461034e9073ffffffffffffffffffffffffffffffffffffffff1681565b60006102f7565b6004818154811061062857600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b6000610667826b033b2e3c9fd0803ce800000061077a565b92915050565b6000610667826b033b2e3c9fd0803ce80000006108e9565b6003546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009173ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa1580156106f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107189190610da9565b905090565b6009829055600a80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83811691909117909155600354610776911682846109fe565b5050565b60408051808201909152600281527f4d330000000000000000000000000000000000000000000000000000000000006020820152600090826107f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e99190610df2565b60405180910390fd5b506000610800600284610e72565b90506b033b2e3c9fd0803ce8000000610839827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610ead565b6108439190610e72565b8411156040518060400160405280600281526020017f4d31000000000000000000000000000000000000000000000000000000000000815250906108b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e99190610df2565b5082816108cd6b033b2e3c9fd0803ce800000087610ec4565b6108d79190610f01565b6108e19190610e72565b949350505050565b60008215806108f6575081155b1561090357506000610667565b8161091b60026b033b2e3c9fd0803ce8000000610e72565b610945907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610ead565b61094f9190610e72565b8311156040518060400160405280600281526020017f4d31000000000000000000000000000000000000000000000000000000000000815250906109c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e99190610df2565b506b033b2e3c9fd0803ce80000006109d9600282610e72565b6109e38486610ec4565b6109ed9190610f01565b6109f79190610e72565b9392505050565b6040805173ffffffffffffffffffffffffffffffffffffffff848116602483015260448083018590528351808403909101815260649092018352602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb0000000000000000000000000000000000000000000000000000000017905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65649084015261055292869291600091610ac9918516908490610b73565b8051909150156105525780806020019051810190610ae79190610f19565b610552576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016107e9565b60606108e1848460008585843b610be6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016107e9565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610c0f9190610f3b565b60006040518083038185875af1925050503d8060008114610c4c576040519150601f19603f3d011682016040523d82523d6000602084013e610c51565b606091505b5091509150610c61828286610c6c565b979650505050505050565b60608315610c7b5750816109f7565b825115610c8b5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e99190610df2565b803573ffffffffffffffffffffffffffffffffffffffff81168114610ce357600080fd5b919050565b60008060408385031215610cfb57600080fd5b82359150610d0b60208401610cbf565b90509250929050565b600060208284031215610d2657600080fd5b6109f782610cbf565b600060208284031215610d4157600080fd5b5035919050565b600080600060608486031215610d5d57600080fd5b83359250610d6d60208501610cbf565b9150604084013590509250925092565b600080600060608486031215610d9257600080fd5b505081359360208301359350604090920135919050565b600060208284031215610dbb57600080fd5b5051919050565b60005b83811015610ddd578181015183820152602001610dc5565b83811115610dec576000848401525b50505050565b6020815260008251806020840152610e11816040850160208701610dc2565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600082610ea8577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b600082821015610ebf57610ebf610e43565b500390565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610efc57610efc610e43565b500290565b60008219821115610f1457610f14610e43565b500190565b600060208284031215610f2b57600080fd5b815180151581146109f757600080fd5b60008251610f4d818460208701610dc2565b919091019291505056fea26469706673582212204edb887d94928b3914f60ab48df0182da9eb30ddbb7021b164cc728b60a655d564736f6c634300080a0033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): PoolServiceMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PoolServiceMock;
}
export {};
