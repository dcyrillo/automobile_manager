import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const options = new DocumentBuilder()
    .setTitle('Automobile Management')
    .setDescription('The automobile management API description')
    .setContact(
      'Carlos Eduardo Magalhaes Cyrillo',
      'https://www.linkedin.com/in/carlos-eduardo-magalh%C3%A3es-cyrillo-a24ab216a/',
      'd.cyrillo@hotmail.com',
    )
    .setVersion('1.0.0')
    .addTag('automobiles')
    .build();

  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
