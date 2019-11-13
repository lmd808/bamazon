DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon; 

CREATE TABLE products(
item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(200) NOT NULL,
department_name VARCHAR(200) NOT NULL,
price DECIMAL (10,2) NOT NULL, 
stock_quantity INTEGER(4) NOT null, 
primary key(item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Purple Wig', 'Accessories', 34.95, 200 );
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Mens Blue Shirt', 'Clothing', 24.95, 600 );
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('OPI Nail Polish- Vulture Red', 'Makeup', 11.19, 3000 );
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('bamazon Basics Desk Tape', 'Office Supplies', 5.05, 50000 );
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('The Novel of Lust and Famine', 'Bindle Books', 21.95, 900 );
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Danny DeVito Cutout (Life Size)', 'Adult Entertainment', 79.60, 1200);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Bible', 'Bindle Books', 12.95, 60000 );
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Goth Bedding', 'Home Accessories', 101.17, 400 );
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Black Choker Collar', 'Jewlery', 9.19, 30000 );
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('The Nightmare Before Christmas', 'Movies', 14.95, 1000 );
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('50lb Weight Set', 'Fitness', 57.19, 200 );
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Human Soul', 'Occult', 6666666.66, 66 );
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Hand Warmers (Pack of 10)', 'Clothing', 12.95, 78000 );
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Grey Wig', 'Accessories', 34.95, 6000 );
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('How to Whip Someone with Your Words', 'Movies', 5.95, 40000 );
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Eat, Pray,Love', 'Bindle Books', 34.95, 700 );