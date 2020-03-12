const mongoose = require('mongoose');

const companyScheme = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
});

const Company = mongoose.model('User', companyScheme);

module.exports = Company;