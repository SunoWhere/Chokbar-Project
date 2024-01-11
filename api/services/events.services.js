const EventsModel = require("../database/DB.connection").DB_models.events
const LocationsModel = require("../database/DB.connection").DB_models.locations
const ImagesModel = require("../database/DB.connection").DB_models.images
const EventsImagesModel = require("../database/DB.connection").DB_models.events_images
const imagesServices = require("../services/images.services")
const CustomError = require("../utils/CustomError")

exports.getEvents = async () => {
    try {
        const result = await EventsModel.findAll({
            attributes: {exclude: ['id_location']},
            include: [
                {model: ImagesModel, as: "id_image_images_events_images"},
                {model: LocationsModel, as: "id_location_location"}
            ]
        })
        if (result.length == 0) {
            throw new CustomError("No Events Found", 404)
        }
        for (let e of result) {
            e.dataValues.location = e.dataValues.id_location_location
            e.dataValues.images = e.dataValues.id_image_images_events_images
            delete e.dataValues.id_image_images_events_images
            delete e.dataValues.id_location_location
            for (let i of e.dataValues.images) {
                delete i.dataValues.events_images
            }
        }
        return result
    } catch (err) {
        console.log(err)
        throw err
    }
};

exports.getEventByID = async (id) => {
    try {
        const result = await EventsModel.findOne({
            attributes: {exclude: ['id_location']},
            include: [
                {model: LocationsModel, as: "id_location_location"},
                {model: ImagesModel, as: "id_image_images_events_images"},
            ],
            where: {
                id_event: id
            }
        })
        if (!result) {
            throw new CustomError("No Event Found", 404)
        }
        result.dataValues.location = result.dataValues.id_location_location
        result.dataValues.images = result.dataValues.id_image_images_events_images
        delete result.dataValues.id_image_images_events_images
        delete result.dataValues.id_location_location
        for (let i of result.dataValues.images) {
            delete i.dataValues.events_images
        }
        return result
    } catch (err) {
        console.log(err)
        throw err
    }
}

exports.addEvent = async (data) => {
    try {
        return await EventsModel.create(data)
    } catch (err) {
        console.log(err)
        throw err
    }
}

exports.updateEvent = async (data, id) => {
    try {
        return await EventsModel.update(data, {
            where: {
                id_event: id
            }
        })
    } catch (err) {
        console.log(err)
        throw err
    }
}

exports.deleteEvent = async (id) => {
    try {
        return await EventsModel.destroy({
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
        const image = await imagesServices.addImage(file)
        let id_image = image.dataValues.id_image
        await EventsImagesModel.create({id_event: id, id_image: id_image})
    } catch (err) {
        console.log(err)
        throw err
    }
}
