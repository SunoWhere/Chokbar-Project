const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('ezcon', 'root', 'toor', {
    dialect: 'postgres',
    host: 'localhost',
    port: '5433'
})

sequelize.authenticate().then(() => {
    console.log("Connection successful")
}).catch((err) => {
    console.log("Connection failed")
})

// sequelize.close().then(() => {
//     console.log("Connection ended")
// })