import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CurveV1Adapter4Assets, CurveV1Adapter4AssetsInterface } from "../../../../../contracts/adapters/curve/CurveV1_4.sol/CurveV1Adapter4Assets";
declare type CurveV1Adapter4AssetsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CurveV1Adapter4Assets__factory extends ContractFactory {
    constructor(...args: CurveV1Adapter4AssetsConstructorParams);
    deploy(_creditManager: string, _curvePool: string, _lp_token: string, _metapoolBase: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<CurveV1Adapter4Assets>;
    getDeployTransaction(_creditManager: string, _curvePool: string, _lp_token: string, _metapoolBase: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): CurveV1Adapter4Assets;
    connect(signer: Signer): CurveV1Adapter4Assets__factory;
    static readonly bytecode = "0x6101c06040523480156200001257600080fd5b50604051620049a5380380620049a583398101604081905262000035916200065b565b8383838383836001600160a01b03821615806200005957506001600160a01b038116155b156200007857604051635919af9760e11b815260040160405180910390fd5b6001600160a01b038216608081905260408051632f7a188160e01b81529051632f7a1881916004808201926020929091908290030181865afa158015620000c3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000e99190620006b8565b6001600160a01b0390811660a05290811660c05260016000558416159050806200011a57506001600160a01b038216155b156200013957604051635919af9760e11b815260040160405180910390fd5b608051604051630f67c5bd60e41b81526001600160a01b0384811660048301529091169063f67c5bd090602401602060405180830381865afa15801562000184573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001aa9190620006dd565b620001d857604051634c607af960e11b81526001600160a01b03831660048201526024015b60405180910390fd5b6001600160a01b0391821660e081905261010052166101205250620002009050600062000557565b6001600160a01b03166101405262000219600162000557565b6001600160a01b03166101605262000232600262000557565b6001600160a01b0316610180526200024b600362000557565b6001600160a01b039081166101a05261014051161580620002765750610160516001600160a01b0316155b806200028c5750610180516001600160a01b0316155b80620002a257506101a0516001600160a01b0316155b15620002c157604051635919af9760e11b815260040160405180910390fd5b60805161014051604051630f67c5bd60e41b81526001600160a01b03918216600482015291169063f67c5bd090602401602060405180830381865afa1580156200030f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620003359190620006dd565b620003645761014051604051634c607af960e11b81526001600160a01b039091166004820152602401620001cf565b60805161016051604051630f67c5bd60e41b81526001600160a01b03918216600482015291169063f67c5bd090602401602060405180830381865afa158015620003b2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620003d89190620006dd565b620004075761016051604051634c607af960e11b81526001600160a01b039091166004820152602401620001cf565b60805161018051604051630f67c5bd60e41b81526001600160a01b03918216600482015291169063f67c5bd090602401602060405180830381865afa15801562000455573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200047b9190620006dd565b620004aa5761018051604051634c607af960e11b81526001600160a01b039091166004820152602401620001cf565b6080516101a051604051630f67c5bd60e41b81526001600160a01b03918216600482015291169063f67c5bd090602401602060405180830381865afa158015620004f8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200051e9190620006dd565b6200054d576101a051604051634c607af960e11b81526001600160a01b039091166004820152602401620001cf565b50505050620006f7565b60c05160405163c661065760e01b8152600481018390526000916001600160a01b03169063c661065790602401602060405180830381865afa925050508015620005c0575060408051601f3d908101601f19168201909252620005bd91810190620006b8565b60015b620006385760c05160405163046e8dd760e31b8152600f84900b60048201526001600160a01b03909116906323746eb890602401602060405180830381865afa15801562000612573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620006389190620006b8565b92915050565b919050565b80516001600160a01b03811681146200063e57600080fd5b600080600080608085870312156200067257600080fd5b6200067d8562000643565b93506200068d6020860162000643565b92506200069d6040860162000643565b9150620006ad6060860162000643565b905092959194509250565b600060208284031215620006cb57600080fd5b620006d68262000643565b9392505050565b600060208284031215620006f057600080fd5b5051919050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a051613fdf620009c660003960008181610495015281816109da01528181610f62015281816129de01528181612b0a01526136c401526000818161028e015281816108ba01528181610e420152818161290701528181612b3001526135fb01526000818161045b0152818161079a01528181610d220152818161283001528181612b5601526135320152600081816102090152818161067a01528181610c020152818161275901528181612b7c015261346b01526000818161032801528181611ee3015261376e015260008181610390015281816124a701528181612c59015281816131ab01526132490152600081816104bc0152610aca0152600081816103e5015281816106520152818161077201528181610892015281816109b201528181610bda01528181610cfa01528181610e1a01528181610f3a0152818161105b015281816117bd015281816118890152818161195801528181611f5501528181612021015281816120a60152818161216a015281816122360152818161259501528181612d7c01528181612ff0015261382b0152600081816102b50152818161263e01528181612e4a01526138d401526000818161040c01528181610585015281816106c8015281816107e80152818161090801528181610a2801528181610af201528181610c5001528181610d7001528181610e9001528181610fb001528181611186015281816113c001528181611a3e01528181611d5f0152818161234001528181612566015281816126a801528181612781015281816128580152818161292f01528181612a0601528181612bd201528181612cd001528181612dd201528181613046015281816130e0015281816133a0015281816134930152818161355a01528181613623015281816136ec015281816137fc015281816139640152613a120152613fdf6000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c806379bea664116100f9578063c12c21c011610097578063d21220a711610071578063d21220a714610456578063ec026ca71461047d578063ef14101e14610490578063fc0c546a146104b757600080fd5b8063c12c21c014610407578063c66106571461042e578063ce30bbdb1461044157600080fd5b8063a6417ed6116100d3578063a6417ed6146103b2578063b9947eb0146103c5578063bb7b8b80146103d8578063bd90df70146103e057600080fd5b806379bea664146103655780637d49d8751461037857806382c630661461038b57600080fd5b80632f7a1881116101665780634903b0d1116101405780634903b0d1146102fd5780635e0d443f1461031057806364a89bca1461032357806378aa73a41461034a57600080fd5b80632f7a1881146102b057806333d2ebf2146102d75780633df02124146102ea57600080fd5b806318a7bd76116101a257806318a7bd76146102505780631a4d01d2146102635780631af4de831461027657806325be124e1461028957600080fd5b8063029b2f34146101c957806307211ef7146101de5780630dfe168114610204575b600080fd5b6101dc6101d7366004613b34565b6104de565b005b6101f16101ec366004613b71565b611017565b6040519081526020015b60405180910390f35b61022b7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101fb565b6101dc61025e366004613b34565b6110e4565b6101dc610271366004613bad565b61125e565b6101dc610284366004613b71565b61131e565b61022b7f000000000000000000000000000000000000000000000000000000000000000081565b61022b7f000000000000000000000000000000000000000000000000000000000000000081565b6101dc6102e5366004613bd2565b61160a565b6101dc6102f8366004613bfc565b611694565b6101f161030b366004613c3e565b61178b565b6101f161031e366004613b71565b611914565b61022b7f000000000000000000000000000000000000000000000000000000000000000081565b610352600281565b60405161ffff90911681526020016101fb565b6101dc610373366004613b71565b61199c565b6101dc610386366004613c57565b611cbd565b61022b7f000000000000000000000000000000000000000000000000000000000000000081565b6101dc6103c0366004613bfc565b611dea565b61022b6103d3366004613c3e565b611edf565b6101f16120a2565b61022b7f000000000000000000000000000000000000000000000000000000000000000081565b61022b7f000000000000000000000000000000000000000000000000000000000000000081565b61022b61043c366004613c3e565b612138565b610449600681565b6040516101fb9190613c84565b61022b7f000000000000000000000000000000000000000000000000000000000000000081565b6101dc61048b366004613bd2565b61227a565b61022b7f000000000000000000000000000000000000000000000000000000000000000081565b61022b7f000000000000000000000000000000000000000000000000000000000000000081565b60026000541415610550576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b600260009081556040517fe958b7040000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063e958b70490602401602060405180830381865afa1580156105e1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106059190613cc5565b835190915015610725576040517f46fb371d00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660248301527f0000000000000000000000000000000000000000000000000000000000000000811660448301527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60648301527f000000000000000000000000000000000000000000000000000000000000000016906346fb371d90608401600060405180830381600087803b15801561070c57600080fd5b505af1158015610720573d6000803e3d6000fd5b505050505b602083015115610845576040517f46fb371d00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660248301527f0000000000000000000000000000000000000000000000000000000000000000811660448301527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60648301527f000000000000000000000000000000000000000000000000000000000000000016906346fb371d90608401600060405180830381600087803b15801561082c57600080fd5b505af1158015610840573d6000803e3d6000fd5b505050505b604083015115610965576040517f46fb371d00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660248301527f0000000000000000000000000000000000000000000000000000000000000000811660448301527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60648301527f000000000000000000000000000000000000000000000000000000000000000016906346fb371d90608401600060405180830381600087803b15801561094c57600080fd5b505af1158015610960573d6000803e3d6000fd5b505050505b606083015115610a85576040517f46fb371d00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660248301527f0000000000000000000000000000000000000000000000000000000000000000811660448301527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60648301527f000000000000000000000000000000000000000000000000000000000000000016906346fb371d90608401600060405180830381600087803b158015610a6c57600080fd5b505af1158015610a80573d6000803e3d6000fd5b505050505b6040517f51e3f16000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301527f0000000000000000000000000000000000000000000000000000000000000000811660248301527f000000000000000000000000000000000000000000000000000000000000000016906351e3f16090604401600060405180830381600087803b158015610b3657600080fd5b505af1158015610b4a573d6000803e3d6000fd5b50505050610b8f816000368080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061252692505050565b50825115610cad576040517f46fb371d00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660248301527f0000000000000000000000000000000000000000000000000000000000000000811660448301527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60648301527f000000000000000000000000000000000000000000000000000000000000000016906346fb371d90608401600060405180830381600087803b158015610c9457600080fd5b505af1158015610ca8573d6000803e3d6000fd5b505050505b602083015115610dcd576040517f46fb371d00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660248301527f0000000000000000000000000000000000000000000000000000000000000000811660448301527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60648301527f000000000000000000000000000000000000000000000000000000000000000016906346fb371d90608401600060405180830381600087803b158015610db457600080fd5b505af1158015610dc8573d6000803e3d6000fd5b505050505b604083015115610eed576040517f46fb371d00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660248301527f0000000000000000000000000000000000000000000000000000000000000000811660448301527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60648301527f000000000000000000000000000000000000000000000000000000000000000016906346fb371d90608401600060405180830381600087803b158015610ed457600080fd5b505af1158015610ee8573d6000803e3d6000fd5b505050505b60608301511561100d576040517f46fb371d00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660248301527f0000000000000000000000000000000000000000000000000000000000000000811660448301527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60648301527f000000000000000000000000000000000000000000000000000000000000000016906346fb371d90608401600060405180830381600087803b158015610ff457600080fd5b505af1158015611008573d6000803e3d6000fd5b505050505b5050600160005550565b6040517f07211ef7000000000000000000000000000000000000000000000000000000008152600f84810b600483015283900b6024820152604481018290526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906307211ef7906064015b602060405180830381865afa1580156110b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110dc9190613d31565b949350505050565b60026000541415611151576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610547565b600260009081556040517fe958b7040000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063e958b70490602401602060405180830381865afa1580156111e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112069190613cc5565b9050611212818461270a565b611253816000368080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061252692505050565b505060016000555050565b600260005414156112cb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610547565b600260009081556112db83612a67565b9050611253816000368080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250612ba192505050565b6002600054141561138b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610547565b600260009081556040517fe958b7040000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063e958b70490602401602060405180830381865afa15801561141c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114409190613cc5565b9050600061145f856fffffffffffffffffffffffffffffffff16611edf565b9050600061147e856fffffffffffffffffffffffffffffffff16611edf565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85811660048301529192506000918416906370a0823190602401602060405180830381865afa1580156114f0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115149190613d31565b905060018111156115fc577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0160006b033b2e3c9fd0803ce800000061155a8784613d79565b6115649190613db6565b60408051600f8b810b60248301528a900b60448201526064810185905260848082018490528251808303909101815260a49091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa6417ed6000000000000000000000000000000000000000000000000000000001790529091506115f99086908690869060016000612d31565b50505b505060016000555050505050565b60026000541415611677576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610547565b6002600090815561168783612a67565b905061100d8382846130af565b60026000541415611701576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610547565b600260009081556117236fffffffffffffffffffffffffffffffff8616612138565b90506000611742856fffffffffffffffffffffffffffffffff16612138565b90506115fc82826000368080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250600192508291506133579050565b6040517f4903b0d1000000000000000000000000000000000000000000000000000000008152600481018290526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690634903b0d190602401602060405180830381865afa925050508015611853575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261185091810190613d31565b60015b611909576040517f065a80d8000000000000000000000000000000000000000000000000000000008152600f83900b60048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063065a80d890602401602060405180830381865afa1580156118e5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119099190613d31565b92915050565b919050565b6040517f5e0d443f000000000000000000000000000000000000000000000000000000008152600f84810b600483015283900b6024820152604481018290526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690635e0d443f9060640161109b565b60026000541415611a09576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610547565b600260009081556040517fe958b7040000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063e958b70490602401602060405180830381865afa158015611a9a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611abe9190613cc5565b90506000611add856fffffffffffffffffffffffffffffffff16612138565b90506000611afc856fffffffffffffffffffffffffffffffff16612138565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85811660048301529192506000918416906370a0823190602401602060405180830381865afa158015611b6e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b929190613d31565b905060018111156115fc577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0160006b033b2e3c9fd0803ce8000000611bd88784613d79565b611be29190613db6565b604051600f8a810b602483015289900b604482015260648101849052608481018290529091506115f9908690869086907f3df02124000000000000000000000000000000000000000000000000000000009060a4015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152600180612d31565b60026000541415611d2a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610547565b600260009081556040517fe958b7040000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063e958b70490602401602060405180830381865afa158015611dbb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ddf9190613cc5565b905061121281613426565b60026000541415611e57576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610547565b60026000908155611e796fffffffffffffffffffffffffffffffff8616611edf565b90506000611e98856fffffffffffffffffffffffffffffffff16611edf565b90506115fc82826000368080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052506001935091506133579050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1615611f265761190982613746565b6040517fb9947eb0000000000000000000000000000000000000000000000000000000008152600481018390527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063b9947eb090602401602060405180830381865afa925050508015611feb575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252611fe891810190613cc5565b60015b611909576040517fb739953e000000000000000000000000000000000000000000000000000000008152600f83900b60048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063b739953e906024015b602060405180830381865afa15801561207e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119099190613cc5565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663bb7b8b806040518163ffffffff1660e01b8152600401602060405180830381865afa15801561210f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121339190613d31565b905090565b6040517fc6610657000000000000000000000000000000000000000000000000000000008152600481018290526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063c661065790602401602060405180830381865afa925050508015612200575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526121fd91810190613cc5565b60015b611909576040517f23746eb8000000000000000000000000000000000000000000000000000000008152600f83900b60048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906323746eb890602401612061565b600260005414156122e7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610547565b600260009081556122f783612a67565b6040517fe958b70400000000000000000000000000000000000000000000000000000000815233600482015290915060009073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063e958b70490602401602060405180830381865afa158015612387573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123ab9190613cc5565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80831660048301529192506000918416906370a0823190602401602060405180830381865afa15801561241d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124419190613d31565b9050600181111561251a577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01612476613a79565b8181876fffffffffffffffffffffffffffffffff166004811061249b5761249b613d02565b602002015261100883857f00000000000000000000000000000000000000000000000000000000000000007f029b2f3400000000000000000000000000000000000000000000000000000000856b033b2e3c9fd0803ce80000006124ff8c8a613d79565b6125099190613db6565b604051602401611c38929190613df1565b50506001600055505050565b6040517f6ce4074a00000000000000000000000000000000000000000000000000000000815260609073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690636ce4074a906125bf9033907f0000000000000000000000000000000000000000000000000000000000000000908790600401613e59565b6000604051808303816000875af11580156125de573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526126249190810190613ed2565b90503373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614611909576040517f9537301800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84811660048301527f00000000000000000000000000000000000000000000000000000000000000001690639537301890602401600060405180830381600087803b1580156126ec57600080fd5b505af1158015612700573d6000803e3d6000fd5b5050505092915050565b8051600110156127de576040517f51e3f16000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301527f0000000000000000000000000000000000000000000000000000000000000000811660248301527f000000000000000000000000000000000000000000000000000000000000000016906351e3f16090604401600060405180830381600087803b1580156127c557600080fd5b505af11580156127d9573d6000803e3d6000fd5b505050505b6020810151600110156128b5576040517f51e3f16000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301527f0000000000000000000000000000000000000000000000000000000000000000811660248301527f000000000000000000000000000000000000000000000000000000000000000016906351e3f16090604401600060405180830381600087803b15801561289c57600080fd5b505af11580156128b0573d6000803e3d6000fd5b505050505b60408101516001101561298c576040517f51e3f16000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301527f0000000000000000000000000000000000000000000000000000000000000000811660248301527f000000000000000000000000000000000000000000000000000000000000000016906351e3f16090604401600060405180830381600087803b15801561297357600080fd5b505af1158015612987573d6000803e3d6000fd5b505050505b606081015160011015612a63576040517f51e3f16000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301527f0000000000000000000000000000000000000000000000000000000000000000811660248301527f000000000000000000000000000000000000000000000000000000000000000016906351e3f16090604401600060405180830381600087803b158015612a4a57600080fd5b505af1158015612a5e573d6000803e3d6000fd5b505050505b5050565b60006004600f83900b128015612a815750600082600f0b12155b612ae7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f496e636f727265637420696e64657800000000000000000000000000000000006044820152606401610547565b81600f0b600014612b7a5781600f0b600114612b545781600f0b600214612b2e577f0000000000000000000000000000000000000000000000000000000000000000611909565b7f0000000000000000000000000000000000000000000000000000000000000000611909565b7f0000000000000000000000000000000000000000000000000000000000000000611909565b7f000000000000000000000000000000000000000000000000000000000000000092915050565b6040517fe958b7040000000000000000000000000000000000000000000000000000000081523360048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063e958b70490602401602060405180830381865afa158015612c2e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612c529190613cc5565b9050612c827f00000000000000000000000000000000000000000000000000000000000000008484600080613357565b506040517f51e3f16000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff828116600483015284811660248301527f000000000000000000000000000000000000000000000000000000000000000016906351e3f16090604401600060405180830381600087803b158015612d1457600080fd5b505af1158015612d28573d6000803e3d6000fd5b50505050505050565b60608215612e2f576040517f46fb371d00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000008116602483015287811660448301527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60648301527f000000000000000000000000000000000000000000000000000000000000000016906346fb371d90608401600060405180830381600087803b158015612e1657600080fd5b505af1158015612e2a573d6000803e3d6000fd5b505050505b6000803373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614612f96576040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8a811660048301528916906370a0823190602401602060405180830381865afa158015612edb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612eff9190613d31565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8b81166004830152919350908816906370a0823190602401602060405180830381865afa158015612f6f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612f939190613d31565b90505b612fa58989898986868a6137bc565b925084156130a3576040517f46fb371d00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000008116602483015289811660448301527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60648301527f000000000000000000000000000000000000000000000000000000000000000016906346fb371d90608401600060405180830381600087803b15801561308a57600080fd5b505af115801561309e573d6000803e3d6000fd5b505050505b50509695505050505050565b6040517fe958b7040000000000000000000000000000000000000000000000000000000081523360048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063e958b70490602401602060405180830381865afa15801561313c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906131609190613cc5565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80831660048301529192506000917f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa1580156131f2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906132169190613d31565b90506001811115613350577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01612a5e827f0000000000000000000000000000000000000000000000000000000000000000867f1a4d01d200000000000000000000000000000000000000000000000000000000858a6b033b2e3c9fd0803ce80000006132a38b84613d79565b6132ad9190613db6565b6040516024810193909352600f9190910b60448301526064820152608401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152600080612d31565b5050505050565b6040517fe958b70400000000000000000000000000000000000000000000000000000000815233600482015260609060009073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063e958b70490602401602060405180830381865afa1580156133e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061340b9190613cc5565b905061341b818888888888612d31565b979650505050505050565b6040517f51e3f16000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301527f0000000000000000000000000000000000000000000000000000000000000000811660248301527f000000000000000000000000000000000000000000000000000000000000000016906351e3f16090604401600060405180830381600087803b1580156134d757600080fd5b505af11580156134eb573d6000803e3d6000fd5b50506040517f51e3f16000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84811660048301527f0000000000000000000000000000000000000000000000000000000000000000811660248301527f00000000000000000000000000000000000000000000000000000000000000001692506351e3f1609150604401600060405180830381600087803b1580156135a057600080fd5b505af11580156135b4573d6000803e3d6000fd5b50506040517f51e3f16000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84811660048301527f0000000000000000000000000000000000000000000000000000000000000000811660248301527f00000000000000000000000000000000000000000000000000000000000000001692506351e3f1609150604401600060405180830381600087803b15801561366957600080fd5b505af115801561367d573d6000803e3d6000fd5b50506040517f51e3f16000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84811660048301527f0000000000000000000000000000000000000000000000000000000000000000811660248301527f00000000000000000000000000000000000000000000000000000000000000001692506351e3f1609150604401600060405180830381600087803b15801561373257600080fd5b505af1158015613350573d6000803e3d6000fd5b600081613757576119096000612138565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663c661065761379e600185613f92565b6040518263ffffffff1660e01b815260040161206191815260200190565b6040517f6ce4074a00000000000000000000000000000000000000000000000000000000815260609073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690636ce4074a906138559033907f0000000000000000000000000000000000000000000000000000000000000000908a90600401613e59565b6000604051808303816000875af1158015613874573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526138ba9190810190613ed2565b90503373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146139c5576040517ffcb2ffbe00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff898116600483015288811660248301528781166044830152606482018690526084820185905283151560a48301527f0000000000000000000000000000000000000000000000000000000000000000169063fcb2ffbe9060c401600060405180830381600087803b1580156139a857600080fd5b505af11580156139bc573d6000803e3d6000fd5b5050505061341b565b6040517f51e3f16000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff898116600483015287811660248301527f000000000000000000000000000000000000000000000000000000000000000016906351e3f16090604401600060405180830381600087803b158015613a5657600080fd5b505af1158015613a6a573d6000803e3d6000fd5b50505050979650505050505050565b60405180608001604052806004906020820280368337509192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f830112613ad757600080fd5b6040516080810181811067ffffffffffffffff82111715613afa57613afa613a97565b604052806080840185811115613b0f57600080fd5b845b81811015613b29578035835260209283019201613b11565b509195945050505050565b60008060a08385031215613b4757600080fd5b613b518484613ac6565b946080939093013593505050565b8035600f81900b811461190f57600080fd5b600080600060608486031215613b8657600080fd5b613b8f84613b5f565b9250613b9d60208501613b5f565b9150604084013590509250925092565b600080600060608486031215613bc257600080fd5b83359250613b9d60208501613b5f565b60008060408385031215613be557600080fd5b613bee83613b5f565b946020939093013593505050565b60008060008060808587031215613c1257600080fd5b613c1b85613b5f565b9350613c2960208601613b5f565b93969395505050506040820135916060013590565b600060208284031215613c5057600080fd5b5035919050565b60008060a08385031215613c6a57600080fd5b82359150613c7b8460208501613ac6565b90509250929050565b60208101600f8310613cbf577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b91905290565b600060208284031215613cd757600080fd5b815173ffffffffffffffffffffffffffffffffffffffff81168114613cfb57600080fd5b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215613d4357600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615613db157613db1613d4a565b500290565b600082613dec577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b60a08101818460005b6004811015613e19578151835260209283019290910190600101613dfa565b5050508260808301529392505050565b60005b83811015613e44578181015183820152602001613e2c565b83811115613e53576000848401525b50505050565b600073ffffffffffffffffffffffffffffffffffffffff8086168352808516602084015250606060408301528251806060840152613e9e816080850160208701613e29565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01691909101608001949350505050565b600060208284031215613ee457600080fd5b815167ffffffffffffffff80821115613efc57600080fd5b818401915084601f830112613f1057600080fd5b815181811115613f2257613f22613a97565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908382118183101715613f6857613f68613a97565b81604052828152876020848701011115613f8157600080fd5b61341b836020830160208801613e29565b600082821015613fa457613fa4613d4a565b50039056fea26469706673582212201345b7ec66fdaee6a2d26a458050b0b1e630c52226df99f3d39f8d0db96d842d64736f6c634300080a0033";
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
    static createInterface(): CurveV1Adapter4AssetsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CurveV1Adapter4Assets;
}
export {};
