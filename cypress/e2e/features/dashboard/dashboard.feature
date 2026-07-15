@dashboard
Feature: Dashboard

  @smoke @dashboard-user-display-name
  Scenario: Exibicao do nome do usuario logado
    Then o nome do usuario deve ser exibido corretamente no dashboard

  @smoke @dashboard-user-role
  Scenario: Exibicao do perfil do usuario logado
    Then o perfil do usuario deve ser exibido como Customer

  @smoke @dashboard-balances
  Scenario: Exibicao dos saldos financeiros do usuario
    Then o saldo Total Balance deve estar visivel com seu valor
    And o saldo Credit Available deve estar visivel com seu valor
    And o saldo Due Today deve estar visivel com seu valor

  @smoke @dashboard-transactions
  Scenario: Exibicao da tabela de transacoes no dashboard
    Then a tabela de transacoes deve estar visivel no dashboard
    And a tabela deve conter as colunas Status Date Description Category e Amount
    And a tabela deve exibir pelo menos uma linha de transacao

  @regression @dashboard-transaction-status
  Scenario: Exibicao dos status de transacoes na tabela
    Then a tabela deve conter transacoes com status Complete
    And a tabela deve conter transacoes com status Declined
    And a tabela deve conter transacoes com status Pending

  @regression @dashboard-notifications
  Scenario: Exibicao do badge de notificacoes no dashboard
    Then o badge de notificacoes deve estar visivel no dashboard

  @regression @dashboard-countdown
  Scenario: Exibicao do contador regressivo no dashboard
    Then o contador regressivo deve estar visivel no dashboard

  @smoke @dashboard-actions
  Scenario: Exibicao dos botoes de acao rapida no dashboard
    Then o botao Add Account deve estar visivel no dashboard
    And o botao Make Payment deve estar visivel no dashboard

  @regression @dashboard-profile
  Scenario: Presenca dos itens do menu de perfil no DOM
    Then o link Profile Settings deve estar visivel
    And o link Billing Info deve estar visivel
