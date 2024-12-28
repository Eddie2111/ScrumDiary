import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';

import { MikroORM } from '@mikro-orm/core';
import mikroOrmConfig from 'mikro-orm.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalValidationPipeline = new ValidationPipe();

  await MikroORM.init(mikroOrmConfig);
  
  app.useGlobalPipes(globalValidationPipeline);
  app.setGlobalPrefix('api/v1');

  app.enableVersioning({
    type: VersioningType.URI,
    prefix: 'v1',
  });

  await app.listen(5000);
}
bootstrap();
