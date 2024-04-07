const infosServices = require("../services/infos.services")

exports.getName = async (req, res) => {
    try {
        return res.status(200).send(await infosServices.getName())
    } catch (err) {
        return res.status(err.errorCode || 500).send(err.message)
    }
};

exports.getDates = async (req, res) => {
    try {
        return res.status(200).send(await infosServices.getDates())
    } catch (err) {
        return res.status(err.errorCode || 500).send(err.message)
    }
};

exports.updateName = async (req, res) => {
    try {
        await infosServices.updateName(req.body.name)
        return res.status(200).send("Name successfully updated with : " + req.body.name)
    } catch (err) {
        return res.status(err.errorCode || 500).send(err.message)
    }
};

exports.updateDates = async (req, res) => {
    try {
        await infosServices.updateDates(req.body.start_date, req.body.end_date)
        return res.status(200).send("Dates successfully updated with start : " + req.body.start_date + ", end : " + req.body.end_date)
    } catch (err) {
        return res.status(err.errorCode || 500).send(err.message)
    }
};