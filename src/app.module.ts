import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import Dbconfig from './config/dbconfig';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { APP_PIPE, RouterModule } from '@nestjs/core';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [Dbconfig]
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