/*
  Warnings:

  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_m:m. A user has many tags` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_m:m. A user has many tags" DROP CONSTRAINT "_m:m. A user has many tags_A_fkey";

-- DropForeignKey
ALTER TABLE "_m:m. A user has many tags" DROP CONSTRAINT "_m:m. A user has many tags_B_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "tagCathGender" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "tagCathYouthStudentGroups" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "tagChurchStateRels" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "tagLocRegHist" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "tagMigrations" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "tagModernitySecSciences" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "tagMusArts" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "tagNationalism" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "tagOralHist" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "tagPressLitIntelHist" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "tagRightLeftWing" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "tagTransIntlHist" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "tagViolenceMilitancyMartyrdom" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "tagVisCulture" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "Tag";

-- DropTable
DROP TABLE "_m:m. A user has many tags";
