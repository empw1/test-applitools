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
  get transactionsTable() { return cy.get('table.table-padded') }
  get transactionsTableHeader() { return cy.get('table.table-padded thead tr th') }
  get transactionsTableRows() { return cy.get('table.table-padded tbody tr') }
  get countdownTimer() { return cy.get('#time') }
  get actionsContainer() { return cy.get('.element-actions') }
  get addAccountButton() { return cy.contains('.element-actions .btn', 'Add Account') }
  get makePaymentButton() { return cy.contains('.element-actions .btn', 'Make Payment') }
  get profileMenuTrigger() { return cy.get('.top-settings') }
  get profileSettingsLink() { return cy.contains('a', 'Profile Settings') }
  get billingInfoLink() { return cy.contains('a', 'Billing Info') }

  isLoaded() {
    this.currentUrl.should('include', 'app.html')
  }
}

export default new DashboardPage()
