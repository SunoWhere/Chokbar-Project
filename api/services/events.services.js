const EventsModel = require("../database/DB.connection").DB_models.events
const ImagesModel = require("../database/DB.connection").DB_models.images

exports.getEvents = async () => {
    try {
        const result = await EventsModel.findAll({
        })
        if (data.length === 0)
            throw new Error("No events found")
        return result
    } catch (err) {
        console.log(err)
        throw err
    }
};


exports.getEventByID = async (id) => {
    try {
        const result = await EventsModel.findAll({
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