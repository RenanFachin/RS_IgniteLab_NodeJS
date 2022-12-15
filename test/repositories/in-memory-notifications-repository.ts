import { NotificationsRepository } from "../../src/application/repositories/notifications-repositories"
import { Notification } from '../../src/application/entities/notification'

// Simulando um banco de dados in memory

export class InMemoryNotificationsRepository implements NotificationsRepository {
    public notifications: Notification[] = []

    async findById(notificationId: string): Promise<Notification> {
        const notification = this.notifications.find(item => item.id === notificationId)


        if(!notification){
            return null
        }

        return notification
    }

    async create(notification: Notification) {
        this.notifications.push(notification)
    }

    async save(notification: Notification): Promise<void> {
        const notificationIndex = this.notifications.findIndex(item => item.id === notification.id)

        if (notificationIndex >= 0){
            this.notifications[notificationIndex] = notification
        }
    }
}