const AMINISTRATOR = 'Administrator';
const MANAGER = 'Manager';
const DIRECTOR = 'Director';
const USER = 'User';
const ROLES = [AMINISTRATOR, MANAGER, DIRECTOR, USER];

const settingUpBoilers = 'Наладка котлов';
const heatingNetworks = 'Наладка сетей';
const industrialEnergyAudit = 'Промышленный энергоаудит';
const energyAuditOfBuildings = 'Энергоаудит зданий';
const typesOfWork = [settingUpBoilers, heatingNetworks, industrialEnergyAudit, energyAuditOfBuildings];


module.exports = {
    AMINISTRATOR,
    MANAGER,
    DIRECTOR,
    USER,
    ROLES,
    settingUpBoilers,
    heatingNetworks,
    industrialEnergyAudit,
    energyAuditOfBuildings,
    typesOfWork,
};