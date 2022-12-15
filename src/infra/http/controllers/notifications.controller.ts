import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { SendNotification } from '@application/use-cases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { NotificationViewModel } from '../view-models/notification-view-model';
import { CancelNotification } from '@application/use-cases/cancel-notification';
import { ReadNotification } from '@application/use-cases/read-notification';
import { UnreadNotification } from '@application/use-cases/unread-notification';
import { CountRecipientNotification } from '@application/use-cases/count-recipient-notification';
import { GetRecipientNotification } from '@application/use-cases/get-recipient-notification';


@Controller('notifications')
export class NotificationsController {

  constructor(
    private sendNotification: SendNotification,
    private cancelNotification: CancelNotification,
    private readNotification: ReadNotification,
    private unreadNotification: UnreadNotification,
    private countRecipientNotification: CountRecipientNotification,
    private getRecipientNotification: GetRecipientNotification
  ){}

    @Patch(':id/cancel')
    async cancel(@Param('id') id: string) {
        await this.cancelNotification.execute({
          notificationId: id
        })
      }

    @Get('count/from/:recipientId')
    async countFromRecipient(@Param('recipientId') recipientId: string){
      const { count } = await this.countRecipientNotification.execute({
        recipientId,
      })

      return {
        count
      }
    }


    @Get('from/:recipientId')
    async getFromRecipient(@Param('recipientId') recipientId: string) {
      const { notifications } = await this.getRecipientNotification.execute({
        recipientId,
      })

      return {
        notifications: notifications.map(NotificationViewModel.toHTTP)
      }
    }

    @Patch(':id/read')
    async read(@Param('id') id: string) {
        await this.readNotification.execute({
          notificationId: id
        })
    }
  
    @Patch(':id/unread')
    async unread(@Param('id') id: string) {
        await this.unreadNotification.execute({
          notificationId: id
        })
    }

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

    return { 
      notification: NotificationViewModel.toHTTP(notification)
    }
  }
}
function Path() {
  throw new Error('Function not implemented.');
}

