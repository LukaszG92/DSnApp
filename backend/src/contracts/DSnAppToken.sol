// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DSnAppToken is ERC20{
    address private _owner;

    constructor() ERC20("DSnAppToken", "DST"){
        _owner = msg.sender;
    }

    modifier onlyOwner(){
        require(isOwner(), "You have not the permission to use this function");
        _;
    }

    function isOwner() private view returns (bool){
        return msg.sender==_owner;
    }

    function mintToken(address receiver, uint256 amount) public onlyOwner{
        _mint(receiver, amount*10**18);
    }
}
