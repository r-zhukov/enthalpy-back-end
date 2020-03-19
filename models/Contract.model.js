const mongoose = require('mongoose');
const {typesOfWork} = require('../utils/constans');


const contractScheme = new mongoose.Schema({
        title: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        typesOfWork: {
            type: String,
            required: true,
            enum: typesOfWork,
        },
        profit: {
            type: Number,
            required: true,
        },
        whoSigned: {
            type: mongoose.Schema.Types.ObjectId, ref: 'User',
        },
        enterprise: {
            type: mongoose.Schema.Types.ObjectId, ref: 'Enterprise'
        },
    },
    {timestamps: {createdAt: 'created_at'}});

const Contract = mongoose.model('Contact', contractScheme);

module.exports = Contract;