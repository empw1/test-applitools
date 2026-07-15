@dashboard @search
Feature: Busca

  @smoke @search-field
  Scenario: Exibicao do campo de busca no dashboard
    Then o campo de busca deve estar visivel no dashboard

  @regression @search-suggestions
  Scenario: Presenca dos grupos de sugestoes de busca no DOM
    Then os grupos Projects Customers e Files devem existir no DOM
