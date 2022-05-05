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
      assert.equal(candidate[0], 1, "contains the correct votes count");
      assert.equal(candidate[1], 1, "contains the correct id");
      assert.equal(candidate[2], "ABC", "contains the correct name");
      return electionInstance.candidates(2);
    }).then(function(candidate) {
        assert.equal(candidate[0], 0, "contains the correct votes count");
        assert.equal(candidate[1], 2, "contains the correct id");
        assert.equal(candidate[2], "XYZ", "contains the correct name");
    });
  });

});