import { Module } from '@nestjs/common';
import { AuthServie } from './auth.service';
import { AuthController } from './controller/index';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/modules/user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { STRATEGY_JWT_AUTH } from './constants/strategy.constant';
import { MailService } from 'src/shared/providers/mail.service';
import { EmailModule } from 'src/shared/providers/mail.module';

@Module({
  imports: [
    ConfigModule,
    PassportModule.register({ defaultStrategy: STRATEGY_JWT_AUTH }),
    UserModule,
    JwtModule.register({
      secret: 'your-secret-key',
      signOptions: { expiresIn: '1h' }
    }),
    EmailModule
    // JwtModule.registerAsync({
    //   useFactory: async (configService: ConfigService) => ({
    //     publicKey: configService.get<string>('jwt.publicKey'),
    //     privateKey: configService.get<string>('jwt.privateKey'),
    //     signOptions: {
    //       algorithm: 'RS256',
    //       issuer: 'AuthService',
    //       expiresIn: configService.get<string>('jwt.expiresIn'),
    //     },
    //   }),
    //   inject: [ConfigService],
    // }),
  ],
  controllers: [AuthController],
  providers: [AuthServie],
  exports: [AuthServie],
})
export class AuthModule { }