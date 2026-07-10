class LoginPage {
  get usernameInput() { return cy.get('#username') }
  get passwordInput() { return cy.get('#password') }
  get signInButton() { return cy.get('#log-in') }
  get rememberMeCheckbox() { return cy.get('.form-check-input') }
  get logo() { return cy.get('.logo-w img') }

  visit() {
    cy.visit('/')
  }

  fillUsername(username) {
    this.usernameInput.type(username)
  }

  fillPassword(password) {
    this.passwordInput.type(password)
  }

  clickSignIn() {
    this.signInButton.click()
  }

  checkRememberMe() {
    this.rememberMeCheckbox.check()
  }

  login(username, password) {
    this.fillUsername(username)
    this.fillPassword(password)
    this.clickSignIn()
  }
}

export default new LoginPage()
