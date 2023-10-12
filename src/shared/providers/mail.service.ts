import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  public async sendMail(
    sendTo: string,
    subject: string,
    context: any,
    template: string,
  ) {
    try {
      return this.mailerService.sendMail({
        to: sendTo,
        from: {
          address: process.env.EMAIL_ACCOUNT,
          name: process.env.EMAIL_FROM,
        },
        subject: subject,
        template: template,
        context: context,
      });
    } catch (e) {
      throw new HttpException(
        {
          error: true,
          data: null,
          message: 'Cannot send email',
          code: 0,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
