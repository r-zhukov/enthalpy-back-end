const mongoose = require('mongoose');


const contactScheme = new mongoose.Schema({
        phone: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: false,
        },
        fullName: {
            type: String,
            required: true,
        },
        position: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: false,
        },
        enterprise: {
            type: mongoose.Schema.Types.ObjectId, ref: 'Enterprise'
        },
    },
    {timestamps: {createdAt: 'created_at'}});

const Contact = mongoose.model('Contact', contactScheme);

module.exports = Contact;