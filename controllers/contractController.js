const User = require('../models/User.model');
const Enterprise = require('../models/Enterprise.model');
const Contract = require('../models/Contract.model');

async function createContract(req, res, next) {
    const body = req.body;
    const id = req.params.id;
    try {
        const contractModel = new Contract(body);
        const createContract = await contractModel.save();
        await Enterprise.updateOne({_id: id}, {$push: {contracts: createContract._id}});
        await User.updateOne({_id: body.whoSigned}, {$push: {contracts: createContract._id}});
        res.send(createContract);
    } catch (e) {
        next(e);
    }
}

async function getAllUserContracts(req, res, next) {
    const userId = req.params.id;
    try {
        const user = await User.findOne({_id: userId}).populate('contracts');
        res.send(user.contracts);
    } catch (e) {
        next(e);
    }
}

async function getContractById(req, res, next) {
    const contractId = req.params.id;
    try {
        const contract = await Contract.findOne({_id: contractId});
        res.send(contract);
    } catch (e) {
        next(e);
    }
}

async function updateContract(req, res, next) {
    const body = req.body;
    const contractId = req.params.id;
    try {
        const updateContract = await Contract.updateOne({_id: contractId}, body, {runValidations: true});
        res.send(updateContract);
    } catch (e) {
        next(e);
    }
}

module.exports = {
    createContract,
    getAllUserContracts,
    getContractById,
    updateContract,
};