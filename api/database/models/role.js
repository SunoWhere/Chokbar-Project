const sequelize = require("../db")
const {DataTypes} = require("sequelize")

const Role = sequelize.define("role", {
    id_role: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    role: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            len: [3, 50]
        }
    }
})

module.exports = Role