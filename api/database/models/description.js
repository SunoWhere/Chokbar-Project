const sequelize = require("../db")
const {DataTypes} = require("sequelize")

const Description = sequelize.define("description", {
    id_description: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})

module.exports = Description