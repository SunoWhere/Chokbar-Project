const EventsModel = require("../database/DB.connection").DB_models.events
const ImagesModel = require("../database/DB.connection").DB_models.images
const LocationsModel = require("../database/DB.connection").DB_models.locations

exports.getEvents = async () => {
    try {
        const result = await EventsModel.findAll({
        })
        return result
    } catch (err) {
        console.log(err)
        throw err
    }
};


exports.getEventByID = async (id) => {
    try {
        const result = await EventsModel.findAll({
            include: {
                model: LocationsModel, as: "id_location_location"
            },
            where: {
                id_event: id
            }
        })
        return result
    } catch (err) {
        console.log(err)
        throw err
    }
}

exports.addEvent = async (data) => {
    try {
        const result = await EventsModel.create(data)
        return result
    } catch (err) {
        console.log(err)
        throw err
    }
}

exports.updateEvent = async (data, id) => {
    try {
        const result = await EventsModel.update(data, {
            where: {
                id_event: id
            }
        })
        return result
    } catch (err) {
        console.log(err)
        throw err
    }
}

exports.deleteEvent = async (id) => {
    try {
        const result = await EventsModel.destroy({
            where: {
                id_event: id
            }
        })
    } catch (err) {
        console.log(err)
        throw err
    }
}

exports.addEventImage = async (file, id) => {
    try {
        // TO DO
    } catch (err) {
        console.log(err)
        throw err
    }
}

exports.updateEventImage = async (file, id) => {
    try {
        // TO DO
    } catch (err) {
        console.log(err)
        throw err
    }
}