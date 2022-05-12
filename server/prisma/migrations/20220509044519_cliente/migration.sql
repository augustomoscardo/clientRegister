/*
  Warnings:

  - You are about to drop the column `nascimento` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `clientes` table. All the data in the column will be lost.
  - Added the required column `birthday` to the `clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telephone` to the `clientes` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_clientes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "birthday" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL
);
INSERT INTO "new_clientes" ("email", "id", "name") SELECT "email", "id", "name" FROM "clientes";
DROP TABLE "clientes";
ALTER TABLE "new_clientes" RENAME TO "clientes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
