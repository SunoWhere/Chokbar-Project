const locationsServices = require("../services/locations.services")

exports.getLocations = async (req, res) => {
    try {
        const locations = await locationsServices.getLocations()
        if (locations.length === 0)
            return res.status(404).send("No locations found")
        else
            return res.status(200).send(locations)
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

exports.getLocationById = async (req, res) => {
    try {
        const location = await locationsServices.getLocationById(req.params.id)
        if (!location)
            return res.status(404).send("Location not found")
        else
            return res.status(200).send(location)
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

exports.getLocationEvents = async (req, res) => {
    try {
        const events = await locationsServices.getLocationEvents(req.params.id)
        if (!events)
            return res.status(404).send("Location not found")
        else
            return res.status(200).send(events)
    } catch (err) {
        return res.status(500).send(err.message)
    }
}