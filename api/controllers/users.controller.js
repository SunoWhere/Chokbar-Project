const usersServices = require("../services/users.services")

exports.deleteUserById = async (req, res) => {
    try {
        await usersServices.deleteUserById(
            req.params.uuid
        )
        return res.status(200).send("User deleted successfully")
    } catch (err) {
        return res.status(500).send(err.message)
    }
};
exports.updateUserById = async (req, res) => {
    try {
        await usersServices.updateUserById(
            req.params.uuid,
            req.body.email,
            req.body.password,
            req.body.first_name,
            req.body.last_name
        )
        return res.status(200).send("User updated successfully")
    } catch (err) {
        return res.status(500).send(err.message)
    }
}
exports.verifyLogin = async (req, res) => {
    try {
        const uuid = await usersServices.verifyLogin(
            req.body.email,
            req.body.password
        )
        return res.status(200).send(uuid)
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

exports.saveUser = async (req, res) => {
    try {
        const newUser = await usersServices.saveUser(
            req.body.email,
            req.body.password,
            req.body.first_name,
            req.body.last_name
        )
        return res.status(200).send(newUser)
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

// TODO : vraiment utile ?
exports.getUsers = async (req, res) => {
    try {
        const users = await usersServices.getUsers()
        return res.status(200).send(users)
    } catch (err) {
        return res.status(500).send(err.message)
    }

}

exports.getUserByID = async (req, res) => {
    try {
        const user = await usersServices.getUserByID(
            req.params.uuid
        )
        return res.status(200).send(user)
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

exports.getUserRole = async (req, res) => {
    try {
        const role = await usersServices.getRoleByID(
            req.params.uuid
        )
        let role_name;
        if(role === 3) {
            role_name = 'admin';
        } else if (role === 2) {
            role_name = 'provider';
        } else role_name = 'user';
        return res.status(200).send(role_name)
    } catch (err) {
        return res.status(500).send(err.message)
    }
}