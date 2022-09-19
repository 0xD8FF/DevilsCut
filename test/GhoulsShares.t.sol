// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.15;

import "forge-std/Test.sol";
import {GhoulsRoyalties} from "dbs-ghouls/src/GhoulsRoyalties.sol";
import {Ghouls} from "dbs-ghouls/src/Ghouls.sol";
import {GhoulsShares} from "../src/GhoulsShares.sol";
import "./utils/weth.sol";

// import {GhoulsTest} from "dbs-ghouls/test/Ghouls.t.sol";

contract GhoulsSharesTest is Test {
    GhoulsRoyalties royalties;
    Ghouls ghoulsNFTBase;
    GhoulsShares ghoulsShares;
    WETH internal weth;
    // GhoulsTest ghoulsTest;
    address public constant DEFAULT_OWNER_ADDRESS = address(0x666);
    address public constant TEST_USER1 = address(0x01);
    address payable public constant DEFULT_FUNDS_RECIPIENT_ADDRESS = payable(address(0x616));
    address payable public constant DBS_TREASURY_ADDRESS = payable(address(0xdeadbb));
    address[] public ROYALTY_RECEIVERS = [payable(address(0x1234)), payable(address(0x2345))];
    uint256[] public ROYALTY_SHARES = [50, 50];
    uint256 public TOKEN_SHARE = 0.1501501502e18;

    modifier dropNFTs() {
        Ghouls.Airdrop[] memory airdrops = new Ghouls.Airdrop[](1);
        airdrops[0] = Ghouls.Airdrop({to: TEST_USER1, num: 5});
        vm.prank(address(DEFAULT_OWNER_ADDRESS));
        ghoulsNFTBase.airdrop(airdrops, 5);
        _;
    }

    function setUp() public {
        royalties = new GhoulsRoyalties(ROYALTY_RECEIVERS, ROYALTY_SHARES);
        ghoulsNFTBase = new Ghouls(
            "TestGhouls",
            "tGHLS",
            "ipfs://jfisadjfkjsadiofwejj/",
            DBS_TREASURY_ADDRESS,
            DEFULT_FUNDS_RECIPIENT_ADDRESS,
            1000,
            Ghouls.SalesConfiguration({
                publicSalePrice: 0.1 ether,
                publicSaleStart: 0,
                allowlistStart: 0,
                allowlistMerkleRoot: bytes32(0)
            })
        );
        weth = new WETH();
        ghoulsShares = new GhoulsShares((TOKEN_SHARE), address(ghoulsNFTBase));
        ghoulsNFTBase.transferOwnership(DEFAULT_OWNER_ADDRESS);
        vm.deal(payable(address(TEST_USER1)), 1 ether);
        vm.prank(TEST_USER1);
        weth.deposit{value: 1 ether}();
        assertEq(ghoulsShares.totalReleased(), 0);
    }

    function test_setShares() public {
        assertEq(ghoulsShares.shares(), TOKEN_SHARE);
    }

    function test_releasable() public {
        vm.deal(payable(address(ghoulsShares)), 1 ether);
        assertLt(ghoulsShares.releasable(0), address(ghoulsShares).balance);
        assertEq(ghoulsShares.releasable(0), TOKEN_SHARE);
    }

    function test_release() public dropNFTs {
        vm.deal(payable(address(ghoulsShares)), 100 ether);
        //create a uint256 array of tokenids 1,3,2
        uint256[] memory tokens = new uint256[](5);
        tokens[0] = 1;
        tokens[1] = 2;
        tokens[2] = 3;
        tokens[3] = 4;
        tokens[4] = 5;
        vm.deal(TEST_USER1, 100 ether);
        vm.prank(TEST_USER1);
        ghoulsShares.release(tokens, payable(TEST_USER1));
        assertEq(ghoulsShares.totalReleased(), TOKEN_SHARE * tokens.length * 100);
    }

    function test_releaseCorrectAmount() public dropNFTs {
        vm.deal(payable(address(ghoulsShares)), 1 ether);
        uint256[] memory tokens = new uint256[](1);
        tokens[0] = 1;
        vm.deal(TEST_USER1, 1 ether);
        vm.prank(TEST_USER1);
        ghoulsShares.release(tokens, payable(TEST_USER1));
        assertEq(ghoulsShares.totalReleased(), TOKEN_SHARE * tokens.length);
    }

    function test_emergencyWithdraw() public {
        vm.deal(payable(address(ghoulsShares)), 1 ether);
        assertEq(address(ghoulsShares).balance, 1 ether);
        ghoulsShares.emergencyWithdraw(payable(TEST_USER1));
        assertEq(address(ghoulsShares).balance, 0);
        assertEq(address(TEST_USER1).balance, 1 ether);
    }

    function test_shares() public {
        assertEq(ghoulsShares.shares(), TOKEN_SHARE);
    }

    function test_totalReleased() public dropNFTs {
        assertEq(ghoulsShares.totalReleased(), 0);
        vm.deal(payable(address(ghoulsShares)), 1 ether);
        assertEq(ghoulsShares.totalReleased(), 0);
        uint256[] memory tokens = new uint256[](5);
        tokens[0] = 1;
        tokens[1] = 2;
        tokens[2] = 3;
        tokens[3] = 4;
        tokens[4] = 5;
        ghoulsShares.release(tokens, payable(TEST_USER1));
        assertEq(ghoulsShares.totalReleased(), TOKEN_SHARE * tokens.length);
    }

    function test_totalReleasedCorrectAmount() public dropNFTs {
        assertEq(ghoulsShares.totalReleased(), 0);
        vm.deal(payable(address(ghoulsShares)), 1 ether);
        assertEq(ghoulsShares.totalReleased(), 0);
        uint256[] memory tokens = new uint256[](1);
        tokens[0] = 1;
        ghoulsShares.release(tokens, payable(TEST_USER1));
        assertEq(ghoulsShares.totalReleased(), TOKEN_SHARE * tokens.length);
    }

    //     function test_ERC20TotalReleased() public dropNFTs {
    //         assertEq(ghoulsShares.totalReleased(), 0);
    //         assertEq(ghoulsShares.totalReleased(), 0);
    //         uint256[] memory tokens = new uint256[](5);
    //         tokens[0] = 1;
    //         tokens[1] = 2;
    //         tokens[2] = 3;
    //         tokens[3] = 4;
    //         tokens[4] = 5;
    //         ghoulsShares.release(tokens, address(weth), address(0x1));
    //         assertEq(ghoulsShares.totalReleased(weth), TOKEN_SHARE * tokens.length);
    //     }
}
