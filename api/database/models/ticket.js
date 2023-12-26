const sequelize = require("../db")
const {DataTypes} = require("sequelize")

const Ticket = sequelize.define("ticket", {
    id_ticket: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    hash: {
        type: DataTypes.STRING(64),
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING(256),
        allowNull: false
    },
    user_uuid: {
        type: DataTypes.UUID,
        allowNull: false
    },
    ticket_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Ticket