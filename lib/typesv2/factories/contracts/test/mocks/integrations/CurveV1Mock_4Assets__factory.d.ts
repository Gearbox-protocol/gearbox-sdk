import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CurveV1Mock_4Assets, CurveV1Mock_4AssetsInterface } from "../../../../../contracts/test/mocks/integrations/CurveV1Mock_4Assets";
declare type CurveV1Mock_4AssetsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CurveV1Mock_4Assets__factory extends ContractFactory {
    constructor(...args: CurveV1Mock_4AssetsConstructorParams);
    deploy(_coins: string[], _underlying_coins: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<CurveV1Mock_4Assets>;
    getDeployTransaction(_coins: string[], _underlying_coins: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): CurveV1Mock_4Assets;
    connect(signer: Signer): CurveV1Mock_4Assets__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b506040516200343d3803806200343d8339810160408190526200003491620002a2565b8151829082906200004d90600290602085019062000133565b5080516200006390600390602084019062000133565b506000601260405162000076906200019d565b6060808252600790820152664352564d6f636b60c81b608082015260a0602082018190526015908201527f43525620666f72204375727665506f6f6c4d6f636b000000000000000000000060c082015260ff909116604082015260e001604051809103906000f080158015620000f0573d6000803e3d6000fd5b50600080546001600160a01b039092166001600160a01b03199283168117909155600180549092161790555050670de0b6b3a7640000600655506200030c915050565b8280548282559060005260206000209081019282156200018b579160200282015b828111156200018b57825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019062000154565b5062000199929150620001ab565b5090565b6117588062001ce583390190565b5b80821115620001995760008155600101620001ac565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620001f057600080fd5b919050565b600082601f8301126200020757600080fd5b815160206001600160401b0380831115620002265762000226620001c2565b8260051b604051601f19603f830116810181811084821117156200024e576200024e620001c2565b6040529384528581018301938381019250878511156200026d57600080fd5b83870191505b8482101562000297576200028782620001d8565b8352918301919083019062000273565b979650505050505050565b60008060408385031215620002b657600080fd5b82516001600160401b0380821115620002ce57600080fd5b620002dc86838701620001f5565b93506020850151915080821115620002f357600080fd5b506200030285828601620001f5565b9150509250929050565b6119c9806200031c6000396000f3fe608060405234801561001057600080fd5b50600436106101515760003560e01c80637d49d875116100cd578063b91434d111610081578063bb7b8b8011610066578063bb7b8b80146102c3578063c6610657146102cb578063fc0c546a146102de57600080fd5b8063b91434d11461029d578063b9947eb0146102b057600080fd5b80638ea875f3116100b25780638ea875f31461026e57806399bd2ba514610277578063a6417ed61461028a57600080fd5b80637d49d8751461021657806382c630661461022957600080fd5b80633df021241161012457806356ac35031161010957806356ac3503146101dd5780635e0d443f146101f0578063710354181461020357600080fd5b80633df02124146101b75780634903b0d1146101ca57600080fd5b8063029b2f341461015657806307211ef71461016b57806318a7bd76146101915780631a4d01d2146101a4575b600080fd5b6101696101643660046115e3565b6102fe565b005b61017e610179366004611625565b6104cf565b6040519081526020015b60405180910390f35b61016961019f366004611661565b61051f565b6101696101b236600461168f565b6106a2565b6101696101c53660046116b4565b610791565b61017e6101d83660046116f6565b6108bb565b6101696101eb366004611625565b610971565b61017e6101fe366004611625565b6109d2565b6101696102113660046116f6565b600655565b61016961022436600461170f565b610a0e565b6001546102499073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610188565b61017e60065481565b61016961028536600461173c565b610b91565b6101696102983660046116b4565b610bf0565b6101696102ab366004611625565b610fb0565b6102496102be3660046116f6565b611011565b60065461017e565b6102496102d93660046116f6565b611048565b6000546102499073ffffffffffffffffffffffffffffffffffffffff1681565b60005b600481101561042d57600083826004811061031e5761031e611781565b6020020151111561041b576002818154811061033c5761033c611781565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff166323b872dd333086856004811061037757610377611781565b60200201516040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b16815273ffffffffffffffffffffffffffffffffffffffff938416600482015292909116602483015260448201526064016020604051808303816000875af11580156103f5573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061041991906117b0565b505b8061042581611801565b915050610301565b506000546040517f40c10f190000000000000000000000000000000000000000000000000000000081523360048201526024810183905273ffffffffffffffffffffffffffffffffffffffff909116906340c10f19906044015b6020604051808303816000875af11580156104a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104ca91906117b0565b505050565b600f83810b60009081526005602090815260408083209386900b8352929052908120546b033b2e3c9fd0803ce80000009061050b90849061183a565b6105159190611877565b90505b9392505050565b60005b600481101561064457600083826004811061053f5761053f611781565b60200201351115610632576002818154811061055d5761055d611781565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb3385846004811061059757610597611781565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b16815273ffffffffffffffffffffffffffffffffffffffff9093166004840152602002013560248201526044016020604051808303816000875af115801561060c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063091906117b0565b505b8061063c81611801565b915050610522565b506000546040517f79cc67900000000000000000000000000000000000000000000000000000000081523360048201526024810183905273ffffffffffffffffffffffffffffffffffffffff909116906379cc679090604401610487565b6000546040517f79cc67900000000000000000000000000000000000000000000000000000000081523360048201526024810185905273ffffffffffffffffffffffffffffffffffffffff909116906379cc6790906044016020604051808303816000875af1158015610719573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061073d91906117b0565b506104ca33826002856fffffffffffffffffffffffffffffffff168154811061076857610768611781565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff169190611058565b600061079e8585856109d2565b905081811015610835576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f437572766556314d6f636b3a20494e53554646494349454e545f4f555450555460448201527f5f414d4f554e540000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b61088a3330856002896fffffffffffffffffffffffffffffffff168154811061086057610860611781565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1692919061112c565b6108b433826002876fffffffffffffffffffffffffffffffff168154811061076857610768611781565b5050505050565b6000600282815481106108d0576108d0611781565b6000918252602090912001546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff909116906370a0823190602401602060405180830381865afa158015610947573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061096b91906118b2565b92915050565b600f83810b60009081526005602090815260408083209386900b8352929052208190556109aa6b033b2e3c9fd0803ce800000082611190565b600f92830b60009081526005602090815260408083209690950b825294909452919092205550565b600f83810b60009081526004602090815260408083209386900b8352929052908120546b033b2e3c9fd0803ce80000009061050b90849061183a565b60005b6004811015610b33576000828260048110610a2e57610a2e611781565b60200201511115610b215760028181548110610a4c57610a4c611781565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33848460048110610a8657610a86611781565b60200201516040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815273ffffffffffffffffffffffffffffffffffffffff909216600483015260248201526044016020604051808303816000875af1158015610afb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1f91906117b0565b505b80610b2b81611801565b915050610a11565b506000546040517f79cc67900000000000000000000000000000000000000000000000000000000081523360048201526024810184905273ffffffffffffffffffffffffffffffffffffffff909116906379cc679090604401610487565b6000546040517f40c10f1900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015260248201849052909116906340c10f1990604401610487565b60006002856fffffffffffffffffffffffffffffffff1681548110610c1757610c17611781565b60009182526020822001546003805473ffffffffffffffffffffffffffffffffffffffff9092169350906fffffffffffffffffffffffffffffffff8816908110610c6357610c63611781565b60009182526020822001546002805473ffffffffffffffffffffffffffffffffffffffff9092169350906fffffffffffffffffffffffffffffffff8816908110610caf57610caf611781565b60009182526020822001546003805473ffffffffffffffffffffffffffffffffffffffff9092169350906fffffffffffffffffffffffffffffffff8916908110610cfb57610cfb611781565b600091825260208220015473ffffffffffffffffffffffffffffffffffffffff169150610d298989896104cf565b905085811015610dbb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f437572766556314d6f636b3a20494e53554646494349454e545f4f555450555460448201527f5f414d4f554e5400000000000000000000000000000000000000000000000000606482015260840161082c565b610ddd73ffffffffffffffffffffffffffffffffffffffff851633308a61112c565b6040517f095ea7b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff86811660048301526024820189905285169063095ea7b3906044016020604051808303816000875af1158015610e52573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e7691906117b0565b506040517f40c10f190000000000000000000000000000000000000000000000000000000081523060048201526024810188905273ffffffffffffffffffffffffffffffffffffffff8616906340c10f1990604401600060405180830381600087803b158015610ee557600080fd5b505af1158015610ef9573d6000803e3d6000fd5b50506040517f1e9a69500000000000000000000000000000000000000000000000000000000081523060048201526024810184905273ffffffffffffffffffffffffffffffffffffffff86169250631e9a69509150604401600060405180830381600087803b158015610f6b57600080fd5b505af1158015610f7f573d6000803e3d6000fd5b50610fa59250505073ffffffffffffffffffffffffffffffffffffffff83163383611058565b505050505050505050565b600f83810b60009081526004602090815260408083209386900b835292905220819055610fe96b033b2e3c9fd0803ce800000082611190565b600f92830b60009081526004602090815260408083209690950b825294909452919092205550565b6003818154811061102157600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b6002818154811061102157600080fd5b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526104ca9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526112f6565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261118a9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016110aa565b50505050565b60408051808201909152600281527f4d330000000000000000000000000000000000000000000000000000000000006020820152600090826111ff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082c91906118f7565b50600061120d600284611877565b90506b033b2e3c9fd0803ce8000000611246827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611948565b6112509190611877565b8411156040518060400160405280600281526020017f4d31000000000000000000000000000000000000000000000000000000000000815250906112c1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082c91906118f7565b5082816112da6b033b2e3c9fd0803ce80000008761183a565b6112e4919061195f565b6112ee9190611877565b949350505050565b6000611358826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166114029092919063ffffffff16565b8051909150156104ca578080602001905181019061137691906117b0565b6104ca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161082c565b6060610515848460008585843b611475576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161082c565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161149e9190611977565b60006040518083038185875af1925050503d80600081146114db576040519150601f19603f3d011682016040523d82523d6000602084013e6114e0565b606091505b50915091506114f08282866114fb565b979650505050505050565b6060831561150a575081610518565b82511561151a5782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082c91906118f7565b600082601f83011261155f57600080fd5b6040516080810181811067ffffffffffffffff821117156115a9577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040528060808401858111156115be57600080fd5b845b818110156115d85780358352602092830192016115c0565b509195945050505050565b60008060a083850312156115f657600080fd5b611600848461154e565b946080939093013593505050565b8035600f81900b811461162057600080fd5b919050565b60008060006060848603121561163a57600080fd5b6116438461160e565b92506116516020850161160e565b9150604084013590509250925092565b60008060a0838503121561167457600080fd5b608083018481111561168557600080fd5b9294923593505050565b6000806000606084860312156116a457600080fd5b833592506116516020850161160e565b600080600080608085870312156116ca57600080fd5b6116d38561160e565b93506116e16020860161160e565b93969395505050506040820135916060013590565b60006020828403121561170857600080fd5b5035919050565b60008060a0838503121561172257600080fd5b82359150611733846020850161154e565b90509250929050565b6000806040838503121561174f57600080fd5b823573ffffffffffffffffffffffffffffffffffffffff8116811461177357600080fd5b946020939093013593505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000602082840312156117c257600080fd5b8151801515811461051857600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611833576118336117d2565b5060010190565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611872576118726117d2565b500290565b6000826118ad577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b6000602082840312156118c457600080fd5b5051919050565b60005b838110156118e65781810151838201526020016118ce565b8381111561118a5750506000910152565b60208152600082518060208401526119168160408501602087016118cb565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60008282101561195a5761195a6117d2565b500390565b60008219821115611972576119726117d2565b500190565b600082516119898184602087016118cb565b919091019291505056fea26469706673582212201bda1c66df27175625b9faaf0821ca7eb651e0519e6596b6204529f2f9f5152064736f6c634300080a003360a06040523480156200001157600080fd5b506040516200175838038062001758833981016040819052620000349162000269565b8251839083906200004d906003906020850190620000f6565b50805162000063906004906020840190620000f6565b505050620000806200007a620000a060201b60201c565b620000a4565b60ff166080525050600680546001600160a01b031916331790556200032b565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8280546200010490620002ee565b90600052602060002090601f01602090048101928262000128576000855562000173565b82601f106200014357805160ff191683800117855562000173565b8280016001018555821562000173579182015b828111156200017357825182559160200191906001019062000156565b506200018192915062000185565b5090565b5b8082111562000181576000815560010162000186565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001c457600080fd5b81516001600160401b0380821115620001e157620001e16200019c565b604051601f8301601f19908116603f011681019082821181831017156200020c576200020c6200019c565b816040528381526020925086838588010111156200022957600080fd5b600091505b838210156200024d57858201830151818301840152908201906200022e565b838211156200025f5760008385830101525b9695505050505050565b6000806000606084860312156200027f57600080fd5b83516001600160401b03808211156200029757600080fd5b620002a587838801620001b2565b94506020860151915080821115620002bc57600080fd5b50620002cb86828701620001b2565b925050604084015160ff81168114620002e357600080fd5b809150509250925092565b600181811c908216806200030357607f821691505b602082108114156200032557634e487b7160e01b600052602260045260246000fd5b50919050565b60805161141162000347600039600061025f01526114116000f3fe608060405234801561001057600080fd5b50600436106101515760003560e01c806370a08231116100cd5780639dc29fac11610081578063a9059cbb11610066578063a9059cbb1461034c578063dd62ed3e1461035f578063f2fde38b146103a557600080fd5b80639dc29fac14610326578063a457c2d71461033957600080fd5b806379cc6790116100b257806379cc6790146102ed5780638da5cb5b1461030057806395d89b411461031e57600080fd5b806370a08231146102af578063715018a6146102e557600080fd5b806318160ddd11610124578063313ce56711610109578063313ce56714610258578063395093511461028957806340c10f191461029c57600080fd5b806318160ddd1461023357806323b872dd1461024557600080fd5b806306fdde03146101565780630754617214610174578063095ea7b3146101b95780631652e9fc146101dc575b600080fd5b61015e6103b8565b60405161016b91906111d2565b60405180910390f35b6006546101949073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161016b565b6101cc6101c736600461126e565b61044a565b604051901515815260200161016b565b6102316101ea366004611298565b600680547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b005b6002545b60405190815260200161016b565b6101cc6102533660046112ba565b610460565b60405160ff7f000000000000000000000000000000000000000000000000000000000000000016815260200161016b565b6101cc61029736600461126e565b61054b565b6101cc6102aa36600461126e565b610594565b6102376102bd366004611298565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b6102316106a3565b6101cc6102fb36600461126e565b610730565b60055473ffffffffffffffffffffffffffffffffffffffff16610194565b61015e6107be565b6101cc61033436600461126e565b6107cd565b6101cc61034736600461126e565b6107d9565b6101cc61035a36600461126e565b6108b1565b61023761036d3660046112f6565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b6102316103b3366004611298565b6108be565b6060600380546103c790611329565b80601f01602080910402602001604051908101604052809291908181526020018280546103f390611329565b80156104405780601f1061041557610100808354040283529160200191610440565b820191906000526020600020905b81548152906001019060200180831161042357829003601f168201915b5050505050905090565b60006104573384846109ee565b50600192915050565b600061046d848484610ba2565b73ffffffffffffffffffffffffffffffffffffffff8416600090815260016020908152604080832033845290915290205482811015610533576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160448201527f6c6c6f77616e636500000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b61054085338584036109ee565b506001949350505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152812054909161045791859061058f9086906113ac565b6109ee565b60065460009073ffffffffffffffffffffffffffffffffffffffff163314610618576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4d696e7465722063616c6c73206f6e6c79000000000000000000000000000000604482015260640161052a565b60065473ffffffffffffffffffffffffffffffffffffffff163314610699576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4d696e7465722063616c6c73206f6e6c79000000000000000000000000000000604482015260640161052a565b6104578383610e56565b60055473ffffffffffffffffffffffffffffffffffffffff163314610724576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161052a565b61072e6000610f76565b565b60065460009073ffffffffffffffffffffffffffffffffffffffff1633146107b4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4d696e7465722063616c6c73206f6e6c79000000000000000000000000000000604482015260640161052a565b6104578383610fed565b6060600480546103c790611329565b60006104578383610fed565b33600090815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff861684529091528120548281101561089a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f000000000000000000000000000000000000000000000000000000606482015260840161052a565b6108a733858584036109ee565b5060019392505050565b6000610457338484610ba2565b60055473ffffffffffffffffffffffffffffffffffffffff16331461093f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161052a565b73ffffffffffffffffffffffffffffffffffffffff81166109e2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161052a565b6109eb81610f76565b50565b73ffffffffffffffffffffffffffffffffffffffff8316610a90576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161052a565b73ffffffffffffffffffffffffffffffffffffffff8216610b33576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015260840161052a565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8316610c45576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161052a565b73ffffffffffffffffffffffffffffffffffffffff8216610ce8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015260840161052a565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604090205481811015610d9e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e63650000000000000000000000000000000000000000000000000000606482015260840161052a565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260208190526040808220858503905591851681529081208054849290610de29084906113ac565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610e4891815260200190565b60405180910390a350505050565b73ffffffffffffffffffffffffffffffffffffffff8216610ed3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161052a565b8060026000828254610ee591906113ac565b909155505073ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604081208054839290610f1f9084906113ac565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6005805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b73ffffffffffffffffffffffffffffffffffffffff8216611090576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f7300000000000000000000000000000000000000000000000000000000000000606482015260840161052a565b73ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604090205481811015611146576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f6365000000000000000000000000000000000000000000000000000000000000606482015260840161052a565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604081208383039055600280548492906111829084906113c4565b909155505060405182815260009073ffffffffffffffffffffffffffffffffffffffff8516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610b95565b600060208083528351808285015260005b818110156111ff578581018301518582016040015282016111e3565b81811115611211576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461126957600080fd5b919050565b6000806040838503121561128157600080fd5b61128a83611245565b946020939093013593505050565b6000602082840312156112aa57600080fd5b6112b382611245565b9392505050565b6000806000606084860312156112cf57600080fd5b6112d884611245565b92506112e660208501611245565b9150604084013590509250925092565b6000806040838503121561130957600080fd5b61131283611245565b915061132060208401611245565b90509250929050565b600181811c9082168061133d57607f821691505b60208210811415611377577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600082198211156113bf576113bf61137d565b500190565b6000828210156113d6576113d661137d565b50039056fea26469706673582212203aca2c6f89034594a4c9be0759a151cd353681fd7e5092c7dafec71460ca6caf64736f6c634300080a0033";
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
    static createInterface(): CurveV1Mock_4AssetsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CurveV1Mock_4Assets;
}
export {};
