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

const initTickets = () => {
    try{
        const alphanum = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_'
        for(let i = 0; i < 300; i++) {
            const id_type_ticket = Math.floor(Math.random() * 3 + 1)
            const mail = 'user' + i + '@mail.to'
            let hash = ''
            for (let j = 0; j < 256; j++) {
                hash += alphanum.charAt(Math.floor(Math.random() * alphanum.length));
            }
            DB_models.tickets.create({
                hash: hash,
                email: mail,
                id_ticket_type: id_type_ticket
            })
        }
    } catch (err) {
        console.log(err)
    }
}

const initProducts = () => {
    try{
        for(let i = 0; i < 300; i++) {
            const id_type_ticket = Math.floor(Math.random() * 3 + 1)
            DB_models.o.create({
                hash: hash,
                email: mail,
                id_ticket_type: id_type_ticket
            })
        }
    } catch (err) {
        console.log(err)
    }
}

const initDb = () => {
    sql_script = fs.readFileSync(__dirname + '/bdd.sql').toString()
    sequelize.query(sql_script)
    initTickets()
}

sequelize.authenticate().then(() => {
    initDb()
    console.log("Connection successful")
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