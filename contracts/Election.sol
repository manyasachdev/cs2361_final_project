pragma solidity >=0.4.22 <0.8.0; 

contract Election {
    uint private status_election; //0-not started, 1-ongoing, 2-finished
    address public owner;

    struct Candidate {
        uint id;
        uint num_votes;
        string name;
    }

    uint public num_candidates;
    mapping(address => bool) public voters;
    mapping(uint => Candidate) public candidates;
    mapping(address => uint) public voted_for;

    constructor () public {
        owner = msg.sender; 
        status_election = 1;
        addCandidate("ABC");
        addCandidate("XYZ");
    }

    function addCandidate (string memory _name) private {
        num_candidates++;
        candidates[num_candidates] = Candidate(num_candidates, 0, _name);
    }

    function vote (uint _candidateId) public {
        require(status_election == 1);
        require(!voters[msg.sender]);
        require(_candidateId > 0 && _candidateId <= num_candidates);
        voters[msg.sender] = true;
        voted_for[msg.sender] = _candidateId;
        candidates[_candidateId].num_votes ++;
    }

    function start_election () public {
        require(msg.sender == owner);
        status_election = 1;
    }

    function end_election () public {
        require(msg.sender == owner);
        status_election = 2;
    }
}