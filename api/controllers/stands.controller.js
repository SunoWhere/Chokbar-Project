const standsServices = require("../services/stands.services")

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
        return res.status(200).send("Stands updated successfully")
    } catch (err) {
        return res.status(500).send(err.message)
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
        await standsServices.saveStand(
            req.body.id_location,
            req.body.id_provider,
            req.body.id_stand_type,
            req.body.name,
            req.body.description_en,
            req.body.description_fr
        )
        return res.status(200).send("New stand saved successfully.")
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
        return res.status(500).send(err.message)
    }
}