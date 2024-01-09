const imagesServices = require("./images.services");
const sequelize = require("../database/DB.connection").sequelize
const ProvidersModel = require("../database/DB.connection").DB_models.providers
const ProvidersImagesModel = require("../database/DB.connection").DB_models.providers_images
const StandsModel = require("../database/DB.connection").DB_models.stands
const ProductsModel = require("../database/DB.connection").DB_models.products
const ProductsImagesModel = require("../database/DB.connection").DB_models.products_images
const UsersModel = require("../database/DB.connection").DB_models.users
const RolesModel = require("../database/DB.connection").DB_models.roles
const ImagesModel = require("../database/DB.connection").DB_models.images

/*
TODO : Refactor les changement de role pour extraire les méthodes
 */


exports.deleteImageByProviderId = async (id_provider, id_image) => {
    try {
        const provider = await ProvidersModel.findOne({where: {id_provider: id}})
        if (!provider) {
            throw new Error("Provider not found")
        }

        const image = ImagesModel.findOne({where: {id_image: id_image}})
        if (!image) {
            throw new Error("Image not found")
        }

        const provider_image = ProvidersImagesModel.findOne({where: {id_image: id_image, id_provider: id_provider}})
        if (!provider_image) {
            throw new Error("Provider image not found")
        }

        await provider_image.destroy()
    } catch (err) {
        console.log(err)
        throw err
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
        throw err
    }

    try {
        const provider = await ProvidersModel.findOne({where: {id_provider: id_provider}})
        if (!provider) {
            imagesServices.deleteImage(image.id_image)
            throw new Error("Provider not found")
        }

        const provider_image = ProvidersImagesModel.create({
            id_provider: provider.id_provider,
            id_image: image.id_image
        })

        if (!provider_image) {
            imagesServices.deleteImage(image.id_image)
            throw new Error("Provider not found")
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
            throw new Error("Provider not found")
        }

        const user = await UsersModel.findOne({where: {uuid_user: provider.uuid_user}})

        await provider.destroy()

        const role = await RolesModel.findOne({
            where: {
                name: "user"
            }
        })
        if (!role) {
            throw new Error("Could find Role User to update the User's role.");
        }

        await user.update({
            id_role: role.id_role
        })
    } catch (err) {
        console.log(err)
        throw err
    }
}
exports.updateProviderById = async (id, name, uuid_user, description_en, description_fr) => {
    try {
        const provider = await ProvidersModel.findOne({where: {id_provider: id}})
        if (!provider) {
            throw new Error("Provider not found")
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
        throw err
    }
}
exports.saveProvider = async (name, uuid_user, description_fr, description_en) => {
    try {
        const user = await UsersModel.findOne({where: {uuid_user: uuid_user}});
        if (!user) {
            throw new Error("User not existing.");
        }

        const provider = await ProvidersModel.create({
            name,
            uuid_user,
            description_fr,
            description_en
        });

        const role = await RolesModel.findOne({attributes: ["id_role"], where: {name: "provider"}});
        if (!role) {
            throw new Error("Could find Role provider to update the User's role.");
        }

        await user.update({id_role: role.id_role});

        return provider
    } catch (error) {
        if (error.name === "SequelizeUniqueConstraintError")
            throw new Error("Duplicate Provider on one user.")
        console.log(error);
        throw error;
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
        if (provider.length === 0) throw new Error("No provider found")

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
        throw err
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
            throw new Error("No provider found")

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
        throw err
    }
}