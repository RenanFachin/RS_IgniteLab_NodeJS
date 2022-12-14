import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';

import { randomUUID } from 'node:crypto'
import { CreateNotificationBody } from './create-notification-body';


@Controller('notifications') 
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    // @Body é o decorator
    // body é uma variável que vai armazenar os dados recebidos pelo body da requisição
    const { recipientId, content, category } = body

    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId
      }
    });
  }
}
