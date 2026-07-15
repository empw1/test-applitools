@dashboard @notifications
Feature: Mensagens

  @regression @notifications-count
  Scenario: Exibicao do contador de mensagens nao lidas
    Then o contador de mensagens deve exibir o valor 7

  @regression @notifications-content
  Scenario: Presenca das mensagens no dropdown
    Then o dropdown deve conter 4 mensagens
    And os remetentes John Mayers Phil Jones Bekky Simpson e Alice Priskon devem existir no DOM
