-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
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
    "focusByEra" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Announcement" (
    "id" SERIAL NOT NULL,
    "englishHeadline" TEXT NOT NULL,
    "englishSubheadline" TEXT,
    "spanishHeadline" TEXT,
    "spanishSubheadline" TEXT,
    "date" TEXT,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");
