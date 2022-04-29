pragma solidity >=0.4.22 <0.8.0; 

contract Election { 
    //state variable- writes data into the blockchain
    string public candidate; 
    uint private status_election; //0-not started, 1-ongoing, 2-finished
    address public owner;

    struct Candidate {
        uint num_votes;
        uint id;
        string cname;
        //address[] c_voters;
    }

    mapping(uint => Candidate) public candidates;
    mapping(address => bool) public voters;

    uint public num_candidates;
    address[] public c1_voters;
    address[] public c2_voters;

    constructor() public {
        //console.log("Owner contract deployed by:", msg.sender); 
        owner = msg.sender; 
        status_election = 1;
        Add_Candidate("ABC");
        Add_Candidate("XYZ");
    }

    function Add_Candidate (string memory _cname) private {
        num_candidates ++;
        //candidates[num_candidates] = Candidate(0, num_candidates, _cname);
        candidates[num_candidates].num_votes = 0;
        candidates[num_candidates].id = num_candidates;
        candidates[num_candidates].cname = _cname;
        //candidate[num_candidates].c_voters.push(owner);
    }

    function vote (uint _cid) public {
        require(status_election == 1);
        require(!voters[msg.sender]);
        require(_cid > 0 && _cid <= num_candidates);
        //candidates[_cid].c_voters.push(msg.sender);
        if (_cid == 1) {
            c1_voters.push(msg.sender);
        }
        else {
            c2_voters.push(msg.sender);
        } 
        voters[msg.sender] = true;
        candidates[_cid].num_votes ++;
    }

    function start_election () public {
        status_election = 1;
    }

    function end_election () public {
        status_election = 2;
    }

}