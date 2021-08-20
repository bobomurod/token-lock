const Timelock = artifacts.require("Timelock");
const MockToken = artifacts.require("MockToken");
module.exports = function (deployer) {
    deployer.deploy(MockToken);
    deployer.deploy(Timelock, '0xfe43Ef48D2B6cf58Df4aA51ad66eB390f9BB4928');
};