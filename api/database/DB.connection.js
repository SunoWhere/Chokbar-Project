const {Sequelize} = require('sequelize');
const dotenv = require("dotenv")
dotenv.config()
const fs = require('fs')

const {DB_USER, DB_PWD, DB_PORT, DB_NAME} = process.env

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PWD, {
    dialect: 'postgres',
    host: 'localhost',
    port: DB_PORT
})

const DB_models = require("./models/init-models").initModels(sequelize)

const initTickets = async () => {
    try{
        const alphanum = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_'
        for(let i = 0; i < 300; i++) {
            const id_type_ticket = Math.floor(Math.random() * 3 + 1)
            const mail = 'user' + i + '@mail.to'
            let hash = ''
            for (let j = 0; j < 256; j++) {
                hash += alphanum.charAt(Math.floor(Math.random() * alphanum.length));
            }
            await DB_models.tickets.create({
                hash: hash,
                email: mail,
                id_ticket_type: id_type_ticket
            })
        }
    } catch (err) {
        console.log(err)
    }
}

const initDb = async () => {
    sql_script = fs.readFileSync(__dirname + '/bdd.sql').toString()
    await sequelize.query(sql_script)
    await initTickets()
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