const providersServices = require("../services/providers.services")
const CustomError = require("../utils/CustomError");

exports.deleteImageByProviderId = async (req, res) => {
    try {
        await providersServices.deleteImageByProviderId(
            req.params.id_provider,
            req.params.id_image
        )
        return res.status(200).send("Provider image deleted successfully")
    } catch (err) {
        return res.status(err.errorCode || 500).send(err.message)
    }
};
exports.saveImageByProviderId = async (req, res) => {
    try {
        return res.status(200).send(await providersServices.saveImageByProviderId(
            req.params.id,
            req.files
        ))
    } catch (err) {
        return res.status(err.errorCode || 500).send(err.message)
    }
};
exports.deleteProviderById = async (req, res) => {
    try {
        await providersServices.deleteProviderById(
            req.params.id
        )
        return res.status(200).send("Provider deleted successfully")
    } catch (err) {
        return res.status(err.errorCode || 500).send(err.message)
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
        return res.status(200).send("Provider updated successfully")
    } catch (err) {
        return res.status(err.errorCode || 500).send(err.message)
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
        return res.status(err.errorCode || 500).send(err.message)
    }
}
exports.getProviderById = async (req, res) => {
    try {
        return res.status(200).send(await providersServices.getProviderById(
            req.params.id
        ))
    } catch (err) {
        return res.status(err.errorCode || 500).send(err.message)
    }
}
exports.getProviders = async (req, res) => {
    try {
        return res.status(200).send(await providersServices.getProviders())
    } catch (err) {
        return res.status(err.errorCode || 500).send(err.message)
    }
}

exports.validateOrder = async (req, res) => {
    try {
        await providersServices.validateOrder(req.params.id, req.params.id_order)
        return res.status(200).send('Successfully changed the state of the order to validated')
    } catch (err) {
        return res.status(err.errorCode || 500).send(err.message)
    }
}

exports.completeOrder = async (req, res) => {
    try {
        await providersServices.completeOrder(req.params.id, req.params.hash)
        return res.status(200).send('Successfully changed the state of the order to retrieved')
    } catch (err) {
        return res.status(err.errorCode || 500).send(err.message)
    }
}