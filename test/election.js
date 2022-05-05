var Election = artifacts.require("./Election.sol");

contract("Election", function(accounts) {
  var electionInstance;

  it("initializes with two candidates", function() {
    return Election.deployed().then(function(instance) { //copy of deployed contract
      return instance.num_candidates();
    }).then(function(count) {
      assert.equal(count, 2);
    });
  });
  
  it("it initializes the candidates with the correct values", function() {
    return Election.deployed().then(function(instance) {
      electionInstance = instance; //assigning it to variable to make it visible in the pormise chain
      return electionInstance.candidates(1);
    }).then(function(candidate) {
      assert.equal(candidate[0], 0, "contains the correct votes count");
      assert.equal(candidate[1], 1, "contains the correct id");
      assert.equal(candidate[2], "ABC", "contains the correct name");
      return electionInstance.candidates(2);
    }).then(function(candidate) {
        assert.equal(candidate[0], 0, "contains the correct votes count");
        assert.equal(candidate[1], 2, "contains the correct id");
        assert.equal(candidate[2], "XYZ", "contains the correct name");
    });
  });
/*
  it("allows a voter to cast a vote", function() {
    return Election.deployed().then(function(instance) {
      electionInstance = instance;
      candidateId = 1;
      return electionInstance.vote(candidateId, { from: accounts[0] });
    }).then(function(receipt) {
      return electionInstance.voters(accounts[0]);
    }).then(function(voted) {
      assert(voted, "the voter was marked as voted");
      return electionInstance.candidates(candidateId);
    }).then(function(candidate) {
      var voteCount = candidate[0];
      assert.equal(voteCount, 1, "increments the candidate's vote count");
    });
  });
*/
/*
  it("appends voters array", function() {
    return Election.deployed().then(function(instance) {
      electionInstance = instance;
      return electionInstance.candidates(1);
      return electionInstance.vote(candidateId, { from:accounts[0] });
    }).then(function(appendsval) {
      var size_of_array = cand
    })
  });*/
/*
  it("appends array with addresses", function() {
    return Election.deployed().then(function(instance) {
      electionInstance = instance;
      return electionInstance.candidates(1);
    }).then(function(candidate) {
      var size_of_c_array = c1_voters.length;
      assert.equal(size_of_c_array, 1, "contains the correct number of voters");
    })
  });
*/

  /*
  it("set owner", function() {
    return Election.deployed().then(function(instance) { //copy of deployed contract
      return instance.owner();
    }).then(function(o_add) {
      assert.equal(o_add, 2);
    });
  });
  */





});