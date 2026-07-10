const js = require('@eslint/js')
const pluginCypress = require('eslint-plugin-cypress')

module.exports = [
  js.configs.recommended,
  {
    plugins: { cypress: pluginCypress },
  },
  {
    files: ['cypress/**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        cy: 'readonly',
        Cypress: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        before: 'readonly',
        beforeEach: 'readonly',
        after: 'readonly',
        afterEach: 'readonly',
        expect: 'readonly',
        context: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'cypress/no-unnecessary-waiting': 'error',
      'cypress/assertion-before-screenshot': 'warn',
      'cypress/no-assigning-return-values': 'error',
      'cypress/unsafe-to-chain-command': 'error',
    },
  },
  {
    ignores: ['node_modules/**', 'cypress/videos/**', 'cypress/screenshots/**'],
  },
]
