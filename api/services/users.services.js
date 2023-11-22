const {v4: uuid4} = require("uuid")
const UserModel = require("../database/DB.connection").DB_models.users

exports.verifyLogin = async (body) => {
    await UserModel.findAll({
        where: {
            email: body.email,
            password: body.password
        }
    }).then(data => {
        if (data.length !== 0) {
            // console.log(data[0].dataValues.uuid_user)
            return data[0].dataValues.uuid_user
        } else throw new Error("Invalid email or login")
    }).catch(err => {
        throw err
    })
}


exports.userExist = async (email) => {
    UserModel.findAll({
        where: {
            email: email
        }
    }).then(data => {
        console.log("------------------")
        console.log(data)
        console.log("------------------")
        return data.length !== 0;
    }).catch(error => {
        throw error
    })
}
// FIXME Quand il y a une erreur du coté de Sequelize, le serveur s'arrête???
exports.saveUser = async (body) => {
    await UserModel.create({
        email: body.email,
        password: body.password,
        first_name: body.first_name,
        last_name: body.last_name,
        id_role: 1
    }).then(data => {
        return data
    }).catch(err => {
        throw err
    })
}

exports.getUsers = async () => {
    UserModel.findAll().then(data => {
        return data
    }).catch(error => {
        throw error
    })
}

exports.getUserByID = async (uuid) => {

    UserModel.findAll({
        where: {
            uuid_user: uuid
        }
    }).then(data => {
        return data
    }).catch(error => {
        throw error
    })
}