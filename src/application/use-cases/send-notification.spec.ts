import { Notification } from "../entities/notification"
import { SendNotification } from "./send-notification"

// Simulando um banco de dados
const notifications: Notification[]=[]

const notificationsRepository = {
    async create(notification: Notification){
        notifications.push(notification)
    }
}


// Teste
describe('Send Notification', () => {
    test('it should be able to send a notification', async () => {
        const sendNotification = new SendNotification(notificationsRepository)
        
        await sendNotification.execute({
            content: 'This is a notification',
            category: 'social',
            recipientId: 'example-recipient-id'
        })

        console.log(notifications)

        expect(notifications).toHaveLength(1)
    })
})