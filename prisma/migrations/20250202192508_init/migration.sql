/*
  Warnings:

  - Added the required column `location` to the `Workshop` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Workshop" ADD COLUMN     "location" TEXT NOT NULL;
