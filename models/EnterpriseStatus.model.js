const mongoose = require('mongoose');

const enterpriseStatusScheme = new mongoose.Schema({
        title: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    {timestamps: {createdAt: 'created_at'}});

const EnterpriseStatus = mongoose.model('EnterpriseStatus', enterpriseStatusScheme);

module.exports = EnterpriseStatus;