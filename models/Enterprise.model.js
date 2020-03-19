const mongoose = require('mongoose');
const {CODENAME, notMarked} = require('../utils/constans');

const enterpriseScheme = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    whoAdded: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    codeName: {
        type: String,
        required: true,
        enum: CODENAME,
        default: notMarked,
    },
    address: {
        type: String,
        required: false,

    },
    industry: {
        type: String,
        required: true,
    },
    calls: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Call'
    }],
    contacts: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Contact'
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Comment'
    }],
    contracts: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Contract'
    }],
    possibleWorks: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'PossibleWork'
    }],

});

const Enterprise = mongoose.model('User', enterpriseScheme);

module.exports = Enterprise;