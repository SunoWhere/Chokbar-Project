const StandsModel = require("../database/DB.connection").DB_models.stands
const StandType = require("../database/DB.connection").DB_models.stand_types
const ProductsModel = require("../database/DB.connection").DB_models.products
const StandsImagesModel = require("../database/DB.connection").DB_models.stands_images
const ProvidersModel = require("../database/DB.connection").DB_models.providers
const LocationsModel = require("../database/DB.connection").DB_models.locations
const imagesServices = require("../services/images.services")
const CustomError = require("../utils/CustomError")

exports.deleteProductById = async (id) => {
    try {
        const res = await ProductsModel.destroy({
            where: {
                id_product: id
            }
        })
        if (res === 0)
            throw new Error("Product not found")
    } catch (err) {
        console.log(err)
        throw err
    }
};
exports.updateProductById = async (id, price, quantity, id_stand, id_product_type, description_en, description_fr, name_en, name_fr) => {
    try {
        const res = await ProductsModel.update({
            price: price,
            quantity: quantity,
            id_stand: id_stand,
            id_product_type: id_product_type,
            description_en: description_en,
            description_fr: description_fr,
            name_en: name_en,
            name_fr: name_fr
        }, {
            where: {
                id_product: id
            }
        })

        if (res[0] === 0)
            throw new Error("Product not found")
    } catch (err) {
        console.log(err)
        throw err
    }
};
exports.saveProduct = async (price, quantity, id_stand, id_product_type, description_en, description_fr, name_en, name_fr) => {
    try {
        await ProductsModel.create({
            price: price,
            quantity: quantity,
            id_stand: id_stand,
            id_product_type: id_product_type,
            description_en: description_en,
            description_fr: description_fr,
            name_en: name_en,
            name_fr: name_fr
        })
    } catch (err) {
        console.log(err)
        throw err
    }
};
exports.getProductsByStandId = async (id) => {
    try {
        const res = await ProductsModel.findAll({
            where: {
                id_stand: id
            },
            include: [{
                // TODO include Images
            }]
        })
        if (res.length === 0)
            throw new Error("No product found")
        return res
    } catch (err) {
        console.log(err)
        throw err
    }
}
exports.getProductsByIdByStandId = async (id, id_product) => {
    try {
        const res = await ProductsModel.findAll({
            where: {
                id_stand: id,
                id_product: id_product
            }
        })
        if (res.length === 0)
            throw new Error("No product found")
        return res
    } catch (err) {
        console.log(err)
        throw err
    }
}

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
        const new_product_state = await ProductStatesModel.findOne({
            where: {
                state: 'Not available'
            }
        })
        const new_product_state_id = new_product_state.dataValues.id_product_state
        await ProductsModel.update({id_product_state: new_product_state_id}, {
            where: {
                id_stand: id
            }
        })
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
                model: StandsImagesModel,
                as: "stands_images"
            }, {
                model: LocationsModel,
                as: "id_location_location",
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
                model: StandsImagesModel,
                as: "stands_images"
            }, {
                model: LocationsModel,
                as: "id_location_location",
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

exports.addStandImage = async (file, id) => {
    try {
        const image = await imagesServices.addImage(file)
        let id_image = image.dataValues.id_image
        await StandsImagesModel.create({id_event: id, id_image: id_image})
    } catch (err) {
        console.log(err)
        throw err
    }
}