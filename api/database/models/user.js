const sequelize = require("../db")
const {DataTypes} = require("sequelize")

const User = sequelize.define('user', {
    uuid_user: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        isEmail: true
    },
    password: {
        type: DataTypes.STRING(64),
        allowNull: false,
        validate: {
            is: /^[0-9a-f]{64}$/i
        }
    },
    first_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            len: [3, 50]
        }
    },
    last_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            len: [3, 50]
        }
    }
})

module.exports = User