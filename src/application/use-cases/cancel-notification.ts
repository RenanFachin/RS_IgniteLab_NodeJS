import { Injectable } from "@nestjs/common";
import { NotificationsRepository } from "../repositories/notifications-repositories";
import { NotificationNotFound } from "./errors/notificaion-not-found";

// Tipando a requisição
interface CancelNotificationRequest {
    notificationId: string;
}


// tipando como void a resposta do cancelamento
type CancelNotificationResponse = void


@Injectable()
export class CancelNotification {
    constructor(private notificationsRepository: NotificationsRepository) {}



    async execute(request: CancelNotificationRequest): Promise<CancelNotificationResponse> {
        const { notificationId } = request
    
        // Buscando a notificação do banco de dados
        const notification = await this.notificationsRepository.findById(notificationId)

        if(!notification){
            throw new NotificationNotFound()
        }

        notification.cancel()

        await this.notificationsRepository.save(notification)
    }
}