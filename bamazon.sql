DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE IF NOT EXISTS bamazon_db;

USE bamazon_db;

CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT,
product_name TEXT,
department_name TEXT,
price DECIMAL (10,2),
stock_quantity INT,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Red Dead Redemption II", "Video Games", 59.99, 1290);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Echo Dot", "Electronics", 49.00, 52);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wobble Wag Giggle Ball", "Pet Supplies", 9.99, 250);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Anova Sous Vide Immersion Circulator", "Home", 129.99, 120);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("ACDelco Iridium Spark Plugs", "Automotive", 7.99, 1500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fallout 76", "Video Games", 59.99, 1342);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ring Wi-Fi Video Doorbell", "Electronics", 99.99, 237);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nylabone", "Pet Supplies", 3.99, 568);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lavatools Javelin Digital Meat Thermometer", "Home", 49.99, 23);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bosch Ceramic Brake Pads", "Automotive", 35.00, 1500);