const imagesServices = require("../services/images.services")

exports.getImages = async (req, res) => {
    try {
        return res.status(200).send(await imagesServices.getImages())
    } catch (err) {
        return res.status(400).send(err.message)
    }
}

exports.getImageByName = async (req, res) => {
    try {
        return res.status(200).sendFile(await imagesServices.getImageByName(req.params.filename))
    } catch (err) {
        return res.status(400).send(err.message)
    }
}

exports.addImage = async (req, res) => {
    try {
        return res.status(200).send(await imagesServices.addImage(req.files))
    } catch (err) {
        return res.status(400).send(err.message)
    }
}

exports.deleteImage = async (req, res) => {
    try {
        return res.status(200).send(await imagesServices.deleteImage(req.params.id))
    } catch (err) {
        return res.status(400).send(err.message)
    }
}