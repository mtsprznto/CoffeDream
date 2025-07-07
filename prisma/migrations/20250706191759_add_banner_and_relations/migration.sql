-- CreateTable
CREATE TABLE "BannerMessage" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "link" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "BannerMessage_pkey" PRIMARY KEY ("id")
);
