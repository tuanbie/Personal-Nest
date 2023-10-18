import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import Dbconfig from './config/dbconfig';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { APP_PIPE, RouterModule } from '@nestjs/core';
import { MailerModule } from '@nestjs-modules/mailer';
import { dirname, join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [Dbconfig]
  }),
  MailerModule.forRoot({
    transport: {
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      requireTLS: true,
      secure: false,
      auth: {
        user: process.env.EMAIL_ACCOUNT,
        pass: process.env.EMAIL_PASSWORD,
      },
      logger: true,
    },
    template: {
      dir: join(__dirname,'./shared/templates'),
      adapter: new HandlebarsAdapter(),
      options: {
        strict: true,
      },
    },
  }),
  TypeOrmModule.forRootAsync({
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => (configService.get('typeorm'))
  }),
  RouterModule.register([
    {
      path: 'auth',
      module: AuthModule,
    },
    {
      path: 'user',
      module: UserModule,
    },
  ]),
    UserModule,
    AuthModule
  ],
  providers: [
    UserModule
    //check middleware
    // {
    //   provide: APP_PIPE,
    //   useValue: new ValidationPipe(
    //     {
    //       // disableErrorMessages: true,
    //       transform: true, // transform object to DTO class
    //       whitelist: true,
    //     }
    //   ),
    // },
  ],
})
export class AppModule { }