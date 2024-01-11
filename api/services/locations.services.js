const LocationsModel = require("../database/DB.connection").DB_models.locations
const EventsModel = require("../database/DB.connection").DB_models.events
const StandsModel = require("../database/DB.connection").DB_models.stands

exports.getLocations = async () => {
    try {
        return await LocationsModel.findAll({
            include: {
                model: StandsModel, as: "stand"
            }
        });
    } catch (err) {
        console.log(err)
        throw err
    }
}

exports.getLocationById = async (id) => {
    try {
        return await LocationsModel.findOne({
            include: [
                {model: StandsModel, as: "stand"},
                {model: EventsModel, as: "events"}
            ],
            where: {
                id_location: id
            }
        });
    } catch (err) {
        console.log(err)
        throw err
    }
}

exports.getLocationEvents = async (id) => {
    try {
        return await LocationsModel.findOne({
            include: {
                model: EventsModel, as: "events"
            },
            where: {
                id_location: id
            }
        })
    } catch (err) {
        console.log(err)
        throw err
    }
}