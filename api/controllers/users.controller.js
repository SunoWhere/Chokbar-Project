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
        await usersServices.saveUser(
            req.body.email,
            req.body.password,
            req.body.first_name,
            req.body.last_name
        )
        return res.status(200).send("New user saved successfully.")
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

exports.getCart = async (req, res) => {
    try {
        const user = await usersServices.getCart(
            req.params.uuid
        )
        return res.status(200).send(user)
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

exports.addToCart = async (req, res) => {
    try {
        await usersServices.addToCart(
            req.params.uuid,
            req.body.id_product,
            req.body.quantity
        )
        return res.status(200).send("Successfully added to cart")
    } catch (err) {
        return res.status(500).send(err.message)
    }
}