import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //habilita outros domínios a acessar o a API
  app.enableCors({
    origin: "*"
  });
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
