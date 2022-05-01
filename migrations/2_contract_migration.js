const Contracts = artifacts.require("MetadevsContract");

module.exports = function (deployer) {
  deployer.deploy(Contracts);
};
