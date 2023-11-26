const ProvidersModel = require("../database/DB.connection").DB_models.providers
const ImagesModel = require("../database/DB.connection").DB_models.images

exports.getProviders = async () => {
    try {
        const data = await ProvidersModel.findAll({
            include : {
                model: ImagesModel,
                as: 'image_images_providers_images'
            }
        })
        return data
    } catch (err) {
        console.log(err)
        throw err
    }
}