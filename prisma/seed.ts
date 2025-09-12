import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("vaheMk123", 12);

  const user = await prisma.user.create({
    data: {
      email: "vahemikayelyan@gmail.com",
      password: hashedPassword,
      name: "Test User",
    },
  });

  console.log("User created:", user);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
