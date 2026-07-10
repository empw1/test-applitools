@login
Feature: Login

  @smoke @login-valid-credentials
  Scenario: Login com credenciais validas
    Given que o usuario esta na pagina de login
    When ele preenche o usuario e senha validos
    And clica no botao de entrar
    Then deve ser redirecionado para o dashboard

  # BUG: https://github.com/empw1/test-applitools/issues/8
  # Comportamento esperado: exibir mensagem de erro para usuario invalido
  @regression @login-invalid-user
  Scenario: Login com usuario invalido
    Given que o usuario esta na pagina de login
    When ele preenche um usuario invalido e qualquer senha
    And clica no botao de entrar
    Then deve ser redirecionado para o dashboard pois o site demo nao valida credenciais

  # BUG: https://github.com/empw1/test-applitools/issues/9
  # Comportamento esperado: exibir mensagem de erro para senha invalida
  @regression @login-invalid-password
  Scenario: Login com senha invalida
    Given que o usuario esta na pagina de login
    When ele preenche um usuario valido e uma senha invalida
    And clica no botao de entrar
    Then deve ser redirecionado para o dashboard pois o site demo nao valida credenciais

  # BUG: https://github.com/empw1/test-applitools/issues/10
  # Comportamento esperado: bloquear envio do formulario com campos obrigatorios em branco
  @regression @login-empty-fields
  Scenario: Login com campos em branco
    Given que o usuario esta na pagina de login
    When ele nao preenche nenhum campo
    And clica no botao de entrar
    Then deve ser redirecionado para o dashboard pois o site demo nao valida credenciais
