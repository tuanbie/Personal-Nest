import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { CommonModule } from '../common';
// import { HttpModule } from '@nestjs/axios';
import * as providers from './providers';
import { MailService } from './providers'
@Module({
  imports: [ConfigModule, MailService],
  providers: Object.values(providers),
  exports: [MailService]
})
export class SharedModule { }
