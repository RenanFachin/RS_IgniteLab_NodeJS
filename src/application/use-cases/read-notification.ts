import { Injectable } from "@nestjs/common";
import { NotificationsRepository } from "../repositories/notifications-repositories";
import { NotificationNotFound } from "./errors/notificaion-not-found";

// Tipando a requisição
interface ReadNotificationRequest {
    notificationId: string;
}


// tipando como void a resposta do cancelamento
type ReadNotificationResponse = void


@Injectable()
export class ReadNotification {
    constructor(private notificationsRepository: NotificationsRepository) {}



    async execute(request: ReadNotificationRequest): Promise<ReadNotificationResponse> {
        const { notificationId } = request
    
        // Buscando a notificação do banco de dados
        const notification = await this.notificationsRepository.findById(notificationId)

        if(!notification){
            throw new NotificationNotFound()
        }

        notification.read()

        await this.notificationsRepository.save(notification)
    }
}