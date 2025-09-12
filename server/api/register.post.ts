import { hash } from "bcryptjs";
import prisma from "../utils/db";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password, name } = body;

  if (!email || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: "Email and password are required",
    });
  }

  // Check if user already exists
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    throw createError({
      statusCode: 400,
      statusMessage: "User already exists",
    });
  }

  // Hash password
  const hashedPassword = await hash(password, 10);

  // Create user
  const user = await prisma.user.create({
    data: { email, password: hashedPassword, name },
  });

  return {
    success: true,
    user: { id: user.id, email: user.email, name: user.name },
  };
});
