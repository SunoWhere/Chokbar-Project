const sequelize = require("../db")
const {DataTypes} = require("sequelize")

const Provider = sequelize.define("provider", {
    id_provider: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    provider: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
})

module.exports = Provider