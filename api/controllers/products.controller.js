const productsServices = require("../services/products.services")

exports.getProductTypes = async (req, res) => {
    try {
        return res.status(200).send(await productsServices.getProductTypes())
    } catch (err) {
        return res.status(500).send(err.message)
    }
};


exports.deleteProductById = async (req, res) => {
    try {
        await productsServices.deleteProductById(
            req.params.id
        )
        return res.status(200).send("Product deleted successfully")
    } catch (err) {
        return res.status(500).send(err.message)
    }
};

exports.updateProductById = async (req, res) => {
    try {
        await productsServices.updateProductById(
            req.params.id,
            req.body.price,
            req.body.quantity,
            req.body.id_stand,
            req.body.id_product_type,
            req.body.description_en,
            req.body.description_fr,
            req.body.name_en,
            req.body.name_fr
        )
        return res.status(200).send("Product updated successfully")
    } catch (err) {
        return res.status(500).send(err.message)
    }
};
exports.saveProduct = async (req, res) => {
    try {
        await productsServices.saveProduct(
            req.body.price,
            req.body.quantity,
            req.body.id_stand,
            req.body.id_product_type,
            req.body.description_en,
            req.body.description_fr,
            req.body.name_en,
            req.body.name_fr
        )
        return res.status(200).send("New product saved successfully.")
    } catch (err) {
        return res.status(500).send(err.message)
    }
};

exports.getProductById = async (req, res) => {
    try {
        return res.status(200).send(await productsServices.getProductById(
            req.params.id_product
        ))
    } catch (err) {
        return res.status(500).send(err.message)
    }
}
exports.getProductsByStandId = async (req, res) => {
    try {
        return res.status(200).send(await productsServices.getProductsByStandId(
            req.params.id
        ))
    } catch (err) {
        return res.status(500).send(err.message)
    }
}