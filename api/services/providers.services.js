const ProvidersModel = require("../database/DB.connection").DB_models.providers
const ProvidersImagesModel = require("../database/DB.connection").DB_models.providers_images

exports.deleteProviderById = async (id) => {
    try {
        const res = await ProvidersModel.destroy({
            where: {
                id_provider: id
            }
        })
        if (res === 0)
            throw new Error("User not found")
    } catch (err) {
        console.log(err)
        throw err
    }
}
exports.updateProviderById = async (id, name, uuid_user) => {
    try {
        await ProvidersModel.update({
            name: name,
            uuid_user: uuid_user
        }, {
            where: {
                id_provider: id
            }
        })
    } catch (err) {
        console.log(err)
        throw err
    }
}
exports.saveProvider = async (name, uuid_user) => {
    try {
        await ProvidersModel.create({
            name: name,
            uuid_user: uuid_user
        })
    } catch (err) {
        console.log(err)
        throw err
    }
}

exports.getProviderById = async (id) => {
    try {
        const data = await ProvidersModel.findAll({
            include: {
                model: ProvidersImagesModel,
                as: 'providers_images'
            },
            where: {
                id_provider: id
            }
        })
        if (data.length === 0)
            throw new Error("No provider found")
        return data
    } catch (err) {
        console.log(err)
        throw err
    }
}
exports.getProviders = async () => {
    try {
        const data = await ProvidersModel.findAll({
            include: {
                model: ProvidersImagesModel,
                as: 'providers_images'
            }
        })
        if (data.length === 0)
            throw new Error("No provider found")
        return data
    } catch (err) {
        console.log(err)
        throw err
    }
}