DROP DATABASE IF EXISTS `prueba`;
CREATE DATABASE `prueba`; 

USE `prueba`;

CREATE TABLE items(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(50) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    stock INT NOT NULL
);

INSERT INTO items VALUES(1, 'Fideos', 'Harina', 20);
INSERT INTO items VALUES(2, 'Leche', 'Lacteos', 30);
INSERT INTO items VALUES(3, 'Crema', 'Lacteos', 15);

SELECT * FROM items;

DELETE FROM items WHERE id=1;

UPDATE items SET id=45 WHERE id=2;

SELECT * FROM items;