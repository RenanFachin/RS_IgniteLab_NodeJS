export class NotificationNotFound extends Error {
    constructor() {
        // O super é "chamar" o constructor da classe Error que foi extendida
        super('Notification not found.')
    }
}