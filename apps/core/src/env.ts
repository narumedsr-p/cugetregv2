import "dotenv/config";

import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    DB_HOST: z.string().default("localhost"),
    DB_USER: z.string().min(1),
    DB_PASS: z.string().min(1),
    DB_NAME: z.string().default("cugetregv2"),
    JWT_SECRET: z.string().min(8),
    GOOGLE_CLIENT_ID: z.string().min(1),
    GOOGLE_CLIENT_SECRET: z.string().min(1),
    APP_MODE: z.enum(["dev", "prod", "beta"]).default("dev"),
    BETTER_AUTH_SECRET: z.string().min(1),
    BETTER_AUTH_URL: z.string().min(1),
    BETTER_AUTH_TRUSTED_ORIGINS: z.string().optional(),
  },
  runtimeEnv: process.env,
});
