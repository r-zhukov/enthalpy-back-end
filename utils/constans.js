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

const renouncement = 'Отказник';
const commercialOffer = 'ЦКП';
const enterpriseStatus = [renouncement, commercialOffer];

const completed = 'Закрыт';
const inProgress = 'В работе';
const contractsStatus = [completed, inProgress];

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

    completed,
    inProgress,
    contractsStatus,
    enterpriseStatus,
    renouncement,
    commercialOffer,
};