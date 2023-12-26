const sequelize = require("../db")
const {DataTypes} = require("sequelize")

const Ticket_type = sequelize.define("ticket_type", {
    id_ticket_type: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    ticket_type: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
})

module.exports = Ticket_type