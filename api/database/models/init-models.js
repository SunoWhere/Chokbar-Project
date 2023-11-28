var DataTypes = require("sequelize").DataTypes;
var _cart_lines = require("./cart_lines");
var _descriptions = require("./descriptions");
var _entries = require("./entries");
var _entries_rating = require("./entries_rating");
var _equipment_renting = require("./equipment_renting");
var _equipment_types = require("./equipment_types");
var _equipments = require("./equipments");
var _equipments_images = require("./equipments_images");
var _events = require("./events");
var _events_images = require("./events_images");
var _events_rating = require("./events_rating");
var _guest_categories = require("./guest_categories");
var _guests = require("./guests");
var _guests_images = require("./guests_images");
var _images = require("./images");
var _items = require("./items");
var _languages = require("./languages");
var _location_sizes = require("./location_sizes");
var _locations = require("./locations");
var _names = require("./names");
var _order_types = require("./order_types");
var _orders = require("./orders");
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
var _starring_events = require("./starring_events");
var _starring_stands = require("./starring_stands");
var _ticket_types = require("./ticket_types");
var _tickets = require("./tickets");
var _users = require("./users");

function initModels(sequelize) {
  var cart_lines = _cart_lines(sequelize, DataTypes);
  var descriptions = _descriptions(sequelize, DataTypes);
  var entries = _entries(sequelize, DataTypes);
  var entries_rating = _entries_rating(sequelize, DataTypes);
  var equipment_renting = _equipment_renting(sequelize, DataTypes);
  var equipment_types = _equipment_types(sequelize, DataTypes);
  var equipments = _equipments(sequelize, DataTypes);
  var equipments_images = _equipments_images(sequelize, DataTypes);
  var events = _events(sequelize, DataTypes);
  var events_images = _events_images(sequelize, DataTypes);
  var events_rating = _events_rating(sequelize, DataTypes);
  var guest_categories = _guest_categories(sequelize, DataTypes);
  var guests = _guests(sequelize, DataTypes);
  var guests_images = _guests_images(sequelize, DataTypes);
  var images = _images(sequelize, DataTypes);
  var items = _items(sequelize, DataTypes);
  var languages = _languages(sequelize, DataTypes);
  var location_sizes = _location_sizes(sequelize, DataTypes);
  var locations = _locations(sequelize, DataTypes);
  var names = _names(sequelize, DataTypes);
  var order_types = _order_types(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
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
  var starring_events = _starring_events(sequelize, DataTypes);
  var starring_stands = _starring_stands(sequelize, DataTypes);
  var ticket_types = _ticket_types(sequelize, DataTypes);
  var tickets = _tickets(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  entries.belongsToMany(events, { as: 'id_event_events_register_fors', through: register_for, foreignKey: "id_entry", otherKey: "id_event" });
  entries.belongsToMany(users, { as: 'id_user_users_entries_ratings', through: entries_rating, foreignKey: "id_entry", otherKey: "id_user" });
  equipments.belongsToMany(images, { as: 'image_images', through: equipments_images, foreignKey: "id_equipment", otherKey: "image" });
  events.belongsToMany(entries, { as: 'id_entry_entries_register_fors', through: register_for, foreignKey: "id_event", otherKey: "id_entry" });
  events.belongsToMany(guests, { as: 'id_guest_guests_starring_events', through: starring_events, foreignKey: "id_event", otherKey: "id_guest" });
  events.belongsToMany(images, { as: 'image_images_events_images', through: events_images, foreignKey: "id_event", otherKey: "image" });
  events.belongsToMany(users, { as: 'id_user_users_events_ratings', through: events_rating, foreignKey: "id_event", otherKey: "id_user" });
  guests.belongsToMany(events, { as: 'id_event_events_starring_events', through: starring_events, foreignKey: "id_guest", otherKey: "id_event" });
  guests.belongsToMany(images, { as: 'image_images_guests_images', through: guests_images, foreignKey: "id_guest", otherKey: "image" });
  guests.belongsToMany(stands, { as: 'id_stand_stands_starring_stands', through: starring_stands, foreignKey: "id_guest", otherKey: "id_stand" });
  images.belongsToMany(equipments, { as: 'id_equipment_equipments', through: equipments_images, foreignKey: "image", otherKey: "id_equipment" });
  images.belongsToMany(events, { as: 'id_event_events', through: events_images, foreignKey: "image", otherKey: "id_event" });
  images.belongsToMany(guests, { as: 'id_guest_guests', through: guests_images, foreignKey: "image", otherKey: "id_guest" });
  images.belongsToMany(products, { as: 'id_product_products_products_images', through: products_images, foreignKey: "image", otherKey: "id_product" });
  images.belongsToMany(providers, { as: 'id_provider_providers', through: providers_images, foreignKey: "image", otherKey: "id_provider" });
  images.belongsToMany(stands, { as: 'id_stand_stands', through: stands_images, foreignKey: "image", otherKey: "id_stand" });
  orders.belongsToMany(products, { as: 'id_product_products_items', through: items, foreignKey: "id_order", otherKey: "id_product" });
  products.belongsToMany(images, { as: 'image_images_products_images', through: products_images, foreignKey: "id_product", otherKey: "image" });
  products.belongsToMany(orders, { as: 'id_order_orders', through: items, foreignKey: "id_product", otherKey: "id_order" });
  products.belongsToMany(users, { as: 'id_user_users', through: cart_lines, foreignKey: "id_product", otherKey: "id_user" });
  providers.belongsToMany(images, { as: 'image_images_providers_images', through: providers_images, foreignKey: "id_provider", otherKey: "image" });
  stands.belongsToMany(guests, { as: 'id_guest_guests_starring_stands', through: starring_stands, foreignKey: "id_stand", otherKey: "id_guest" });
  stands.belongsToMany(images, { as: 'image_images_stands_images', through: stands_images, foreignKey: "id_stand", otherKey: "image" });
  users.belongsToMany(entries, { as: 'id_entry_entries', through: entries_rating, foreignKey: "id_user", otherKey: "id_entry" });
  users.belongsToMany(events, { as: 'id_event_events_events_ratings', through: events_rating, foreignKey: "id_user", otherKey: "id_event" });
  users.belongsToMany(products, { as: 'id_product_products', through: cart_lines, foreignKey: "id_user", otherKey: "id_product" });
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
  descriptions.belongsTo(events, { as: "id_event_event", foreignKey: "id_event"});
  events.hasMany(descriptions, { as: "descriptions", foreignKey: "id_event"});
  events_images.belongsTo(events, { as: "id_event_event", foreignKey: "id_event"});
  events.hasMany(events_images, { as: "events_images", foreignKey: "id_event"});
  events_rating.belongsTo(events, { as: "id_event_event", foreignKey: "id_event"});
  events.hasMany(events_rating, { as: "events_ratings", foreignKey: "id_event"});
  register_for.belongsTo(events, { as: "id_event_event", foreignKey: "id_event"});
  events.hasMany(register_for, { as: "register_fors", foreignKey: "id_event"});
  starring_events.belongsTo(events, { as: "id_event_event", foreignKey: "id_event"});
  events.hasMany(starring_events, { as: "starring_events", foreignKey: "id_event"});
  guests.belongsTo(guest_categories, { as: "id_guest_category_guest_category", foreignKey: "id_guest_category"});
  guest_categories.hasMany(guests, { as: "guests", foreignKey: "id_guest_category"});
  guests_images.belongsTo(guests, { as: "id_guest_guest", foreignKey: "id_guest"});
  guests.hasMany(guests_images, { as: "guests_images", foreignKey: "id_guest"});
  starring_events.belongsTo(guests, { as: "id_guest_guest", foreignKey: "id_guest"});
  guests.hasMany(starring_events, { as: "starring_events", foreignKey: "id_guest"});
  starring_stands.belongsTo(guests, { as: "id_guest_guest", foreignKey: "id_guest"});
  guests.hasMany(starring_stands, { as: "starring_stands", foreignKey: "id_guest"});
  equipments_images.belongsTo(images, { as: "image_image", foreignKey: "image"});
  images.hasMany(equipments_images, { as: "equipments_images", foreignKey: "image"});
  events_images.belongsTo(images, { as: "image_image", foreignKey: "image"});
  images.hasMany(events_images, { as: "events_images", foreignKey: "image"});
  guests_images.belongsTo(images, { as: "image_image", foreignKey: "image"});
  images.hasMany(guests_images, { as: "guests_images", foreignKey: "image"});
  products_images.belongsTo(images, { as: "image_image", foreignKey: "image"});
  images.hasMany(products_images, { as: "products_images", foreignKey: "image"});
  providers_images.belongsTo(images, { as: "image_image", foreignKey: "image"});
  images.hasMany(providers_images, { as: "providers_images", foreignKey: "image"});
  stands_images.belongsTo(images, { as: "image_image", foreignKey: "image"});
  images.hasMany(stands_images, { as: "stands_images", foreignKey: "image"});
  descriptions.belongsTo(languages, { as: "language_name_language", foreignKey: "language_name"});
  languages.hasMany(descriptions, { as: "descriptions", foreignKey: "language_name"});
  names.belongsTo(languages, { as: "language_name_language", foreignKey: "language_name"});
  languages.hasMany(names, { as: "names", foreignKey: "language_name"});
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
  names.belongsTo(products, { as: "id_product_product", foreignKey: "id_product"});
  products.hasMany(names, { as: "names", foreignKey: "id_product"});
  products_images.belongsTo(products, { as: "id_product_product", foreignKey: "id_product"});
  products.hasMany(products_images, { as: "products_images", foreignKey: "id_product"});
  descriptions.belongsTo(providers, { as: "id_provider_provider", foreignKey: "id_provider"});
  providers.hasMany(descriptions, { as: "descriptions", foreignKey: "id_provider"});
  providers_images.belongsTo(providers, { as: "id_provider_provider", foreignKey: "id_provider"});
  providers.hasMany(providers_images, { as: "providers_images", foreignKey: "id_provider"});
  stands.belongsTo(providers, { as: "id_provider_provider", foreignKey: "id_provider"});
  providers.hasMany(stands, { as: "stands", foreignKey: "id_provider"});
  users.belongsTo(roles, { as: "id_role_role", foreignKey: "id_role"});
  roles.hasMany(users, { as: "users", foreignKey: "id_role"});
  stands.belongsTo(stand_types, { as: "id_stand_type_stand_type", foreignKey: "id_stand_type"});
  stand_types.hasMany(stands, { as: "stands", foreignKey: "id_stand_type"});
  descriptions.belongsTo(stands, { as: "id_stand_stand", foreignKey: "id_stand"});
  stands.hasMany(descriptions, { as: "descriptions", foreignKey: "id_stand"});
  equipment_renting.belongsTo(stands, { as: "id_stand_stand", foreignKey: "id_stand"});
  stands.hasMany(equipment_renting, { as: "equipment_rentings", foreignKey: "id_stand"});
  products.belongsTo(stands, { as: "id_stand_stand", foreignKey: "id_stand"});
  stands.hasMany(products, { as: "products", foreignKey: "id_stand"});
  stands_images.belongsTo(stands, { as: "id_stand_stand", foreignKey: "id_stand"});
  stands.hasMany(stands_images, { as: "stands_images", foreignKey: "id_stand"});
  starring_stands.belongsTo(stands, { as: "id_stand_stand", foreignKey: "id_stand"});
  stands.hasMany(starring_stands, { as: "starring_stands", foreignKey: "id_stand"});
  tickets.belongsTo(ticket_types, { as: "id_ticket_type_ticket_type", foreignKey: "id_ticket_type"});
  ticket_types.hasMany(tickets, { as: "tickets", foreignKey: "id_ticket_type"});
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
  providers.belongsTo(users, { as: "uuid_user_user", foreignKey: "uuid_user"});
  users.hasOne(providers, { as: "provider", foreignKey: "uuid_user"});
  tickets.belongsTo(users, { as: "id_user_user", foreignKey: "id_user"});
  users.hasMany(tickets, { as: "tickets", foreignKey: "id_user"});

  return {
    cart_lines,
    descriptions,
    entries,
    entries_rating,
    equipment_renting,
    equipment_types,
    equipments,
    equipments_images,
    events,
    events_images,
    events_rating,
    guest_categories,
    guests,
    guests_images,
    images,
    items,
    languages,
    location_sizes,
    locations,
    names,
    order_types,
    orders,
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
    starring_events,
    starring_stands,
    ticket_types,
    tickets,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
