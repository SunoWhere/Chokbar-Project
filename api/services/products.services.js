const ProductsModel = require("../database/DB.connection").DB_models.products
const ProductTypesModel = require("../database/DB.connection").DB_models.product_types

exports.getProductTypes = async () => {
    try {
        const data = await ProductTypesModel.findAll()
        if (!data)
            throw new CustomError("No product types found", 404)
        return data
    } catch (err) {
        console.log(err)
        throw err
    }
};
exports.deleteProductById = async (id) => {
    try {
        const res = await StandsModel.destroy({
            where: {
                id_product: id
            }
        })
        if (res === 0)
            throw new CustomError("Product not found", 404)
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
            throw new CustomError("Product not found", 404)
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
exports.getProductById = async (id) => {
    try {
        const res = await ProductsModel.findOne({
            where: {
                id_product: id
            }
        })
        if (res.length === 0)
            throw new CustomError("No product found", 404)
        return res
    } catch (err) {
        console.log(err)
        throw err
    }
}