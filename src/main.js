var roleHarvester = require('./role.harvester');
var roleUpgrader = require('./role.upgrader');
var roleBuilder = require('./role.builder');

let index = 1

module.exports.loop = function () {
    Game.spawns['sp1'].spawnCreep([WORK, MOVE, CARRY], index++, {
        memory: {
            role: 'harvester'
        }
    });
    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        if (creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if (creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if (creep.memory.role == 'builder') {
            roleUpgrader.run(creep);
        }
    }
}