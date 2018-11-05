var coinFlip = artifacts.require("./CoinFlip/HackCoinFlip.sol");

module.exports = function(deployer) {
    const coinFlipContract = "0x95d7057ca4c5bfa45d95d5d8db24c5a6ec03ec9b";
    deployer.deploy(coinFlip, coinFlipContract);
};
