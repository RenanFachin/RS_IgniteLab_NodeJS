import { Notification } from "../entities/notification";
import { Content } from "../entities/notification-content";

// Tipando a requisição
interface SendNotificationRequest {
    recipientId: string;
    content: string;
    category: string;
}


// Tipando a responsta
interface SendNotificationResponse {
    notification: Notification;
}

export class SendNotification {
    async execute(request: SendNotificationRequest): Promise<SendNotificationResponse> {
        const { recipientId, content, category } = request
    
        const notification = new Notification({
            recipientId,
            content: new Content(content),
            category,
        })


        // Retornando um objeto, pois é mais fácil de agregar novos dados
        return {
            notification
        }
    }
}