const User = require('../models/User.model');

async function createUser(req, res, next) {
    const body = req.body;
    try {
        const userModel = new User(body);
        const createUser = await userModel.save();
        res.send(createUser);
    } catch (e) {
        next(e)
    }
}

async function getUserById(req, res, next) {
    const id = req.params.id;
    try {
        const user = await User.findOne({_id: id})
            .populate('enterprises')
            .select('-__v');
        if (user) {
            return res.send(user);
        }
        res.status(404).send('Пользователь не найден');
    } catch (e) {
        next(e);
    }
}

async function getAllUsers(req, res, next) {
    try {
        const users = await User.find();
        res.send(users);
    } catch (e) {
        next(e)
    }
}

module.exports = {
    createUser,
    getUserById,
    getAllUsers,
};