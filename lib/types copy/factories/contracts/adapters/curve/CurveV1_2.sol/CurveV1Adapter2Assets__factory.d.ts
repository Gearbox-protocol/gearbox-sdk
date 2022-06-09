import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CurveV1Adapter2Assets, CurveV1Adapter2AssetsInterface } from "../../../../../contracts/adapters/curve/CurveV1_2.sol/CurveV1Adapter2Assets";
declare type CurveV1Adapter2AssetsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CurveV1Adapter2Assets__factory extends ContractFactory {
    constructor(...args: CurveV1Adapter2AssetsConstructorParams);
    deploy(_creditManager: string, _curvePool: string, _lp_token: string, _metapoolBase: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<CurveV1Adapter2Assets>;
    getDeployTransaction(_creditManager: string, _curvePool: string, _lp_token: string, _metapoolBase: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): CurveV1Adapter2Assets;
    connect(signer: Signer): CurveV1Adapter2Assets__factory;
    static readonly bytecode = "0x6101806040523480156200001257600080fd5b5060405162003ec438038062003ec48339810160408190526200003591620004b7565b8383838383836001600160a01b03821615806200005957506001600160a01b038116155b156200007857604051635919af9760e11b815260040160405180910390fd5b6001600160a01b038216608081905260408051632f7a188160e01b81529051632f7a1881916004808201926020929091908290030181865afa158015620000c3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000e9919062000514565b6001600160a01b0390811660a05290811660c05260016000558416159050806200011a57506001600160a01b038216155b156200013957604051635919af9760e11b815260040160405180910390fd5b608051604051630f67c5bd60e41b81526001600160a01b0384811660048301529091169063f67c5bd090602401602060405180830381865afa15801562000184573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001aa919062000539565b620001d857604051634c607af960e11b81526001600160a01b03831660048201526024015b60405180910390fd5b6001600160a01b0391821660e0819052610100521661012052506200020090506000620003b3565b6001600160a01b031661014052620002196001620003b3565b6001600160a01b039081166101605261014051161580620002445750610160516001600160a01b0316155b156200026357604051635919af9760e11b815260040160405180910390fd5b60805161014051604051630f67c5bd60e41b81526001600160a01b03918216600482015291169063f67c5bd090602401602060405180830381865afa158015620002b1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002d7919062000539565b620003065761014051604051634c607af960e11b81526001600160a01b039091166004820152602401620001cf565b60805161016051604051630f67c5bd60e41b81526001600160a01b03918216600482015291169063f67c5bd090602401602060405180830381865afa15801562000354573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200037a919062000539565b620003a95761016051604051634c607af960e11b81526001600160a01b039091166004820152602401620001cf565b5050505062000553565b60c05160405163c661065760e01b8152600481018390526000916001600160a01b03169063c661065790602401602060405180830381865afa9250505080156200041c575060408051601f3d908101601f19168201909252620004199181019062000514565b60015b620004945760c05160405163046e8dd760e31b8152600f84900b60048201526001600160a01b03909116906323746eb890602401602060405180830381865afa1580156200046e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000494919062000514565b92915050565b919050565b80516001600160a01b03811681146200049a57600080fd5b60008060008060808587031215620004ce57600080fd5b620004d9856200049f565b9350620004e9602086016200049f565b9250620004f9604086016200049f565b915062000509606086016200049f565b905092959194509250565b6000602082840312156200052757600080fd5b62000532826200049f565b9392505050565b6000602082840312156200054c57600080fd5b5051919050565b60805160a05160c05160e051610100516101205161014051610160516137526200077260003960008181610405015281816107fd01528181610b45015281816122ad01528181612c8b0152612ea90152600081816101f3015281816106dd01528181610a25015281816122d301528181612bc40152612dd20152600081816102eb015281816118cb0152612d35015260008181610340015281816108ed01528181611fbd015281816123b00152818161290201526129a001526000610452015260008181610395015281816104b8015281816106b5015281816107d5015281816109fd01528181610b1d01528181611164015281816112300152818161146d0152818161193d01528181611a0901528181611a8e01528181611b5201528181611c1e015281816120ab015281816124d3015281816127470152612f9c01526000818161026501528181612154015281816125a101526130450152600081816103bc015281816105e80152818161072b0152818161084b0152818161091501528181610a7301528181610b9301528181610d670152818161135d0152818161155301528181611d0401528181611e560152818161207c015281816121be0152818161232901528181612427015281816125290152818161279d0152818161283701528181612af901528181612bec01528181612cb301528181612dfa01528181612ed101528181612f6d015281816130d5015261318301526137526000f3fe608060405234801561001057600080fd5b50600436106101ae5760003560e01c806379bea664116100ee578063c12c21c011610097578063d21220a711610071578063d21220a714610400578063e310327314610427578063ec026ca71461043a578063fc0c546a1461044d57600080fd5b8063c12c21c0146103b7578063c6610657146103de578063ce30bbdb146103f157600080fd5b8063b9947eb0116100c8578063b9947eb014610375578063bb7b8b8014610388578063bd90df701461039057600080fd5b806379bea6641461032857806382c630661461033b578063a6417ed61461036257600080fd5b806333d2ebf21161015b5780635b36389c116101355780635b36389c146102c05780635e0d443f146102d357806364a89bca146102e657806378aa73a41461030d57600080fd5b806333d2ebf2146102875780633df021241461029a5780634903b0d1146102ad57600080fd5b80631a4d01d21161018c5780631a4d01d21461023a5780631af4de831461024d5780632f7a18811461026057600080fd5b806307211ef7146101b35780630b4c7e4d146101d95780630dfe1681146101ee575b600080fd5b6101c66101c136600461321a565b610474565b6040519081526020015b60405180910390f35b6101ec6101e73660046132f5565b610541565b005b6102157f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101d0565b6101ec610248366004613320565b610bfa565b6101ec61025b36600461321a565b610cc5565b6102157f000000000000000000000000000000000000000000000000000000000000000081565b6101ec610295366004613345565b610fb1565b6101ec6102a836600461336f565b61103b565b6101c66102bb3660046133b1565b611132565b6101ec6102ce3660046133ca565b6112bb565b6101c66102e136600461321a565b611429565b6102157f000000000000000000000000000000000000000000000000000000000000000081565b610315600281565b60405161ffff90911681526020016101d0565b6101ec61033636600461321a565b6114b1565b6102157f000000000000000000000000000000000000000000000000000000000000000081565b6101ec61037036600461336f565b6117d2565b6102156103833660046133b1565b6118c7565b6101c6611a8a565b6102157f000000000000000000000000000000000000000000000000000000000000000081565b6102157f000000000000000000000000000000000000000000000000000000000000000081565b6102156103ec3660046133b1565b611b20565b60046040516101d091906133f7565b6102157f000000000000000000000000000000000000000000000000000000000000000081565b6101ec6104353660046132f5565b611c62565b6101ec610448366004613345565b611d90565b6102157f000000000000000000000000000000000000000000000000000000000000000081565b6040517f07211ef7000000000000000000000000000000000000000000000000000000008152600f84810b600483015283900b6024820152604481018290526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906307211ef7906064015b602060405180830381865afa158015610515573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105399190613438565b949350505050565b600260005414156105b3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b600260009081556040517fe958b7040000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063e958b70490602401602060405180830381865afa158015610644573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106689190613451565b835190915015610788576040517f46fb371d00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660248301527f0000000000000000000000000000000000000000000000000000000000000000811660448301527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60648301527f000000000000000000000000000000000000000000000000000000000000000016906346fb371d90608401600060405180830381600087803b15801561076f57600080fd5b505af1158015610783573d6000803e3d6000fd5b505050505b6020830151156108a8576040517f46fb371d00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660248301527f0000000000000000000000000000000000000000000000000000000000000000811660448301527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60648301527f000000000000000000000000000000000000000000000000000000000000000016906346fb371d90608401600060405180830381600087803b15801561088f57600080fd5b505af11580156108a3573d6000803e3d6000fd5b505050505b6040517f51e3f16000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301527f0000000000000000000000000000000000000000000000000000000000000000811660248301527f000000000000000000000000000000000000000000000000000000000000000016906351e3f16090604401600060405180830381600087803b15801561095957600080fd5b505af115801561096d573d6000803e3d6000fd5b505050506109b2816000368080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061203c92505050565b50825115610ad0576040517f46fb371d00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660248301527f0000000000000000000000000000000000000000000000000000000000000000811660448301527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60648301527f000000000000000000000000000000000000000000000000000000000000000016906346fb371d90608401600060405180830381600087803b158015610ab757600080fd5b505af1158015610acb573d6000803e3d6000fd5b505050505b602083015115610bf0576040517f46fb371d00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660248301527f0000000000000000000000000000000000000000000000000000000000000000811660448301527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60648301527f000000000000000000000000000000000000000000000000000000000000000016906346fb371d90608401600060405180830381600087803b158015610bd757600080fd5b505af1158015610beb573d6000803e3d6000fd5b505050505b5050600160005550565b60026000541415610c67576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016105aa565b60026000908155610c7783612220565b9050610cba816000368080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506122f892505050565b505060016000555050565b60026000541415610d32576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016105aa565b600260009081556040517fe958b7040000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063e958b70490602401602060405180830381865afa158015610dc3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610de79190613451565b90506000610e06856fffffffffffffffffffffffffffffffff166118c7565b90506000610e25856fffffffffffffffffffffffffffffffff166118c7565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85811660048301529192506000918416906370a0823190602401602060405180830381865afa158015610e97573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ebb9190613438565b90506001811115610fa3577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0160006b033b2e3c9fd0803ce8000000610f0187846134ec565b610f0b9190613529565b60408051600f8b810b60248301528a900b60448201526064810185905260848082018490528251808303909101815260a49091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa6417ed600000000000000000000000000000000000000000000000000000000179052909150610fa09086908690869060016000612488565b50505b505060016000555050505050565b6002600054141561101e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016105aa565b6002600090815561102e83612220565b9050610bf0838284612806565b600260005414156110a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016105aa565b600260009081556110ca6fffffffffffffffffffffffffffffffff8616611b20565b905060006110e9856fffffffffffffffffffffffffffffffff16611b20565b9050610fa382826000368080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525060019250829150612ab09050565b6040517f4903b0d1000000000000000000000000000000000000000000000000000000008152600481018290526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690634903b0d190602401602060405180830381865afa9250505080156111fa575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526111f791810190613438565b60015b6112b0576040517f065a80d8000000000000000000000000000000000000000000000000000000008152600f83900b60048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063065a80d890602401602060405180830381865afa15801561128c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112b09190613438565b92915050565b919050565b60026000541415611328576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016105aa565b600260009081556040517fe958b7040000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063e958b70490602401602060405180830381865afa1580156113b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113dd9190613451565b90506113e881612b7f565b610cba816000368080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061203c92505050565b6040517f5e0d443f000000000000000000000000000000000000000000000000000000008152600f84810b600483015283900b6024820152604481018290526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690635e0d443f906064016104f8565b6002600054141561151e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016105aa565b600260009081556040517fe958b7040000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063e958b70490602401602060405180830381865afa1580156115af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115d39190613451565b905060006115f2856fffffffffffffffffffffffffffffffff16611b20565b90506000611611856fffffffffffffffffffffffffffffffff16611b20565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85811660048301529192506000918416906370a0823190602401602060405180830381865afa158015611683573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116a79190613438565b90506001811115610fa3577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0160006b033b2e3c9fd0803ce80000006116ed87846134ec565b6116f79190613529565b604051600f8a810b602483015289900b60448201526064810184905260848101829052909150610fa0908690869086907f3df02124000000000000000000000000000000000000000000000000000000009060a4015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152600180612488565b6002600054141561183f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016105aa565b600260009081556118616fffffffffffffffffffffffffffffffff86166118c7565b90506000611880856fffffffffffffffffffffffffffffffff166118c7565b9050610fa382826000368080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250600193509150612ab09050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff161561190e576112b082612d0d565b6040517fb9947eb0000000000000000000000000000000000000000000000000000000008152600481018390527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063b9947eb090602401602060405180830381865afa9250505080156119d3575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526119d091810190613451565b60015b6112b0576040517fb739953e000000000000000000000000000000000000000000000000000000008152600f83900b60048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063b739953e906024015b602060405180830381865afa158015611a66573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112b09190613451565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663bb7b8b806040518163ffffffff1660e01b8152600401602060405180830381865afa158015611af7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b1b9190613438565b905090565b6040517fc6610657000000000000000000000000000000000000000000000000000000008152600481018290526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063c661065790602401602060405180830381865afa925050508015611be8575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252611be591810190613451565b60015b6112b0576040517f23746eb8000000000000000000000000000000000000000000000000000000008152600f83900b60048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906323746eb890602401611a49565b60026000541415611ccf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016105aa565b600260009081556040517fe958b7040000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063e958b70490602401602060405180830381865afa158015611d60573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d849190613451565b90506113e88184612d83565b60026000541415611dfd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016105aa565b60026000908155611e0d83612220565b6040517fe958b70400000000000000000000000000000000000000000000000000000000815233600482015290915060009073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063e958b70490602401602060405180830381865afa158015611e9d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ec19190613451565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80831660048301529192506000918416906370a0823190602401602060405180830381865afa158015611f33573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f579190613438565b90506001811115612030577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01611f8c6131ea565b8181876fffffffffffffffffffffffffffffffff1660028110611fb157611fb161348e565b6020020152610beb83857f00000000000000000000000000000000000000000000000000000000000000007f0b4c7e4d00000000000000000000000000000000000000000000000000000000856b033b2e3c9fd0803ce80000006120158c8a6134ec565b61201f9190613529565b60405160240161174d929190613564565b50506001600055505050565b6040517f6ce4074a00000000000000000000000000000000000000000000000000000000815260609073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690636ce4074a906120d59033907f00000000000000000000000000000000000000000000000000000000000000009087906004016135cc565b6000604051808303816000875af11580156120f4573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261213a9190810190613645565b90503373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146112b0576040517f9537301800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84811660048301527f00000000000000000000000000000000000000000000000000000000000000001690639537301890602401600060405180830381600087803b15801561220257600080fd5b505af1158015612216573d6000803e3d6000fd5b5050505092915050565b60006002600f83900b12801561223a5750600082600f0b12155b6122a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f496e636f727265637420696e646578000000000000000000000000000000000060448201526064016105aa565b81600f0b6000146122d1577f00000000000000000000000000000000000000000000000000000000000000006112b0565b7f000000000000000000000000000000000000000000000000000000000000000092915050565b6040517fe958b7040000000000000000000000000000000000000000000000000000000081523360048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063e958b70490602401602060405180830381865afa158015612385573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123a99190613451565b90506123d97f00000000000000000000000000000000000000000000000000000000000000008484600080612ab0565b506040517f51e3f16000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff828116600483015284811660248301527f000000000000000000000000000000000000000000000000000000000000000016906351e3f16090604401600060405180830381600087803b15801561246b57600080fd5b505af115801561247f573d6000803e3d6000fd5b50505050505050565b60608215612586576040517f46fb371d00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000008116602483015287811660448301527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60648301527f000000000000000000000000000000000000000000000000000000000000000016906346fb371d90608401600060405180830381600087803b15801561256d57600080fd5b505af1158015612581573d6000803e3d6000fd5b505050505b6000803373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146126ed576040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8a811660048301528916906370a0823190602401602060405180830381865afa158015612632573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126569190613438565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8b81166004830152919350908816906370a0823190602401602060405180830381865afa1580156126c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126ea9190613438565b90505b6126fc8989898986868a612f2d565b925084156127fa576040517f46fb371d00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000008116602483015289811660448301527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60648301527f000000000000000000000000000000000000000000000000000000000000000016906346fb371d90608401600060405180830381600087803b1580156127e157600080fd5b505af11580156127f5573d6000803e3d6000fd5b505050505b50509695505050505050565b6040517fe958b7040000000000000000000000000000000000000000000000000000000081523360048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063e958b70490602401602060405180830381865afa158015612893573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128b79190613451565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80831660048301529192506000917f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015612949573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061296d9190613438565b90506001811115612aa9577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01612aa7827f0000000000000000000000000000000000000000000000000000000000000000867f1a4d01d200000000000000000000000000000000000000000000000000000000858a6b033b2e3c9fd0803ce80000006129fa8b846134ec565b612a049190613529565b6040516024810193909352600f9190910b60448301526064820152608401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152600080612488565b505b5050505050565b6040517fe958b70400000000000000000000000000000000000000000000000000000000815233600482015260609060009073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063e958b70490602401602060405180830381865afa158015612b40573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b649190613451565b9050612b74818888888888612488565b979650505050505050565b6040517f51e3f16000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301527f0000000000000000000000000000000000000000000000000000000000000000811660248301527f000000000000000000000000000000000000000000000000000000000000000016906351e3f16090604401600060405180830381600087803b158015612c3057600080fd5b505af1158015612c44573d6000803e3d6000fd5b50506040517f51e3f16000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84811660048301527f0000000000000000000000000000000000000000000000000000000000000000811660248301527f00000000000000000000000000000000000000000000000000000000000000001692506351e3f1609150604401600060405180830381600087803b158015612cf957600080fd5b505af1158015612aa9573d6000803e3d6000fd5b600081612d1e576112b06000611b20565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663c6610657612d65600185613705565b6040518263ffffffff1660e01b8152600401611a4991815260200190565b805160011015612e57576040517f51e3f16000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301527f0000000000000000000000000000000000000000000000000000000000000000811660248301527f000000000000000000000000000000000000000000000000000000000000000016906351e3f16090604401600060405180830381600087803b158015612e3e57600080fd5b505af1158015612e52573d6000803e3d6000fd5b505050505b602081015160011015612f29576040517f51e3f16000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301527f0000000000000000000000000000000000000000000000000000000000000000811660248301527f000000000000000000000000000000000000000000000000000000000000000016906351e3f16090604401600060405180830381600087803b158015612f1557600080fd5b505af1158015612aa7573d6000803e3d6000fd5b5050565b6040517f6ce4074a00000000000000000000000000000000000000000000000000000000815260609073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690636ce4074a90612fc69033907f0000000000000000000000000000000000000000000000000000000000000000908a906004016135cc565b6000604051808303816000875af1158015612fe5573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261302b9190810190613645565b90503373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614613136576040517ffcb2ffbe00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff898116600483015288811660248301528781166044830152606482018690526084820185905283151560a48301527f0000000000000000000000000000000000000000000000000000000000000000169063fcb2ffbe9060c401600060405180830381600087803b15801561311957600080fd5b505af115801561312d573d6000803e3d6000fd5b50505050612b74565b6040517f51e3f16000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff898116600483015287811660248301527f000000000000000000000000000000000000000000000000000000000000000016906351e3f16090604401600060405180830381600087803b1580156131c757600080fd5b505af11580156131db573d6000803e3d6000fd5b50505050979650505050505050565b60405180604001604052806002906020820280368337509192915050565b8035600f81900b81146112b657600080fd5b60008060006060848603121561322f57600080fd5b61323884613208565b925061324660208501613208565b9150604084013590509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f83011261329657600080fd5b6040516040810181811067ffffffffffffffff821117156132b9576132b9613256565b80604052508060408401858111156132d057600080fd5b845b818110156132ea5780358352602092830192016132d2565b509195945050505050565b6000806060838503121561330857600080fd5b6133128484613285565b946040939093013593505050565b60008060006060848603121561333557600080fd5b8335925061324660208501613208565b6000806040838503121561335857600080fd5b61336183613208565b946020939093013593505050565b6000806000806080858703121561338557600080fd5b61338e85613208565b935061339c60208601613208565b93969395505050506040820135916060013590565b6000602082840312156133c357600080fd5b5035919050565b600080606083850312156133dd57600080fd5b823591506133ee8460208501613285565b90509250929050565b60208101600f8310613432577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b91905290565b60006020828403121561344a57600080fd5b5051919050565b60006020828403121561346357600080fd5b815173ffffffffffffffffffffffffffffffffffffffff8116811461348757600080fd5b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615613524576135246134bd565b500290565b60008261355f577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b60608101818460005b600281101561358c57815183526020928301929091019060010161356d565b5050508260408301529392505050565b60005b838110156135b757818101518382015260200161359f565b838111156135c6576000848401525b50505050565b600073ffffffffffffffffffffffffffffffffffffffff808616835280851660208401525060606040830152825180606084015261361181608085016020870161359c565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01691909101608001949350505050565b60006020828403121561365757600080fd5b815167ffffffffffffffff8082111561366f57600080fd5b818401915084601f83011261368357600080fd5b81518181111561369557613695613256565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156136db576136db613256565b816040528281528760208487010111156136f457600080fd5b612b7483602083016020880161359c565b600082821015613717576137176134bd565b50039056fea26469706673582212202ffb076d2b288b9ddb350e3ca9d310480d80a64a0087bba935759ab1749a29da64736f6c634300080a0033";
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
    static createInterface(): CurveV1Adapter2AssetsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CurveV1Adapter2Assets;
}
export {};
