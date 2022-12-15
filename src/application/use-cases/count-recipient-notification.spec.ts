import { Notification } from "@application/entities/notification"
import { Content } from "@application/entities/notification-content"
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository"
import { CancelNotification } from "./cancel-notification"
import { CountRecipientNotification } from "./count-recipient-notification"
import { NotificationNotFound } from "./errors/notificaion-not-found"



// Teste
describe('Count recipients Notification', () => {
    test('it should be able to count recipient notification', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository()
        const countRecipientNotification = new CountRecipientNotification(notificationsRepository)

        await notificationsRepository.create(
            new Notification({
                category: 'social',
                content: new Content('Nova solicitação de amizade'),
                recipientId: 'recipient-1'
            })
        )

        await notificationsRepository.create(
            new Notification({
                category: 'social',
                content: new Content('Nova solicitação de amizade'),
                recipientId: 'recipient-1'
            })
        )

        await notificationsRepository.create(
            new Notification({
                category: 'social',
                content: new Content('Nova solicitação de amizade'),
                recipientId: 'recipient-2'
            })
        )


        const {count} = await countRecipientNotification.execute({
            recipientId: 'recipient-1'
        })

        expect(count).toEqual(2)
    });

})