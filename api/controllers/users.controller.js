const usersServices = require("../services/users.services")

exports.verifyLogin = async (req, res) => {
    await usersServices.verifyLogin(req.body).then(uuid => {
        console.log(uuid)
        // FIXME uuid récupérer undefined ?????????????
        return res.status(200).send(uuid)
    }).catch(err => {
        return res.status(500).send(err)
    })
}

exports.saveUser = async (req, res) => {
    try {
        let newUser = await usersServices.saveUser(req.body)
        return res.status(200).send("New user saved successfully.")
    } catch (error) {
        return res.status(500).send("Internal error")
    }
}

exports.getUsers = async (req, res) => {
    let data = await usersServices.getUsers().then(data => {
        return res.status(200).send(data)
    }).catch(error => {
        return res.status(500).send("Internal error")
    })
}

exports.getUserByID = async (req, res) => {
    const uuid = req.params.uuid
    let data = await usersServices.getUserByID(uuid).then(data => {
        return res.status(200).send(data)
    }).catch(error => {
        return res.status(500).send("Internal error")
    })
}