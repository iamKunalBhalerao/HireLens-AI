/*
  Warnings:

  - Changed the type of `severity` on the `SkillGap` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Severity" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- AlterTable
ALTER TABLE "SkillGap" DROP COLUMN "severity",
ADD COLUMN     "severity" "Severity" NOT NULL;
