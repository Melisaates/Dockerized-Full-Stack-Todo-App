import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 // Development için tüm origin’lere izin
  app.enableCors({
    origin: '*', // ya da frontend URL'nizi yazın: 'http://localhost:5173'
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  app.setGlobalPrefix('api'); // Tüm rotaların başına /api ekle

  await app.listen(3000);
}
bootstrap();
