class DashboardPage {
  get currentUrl() { return cy.url() }
  get userDisplayName() { return cy.get('.logged-user-name') }
  get notificationBadge() { return cy.get('.badge-danger') }
  get totalBalance() { return cy.get('.balance-value').first() }
  get creditAvailable() { return cy.get('.balance-value').eq(1) }
  get dueToday() { return cy.get('.balance-value').eq(2) }
  get transactionsTable() { return cy.get('.table') }
  get countdownTimer() { return cy.get('#time') }

  isLoaded() {
    this.currentUrl.should('include', 'app.html')
  }
}

export default new DashboardPage()
