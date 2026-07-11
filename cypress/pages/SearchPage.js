class SearchPage {
  get searchInput() { return cy.get('.autosuggest-search-activator input') }
  get searchModal() { return cy.get('.search-with-suggestions-w') }
  get suggestionsGroups() { return cy.get('.search-suggestions-group') }
  get projectsGroup() { return cy.contains('.ssg-name', 'Projects') }
  get customersGroup() { return cy.contains('.ssg-name', 'Customers') }
  get filesGroup() { return cy.contains('.ssg-name', 'Files') }
  get closeButton() { return cy.get('.close-search-suggestions') }
}

export default new SearchPage()
