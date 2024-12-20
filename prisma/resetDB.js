require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function run() {
  await prisma.$executeRawUnsafe("DROP dbmspizza");
  await prisma.$executeRawUnsafe("CREATE Database dbmspizza");
}
console.log("Reset DB..");
run();
