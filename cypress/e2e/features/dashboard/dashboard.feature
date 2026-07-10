@dashboard
Feature: Dashboard

  @smoke @dashboard-user-display-name
  Scenario: Exibicao do nome do usuario logado
    Given que o usuario realizou login com credenciais validas
    Then o nome do usuario deve ser exibido corretamente no dashboard
