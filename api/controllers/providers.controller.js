const providersServices = require("../services/providers.services")

exports.getProviders = async (req, res) => {
    try {
        const data = await providersServices.getProviders()
        return res.status(200).send(data)
    } catch (err) {
        return res.status(500).send(err.message)
    }
}