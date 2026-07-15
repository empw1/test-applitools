import { Then } from '@badeball/cypress-cucumber-preprocessor'
import messagesPage from '../../../pages/MessagesPage'

Then('o contador de mensagens deve exibir o valor 7', () => {
  messagesPage.messagesCount.should('contain.text', '7')
})

Then('o dropdown deve conter 4 mensagens', () => {
  messagesPage.messagesList.should('have.length', 4)
})

Then('os remetentes John Mayers Phil Jones Bekky Simpson e Alice Priskon devem existir no DOM', () => {
  const remetentes = ['John Mayers', 'Phil Jones', 'Bekky Simpson', 'Alice Priskon']
  remetentes.forEach((remetente) => {
    messagesPage.messageFromItems.contains(remetente).should('exist')
  })
})
