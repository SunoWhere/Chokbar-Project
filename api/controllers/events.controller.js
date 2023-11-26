const eventsServices = require("../services/events.services")

exports.getEvents = async (req,res) => {
    try {
        return res.status(200).send(await eventsServices.getEvents())
    } catch (err) {
        return res.status(200).send(err.message)
    }
};
