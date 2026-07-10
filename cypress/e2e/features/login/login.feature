@login
Feature: Login

  @smoke @login-valid-credentials
  Scenario: Login com credenciais validas
    Given que o usuario esta na pagina de login
    When ele preenche o usuario e senha validos
    And clica no botao de entrar
    Then deve ser redirecionado para o dashboard
