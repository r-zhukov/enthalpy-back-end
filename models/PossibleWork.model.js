const mongoose = require('mongoose');
const {typesOfWork} = require('../utils/constans');


const possibleWorkScheme = new mongoose.Schema({

        typesOfWork: {
            type: String,
            required: true,
            enum: typesOfWork,
        },
        possibleProfit: {
            type: Number,
            required: false,
        },
        description: {
            type: String,
            required: false
        },
        whoLeads: {
            type: mongoose.Schema.Types.ObjectId, ref: 'User'
        },
        enterprise: {
            type: mongoose.Schema.Types.ObjectId, ref: 'Enterprise'
        },
    },
    {timestamps: {createdAt: 'created_at'}});

const PossibleWork = mongoose.model('PossibleWork', possibleWorkScheme);

module.exports = PossibleWork;