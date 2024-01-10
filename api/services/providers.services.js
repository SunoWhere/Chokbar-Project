const imagesServices = require("./images.services");
const CustomError = require("../utils/CustomError");
const sequelize = require("../database/DB.connection").sequelize
const ProvidersModel = require("../database/DB.connection").DB_models.providers
const ProvidersImagesModel = require("../database/DB.connection").DB_models.providers_images
const StandsModel = require("../database/DB.connection").DB_models.stands
const ProductsModel = require("../database/DB.connection").DB_models.products
const ProductsImagesModel = require("../database/DB.connection").DB_models.products_images
const UsersModel = require("../database/DB.connection").DB_models.users
const RolesModel = require("../database/DB.connection").DB_models.roles
const ImagesModel = require("../database/DB.connection").DB_models.images
const OrdersModel = require("../database/DB.connection").DB_models.orders
const OrderStatesModel = require("../database/DB.connection").DB_models.order_states

/*
TODO : Refactor les changement de role pour extraire les méthodes
 */


exports.deleteImageByProviderId = async (id_provider, id_image) => {
    try {
        const provider = await ProvidersModel.findOne({where: {id_provider: id}})
        if (!provider) {
            throw new CustomError("Provider not found.", 404)
        }

        const image = ImagesModel.findOne({where: {id_image: id_image}})
        if (!image) {
            throw new CustomError("Image not found.", 404)
        }

        const provider_image = ProvidersImagesModel.findOne({where: {id_image: id_image, id_provider: id_provider}})
        if (!provider_image) {
            throw new CustomError("Provider image not found.", 404)
        }

        await provider_image.destroy()
    } catch (err) {
        console.log(err)
        throw new CustomError(err.message, 500)
    }
};
exports.saveImageByProviderId = async (id, image_file) => {
    let image
    try {
        image = await imagesServices.addImage(
            image_file
        )
    } catch (err) {
        console.log(err)
        if (err instanceof CustomError)
            throw err
        else
            throw new CustomError(err.message, 500)
    }

    try {
        const provider = await ProvidersModel.findOne({where: {id_provider: id_provider}})
        if (!provider) {
            imagesServices.deleteImage(image.id_image)
            throw new CustomError("Provider not found.", 404)
        }

        const provider_image = ProvidersImagesModel.create({
            id_provider: provider.id_provider,
            id_image: image.id_image
        })

        if (!provider_image) {
            imagesServices.deleteImage(image.id_image)
            throw new CustomError("Provider not found.", 404)
        }

        return image
    } catch (err) {
        console.log(err)
    }
};
exports.deleteProviderById = async (id) => {
    try {

        const provider = await ProvidersModel.findOne({where: {id_provider: id}})

        if (!provider) {
            throw new CustomError("Provider not found.", 404)
        }

        const user = await UsersModel.findOne({where: {uuid_user: provider.uuid_user}})

        await provider.destroy()

        const role = await RolesModel.findOne({
            where: {
                name: "user"
            }
        })
        if (!role) {
            throw new CustomError("Could not update the user's role.", 500);
        }

        await user.update({
            id_role: role.id_role
        })
    } catch (err) {
        console.log(err)
        throw new CustomError(err.message, 500)
    }
}
exports.updateProviderById = async (id, name, uuid_user, description_en, description_fr) => {
    try {
        const provider = await ProvidersModel.findOne({where: {id_provider: id}})
        if (!provider) {
            throw new CustomError("Provider not found.", 404)
        }
        console.log(provider)
        if (uuid_user !== provider.uuid_user) {
            await sequelize.transaction(async (t) => {
                let user = await UsersModel.findOne({where: {uuid_user: provider.uuid_user}})
                let role = await RolesModel.findOne({where: {name: "user"}})
                await user.update({
                    id_role: role.id_role
                })

                user = await UsersModel.findOne({where: {uuid_user: uuid_user}})
                role = await RolesModel.findOne({where: {name: "provider"}})
                await user.update({
                    id_role: role.id_role
                })
            })
        }
        await ProvidersModel.update({
            name: name,
            uuid_user: uuid_user,
            description_fr: description_fr,
            description_en: description_en
        }, {
            where: {
                id_provider: id
            }
        })
    } catch (err) {
        console.log(err)
        throw new CustomError(err.message, 500)
    }
}
exports.saveProvider = async (name, uuid_user, description_en, description_fr) => {
    try {
        const user = await UsersModel.findOne({where: {uuid_user: uuid_user}});
        if (!user) {
            throw new CustomError("User not found.", 404);
        }

        const provider = await ProvidersModel.create({
            name,
            uuid_user,
            description_fr,
            description_en
        });

        const role = await RolesModel.findOne({attributes: ["id_role"], where: {name: "provider"}});
        if (!role) {
            throw new CustomError("Could not update the user's role.", 500);
        }

        await user.update({id_role: role.id_role});

        return provider
    } catch (error) {
        if (error.name === "SequelizeUniqueConstraintError")
            throw new CustomError("Duplicate Provider on one user.", 409)
        console.log(error);
        throw new CustomError(err.message, 500);
    }
}

exports.getProviderById = async (id) => {
    try {
        const provider = await ProvidersModel.findOne({
            include: [{
                model: ImagesModel, as: 'id_image_images_providers_images'
            }, {
                model: StandsModel, as: "stands",
                attributes: ["id_stand"]
            }],
            where: {
                id_provider: id
            }
        })
        if (provider.length === 0) throw new CustomError("No provider found.", 404)

        const {id_image_images_providers_images, stands, ...providerData} = provider.toJSON();

        return {
            ...providerData,
            images: id_image_images_providers_images.map((image) => {
                return {
                    id_image: image.id_image,
                    image: image.image
                }
            }),
            stand_ids: stands.map(stand => stand.id_stand) // Rename key and transform stands to an array of ids
        };
    } catch (err) {
        console.log(err)
        throw new CustomError(err.message, 500)
    }
}
exports.getProviders = async () => {
    try {
        const providers = await ProvidersModel.findAll({
            include: [{
                model: ImagesModel, as: 'id_image_images_providers_images',
            }, {
                model: StandsModel, as: "stands",
                attributes: ["id_stand"]
            }]
        })
        if (providers.length === 0)
            throw new CustomError("Provider not found", 404)

        return providers.map(provider => {
            // Extract the provider data and stands into separate variables
            const {id_image_images_providers_images, stands, ...providerData} = provider.toJSON();

            // Create a new object with the modified structure
            return {
                ...providerData,
                images: id_image_images_providers_images.map((image) => {
                    return {
                        id_image: image.id_image,
                        image: image.image
                    }
                }),
                stand_ids: stands.map(stand => stand.id_stand) // Rename key and transform stands to an array of ids
            };
        });
    } catch (err) {
        console.log(err)
        throw new CustomError(err.message, 500)
    }
}

exports.validateOrder = async (id_provider, id_order) => {
    try {
        const order = await OrdersModel.findOne({
            where: {
                id_order: id_order
            }
        })
        if(!order) {
            throw new CustomError("No order found", 404)
        }
        const stand_id = order.dataValues.id_stand
        const stand = await StandsModel.findOne({
            where: {
                id_stand: stand_id
            }
        })
        const provider_id = stand.dataValues.id_provider
        console.log(provider_id, id_provider)
        if(provider_id != id_provider) {
            throw new CustomError('Unauthorized validation, wrong provider', 403)
        }
        const states = await OrderStatesModel.findAll()
        let state = states.find((s) => s.dataValues.id_order_state == order.dataValues.id_order_state)
        if(!state) {
            throw new CustomError('State for order update not found', 404)
        }
        if(state.dataValues.state !== 'Waiting') {
            throw new CustomError('Order has already been validated', 400)
        }
        state = states.find((s) => s.dataValues.state === 'Validated')
        if(!state) {
            throw new CustomError('State for order update not found', 404)
        }
        new_state_id = state.dataValues.id_order_state
        await OrdersModel.update({id_order_state: new_state_id}, {
            where: {
                id_order: id_order
            }
        })
    } catch (err) {
        console.log(err)
        throw new CustomError(err.message, 500)
    }
}

exports.completeOrder = async (id_provider, hash) => {
    try {
        const order = await OrdersModel.findOne({
            where: {
                hash: hash
            }
        })
        if(!order) {
            throw new CustomError("No order found", 404)
        }
        const stand_id = order.dataValues.id_stand
        const stand = await StandsModel.findOne({
            where: {
                id_stand: stand_id
            }
        })
        const provider_id = stand.dataValues.id_provider
        if(provider_id != id_provider) {
            throw new CustomError('Unauthorized validation, wrong provider', 403)
        }
        const states = await OrderStatesModel.findAll()
        let state = states.find((s) => s.dataValues.id_order_state == order.dataValues.id_order_state)
        if(!state) {
            throw new CustomError('State for order update not found', 404)
        }
        if(state.dataValues.state == 'Completed') {
            throw new CustomError('Order has already been completed', 400)
        } else if (state.dataValues.state == 'Waiting') {
            throw new CustomError('Order has not been validated yet', 400)
        }
        state = states.find((s) => s.dataValues.state === 'Retrieved')
        if(!state) {
            throw new CustomError('State for order update not found', 404)
        }
        console.log(state)
        new_state_id = state.dataValues.id_order_state
        await OrdersModel.update({id_order_state: new_state_id}, {
            where: {
                hash: hash
            }
        })
    } catch (err) {
        console.log(err)
        throw new CustomError(err.message, 500)
    }
}