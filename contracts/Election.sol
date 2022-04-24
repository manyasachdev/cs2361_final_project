pragma solidity >=0.4.22 <0.8.0; 

contract Election { 
    //state variable- writes data into the blockchain
    string public candidate; 

    constructor() public {
        candidate = "ABC";
    }
}