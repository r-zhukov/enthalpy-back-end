const mongoose = require('mongoose');

const CallScheme = new mongoose.Schema({
        callDate: {
            type: Date,
            required: true,
        },
        description: {
            type: String,
            required: false
        },
        enterprise: {
            type: mongoose.Schema.Types.ObjectId, ref: 'Enterprise'
        },
    },
    {timestamps: {createdAt: 'created_at'}});

const Call = mongoose.model('Call', CallScheme);

module.exports = Call;
