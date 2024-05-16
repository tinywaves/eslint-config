import c from 'picocolors';
import pkgJson from '../../package.json';
import type { ExtraLibrariesOption, FrameworkOption, PromItem } from './types';

export { pkgJson };

export const vscodeSettingsString = `
  // Entry
  "eslint.format.enable": true,
  "eslint.ignoreUntitled": true,
  "eslint.enable": true,

  // Enable the ESlint flat config support
  // (remove this if your ESLint extension above v3.0.5)
  "eslint.experimental.useFlatConfig": true,

  // Disable the default formatter, use eslint instead
  "prettier.enable": false,
  "editor.formatOnSave": false,

  // Auto fix
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },

  "eslint.runtime": "node",

  // Silent the stylistic rules in you IDE, but still auto fix them
  // "eslint.rules.customizations": [
  //   { "rule": "style/*", "severity": "off" },
  //   { "rule": "format/*", "severity": "off" },
  //   { "rule": "*-indent", "severity": "off" },
  //   { "rule": "*-spacing", "severity": "off" },
  //   { "rule": "*-spaces", "severity": "off" },
  //   { "rule": "*-order", "severity": "off" },
  //   { "rule": "*-dangle", "severity": "off" },
  //   { "rule": "*-newline", "severity": "off" },
  //   { "rule": "*quotes", "severity": "off" },
  //   { "rule": "*semi", "severity": "off" }
  // ],

  // Enable eslint for all supported languages
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml",
    "toml",
    "xml",
    "css",
    "less",
    "scss",
    "gql",
    "graphql",
    "astro"
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
  "[vue]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[html]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[markdown]": {
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
  "[gql]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[graphql]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[astro]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  }
`;

export const frameworkOptions: PromItem<FrameworkOption>[] = [
  {
    label: c.cyan('React'),
    value: 'react',
  },
  {
    label: c.green('Vue'),
    value: 'vue',
  },
  {
    label: c.red('Nest'),
    value: 'nest',
  },
  {
    label: c.red('Svelte'),
    value: 'svelte',
  },
  {
    label: c.magenta('Astro'),
    value: 'astro',
  },
  {
    label: c.cyan('Solid'),
    value: 'solid',
  },
  {
    label: c.blue('Slidev'),
    value: 'slidev',
  },
];

export const frameworks: FrameworkOption[] = frameworkOptions.map(({ value }) => (value));

export const extraOptions: PromItem<ExtraLibrariesOption>[] = [
  {
    hint: 'Use external formatters (Prettier and/or dprint) to format files that ESLint cannot handle yet (.css, .html, etc)',
    label: c.red('Formatter'),
    value: 'formatter',
  },
  {
    label: c.cyan('UnoCSS'),
    value: 'unocss',
  },
];

export const extra: ExtraLibrariesOption[] = extraOptions.map(({ value }) => (value));

export const dependenciesMap = {
  astro: [
    'eslint-plugin-astro',
    'astro-eslint-parser',
  ],
  react: [],
  slidev: [
    'prettier-plugin-slidev',
  ],
  solid: [
    'eslint-plugin-solid',
  ],
  svelte: [
    'eslint-plugin-svelte',
    'svelte-eslint-parser',
  ],
  vue: [],
} as const;
