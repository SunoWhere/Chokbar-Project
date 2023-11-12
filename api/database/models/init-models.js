var DataTypes = require("sequelize").DataTypes;
var _cart_lines = require("./cart_lines");
var _entries = require("./entries");
var _entries_rating = require("./entries_rating");
var _equipment_renting = require("./equipment_renting");
var _equipment_types = require("./equipment_types");
var _equipments = require("./equipments");
var _events = require("./events");
var _events_rating = require("./events_rating");
var _guest_categories = require("./guest_categories");
var _guests = require("./guests");
var _items = require("./items");
var _location_sizes = require("./location_sizes");
var _locations = require("./locations");
var _order_types = require("./order_types");
var _orders = require("./orders");
var _product_types = require("./product_types");
var _products = require("./products");
var _providers = require("./providers");
var _register_for = require("./register_for");
var _stand_types = require("./stand_types");
var _stands = require("./stands");
var _starring_events = require("./starring_events");
var _starring_stands = require("./starring_stands");
var _ticket_days = require("./ticket_days");
var _tickets = require("./tickets");
var _users = require("./users");

function initModels(sequelize) {
  var cart_lines = _cart_lines(sequelize, DataTypes);
  var entries = _entries(sequelize, DataTypes);
  var entries_rating = _entries_rating(sequelize, DataTypes);
  var equipment_renting = _equipment_renting(sequelize, DataTypes);
  var equipment_types = _equipment_types(sequelize, DataTypes);
  var equipments = _equipments(sequelize, DataTypes);
  var events = _events(sequelize, DataTypes);
  var events_rating = _events_rating(sequelize, DataTypes);
  var guest_categories = _guest_categories(sequelize, DataTypes);
  var guests = _guests(sequelize, DataTypes);
  var items = _items(sequelize, DataTypes);
  var location_sizes = _location_sizes(sequelize, DataTypes);
  var locations = _locations(sequelize, DataTypes);
  var order_types = _order_types(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var product_types = _product_types(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var providers = _providers(sequelize, DataTypes);
  var register_for = _register_for(sequelize, DataTypes);
  var stand_types = _stand_types(sequelize, DataTypes);
  var stands = _stands(sequelize, DataTypes);
  var starring_events = _starring_events(sequelize, DataTypes);
  var starring_stands = _starring_stands(sequelize, DataTypes);
  var ticket_days = _ticket_days(sequelize, DataTypes);
  var tickets = _tickets(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  entries.belongsToMany(events, { as: 'id_event_events_register_fors', through: register_for, foreignKey: "id_entry", otherKey: "id_event" });
  entries.belongsToMany(users, { as: 'id_user_users_entries_ratings', through: entries_rating, foreignKey: "id_entry", otherKey: "id_user" });
  events.belongsToMany(entries, { as: 'id_entry_entries_register_fors', through: register_for, foreignKey: "id_event", otherKey: "id_entry" });
  events.belongsToMany(guests, { as: 'id_guest_guests', through: starring_events, foreignKey: "id_event", otherKey: "id_guest" });
  events.belongsToMany(users, { as: 'id_user_users_events_ratings', through: events_rating, foreignKey: "id_event", otherKey: "id_user" });
  guests.belongsToMany(events, { as: 'id_event_events_starring_events', through: starring_events, foreignKey: "id_guest", otherKey: "id_event" });
  guests.belongsToMany(stands, { as: 'id_stand_stands', through: starring_stands, foreignKey: "id_guest", otherKey: "id_stand" });
  orders.belongsToMany(products, { as: 'id_product_products_items', through: items, foreignKey: "id_order", otherKey: "id_product" });
  products.belongsToMany(orders, { as: 'id_order_orders', through: items, foreignKey: "id_product", otherKey: "id_order" });
  products.belongsToMany(users, { as: 'id_user_users', through: cart_lines, foreignKey: "id_product", otherKey: "id_user" });
  stands.belongsToMany(guests, { as: 'id_guest_guests_starring_stands', through: starring_stands, foreignKey: "id_stand", otherKey: "id_guest" });
  users.belongsToMany(entries, { as: 'id_entry_entries', through: entries_rating, foreignKey: "id_user", otherKey: "id_entry" });
  users.belongsToMany(events, { as: 'id_event_events', through: events_rating, foreignKey: "id_user", otherKey: "id_event" });
  users.belongsToMany(products, { as: 'id_product_products', through: cart_lines, foreignKey: "id_user", otherKey: "id_product" });
  entries_rating.belongsTo(entries, { as: "id_entry_entry", foreignKey: "id_entry"});
  entries.hasMany(entries_rating, { as: "entries_ratings", foreignKey: "id_entry"});
  register_for.belongsTo(entries, { as: "id_entry_entry", foreignKey: "id_entry"});
  entries.hasMany(register_for, { as: "register_fors", foreignKey: "id_entry"});
  equipments.belongsTo(equipment_types, { as: "id_equipment_type_equipment_type", foreignKey: "id_equipment_type"});
  equipment_types.hasMany(equipments, { as: "equipments", foreignKey: "id_equipment_type"});
  equipment_renting.belongsTo(equipments, { as: "id_equipment_equipment", foreignKey: "id_equipment"});
  equipments.hasMany(equipment_renting, { as: "equipment_rentings", foreignKey: "id_equipment"});
  events_rating.belongsTo(events, { as: "id_event_event", foreignKey: "id_event"});
  events.hasMany(events_rating, { as: "events_ratings", foreignKey: "id_event"});
  register_for.belongsTo(events, { as: "id_event_event", foreignKey: "id_event"});
  events.hasMany(register_for, { as: "register_fors", foreignKey: "id_event"});
  starring_events.belongsTo(events, { as: "id_event_event", foreignKey: "id_event"});
  events.hasMany(starring_events, { as: "starring_events", foreignKey: "id_event"});
  guests.belongsTo(guest_categories, { as: "id_guest_category_guest_category", foreignKey: "id_guest_category"});
  guest_categories.hasMany(guests, { as: "guests", foreignKey: "id_guest_category"});
  starring_events.belongsTo(guests, { as: "id_guest_guest", foreignKey: "id_guest"});
  guests.hasMany(starring_events, { as: "starring_events", foreignKey: "id_guest"});
  starring_stands.belongsTo(guests, { as: "id_guest_guest", foreignKey: "id_guest"});
  guests.hasMany(starring_stands, { as: "starring_stands", foreignKey: "id_guest"});
  locations.belongsTo(location_sizes, { as: "id_location_size_location_size", foreignKey: "id_location_size"});
  location_sizes.hasMany(locations, { as: "locations", foreignKey: "id_location_size"});
  events.belongsTo(locations, { as: "id_location_location", foreignKey: "id_location"});
  locations.hasMany(events, { as: "events", foreignKey: "id_location"});
  stands.belongsTo(locations, { as: "id_location_location", foreignKey: "id_location"});
  locations.hasOne(stands, { as: "stand", foreignKey: "id_location"});
  orders.belongsTo(order_types, { as: "id_order_type_order_type", foreignKey: "id_order_type"});
  order_types.hasMany(orders, { as: "orders", foreignKey: "id_order_type"});
  items.belongsTo(orders, { as: "id_order_order", foreignKey: "id_order"});
  orders.hasMany(items, { as: "items", foreignKey: "id_order"});
  products.belongsTo(product_types, { as: "id_product_type_product_type", foreignKey: "id_product_type"});
  product_types.hasMany(products, { as: "products", foreignKey: "id_product_type"});
  cart_lines.belongsTo(products, { as: "id_product_product", foreignKey: "id_product"});
  products.hasMany(cart_lines, { as: "cart_lines", foreignKey: "id_product"});
  items.belongsTo(products, { as: "id_product_product", foreignKey: "id_product"});
  products.hasMany(items, { as: "items", foreignKey: "id_product"});
  stands.belongsTo(providers, { as: "id_provider_provider", foreignKey: "id_provider"});
  providers.hasMany(stands, { as: "stands", foreignKey: "id_provider"});
  stands.belongsTo(stand_types, { as: "id_stand_type_stand_type", foreignKey: "id_stand_type"});
  stand_types.hasMany(stands, { as: "stands", foreignKey: "id_stand_type"});
  equipment_renting.belongsTo(stands, { as: "id_stand_stand", foreignKey: "id_stand"});
  stands.hasMany(equipment_renting, { as: "equipment_rentings", foreignKey: "id_stand"});
  products.belongsTo(stands, { as: "id_stand_stand", foreignKey: "id_stand"});
  stands.hasMany(products, { as: "products", foreignKey: "id_stand"});
  starring_stands.belongsTo(stands, { as: "id_stand_stand", foreignKey: "id_stand"});
  stands.hasMany(starring_stands, { as: "starring_stands", foreignKey: "id_stand"});
  tickets.belongsTo(ticket_days, { as: "id_ticket_day_ticket_day", foreignKey: "id_ticket_day"});
  ticket_days.hasMany(tickets, { as: "tickets", foreignKey: "id_ticket_day"});
  cart_lines.belongsTo(users, { as: "id_user_user", foreignKey: "id_user"});
  users.hasMany(cart_lines, { as: "cart_lines", foreignKey: "id_user"});
  entries.belongsTo(users, { as: "id_user_user", foreignKey: "id_user"});
  users.hasMany(entries, { as: "entries", foreignKey: "id_user"});
  entries_rating.belongsTo(users, { as: "id_user_user", foreignKey: "id_user"});
  users.hasMany(entries_rating, { as: "entries_ratings", foreignKey: "id_user"});
  events_rating.belongsTo(users, { as: "id_user_user", foreignKey: "id_user"});
  users.hasMany(events_rating, { as: "events_ratings", foreignKey: "id_user"});
  orders.belongsTo(users, { as: "id_user_user", foreignKey: "id_user"});
  users.hasMany(orders, { as: "orders", foreignKey: "id_user"});
  providers.belongsTo(users, { as: "id_user_user", foreignKey: "id_user"});
  users.hasOne(providers, { as: "provider", foreignKey: "id_user"});
  tickets.belongsTo(users, { as: "id_user_user", foreignKey: "id_user"});
  users.hasMany(tickets, { as: "tickets", foreignKey: "id_user"});

  return {
    cart_lines,
    entries,
    entries_rating,
    equipment_renting,
    equipment_types,
    equipments,
    events,
    events_rating,
    guest_categories,
    guests,
    items,
    location_sizes,
    locations,
    order_types,
    orders,
    product_types,
    products,
    providers,
    register_for,
    stand_types,
    stands,
    starring_events,
    starring_stands,
    ticket_days,
    tickets,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
