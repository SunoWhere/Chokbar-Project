const providersServices = require("../services/providers.services")

exports.deleteProviderById = async (req, res) => {
    try {
        await providersServices.deleteProviderById(
            req.params.id
        )
        return res.status(200).send("User deleted successfully")
    } catch (err) {
        return res.status(500).send(err.message)
    }
}
exports.updateProviderById = async (req, res) => {
    try {
        await providersServices.updateProviderById(
            req.params.id,
            req.body.name,
            req.body.uuid_user,
            req.body.description_fr,
            req.body.description_en
        )
        return res.status(200).send("User updated successfully")
    } catch (err) {
        return res.status(500).send(err.message)
    }
}
exports.saveProvider = async (req, res) => {
    try {
        return res.status(200).send(await providersServices.saveProvider(
            req.body.name,
            req.body.uuid_user,
            req.body.description_fr,
            req.body.description_en
        ))
    } catch (err) {
        return res.status(500).send(err.message)
    }
}
exports.getProviderById = async (req, res) => {
    try {
        return res.status(200).send(await providersServices.getProviderById(
            req.params.id
        ))
    } catch (err) {
        return res.status(500).send(err.message)
    }
}
exports.getProviders = async (req, res) => {
    try {
        return res.status(200).send(await providersServices.getProviders())
    } catch (err) {
        return res.status(500).send(err.message)
    }
}