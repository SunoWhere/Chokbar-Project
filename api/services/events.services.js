const EventsModel = require("../database/DB.connection").DB_models.events
const ImagesModel = require("../database/DB.connection").DB_models.images

exports.getEvents = async () => {
    try {
        const data = await EventsModel.findAll({
            include:{
                model: ImagesModel
            }
        })
        if (data.length === 0)
            throw new Error("No events found")
    } catch (err) {
        console.log(err)
        throw err
    }
};
