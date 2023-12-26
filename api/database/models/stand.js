const sequelize = require("../db")
const {DataTypes} = require("sequelize")

const Stand = sequelize.define("stands", {
    id_stand: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    stand: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    provider_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Stand