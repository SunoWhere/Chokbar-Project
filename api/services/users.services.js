const {v4: uuid4} = require("uuid")
const CustomError = require("../utils/CustomError");
const UserModel = require("../database/DB.connection").DB_models.users

// Return the number of affected row
exports.deleteUserById = async (uuid) => {
    try {
        const res = await UserModel.destroy({
            where: {
                uuid_user: uuid
            }
        })
        return res[0]
    } catch (err) {
        console.log(err)
        throw err
    }
};
// Return the number of affected row
exports.updateUserById = async (uuid, email, password, first_name, last_name) => {
    try {
        const res = await UserModel.update({
            email: email,
            password: password,
            first_name: first_name,
            last_name: last_name,
        }, {
            where: {
                uuid_user: uuid
            }
        })
        return res[0]
    } catch (err) {
        console.log(err)
        throw err
    }
}

exports.verifyLogin = async (email, password) => {
    try {
        return await UserModel.findOne({
            where: {
                email: email,
                password: password
            }
        })
    } catch (err) {
        console.log(err)
        throw err
    }
}

exports.saveUser = async (email, password, first_name, last_name) => {
    try {
        await UserModel.create({
            email: email,
            password: password,
            first_name: first_name,
            last_name: last_name,
            id_role: 1
        })
    } catch (err) {
        console.log(err)
        throw err
    }
}

exports.getUsers = async () => {
    try {
        return await UserModel.findAll({
            attributes: ["uuid_user", "first_name", "last_name", "email", "password", "id_role"]
        })
    } catch (err) {
        console.log(err)
        throw err
    }
}

exports.getUserByID = async (uuid) => {
    try {
        return await UserModel.findOne({
            attributes: ["uuid_user", "first_name", "last_name", "email", "password", "id_role"],
            where: {
                uuid_user: uuid
            }
        })
    } catch (err) {
        console.log(err)
        throw err
    }
}