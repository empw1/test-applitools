import loginPage from '../pages/LoginPage'

Cypress.Commands.add('login', (username, password) => {
  loginPage.visit()
  loginPage.login(username, password)
})
