import { Before, Then } from '@badeball/cypress-cucumber-preprocessor'
import dashboardPage from '../../../pages/DashboardPage'

Before({ tags: '@dashboard' }, () => {
  cy.loginWithFixture()
  dashboardPage.isLoaded()
})

Then('o nome do usuario deve ser exibido corretamente no dashboard', () => {
  dashboardPage.userDisplayName.should('be.visible').and('contain.text', 'Jack Gomez')
})

Then('o perfil do usuario deve ser exibido como Customer', () => {
  dashboardPage.userRole.should('be.visible').and('contain.text', 'Customer')
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

Then('a tabela de transacoes deve estar visivel no dashboard', () => {
  dashboardPage.transactionsTable.should('be.visible')
})

Then('a tabela deve conter as colunas Status Date Description Category e Amount', () => {
  const colunas = ['Status', 'Date', 'Description', 'Category', 'Amount']
  colunas.forEach((coluna) => {
    dashboardPage.transactionsTableHeader.contains(coluna).should('exist')
  })
})

Then('a tabela deve exibir pelo menos uma linha de transacao', () => {
  dashboardPage.transactionsTableRows.should('have.length.at.least', 1)
})

Then('a tabela deve conter transacoes com status Complete', () => {
  dashboardPage.transactionStatusComplete.should('exist')
})

Then('a tabela deve conter transacoes com status Declined', () => {
  dashboardPage.transactionStatusDeclined.should('exist')
})

Then('a tabela deve conter transacoes com status Pending', () => {
  dashboardPage.transactionStatusPending.should('exist')
})

Then('o badge de notificacoes deve estar visivel no dashboard', () => {
  dashboardPage.notificationBadge.should('be.visible')
})

Then('o contador regressivo deve estar visivel no dashboard', () => {
  dashboardPage.countdownTimer.should('be.visible')
})

Then('o botao Add Account deve estar visivel no dashboard', () => {
  dashboardPage.addAccountButton.should('be.visible')
})

Then('o botao Make Payment deve estar visivel no dashboard', () => {
  dashboardPage.makePaymentButton.should('be.visible')
})

Then('o link Profile Settings deve estar visivel', () => {
  dashboardPage.profileSettingsLink.should('exist')
})

Then('o link Billing Info deve estar visivel', () => {
  dashboardPage.billingInfoLink.should('exist')
})
