const eventsServices = require("../services/events.services")

exports.getEvents = async (req,res) => {
    try {
        return res.status(200).send(await eventsServices.getEvents())
    } catch (err) {
        return res.status(400).send(err.message)
    }
};

exports.getEventByID = async (req, res) => {
    try {
        const id = req.params.id
        return res.status(200).send(await eventsServices.getEventByID(id))
    } catch (err) {
        return res.status(400).send(err.message)
    }
}

exports.addEvent = async (req, res) => {
    try {
        const {name, max_capacity, starting_time, finishing_time, description_en, description_fr, id_location} = req.body
        return res.status(200).send(await eventsServices.addEvent({
            name: name, 
            max_capacity: max_capacity, 
            starting_time: starting_time,
            finishing_time: finishing_time, 
            description_en: description_en, 
            description_fr: description_fr,
            id_location: id_location
        }))
    } catch (err) {
        return res.status(400).send(err.message)
    }
}

exports.updateEvent = async (req, res) => {
    try {
        const id = req.params.id
        const {name, max_capacity, starting_time, finishing_time, description_en, description_fr, id_location} = req.body
        return res.status(200).send(await eventsServices.updateEvent({
            name: name, 
            max_capacity: max_capacity, 
            starting_time: starting_time,
            finishing_time: finishing_time, 
            description_en: description_en, 
            description_fr: description_fr,
            id_location: id_location
        }, id))
    } catch (err) {
        return res.status(400).send(err.message)
    }
}

exports.deleteEvent = async (req, res) => {
    try {
        return res.status(200).send(await eventsServices.deleteEvent(id))
    } catch (err) {
        return res.status(400).send(err.message)
    }
}

exports.addEventImage = async (req, res) => {
    try {
        await eventsServices.addEventImage(req.files, req.params.id)
        return res.status(200).send("Successfully added new image to event with id : " + req.params.id)
    } catch (err) {
        return res.status(400).send(err.message)
    }
}

exports.addEventImageWithId = async (req, res) => {
    try {
        await eventsServices.addEventImageWithId(req.params.id, req.body.id_image)
        return res.status(200).send("Successfully added new image to event with id : " + req.params.id)
    } catch (err) {
        return res.status(400).send(err.message)
    }
}