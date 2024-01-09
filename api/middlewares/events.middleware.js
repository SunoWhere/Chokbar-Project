const validator = require("validator")

exports.validateEventId = (req, res, next) => {
    if (!validateId(req.params.id))
        return res.status(400).send("Invalid format for event id")
    next()
}

const validateId = (id) => {
    if (!id) return false
    return validator.isNumeric(id)
}