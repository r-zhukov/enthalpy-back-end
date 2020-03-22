const User = require('../models/User.model');
const Enterprise = require('../models/Enterprise.model');

async function createEnterprise(req, res, next) {
    const body = req.body;
    try {
        const enterpriseModel = new Enterprise(body);
        const createEnterprise = await enterpriseModel.save();
        await User.update({_id: createEnterprise.whoAdded}, {$push: {enterprises: createEnterprise._id}});
        res.send(createEnterprise);
    } catch (e) {
        next(e);
    }
}

async function getUserEnterprises(req, res, next) {
    const id = req.params.id;
    try {
        const user = await User.findOne({_id: id}).populate('enterprises');
        if (user) {
            res.send(user.enterprises)
        }
        res.status(404).send('Not found')
    } catch (e) {
        next(e);
    }
}

async function getEnterprisesById(req, res, next) {
    const id = req.params.id;
    try {
        const enterprise = await Enterprise.findOne({_id: id})
            .select('-__v');
        if (enterprise) {
            res.send(enterprise)
        }
        res.status(400).send('Предприятие не найдено.');
    } catch (e) {
        next(e)
    }
}

async function updateEnterprise(req, res, next) {
    const body = req.body;
    const id = req.params.id;
    try {
        const updateEnterprise = await Enterprise.updateOne({_id: id}, body, {runValidations: true});
        res.send(updateEnterprise);
    } catch (e) {
        next(e);
    }
}

async function getAllEnterprises(req, res, next) {
    try {
        const enterprises = await Enterprise.find();
        res.send(enterprises);
    } catch (e) {
        next(e);
    }
}

module.exports = {
    createEnterprise,
    getUserEnterprises,
    getEnterprisesById,
    updateEnterprise,
    getAllEnterprises,
};
