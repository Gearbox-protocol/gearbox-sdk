import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AddressProviderTest, AddressProviderTestInterface } from "../../../../../contracts/test/core/AddressProvider.t.sol/AddressProviderTest";
declare type AddressProviderTestConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AddressProviderTest__factory extends ContractFactory {
    constructor(...args: AddressProviderTestConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<AddressProviderTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): AddressProviderTest;
    connect(signer: Signer): AddressProviderTest__factory;
    static readonly bytecode = "0x60806040526000805461ff01600160b01b031916757109709ecfa91a80626ff3989d68f67f5b1dd12d000117905534801561003957600080fd5b50613090806100496000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063a4542fff11610097578063caacc2ab11610066578063caacc2ab14610168578063cda1eec714610170578063f63ce13e14610178578063fa7626d41461018057600080fd5b8063a4542fff14610134578063a4ea04131461013c578063ba414fa614610144578063c11f97271461016057600080fd5b806335c44f35116100d357806335c44f351461011457806361a5a4be1461011c5780637ce04bfc146101245780638457cab41461012c57600080fd5b8063067e033e146100fa5780630a9254e41461010457806332b57c7c1461010c575b600080fd5b61010261018d565b005b6101026102d4565b610102610344565b61010261044b565b610102610552565b610102610659565b610102610760565b610102610a23565b610102610b2a565b61014c610c31565b604051901515815260200160405180910390f35b610102610d91565b6101026118a8565b6101026119af565b610102611b00565b60005461014c9060ff1681565b6001546040517f1ed6511000000000000000000000000000000000000000000000000000000000815273c4375b7de8af5a38a93548eb8453a498222c4ff2600482015273ffffffffffffffffffffffffffffffffffffffff90911690631ed6511090602401600060405180830381600087803b15801561020c57600080fd5b505af1158015610220573d6000803e3d6000fd5b505050506102d2600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166326c74fc36040518163ffffffff1660e01b8152600401602060405180830381865afa158015610294573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102b89190611f49565b73c4375b7de8af5a38a93548eb8453a498222c4ff2611c07565b565b6040516102e090611f3c565b604051809103906000f0801580156102fc573d6000803e3d6000fd5b50600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6001546040517faddc1a7600000000000000000000000000000000000000000000000000000000815273c4375b7de8af5a38a93548eb8453a498222c4ff2600482015273ffffffffffffffffffffffffffffffffffffffff9091169063addc1a7690602401600060405180830381600087803b1580156103c357600080fd5b505af11580156103d7573d6000803e3d6000fd5b505050506102d2600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639068a8686040518163ffffffff1660e01b8152600401602060405180830381865afa158015610294573d6000803e3d6000fd5b6001546040517f530e784f00000000000000000000000000000000000000000000000000000000815273c4375b7de8af5a38a93548eb8453a498222c4ff2600482015273ffffffffffffffffffffffffffffffffffffffff9091169063530e784f90602401600060405180830381600087803b1580156104ca57600080fd5b505af11580156104de573d6000803e3d6000fd5b505050506102d2600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fca513a86040518163ffffffff1660e01b8152600401602060405180830381865afa158015610294573d6000803e3d6000fd5b6001546040517fc5120b3900000000000000000000000000000000000000000000000000000000815273c4375b7de8af5a38a93548eb8453a498222c4ff2600482015273ffffffffffffffffffffffffffffffffffffffff9091169063c5120b3990602401600060405180830381600087803b1580156105d157600080fd5b505af11580156105e5573d6000803e3d6000fd5b505050506102d2600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663060678c26040518163ffffffff1660e01b8152600401602060405180830381865afa158015610294573d6000803e3d6000fd5b6001546040517fce3c4ae400000000000000000000000000000000000000000000000000000000815273c4375b7de8af5a38a93548eb8453a498222c4ff2600482015273ffffffffffffffffffffffffffffffffffffffff9091169063ce3c4ae490602401600060405180830381600087803b1580156106d857600080fd5b505af11580156106ec573d6000803e3d6000fd5b505050506102d2600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c513c9bb6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610294573d6000803e3d6000fd5b600080546040517f491cc7c2000000000000000000000000000000000000000000000000000000008152600160048201819052602482015260448101839052606481019290925262010000900473ffffffffffffffffffffffffffffffffffffffff169063491cc7c290608401600060405180830381600087803b1580156107e757600080fd5b505af11580156107fb573d6000803e3d6000fd5b505060405173c4375b7de8af5a38a93548eb8453a498222c4ff292507f434f4e5452414354535f5245474953544552000000000000000000000000000091507fb37614c7d254ea8d16eb81fa11dddaeb266aa8ba4917980859c7740aff30c69190600090a36001546040517fce3c4ae400000000000000000000000000000000000000000000000000000000815273c4375b7de8af5a38a93548eb8453a498222c4ff2600482015273ffffffffffffffffffffffffffffffffffffffff9091169063ce3c4ae490602401600060405180830381600087803b1580156108df57600080fd5b505af11580156108f3573d6000803e3d6000fd5b5050600080546040517f491cc7c2000000000000000000000000000000000000000000000000000000008152600160048201526024810183905260448101839052606481019290925262010000900473ffffffffffffffffffffffffffffffffffffffff16925063491cc7c29150608401600060405180830381600087803b15801561097e57600080fd5b505af1158015610992573d6000803e3d6000fd5b505060405173c4375b7de8af5a38a93548eb8453a498222c4ff292507f414444524553535f50524f56494445520000000000000000000000000000000091507fb37614c7d254ea8d16eb81fa11dddaeb266aa8ba4917980859c7740aff30c69190600090a3604051610a0390611f3c565b604051809103906000f080158015610a1f573d6000803e3d6000fd5b5050565b6001546040517f21da583700000000000000000000000000000000000000000000000000000000815273c4375b7de8af5a38a93548eb8453a498222c4ff2600482015273ffffffffffffffffffffffffffffffffffffffff909116906321da583790602401600060405180830381600087803b158015610aa257600080fd5b505af1158015610ab6573d6000803e3d6000fd5b505050506102d2600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166377532ed96040518163ffffffff1660e01b8152600401602060405180830381865afa158015610294573d6000803e3d6000fd5b6001546040517f86e09c0800000000000000000000000000000000000000000000000000000000815273c4375b7de8af5a38a93548eb8453a498222c4ff2600482015273ffffffffffffffffffffffffffffffffffffffff909116906386e09c0890602401600060405180830381600087803b158015610ba957600080fd5b505af1158015610bbd573d6000803e3d6000fd5b505050506102d2600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634c252f916040518163ffffffff1660e01b8152600401602060405180830381865afa158015610294573d6000803e3d6000fd5b60008054610100900460ff1615610c515750600054610100900460ff1690565b6000737109709ecfa91a80626ff3989d68f67f5b1dd12d3b15610d8c5760408051737109709ecfa91a80626ff3989d68f67f5b1dd12d602082018190527f6661696c6564000000000000000000000000000000000000000000000000000082840152825180830384018152606083019093526000929091610cf6917f667f9d70ca411d70ead50d8d5c22070dafc36ad75f3dcf5e7237b22ade9aecc491608001611fb6565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815290829052610d2e91611ffe565b6000604051808303816000865af19150503d8060008114610d6b576040519150601f19603f3d011682016040523d82523d6000602084013e610d70565b606091505b5091505080806020019051810190610d88919061201a565b9150505b919050565b6000546040517f06447d5600000000000000000000000000000000000000000000000000000000815273f39fd6e51aad88f6f4ce6ab8827279cfffb9226660048201526201000090910473ffffffffffffffffffffffffffffffffffffffff16906306447d5690602401600060405180830381600087803b158015610e1557600080fd5b505af1158015610e29573d6000803e3d6000fd5b505060408051808201825260208082527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65729082015260005491517ff28dceb30000000000000000000000000000000000000000000000000000000081529093506201000090910473ffffffffffffffffffffffffffffffffffffffff16915063f28dceb390610ebc90849060040161203c565b600060405180830381600087803b158015610ed657600080fd5b505af1158015610eea573d6000803e3d6000fd5b50506001546040517f76aad60500000000000000000000000000000000000000000000000000000000815273c4375b7de8af5a38a93548eb8453a498222c4ff2600482015273ffffffffffffffffffffffffffffffffffffffff90911692506376aad6059150602401600060405180830381600087803b158015610f6d57600080fd5b505af1158015610f81573d6000803e3d6000fd5b50506000546040517ff28dceb30000000000000000000000000000000000000000000000000000000081526201000090910473ffffffffffffffffffffffffffffffffffffffff16925063f28dceb39150610fe090849060040161203c565b600060405180830381600087803b158015610ffa57600080fd5b505af115801561100e573d6000803e3d6000fd5b50506001546040517fce3c4ae400000000000000000000000000000000000000000000000000000000815273c4375b7de8af5a38a93548eb8453a498222c4ff2600482015273ffffffffffffffffffffffffffffffffffffffff909116925063ce3c4ae49150602401600060405180830381600087803b15801561109157600080fd5b505af11580156110a5573d6000803e3d6000fd5b50506000546040517ff28dceb30000000000000000000000000000000000000000000000000000000081526201000090910473ffffffffffffffffffffffffffffffffffffffff16925063f28dceb3915061110490849060040161203c565b600060405180830381600087803b15801561111e57600080fd5b505af1158015611132573d6000803e3d6000fd5b50506001546040517f530e784f00000000000000000000000000000000000000000000000000000000815273c4375b7de8af5a38a93548eb8453a498222c4ff2600482015273ffffffffffffffffffffffffffffffffffffffff909116925063530e784f9150602401600060405180830381600087803b1580156111b557600080fd5b505af11580156111c9573d6000803e3d6000fd5b50506000546040517ff28dceb30000000000000000000000000000000000000000000000000000000081526201000090910473ffffffffffffffffffffffffffffffffffffffff16925063f28dceb3915061122890849060040161203c565b600060405180830381600087803b15801561124257600080fd5b505af1158015611256573d6000803e3d6000fd5b50506001546040517faddc1a7600000000000000000000000000000000000000000000000000000000815273c4375b7de8af5a38a93548eb8453a498222c4ff2600482015273ffffffffffffffffffffffffffffffffffffffff909116925063addc1a769150602401600060405180830381600087803b1580156112d957600080fd5b505af11580156112ed573d6000803e3d6000fd5b50506000546040517ff28dceb30000000000000000000000000000000000000000000000000000000081526201000090910473ffffffffffffffffffffffffffffffffffffffff16925063f28dceb3915061134c90849060040161203c565b600060405180830381600087803b15801561136657600080fd5b505af115801561137a573d6000803e3d6000fd5b50506001546040517fc5120b3900000000000000000000000000000000000000000000000000000000815273c4375b7de8af5a38a93548eb8453a498222c4ff2600482015273ffffffffffffffffffffffffffffffffffffffff909116925063c5120b399150602401600060405180830381600087803b1580156113fd57600080fd5b505af1158015611411573d6000803e3d6000fd5b50506000546040517ff28dceb30000000000000000000000000000000000000000000000000000000081526201000090910473ffffffffffffffffffffffffffffffffffffffff16925063f28dceb3915061147090849060040161203c565b600060405180830381600087803b15801561148a57600080fd5b505af115801561149e573d6000803e3d6000fd5b50506001546040517f1ed6511000000000000000000000000000000000000000000000000000000000815273c4375b7de8af5a38a93548eb8453a498222c4ff2600482015273ffffffffffffffffffffffffffffffffffffffff9091169250631ed651109150602401600060405180830381600087803b15801561152157600080fd5b505af1158015611535573d6000803e3d6000fd5b50506000546040517ff28dceb30000000000000000000000000000000000000000000000000000000081526201000090910473ffffffffffffffffffffffffffffffffffffffff16925063f28dceb3915061159490849060040161203c565b600060405180830381600087803b1580156115ae57600080fd5b505af11580156115c2573d6000803e3d6000fd5b50506001546040517fbcaead9800000000000000000000000000000000000000000000000000000000815273c4375b7de8af5a38a93548eb8453a498222c4ff2600482015273ffffffffffffffffffffffffffffffffffffffff909116925063bcaead989150602401600060405180830381600087803b15801561164557600080fd5b505af1158015611659573d6000803e3d6000fd5b50506000546040517ff28dceb30000000000000000000000000000000000000000000000000000000081526201000090910473ffffffffffffffffffffffffffffffffffffffff16925063f28dceb391506116b890849060040161203c565b600060405180830381600087803b1580156116d257600080fd5b505af11580156116e6573d6000803e3d6000fd5b50506001546040517f86e09c0800000000000000000000000000000000000000000000000000000000815273c4375b7de8af5a38a93548eb8453a498222c4ff2600482015273ffffffffffffffffffffffffffffffffffffffff90911692506386e09c089150602401600060405180830381600087803b15801561176957600080fd5b505af115801561177d573d6000803e3d6000fd5b50506000546040517ff28dceb30000000000000000000000000000000000000000000000000000000081526201000090910473ffffffffffffffffffffffffffffffffffffffff16925063f28dceb391506117dc90849060040161203c565b600060405180830381600087803b1580156117f657600080fd5b505af115801561180a573d6000803e3d6000fd5b50506001546040517f21da583700000000000000000000000000000000000000000000000000000000815273c4375b7de8af5a38a93548eb8453a498222c4ff2600482015273ffffffffffffffffffffffffffffffffffffffff90911692506321da58379150602401600060405180830381600087803b15801561188d57600080fd5b505af11580156118a1573d6000803e3d6000fd5b5050505050565b6001546040517fbcaead9800000000000000000000000000000000000000000000000000000000815273c4375b7de8af5a38a93548eb8453a498222c4ff2600482015273ffffffffffffffffffffffffffffffffffffffff9091169063bcaead9890602401600060405180830381600087803b15801561192757600080fd5b505af115801561193b573d6000803e3d6000fd5b505050506102d2600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663affd92436040518163ffffffff1660e01b8152600401602060405180830381865afa158015610294573d6000803e3d6000fd5b600054604080518082018252600381527f4150310000000000000000000000000000000000000000000000000000000000602082015290517ff28dceb30000000000000000000000000000000000000000000000000000000081526201000090920473ffffffffffffffffffffffffffffffffffffffff169163f28dceb391611a3a9160040161203c565b600060405180830381600087803b158015611a5457600080fd5b505af1158015611a68573d6000803e3d6000fd5b50505050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639068a8686040518163ffffffff1660e01b8152600401602060405180830381865afa158015611ad9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611afd9190611f49565b50565b6001546040517f76aad60500000000000000000000000000000000000000000000000000000000815273c4375b7de8af5a38a93548eb8453a498222c4ff2600482015273ffffffffffffffffffffffffffffffffffffffff909116906376aad60590602401600060405180830381600087803b158015611b7f57600080fd5b505af1158015611b93573d6000803e3d6000fd5b505050506102d2600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663087376956040518163ffffffff1660e01b8152600401602060405180830381865afa158015610294573d6000803e3d6000fd5b8073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610a1f577f41304facd9323d75b11bcdd609cb38effffdb05710f7caf0e9b16c6d9d709f50604051611cbf9060208082526025908201527f4572726f723a2061203d3d2062206e6f7420736174697366696564205b61646460408201527f726573735d000000000000000000000000000000000000000000000000000000606082015260800190565b60405180910390a160408051818152600a818301527f2020457870656374656400000000000000000000000000000000000000000000606082015273ffffffffffffffffffffffffffffffffffffffff8316602082015290517f9c4e8541ca8f0dc1c413f9108f66d82d3cecb1bddbce437a61caa3175c4cc96f9181900360800190a160408051818152600a818301527f2020202041637475616c00000000000000000000000000000000000000000000606082015273ffffffffffffffffffffffffffffffffffffffff8416602082015290517f9c4e8541ca8f0dc1c413f9108f66d82d3cecb1bddbce437a61caa3175c4cc96f9181900360800190a1610a1f737109709ecfa91a80626ff3989d68f67f5b1dd12d3b15611f0e5760408051737109709ecfa91a80626ff3989d68f67f5b1dd12d602082018190527f6661696c656400000000000000000000000000000000000000000000000000009282019290925260016060820152600091907f70ca10bbd0dbfd9020a9f4b13402c16cb120705e0d1c0aeab10fa353ae586fc490608001604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815290829052611e8f9291602001611fb6565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815290829052611ec791611ffe565b6000604051808303816000865af19150503d8060008114611f04576040519150601f19603f3d011682016040523d82523d6000602084013e611f09565b606091505b505050505b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16610100179055565b610fcd8061208e83390190565b600060208284031215611f5b57600080fd5b815173ffffffffffffffffffffffffffffffffffffffff81168114611f7f57600080fd5b9392505050565b60005b83811015611fa1578181015183820152602001611f89565b83811115611fb0576000848401525b50505050565b7fffffffff000000000000000000000000000000000000000000000000000000008316815260008251611ff0816004850160208701611f86565b919091016004019392505050565b60008251612010818460208701611f86565b9190910192915050565b60006020828403121561202c57600080fd5b81518015158114611f7f57600080fd5b602081526000825180602084015261205b816040850160208701611f86565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fe608060405234801561001057600080fd5b5061001a3361005f565b60405130906f20a2222922a9a9afa82927ab24a222a960811b907fb37614c7d254ea8d16eb81fa11dddaeb266aa8ba4917980859c7740aff30c69190600090a36100af565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b610f0f806100be6000396000f3fe608060405234801561001057600080fd5b506004361061018d5760003560e01c806377532ed9116100e3578063bcaead981161008c578063ce3c4ae411610066578063ce3c4ae414610308578063f2fde38b1461031b578063fca513a81461032e57600080fd5b8063bcaead98146102da578063c5120b39146102ed578063c513c9bb1461030057600080fd5b80639068a868116100bd5780639068a868146102b7578063addc1a76146102bf578063affd9243146102d257600080fd5b806377532ed91461027e57806386e09c08146102865780638da5cb5b1461029957600080fd5b80634c252f9111610145578063699f200f1161011f578063699f200f1461022d578063715018a61461026357806376aad6051461026b57600080fd5b80634c252f91146101fc578063530e784f1461020457806354fd4d501461021757600080fd5b80631ed65110116101765780631ed65110146101cc57806321da5837146101e157806326c74fc3146101f457600080fd5b8063060678c21461019257806308737695146101c4575b600080fd5b61019a610336565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b61019a610366565b6101df6101da366004610e10565b610391565b005b6101df6101ef366004610e10565b610444565b61019a6104ef565b61019a61051a565b6101df610212366004610e10565b610545565b61021f600281565b6040519081526020016101bb565b61019a61023b366004610e4d565b60016020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b6101df6105f0565b6101df610279366004610e10565b61067d565b61019a610728565b6101df610294366004610e10565b610753565b60005473ffffffffffffffffffffffffffffffffffffffff1661019a565b61019a6107fe565b6101df6102cd366004610e10565b610829565b61019a6108d4565b6101df6102e8366004610e10565b6108ff565b6101df6102fb366004610e10565b6109aa565b61019a610a55565b6101df610316366004610e10565b610a80565b6101df610329366004610e10565b610b2b565b61019a610c58565b60006103617f444154415f434f4d50524553534f520000000000000000000000000000000000610c7f565b905090565b60006103617f41434c0000000000000000000000000000000000000000000000000000000000610c7f565b60005473ffffffffffffffffffffffffffffffffffffffff163314610417576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6104417f54524541535552595f434f4e545241435400000000000000000000000000000082610d1d565b50565b60005473ffffffffffffffffffffffffffffffffffffffff1633146104c5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161040e565b6104417f574554485f47415445574159000000000000000000000000000000000000000082610d1d565b60006103617f54524541535552595f434f4e5452414354000000000000000000000000000000610c7f565b60006103617f574554485f544f4b454e00000000000000000000000000000000000000000000610c7f565b60005473ffffffffffffffffffffffffffffffffffffffff1633146105c6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161040e565b6104417f50524943455f4f5241434c45000000000000000000000000000000000000000082610d1d565b60005473ffffffffffffffffffffffffffffffffffffffff163314610671576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161040e565b61067b6000610d9b565b565b60005473ffffffffffffffffffffffffffffffffffffffff1633146106fe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161040e565b6104417f41434c000000000000000000000000000000000000000000000000000000000082610d1d565b60006103617f574554485f474154455741590000000000000000000000000000000000000000610c7f565b60005473ffffffffffffffffffffffffffffffffffffffff1633146107d4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161040e565b6104417f574554485f544f4b454e0000000000000000000000000000000000000000000082610d1d565b60006103617f4143434f554e545f464143544f52590000000000000000000000000000000000610c7f565b60005473ffffffffffffffffffffffffffffffffffffffff1633146108aa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161040e565b6104417f4143434f554e545f464143544f5259000000000000000000000000000000000082610d1d565b60006103617f474541525f544f4b454e00000000000000000000000000000000000000000000610c7f565b60005473ffffffffffffffffffffffffffffffffffffffff163314610980576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161040e565b6104417f474541525f544f4b454e0000000000000000000000000000000000000000000082610d1d565b60005473ffffffffffffffffffffffffffffffffffffffff163314610a2b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161040e565b6104417f444154415f434f4d50524553534f52000000000000000000000000000000000082610d1d565b60006103617f434f4e5452414354535f52454749535445520000000000000000000000000000610c7f565b60005473ffffffffffffffffffffffffffffffffffffffff163314610b01576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161040e565b6104417f434f4e5452414354535f5245474953544552000000000000000000000000000082610d1d565b60005473ffffffffffffffffffffffffffffffffffffffff163314610bac576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161040e565b73ffffffffffffffffffffffffffffffffffffffff8116610c4f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161040e565b61044181610d9b565b60006103617f50524943455f4f5241434c4500000000000000000000000000000000000000005b6000818152600160209081526040808320548151808301909252600382527f41503100000000000000000000000000000000000000000000000000000000009282019290925273ffffffffffffffffffffffffffffffffffffffff9091169081610d16576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161040e9190610e66565b5092915050565b60008281526001602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff85169081179091559051909184917fb37614c7d254ea8d16eb81fa11dddaeb266aa8ba4917980859c7740aff30c6919190a35050565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600060208284031215610e2257600080fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610e4657600080fd5b9392505050565b600060208284031215610e5f57600080fd5b5035919050565b600060208083528351808285015260005b81811015610e9357858101830151858201604001528201610e77565b81811115610ea5576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01692909201604001939250505056fea264697066735822122083c228af017c6f5cf8c395cdf7a53276ff56fdd4f4313c39f680ab73bd75417364736f6c634300080a0033a264697066735822122066c4312e82164eef19ee5b43751265467d2b4cb8b809741269673b99a74ab10264736f6c634300080a0033";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: never[];
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
    static createInterface(): AddressProviderTestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AddressProviderTest;
}
export {};
