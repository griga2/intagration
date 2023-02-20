import { NestFactory } from '@nestjs/core';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bodyParser = require('body-parser');
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('body-parser-xml')(bodyParser);
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(bodyParser.xml());
  await app.listen(3000);
}
bootstrap();
