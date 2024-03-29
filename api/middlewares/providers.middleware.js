const validator = require("validator")
/*
TODO ajouter les validators pour les nouveau champs ajouter avec l'update de la DB
 */

exports.validateProviderInput = (req, res, next) => {
    if (!validateName(req.body.name))
        return res.status(400).send("Invalid format for name")
    if (!validateUuid(req.body.uuid_user))
        return res.status(400).send("Invalid format for user uuid")
    next()
};

exports.validateId = (req, res, next) => {
    if (!validateId(req.params.id))
        return res.status(400).send("Invalid format for id")
    next()
}

exports.validateHash = (req, res, next) => {
    if (!validateHash(req.params.hash))
        return res.status(400).send("Invalid format for id")
    next()
}


exports.validateOrderId = (req, res, next) => {
    if (!validateId(req.params.id_order))
        return res.status(400).send("Invalid format for order id")
    next()
}

exports.validateUuid = (req, res, next) => {
    const {uuid} = req.params
    if (!validateUuid(uuid))
        return res.status(400).send("Invalid format for uuid")
    next()
}

const validateHash = (hash) => {
    const hash_format = /^[a-zA-Z0-9-_]+$/
    if(!hash) return false
    return hash_format.test(hash) && validator.isLength(hash, {max: 256})
}

const validateId = (id) => {
    if (!id) return false
    return validator.isNumeric(id)
}
const validateName = (name) => {
    if (!name) return false
    return validator.isLength(name, {max: 100})
}

const validateUuid = (uuid) => {
    const uuid_format = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
    if (!uuid) return false
    return uuid_format.test(uuid)
}