import { NotificationsRepository } from "../../src/application/repositories/notifications-repositories"
import { Notification } from '../../src/application/entities/notification'

// Simulando um banco de dados in memory

export class InMemoryNotificationsRepository implements NotificationsRepository {
    async findById(notificationId: string): Promise<Notification> {
        throw new Error("Method not implemented.")
    }
    async save(notificaion: Notification): Promise<void> {
        throw new Error("Method not implemented.")
    }
    public notifications: Notification[] = []

    async create(notification: Notification) {
        this.notifications.push(notification)
    }
}