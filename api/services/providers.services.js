const sequelize = require("../database/DB.connection").sequelize
const ProvidersModel = require("../database/DB.connection").DB_models.providers
const ProvidersImagesModel = require("../database/DB.connection").DB_models.providers_images
const StandsModel = require("../database/DB.connection").DB_models.stands
const ProductsModel = require("../database/DB.connection").DB_models.products
const ProductsImagesModel = require("../database/DB.connection").DB_models.products_images
const UsersModel = require("../database/DB.connection").DB_models.users
const RolesModel = require("../database/DB.connection").DB_models.roles

/*
TODO : Refactor les changement de role pour extraire les méthodes
 */


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
exports.saveProvider = async (name, uuid_user, description_en, description_fr) => {
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
        const data = await ProvidersModel.findAll({
            include: [{
                model: ProvidersImagesModel, as: 'providers_images'
            }, {
                model: StandsModel, as: "stands"
            }],
            where: {
                id_provider: id
            }
        })
        if (data.length === 0) throw new Error("No provider found")
        return data
    } catch (err) {
        console.log(err)
        throw err
    }
}
exports.getProviders = async () => {
    try {
        const providers = await ProvidersModel.findAll({
            include: [{
                model: ProvidersImagesModel, as: 'providers_images'
            //     TODO : include images correctly
            }, {
                model: StandsModel, as: "stands",
                attributes:["id_stand"]
            }]
        })
        if (providers.length === 0)
            throw new Error("No provider found")

        return providers.map(provider => {
            // Extract the provider data and stands into separate variables
            const { stands, ...providerData } = provider.toJSON();

            // Create a new object with the modified structure
            return {
                ...providerData,
                stand_ids: stands.map(stand => stand.id_stand) // Rename key and transform stands to an array of ids
            };
        });
    } catch (err) {
        console.log(err)
        throw err
    }
}