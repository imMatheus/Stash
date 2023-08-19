import { z } from 'zod';

const EnvSchema = z.object({
  DATABASE_URL: z.string(),
  JWT_SECRET: z.string(),
  JWT_TTL_IN_SECONDS: z.string(),
  PORT: z.number().gt(0),
});

export const config = () =>
  EnvSchema.parse({
    DATABASE_URL: process.env.DATABASE_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_TTL_IN_SECONDS: process.env.JWT_TTL_IN_SECONDS,
    PORT: Number(process.env.PORT),
  });
