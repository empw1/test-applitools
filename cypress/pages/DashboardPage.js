class DashboardPage {
  get currentUrl() { return cy.url() }
  get userDisplayName() { return cy.get('.logged-user-name') }
  get notificationBadge() { return cy.get('.badge-danger') }
  get totalBalanceTitle() { return cy.contains('.balance-title', 'Total Balance') }
  get totalBalanceValue() { return cy.contains('.balance-title', 'Total Balance').siblings('.balance-value') }
  get creditAvailableTitle() { return cy.contains('.balance-title', 'Credit Available') }
  get creditAvailableValue() { return cy.contains('.balance-title', 'Credit Available').siblings('.balance-value') }
  get dueTodayTitle() { return cy.contains('.balance-title', 'Due Today') }
  get dueTodayValue() { return cy.contains('.balance-title', 'Due Today').siblings('.balance-value') }
  get transactionsTable() { return cy.get('.table') }
  get countdownTimer() { return cy.get('#time') }

  isLoaded() {
    this.currentUrl.should('include', 'app.html')
  }
}

export default new DashboardPage()
