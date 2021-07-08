-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "jwt" TEXT,
    "localSessionPassword" TEXT,
    "preferSpanish" BOOLEAN DEFAULT false,
    "bio" TEXT,
    "location" TEXT,
    "university" TEXT,
    "credentials" TEXT,
    "status" TEXT,
    "profilePicUrl" TEXT,
    "linkAcademia" TEXT,
    "linkTwitter" TEXT,
    "linkLinkedIn" TEXT,
    "otherMedia" TEXT,
    "pub1" TEXT,
    "pub1desc" TEXT,
    "pub2" TEXT,
    "pub2desc" TEXT,
    "pub3" TEXT,
    "pub3desc" TEXT,
    "pub4" TEXT,
    "pub4desc" TEXT,
    "focusByTopic" TEXT,
    "focusByEra" TEXT
);
INSERT INTO "new_User" ("bio", "credentials", "email", "focusByEra", "focusByTopic", "id", "isAdmin", "jwt", "linkAcademia", "linkLinkedIn", "linkTwitter", "localSessionPassword", "location", "name", "otherMedia", "password", "preferSpanish", "profilePicUrl", "pub1", "pub1desc", "pub2", "pub2desc", "pub3", "pub3desc", "pub4", "pub4desc", "status", "university") SELECT "bio", "credentials", "email", "focusByEra", "focusByTopic", "id", "isAdmin", "jwt", "linkAcademia", "linkLinkedIn", "linkTwitter", "localSessionPassword", "location", "name", "otherMedia", "password", "preferSpanish", "profilePicUrl", "pub1", "pub1desc", "pub2", "pub2desc", "pub3", "pub3desc", "pub4", "pub4desc", "status", "university" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
