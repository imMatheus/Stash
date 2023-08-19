import { z } from 'zod';

export const EnvSchema = z.object({
  DATABASE_URL: z.string(),
  JWT_SECRET: z.string(),
  PORT: z.number(),
});
