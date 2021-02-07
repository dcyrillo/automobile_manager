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
      `Carlos Eduardo Magalhães Cyrillo`,
      'https://github.com/dcyrillo',
      'd.cyrillo@hotmail.com',
    )
    .setVersion('1.0.0')
    .addTag('activities')
    .addTag('automobiles')
    .addTag('drivers')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);

  //  app.useGlobalPipes(new ValidationPipe());
}
bootstrap();
