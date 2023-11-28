const ProvidersModel = require("../database/DB.connection").DB_models.providers
const ProvidersImagesModel = require("../database/DB.connection").DB_models.providers_images
const DescriptionsModel = require("../database/DB.connection").DB_models.descriptions
const StandsModel = require("../database/DB.connection").DB_models.stands
const ProductsModel = require("../database/DB.connection").DB_models.products
const ProductsImagesModel = require("../database/DB.connection").DB_models.products_images
const UsersModel = require("../database/DB.connection").DB_models.users

// TODO : s'assurer qu'avec des delete les ligne de la table products_images se supprime avec
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
            include: [{
                model: ProvidersImagesModel, as: 'providers_images'
            }, {
                model: DescriptionsModel, as: "descriptions"
            }, {
                model: StandsModel, as: "stands"
            }, {
                model: UsersModel, as: "uuid_user_user"
            }],
            where: {
                id_provider: id
            }
        })
        if (data.length === 0) throw new Error("No provider found")
        return data
    } catch (err) {
        console.log(err)
        throw err
    }
}
exports.getProviders = async () => {
    try {
        const data = await ProvidersModel.findAll({
            include: [{
                model: ProvidersImagesModel, as: 'providers_images'
            }, {
                model: DescriptionsModel, as: "descriptions"
            }, {
                model: StandsModel, as: "stands"
            }, {
                model: UsersModel, as: "uuid_user_user"
            }]
        })
        if (data.length === 0)
            throw new Error("No provider found")
        return data
    } catch (err) {
        console.log(err)
        throw err
    }
}