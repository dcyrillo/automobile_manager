import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Automomobile management')
    .setDescription('The automomobile management API description')
    .setContact(
      'Carlos Eduardo Magalhaes Cyrillo',
      'https://github.com/dcyrillo',
      'd.cyrillo@hotmail.com',
    )
    .setVersion('1.0.0')
    .addTag('automobiles')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);

  //  app.useGlobalPipes(new ValidationPipe());
}
bootstrap();
