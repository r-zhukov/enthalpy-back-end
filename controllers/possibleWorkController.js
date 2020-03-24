const User = require('../models/User.model');
const Enterprise = require('../models/Enterprise.model');
const PossibleWork = require('../models/PossibleWork.model');

async function createPossibleWork(req, res, next) {
    const body = req.body;
    const id = req.params.id;
    try {
        const possibleWorkModel = new PossibleWork(body);
        const createPossibleWork = await possibleWorkModel.save();
        await Enterprise.updateOne({_id: id}, {$push: {possibleWorks: createPossibleWork._id}});
        await User.updateOne({_id: body.whoLeads}, {$push: {possibleWorks: createPossibleWork._id}});
        res.send(createPossibleWork);
    } catch (e) {
        next(e);
    }
}

async function getAllUserPossibleWorks(req, res, next) {
    const userId = req.params.id;
    try {
        const user = await User.findOne({_id: userId}).populate('possibleWorks');
        res.send(user.possibleWorks);
    } catch (e) {
        next(e);
    }
}

async function getPossibleWorkById(req, res, next) {
    const possibleWorkId = req.params.id;
    try {
        const possibleWork = await PossibleWork.findOne({_id: possibleWorkId});
        res.send(possibleWork);
    } catch (e) {
        next(e);
    }
}

async function updatePossibleWork(req, res, next) {
    const body = req.body;
    const possibleWorkId = req.params.id;
    try {
        const updatePossibleWork = await PossibleWork.updateOne({_id: possibleWorkId}, body, {runValidations: true});
        res.send(updatePossibleWork);
    } catch (e) {
        next(e);
    }
}

module.exports = {
    createPossibleWork,
    getAllUserPossibleWorks,
    getPossibleWorkById,
    updatePossibleWork
};