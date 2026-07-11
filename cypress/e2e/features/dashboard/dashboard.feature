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
    And a tabela deve conter as colunas Status Date Description Category e Amount
    And a tabela deve exibir pelo menos uma linha de transacao

  @regression @dashboard-notifications
  Scenario: Exibicao do badge de notificacoes no dashboard
    Given que o usuario realizou login com credenciais validas
    Then o badge de notificacoes deve estar visivel no dashboard

  @regression @dashboard-countdown
  Scenario: Exibicao do contador regressivo no dashboard
    Given que o usuario realizou login com credenciais validas
    Then o contador regressivo deve estar visivel no dashboard

  @smoke @dashboard-actions
  Scenario: Exibicao dos botoes de acao rapida no dashboard
    Given que o usuario realizou login com credenciais validas
    Then o botao Add Account deve estar visivel no dashboard
    And o botao Make Payment deve estar visivel no dashboard

  @regression @dashboard-profile
  Scenario: Presenca dos itens do menu de perfil no DOM
    Given que o usuario realizou login com credenciais validas
    Then o link Profile Settings deve estar visivel
    And o link Billing Info deve estar visivel
