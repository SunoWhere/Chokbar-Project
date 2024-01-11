const statsServices = require('../services/stats.services')

exports.getTotalUsers = async (req, res) => {
    try {
        return res.status(200).send(await statsServices.getTotalUsers())
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

exports.getTotalProviders = async (req, res) => {
    try {
        return res.status(200).send(await statsServices.getTotalProviders())
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

exports.getTotalProducts = async (req, res) => {
    try {
        return res.status(200).send(await statsServices.getTotalProducts())
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

exports.getTicketsSales = async (req, res) => {
    try {
        return res.status(200).send(await statsServices.getTicketsSales())
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

exports.getProductsSales = async (req, res) => {
    try {
        return res.status(200).send(await statsServices.getProductsSales())
    } catch (err) {
        return res.status(500).send(err.message)
    }
}