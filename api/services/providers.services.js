// const ProvidersModel = require("../database/db").DB_models.providers
// const ProvidersImagesModel = require("../database/db").DB_models.providers_images
// const StandsModel = require("../database/db").DB_models.stands
// const ProductsModel = require("../database/db").DB_models.products
// const ProductsImagesModel = require("../database/db").DB_models.products_images
// const UsersModel = require("../database/db").DB_models.users
// /*
// TODO : vérifier que les models de la BDD corresponde
//  */
//
//
// // TODO : s'assurer qu'avec des delete les ligne de la table products_images se supprime avec
// exports.deleteProviderById = async (id) => {
//     try {
//         const res = await ProvidersModel.destroy({
//             where: {
//                 id_provider: id
//             }
//         })
//         if (res === 0)
//             throw new Error("User not found")
//     } catch (err) {
//         console.log(err)
//         throw err
//     }
// }
// exports.updateProviderById = async (id, name, uuid_user, description_en, description_fr) => {
//     try {
//         await ProvidersModel.update({
//             name: name,
//             uuid_user: uuid_user,
//             description_fr: description_fr,
//             description_en: description_en
//         }, {
//             where: {
//                 id_provider: id
//             }
//         })
//     } catch (err) {
//         console.log(err)
//         throw err
//     }
// }
// exports.saveProvider = async (name, uuid_user, description_en, description_fr) => {
//     try {
//         await ProvidersModel.create({
//             name: name,
//             uuid_user: uuid_user,
//             description_fr: description_fr,
//             description_en: description_en
//         })
//     } catch (err) {
//         console.log(err)
//         throw err
//     }
// }
//
// exports.getProviderById = async (id) => {
//     try {
//         const data = await ProvidersModel.findAll({
//             include: [{
//                 model: ProvidersImagesModel, as: 'providers_images'
//             }, {
//                 model: StandsModel, as: "stands"
//             }, {
//                 model: UsersModel, as: "uuid_user_user"
//             }],
//             where: {
//                 id_provider: id
//             }
//         })
//         if (data.length === 0) throw new Error("No provider found")
//         return data
//     } catch (err) {
//         console.log(err)
//         throw err
//     }
// }
// exports.getProviders = async () => {
//     try {
//         const data = await ProvidersModel.findAll({
//             include: [{
//                 model: ProvidersImagesModel, as: 'providers_images'
//             }, {
//                 model: StandsModel, as: "stands"
//             }, {
//                 model: UsersModel, as: "uuid_user_user"
//             }]
//         })
//         if (data.length === 0)
//             throw new Error("No provider found")
//         return data
//     } catch (err) {
//         console.log(err)
//         throw err
//     }
// }