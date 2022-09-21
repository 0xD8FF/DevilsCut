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
import type {
  PaymentSplitter,
  PaymentSplitterInterface,
} from "../PaymentSplitter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "payees",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "shares_",
        type: "uint256[]",
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
    ],
    name: "ERC20PaymentReleased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "PayeeAdded",
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
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "payee",
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
        internalType: "address",
        name: "account",
        type: "address",
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
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
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
        internalType: "address payable",
        name: "account",
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
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
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
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
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
        internalType: "address",
        name: "account",
        type: "address",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
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
    inputs: [],
    name: "totalShares",
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
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040526040516200155e3803806200155e83398101604081905262000026916200042e565b8051825114620000985760405162461bcd60e51b815260206004820152603260248201527f5061796d656e7453706c69747465723a2070617965657320616e6420736861726044820152710cae640d8cadccee8d040dad2e6dac2e8c6d60731b60648201526084015b60405180910390fd5b6000825111620000eb5760405162461bcd60e51b815260206004820152601a60248201527f5061796d656e7453706c69747465723a206e6f2070617965657300000000000060448201526064016200008f565b60005b82518110156200015757620001428382815181106200011157620001116200050c565b60200260200101518383815181106200012e576200012e6200050c565b60200260200101516200016060201b60201c565b806200014e8162000538565b915050620000ee565b50505062000570565b6001600160a01b038216620001cd5760405162461bcd60e51b815260206004820152602c60248201527f5061796d656e7453706c69747465723a206163636f756e74206973207468652060448201526b7a65726f206164647265737360a01b60648201526084016200008f565b600081116200021f5760405162461bcd60e51b815260206004820152601d60248201527f5061796d656e7453706c69747465723a2073686172657320617265203000000060448201526064016200008f565b6001600160a01b038216600090815260026020526040902054156200029b5760405162461bcd60e51b815260206004820152602b60248201527f5061796d656e7453706c69747465723a206163636f756e7420616c726561647960448201526a206861732073686172657360a81b60648201526084016200008f565b60048054600181019091557f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b0180546001600160a01b0319166001600160a01b0384169081179091556000908152600260205260408120829055546200030390829062000554565b600055604080516001600160a01b0384168152602081018390527f40c340f65e17194d14ddddb073d3c9f888e3cb52b5aae0c6c7706b4fbc905fac910160405180910390a15050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b03811182821017156200038d576200038d6200034c565b604052919050565b60006001600160401b03821115620003b157620003b16200034c565b5060051b60200190565b600082601f830112620003cd57600080fd5b81516020620003e6620003e08362000395565b62000362565b82815260059290921b840181019181810190868411156200040657600080fd5b8286015b848110156200042357805183529183019183016200040a565b509695505050505050565b600080604083850312156200044257600080fd5b82516001600160401b03808211156200045a57600080fd5b818501915085601f8301126200046f57600080fd5b8151602062000482620003e08362000395565b82815260059290921b84018101918181019089841115620004a257600080fd5b948201945b83861015620004d95785516001600160a01b0381168114620004c95760008081fd5b82529482019490820190620004a7565b91880151919650909350505080821115620004f357600080fd5b506200050285828601620003bb565b9150509250929050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600182016200054d576200054d62000522565b5060010190565b808201808211156200056a576200056a62000522565b92915050565b610fde80620005806000396000f3fe6080604052600436106100c05760003560e01c80639852595c11610074578063ce7c2ac21161004e578063ce7c2ac214610269578063d79779b2146102ac578063e33b7de3146102ef57600080fd5b80639852595c146101e6578063a3f8eace14610229578063c45ac0501461024957600080fd5b8063406072a9116100a5578063406072a91461016157806348b75044146101815780638b83209b146101a157600080fd5b8063191655871461011b5780633a98ef391461013d57600080fd5b36610116577f6ef95f06320e7a25a04a175ca677b7052bdd97131872c2192525a629f51be770336040805173ffffffffffffffffffffffffffffffffffffffff90921682523460208301520160405180910390a1005b600080fd5b34801561012757600080fd5b5061013b610136366004610d97565b610304565b005b34801561014957600080fd5b506000545b6040519081526020015b60405180910390f35b34801561016d57600080fd5b5061014e61017c366004610db4565b6104f7565b34801561018d57600080fd5b5061013b61019c366004610db4565b610531565b3480156101ad57600080fd5b506101c16101bc366004610ded565b610756565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610158565b3480156101f257600080fd5b5061014e610201366004610d97565b73ffffffffffffffffffffffffffffffffffffffff1660009081526003602052604090205490565b34801561023557600080fd5b5061014e610244366004610d97565b610793565b34801561025557600080fd5b5061014e610264366004610db4565b6107e8565b34801561027557600080fd5b5061014e610284366004610d97565b73ffffffffffffffffffffffffffffffffffffffff1660009081526002602052604090205490565b3480156102b857600080fd5b5061014e6102c7366004610d97565b73ffffffffffffffffffffffffffffffffffffffff1660009081526005602052604090205490565b3480156102fb57600080fd5b5060015461014e565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600260205260409020546103bb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f5061796d656e7453706c69747465723a206163636f756e7420686173206e6f2060448201527f736861726573000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b60006103c682610793565b905080600003610458576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f5061796d656e7453706c69747465723a206163636f756e74206973206e6f742060448201527f647565207061796d656e7400000000000000000000000000000000000000000060648201526084016103b2565b806001600082825461046a9190610e35565b909155505073ffffffffffffffffffffffffffffffffffffffff821660009081526003602052604090208054820190556104a482826108c1565b6040805173ffffffffffffffffffffffffffffffffffffffff84168152602081018390527fdf20fd1e76bc69d672e4814fafb2c449bba3a5369d8359adf9e05e6fde87b056910160405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8083166000908152600660209081526040808320938516835292905220545b92915050565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600260205260409020546105e3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f5061796d656e7453706c69747465723a206163636f756e7420686173206e6f2060448201527f736861726573000000000000000000000000000000000000000000000000000060648201526084016103b2565b60006105ef83836107e8565b905080600003610681576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f5061796d656e7453706c69747465723a206163636f756e74206973206e6f742060448201527f647565207061796d656e7400000000000000000000000000000000000000000060648201526084016103b2565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260056020526040812080548392906106b6908490610e35565b909155505073ffffffffffffffffffffffffffffffffffffffff80841660009081526006602090815260408083209386168352929052208054820190556106fe838383610a20565b6040805173ffffffffffffffffffffffffffffffffffffffff8481168252602082018490528516917f3be5b7a71e84ed12875d241991c70855ac5817d847039e17a9d895c1ceb0f18a910160405180910390a2505050565b60006004828154811061076b5761076b610e48565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1692915050565b60008061079f60015490565b6107a99047610e35565b90506107e183826107dc8673ffffffffffffffffffffffffffffffffffffffff1660009081526003602052604090205490565b610aad565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff821660009081526005602052604081205481906040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8616906370a0823190602401602060405180830381865afa15801561087a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061089e9190610e77565b6108a89190610e35565b90506108b983826107dc87876104f7565b949350505050565b8047101561092b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e636500000060448201526064016103b2565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610985576040519150601f19603f3d011682016040523d82523d6000602084013e61098a565b606091505b5050905080610a1b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d6179206861766520726576657274656400000000000060648201526084016103b2565b505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000179052610a1b908490610af5565b6000805473ffffffffffffffffffffffffffffffffffffffff8516825260026020526040822054839190610ae19086610e90565b610aeb9190610ea7565b6108b99190610ee2565b6000610b57826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610c019092919063ffffffff16565b805190915015610a1b5780806020019051810190610b759190610ef5565b610a1b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016103b2565b60606108b98484600085856000808673ffffffffffffffffffffffffffffffffffffffff168587604051610c359190610f3b565b60006040518083038185875af1925050503d8060008114610c72576040519150601f19603f3d011682016040523d82523d6000602084013e610c77565b606091505b5091509150610c8887838387610c93565b979650505050505050565b60608315610d29578251600003610d225773ffffffffffffffffffffffffffffffffffffffff85163b610d22576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016103b2565b50816108b9565b6108b98383815115610d3e5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103b29190610f57565b73ffffffffffffffffffffffffffffffffffffffff81168114610d9457600080fd5b50565b600060208284031215610da957600080fd5b81356107e181610d72565b60008060408385031215610dc757600080fd5b8235610dd281610d72565b91506020830135610de281610d72565b809150509250929050565b600060208284031215610dff57600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8082018082111561052b5761052b610e06565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215610e8957600080fd5b5051919050565b808202811582820484141761052b5761052b610e06565b600082610edd577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b8181038181111561052b5761052b610e06565b600060208284031215610f0757600080fd5b815180151581146107e157600080fd5b60005b83811015610f32578181015183820152602001610f1a565b50506000910152565b60008251610f4d818460208701610f17565b9190910192915050565b6020815260008251806020840152610f76816040850160208701610f17565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220b61f0bfe0c2d1e823aa8d3f21a174be66e16aec17381fab69aefca08bd0c4c3764736f6c63430008110033";

type PaymentSplitterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PaymentSplitterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PaymentSplitter__factory extends ContractFactory {
  constructor(...args: PaymentSplitterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    payees: PromiseOrValue<string>[],
    shares_: PromiseOrValue<BigNumberish>[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<PaymentSplitter> {
    return super.deploy(
      payees,
      shares_,
      overrides || {}
    ) as Promise<PaymentSplitter>;
  }
  override getDeployTransaction(
    payees: PromiseOrValue<string>[],
    shares_: PromiseOrValue<BigNumberish>[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(payees, shares_, overrides || {});
  }
  override attach(address: string): PaymentSplitter {
    return super.attach(address) as PaymentSplitter;
  }
  override connect(signer: Signer): PaymentSplitter__factory {
    return super.connect(signer) as PaymentSplitter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PaymentSplitterInterface {
    return new utils.Interface(_abi) as PaymentSplitterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PaymentSplitter {
    return new Contract(address, _abi, signerOrProvider) as PaymentSplitter;
  }
}
