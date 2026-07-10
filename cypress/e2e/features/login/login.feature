@login
Feature: Login

  @smoke @login-valid-credentials
  Scenario: Login com credenciais validas
    Given que o usuario esta na pagina de login
    When ele preenche o usuario e senha validos
    And clica no botao de entrar
    Then deve ser redirecionado para o dashboard

  @regression @login-invalid-user
  Scenario: Login com usuario invalido
    Given que o usuario esta na pagina de login
    When ele preenche um usuario invalido e qualquer senha
    And clica no botao de entrar
    Then deve ser redirecionado para o dashboard pois o site demo nao valida credenciais
