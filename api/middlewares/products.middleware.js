const validator = require("validator")

exports.validateProductId = (req, res, next) => {
    if (!validateId(req.params.id_product))
        return res.status(400).send("Invalid format for id_product")
    next()
}

const validateId = (id) => {
    if (!id) return false
    return validator.isNumeric(id)
}