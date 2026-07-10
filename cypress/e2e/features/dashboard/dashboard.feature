@dashboard
Feature: Dashboard

  @smoke @dashboard-user-display-name
  Scenario: Exibicao do nome do usuario logado
    Given que o usuario realizou login com credenciais validas
    Then o nome do usuario deve ser exibido corretamente no dashboard

  @smoke @dashboard-balances
  Scenario: Exibicao dos saldos financeiros do usuario
    Given que o usuario realizou login com credenciais validas
    Then o saldo Total Balance deve estar visivel com seu valor
    And o saldo Credit Available deve estar visivel com seu valor
    And o saldo Due Today deve estar visivel com seu valor
