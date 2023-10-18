// email.module.ts

import { Module } from '@nestjs/common';
import { MailService } from './index';

@Module({
  providers: [MailService],
  exports: [MailService],
})
export class EmailModule {}
