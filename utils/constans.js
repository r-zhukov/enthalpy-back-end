const ADMINISTRATOR = 'Administrator';
const MANAGER = 'Manager';
const DIRECTOR = 'Director';
const USER = 'User';
const ROLES = [ADMINISTRATOR, MANAGER, DIRECTOR, USER];

const settingUpBoilers = 'Наладка котлов';
const heatingNetworks = 'Наладка сетей';
const industrialEnergyAudit = 'Промышленный энергоаудит';
const energyAuditOfBuildings = 'Энергоаудит зданий';
const typesOfWork = [settingUpBoilers, heatingNetworks, industrialEnergyAudit, energyAuditOfBuildings];

const shestakov = 'tendersDepartment';
const barkov = 'tradeDepartment';
const notMarked = 'notMarked';
const CODENAME = [shestakov, barkov, notMarked];


module.exports = {
    ADMINISTRATOR,
    MANAGER,
    DIRECTOR,
    USER,
    ROLES,
    settingUpBoilers,
    heatingNetworks,
    industrialEnergyAudit,
    energyAuditOfBuildings,
    typesOfWork,
    shestakov,
    barkov,
    notMarked,
    CODENAME,
};