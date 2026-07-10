Cypress.Commands.add('login', (username, password) => {
  cy.visit('/')
  cy.get('#username').type(username)
  cy.get('#password').type(password)
  cy.get('#log-in').click()
})
