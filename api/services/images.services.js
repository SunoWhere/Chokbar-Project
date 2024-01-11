const CustomError = require("../utils/CustomError")

const ImagesModel = require("../database/DB.connection").DB_models.images
const imagesFolderPath = __dirname.split('/services')[0] + '/database/assets/images/'

exports.getImages = async () => {
    try {
        return await ImagesModel.findAll({})
    } catch (err) {
        console.log(err)
        throw err
    }
}

exports.getImageByName = async (filename) => {
    try {
        const result = await ImagesModel.findOne({
            where: {
                image: filename
            }
        })
        if (!result) {
            throw new CustomError('Image not found', 404)
        }
        return imagesFolderPath + result.image
    } catch (err) {
        console.log(err)
        throw err
    }
}

exports.getImageById = async (id) => {
    try {
        const result = await ImagesModel.findOne({
            where: {
                id_image: id
            }
        })
        if (!result) {
            throw new CustomError('Image not found', 404)
        }
        return result
    } catch (err) {
        console.log(err)
        throw err
    }
}

exports.addImage = async (data) => {
    try {
        const {image} = data
        const alphanum = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_'
        let name = ''
        for (let i = 0; i < 32; i++) {
            name += alphanum.charAt(Math.floor(Math.random() * alphanum.length));
        }
        name = name + '.' + image.name.split('.').pop()
        image.mv(imagesFolderPath + name)
        return await ImagesModel.create({image: name})
    } catch (err) {
        console.log(err)
        throw err
    }
}

exports.deleteImage = async (id) => {
    try {
        await ImagesModel.destroy({
            where: {
                id_image: id
            }
        })
    } catch (err) {
        console.log(err)
        throw err
    }
}

exports.imagesFolderPath = imagesFolderPath