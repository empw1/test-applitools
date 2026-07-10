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

Then('o saldo Total Balance deve estar visivel com seu valor', () => {
  dashboardPage.totalBalanceTitle.should('be.visible')
  dashboardPage.totalBalanceValue.should('be.visible').and('not.be.empty')
})

Then('o saldo Credit Available deve estar visivel com seu valor', () => {
  dashboardPage.creditAvailableTitle.should('be.visible')
  dashboardPage.creditAvailableValue.should('be.visible').and('contain.text', '$17,800')
})

Then('o saldo Due Today deve estar visivel com seu valor', () => {
  dashboardPage.dueTodayTitle.should('be.visible')
  dashboardPage.dueTodayValue.should('be.visible').and('contain.text', '$180')
})
