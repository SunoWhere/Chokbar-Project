const validator = require("validator")

exports.validateUserInput = (req, res, next) => {
    const {first_name, last_name, email, password} = req.body
    if (!validateFirstName(first_name))
        return res.status(400).send("Invalid format for first_name")
    if (!validateLastName(last_name))
        return res.status(400).send("Invalid format for last_name")
    if (!validateEmail(email))
        return res.status(400).send("Invalid format for email")
    if (!validatePassword(password))
        return res.status(400).send("Invalid format for password")
    next()
}

exports.validateLoginInput = (req, res, next) => {
    const {email, password} = req.body
    if (!validateEmail(email))
        return res.status(400).send("Invalid format for email")
    if (!validatePassword(password))
        return res.status(400).send("Invalid format for password")
    next()
}

exports.validateUuid = (req, res, next) => {
    const {uuid} = req.params
    if (!validateUuid(uuid))
        return res.status(400).send("Invalid format for uuid")
    next()
}

exports.validateProductId = (req, res, next) => {
    const {id_product} = req.params
    if(!validateId(id_product)) {
        return res.status(400).send("Invalid format for product id")
    }
    next()
}

exports.validateOrderId = (req, res, next) => {
    const {id_order} = req.params
    if(!validateId(id_order)) {
        return res.status(400).send("Invalid format for order id")
    }
    next()
}

const validateEmail = (email) => {
    const email_format = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!email) return false
    return validator.isLength(email, {max: 50})
        && email_format.test(email)
}
const validatePassword = (password) => {
    const password_format = /^[a-f0-9]{64}$/gi
    if (!password) return false
    return password_format.test(password)
}
const validateFirstName = (first_name) => {
    if (!first_name) return false
    return validator.isLength(first_name, {max: 50})
        && validator.isAlpha(first_name, 'fr-FR', {ignore: ''})
}

const validateLastName = (last_name) => {
    if (!last_name) return false
    return validator.isLength(last_name, {max: 50})
        && validator.isAlpha(last_name, 'fr-FR', {ignore: ''})
}

const validateUuid = (uuid) => {
    const uuid_format = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
    if (!uuid) return false
    return uuid_format.test(uuid)
}

const validateId = (id) => {
    if (!id) return false
    return validator.isNumeric(id)
}