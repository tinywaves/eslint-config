export const vscodeSettingsString = `
  // Entry
  "eslint.format.enable": true,
  "eslint.ignoreUntitled": true,
  "eslint.enable": true,

  // Disable the default formatter, use eslint instead
  "prettier.enable": false,
  "editor.formatOnSave": false,

  // Auto fix
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },

  // Silent the stylistic rules in you IDE, but still auto fix them
  // "eslint.rules.customizations": [
  //   { "rule": "style/*", "severity": "off", "fixable": true },
  //   { "rule": "format/*", "severity": "off", "fixable": true },
  //   { "rule": "*-indent", "severity": "off", "fixable": true },
  //   { "rule": "*-spacing", "severity": "off", "fixable": true },
  //   { "rule": "*-spaces", "severity": "off", "fixable": true },
  //   { "rule": "*-order", "severity": "off", "fixable": true },
  //   { "rule": "*-dangle", "severity": "off", "fixable": true },
  //   { "rule": "*-newline", "severity": "off", "fixable": true },
  //   { "rule": "*quotes", "severity": "off", "fixable": true },
  //   { "rule": "*semi", "severity": "off", "fixable": true }
  // ],

  // Enable eslint for all supported languages
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "html",
    "json",
    "json5",
    "jsonc",
    "yaml",
    "toml",
    "xml",
    "css",
    "less",
    "scss",
    "pcss",
    "postcss",
    "gql",
    "graphql",
    "vue"
  ],

  // Enable eslint as the default formatter
  "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[typescript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[html]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[json]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[yaml]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[toml]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[xml]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[css]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[less]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[scss]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[pcss]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[postcss]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[gql]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[graphql]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[vue]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  }
`;

export const eslintConfigContent = `import { defineConfig } from '@dhzh/eslint-config';

export default defineConfig();
`;
