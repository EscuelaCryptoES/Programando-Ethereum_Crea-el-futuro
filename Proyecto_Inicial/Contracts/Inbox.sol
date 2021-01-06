// SPDX-License-Identifier: MIT
pragma solidity >0.6.99 < 0.8.0;

contract Inbox{
    string public message;

    constructor (string memory initialmessage){
        message = initialmessage;
    }

    function setMessage(string memory newMessage) public{
        message = newMessage;
    }
}
   
