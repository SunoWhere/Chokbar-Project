const User = require("./user")
const Role = require("./role")
const Provider = require("./provider")
const Description = require("./description")
const Language = require("./language")
const sequelize = require("../db");

User.hasOne(Role,{foreignKey: "role_id", as: "role"})
Role.belongsTo(User, {foreignKey: "role_id", as: "users"})

User.belongsTo(Provider, {foreignKey: "user_uuid", as: "provider"});
Provider.hasOne(User, {foreignKey: "user_uuid", as: "user"});

Description.hasOne(Language, {foreignKey: "language_id", as: "language"})
Language.belongsTo(Description, {foreignKey: "language_id", as: "descriptions"});

Provider.hasMany(Description, {foreignKey: "provider_id", as: "descriptions"});
Description.belongsTo(Provider, {foreignKey: "provider_id", as: "provider"});

sequelize.sync({alter: true}).then(() => {
    console.log("All models were synchronized successfully.")
}).catch(() => {
    console.log("Models synchronization failed.")
})

module.exports = {
    User,
    Role,
    Provider,
    Description,
    Language,
    sequelize
}