// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DSnAppToken is ERC20{
    address private _owner;
    bool private  _isStopped = false;

    constructor() ERC20("DSnAppToken", "DST"){
        _owner = msg.sender;
    }

    modifier onlyOwner(){
        require(isOwner(), "You have not the permission to use this function.");
        _;
    }

    modifier stoppedInEmergency {
        require(!isStopped, "Contract under emergency stop.");
        _;
    }

    function stopContract() public onlyOwner {
        isStopped = true;
    }

    function resumeContract() public onlyOwner {
        isStopped = false;
    }

    function isOwner() private view returns (bool){
        return msg.sender==_owner;
    }

    function mintToken(address receiver, uint256 amount) public stoppedInEmergency onlyOwner{
        require(receiver != address(0), "Cannot mint tokens to a NULL address.");
        require(amount > 0, "Cannot mint 0 tokens.");

        uint256 receiverBalance = balanceOf(receiver);

        _mint(receiver, amount*10**18);
        assert(balanceOf(receiver) == receiverBalance + amount*10**18);
    }
}
