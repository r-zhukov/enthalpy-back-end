const Comment = require('../models/Comment.model');
const Enterprise = require('../models/Enterprise.model');

async function createComment(req, res, next) {
    const body = req.body;
    body.enterprise = req.params.id;
    const enterprise = await Enterprise.findOne({_id: req.params.id});
    if (enterprise) {
        body.author = enterprise.whoAdded;
    }
    try {
        const commentModel = new Comment(body);
        const createComment = await commentModel.save();
        await Enterprise.updateOne({_id: req.params.id}, {$push: {comments: createComment._id}});
        res.send(createComment)
    } catch (e) {
        next(e);
    }
}

async function updateComment(req, res, next) {
    const body = req.body;
    const id = req.params.id;
    try {
        const updateComment = await Comment.updateOne({_id: id}, body, {runValidations: true});
        res.send(updateComment);
    } catch (e) {
        next(e);
    }
}

async function getEnterpriseComments(req, res, next) {
    const id = req.params.id;
    try {
        const enterprise = await Enterprise.findOne({_id: id}).populate('comments').select('-__v');
        if (enterprise) {
            res.send(enterprise.comments)
        }
        res.status(404).send("Not found")
    } catch (e) {
        next(e);
    }
}

async function getCommentById (req, res, next) {
    const id = req.params.id;
    try {
        const comment = await Comment.findOne({_id: id}).populate('author');
        if (comment) {
            res.send(comment)
        }
        res.status(404).send("Not found")
    } catch (e) {
        next(e);
    }
}

module.exports = {
    createComment,
    updateComment,
    getEnterpriseComments,
    getCommentById,
};
