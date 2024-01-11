const validator = require("validator")

exports.validateProductId = (req, res, next) => {
    if (!validateNumber(req.params.id_product))
        return res.status(400).send("Invalid format for product id")
    next()
}

exports.validateProductInputs = (req, res, next) => {
    if(!validateNumeric(req.body.price)) {
        return res.status(400).send("Invalid format for product price")
    } else if(!validateNumeric(req.body.quantity)) {
        return res.status(400).send("Invalid format for product quantity")
    } else if(!validateNumeric(req.body.id_stand)) {
        return res.status(400).send("Invalid format for product stand id")
    } else if(!validateNumeric(req.body.id_product_type)) {
        return res.status(400).send("Invalid format for product product type id")
    } else if(!req.body.description_en) {
        return res.status(400).send("Invalid format for product description eng")
    } else if(!req.body.description_fr) {
        return res.status(400).send("Invalid format for product description fr")
    } else if(!validateName(req.body.name_en)) {
        return res.status(400).send("Invalid format for product name en")
    } else if(!validateName(req.body.name_fr)) {
        return res.status(400).send("Invalid format for product name fr")
    }
    next()
}

const validateNumeric = (number) => {
    const number_string = new String(number)
    if (!number) return false
    return validator.isNumeric(number_string)
}

const validateName = (name) => {
    if (!name) return false
    return validator.isLength(name, {max: 50})
}