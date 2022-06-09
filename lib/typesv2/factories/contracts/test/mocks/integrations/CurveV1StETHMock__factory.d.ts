import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CurveV1StETHMock, CurveV1StETHMockInterface } from "../../../../../contracts/test/mocks/integrations/CurveV1StETHMock";
declare type CurveV1StETHMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CurveV1StETHMock__factory extends ContractFactory {
    constructor(...args: CurveV1StETHMockConstructorParams);
    deploy(_coins: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<CurveV1StETHMock>;
    getDeployTransaction(_coins: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): CurveV1StETHMock;
    connect(signer: Signer): CurveV1StETHMock__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b5060405162002f4238038062002f428339810160408190526200003491620001d5565b80516200004990600290602084019062000113565b5060126040516200005a906200017d565b6060808252600790820152664352564d6f636b60c81b608082015260a0602082018190526015908201527f43525620666f72204375727665506f6f6c4d6f636b000000000000000000000060c082015260ff909116604082015260e001604051809103906000f080158015620000d4573d6000803e3d6000fd5b50600080546001600160a01b03929092166001600160a01b031992831681179091556001805490921617905550670de0b6b3a7640000600455620002a7565b8280548282559060005260206000209081019282156200016b579160200282015b828111156200016b57825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019062000134565b50620001799291506200018b565b5090565b61175880620017ea83390190565b5b808211156200017957600081556001016200018c565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620001d057600080fd5b919050565b60006020808385031215620001e957600080fd5b82516001600160401b03808211156200020157600080fd5b818501915085601f8301126200021657600080fd5b8151818111156200022b576200022b620001a2565b8060051b604051601f19603f83011681018181108582111715620002535762000253620001a2565b6040529182528482019250838101850191888311156200027257600080fd5b938501935b828510156200029b576200028b85620001b8565b8452938501939285019262000277565b98975050505050505050565b61153380620002b76000396000f3fe6080604052600436106100f35760003560e01c806382c630661161008a578063bb7b8b8011610059578063bb7b8b801461029b578063c6610657146102b0578063e3103273146102d0578063fc0c546a146102f057600080fd5b806382c63066146101f35780638ea875f314610245578063a6417ed61461025b578063b91434d11461027b57600080fd5b80634903b0d1116100c65780634903b0d1146101735780635b36389c146101935780635e0d443f146101b357806371035418146101d357600080fd5b806307211ef7146100f85780630b4c7e4d1461012b5780631a4d01d2146101405780633df0212414610160575b600080fd5b34801561010457600080fd5b50610118610113366004611179565b61031d565b6040519081526020015b60405180910390f35b61013e61013936600461124c565b610351565b005b34801561014c57600080fd5b5061013e61015b366004611277565b6104c4565b61013e61016e36600461129c565b610657565b34801561017f57600080fd5b5061011861018e3660046112de565b610801565b34801561019f57600080fd5b5061013e6101ae3660046112f7565b6108c9565b3480156101bf57600080fd5b506101186101ce366004611179565b610a13565b3480156101df57600080fd5b5061013e6101ee3660046112de565b600455565b3480156101ff57600080fd5b506000546102209073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610122565b34801561025157600080fd5b5061011860045481565b34801561026757600080fd5b5061013e61027636600461129c565b610a63565b34801561028757600080fd5b5061013e610296366004611179565b610a95565b3480156102a757600080fd5b50600454610118565b3480156102bc57600080fd5b506102206102cb3660046112de565b610af6565b3480156102dc57600080fd5b5061013e6102eb36600461124c565b610b2d565b3480156102fc57600080fd5b506001546102209073ffffffffffffffffffffffffffffffffffffffff1681565b60006040517f24e46f7000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8151341461035e57600080fd5b600260018154811061037257610372611324565b60009182526020918290200154908301516040517f23b872dd000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481019190915273ffffffffffffffffffffffffffffffffffffffff909116906323b872dd906064016020604051808303816000875af11580156103fe573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104229190611353565b506000546040517f40c10f190000000000000000000000000000000000000000000000000000000081523360048201526024810183905273ffffffffffffffffffffffffffffffffffffffff909116906340c10f19906044015b6020604051808303816000875af115801561049b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104bf9190611353565b505050565b6000546040517f79cc67900000000000000000000000000000000000000000000000000000000081523360048201526024810185905273ffffffffffffffffffffffffffffffffffffffff909116906379cc6790906044016020604051808303816000875af115801561053b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061055f9190611353565b5081600f0b6000141561059f57604051339082156108fc029083906000818181858888f19350505050158015610599573d6000803e3d6000fd5b50505050565b60026001815481106105b3576105b3611324565b6000918252602090912001546040517fa9059cbb0000000000000000000000000000000000000000000000000000000081523360048201526024810183905273ffffffffffffffffffffffffffffffffffffffff9091169063a9059cbb906044016020604051808303816000875af1158015610633573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105999190611353565b6000610664858585610a13565b9050818110156106fb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f437572766556314d6f636b3a20494e53554646494349454e545f4f555450555460448201527f5f414d4f554e540000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b84600f0b6000141561076b5782341461071357600080fd5b61076633826002876fffffffffffffffffffffffffffffffff168154811061073d5761073d611324565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff169190610c77565b6107fa565b341561077657600080fd5b6107cb3330856002896fffffffffffffffffffffffffffffffff16815481106107a1576107a1611324565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16929190610d4b565b604051339082156108fc029083906000818181858888f193505050501580156107f8573d6000803e3d6000fd5b505b5050505050565b60008161080f575047919050565b600260018154811061082357610823611324565b6000918252602090912001546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff909116906370a0823190602401602060405180830381865afa15801561089a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108be9190611375565b92915050565b919050565b8051604051339180156108fc02916000818181858888f193505050501580156108f6573d6000803e3d6000fd5b50600260018154811061090b5761090b611324565b60009182526020918290200154908201516040517fa9059cbb000000000000000000000000000000000000000000000000000000008152336004820152602481019190915273ffffffffffffffffffffffffffffffffffffffff9091169063a9059cbb906044016020604051808303816000875af1158015610991573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109b59190611353565b506000546040517f79cc67900000000000000000000000000000000000000000000000000000000081523360048201526024810184905273ffffffffffffffffffffffffffffffffffffffff909116906379cc67909060440161047c565b600f83810b60009081526003602090815260408083209386900b8352929052908120546b033b2e3c9fd0803ce800000090610a4f9084906113bd565b610a5991906113fa565b90505b9392505050565b6040517f24e46f7000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600f83810b60009081526003602090815260408083209386900b835292905220819055610ace6b033b2e3c9fd0803ce800000082610da9565b600f92830b60009081526003602090815260408083209690950b825294909452919092205550565b60028181548110610b0657600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b8151604051339180156108fc02916000818181858888f19350505050158015610b5a573d6000803e3d6000fd5b506002600181548110610b6f57610b6f611324565b60009182526020918290200154908301516040517fa9059cbb000000000000000000000000000000000000000000000000000000008152336004820152602481019190915273ffffffffffffffffffffffffffffffffffffffff9091169063a9059cbb906044016020604051808303816000875af1158015610bf5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c199190611353565b506000546040517f79cc67900000000000000000000000000000000000000000000000000000000081523360048201526024810183905273ffffffffffffffffffffffffffffffffffffffff909116906379cc67909060440161047c565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526104bf9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610f0f565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526105999085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401610cc9565b60408051808201909152600281527f4d33000000000000000000000000000000000000000000000000000000000000602082015260009082610e18576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f29190611461565b506000610e266002846113fa565b90506b033b2e3c9fd0803ce8000000610e5f827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6114b2565b610e6991906113fa565b8411156040518060400160405280600281526020017f4d3100000000000000000000000000000000000000000000000000000000000081525090610eda576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f29190611461565b508281610ef36b033b2e3c9fd0803ce8000000876113bd565b610efd91906114c9565b610f0791906113fa565b949350505050565b6000610f71826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661101b9092919063ffffffff16565b8051909150156104bf5780806020019051810190610f8f9190611353565b6104bf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016106f2565b6060610a59848460008585843b61108e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016106f2565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516110b791906114e1565b60006040518083038185875af1925050503d80600081146110f4576040519150601f19603f3d011682016040523d82523d6000602084013e6110f9565b606091505b5091509150611109828286611114565b979650505050505050565b60608315611123575081610a5c565b8251156111335782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f29190611461565b8035600f81900b81146108c457600080fd5b60008060006060848603121561118e57600080fd5b61119784611167565b92506111a560208501611167565b9150604084013590509250925092565b600082601f8301126111c657600080fd5b6040516040810181811067ffffffffffffffff82111715611210577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b806040525080604084018581111561122757600080fd5b845b81811015611241578035835260209283019201611229565b509195945050505050565b6000806060838503121561125f57600080fd5b61126984846111b5565b946040939093013593505050565b60008060006060848603121561128c57600080fd5b833592506111a560208501611167565b600080600080608085870312156112b257600080fd5b6112bb85611167565b93506112c960208601611167565b93969395505050506040820135916060013590565b6000602082840312156112f057600080fd5b5035919050565b6000806060838503121561130a57600080fd5b8235915061131b84602085016111b5565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561136557600080fd5b81518015158114610a5c57600080fd5b60006020828403121561138757600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156113f5576113f561138e565b500290565b600082611430577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b60005b83811015611450578181015183820152602001611438565b838111156105995750506000910152565b6020815260008251806020840152611480816040850160208701611435565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b6000828210156114c4576114c461138e565b500390565b600082198211156114dc576114dc61138e565b500190565b600082516114f3818460208701611435565b919091019291505056fea264697066735822122009e8db97232d8f4408a34fadd3d8dc9fc48f4e16a16811799ca838d5aa4b0d8964736f6c634300080a003360a06040523480156200001157600080fd5b506040516200175838038062001758833981016040819052620000349162000269565b8251839083906200004d906003906020850190620000f6565b50805162000063906004906020840190620000f6565b505050620000806200007a620000a060201b60201c565b620000a4565b60ff166080525050600680546001600160a01b031916331790556200032b565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8280546200010490620002ee565b90600052602060002090601f01602090048101928262000128576000855562000173565b82601f106200014357805160ff191683800117855562000173565b8280016001018555821562000173579182015b828111156200017357825182559160200191906001019062000156565b506200018192915062000185565b5090565b5b8082111562000181576000815560010162000186565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001c457600080fd5b81516001600160401b0380821115620001e157620001e16200019c565b604051601f8301601f19908116603f011681019082821181831017156200020c576200020c6200019c565b816040528381526020925086838588010111156200022957600080fd5b600091505b838210156200024d57858201830151818301840152908201906200022e565b838211156200025f5760008385830101525b9695505050505050565b6000806000606084860312156200027f57600080fd5b83516001600160401b03808211156200029757600080fd5b620002a587838801620001b2565b94506020860151915080821115620002bc57600080fd5b50620002cb86828701620001b2565b925050604084015160ff81168114620002e357600080fd5b809150509250925092565b600181811c908216806200030357607f821691505b602082108114156200032557634e487b7160e01b600052602260045260246000fd5b50919050565b60805161141162000347600039600061025f01526114116000f3fe608060405234801561001057600080fd5b50600436106101515760003560e01c806370a08231116100cd5780639dc29fac11610081578063a9059cbb11610066578063a9059cbb1461034c578063dd62ed3e1461035f578063f2fde38b146103a557600080fd5b80639dc29fac14610326578063a457c2d71461033957600080fd5b806379cc6790116100b257806379cc6790146102ed5780638da5cb5b1461030057806395d89b411461031e57600080fd5b806370a08231146102af578063715018a6146102e557600080fd5b806318160ddd11610124578063313ce56711610109578063313ce56714610258578063395093511461028957806340c10f191461029c57600080fd5b806318160ddd1461023357806323b872dd1461024557600080fd5b806306fdde03146101565780630754617214610174578063095ea7b3146101b95780631652e9fc146101dc575b600080fd5b61015e6103b8565b60405161016b91906111d2565b60405180910390f35b6006546101949073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161016b565b6101cc6101c736600461126e565b61044a565b604051901515815260200161016b565b6102316101ea366004611298565b600680547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b005b6002545b60405190815260200161016b565b6101cc6102533660046112ba565b610460565b60405160ff7f000000000000000000000000000000000000000000000000000000000000000016815260200161016b565b6101cc61029736600461126e565b61054b565b6101cc6102aa36600461126e565b610594565b6102376102bd366004611298565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b6102316106a3565b6101cc6102fb36600461126e565b610730565b60055473ffffffffffffffffffffffffffffffffffffffff16610194565b61015e6107be565b6101cc61033436600461126e565b6107cd565b6101cc61034736600461126e565b6107d9565b6101cc61035a36600461126e565b6108b1565b61023761036d3660046112f6565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b6102316103b3366004611298565b6108be565b6060600380546103c790611329565b80601f01602080910402602001604051908101604052809291908181526020018280546103f390611329565b80156104405780601f1061041557610100808354040283529160200191610440565b820191906000526020600020905b81548152906001019060200180831161042357829003601f168201915b5050505050905090565b60006104573384846109ee565b50600192915050565b600061046d848484610ba2565b73ffffffffffffffffffffffffffffffffffffffff8416600090815260016020908152604080832033845290915290205482811015610533576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160448201527f6c6c6f77616e636500000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b61054085338584036109ee565b506001949350505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152812054909161045791859061058f9086906113ac565b6109ee565b60065460009073ffffffffffffffffffffffffffffffffffffffff163314610618576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4d696e7465722063616c6c73206f6e6c79000000000000000000000000000000604482015260640161052a565b60065473ffffffffffffffffffffffffffffffffffffffff163314610699576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4d696e7465722063616c6c73206f6e6c79000000000000000000000000000000604482015260640161052a565b6104578383610e56565b60055473ffffffffffffffffffffffffffffffffffffffff163314610724576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161052a565b61072e6000610f76565b565b60065460009073ffffffffffffffffffffffffffffffffffffffff1633146107b4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4d696e7465722063616c6c73206f6e6c79000000000000000000000000000000604482015260640161052a565b6104578383610fed565b6060600480546103c790611329565b60006104578383610fed565b33600090815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff861684529091528120548281101561089a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f000000000000000000000000000000000000000000000000000000606482015260840161052a565b6108a733858584036109ee565b5060019392505050565b6000610457338484610ba2565b60055473ffffffffffffffffffffffffffffffffffffffff16331461093f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161052a565b73ffffffffffffffffffffffffffffffffffffffff81166109e2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161052a565b6109eb81610f76565b50565b73ffffffffffffffffffffffffffffffffffffffff8316610a90576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161052a565b73ffffffffffffffffffffffffffffffffffffffff8216610b33576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015260840161052a565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8316610c45576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161052a565b73ffffffffffffffffffffffffffffffffffffffff8216610ce8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015260840161052a565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604090205481811015610d9e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e63650000000000000000000000000000000000000000000000000000606482015260840161052a565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260208190526040808220858503905591851681529081208054849290610de29084906113ac565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610e4891815260200190565b60405180910390a350505050565b73ffffffffffffffffffffffffffffffffffffffff8216610ed3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161052a565b8060026000828254610ee591906113ac565b909155505073ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604081208054839290610f1f9084906113ac565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6005805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b73ffffffffffffffffffffffffffffffffffffffff8216611090576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f7300000000000000000000000000000000000000000000000000000000000000606482015260840161052a565b73ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604090205481811015611146576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f6365000000000000000000000000000000000000000000000000000000000000606482015260840161052a565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604081208383039055600280548492906111829084906113c4565b909155505060405182815260009073ffffffffffffffffffffffffffffffffffffffff8516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610b95565b600060208083528351808285015260005b818110156111ff578581018301518582016040015282016111e3565b81811115611211576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461126957600080fd5b919050565b6000806040838503121561128157600080fd5b61128a83611245565b946020939093013593505050565b6000602082840312156112aa57600080fd5b6112b382611245565b9392505050565b6000806000606084860312156112cf57600080fd5b6112d884611245565b92506112e660208501611245565b9150604084013590509250925092565b6000806040838503121561130957600080fd5b61131283611245565b915061132060208401611245565b90509250929050565b600181811c9082168061133d57607f821691505b60208210811415611377577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600082198211156113bf576113bf61137d565b500190565b6000828210156113d6576113d661137d565b50039056fea26469706673582212203aca2c6f89034594a4c9be0759a151cd353681fd7e5092c7dafec71460ca6caf64736f6c634300080a0033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
    } | {
        inputs: never[];
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
    })[];
    static createInterface(): CurveV1StETHMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CurveV1StETHMock;
}
export {};
