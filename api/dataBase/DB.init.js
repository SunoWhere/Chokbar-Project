const {DataTypes, INTEGER} = require("sequelize");

const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('ezcon', 'root', 'toor', {
    dialect: 'postgres',
    host: 'localhost',
    port: '5433'
})
const users = sequelize.define(
    'users',
    {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING(256)
        },
        role: {
            type: DataTypes.INTEGER
        }
    },
    {
        timestamps: false
    })

const product_types = sequelize.define(
    'product_types',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name : {
            type: DataTypes.STRING(50)
        }
    },
    {
        timestamps: false
    }
)

const providers = sequelize.define(
    'providers',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name : {
            type: DataTypes.STRING(100)
        },
        user_uuid : {
            type : DataTypes.UUID,
            allowNull : false
        }
    },
    {
        timestamps: false
    }
)
sequelize.sync({force: true})
