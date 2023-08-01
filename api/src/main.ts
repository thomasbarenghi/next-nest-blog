import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import { MongoStoreFactory } from 'connect-mongodb-session';
const MongoDBStore = require("connect-mongodb-session")(session);
import * as dotenv from 'dotenv';
async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'debug', 'log', 'verbose'],
  });

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept',
  });

  app.use(
    session({
      secret: 'your-secret-key',
      resave: false,
      saveUninitialized: false,
      store: MongoDBStore({
        // Configuración para la conexión a la base de datos MongoDB
        collection: 'sessions',
        uri: process.env.MONGO_URI,
      }),
    }),
  );

  app.use(passport.initialize());
  //app.use(passport.session());

  await app.listen(3001);
}
bootstrap();
