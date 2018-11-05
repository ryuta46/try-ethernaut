

var hack = artifacts.require("./Telephone/HackTelephone.sol");

module.exports = function(deployer) {
    const originalContractAddres = "0x349eeaf01cd3f53a048b989dfc1ed554806cc1bf";
    deployer.deploy(hack, originalContractAddres);
};
