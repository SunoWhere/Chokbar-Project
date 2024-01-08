DROP TABLE IF EXISTS events_images,
    providers_images,
    stands_images,
    guests_images,
    products_images,
    equipments_images,
    events_rating,
    entries_rating,
    register_for,
    cart_lines,
    order_lines,
    starring_stands,
    starring_events,
    products,
    events,
    equipment_renting,
    equipments,
    orders,
    tickets,
    stands,
    guests,
    locations,
    images,
    equipment_types,
    entries,
    order_types,
    ticket_types,
    stand_types,
    guest_categories,
    providers,
    location_sizes,
    product_types,
    users,
    roles;

CREATE
    EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE roles
(
    id_role SERIAL,
    name    VARCHAR(50),
    PRIMARY KEY (id_role)
);


CREATE TABLE users
(
    uuid_user  uuid DEFAULT uuid_generate_v4(),
    email      VARCHAR(100) UNIQUE,
    password   VARCHAR(64),
    first_name VARCHAR(50),
    last_name  VARCHAR(50),
    id_role    INT NOT NULL,
    PRIMARY KEY (uuid_user),
    FOREIGN KEY (id_role) REFERENCES roles (id_role)
);

CREATE TABLE product_types
(
    id_product_type SERIAL,
    name            VARCHAR(50),
    PRIMARY KEY (id_product_type)
);

CREATE TABLE providers
(
    id_provider    SERIAL,
    name           VARCHAR(100),
    uuid_user      uuid NOT NULL,
    description_en TEXT NOT NULL,
    description_fr TEXT NOT NULL,
    PRIMARY KEY (id_provider),
    UNIQUE (uuid_user),
    FOREIGN KEY (uuid_user) REFERENCES users (uuid_user)
);

CREATE TABLE guest_categories
(
    id_guest_category SERIAL,
    name              VARCHAR(50),
    PRIMARY KEY (id_guest_category)
);

CREATE TABLE stand_types
(
    id_stand_type SERIAL,
    name          VARCHAR(50),
    PRIMARY KEY (id_stand_type)
);

CREATE TABLE ticket_types
(
    id_ticket_type SERIAL,
    name           VARCHAR(50),
    price          DECIMAL(4, 2),
    PRIMARY KEY (id_ticket_type)
);

CREATE TABLE order_types
(
    id_order_type SERIAL,
    name          VARCHAR(50),
    PRIMARY KEY (id_order_type)
);

CREATE TABLE entries
(
    id_entry SERIAL,
    id_user  uuid NOT NULL,
    PRIMARY KEY (id_entry),
    FOREIGN KEY (id_user) REFERENCES users (uuid_user)
);

CREATE TABLE equipment_types
(
    id_equipment_type SERIAL,
    name              VARCHAR(50),
    PRIMARY KEY (id_equipment_type)
);

CREATE TABLE images
(
    image VARCHAR(50),
    PRIMARY KEY (image)
);

CREATE TABLE locations
(
    id_location      SERIAL,
    code             VARCHAR(3),
    PRIMARY KEY (id_location)
);

CREATE TABLE guests
(
    id_guest          SERIAL,
    name              VARCHAR(100),
    id_guest_category INT NOT NULL,
    PRIMARY KEY (id_guest),
    FOREIGN KEY (id_guest_category) REFERENCES guest_categories (id_guest_category)
);

CREATE TABLE stands
(
    id_stand       SERIAL,
    id_location    INT          NOT NULL,
    id_provider    INT          NOT NULL,
    id_stand_type  INT          NOT NULL,
    name           VARCHAR(100) NOT NULL,
    description_en TEXT         NOT NULL,
    description_fr TEXT         NOT NULL,
    PRIMARY KEY (id_stand),
    UNIQUE (id_location),
    FOREIGN KEY (id_location) REFERENCES locations (id_location),
    FOREIGN KEY (id_provider) REFERENCES providers (id_provider),
    FOREIGN KEY (id_stand_type) REFERENCES stand_types (id_stand_type)
);

CREATE TABLE tickets
(
    id_ticket      SERIAL,
    hash           VARCHAR(256) NOT NULL,
    email          VARCHAR(256),
    id_ticket_type INT          NOT NULL,
    id_user        uuid         NOT NULL,
    PRIMARY KEY (id_ticket),
    UNIQUE (hash),
    FOREIGN KEY (id_ticket_type) REFERENCES ticket_types (id_ticket_type),
    FOREIGN KEY (id_user) REFERENCES users (uuid_user)
);

CREATE TABLE orders
(
    id_order      SERIAL,
    hash          VARCHAR(256),
    id_stand      INT,
    id_order_type INT  NOT NULL,
    id_user       uuid NOT NULL,
    PRIMARY KEY (id_order),
    UNIQUE (hash),
    FOREIGN KEY (id_stand) REFERENCES stand (id_stand),
    FOREIGN KEY (id_order_type) REFERENCES order_types (id_order_type),
    FOREIGN KEY (id_user) REFERENCES users (uuid_user)
);

CREATE TABLE equipments
(
    id_equipment      SERIAL,
    total_quantity    INT,
    name_en           VARCHAR(50) NOT NULL,
    name_fr           VARCHAR(50) NOT NULL,
    id_equipment_type INT         NOT NULL,
    PRIMARY KEY (id_equipment),
    FOREIGN KEY (id_equipment_type) REFERENCES equipment_types (id_equipment_type)
);

CREATE TABLE equipment_renting
(
    id_equipment_rent SERIAL,
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
    id_event       SERIAL,
    name           VARCHAR(50),
    max_capacity   INT,
    starting_time  TIMESTAMP WITH TIME ZONE,
    finishing_time TIMESTAMP WITH TIME ZONE,
    description_en TEXT NOT NULL,
    description_fr TEXT NOT NULL,
    id_location    INT  NOT NULL,
    PRIMARY KEY (id_event),
    FOREIGN KEY (id_location) REFERENCES locations (id_location)
);

CREATE TABLE products
(
    id_product      SERIAL,
    price           DECIMAL(6, 2),
    quantity        INT,
    id_stand        INT         NOT NULL,
    id_product_type INT         NOT NULL,
    description_en  TEXT        NOT NULL,
    description_fr  TEXT        NOT NULL,
    name_en         VARCHAR(50) NOT NULL,
    name_fr         VARCHAR(50) NOT NULL,
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

CREATE TABLE cart_lines
(
    id_user    uuid,
    id_product INT,
    quantity   INT,
    PRIMARY KEY (id_user, id_product),
    FOREIGN KEY (id_user) REFERENCES users (uuid_user),
    FOREIGN KEY (id_product) REFERENCES products (id_product)
);

CREATE TABLE order_lines
(
    id_order   INT,
    id_product INT,
    quantity   INT,
    PRIMARY KEY (id_order, id_product),
    FOREIGN KEY (id_order) REFERENCES orders (id_order),
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

CREATE TABLE events_images
(
    id_event INT,
    image    VARCHAR(50),
    PRIMARY KEY (id_event, image),
    FOREIGN KEY (id_event) REFERENCES events (id_event),
    FOREIGN KEY (image) REFERENCES images (image)
);

CREATE TABLE providers_images
(
    id_provider INT,
    image       VARCHAR(50),
    PRIMARY KEY (id_provider, image),
    FOREIGN KEY (id_provider) REFERENCES providers (id_provider),
    FOREIGN KEY (image) REFERENCES images (image)
);

CREATE TABLE stands_images
(
    id_stand INT,
    image    VARCHAR(50),
    PRIMARY KEY (id_stand, image),
    FOREIGN KEY (id_stand) REFERENCES stands (id_stand),
    FOREIGN KEY (image) REFERENCES images (image)
);

CREATE TABLE guests_images
(
    id_guest INT,
    image    VARCHAR(50),
    PRIMARY KEY (id_guest, image),
    FOREIGN KEY (id_guest) REFERENCES guests (id_guest),
    FOREIGN KEY (image) REFERENCES images (image)
);

CREATE TABLE products_images
(
    id_product INT,
    image      VARCHAR(50),
    PRIMARY KEY (id_product, image),
    FOREIGN KEY (id_product) REFERENCES products (id_product),
    FOREIGN KEY (image) REFERENCES images (image)
);

CREATE TABLE equipments_images
(
    id_equipment INT,
    image        VARCHAR(50),
    PRIMARY KEY (id_equipment, image),
    FOREIGN KEY (id_equipment) REFERENCES equipments (id_equipment),
    FOREIGN KEY (image) REFERENCES images (image)
);


INSERT INTO roles(name)
VALUES ('user'),
       ('provider'),
       ('admin');

INSERT INTO users(email, password, first_name, last_name, id_role)
VALUES ('admin@ezcon.fr', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'admin', 'admin', 3),
       ('MSI@ezcon.fr', '5c4c1964340aca5b65393bbe9d3249cdd71be26665b3320ad694f034f2743283', 'MSI', 'MSI',
        2),
       ('user@ezcon.fr', '04f8996da763b7a969b1028ee3007569eaf3a635486ddab211d512c85b9df8fb', 'user', 'user', 1);

INSERT INTO providers (name, uuid_user, description_en, description_fr)
SELECT 'MSI', uuid_user, 'MSI description in English', 'Description MSI en français'
FROM users
WHERE email = 'MSI@ezcon.fr';

INSERT INTO images (image)
VALUES ('MSI_LOGO.png');

INSERT INTO providers_images (image, id_provider)
SELECT 'MSI_LOGO.png', id_provider
FROM providers
WHERE name LIKE 'provider';