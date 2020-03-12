const mongoose = require('mongoose');

const enterpriseScheme = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
});

const Enterprise = mongoose.model('User', enterpriseScheme);

module.exports = Enterprise;