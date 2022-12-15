import { Body, Controller, Get, Post } from '@nestjs/common';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';


@Controller('notifications')
export class NotificationsController {

  constructor(
    private sendNotification: SendNotification
  ){}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    // @Body é o decorator
    // body é uma variável que vai armazenar os dados recebidos pelo body da requisição
    const { recipientId, content, category } = body

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category
    })

    return { notification }
  }
}
