const usersServices = require("../services/users.services")

exports.deleteUserById = async (req, res) => {
    try {
        const affectedRow = await usersServices.deleteUserById(
            req.params.uuid
        )
        if (affectedRow === 0)
            return res.status(404).send("User not found")
        else
            return res.status(200).send("User deleted successfully")
    } catch (err) {
        return res.status(500).send(err.message)
    }
};
exports.updateUserById = async (req, res) => {
    try {
        const affectedRow = await usersServices.updateUserById(
            req.params.uuid,
            req.body.email,
            req.body.password,
            req.body.first_name,
            req.body.last_name
        )
        if (affectedRow === 0)
            return res.status(404).send("User not found")
        else
            return res.status(200).send("User updated successfully")
    } catch (err) {
        return res.status(500).send(err.message)
    }
}
exports.verifyLogin = async (req, res) => {
    try {
        const user = await usersServices.verifyLogin(
            req.body.email,
            req.body.password
        )
        if (!user)
            return res.status(401).send("Invalid email or login")
        else
            return res.status(200).send(user.uuid_user)
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

exports.saveUser = async (req, res) => {
    try {
        await usersServices.saveUser(
            req.body.email,
            req.body.password,
            req.body.first_name,
            req.body.last_name
        )
        return res.status(201).send("New user saved successfully.")
    } catch (err) {
        if (err.name === "SequelizeUniqueConstraintError")
            return res.status(409).send("Duplicate email. User not saved.")
        return res.status(500).send(err.message)
    }
}

// TODO : vraiment utile ?
exports.getUsers = async (req, res) => {
    try {
        const users = await usersServices.getUsers()
        if (users.length === 0)
            return res.status(404).send("No user found.")
        else
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
        if (user.length === 0)
            return res.status(404).send("User not found.")
        else
            return res.status(200).send(user)

    } catch (err) {
        return res.status(500).send(err.message)
    }
}