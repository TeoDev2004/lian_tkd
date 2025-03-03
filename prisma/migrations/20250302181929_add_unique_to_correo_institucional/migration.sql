/*
  Warnings:

  - A unique constraint covering the columns `[correo_institucional]` on the table `Club` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Club_correo_institucional_key" ON "Club"("correo_institucional");
