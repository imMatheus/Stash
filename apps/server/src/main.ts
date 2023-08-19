import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvSchema } from './env';
import { config } from 'dotenv';
import { join } from 'path';
import { z } from 'zod';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  await app.listen(port);
}
bootstrap();
