const {v4: uuid4} = require("uuid")
const UserModel = require("../database/DB.connection").DB_models.users

exports.deleteUserById = async (uuid) => {
    try {
        const res = await UserModel.destroy({
            where: {
                uuid_user: uuid
            }
        })
        if (res === 0)
            throw new Error("User not found")
    } catch (err) {
        console.log(err)
        throw err
    }
};
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

        if (res[0] === 0)
            throw new Error("User not found")
    } catch (err) {
        console.log(err)
        throw err
    }
}

exports.verifyLogin = async (email, password) => {
    try {
        const data = await UserModel.findAll({
            where: {
                email: email,
                password: password
            }
        })
        if (data.length !== 0) {
            // console.log(data[0].dataValues.uuid_user)
            return data[0].dataValues.uuid_user
        } else throw new Error("Invalid email or login")
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

        if (err.name === "SequelizeUniqueConstraintError")
            throw new Error("Account with this email already exist")

        throw err
    }
}

exports.getUsers = async () => {
    try {
        const data = await UserModel.findAll()
        if (data.length === 0)
            throw new Error("No user found")
        return data
    } catch (err) {
        console.log(err)
        throw err
    }
}

exports.getUserByID = async (uuid) => {
    try {
        const user = await UserModel.findAll({
            where: {
                uuid_user: uuid
            }
        })
        if (user.length === 0)
            throw new Error("No user found")
        else return user
    } catch (err) {
        console.log(err)
        throw err
    }
}

exports.getRoleByID = async (uuid) => {
    try {
        const user = await UserModel.findOne({
            where: {
                uuid_user: uuid
            }
        });
        if (!user) {
            throw new Error("No user found");
        }
        return user.id_role;
    } catch (err) {
        console.log(err);
        throw err;
    }
};