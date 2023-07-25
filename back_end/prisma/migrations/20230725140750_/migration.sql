-- CreateTable
   CREATE TABLE "clients" (
      "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
      "name" TEXT NOT NULL,
      "email" TEXT NOT NULL,
      "telephone" INTEGER NOT NULL,
      "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
   );

   -- CreateTable
   CREATE TABLE "contacts" (
      "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
      "name" TEXT NOT NULL,
      "email" TEXT NOT NULL,
      "telephone" INTEGER NOT NULL,
      "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "clientId" INTEGER,
      CONSTRAINT "contacts_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients" ("id") ON DELETE SET NULL ON UPDATE CASCADE
   );

   -- CreateIndex
   CREATE UNIQUE INDEX "clients_email_key" ON "clients"("email");

   -- CreateIndex
   CREATE UNIQUE INDEX "contacts_email_key" ON "contacts"("email");
