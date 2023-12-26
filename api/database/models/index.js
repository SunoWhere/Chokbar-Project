const sequelize = require("../db");
const User = require("./user")
const Role = require("./role")
const Provider = require("./provider")
const Description = require("./description")
const Language = require("./language")
const Stand = require("./stand")
const Ticket = require("./ticket")
const Ticket_type = require("./ticket_type")

User.belongsTo(Role, {foreignKey: "role_id", as: "role"})
Role.hasMany(User, {foreignKey: "role_id", as: "users"})

/* FIXME : Sequelize create foreign key user_uuid in users table referencing to id_provider, but should not
    ALTER TABLE "users"  ADD FOREIGN KEY ("user_uuid") REFERENCES "providers" ("id_provider") ON DELETE SET NULL ON UPDATE CASCADE;
*/
Provider.hasOne(User, {foreignKey: "user_uuid", as: "user"});
User.belongsTo(Provider, {foreignKey: "user_uuid", as: "provider"});

Description.hasOne(Language, {foreignKey: "language_id", as: "language"})
Language.belongsTo(Description, {foreignKey: "language_id", as: "descriptions"});

Provider.hasMany(Description, {foreignKey: "provider_id", as: "descriptions"});
Description.belongsTo(Provider, {foreignKey: "provider_id", as: "provider"});

Provider.hasMany(Stand, {foreignKey: "provider_id", as: "stands"})
Stand.belongsTo(Provider, {foreignKey: "provider_id", as: "provider"})

Stand.hasMany(Description, {foreignKey: "stand_id", as: "descriptions"});
Description.belongsTo(Stand, {foreignKey: "stand_id", as: "stand"});

/* FIXME : Sequelize create foreign key user_uuid in users table referencing to id_ticket, but should not
    ALTER TABLE "users"  ADD FOREIGN KEY ("user_uuid") REFERENCES "tickets" ("id_ticket") ON DELETE SET NULL ON UPDATE CASCADE;
*/
Ticket.hasOne(User, {foreignKey: "user_uuid", as: "user"})
User.belongsTo(Ticket, {foreignKey: "user_uuid", as: "tickets"})

Ticket_type.hasMany(Ticket, {foreignKey: "ticket_type_id", as: "tickets"})
Ticket.belongsTo(Ticket_type, {foreignKey: "ticket_type_id", as: "ticket_type"})

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