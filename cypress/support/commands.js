import loginPage from '../pages/LoginPage'

Cypress.Commands.add('login', (username, password) => {
  loginPage.visit()
  loginPage.login(username, password)
})

Cypress.Commands.add('loginWithFixture', () => {
  cy.fixture('users').then((users) => {
    cy.login(users.validUser.username, users.validUser.password)
  })
})
