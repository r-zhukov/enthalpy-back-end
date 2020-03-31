const Call = require('../models/Call.model');
const User = require('../models/User.model');
const Enterprise = require('../models/Enterprise.model');
const moment = require('moment');

async function createCall(req, res, next) {
    const body = req.body;
    const id = req.params.id;
    try {
        const callModel = new Call(body);
        const createCall = await callModel.save();
        await Enterprise.updateOne({_id: id}, {$push: {calls: createCall._id}});
        await User.updateOne({_id: body.caller}, {$push: {calls: createCall._id}});
        res.send(createCall);
    } catch (e) {
        next(e);
    }
}

async function getAllUserCalls(req, res, next) {
    const userId = req.params.id;
    const query = req.query;
    try {
        const user = await User.findOne({_id: userId}).populate('calls');
        let userCalls = user.calls;
        let filteredUserCalls = userCalls.slice();
        for (const key in query) {
            filteredUserCalls = filteredUserCalls.filter((call) =>
                moment((call[key])).format("YYYY-MM-DD") === query[key]
            );
        }
        res.send(filteredUserCalls);
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
    createCall,
    getAllUserCalls,
    getCallById,
    updateCall,
};