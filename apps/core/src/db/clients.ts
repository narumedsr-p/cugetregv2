import "dotenv/config";

import { PrismaPg } from "@prisma/adapter-pg";

import { env } from "../env.js";
import { PrismaClient } from "../generated/prisma/client.js";

const adapter = new PrismaPg({
  host: env.DB_HOST,
  user: env.DB_USER,
  password: env.DB_PASS,
  database: env.DB_NAME,
});

export const prisma = new PrismaClient({ adapter });
