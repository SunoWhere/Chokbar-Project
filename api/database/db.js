const {Sequelize} = require('sequelize');
const dotenv = require("dotenv")
dotenv.config()

const {DB_USER, DB_PWD, DB_PORT, DB_HOST, DB_NAME} = process.env

const sequelize = new Sequelize("ezcon", "root", "toor", {
    dialect: 'postgres',
    host: "localhost",
    port: "5433",
    logging: console.log,
})

module.exports = sequelize
