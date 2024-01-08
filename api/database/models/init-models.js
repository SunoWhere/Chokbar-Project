var DataTypes = require("sequelize").DataTypes;
var _cart_lines = require("./cart_lines");
var _entries = require("./entries");
var _entries_rating = require("./entries_rating");
var _equipment_renting = require("./equipment_renting");
var _equipment_types = require("./equipment_types");
var _equipments = require("./equipments");
var _equipments_images = require("./equipments_images");
var _events = require("./events");
var _events_images = require("./events_images");
var _events_rating = require("./events_rating");
var _images = require("./images");
var _locations = require("./locations");
var _order_lines = require("./order_lines");
var _order_states = require("./order_states");
var _orders = require("./orders");
var _product_states = require("./product_states");
var _product_types = require("./product_types");
var _products = require("./products");
var _products_images = require("./products_images");
var _providers = require("./providers");
var _providers_images = require("./providers_images");
var _register_for = require("./register_for");
var _roles = require("./roles");
var _stand_types = require("./stand_types");
var _stands = require("./stands");
var _stands_images = require("./stands_images");
var _ticket_types = require("./ticket_types");
var _tickets = require("./tickets");
var _users = require("./users");

function initModels(sequelize) {
  var cart_lines = _cart_lines(sequelize, DataTypes);
  var entries = _entries(sequelize, DataTypes);
  var entries_rating = _entries_rating(sequelize, DataTypes);
  var equipment_renting = _equipment_renting(sequelize, DataTypes);
  var equipment_types = _equipment_types(sequelize, DataTypes);
  var equipments = _equipments(sequelize, DataTypes);
  var equipments_images = _equipments_images(sequelize, DataTypes);
  var events = _events(sequelize, DataTypes);
  var events_images = _events_images(sequelize, DataTypes);
  var events_rating = _events_rating(sequelize, DataTypes);
  var images = _images(sequelize, DataTypes);
  var locations = _locations(sequelize, DataTypes);
  var order_lines = _order_lines(sequelize, DataTypes);
  var order_states = _order_states(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var product_states = _product_states(sequelize, DataTypes);
  var product_types = _product_types(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var products_images = _products_images(sequelize, DataTypes);
  var providers = _providers(sequelize, DataTypes);
  var providers_images = _providers_images(sequelize, DataTypes);
  var register_for = _register_for(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var stand_types = _stand_types(sequelize, DataTypes);
  var stands = _stands(sequelize, DataTypes);
  var stands_images = _stands_images(sequelize, DataTypes);
  var ticket_types = _ticket_types(sequelize, DataTypes);
  var tickets = _tickets(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  entries.belongsToMany(events, { as: 'id_event_events_register_fors', through: register_for, foreignKey: "id_entry", otherKey: "id_event" });
  entries.belongsToMany(users, { as: 'uuid_user_users_entries_ratings', through: entries_rating, foreignKey: "id_entry", otherKey: "uuid_user" });
  equipments.belongsToMany(images, { as: 'id_image_images', through: equipments_images, foreignKey: "id_equipment", otherKey: "id_image" });
  events.belongsToMany(entries, { as: 'id_entry_entries_register_fors', through: register_for, foreignKey: "id_event", otherKey: "id_entry" });
  events.belongsToMany(images, { as: 'id_image_images_events_images', through: events_images, foreignKey: "id_event", otherKey: "id_image" });
  events.belongsToMany(users, { as: 'uuid_user_users_events_ratings', through: events_rating, foreignKey: "id_event", otherKey: "uuid_user" });
  images.belongsToMany(equipments, { as: 'id_equipment_equipments', through: equipments_images, foreignKey: "id_image", otherKey: "id_equipment" });
  images.belongsToMany(events, { as: 'id_event_events', through: events_images, foreignKey: "id_image", otherKey: "id_event" });
  images.belongsToMany(products, { as: 'id_product_products_products_images', through: products_images, foreignKey: "id_image", otherKey: "id_product" });
  images.belongsToMany(providers, { as: 'id_provider_providers', through: providers_images, foreignKey: "id_image", otherKey: "id_provider" });
  images.belongsToMany(stands, { as: 'id_stand_stands', through: stands_images, foreignKey: "id_image", otherKey: "id_stand" });
  orders.belongsToMany(products, { as: 'id_product_products_order_lines', through: order_lines, foreignKey: "id_order", otherKey: "id_product" });
  products.belongsToMany(images, { as: 'id_image_images_products_images', through: products_images, foreignKey: "id_product", otherKey: "id_image" });
  products.belongsToMany(orders, { as: 'id_order_orders', through: order_lines, foreignKey: "id_product", otherKey: "id_order" });
  products.belongsToMany(users, { as: 'uuid_user_users', through: cart_lines, foreignKey: "id_product", otherKey: "uuid_user" });
  providers.belongsToMany(images, { as: 'id_image_images_providers_images', through: providers_images, foreignKey: "id_provider", otherKey: "id_image" });
  stands.belongsToMany(images, { as: 'id_image_images_stands_images', through: stands_images, foreignKey: "id_stand", otherKey: "id_image" });
  users.belongsToMany(entries, { as: 'id_entry_entries', through: entries_rating, foreignKey: "uuid_user", otherKey: "id_entry" });
  users.belongsToMany(events, { as: 'id_event_events_events_ratings', through: events_rating, foreignKey: "uuid_user", otherKey: "id_event" });
  users.belongsToMany(products, { as: 'id_product_products', through: cart_lines, foreignKey: "uuid_user", otherKey: "id_product" });
  entries_rating.belongsTo(entries, { as: "id_entry_entry", foreignKey: "id_entry"});
  entries.hasMany(entries_rating, { as: "entries_ratings", foreignKey: "id_entry"});
  register_for.belongsTo(entries, { as: "id_entry_entry", foreignKey: "id_entry"});
  entries.hasMany(register_for, { as: "register_fors", foreignKey: "id_entry"});
  equipments.belongsTo(equipment_types, { as: "id_equipment_type_equipment_type", foreignKey: "id_equipment_type"});
  equipment_types.hasMany(equipments, { as: "equipments", foreignKey: "id_equipment_type"});
  equipment_renting.belongsTo(equipments, { as: "id_equipment_equipment", foreignKey: "id_equipment"});
  equipments.hasMany(equipment_renting, { as: "equipment_rentings", foreignKey: "id_equipment"});
  equipments_images.belongsTo(equipments, { as: "id_equipment_equipment", foreignKey: "id_equipment"});
  equipments.hasMany(equipments_images, { as: "equipments_images", foreignKey: "id_equipment"});
  events_images.belongsTo(events, { as: "id_event_event", foreignKey: "id_event"});
  events.hasMany(events_images, { as: "events_images", foreignKey: "id_event"});
  events_rating.belongsTo(events, { as: "id_event_event", foreignKey: "id_event"});
  events.hasMany(events_rating, { as: "events_ratings", foreignKey: "id_event"});
  register_for.belongsTo(events, { as: "id_event_event", foreignKey: "id_event"});
  events.hasMany(register_for, { as: "register_fors", foreignKey: "id_event"});
  equipments_images.belongsTo(images, { as: "id_image_image", foreignKey: "id_image"});
  images.hasMany(equipments_images, { as: "equipments_images", foreignKey: "id_image"});
  events_images.belongsTo(images, { as: "id_image_image", foreignKey: "id_image"});
  images.hasMany(events_images, { as: "events_images", foreignKey: "id_image"});
  products_images.belongsTo(images, { as: "id_image_image", foreignKey: "id_image"});
  images.hasMany(products_images, { as: "products_images", foreignKey: "id_image"});
  providers_images.belongsTo(images, { as: "id_image_image", foreignKey: "id_image"});
  images.hasMany(providers_images, { as: "providers_images", foreignKey: "id_image"});
  stands_images.belongsTo(images, { as: "id_image_image", foreignKey: "id_image"});
  images.hasMany(stands_images, { as: "stands_images", foreignKey: "id_image"});
  events.belongsTo(locations, { as: "id_location_location", foreignKey: "id_location"});
  locations.hasMany(events, { as: "events", foreignKey: "id_location"});
  stands.belongsTo(locations, { as: "id_location_location", foreignKey: "id_location"});
  locations.hasOne(stands, { as: "stand", foreignKey: "id_location"});
  orders.belongsTo(order_states, { as: "id_order_state_order_state", foreignKey: "id_order_state"});
  order_states.hasMany(orders, { as: "orders", foreignKey: "id_order_state"});
  order_lines.belongsTo(orders, { as: "id_order_order", foreignKey: "id_order"});
  orders.hasMany(order_lines, { as: "order_lines", foreignKey: "id_order"});
  products.belongsTo(product_states, { as: "id_product_state_product_state", foreignKey: "id_product_state"});
  product_states.hasMany(products, { as: "products", foreignKey: "id_product_state"});
  products.belongsTo(product_types, { as: "id_product_type_product_type", foreignKey: "id_product_type"});
  product_types.hasMany(products, { as: "products", foreignKey: "id_product_type"});
  cart_lines.belongsTo(products, { as: "id_product_product", foreignKey: "id_product"});
  products.hasMany(cart_lines, { as: "cart_lines", foreignKey: "id_product"});
  order_lines.belongsTo(products, { as: "id_product_product", foreignKey: "id_product"});
  products.hasMany(order_lines, { as: "order_lines", foreignKey: "id_product"});
  products_images.belongsTo(products, { as: "id_product_product", foreignKey: "id_product"});
  products.hasMany(products_images, { as: "products_images", foreignKey: "id_product"});
  providers_images.belongsTo(providers, { as: "id_provider_provider", foreignKey: "id_provider"});
  providers.hasMany(providers_images, { as: "providers_images", foreignKey: "id_provider"});
  stands.belongsTo(providers, { as: "id_provider_provider", foreignKey: "id_provider"});
  providers.hasMany(stands, { as: "stands", foreignKey: "id_provider"});
  users.belongsTo(roles, { as: "id_role_role", foreignKey: "id_role"});
  roles.hasMany(users, { as: "users", foreignKey: "id_role"});
  stands.belongsTo(stand_types, { as: "id_stand_type_stand_type", foreignKey: "id_stand_type"});
  stand_types.hasMany(stands, { as: "stands", foreignKey: "id_stand_type"});
  equipment_renting.belongsTo(stands, { as: "id_stand_stand", foreignKey: "id_stand"});
  stands.hasMany(equipment_renting, { as: "equipment_rentings", foreignKey: "id_stand"});
  orders.belongsTo(stands, { as: "id_stand_stand", foreignKey: "id_stand"});
  stands.hasMany(orders, { as: "orders", foreignKey: "id_stand"});
  products.belongsTo(stands, { as: "id_stand_stand", foreignKey: "id_stand"});
  stands.hasMany(products, { as: "products", foreignKey: "id_stand"});
  stands_images.belongsTo(stands, { as: "id_stand_stand", foreignKey: "id_stand"});
  stands.hasMany(stands_images, { as: "stands_images", foreignKey: "id_stand"});
  tickets.belongsTo(ticket_types, { as: "id_ticket_type_ticket_type", foreignKey: "id_ticket_type"});
  ticket_types.hasMany(tickets, { as: "tickets", foreignKey: "id_ticket_type"});
  cart_lines.belongsTo(users, { as: "uuid_user_user", foreignKey: "uuid_user"});
  users.hasMany(cart_lines, { as: "cart_lines", foreignKey: "uuid_user"});
  entries.belongsTo(users, { as: "uuid_user_user", foreignKey: "uuid_user"});
  users.hasMany(entries, { as: "entries", foreignKey: "uuid_user"});
  entries_rating.belongsTo(users, { as: "uuid_user_user", foreignKey: "uuid_user"});
  users.hasMany(entries_rating, { as: "entries_ratings", foreignKey: "uuid_user"});
  events_rating.belongsTo(users, { as: "uuid_user_user", foreignKey: "uuid_user"});
  users.hasMany(events_rating, { as: "events_ratings", foreignKey: "uuid_user"});
  orders.belongsTo(users, { as: "uuid_user_user", foreignKey: "uuid_user"});
  users.hasMany(orders, { as: "orders", foreignKey: "uuid_user"});
  providers.belongsTo(users, { as: "uuid_user_user", foreignKey: "uuid_user"});
  users.hasOne(providers, { as: "provider", foreignKey: "uuid_user"});
  tickets.belongsTo(users, { as: "uuid_user_user", foreignKey: "uuid_user"});
  users.hasMany(tickets, { as: "tickets", foreignKey: "uuid_user"});

  return {
    cart_lines,
    entries,
    entries_rating,
    equipment_renting,
    equipment_types,
    equipments,
    equipments_images,
    events,
    events_images,
    events_rating,
    images,
    locations,
    order_lines,
    order_states,
    orders,
    product_states,
    product_types,
    products,
    products_images,
    providers,
    providers_images,
    register_for,
    roles,
    stand_types,
    stands,
    stands_images,
    ticket_types,
    tickets,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
