import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
  });
  export const getUserFromDb = async (email: string, hashedPassword: string) => {
    const user = await prisma.user.findUnique({
      where: { email },
    });
  
    if (user && bcrypt.compareSync(hashedPassword, user.password)) {
      return user;
    }
    return null;
  };
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;