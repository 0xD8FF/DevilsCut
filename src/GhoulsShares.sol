//SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import "openzeppelin-contracts/contracts/utils/Context.sol";
import "openzeppelin-contracts/contracts/access/Ownable.sol";
import "openzeppelin-contracts/contracts/utils/Address.sol";
import "openzeppelin-contracts/contracts/security/ReentrancyGuard.sol";
import "openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol";
import "dbs-ghouls/src/Ghouls.sol";

contract GhoulsShares is Context, Ownable, ReentrancyGuard {
    event PaymentReleased(address to, uint256 amount);
    event ERC20PaymentReleased(IERC20 indexed token, address to, uint256 amount);
    event PaymentReceived(address from, uint256 amount);

    Ghouls public immutable ghouls;

    // TODO: remove
    // uint256 private _totalShares = 100;
    uint256 private _totalReleased;

    uint256 immutable _sharePerToken;
    mapping(uint256 => uint256) private _releasedByTokenId;

    mapping(IERC20 => uint256) private _erc20TotalReleased;
    mapping(IERC20 => mapping(uint256 => uint256)) private _erc20ReleasedByTokenId;

    constructor(uint256 share_, address ghouls_) payable {
        _sharePerToken = share_;
        ghouls = Ghouls(ghouls_);
    }

    receive() external payable virtual {
        emit PaymentReceived(_msgSender(), msg.value);
    }

    // TODO: remove
    // function totalShares() public view returns (uint256) {
    //     return _totalShares;
    // }

    function totalReleased() public view returns (uint256) {
        return _totalReleased;
    }

    function totalReleased(IERC20 token) public view returns (uint256) {
        return _erc20TotalReleased[token];
    }

    function shares() public view returns (uint256) {
        return _sharePerToken;
    }

    function released(uint256 tokenId) public view returns (uint256) {
        return _releasedByTokenId[tokenId];
    }

    function released(IERC20 token, uint256 tokenId) public view returns (uint256) {
        return _erc20ReleasedByTokenId[token][tokenId];
    }

    function releasable(uint256 tokenId) public view returns (uint256) {
        uint256 totalReceived = address(this).balance + totalReleased();
        return _pendingPayment(totalReceived, released(tokenId));
    }

    function releasable(IERC20 token, uint256 tokenId) public view returns (uint256) {
        uint256 totalReceived = token.balanceOf(address(this)) + totalReleased(token);
        return _pendingPayment(totalReceived, released(token, tokenId));
    }

    function _pendingPayment(uint256 totalReceived, uint256 alreadyReleased) private view returns (uint256) {
        // return (totalReceived * _sharePerToken) / _totalShares - alreadyReleased;
        return ((totalReceived * shares()) / 1e18) - alreadyReleased;
    }

    function release(uint256[] calldata ids, address payable account) public nonReentrant {
        for (uint256 i = 0; i < ids.length; i++) {
            uint256 tokenId = ids[i];
            require(ghouls.ownerOf(tokenId) == account, "GhoulsShares: not the owner of tokenId");

            uint256 payment = releasable(tokenId);

            require(payment != 0, "GhoulsShares: token is not due payment");

            _totalReleased += payment;
            unchecked {
                _releasedByTokenId[tokenId] += payment;
            }
            Address.sendValue(account, payment);
            emit PaymentReleased(account, payment);
        }
    }

    function release(
        uint256[] calldata ids,
        IERC20 token,
        address account
    ) public nonReentrant {
        for (uint256 i = 0; i < ids.length; i++) {
            uint256 tokenId = ids[i];
            require(ghouls.ownerOf(tokenId) == account, "GhoulsShares: not the owner of tokenId");

            uint256 payment = releasable(token, tokenId);

            require(payment != 0, "GhoulsShares: token is not due payment");

            _erc20TotalReleased[token] += payment;
            unchecked {
                _erc20ReleasedByTokenId[token][tokenId] += payment;
            }
            SafeERC20.safeTransfer(token, account, payment);
            emit ERC20PaymentReleased(token, account, payment);
        }
    }

    function emergencyWithdraw(address payable receiver, IERC20 token) public onlyOwner {
        uint256 balance = token.balanceOf(address(this));
        SafeERC20.safeTransfer(token, receiver, balance);
    }

    function emergencyWithdraw(address payable receiver) public onlyOwner {
        uint256 balance = address(this).balance;
        Address.sendValue(receiver, balance);
    }
}
