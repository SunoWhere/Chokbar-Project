const validator = require("validator")

exports.validateImage = (req, res, next) => {
    const {image} = req.files
    if(!validateImage(image)) {
        return res.status(400).send("Invalid format for image")
    }
    next()
}

exports.validateId = (req, res, next) => {
    if(!validateId(req.params.id)) {
        return res.status(400).send("Invalid format for image id")
    }
    next()
}

exports.validateFilename = (req, res, next) => {
    next()
}

const validateImage = (image) => {
    if(!image) return false
    return /^image/.test(image.mimetype)
}

const validateId = (id) => {
    if(!id) return false
    return validator.isNumeric(id)
}

const validateFilename = (filename) => {
    if(!filename) return false
    return filename.isLength(filename, {max: 50})
}
