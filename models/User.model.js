const mongoose = require('mongoose');
const {ROLES, USER} = require('../utils/constans');

const userScheme = new mongoose.Schema({
        phone: {
            type: String,
            required: false,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            select: false,
        },
        role: {
            type: String,
            required: true,
            enum: ROLES,
            default: USER,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        codeName: {
            type: String,
            required: true,
        },
        enterprises: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'Enterprise'
        }],
        contracts: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'Contract'
        }],
        possibleWorks: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'Contract'
        }],
        calls: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'Call'
        }],
    },
    { timestamps: { createdAt: 'created_at' } });

const User = mongoose.model('User', userScheme);

module.exports = User;