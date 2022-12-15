import { makeNotification } from "@test/factories/notification-factory"
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository"
import { NotificationNotFound } from "./errors/notificaion-not-found"
import { ReadNotification } from "./read-notification"



describe('Read Notification', () => {
    test('it should be able to Read a notification', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository()
        const readNotification = new ReadNotification(notificationsRepository)

        const notification = makeNotification()

        await notificationsRepository.create(notification)

        await readNotification.execute({
            notificationId: notification.id
        })


        expect(notificationsRepository.notifications[0].readAt).toEqual(expect.any(Date))
    });


    it('should not be able to Read a notification when it does not exist', () => {

        const notificationsRepository = new InMemoryNotificationsRepository()
        const readNotification = new ReadNotification(notificationsRepository)

        expect(() => {
            return readNotification.execute({
                notificationId: 'fake-notification-id'
            })
        }).rejects.toThrow(NotificationNotFound)

    })
})