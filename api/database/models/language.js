const sequelize = require("../db")
const {DataTypes} = require("sequelize")

const Language = sequelize.define("language", {
    id_language: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    language : {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    code: {
        type: DataTypes.STRING(2),
        allowNull: false
    }
})

module.exports = Language