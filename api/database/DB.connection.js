const {Sequelize} = require('sequelize');
const dotenv = require("dotenv")
dotenv.config()
const fs = require('fs')

const {DB_USER, DB_PWD, DB_PORT} = process.env

const sequelize = new Sequelize('ezcon', DB_USER, DB_PWD, {
    dialect: 'postgres',
    host: 'localhost',
    port: DB_PORT
})

const DB_models = require("./models/init-models").initModels(sequelize)

const initDb = async () => {
    sql_script = fs.readFileSync(__dirname + '/bdd.sql').toString()
    await sequelize.query(sql_script)
}

sequelize.authenticate().then(async () => {
    console.log("Connection successful")
    await initDb()
    console.log("Seed data inserted successfully")
}).catch((err) => {
    console.log("Connection failed")
})

module.exports = {
    DB_models,
    sequelize
}

// sequelize.close().then(() => {
//     console.log("Connection ended")
// })