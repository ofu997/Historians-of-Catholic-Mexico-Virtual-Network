-- AlterTable
ALTER TABLE "User" ADD COLUMN     "tagClergy" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "tagDevotions" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "tagLiturgy" BOOLEAN NOT NULL DEFAULT false;
