const ImagesModel = require("../database/DB.connection").DB_models.images
const imagesFolderPath = __dirname.split('/services')[0] + '/database/assets/images/'

exports.getImages = async () => {
    try {
        const result = await ImagesModel.findAll({})
        return result
    } catch (err) {
        console.log(err)
        throw err
    }
}

exports.getImageByName = async (filename) => {
    try {
        const result = await ImagesModel.findAll({
            where: {
                image: filename
            }
        })
        return imagesFolderPath + result[0].image
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
        image.mv(imagesFolderPath + name + '.' + image.name.split('.').pop())
        name = name + '.' + image.name.split('.').pop() 
        const result = await ImagesModel.create({image: name})
        return result
    } catch (err) {
        console.log(err)
        throw err
    }
}

exports.deleteImage = async (id) => {

}

exports.imagesFolderPath = imagesFolderPath