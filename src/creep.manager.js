
const MINER = 'MINER';
const UPGRADER = 'UPGRADER';
const BUILDER = 'BUILDER';

const ROLES = [MINER, UPGRADER, BUILDER];

module.exports = {

    MINER: [],
    UPGRADER: [],
    BUILDER: [],
    MINER_LIMIT: 2,
    UPGRADER_LIMIT: 2,
    BUILDER_LIMIT: 2,

    init() {
        ROLES.forEach(role => this[role] = []);
        Object.values(Game.creeps)
            .forEach(creep =>{
                this[creep.memory.role].push(creep);
            });
    },

    /**
     * 
     * @param {string} type 
     */
    spawn(role) {
        Memory.spawns.type = Memory.spawns.type || 0
        const typeIndex = Memory.spawns.type++
        Game.spawns.sp1.spawnCreep([WORK, MOVE, CARRY], role + '-' + typeIndex, {
            memory: {
                role,
            }
        })
    },

    spawnMINER() {
        return this.spawn(MINER);
    },
    spawnUPGRADER() {
        return this.spawn(UPGRADER);
    },
    spawnBUILDER() {
        return this.spawn(BUILDER);
    },

    run() {
        this.init();
        ROLES.forEach(role => {
            if (this[role].length < this[role+'_LIMIT']) {
                this['spawn' + role]();
            }
        });
    }
}
