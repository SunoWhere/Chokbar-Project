DROP TABLE IF EXISTS events_images,
    providers_images,
    stands_images,
    products_images,
    events_rating,
    entries_rating,
    cart_lines,
    order_lines,
    product_states,
    products,
    events,
    order_states,
    orders,
    tickets,
    stands,
    locations,
    images,
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
    duration       INT NOT NULL,
    PRIMARY KEY (id_ticket_type)
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
    validated_at   timestamp WITH TIME ZONE,
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

CREATE TABLE entries
(
    id_entry  SERIAL,
    uuid_user uuid NOT NULL,
    id_event  INT  NOT NULL,
    PRIMARY KEY (id_entry),
    FOREIGN KEY (uuid_user) REFERENCES users (uuid_user),
    FOREIGN KEY (id_event) REFERENCES events (id_event)
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
    id_stand         INT,
    id_product_type  INT         NOT NULL,
    id_product_state INT         NOT NULL,
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
    price      DECIMAL(6, 2),
    quantity   INT,
    PRIMARY KEY (id_order, id_product),
    FOREIGN KEY (id_order) REFERENCES orders (id_order),
    FOREIGN KEY (id_product) REFERENCES products (id_product)
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

INSERT INTO roles(name)
VALUES ('user'),
       ('provider'),
       ('admin');

INSERT INTO ticket_types(name, price, duration)
VALUES ('visitore', 10, 1),
       ('regular', 25, 3),
       ('addict', 45, 5);

INSERT INTO product_types(name)
VALUES ('Game'),
       ('Food'),
       ('Drinks'),
       ('Hardware'),
       ('Goodies');

INSERT INTO order_states(state)
VALUES ('Waiting'),
       ('Validated'),
       ('Retrieved');

INSERT INTO product_states(state)
VALUES ('Available'),
       ('Not available');

INSERT INTO users(email, password, first_name, last_name, id_role)
VALUES ('admin@ezcon.fr', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'admin', 'admin', 3),
       ('MSI@ezcon.fr', '5c4c1964340aca5b65393bbe9d3249cdd71be26665b3320ad694f034f2743283', 'MSI', 'MSI', 2),
       ('Asus@ezcon.fr', '5c4c1964340aca5b65393bbe9d3249cdd71be26665b3320ad694f034f2743283', 'Asus', 'Asus', 2),
       ('KFC@ezcon.fr', '5c4c1964340aca5b65393bbe9d3249cdd71be26665b3320ad694f034f2743283', 'KFC', 'KFC', 2),
       ('user@ezcon.fr', '04f8996da763b7a969b1028ee3007569eaf3a635486ddab211d512c85b9df8fb', 'user', 'user', 1),
       ('user2@ezcon.fr', '04f8996da763b7a969b1028ee3007569eaf3a635486ddab211d512c85b9df8fb', 'user2', 'user2', 1);

INSERT INTO providers (name, uuid_user, description_en, description_fr)
SELECT 'MSI', uuid_user, 'MSI description in English', 'Description MSI en français'
FROM users
WHERE email = 'MSI@ezcon.fr';

INSERT INTO providers (name, uuid_user, description_en, description_fr)
SELECT 'Asus', uuid_user, 'Asus description in English', 'Description Asus en français'
FROM users
WHERE email = 'Asus@ezcon.fr';

INSERT INTO providers (name, uuid_user, description_en, description_fr)
SELECT 'KFC', uuid_user, 'KFC description in English', 'Description KFC en français'
FROM users
WHERE email = 'KFC@ezcon.fr';

INSERT INTO images (image)
VALUES ('MSI_LOGO.png'),
       ('MSI_LOGO.png');

INSERT INTO providers_images (id_provider, id_image)
SELECT p.id_provider, i.id_image
FROM providers p
         JOIN images i ON i.image = 'MSI_LOGO.png'
WHERE p.name LIKE 'MSI';

INSERT INTO locations (code)
VALUES ('A01'),
       ('A02'),
       ('A03'),
       ('A04'),
       ('A05'),
       ('A06'),
       ('A07'),
       ('A08'),
       ('B01'),
       ('B02'),
       ('B03'),
       ('B04'),
       ('B05'),
       ('B06'),
       ('B07'),
       ('C01'),
       ('C02'),
       ('C03'),
       ('C04'),
       ('C05'),
       ('C06'),
       ('C07'),
       ('C08'),
       ('D01'),
       ('D02'),
       ('D03'),
       ('S01'),
       ('S02'),
       ('S03');

INSERT INTO stand_types (name)
VALUES ('Goods selling'),
       ('Catering'),
       ('Demo'),
       ('Autograph');

INSERT INTO stands (id_location, id_provider, id_stand_type, name, description_en, description_fr)
VALUES (1, 1, 1, 'MSI Shop', 'Buy some MSI stuff', 'Acheter des produits MSI'),
       (2, 1, 3, 'MSI Demo Center', 'Test some MSI stuff', 'Essayer des produits MSI'),
       (3, 1, 4, 'MSI & Squeezie', 'Meet Squeezie', 'Rencontrer Squeezie'),
       (4, 2, 1, 'Asus Shop', 'Buy some Asus stuff', 'Acheter des produits Asus'),
       (5, 2, 3, 'Asus Shop', 'Test some Asus stuff', 'Essayer des produits Asus'),
       (6, 3, 2, 'KFC Fast Food', E'It\'s finger lickin\' good', E'C\'est bon à s\'en lêcher les doigts'),
       (7, 3, 1, 'KFC Goodies Shop', 'Buy some KFC stuff', 'Acheter des produits KFC');


-- Event 1
INSERT INTO events (name, max_capacity, starting_time, finishing_time, description_en, description_fr, id_location)
VALUES ('Event 1', 85, '2024-01-09 12:00:00+01', '2024-01-09 13:00:00+01', 'Random English Description 1',
        'Description Française Aléatoire 1', 1),
       ('Event 2', 50, '2024-01-09 15:30:00+01', '2024-01-09 16:30:00+01', 'Random English Description 2',
        'Description Française Aléatoire 2', 1),
       ('Event 3', 75, '2024-01-09 18:45:00+01', '2024-01-09 19:45:00+01', 'Random English Description 3',
        'Description Française Aléatoire 3', 1),
       ('Event 4', 40, '2024-01-09 21:15:00+01', '2024-01-09 22:15:00+01', 'Random English Description 4',
        'Description Française Aléatoire 4', 1),
       ('Event 5', 20, '2024-01-09 23:00:00+01', '2024-01-10 00:00:00+01', 'Random English Description 5',
        'Description Française Aléatoire 5', 1),
       ('Event 6', 60, '2024-01-10 02:30:00+01', '2024-01-10 03:30:00+01', 'Random English Description 6',
        'Description Française Aléatoire 6', 2),
       ('Event 7', 35, '2024-01-10 05:45:00+01', '2024-01-10 06:45:00+01', 'Random English Description 7',
        'Description Française Aléatoire 7', 2),
       ('Event 8', 95, '2024-01-10 08:15:00+01', '2024-01-10 09:15:00+01', 'Random English Description 8',
        'Description Française Aléatoire 8', 2),
       ('Event 9', 55, '2024-01-10 10:30:00+01', '2024-01-10 11:30:00+01', 'Random English Description 9',
        'Description Française Aléatoire 9', 2),
       ('Event 10', 80, '2024-01-10 13:00:00+01', '2024-01-10 14:00:00+01', 'Random English Description 10',
        'Description Française Aléatoire 10', 2);

INSERT INTO events_images (id_event, id_image)
VALUES (1, 1),
       (2, 1),
       (3, 1),
       (1, 2),
       (2, 2),
       (3, 2);

INSERT INTO products (price, quantity, id_stand, id_product_type, id_product_state, description_en, description_fr,
                      name_en, name_fr)
VALUES (19.99, 500, 1, 3, 1, 'English description 1', 'Description française 1', 'Product Name 1 (EN)',
        'Nom du produit 1 (FR)'),
       (29.99, 500, 2, 2, 2, 'English description 2', 'Description française 2', 'Product Name 2 (EN)',
        'Nom du produit 2 (FR)'),
       (24.50, 500, 4, 1, 1, 'English description 3', 'Description française 3', 'Product Name 3 (EN)',
        'Nom du produit 3 (FR)'),
       (15.75, 500, 6, 3, 2, 'English description 4', 'Description française 4', 'Product Name 4 (EN)',
        'Nom du produit 4 (FR)'),
       (39.99, 500, 3, 4, 1, 'English description 5', 'Description française 5', 'Product Name 5 (EN)',
        'Nom du produit 5 (FR)'),
       (12.49, 500, 5, 2, 2, 'English description 6', 'Description française 6', 'Product Name 6 (EN)',
        'Nom du produit 6 (FR)'),
       (49.99, 500, 1, 1, 1, 'English description 7', 'Description française 7', 'Product Name 7 (EN)',
        'Nom du produit 7 (FR)'),
       (29.75, 500, 7, 4, 2, 'English description 8', 'Description française 8', 'Product Name 8 (EN)',
        'Nom du produit 8 (FR)'),
       (18.25, 500, 2, 1, 1, 'English description 9', 'Description française 9', 'Product Name 9 (EN)',
        'Nom du produit 9 (FR)'),
       (34.99, 500, 4, 3, 2, 'English description 10', 'Description française 10', 'Product Name 10 (EN)',
        'Nom du produit 10 (FR)'),
       (21.99, 500, 3, 1, 2, 'English description 11', 'Description française 11', 'Product Name 11 (EN)',
        'Nom du produit 11 (FR)'),
       (32.50, 500, 5, 2, 1, 'English description 12', 'Description française 12', 'Product Name 12 (EN)',
        'Nom du produit 12 (FR)'),
       (18.75, 500, 7, 3, 2, 'English description 13', 'Description française 13', 'Product Name 13 (EN)',
        'Nom du produit 13 (FR)'),
       (14.99, 500, 2, 4, 1, 'English description 14', 'Description française 14', 'Product Name 14 (EN)',
        'Nom du produit 14 (FR)'),
       (41.99, 500, 4, 1, 2, 'English description 15', 'Description française 15', 'Product Name 15 (EN)',
        'Nom du produit 15 (FR)'),
       (13.49, 500, 6, 2, 1, 'English description 16', 'Description française 16', 'Product Name 16 (EN)',
        'Nom du produit 16 (FR)'),
       (47.99, 500, 1, 3, 2, 'English description 17', 'Description française 17', 'Product Name 17 (EN)',
        'Nom du produit 17 (FR)'),
       (28.75, 500, 3, 4, 1, 'English description 18', 'Description française 18', 'Product Name 18 (EN)',
        'Nom du produit 18 (FR)'),
       (17.25, 500, 5, 1, 2, 'English description 19', 'Description française 19', 'Product Name 19 (EN)',
        'Nom du produit 19 (FR)'),
       (33.99, 500, 2, 2, 1, 'English description 20', 'Description française 20', 'Product Name 20 (EN)',
        'Nom du produit 20 (FR)'),
       (24.50, 500, 4, 3, 2, 'English description 21', 'Description française 21', 'Product Name 21 (EN)',
        'Nom du produit 21 (FR)'),
       (15.75, 500, 6, 4, 1, 'English description 22', 'Description française 22', 'Product Name 22 (EN)',
        'Nom du produit 22 (FR)'),
       (39.99, 500, 3, 1, 2, 'English description 23', 'Description française 23', 'Product Name 23 (EN)',
        'Nom du produit 23 (FR)'),
       (12.49, 500, 5, 2, 1, 'English description 24', 'Description française 24', 'Product Name 24 (EN)',
        'Nom du produit 24 (FR)'),
       (49.99, 500, 1, 3, 2, 'English description 25', 'Description française 25', 'Product Name 25 (EN)',
        'Nom du produit 25 (FR)'),
       (29.75, 500, 7, 4, 1, 'English description 26', 'Description française 26', 'Product Name 26 (EN)',
        'Nom du produit 26 (FR)'),
       (18.25, 500, 2, 1, 2, 'English description 27', 'Description française 27', 'Product Name 27 (EN)',
        'Nom du produit 27 (FR)'),
       (34.99, 500, 4, 3, 1, 'English description 28', 'Description française 28', 'Product Name 28 (EN)',
        'Nom du produit 28 (FR)'),
       (22.50, 500, 6, 2, 2, 'English description 29', 'Description française 29', 'Product Name 29 (EN)',
        'Nom du produit 29 (FR)'),
       (14.99, 500, 3, 1, 1, 'English description 30', 'Description française 30', 'Product Name 30 (EN)',
        'Nom du produit 30 (FR)'),
       (22.50, 500, 6, 2, 1, 'English description 31', 'Description française 31', 'Product Name 31 (EN)',
        'Nom du produit 31 (FR)'),
       (14.99, 500, 3, 1, 2, 'English description 32', 'Description française 32', 'Product Name 32 (EN)',
        'Nom du produit 32 (FR)'),
       (37.25, 500, 5, 4, 1, 'English description 33', 'Description française 33', 'Product Name 33 (EN)',
        'Nom du produit 33 (FR)'),
       (19.99, 500, 2, 3, 2, 'English description 34', 'Description française 34', 'Product Name 34 (EN)',
        'Nom du produit 34 (FR)'),
       (44.50, 500, 7, 1, 1, 'English description 35', 'Description française 35', 'Product Name 35 (EN)',
        'Nom du produit 35 (FR)'),
       (27.75, 500, 1, 2, 2, 'English description 36', 'Description française 36', 'Product Name 36 (EN)',
        'Nom du produit 36 (FR)'),
       (16.25, 500, 4, 4, 1, 'English description 37', 'Description française 37', 'Product Name 37 (EN)',
        'Nom du produit 37 (FR)'),
       (32.99, 500, 6, 1, 2, 'English description 38', 'Description française 38', 'Product Name 38 (EN)',
        'Nom du produit 38 (FR)'),
       (14.99, 500, 5, 1, 1, 'English description 39', 'Description française 39', 'Product Name 39 (EN)',
        'Nom du produit 39 (FR)'),
       (44.99, 500, 3, 4, 2, 'English description 40', 'Description française 40', 'Product Name 40 (EN)',
        'Nom du produit 40 (FR)');
