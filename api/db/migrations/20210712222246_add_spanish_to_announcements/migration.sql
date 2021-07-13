/*
  Warnings:

  - You are about to drop the column `headline` on the `Announcement` table. All the data in the column will be lost.
  - You are about to drop the column `subheadline` on the `Announcement` table. All the data in the column will be lost.
  - Added the required column `englishHeadline` to the `Announcement` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Announcement" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "englishHeadline" TEXT NOT NULL,
    "englishSubheadline" TEXT,
    "spanishHeadline" TEXT,
    "date" TEXT
);
INSERT INTO "new_Announcement" ("date", "id") SELECT "date", "id" FROM "Announcement";
DROP TABLE "Announcement";
ALTER TABLE "new_Announcement" RENAME TO "Announcement";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
