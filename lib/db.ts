import { PrismaClient } from "@prisma/client";

// Avoid creating multiple instances of PrismaClient in serverless environments like Vercel
declare global {
  // This ensures that the PrismaClient is reused during development and doesn't create multiple instances
  var prisma: PrismaClient | undefined;
}

export const prismaClient =
  global.prisma ||
  new PrismaClient({
    log: ["query", "info", "warn", "error"], // Optional: Add logging for development and debugging
  });

if (process.env.NODE_ENV !== "production") global.prisma = prismaClient;
