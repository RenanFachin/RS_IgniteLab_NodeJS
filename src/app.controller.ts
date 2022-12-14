import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MailService } from './mail/mail.service';

/* 
    /app/hello 
*/
@Controller('app') // app será o endereço da rota
export class AppController {
  constructor(private readonly mailService: MailService) {}

  @Get('hello') // hello será o endereço da rota
  getHello(): string {
    return this.mailService.sendEmail();
  }
}
