import { Notification } from "./notification"
import { Content } from "./notification-content"

// Describe serve para categorizar estes testes
describe('Notification', () => {

    // Testando a criação de uma notificação com todos os seus dados
    test('it should be able to create a notification', () => {
        const notification = new Notification({
            content: new Content('Nova solicitação de amizade'),
            category: 'social',
            recipientId: 'example-recipient-id',
        })


        expect(notification).toBeTruthy()
    })
})


