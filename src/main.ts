import { NestFactory } from '@nestjs/core';
import bodyParser from 'express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use();
  await app.listen(3000);
}
bootstrap();
