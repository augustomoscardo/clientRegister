DROP DATABASE IF EXISTS clientes;
CREATE DATABASE clientes;

-- Create table clientes
CREATE TABLE "clientes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "birthday" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL
);

-- List All
SELECT * FROM "clientes" 
WHERE 1=1 
ORDER BY "clientes"."name" ASC 
LIMIT "$1"
OFFSET "$2"

-- List One
SELECT * FROM "clientes" 
WHERE "clientes"."id" = "$1"

--Create
INSERT INTO "clientes" 
("id", "name", "birthday", "email", "telephone") 
VALUES ("$1","$2","$3","$4","$5") 
RETURNING "id"

--Edit
UPDATE "clientes" SET "name" = "$1", "birthday" = "$2", 
"email" = "$3", "telephone" = "$4" WHERE "clientes"."id" = "$5"  

-- Delete
DELETE FROM "clientes" WHERE "clientes"."id" = "$1"