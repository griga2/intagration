import { NestFactory } from '@nestjs/core';
const bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(bodyParser.xml());
  await app.listen(3000);
}
bootstrap();
