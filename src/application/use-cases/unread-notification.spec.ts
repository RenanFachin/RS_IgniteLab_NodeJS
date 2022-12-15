import { makeNotification } from "@test/factories/notification-factory"
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository"
import { NotificationNotFound } from "./errors/notificaion-not-found"
import { UnreadNotification } from "./unread-notification"



// Teste
describe('Unread Notification', () => {
    test('it should be able to Unread a notification', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository()
        const unreadNotification = new UnreadNotification(notificationsRepository)

        const notification = makeNotification({
            readAt: new Date(),
        })

        await notificationsRepository.create(notification)

        await unreadNotification.execute({
            notificationId: notification.id
        })


        expect(notificationsRepository.notifications[0].readAt).toBeNull()
    });


    it('should not be able to Unread a notification when it does not exist', () => {

        const notificationsRepository = new InMemoryNotificationsRepository()
        const unreadNotification = new UnreadNotification(notificationsRepository)

        expect(() => {
            return unreadNotification.execute({
                notificationId: 'fake-notification-id'
            })
        }).rejects.toThrow(NotificationNotFound)

    })
})