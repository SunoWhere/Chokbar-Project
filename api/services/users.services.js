const {v4: uuid4} = require("uuid")
const UserModel = require("../database/DB.connection").DB_models.users

UserModel.findAll().then(data => {
    console.log(data)
}).catch(error => {
    console.log(error)
})