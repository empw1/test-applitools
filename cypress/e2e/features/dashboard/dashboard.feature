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

  @smoke @dashboard-transactions
  Scenario: Exibicao da tabela de transacoes no dashboard
    Given que o usuario realizou login com credenciais validas
    Then a tabela de transacoes deve estar visivel no dashboard

  @regression @dashboard-notifications
  Scenario: Exibicao do badge de notificacoes no dashboard
    Given que o usuario realizou login com credenciais validas
    Then o badge de notificacoes deve estar visivel no dashboard

  @regression @dashboard-countdown
  Scenario: Exibicao do contador regressivo no dashboard
    Given que o usuario realizou login com credenciais validas
    Then o contador regressivo deve estar visivel no dashboard
