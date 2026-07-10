import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'
import dashboardPage from '../../../pages/DashboardPage'

Given('que o usuario realizou login com credenciais validas', () => {
  cy.fixture('users').then((users) => {
    cy.login(users.validUser.username, users.validUser.password)
  })
})

Then('o nome do usuario deve ser exibido corretamente no dashboard', () => {
  dashboardPage.userDisplayName.should('be.visible').and('contain.text', 'Jack Gomez')
})
