/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
  BigNumberish,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { DevilsCut, DevilsCutInterface } from "../DevilsCut";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "share_",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "ghouls_",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC20PaymentReleased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PaymentReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PaymentReleased",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "receiver",
        type: "address",
      },
    ],
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "ghouls",
    outputs: [
      {
        internalType: "contract Ghouls",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "releasable",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "releasable",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "released",
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
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "released",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "share_",
        type: "uint256",
      },
    ],
    name: "setShares",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "shares",
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
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    name: "totalReleased",
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
    name: "totalReleased",
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
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60a060405260405161179438038061179483398101604081905261002291610096565b61002b33610046565b600180556003919091556001600160a01b03166080526100d3565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080604083850312156100a957600080fd5b825160208401519092506001600160a01b03811681146100c857600080fd5b809150509250929050565b6080516116986100fc600039600081816101be01528181610a0b0152610e3401526116986000f3fe60806040526004361061012d5760003560e01c80638da5cb5b116100a5578063cfe8307011610074578063e33b7de311610059578063e33b7de314610407578063e4bf01a81461041c578063f2fde38b1461043c57600080fd5b8063cfe8307014610374578063d79779b2146103c457600080fd5b80638da5cb5b146102dc578063a94d373b14610307578063b1bb94b914610334578063c677dede1461035457600080fd5b80633e97394c116100fc5780636ff1c9bc116100e15780636ff1c9bc14610287578063715018a6146102a75780638124fea6146102bc57600080fd5b80633e97394c146102475780636382d9ad1461026757600080fd5b806303314efa146101885780630c81347b146101ac5780632081d6311461020557806337bdc99b1461022557600080fd5b36610183577f6ef95f06320e7a25a04a175ca677b7052bdd97131872c2192525a629f51be770336040805173ffffffffffffffffffffffffffffffffffffffff90921682523460208301520160405180910390a1005b600080fd5b34801561019457600080fd5b506003545b6040519081526020015b60405180910390f35b3480156101b857600080fd5b506101e07f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101a3565b34801561021157600080fd5b506101996102203660046112c6565b61045c565b34801561023157600080fd5b506102456102403660046112f2565b610610565b005b34801561025357600080fd5b50610245610262366004611357565b61062d565b34801561027357600080fd5b50610245610282366004611399565b610687565b34801561029357600080fd5b506102456102a23660046113d2565b610732565b3480156102b357600080fd5b50610245610745565b3480156102c857600080fd5b506102456102d73660046113ef565b610759565b3480156102e857600080fd5b5060005473ffffffffffffffffffffffffffffffffffffffff166101e0565b34801561031357600080fd5b506101996103223660046112f2565b60009081526004602052604090205490565b34801561034057600080fd5b5061024561034f3660046112f2565b610774565b34801561036057600080fd5b5061024561036f366004611414565b610781565b34801561038057600080fd5b5061019961038f3660046112c6565b73ffffffffffffffffffffffffffffffffffffffff919091166000908152600660209081526040808320938352929052205490565b3480156103d057600080fd5b506101996103df3660046113d2565b73ffffffffffffffffffffffffffffffffffffffff1660009081526005602052604090205490565b34801561041357600080fd5b50600254610199565b34801561042857600080fd5b506101996104373660046112f2565b6107d8565b34801561044857600080fd5b506102456104573660046113d2565b6108b3565b600061029b82106104b45760405162461bcd60e51b815260206004820152601a60248201527f446576696c734375743a20746f6b656e496420696e76616c696400000000000060448201526064015b60405180910390fd5b600082116105045760405162461bcd60e51b815260206004820152601a60248201527f446576696c734375743a20746f6b656e496420696e76616c696400000000000060448201526064016104ab565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600560205260408120546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8616906370a0823190602401602060405180830381865afa158015610594573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105b8919061146b565b6105c291906114b3565b73ffffffffffffffffffffffffffffffffffffffff8516600090815260066020908152604080832087845290915290205490915061060690829061094d565b61094d565b9150505b92915050565b610618610980565b610621816109d9565b61062a60018055565b50565b610635610980565b60005b81811015610679576000838383818110610654576106546114c6565b905060200201359050610666816109d9565b5080610671816114f5565b915050610638565b5061068360018055565b5050565b61068f610b73565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa1580156106fc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610720919061146b565b905061072d828483610bda565b505050565b61073a610b73565b476106838282610c67565b61074d610b73565b6107576000610d8d565b565b610761610980565b61076b8282610e02565b61068360018055565b61077c610b73565b600355565b610789610980565b60005b828110156107ce5760008484838181106107a8576107a86114c6565b9050602002013590506107bb8184610e02565b50806107c6816114f5565b91505061078c565b5061072d60018055565b600061029b821061082b5760405162461bcd60e51b815260206004820152601a60248201527f446576696c734375743a20746f6b656e496420696e76616c696400000000000060448201526064016104ab565b6000821161087b5760405162461bcd60e51b815260206004820152601a60248201527f446576696c734375743a20746f6b656e496420696e76616c696400000000000060448201526064016104ab565b600061088660025490565b61089090476114b3565b90506108ac816106018560009081526004602052604090205490565b9392505050565b6108bb610b73565b73ffffffffffffffffffffffffffffffffffffffff81166109445760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016104ab565b61062a81610d8d565b600081670de0b6b3a764000061096260035490565b61096c908661152d565b6109769190611544565b6108ac919061157f565b6002600154036109d25760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016104ab565b6002600155565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018290526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636352211e90602401602060405180830381865afa158015610a67573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a8b9190611592565b90506000610a98836107d8565b905080600003610aea5760405162461bcd60e51b815260206004820152601e60248201527f444375743a207061796d656e7420616c72656164792072656c6561736564000060448201526064016104ab565b8060026000828254610afc91906114b3565b90915550506000838152600460205260409020805482019055610b1f8282610c67565b6040805173ffffffffffffffffffffffffffffffffffffffff84168152602081018390527fdf20fd1e76bc69d672e4814fafb2c449bba3a5369d8359adf9e05e6fde87b056910160405180910390a1505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146107575760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104ab565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb0000000000000000000000000000000000000000000000000000000017905261072d908490610ff1565b80471015610cb75760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e636500000060448201526064016104ab565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610d11576040519150601f19603f3d011682016040523d82523d6000602084013e610d16565b606091505b505090508061072d5760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d6179206861766520726576657274656400000000000060648201526084016104ab565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018390526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636352211e90602401602060405180830381865afa158015610e90573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eb49190611592565b90506000610ec2838561045c565b905080600003610f145760405162461bcd60e51b815260206004820152601e60248201527f444375743a207061796d656e7420616c72656164792072656c6561736564000060448201526064016104ab565b73ffffffffffffffffffffffffffffffffffffffff831660009081526005602052604081208054839290610f499084906114b3565b909155505073ffffffffffffffffffffffffffffffffffffffff831660009081526006602090815260408083208784529091529020805482019055610f8f838383610bda565b6040805173ffffffffffffffffffffffffffffffffffffffff848116825260208201849052918101869052908416907f08daf25d8165b8f0fdb8bd51cb9c02331d74774db557829beae2a89b3e8c2a7b9060600160405180910390a250505050565b6000611053826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166110e39092919063ffffffff16565b80519091501561072d578080602001905181019061107191906115af565b61072d5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016104ab565b60606110f284846000856110fa565b949350505050565b6060824710156111725760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016104ab565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161119b91906115f5565b60006040518083038185875af1925050503d80600081146111d8576040519150601f19603f3d011682016040523d82523d6000602084013e6111dd565b606091505b50915091506111ee878383876111f9565b979650505050505050565b6060831561127557825160000361126e5773ffffffffffffffffffffffffffffffffffffffff85163b61126e5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016104ab565b50816110f2565b6110f2838381511561128a5781518083602001fd5b8060405162461bcd60e51b81526004016104ab9190611611565b73ffffffffffffffffffffffffffffffffffffffff8116811461062a57600080fd5b600080604083850312156112d957600080fd5b82356112e4816112a4565b946020939093013593505050565b60006020828403121561130457600080fd5b5035919050565b60008083601f84011261131d57600080fd5b50813567ffffffffffffffff81111561133557600080fd5b6020830191508360208260051b850101111561135057600080fd5b9250929050565b6000806020838503121561136a57600080fd5b823567ffffffffffffffff81111561138157600080fd5b61138d8582860161130b565b90969095509350505050565b600080604083850312156113ac57600080fd5b82356113b7816112a4565b915060208301356113c7816112a4565b809150509250929050565b6000602082840312156113e457600080fd5b81356108ac816112a4565b6000806040838503121561140257600080fd5b8235915060208301356113c7816112a4565b60008060006040848603121561142957600080fd5b833567ffffffffffffffff81111561144057600080fd5b61144c8682870161130b565b9094509250506020840135611460816112a4565b809150509250925092565b60006020828403121561147d57600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8082018082111561060a5761060a611484565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361152657611526611484565b5060010190565b808202811582820484141761060a5761060a611484565b60008261157a577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b8181038181111561060a5761060a611484565b6000602082840312156115a457600080fd5b81516108ac816112a4565b6000602082840312156115c157600080fd5b815180151581146108ac57600080fd5b60005b838110156115ec5781810151838201526020016115d4565b50506000910152565b600082516116078184602087016115d1565b9190910192915050565b60208152600082518060208401526116308160408501602087016115d1565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea264697066735822122020422f16b42c8e4a34de714b33c85314a897fc835b9e78a5e0adeabe87c7fd2164736f6c63430008110033";

type DevilsCutConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DevilsCutConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DevilsCut__factory extends ContractFactory {
  constructor(...args: DevilsCutConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    share_: PromiseOrValue<BigNumberish>,
    ghouls_: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<DevilsCut> {
    return super.deploy(share_, ghouls_, overrides || {}) as Promise<DevilsCut>;
  }
  override getDeployTransaction(
    share_: PromiseOrValue<BigNumberish>,
    ghouls_: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(share_, ghouls_, overrides || {});
  }
  override attach(address: string): DevilsCut {
    return super.attach(address) as DevilsCut;
  }
  override connect(signer: Signer): DevilsCut__factory {
    return super.connect(signer) as DevilsCut__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DevilsCutInterface {
    return new utils.Interface(_abi) as DevilsCutInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DevilsCut {
    return new Contract(address, _abi, signerOrProvider) as DevilsCut;
  }
}
