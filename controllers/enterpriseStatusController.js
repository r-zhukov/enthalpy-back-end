const EnterpriseStatus = require('../models/EnterpriseStatus.model');


async function createEnterpriseStatus(req, res, next) {
    const body = req.body;
    try {
        const EnterpriseStatusModel = new EnterpriseStatus(body);
        const createEnterpriseStatus = await EnterpriseStatusModel.save();
        res.send(createEnterpriseStatus);
    } catch (e) {
        next(e);
    }
}

async function getAllEnterpriseStatus(req, res, next) {
    console.log("1");
    try {
        const allEnterpriseStatus = await EnterpriseStatus.find()
            .select('-__v -created_at -updatedAt');
        res.send(allEnterpriseStatus);
    } catch (e) {
        next(e);
    }
}

async function getCallById(req, res, next) {
    const callId = req.params.id;
    try {
        const call = await Call.findOne({_id: callId});
        res.send(call);
    } catch (e) {
        next(e);
    }
}

async function updateCall(req, res, next) {
    const body = req.body;
    const callId = req.params.id;
    try {
        const updateCall = await Call.updateOne({_id: callId}, body, {runValidations: true});
        res.send(updateCall);
    } catch (e) {
        next(e);
    }
}

module.exports = {
    createEnterpriseStatus,
    getAllEnterpriseStatus

};