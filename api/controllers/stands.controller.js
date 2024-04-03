const standsServices = require("../services/stands.services")

exports.deleteProductById = async (req, res) => {
    try {
        await standsServices.deleteProductById(
            req.params.id
        )
        return res.status(200).send("Product deleted successfully")
    } catch (err) {
        return res.status(err.errorCode || 500).send(err.message)
    }
};
exports.updateProductById = async (req, res) => {
    try {
        await standsServices.updateProductById(
            req.params.id,
            req.body.price,
            req.body.quantity,
            req.body.id_stand,
            req.body.id_product_type,
            req.body.description_en,
            req.body.description_fr,
            req.body.name_en,
            req.body.name_fr
        )
        return res.status(200).send("Product updated successfully")
    } catch (err) {
        return res.status(err.errorCode || 500).send(err.message)
    }
};
exports.saveProduct = async (req, res) => {
    try {
        await standsServices.saveProduct(
            req.body.price,
            req.body.quantity,
            req.body.id_stand,
            req.body.id_product_type,
            req.body.description_en,
            req.body.description_fr,
            req.body.name_en,
            req.body.name_fr
        )
        return res.status(200).send("New product saved successfully.")
    } catch (err) {
        return res.status(500).send(err.message)
    }
};
exports.getProductsByIdByStandId = async (req, res) => {
    try {
        return res.status(200).send(await standsServices.getProductsByIdByStandId(
            req.params.id,
            req.params.id_product
        ))
    } catch (err) {
        return res.status(err.errorCode || 500).send(err.message)
    }
}
exports.getProductsByStandId = async (req, res) => {
    try {
        return res.status(200).send(await standsServices.getProductsByStandId(
            req.params.id
        ))
    } catch (err) {
        return res.status(err.errorCode || 500).send(err.message)
    }
}
exports.updateStandById = async (req, res) => {
    try {
        await standsServices.updateStandById(
            req.params.id,
            req.body.id_location,
            req.body.id_provider,
            req.body.id_stand_type,
            req.body.name,
            req.body.description_en,
            req.body.description_fr
        )
        return res.status(200).send("Stand updated successfully")
    } catch (err) {
        return res.status(err.errorCode || 500).send(err.message)
    }
}
exports.deleteStandById = async (req, res) => {
    try {
        await standsServices.deleteStandById(
            req.params.id
        )
        return res.status(200).send("Stand deleted successfully")
    } catch (err) {
        return res.status(500).send(err.message)
    }
}
exports.saveStand = async (req, res) => {
    try {

        return res.status(200).send(
            await standsServices.saveStand(
                req.body.id_location,
                req.body.id_provider,
                req.body.id_stand_type,
                req.body.name,
                req.body.description_en,
                req.body.description_fr
            )
        )
    } catch (err) {
        return res.status(500).send(err.message)
    }
}
exports.getStandById = async (req, res) => {
    try {
        return res.status(200).send(await standsServices.getStandById(
            req.params.id
        ))
    } catch (err) {
        return res.status(500).send(err.message)
    }
}
exports.getStands = async (req, res) => {
    try {
        return res.status(200).send(await standsServices.getStands())
    } catch (err) {
        return res.status(err.errorCode || 500).send(err.message)
    }
}
exports.getStandTypes = async (req, res) => {
    try {
        return res.status(200).send(await standsServices.getStandTypes())
    } catch (err) {
        return res.status(err.errorCode || 500).send(err.message)
    }
}
exports.addStandImage = async (req, res) => {
    try {
        await standsServices.addStandImage(req.files, req.params.id)
        return res.status(200).send("Successfully added new image to stand with id : " + req.params.id)
    } catch (err) {
        return res.status(err.errorCode || 500).send(err.message)
    }
}