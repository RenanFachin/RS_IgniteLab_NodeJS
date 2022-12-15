// Contrato para definir quais métodos devem existir no repositório mas não implementa eles

import { Notification } from "../entities/notification";

export abstract class NotificationsRepository{
    abstract create(notification: Notification): Promise<void>;
    abstract findById(notificationId: string): Promise<Notification | null>
    abstract save(notificaion: Notification): Promise<void>
    abstract countManyByRecipientId(recipientId: string): Promise<number>
}