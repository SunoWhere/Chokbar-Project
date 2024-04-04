const imagesServices = require("../services/images.services")

exports.getImages = async (req, res) => {
    try {
        const images = await imagesServices.getImages()
        if (images.length === 0)
            return res.status(404).send("No images found")
        else
            return res.status(200).send(images)
    } catch (err) {
        return res.status(err.errorCode || 500).send(err.message)
    }
}

exports.getImageById = async (req, res) => {
    try {
        const file = await imagesServices.getImageById(req.params.id);
        return res.status(200).sendFile(file)
    } catch (err) {
        return res.status(err.errorCode || 500).send(err.message)
    }
}

exports.addImage = async (req, res) => {
    try {
        return res.status(200).send(await imagesServices.addImage(req.files))
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

exports.deleteImage = async (req, res) => {
    try {
        await imagesServices.deleteImage(req.params.id)
        return res.status(200).send("Image deleted successfully")
    } catch (err) {
        return res.status(500).send(err.message)
    }
}
