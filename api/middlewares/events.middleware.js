const validator = require("validator")

exports.validateEventId = (req, res, next) => {
    if (!validateNumeric(req.params.id))
        return res.status(400).send("Invalid format for event id")
    next()
}

exports.validateEventInput = (req, res, next) => {
    if(!validateName(req.body.name)) {
        return res.status(400).send("Invalid format for event name")
    } else if(!validateNumeric(req.body.max_capacity)) {
        return res.status(400).send("Invalid format for event max capacity")
    } else if(!validateDate(req.body.starting_time)) {
        return res.status(400).send("Invalid format for event starting time")
    } else if(!validateDate(req.body.finishing_time)) {
        return res.status(400).send("Invalid format for event finishing time")
    } else if(!req.body.description_en) {
        return res.status(400).send("Invalid format for event description en")
    } else if(!req.body.description_fr) {
        return res.status(400).send("Invalid format for event description fr")
    } else if(!validateNumeric(req.body.id_location)) {
        return res.status(400).send("Invalid format for event location id")
    }
    next()
}

const validateDate = (date) => {
    const date_obj = new Date(date)
    if(!date_obj || isNaN(date_obj.getDate())) return false
}

const validateNumeric = (number) => {
    if (!number) return false
    return validator.isNumeric(number)
}

const validateName = (name) => {
    if(!name) return false
    return validator.isLength(name, {max: 50})
}