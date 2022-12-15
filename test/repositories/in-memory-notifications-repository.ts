import { NotificationsRepository } from "../../src/application/repositories/notifications-repositories"
import { Notification } from '../../src/application/entities/notification'

// Simulando um banco de dados in memory

export class InMemoryNotificationsRepository implements NotificationsRepository {
    public notifications: Notification[] = []

    async create(notification: Notification) {
        this.notifications.push(notification)
    }
}