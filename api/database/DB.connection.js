const {Sequelize} = require('sequelize');
const dotenv = require("dotenv")
dotenv.config()

const {DB_USER, DB_PWD, DB_PORT} = process.env

const sequelize = new Sequelize('ezcon', DB_USER, DB_PWD, {
    dialect: 'postgres',
    host: 'localhost',
    port: DB_PORT
})

const DB_models = require("./models/init-models").initModels(sequelize)

sequelize.authenticate().then(() => {
    console.log("Connection successful")
}).catch((err) => {
    console.log("Connection failed")
})

module.exports = {
    DB_models
}

// sequelize.close().then(() => {
//     console.log("Connection ended")
// })