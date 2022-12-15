import { Injectable } from "@nestjs/common";
import { NotificationsRepository } from "../repositories/notifications-repositories";

// Tipando a requisição
interface CountRecipientNotificationRequest {
    recipientId: string;
}


interface CountRecipientNotificationResponse {
    count: number;
}


@Injectable()
export class CountRecipientNotification {
    constructor(private notificationsRepository: NotificationsRepository) {}



    async execute(request: CountRecipientNotificationRequest): Promise<CountRecipientNotificationResponse> {
        const { recipientId } = request
    
        // Buscando a notificação do banco de dados
        const count = await this.notificationsRepository.countManyByRecipientId(recipientId)

        

        return {
            count
        }
    }
}