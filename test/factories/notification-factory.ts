import { Content } from "@application/entities/notification-content";
import { Notification, NotificationProps } from "@application/entities/notification"


type Override = Partial<NotificationProps>

// override serão os campos que vão ser sobrescritos
export function makeNotification(override: Override = {}){
    return new Notification({
        category: 'social',
        content: new Content('Nova solicitação de amizade'),
        recipientId: 'recipient-2',
        ...override
    })
}