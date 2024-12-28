import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClassSerializerInterceptor, ValidationPipe, VersioningType } from '@nestjs/common';

import { MikroORM } from '@mikro-orm/core';
import mikroOrmConfig from 'mikro-orm.config';
import { TransformInterceptor } from './common/interceptor/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalValidationPipeline = new ValidationPipe();

  await MikroORM.init(mikroOrmConfig);
  
  app.useGlobalPipes(globalValidationPipeline);
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  app.useGlobalInterceptors(new TransformInterceptor());
  app.setGlobalPrefix('api/v1');

  app.enableVersioning({
    type: VersioningType.URI,
    prefix: 'v1',
  });

  await app.listen(5000);
}
bootstrap();
