
const MINER = 'MINER';
const UPGRADER = 'UPGRADER';
const BUILDER = 'BUILDER';

module.exports = {
    /**
     * 
     * @param {string} type 
     */
    spawn(role) {
        Memory.spawns.type = Memory.spawns.type || 0
        const typeIndex = Memory.spawns.type++
        Game.spawns.sp1.spawnCreep([WORK, MOVE, CARRY], type + '-' + typeIndex, {
            memory: {
                role,
            }
        })
    },

    spawnMiner() {
        return this.spawn(MINER);
    },
    spawnUpgrader() {
        return this.spawn(UPGRADER);
    },
    spawnBuilder() {
        return this.spawn(BUILDER);
    },

    run() {

    }
}
