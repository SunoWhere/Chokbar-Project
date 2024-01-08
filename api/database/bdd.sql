DROP TABLE IF EXISTS events_images,
    providers_images,
    stands_images,
    products_images,
    equipments_images,
    events_rating,
    entries_rating,
    register_for,
    cart_lines,
    order_lines,
    product_states,
    products,
    events,
    equipment_renting,
    equipments,
    order_states,
    orders,
    tickets,
    stands,
    locations,
    images,
    equipment_types,
    entries,
    ticket_types,
    stand_types,
    providers,
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
    FOREIGN KEY (uuid_user) REFERENCES users (uuid_user) ON DELETE SET NULL
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

CREATE TABLE entries
(
    id_entry  SERIAL,
    uuid_user uuid NOT NULL,
    PRIMARY KEY (id_entry),
    FOREIGN KEY (uuid_user) REFERENCES users (uuid_user)
);

CREATE TABLE equipment_types
(
    id_equipment_type SERIAL,
    name              VARCHAR(50),
    PRIMARY KEY (id_equipment_type)
);

CREATE TABLE images
(
    id_image SERIAL,
    image    VARCHAR(50),
    PRIMARY KEY (id_image)
);

CREATE TABLE locations
(
    id_location SERIAL,
    code        VARCHAR(3),
    PRIMARY KEY (id_location)
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
    FOREIGN KEY (id_location) REFERENCES locations (id_location) ON DELETE SET NULL,
    FOREIGN KEY (id_provider) REFERENCES providers (id_provider),
    FOREIGN KEY (id_stand_type) REFERENCES stand_types (id_stand_type) ON DELETE SET NULL
);

CREATE TABLE tickets
(
    id_ticket      SERIAL,
    hash           VARCHAR(256) NOT NULL,
    email          VARCHAR(256) NOT NULL,
    id_ticket_type INT          NOT NULL,
    uuid_user      uuid,
    PRIMARY KEY (id_ticket),
    UNIQUE (hash),
    FOREIGN KEY (id_ticket_type) REFERENCES ticket_types (id_ticket_type),
    FOREIGN KEY (uuid_user) REFERENCES users (uuid_user) ON DELETE SET NULL
);

CREATE TABLE order_states
(
    id_order_state serial,
    state          varchar(20),
    PRIMARY KEY (id_order_state)
);

CREATE TABLE orders
(
    id_order       SERIAL,
    hash           VARCHAR(256),
    id_stand       INT,
    uuid_user      uuid NOT NULL,
    id_order_state int,
    PRIMARY KEY (id_order),
    UNIQUE (hash),
    FOREIGN KEY (id_stand) REFERENCES stands (id_stand),
    FOREIGN KEY (uuid_user) REFERENCES users (uuid_user) ON DELETE SET NULL,
    FOREIGN KEY (id_order_state) REFERENCES order_states (id_order_state) ON DELETE SET NULL
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
    FOREIGN KEY (id_stand) REFERENCES stands (id_stand) ON DELETE CASCADE,
    FOREIGN KEY (id_equipment) REFERENCES equipments (id_equipment) ON DELETE CASCADE
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
    FOREIGN KEY (id_location) REFERENCES locations (id_location) ON DELETE SET NULL
);

CREATE TABLE product_states
(
    id_product_state serial,
    state            varchar(20),
    PRIMARY KEY (id_product_state)
);

CREATE TABLE products
(
    id_product       SERIAL,
    price            DECIMAL(6, 2),
    quantity         INT,
    id_stand         INT         NOT NULL,
    id_product_type  INT         NOT NULL,
    id_product_state INT,
    description_en   TEXT        NOT NULL,
    description_fr   TEXT        NOT NULL,
    name_en          VARCHAR(50) NOT NULL,
    name_fr          VARCHAR(50) NOT NULL,
    PRIMARY KEY (id_product),
    FOREIGN KEY (id_stand) REFERENCES stands (id_stand) ON DELETE SET NULL,
    FOREIGN KEY (id_product_type) REFERENCES product_types (id_product_type),
    FOREIGN KEY (id_product_state) REFERENCES product_states (id_product_state)
);

CREATE TABLE cart_lines
(
    uuid_user  uuid,
    id_product INT,
    quantity   INT,
    PRIMARY KEY (uuid_user, id_product),
    FOREIGN KEY (uuid_user) REFERENCES users (uuid_user),
    FOREIGN KEY (id_product) REFERENCES products (id_product) ON DELETE CASCADE
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
    uuid_user uuid,
    id_entry  INT,
    rate      INT,
    PRIMARY KEY (uuid_user, id_entry),
    FOREIGN KEY (uuid_user) REFERENCES users (uuid_user) ON DELETE SET NULL,
    FOREIGN KEY (id_entry) REFERENCES entries (id_entry) ON DELETE CASCADE
);

CREATE TABLE events_rating
(
    uuid_user uuid,
    id_event  INT,
    rate      INT,
    PRIMARY KEY (uuid_user, id_event),
    FOREIGN KEY (uuid_user) REFERENCES users (uuid_user) ON DELETE SET NULL,
    FOREIGN KEY (id_event) REFERENCES events (id_event) ON DELETE CASCADE
);

CREATE TABLE events_images
(
    id_event INT,
    id_image int,
    PRIMARY KEY (id_event, id_image),
    FOREIGN KEY (id_event) REFERENCES events (id_event) ON DELETE CASCADE,
    FOREIGN KEY (id_image) REFERENCES images (id_image) ON DELETE CASCADE
);

CREATE TABLE providers_images
(
    id_provider INT,
    id_image    INT,
    PRIMARY KEY (id_provider, id_image),
    FOREIGN KEY (id_provider) REFERENCES providers (id_provider) ON DELETE CASCADE,
    FOREIGN KEY (id_image) REFERENCES images (id_image) ON DELETE CASCADE
);

CREATE TABLE stands_images
(
    id_stand INT,
    id_image INT,
    PRIMARY KEY (id_stand, id_image),
    FOREIGN KEY (id_stand) REFERENCES stands (id_stand) ON DELETE CASCADE,
    FOREIGN KEY (id_image) REFERENCES images (id_image) ON DELETE CASCADE
);


CREATE TABLE products_images
(
    id_product INT,
    id_image   INT,
    PRIMARY KEY (id_product, id_image),
    FOREIGN KEY (id_product) REFERENCES products (id_product) ON DELETE CASCADE,
    FOREIGN KEY (id_image) REFERENCES images (id_image) ON DELETE CASCADE
);

CREATE TABLE equipments_images
(
    id_equipment INT,
    id_image     INT,
    PRIMARY KEY (id_equipment, id_image),
    FOREIGN KEY (id_equipment) REFERENCES equipments (id_equipment) ON DELETE CASCADE,
    FOREIGN KEY (id_image) REFERENCES images (id_image) ON DELETE CASCADE
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

INSERT INTO providers_images (id_provider, id_image)
SELECT p.id_provider, i.id_image
FROM providers p
         JOIN images i ON i.image = 'MSI_LOGO.png'
WHERE p.name LIKE 'provider';

INSERT INTO locations (code)
VALUES ('A12');