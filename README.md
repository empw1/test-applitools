# test-applitools — Automação E2E com Cypress

Projeto de automação de testes end-to-end para o site [demo.applitools.com](https://demo.applitools.com), utilizando Cypress com Cucumber/Gherkin e padrão Page Objects.

---

## Stack

| Ferramenta | Versão | Finalidade |
|---|---|---|
| [Cypress](https://www.cypress.io/) | ^15 | Framework de testes E2E |
| [@badeball/cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor) | ^26 | Suporte a Gherkin/Cucumber |
| [@bahmutov/cypress-esbuild-preprocessor](https://github.com/bahmutov/cypress-esbuild-preprocessor) | ^2 | Bundler para o preprocessador |
| [ESLint](https://eslint.org/) | ^10 | Análise estática de código |
| [eslint-plugin-cypress](https://github.com/cypress-io/eslint-plugin-cypress) | ^6 | Regras ESLint específicas para Cypress |

---

## Estrutura do Projeto

```
cypress/
├── e2e/
│   ├── features/       # Arquivos .feature (Gherkin) organizados por funcionalidade
│   │   ├── login/
│   │   └── dashboard/
│   └── steps/          # Step definitions organizadas por funcionalidade
│       ├── login/
│       └── dashboard/
├── fixtures/           # Dados de teste (JSON)
├── pages/              # Page Objects
└── support/
    ├── commands.js     # Comandos personalizados do Cypress
    └── e2e.js          # Arquivo de suporte global
cypress.config.js       # Configuração do Cypress
eslint.config.js        # Configuração do ESLint
```

---

## Pré-requisitos

- Node.js >= 18
- npm >= 9

---

## Instalação

```bash
npm install
```

---

## Como Executar

### Modo interativo (UI)
```bash
npm run cy:open
```

### Modo headless (todos os testes)
```bash
npm run cy:run
```

### Por tag de execução
```bash
npm run cy:run:smoke       # apenas cenários @smoke
npm run cy:run:regression  # apenas cenários @regression
npm run cy:run:login       # apenas cenários @login
```

---

## Análise Estática (Lint)

```bash
npm run lint         # verifica erros
npm run lint:fix     # corrige automaticamente
```

---

## Convenção de Tags

Cada cenário possui tags para permitir execução seletiva:

| Tag | Descrição |
|---|---|
| `@smoke` | Cenários críticos de fluxo principal |
| `@regression` | Suite completa de regressão |
| `@login` | Cenários da tela de login |
| `@dashboard` | Cenários do painel principal |
| `@notifications` | Cenários de notificações |
| `@transactions` | Cenários da tabela de transações |
| `@actions` | Cenários dos botões de ação |
| `@profile` | Cenários do menu de perfil |
| `@search` | Cenários de busca |
| `@api` | Cenários de API |

---

## Fluxo de Contribuição

1. Crie uma branch a partir da `main`: `git checkout -b feat/nome-do-cenario`
2. Implemente o cenário
3. Execute o lint: `npm run lint`
4. Abra um Pull Request com descrição detalhada
5. Aguarde aprovação antes do merge na `main`

> **Nenhum commit vai direto para a `main`.**

---

## CI/CD

O projeto utiliza **GitHub Actions** para execução automática dos testes regressivos.

### Workflow: Regression Tests

**Arquivo:** `.github/workflows/regression.yml`

| Gatilho | Testes executados |
|---|---|
| `pull_request` para `main` | Todos os testes (`cy:run`) — cobertura total incluindo o novo cenário |
| `push` na `main` | Apenas `@regression` |
| `workflow_dispatch` | Apenas `@regression` |

**O que o workflow faz:**
1. Faz checkout do repositório
2. Configura Node.js 20 com cache de dependências
3. Instala as dependências com `npm ci`
4. Em PRs: executa todos os testes; em push/manual: executa apenas `@regression`
5. Em caso de falha, faz upload dos screenshots como artefato (retidos por 7 dias)

---

## Changelog

### [2.9.0] — 2026-07-10
- Substitui o `Given` de login por hook `Before` escopado em `@dashboard`
- `Given que o usuario realizou login` removido de todos os cenários do dashboard
- Login centralizado — novos cenários de dashboard não precisam mais declarar o passo de login

### [2.8.0] — 2026-07-10
- Expande cenário `@dashboard-transactions` com validação das colunas do cabeçalho e presença de linhas no tbody
- `DashboardPage` atualizado com getters `transactionsTableHeader` e `transactionsTableRows`

### [2.7.0] — 2026-07-10
- Habilita gravação de vídeo (`video: true`) no `cypress.config.js`
- Upload de vídeos como artefato no CI em caso de falha (retidos por 7 dias)

### [2.6.0] — 2026-07-10
- Cenário: Exibição dos botões de ação rápida no dashboard (`@smoke`, `@dashboard`, `@dashboard-actions`)
- Cenário: Exibição dos itens do menu de perfil (`@regression`, `@dashboard`, `@dashboard-profile`)
- `DashboardPage` atualizado com seletores de ações e menu de perfil

### [2.5.0] — 2026-07-10
- Adiciona verificação `dashboardPage.isLoaded()` no `Given` de login dos cenários de dashboard
- Garante que todos os cenários de dashboard só prosseguem após confirmar o carregamento da página

### [2.4.0] — 2026-07-10
- Adiciona command `cy.loginWithFixture()` que encapsula leitura da fixture e login do usuário válido
- `dashboardSteps.js` atualizado para usar o novo command, eliminando repetição de bloco fixture + login

### [2.3.0] — 2026-07-10
- Corrige `cy.login()` para delegar ao `LoginPage` em vez de duplicar seletores
- Elimina inconsistência entre o command e o Page Object

### [2.2.0] — 2026-07-10
- Cenário: Exibição da tabela de transações no dashboard (`@smoke`, `@dashboard`, `@dashboard-transactions`)
- Cenário: Exibição do badge de notificações no dashboard (`@regression`, `@dashboard`, `@dashboard-notifications`)
- Cenário: Exibição do contador regressivo no dashboard (`@regression`, `@dashboard`, `@dashboard-countdown`)
- Steps implementados usando getters já preparados no `DashboardPage`

### [2.1.0] — 2026-07-10
- Cenário: Exibição dos saldos financeiros (`@smoke`, `@dashboard`, `@dashboard-balances`)
- Valida Total Balance, Credit Available (`$17,800`) e Due Today (`$180`)
- `DashboardPage` atualizado com seletores precisos por título de saldo

### [2.0.0] — 2026-07-10
- Início dos cenários de `@dashboard`
- Cenário: Exibição do nome do usuário logado (`@smoke`, `@dashboard`, `@dashboard-user-display-name`)
- Criação da feature `cypress/e2e/features/dashboard/dashboard.feature`
- Criação das steps `cypress/e2e/steps/dashboard/dashboardSteps.js`
- Estrutura de pastas atualizada no README

### [1.9.0] — 2026-07-10
- Cenário: Redirecionamento para `app.html` após login bem-sucedido (`@smoke`, `@login`, `@login-redirect`)

### [1.8.0] — 2026-07-10
- Cenário: Login com checkbox "Remember Me" marcado (`@regression`, `@login`, `@login-remember-me`)
- Corrige seletor do checkbox no `LoginPage` (`.custom-control-input` → `.form-check-input`)

### [1.7.0] — 2026-07-10
- Issues de bug abertas no GitHub para cenários com validação ausente na aplicação demo
  - [#8](https://github.com/empw1/test-applitools/issues/8) — Login com usuário inválido não exibe erro
  - [#9](https://github.com/empw1/test-applitools/issues/9) — Login com senha inválida não exibe erro
  - [#10](https://github.com/empw1/test-applitools/issues/10) — Login com campos em branco não exibe validação
- Referências às issues adicionadas nos comentários dos cenários no feature file

### [1.6.0] — 2026-07-10
- CI/CD ajustado: PRs agora executam todos os testes (`cy:run`) incluindo o novo cenário
- Push na `main` e execução manual mantêm apenas `@regression`

### [1.5.0] — 2026-07-10
- Cenário: Login com campos em branco (`@regression`, `@login`, `@login-empty-fields`)
- Confirma que os inputs não possuem validação `required` e o botão é um link direto para `/app.html`

### [1.4.0] — 2026-07-10
- Cenário: Login com senha inválida (`@regression`, `@login`, `@login-invalid-password`)
- Documenta comportamento do site demo: qualquer credencial redireciona para o dashboard

### [1.3.0] — 2026-07-10
- Esteira CI/CD configurada com GitHub Actions
- Workflow `regression.yml`: executa testes `@regression` em push e PR para `main`
- Upload automático de screenshots em caso de falha
- Seção CI/CD adicionada ao README

### [1.2.0] — 2026-07-10
- Cenário: Login com usuário inválido (`@regression`, `@login`, `@login-invalid-user`)
- Documenta comportamento do site demo: qualquer credencial redireciona para o dashboard

### [1.1.0] — 2026-07-10
- Cenário: Login com credenciais válidas (`@smoke`, `@login`, `@login-valid-credentials`)
- Feature file: `cypress/e2e/features/login/login.feature`
- Step definitions: `cypress/e2e/steps/login/loginSteps.js`

### [1.0.0] — 2026-07-10
- Estrutura base do projeto criada
- Cypress configurado com Cucumber/Gherkin
- ESLint configurado com plugin Cypress
- Page Objects: `LoginPage`, `DashboardPage`
- Command personalizado: `cy.login()`
- Fixtures de usuários criadas
- README inicial
