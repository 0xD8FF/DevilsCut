"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WETH__factory = exports.PaymentSplitter__factory = exports.Pausable__factory = exports.Ownable__factory = exports.IERC721A__factory = exports.IERC2981__factory = exports.IERC20__factory = exports.IERC165__factory = exports.GhoulsShares__factory = exports.GhoulsRoyalties__factory = exports.Ghouls__factory = exports.ERC721ABase__factory = exports.ERC721A__factory = exports.ERC721A__IERC721Receiver__factory = exports.ERC2981__factory = exports.ERC165__factory = exports.IERC20Permit__factory = exports.DevilsCut__factory = exports.DevilsCutScript__factory = exports.GhoulsScript__factory = exports.factories = void 0;
exports.factories = __importStar(require("./factories"));
var GhoulsScript__factory_1 = require("./factories/Counter.s.sol/GhoulsScript__factory");
Object.defineProperty(exports, "GhoulsScript__factory", { enumerable: true, get: function () { return GhoulsScript__factory_1.GhoulsScript__factory; } });
var DevilsCutScript__factory_1 = require("./factories/DevilsCut.s.sol/DevilsCutScript__factory");
Object.defineProperty(exports, "DevilsCutScript__factory", { enumerable: true, get: function () { return DevilsCutScript__factory_1.DevilsCutScript__factory; } });
var DevilsCut__factory_1 = require("./factories/DevilsCut__factory");
Object.defineProperty(exports, "DevilsCut__factory", { enumerable: true, get: function () { return DevilsCut__factory_1.DevilsCut__factory; } });
var IERC20Permit__factory_1 = require("./factories/draft-IERC20Permit.sol/IERC20Permit__factory");
Object.defineProperty(exports, "IERC20Permit__factory", { enumerable: true, get: function () { return IERC20Permit__factory_1.IERC20Permit__factory; } });
var ERC165__factory_1 = require("./factories/ERC165__factory");
Object.defineProperty(exports, "ERC165__factory", { enumerable: true, get: function () { return ERC165__factory_1.ERC165__factory; } });
var ERC2981__factory_1 = require("./factories/ERC2981__factory");
Object.defineProperty(exports, "ERC2981__factory", { enumerable: true, get: function () { return ERC2981__factory_1.ERC2981__factory; } });
var ERC721A__IERC721Receiver__factory_1 = require("./factories/ERC721A.sol/ERC721A__IERC721Receiver__factory");
Object.defineProperty(exports, "ERC721A__IERC721Receiver__factory", { enumerable: true, get: function () { return ERC721A__IERC721Receiver__factory_1.ERC721A__IERC721Receiver__factory; } });
var ERC721A__factory_1 = require("./factories/ERC721A.sol/ERC721A__factory");
Object.defineProperty(exports, "ERC721A__factory", { enumerable: true, get: function () { return ERC721A__factory_1.ERC721A__factory; } });
var ERC721ABase__factory_1 = require("./factories/ERC721ABase__factory");
Object.defineProperty(exports, "ERC721ABase__factory", { enumerable: true, get: function () { return ERC721ABase__factory_1.ERC721ABase__factory; } });
var Ghouls__factory_1 = require("./factories/Ghouls__factory");
Object.defineProperty(exports, "Ghouls__factory", { enumerable: true, get: function () { return Ghouls__factory_1.Ghouls__factory; } });
var GhoulsRoyalties__factory_1 = require("./factories/GhoulsRoyalties__factory");
Object.defineProperty(exports, "GhoulsRoyalties__factory", { enumerable: true, get: function () { return GhoulsRoyalties__factory_1.GhoulsRoyalties__factory; } });
var GhoulsShares__factory_1 = require("./factories/GhoulsShares__factory");
Object.defineProperty(exports, "GhoulsShares__factory", { enumerable: true, get: function () { return GhoulsShares__factory_1.GhoulsShares__factory; } });
var IERC165__factory_1 = require("./factories/IERC165__factory");
Object.defineProperty(exports, "IERC165__factory", { enumerable: true, get: function () { return IERC165__factory_1.IERC165__factory; } });
var IERC20__factory_1 = require("./factories/IERC20__factory");
Object.defineProperty(exports, "IERC20__factory", { enumerable: true, get: function () { return IERC20__factory_1.IERC20__factory; } });
var IERC2981__factory_1 = require("./factories/IERC2981__factory");
Object.defineProperty(exports, "IERC2981__factory", { enumerable: true, get: function () { return IERC2981__factory_1.IERC2981__factory; } });
var IERC721A__factory_1 = require("./factories/IERC721A__factory");
Object.defineProperty(exports, "IERC721A__factory", { enumerable: true, get: function () { return IERC721A__factory_1.IERC721A__factory; } });
var Ownable__factory_1 = require("./factories/Ownable__factory");
Object.defineProperty(exports, "Ownable__factory", { enumerable: true, get: function () { return Ownable__factory_1.Ownable__factory; } });
var Pausable__factory_1 = require("./factories/Pausable__factory");
Object.defineProperty(exports, "Pausable__factory", { enumerable: true, get: function () { return Pausable__factory_1.Pausable__factory; } });
var PaymentSplitter__factory_1 = require("./factories/PaymentSplitter__factory");
Object.defineProperty(exports, "PaymentSplitter__factory", { enumerable: true, get: function () { return PaymentSplitter__factory_1.PaymentSplitter__factory; } });
var WETH__factory_1 = require("./factories/weth.sol/WETH__factory");
Object.defineProperty(exports, "WETH__factory", { enumerable: true, get: function () { return WETH__factory_1.WETH__factory; } });
