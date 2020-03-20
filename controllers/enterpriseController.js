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
        next(e)
    }
}

module.exports = {
    createEnterprise,
};