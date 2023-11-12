DROP TABLE IF EXISTS events_rating, entries_rating, register_for, cart_lines, items, starring_stands, starring_events, products, events, equipment_renting, equipments, orders, tickets, stands, guests, locations, equipment_types, entries, order_types, ticket_days, stand_types, guest_categories, providers, location_sizes, product_types, users;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users
(
    uuid_user uuid DEFAULT uuid_generate_v4(),
    email     VARCHAR(256),
    password  VARCHAR(256),
    role      INT,
    PRIMARY KEY (uuid_user)
);

CREATE TABLE product_types
(
    id_product_type INT,
    name            VARCHAR(50),
    PRIMARY KEY (id_product_type)
);

CREATE TABLE location_sizes
(
    id_location_size INT,
    name             VARCHAR(50),
    PRIMARY KEY (id_location_size)
);

CREATE TABLE providers
(
    id_provider INT,
    name        VARCHAR(100),
    id_user     uuid NOT NULL,
    PRIMARY KEY (id_provider),
    UNIQUE (id_user),
    FOREIGN KEY (id_user) REFERENCES users (uuid_user)
);

CREATE TABLE guest_categories
(
    id_guest_category INT,
    name              VARCHAR(50),
    PRIMARY KEY (id_guest_category)
);

CREATE TABLE stand_types
(
    id_stand_type INT,
    name          VARCHAR(50),
    PRIMARY KEY (id_stand_type)
);

CREATE TABLE ticket_days
(
    id_ticket_day INT,
    name          VARCHAR(50),
    price         DECIMAL(4, 2),
    PRIMARY KEY (id_ticket_day)
);

CREATE TABLE order_types
(
    id_order_type INT,
    name          VARCHAR(50),
    PRIMARY KEY (id_order_type)
);

CREATE TABLE entries
(
    id_entry INT,
    id_user  uuid NOT NULL,
    PRIMARY KEY (id_entry),
    FOREIGN KEY (id_user) REFERENCES users (uuid_user)
);

CREATE TABLE equipment_types
(
    id_equipment_type INT,
    name              VARCHAR(50),
    PRIMARY KEY (id_equipment_type)
);

CREATE TABLE locations
(
    id_location      INT,
    code             VARCHAR(3),
    id_location_size INT NOT NULL,
    PRIMARY KEY (id_location),
    FOREIGN KEY (id_location_size) REFERENCES location_sizes (id_location_size)
);

CREATE TABLE guests
(
    id_guest          INT,
    name              VARCHAR(100),
    id_guest_category INT NOT NULL,
    PRIMARY KEY (id_guest),
    FOREIGN KEY (id_guest_category) REFERENCES guest_categories (id_guest_category)
);

CREATE TABLE stands
(
    id_stand      INT,
    id_location   INT NOT NULL,
    id_provider   INT NOT NULL,
    id_stand_type INT NOT NULL,
    PRIMARY KEY (id_stand),
    UNIQUE (id_location),
    FOREIGN KEY (id_location) REFERENCES locations (id_location),
    FOREIGN KEY (id_provider) REFERENCES providers (id_provider),
    FOREIGN KEY (id_stand_type) REFERENCES stand_types (id_stand_type)
);

CREATE TABLE tickets
(
    id_ticket     INT,
    hash          VARCHAR(256) NOT NULL,
    email         VARCHAR(256),
    id_ticket_day INT          NOT NULL,
    id_user       uuid         NOT NULL,
    PRIMARY KEY (id_ticket),
    UNIQUE (hash),
    FOREIGN KEY (id_ticket_day) REFERENCES ticket_days (id_ticket_day),
    FOREIGN KEY (id_user) REFERENCES users (uuid_user)
);

CREATE TABLE orders
(
    id_order      INT,
    hash          VARCHAR(256),
    id_order_type INT  NOT NULL,
    id_user       uuid NOT NULL,
    PRIMARY KEY (id_order),
    UNIQUE (hash),
    FOREIGN KEY (id_order_type) REFERENCES order_types (id_order_type),
    FOREIGN KEY (id_user) REFERENCES users (uuid_user)
);

CREATE TABLE equipments
(
    id_equipment      INT,
    total_quantity    INT,
    name              VARCHAR(50),
    id_equipment_type INT NOT NULL,
    PRIMARY KEY (id_equipment),
    FOREIGN KEY (id_equipment_type) REFERENCES equipment_types (id_equipment_type)
);

CREATE TABLE equipment_renting
(
    id_equipment_rent INT,
    quantity          INT,
    rent_date         TIMESTAMP WITH TIME ZONE,
    return_date       TIMESTAMP WITH TIME ZONE,
    id_stand          INT NOT NULL,
    id_equipment      INT NOT NULL,
    PRIMARY KEY (id_equipment_rent),
    FOREIGN KEY (id_stand) REFERENCES stands (id_stand),
    FOREIGN KEY (id_equipment) REFERENCES equipments (id_equipment)
);

CREATE TABLE events
(
    id_event       INT,
    name           VARCHAR(50),
    max_capacity   INT,
    starting_time  TIMESTAMP WITH TIME ZONE,
    finishing_time TIMESTAMP WITH TIME ZONE,
    id_location    INT NOT NULL,
    PRIMARY KEY (id_event),
    FOREIGN KEY (id_location) REFERENCES locations (id_location)
);

CREATE TABLE products
(
    id_product      INT,
    name            VARCHAR(50),
    price           DECIMAL(6, 2),
    quantity        INT,
    id_stand        INT NOT NULL,
    id_product_type INT NOT NULL,
    PRIMARY KEY (id_product),
    FOREIGN KEY (id_stand) REFERENCES stands (id_stand),
    FOREIGN KEY (id_product_type) REFERENCES product_types (id_product_type)
);

CREATE TABLE starring_events
(
    id_event INT,
    id_guest INT,
    PRIMARY KEY (id_event, id_guest),
    FOREIGN KEY (id_event) REFERENCES events (id_event),
    FOREIGN KEY (id_guest) REFERENCES guests (id_guest)
);

CREATE TABLE starring_stands
(
    id_guest INT,
    id_stand INT,
    PRIMARY KEY (id_guest, id_stand),
    FOREIGN KEY (id_guest) REFERENCES guests (id_guest),
    FOREIGN KEY (id_stand) REFERENCES stands (id_stand)
);

CREATE TABLE items
(
    id_product INT,
    id_order   INT,
    quantity   INT,
    PRIMARY KEY (id_product, id_order),
    FOREIGN KEY (id_product) REFERENCES products (id_product),
    FOREIGN KEY (id_order) REFERENCES orders (id_order)
);

CREATE TABLE cart_lines
(
    id_user    uuid,
    id_product INT,
    quantity   INT,
    PRIMARY KEY (id_user, id_product),
    FOREIGN KEY (id_user) REFERENCES users (uuid_user),
    FOREIGN KEY (id_product) REFERENCES products (id_product)
);

CREATE TABLE register_for
(
    id_event INT,
    id_entry INT,
    PRIMARY KEY (id_event, id_entry),
    FOREIGN KEY (id_event) REFERENCES events (id_event),
    FOREIGN KEY (id_entry) REFERENCES entries (id_entry)
);

CREATE TABLE entries_rating
(
    id_user  uuid,
    id_entry INT,
    rate     INT,
    PRIMARY KEY (id_user, id_entry),
    FOREIGN KEY (id_user) REFERENCES users (uuid_user),
    FOREIGN KEY (id_entry) REFERENCES entries (id_entry)
);

CREATE TABLE events_rating
(
    id_user  uuid,
    id_event INT,
    rate     INT,
    PRIMARY KEY (id_user, id_event),
    FOREIGN KEY (id_user) REFERENCES users (uuid_user),
    FOREIGN KEY (id_event) REFERENCES events (id_event)
);