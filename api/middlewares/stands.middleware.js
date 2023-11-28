const validator = require("validator")

/*
TODO ajouter les validators pour les nouveau champs ajouter avec l'update de la DB
 */


exports.validateProductId = (req, res, next) => {
    if (!validateId(req.params.id_product))
        return res.status(400).send("Invalid format for id_product")
    next()
}

exports.validateStandInput = (req, res, next) => {
    if (!validateId(req.body.id_location))
        return res.status(400).send("Invalid format for id_location")
    if (!validateId(req.body.id_provider))
        return res.status(400).send("Invalid format for id_provider")
    if (!validateId(req.body.id_stand_type))
        return res.status(400).send("Invalid format for id_stand_type")
    if (!validateName(req.body.name))
        return res.status(400).send("Invalid format for name")
    if (!validateDescription(req.body.description_en))
        return res.status(400).send("Invalid format for description_en")
    if (!validateDescription(req.body.description_fr))
        return res.status(400).send("Invalid format for description_fr")
    next()
}
exports.validateId = (req, res, next) => {
    if (!validateId(req.params.id))
        return res.status(400).send("Invalid format for id")
    next()
}

const validateDescription = (description) => {
    if (!description) return false
    return true
}
const validateName = (name) => {
    if (!name) return false
    return validator.isAlpha(name, 'fr-FR', {ignore: ''}) && validator.isLength(name, {max: 100})
}
const validateId = (id) => {
    if (!id) return false
    return validator.isNumeric(id)
}