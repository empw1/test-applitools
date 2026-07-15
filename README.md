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

O histórico completo de versões está disponível nas [Releases do GitHub](https://github.com/empw1/test-applitools/releases).

### [2.9.0] — 2026-07-10
- Substitui o `Given` de login por hook `Before` escopado em `@dashboard`
- Login centralizado — novos cenários de dashboard não precisam mais declarar o passo de login

### [2.8.0] — 2026-07-10
- Expande cenário `@dashboard-transactions` com validação das colunas do cabeçalho e presença de linhas no tbody
- `DashboardPage` atualizado com getters `transactionsTableHeader` e `transactionsTableRows`

### [2.7.0] — 2026-07-10
- Habilita gravação de vídeo (`video: true`) no `cypress.config.js`
- Upload de vídeos como artefato no CI em caso de falha
