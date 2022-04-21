-- CreateEnum
CREATE TYPE "Category" AS ENUM ('HOODIES', 'JEANS', 'SHIRTS');

-- CreateTable
CREATE TABLE "Clothes" (
    "id" TEXT NOT NULL,
    "image" TEXT,
    "brand" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" "Category" NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Clothes_pkey" PRIMARY KEY ("id")
);
