const mongoose = require('mongoose');

const CommentScheme = new mongoose.Schema({
        commentDate: {
            type: Date,
            required: true,
        },
        description: {
            type: String,
            required: false
        },
        author: {
            type: mongoose.Schema.Types.ObjectId, ref: 'User'
        },
        enterprise: {
            type: mongoose.Schema.Types.ObjectId, ref: 'Enterprise'
        },
    },
    {timestamps: {createdAt: 'created_at'}});

const Comment = mongoose.model('Call', CommentScheme);

module.exports = Comment;