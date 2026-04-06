<!-- ===================== DATABASE.SQL ===================== -->
CREATE DATABASE ecommerce;
USE ecommerce;

CREATE TABLE products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  price INT,
  image VARCHAR(255)
);

INSERT INTO products (name, price, image) VALUES
('Shoes', 1000, 'img/shoes.jpg'),
('Shirt', 500, 'img/shirt.jpg');
