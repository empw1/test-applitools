import { Then } from '@badeball/cypress-cucumber-preprocessor'
import searchPage from '../../../pages/SearchPage'

Then('o campo de busca deve estar visivel no dashboard', () => {
  searchPage.searchInput.should('be.visible')
})

Then('os grupos Projects Customers e Files devem existir no DOM', () => {
  searchPage.projectsGroup.should('exist')
  searchPage.customersGroup.should('exist')
  searchPage.filesGroup.should('exist')
})
