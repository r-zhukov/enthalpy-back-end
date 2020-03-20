function validateBody(validateScheme) {
    return function (req, res, next) {
        validateScheme.validate(req.body)
            .then(() => next())
            .catch(next)
    }
}

module.exports = {
    validateBody,
};