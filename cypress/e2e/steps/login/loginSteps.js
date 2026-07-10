import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import loginPage from '../../../pages/LoginPage'
import dashboardPage from '../../../pages/DashboardPage'

Given('que o usuario esta na pagina de login', () => {
  loginPage.visit()
})

When('ele preenche o usuario e senha validos', () => {
  cy.fixture('users').then((users) => {
    loginPage.fillUsername(users.validUser.username)
    loginPage.fillPassword(users.validUser.password)
  })
})

When('ele preenche um usuario invalido e qualquer senha', () => {
  cy.fixture('users').then((users) => {
    loginPage.fillUsername(users.invalidUser.username)
    loginPage.fillPassword(users.invalidUser.password)
  })
})

When('ele preenche um usuario valido e uma senha invalida', () => {
  cy.fixture('users').then((users) => {
    loginPage.fillUsername(users.validUser.username)
    loginPage.fillPassword(users.invalidUser.password)
  })
})

When('ele nao preenche nenhum campo', () => {
  loginPage.usernameInput.should('be.empty')
  loginPage.passwordInput.should('be.empty')
})

When('ele marca o checkbox Remember Me', () => {
  loginPage.checkRememberMe()
})

When('clica no botao de entrar', () => {
  loginPage.clickSignIn()
})

Then('deve ser redirecionado para o dashboard', () => {
  dashboardPage.isLoaded()
})

Then('deve ser redirecionado para o dashboard pois o site demo nao valida credenciais', () => {
  dashboardPage.isLoaded()
})

Then('o checkbox Remember Me deve ter sido marcado antes do login', () => {
  cy.go('back')
  loginPage.rememberMeCheckbox.should('exist')
})
