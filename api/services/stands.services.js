const StandsModel = require("../database/DB.connection").DB_models.stands
const StandType = require("../database/DB.connection").DB_models.stand_types
const ProductsModel = require("../database/DB.connection").DB_models.products
const StandImagesModel = require("../database/DB.connection").DB_models.stands_images
const ProvidersModel = require("../database/DB.connection").DB_models.providers
const LocationsModel = require("../database/DB.connection").DB_models.locations
const LocationSizesModel = require("../database/DB.connection").DB_models.location_sizes

// FIXME : corriger l'enregistrement des noms, depuis la mise a jours de la bdd
exports.updateStandById = async (id, id_location, id_provider, id_stand_type, name, description_en, description_fr) => {
    try {
        const res = await StandsModel.update({
            id_location: id_location,
            id_provider: id_provider,
            id_stand_type: id_stand_type,
            name: name,
            description_en: description_en,
            description_fr: description_fr
        }, {
            where: {
                id_stand: id
            }
        })

        if (res[0] === 0)
            throw new Error("User not found")
    } catch (err) {
        console.log(err)
        throw err
    }
}
exports.deleteStandById = async (id) => {
    try {
        const res = await StandsModel.destroy({
            where: {
                id_stand: id
            }
        })
        if (res === 0)
            throw new Error("Stand not found")
    } catch (err) {
        console.log(err)
        throw err
    }
}
// FIXME : corriger l'enregistrement des noms, depuis la mise a jours de la bdd
exports.saveStand = async (id_location, id_provider, id_stand_type, name, description_en, description_fr) => {
    try {
        await StandsModel.create({
            id_location: id_location,
            id_provider: id_provider,
            id_stand_type: id_stand_type,
            name: name,
            description_en: description_en,
            description_fr: description_fr
        })
    } catch (err) {
        console.log(err)
        throw err
    }
}
exports.getStandById = async (id) => {
    try {
        const data = await StandsModel.findAll({
            where: {
                id_stand: id
            },
            include: [{
                model: StandType,
                as: "id_stand_type_stand_type"
            }, {
                model: ProductsModel,
                as: "products"
            }, {
                model: StandImagesModel,
                as: "stands_images"
            }, {
                model: ProvidersModel,
                as: "id_provider_provider"
            }, {
                model: LocationsModel,
                as: "id_location_location",
                include: {
                    model: LocationSizesModel,
                    as: "id_location_size_location_size"
                }
            }]
        })
        if (data === 0)
            throw new Error("No stand found")
        return data
    } catch (err) {
        console.log(err)
        throw err
    }
}
exports.getStands = async () => {
    try {
        const data = await StandsModel.findAll({
            include: [{
                model: StandType,
                as: "id_stand_type_stand_type"
            }, {
                model: ProductsModel,
                as: "products"
            }, {
                model: StandImagesModel,
                as: "stands_images"
            }, {
                model: ProvidersModel,
                as: "id_provider_provider"
            }, {
                model: LocationsModel,
                as: "id_location_location",
                include: {
                    model: LocationSizesModel,
                    as: "id_location_size_location_size"
                }
            }]
        })
        if (data === 0)
            throw new Error("No stand found")
        return data
    } catch (err) {
        console.log(err)
        throw err
    }
}