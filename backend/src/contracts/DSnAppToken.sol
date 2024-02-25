// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.24;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DevToken is ERC20{
    address private _owner;

    constructor() ERC20("DevToken", "DVT"){
        _owner = msg.sender;
    }

    modifier onlyOwner(){
        require(isOwner(), "You have not the permission to use this function");
        _;
    }

    function isOwner() private view returns (bool){
        return msg.sender==_owner;
    }

    function issueToken(address receiver, uint256 score) public onlyOwner{
        _mint(receiver, score*10**18);
    }
}
