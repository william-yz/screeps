var roleHarvester = require('./role.harvester');
var roleUpgrader = require('./role.upgrader');
var roleBuilder = require('./role.builder');
const manager = require('./creep.manager');
let index = 1

module.exports.loop = function () {
    manager.run();
    manager.MINER.forEach(miner => roleHarvester.run(miner));
    if (manager.MINER < 2) {
        manager.UPGRADER.forEach(upgrader => roleHarvester.run(upgrader));
        manager.BUILDER.forEach(builder => roleHarvester.run(builder));
    } else {
        manager.UPGRADER.forEach(upgrader => roleUpgrader.run(upgrader));
        manager.BUILDER.forEach(builder => roleBuilder.run(builder));
    }
}