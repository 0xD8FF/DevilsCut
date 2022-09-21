// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.15;

import "forge-std/Test.sol";
import {GhoulsRoyalties} from "dbs-ghouls/src/GhoulsRoyalties.sol";
import {Ghouls} from "dbs-ghouls/src/Ghouls.sol";
import {DevilsCut} from "../src/DevilsCut.sol";
import "./utils/weth.sol";
import "openzeppelin-contracts/contracts/utils/math/SafeMath.sol";

contract DevilsCutTest is Test {
    GhoulsRoyalties royalties;
    Ghouls ghoulsNFTBase;
    DevilsCut devilsCut;
    WETH internal weth;
    address public constant DEFAULT_OWNER_ADDRESS = address(0x666);
    address public constant TEST_USER1 = address(0x01);
    address payable public constant DEFULT_FUNDS_RECIPIENT_ADDRESS = payable(address(0x616));
    address payable public constant DBS_TREASURY_ADDRESS = payable(address(0xdeadbb));
    address[] public ROYALTY_RECEIVERS = [payable(address(0x1234)), payable(address(0x2345))];
    uint256[] public ROYALTY_SHARES = [50, 50];
    uint256 public TOKEN_SHARE1 = SafeMath.mul(SafeMath.div(100, 666), 10);

    uint256 public TOKEN_SHARE = 0.1501501501501501e16;

    function calculateShare() private view returns (uint256) {
        return SafeMath.mul(SafeMath.div(100, 666), 10);
    }

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
        console.log(TOKEN_SHARE);
        weth = new WETH();
        devilsCut = new DevilsCut((TOKEN_SHARE), address(ghoulsNFTBase));
        ghoulsNFTBase.transferOwnership(DEFAULT_OWNER_ADDRESS);
        vm.deal(payable(address(TEST_USER1)), 1 ether);
        vm.prank(TEST_USER1);
        weth.deposit{value: 1 ether}();
        assertEq(devilsCut.totalReleased(), 0);
    }

    function test_setSharesConstructor() public {
        assertEq(devilsCut.shares(), TOKEN_SHARE);
    }

    function test_setShares() public {
        devilsCut.setShares(1);
        assertEq(devilsCut.shares(), 1);
    }

    function test_releasable() public dropNFTs {
        vm.deal(payable(address(devilsCut)), 1 ether);
        assertLt(devilsCut.releasable(1), address(devilsCut).balance);
        assertEq(devilsCut.releasable(1), TOKEN_SHARE);
    }

    function test_releaseCorrectAmount() public dropNFTs {
        vm.deal(payable(address(devilsCut)), 1 ether);
        uint256[] memory tokens = new uint256[](1);
        tokens[0] = 1;
        vm.deal(TEST_USER1, 1 ether);
        vm.prank(TEST_USER1);
        devilsCut.release(tokens);
        assertEq(devilsCut.totalReleased(), TOKEN_SHARE * tokens.length);
    }

    function test_emergencyWithdraw() public {
        vm.deal(payable(address(devilsCut)), 1 ether);
        assertEq(address(devilsCut).balance, 1 ether);
        devilsCut.emergencyWithdraw(payable(TEST_USER1));
        assertEq(address(devilsCut).balance, 0);
        assertEq(address(TEST_USER1).balance, 1 ether);
    }

    function test_shares() public {
        assertEq(devilsCut.shares(), TOKEN_SHARE);
    }

    function test_release() public dropNFTs {
        assertEq(devilsCut.totalReleased(), 0);
        vm.deal(payable(address(devilsCut)), 1 ether);
        assertEq(devilsCut.totalReleased(), 0);
        uint256[] memory tokens = new uint256[](5);
        tokens[0] = 1;
        tokens[1] = 2;
        tokens[2] = 3;
        tokens[3] = 4;
        tokens[4] = 5;
        devilsCut.release(tokens);
        assertEq(devilsCut.totalReleased(), TOKEN_SHARE * tokens.length);
    }

    function test_erc20Release() public dropNFTs {
        assertEq(devilsCut.totalReleased(weth), 0);
        vm.deal(payable(address(devilsCut)), 1 ether);
        vm.startPrank(address(devilsCut));
        assertEq(weth.balanceOf(address(devilsCut)), 0);
        weth.deposit{value: 1 ether}();
        assertEq(weth.balanceOf(address(devilsCut)), 1 ether);
        vm.stopPrank();

        uint256[] memory tokens = new uint256[](5);
        tokens[0] = 1;
        tokens[1] = 2;
        tokens[2] = 3;
        tokens[3] = 4;
        tokens[4] = 5;
        devilsCut.release(tokens, weth);
        assertEq(devilsCut.totalReleased(weth), TOKEN_SHARE * tokens.length);
    }

    function test_totalReleasedCorrectAmount() public dropNFTs {
        assertEq(devilsCut.totalReleased(), 0);
        vm.deal(payable(address(devilsCut)), 1 ether);
        assertEq(devilsCut.totalReleased(), 0);
        uint256[] memory tokens = new uint256[](1);
        tokens[0] = 1;
        devilsCut.release(tokens);
        assertEq(devilsCut.totalReleased(), TOKEN_SHARE * tokens.length);
    }

    function test_releaseTwice() public dropNFTs {
        assertEq(devilsCut.totalReleased(), 0);
        vm.deal(payable(address(devilsCut)), 1 ether);
        assertEq(devilsCut.totalReleased(), 0);
        uint256[] memory tokens = new uint256[](1);
        tokens[0] = 1;
        devilsCut.release(tokens);
        assertEq(devilsCut.totalReleased(), TOKEN_SHARE * tokens.length);
        uint256[] memory tokens2 = new uint256[](3);
        tokens2[0] = 1;
        tokens2[1] = 2;
        tokens2[2] = 3;
        vm.expectRevert("DCut: payment already released");
        devilsCut.release(tokens2);
    }

    function test_releaseSingleToken() public dropNFTs {
        assertEq(devilsCut.totalReleased(), 0);
        vm.deal(payable(address(devilsCut)), 1 ether);
        assertEq(devilsCut.totalReleased(), 0);
        devilsCut.release(1);
        assertEq(devilsCut.totalReleased(), TOKEN_SHARE * 1);
    }

    function test_releaseSingleTofken5x() public dropNFTs {
        assertEq(devilsCut.totalReleased(), 0);
        vm.deal(payable(address(devilsCut)), 1 ether);
        assertEq(devilsCut.totalReleased(), 0);
        devilsCut.release(1);
        devilsCut.release(2);
        devilsCut.release(3);
        devilsCut.release(4);
        devilsCut.release(5);
        assertEq(devilsCut.totalReleased(), TOKEN_SHARE * 5);
    }
}
