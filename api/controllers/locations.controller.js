const locationsServices = require("../services/locations.services")

exports.getLocations = async (req, res) => {
    try {
        return res.status(200).send(await locationsServices.getLocations())
    } catch (err) {
        return res.status(400).send(err.message)
    }
}

exports.getLocationEvents = async (req, res) => {
    try {
        return res.status(200).send(await locationsServices.getLocationEvents(req.params.id))
    } catch (err) {
        return res.status(400).send(err.message)
    }
}