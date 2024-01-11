const validator = require("validator")

exports.validateLocationId = (req, res, next) => {
    if (!validateId(req.params.id))
        return res.status(400).send("Invalid format for location id")
    next()
}

const validateId = (id) => {
    if (!id) return false
    return validator.isNumeric(id)
}