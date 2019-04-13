
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

    spawnHarvester() {
        return this.spawn('harvester');
    },
    spawnUpgrader() {
        return this.spawn('upgrader');
    },
    spawnBuilder() {
        return this.spawn('builder');
    },

    run() {

    }
}
