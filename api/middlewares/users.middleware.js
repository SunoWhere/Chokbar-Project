const validator = require("validator")

exports.validateUserInput = (req, res, next) => {
    const {first_name, last_name, email, password} = req.body
    if (!first_name || !last_name || !email || !password) {
        return res.status(400).send("Fields invalid")
    }
    if (!validator.isLength(first_name, {max: 50}) || !validator.isAlpha(first_name, 'fr-FR', {ignore: ''})) {
        return res.status(400).send("Invalid format for first_name")
    }
    if (!validator.isLength(last_name, {max: 50}) || !validator.isAlpha(last_name, 'fr-FR', {ignore: ''})) {
        return res.status(400).send("Invalid format for last_name")
    }
    const email_format = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!validator.isLength(email, {max: 50}) || !email_format.test(email)) {
        return res.status(400).send("Invalid format for email")
    }
    if (!/^[a-f0-9]{64}$/gi.test(password)) {
        return res.status(400).send("Invalid format for password")
    }
    // FIXME : gérer un maximum d'EDGE CASE
    next()
}