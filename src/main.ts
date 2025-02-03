import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true);

  app.enableCors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    allowedHeaders: [
      'Accept',
      'Authorization',
      'Content-Type',
      'X-Requested-With',
      'apollo-require-preflight',
    ],
  });

  await app.listen(process.env.PORT || 4000);
}
bootstrap();
