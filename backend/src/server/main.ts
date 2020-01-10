import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { ValidationExceptionFilter } from './common/exceptions/validationException.filter';
import { validationPipeExceptionFactory } from './common/exceptions';

const DEFAULT_PORT = 5000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  configure(app);
  await app.listen(process.env.NODE_PORT || DEFAULT_PORT);
}
bootstrap();

export function configure(app: INestApplication) {
  app.useGlobalFilters(new ValidationExceptionFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      exceptionFactory: validationPipeExceptionFactory,
    }),
  );
}
