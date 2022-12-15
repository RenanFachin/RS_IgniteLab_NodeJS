import { Injectable } from "@nestjs/common";
import { NotificationsRepository } from "../repositories/notifications-repositories";
import { NotificationNotFound } from "./errors/notificaion-not-found";

// Tipando a requisição
interface UnreadNotificationRequest {
    notificationId: string;
}


// tipando como void a resposta do cancelamento
type UnreadNotificationResponse = void


@Injectable()
export class UnreadNotification {
    constructor(private notificationsRepository: NotificationsRepository) {}



    async execute(request: UnreadNotificationRequest): Promise<UnreadNotificationResponse> {
        const { notificationId } = request
    
        // Buscando a notificação do banco de dados
        const notification = await this.notificationsRepository.findById(notificationId)

        if(!notification){
            throw new NotificationNotFound()
        }

        notification.unread()

        await this.notificationsRepository.save(notification)
    }
}