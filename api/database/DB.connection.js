const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('ezcon', 'root', 'toor', {
    dialect: 'postgres',
    host: 'localhost',
    port: '5433'
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