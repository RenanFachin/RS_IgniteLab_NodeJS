import { Content } from "./notification-content"

// Teste para verificar se está sendo possível criar uma notificação com base nas validações de conteúdo
test('it should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade')


    expect(content).toBeTruthy()
})

// Teste para verificar se não está sendo possível criar uma notificação com base nas validações de conteúdo
test('it should not be able to create a notification content with less than 5 characters.', () => {
    expect(() => new Content('abc')).toThrow()
})

test('it should not be able to create a notification content with more than 240 characters.', () => {
    expect(() => new Content('a'.repeat(241))).toThrow()
})
