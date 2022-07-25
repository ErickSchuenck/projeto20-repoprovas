/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `tests` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "tests_name_key" ON "tests"("name");
