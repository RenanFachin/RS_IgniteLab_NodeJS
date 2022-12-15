// Contrato para definir quais métodos devem existir no repositório mas não implementa eles

import { Notification } from "../entities/notification";

export abstract class NotificationsRepository{
    abstract create(notification: Notification): Promise<void>;
}