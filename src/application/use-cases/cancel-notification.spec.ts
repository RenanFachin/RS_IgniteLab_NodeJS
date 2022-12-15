import { Notification } from "@application/entities/notification"
import { Content } from "@application/entities/notification-content"
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository"
import { CancelNotification } from "./cancel-notification"
import { NotificationNotFound } from "./errors/notificaion-not-found"



// Teste
describe('Cancel Notification', () => {
    test('it should be able to cancel a notification', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository()
        const cancelNotification = new CancelNotification(notificationsRepository)

        // Criando uma notificação para posteriormente cancelar ela
        const notification = new Notification({
            category: 'social',
            content: new Content('Nova solicitação de amizade'),
            recipientId: 'example-recipient-id'
        })

        await notificationsRepository.create(notification)
        
        // Passando o notificationID sendo o id da notificação criada acima
        await cancelNotification.execute({
            notificationId: notification.id
        })


        // Esperando que tenha algum valor dentro da coluna canceledAt
        expect(notificationsRepository.notifications[0].canceledAt).toEqual(expect.any(Date))
    });


    it('should not be able to cancel a notification when it does not exist', () => {

        const notificationsRepository = new InMemoryNotificationsRepository()
        const cancelNotification = new CancelNotification(notificationsRepository)

        expect(() => {
            return cancelNotification.execute({
                notificationId: 'fake-notification-id'
            })
        }).rejects.toThrow(NotificationNotFound)

    })
})