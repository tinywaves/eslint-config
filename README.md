# @dhzh/eslint-config

[![npm](https://img.shields.io/npm/v/@dhzh/eslint-config?color=444&label=)](https://www.npmjs.com/package/@dhzh/eslint-config)
[![license](https://img.shields.io/npm/l/@dhzh/eslint-config?color=444&label=license)](./LICENSE)

An opinionated ESLint flat config for TypeScript-first projects, with built-in support for React, Vue, Node.js, JSON, YAML, TOML, Tailwind CSS, UnoCSS, and formatting rules.

## Highlights

- Type-aware TypeScript rules powered by `typescript-eslint`.
- React, Vue, Node.js, import, stylistic, and RegExp rules out of the box.
- Linting for JSON, JSONC, JSON5, `package.json`, YAML, and TOML files.
- Prettier-powered formatting for HTML, CSS, SCSS, Less, GraphQL, XML, and SVG.
- Automatic Tailwind CSS and UnoCSS integration when detected in the project.
- Interactive CLI for creating or migrating an ESLint setup.

## Included Configs

| Config | Source | Powered by |
|---|---|---|
| React | [src/configs/react.ts](./src/configs/react.ts) | [`@eslint-react/eslint-plugin`](https://www.npmjs.com/package/@eslint-react/eslint-plugin) [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks) [`eslint-plugin-react-refresh`](https://www.npmjs.com/package/eslint-plugin-react-refresh) [`eslint-plugin-react-compiler`](https://www.npmjs.com/package/eslint-plugin-react-compiler) [`eslint-plugin-react-google-translate`](https://www.npmjs.com/package/eslint-plugin-react-google-translate) |
| Vue | [src/configs/vue.ts](./src/configs/vue.ts) | [`@eslint/js`](https://www.npmjs.com/package/@eslint/js) [`typescript-eslint`](https://www.npmjs.com/package/typescript-eslint) [`eslint-plugin-vue`](https://www.npmjs.com/package/eslint-plugin-vue) [`eslint-merge-processors`](https://www.npmjs.com/package/eslint-merge-processors) [`eslint-processor-vue-blocks`](https://www.npmjs.com/package/eslint-processor-vue-blocks) |
| Stylistic | [src/configs/stylistic.ts](./src/configs/stylistic.ts) | [`@stylistic/eslint-plugin`](https://www.npmjs.com/package/@stylistic/eslint-plugin) [`eslint-plugin-antfu`](https://www.npmjs.com/package/eslint-plugin-antfu) |
| TypeScript | [src/configs/typescript.ts](./src/configs/typescript.ts) | [`typescript-eslint`](https://typescript-eslint.io/) |
| JavaScript | [src/configs/javascript.ts](./src/configs/javascript.ts) | [`@eslint/js`](https://www.npmjs.com/package/@eslint/js) [`eslint-plugin-antfu`](https://www.npmjs.com/package/eslint-plugin-antfu) |
| Node.js | [src/configs/node.ts](./src/configs/node.ts) | [`eslint-plugin-n`](https://github.com/eslint-community/eslint-plugin-n) |
| JSON and package.json | [src/configs/json.ts](./src/configs/json.ts) | [`eslint-plugin-jsonc`](https://ota-meshi.github.io/eslint-plugin-jsonc/) [`eslint-plugin-package-json`](https://github.com/JoshuaKGoldberg/eslint-plugin-package-json) |
| Unicorn | [src/configs/unicorn.ts](./src/configs/unicorn.ts) | [`eslint-plugin-unicorn`](https://www.npmjs.com/package/eslint-plugin-unicorn) |
| Imports | [src/configs/imports.ts](./src/configs/imports.ts) | [`eslint-plugin-import-x`](https://www.npmjs.com/package/eslint-plugin-import-x) [`eslint-plugin-unused-imports`](https://github.com/sweepline/eslint-plugin-unused-imports) [`eslint-plugin-simple-import-sort`](https://github.com/lydell/eslint-plugin-simple-import-sort) [`eslint-plugin-antfu`](https://github.com/antfu/eslint-plugin-antfu) |
| Format | [src/configs/format.ts](./src/configs/format.ts) | [`eslint-plugin-format`](https://www.npmjs.com/package/eslint-plugin-format) [`@prettier/plugin-xml`](https://www.npmjs.com/package/@prettier/plugin-xml) |
| Tailwind CSS | [src/configs/tailwindcss.ts](./src/configs/tailwindcss.ts) | [`eslint-plugin-better-tailwindcss`](https://github.com/schoero/eslint-plugin-better-tailwindcss) |
| UnoCSS | [src/configs/unocss.ts](./src/configs/unocss.ts) | [`@unocss/eslint-config`](https://unocss.dev/integrations/eslint) |
| YAML | [src/configs/yml.ts](./src/configs/yml.ts) | [`eslint-plugin-yml`](https://ota-meshi.github.io/eslint-plugin-yml/) |
| TOML | [src/configs/toml.ts](./src/configs/toml.ts) | [`eslint-plugin-toml`](https://www.npmjs.com/package/eslint-plugin-toml) [`toml-eslint-parser`](https://www.npmjs.com/package/toml-eslint-parser) |
| RegExp | [src/configs/regexp.ts](./src/configs/regexp.ts) | [`eslint-plugin-regexp`](https://ota-meshi.github.io/eslint-plugin-regexp/) |
| ESLint comments | [src/configs/eslint-comments.ts](./src/configs/eslint-comments.ts) | [`@eslint-community/eslint-plugin-eslint-comments`](https://eslint-community.github.io/eslint-plugin-eslint-comments/) |
| Testing | Planned | [`eslint-plugin-vitest`](https://github.com/vitest-dev/eslint-plugin-vitest) [`eslint-plugin-jest`](https://github.com/jest-community/eslint-plugin-jest) [`eslint-plugin-no-only-tests`](https://github.com/levibuzolic/eslint-plugin-no-only-tests) |
| Markdown | Planned | [`@eslint/markdown`](https://github.com/eslint/markdown) |
| JSDoc | Planned | [`eslint-plugin-jsdoc`](https://github.com/gajus/eslint-plugin-jsdoc) |
| Ignores and language options | [src/configs/ignores.ts](./src/configs/ignores.ts), [src/configs/language-options.ts](./src/configs/language-options.ts) | Built-in config composition |

Rows marked as `Planned` are not wired into the current published config yet.

## Requirements

- Node.js `^22.23.1 || >=24`
- ESLint `^10.5.0`
- ESM package consumption

## Setup

### CLI Wizard

Run the wizard from the project root:

```shell
pnpm dlx @dhzh/eslint-config@latest
```

The wizard:

- Adds the required development dependencies and lint scripts to `package.json`.
- Creates `eslint.config.js` for ESM packages or `eslint.config.mjs` otherwise.
- Configures ESLint as the formatter in `.vscode/settings.json`.
- Adds flat config files to `.npmignore`.
- Applies the appropriate `package.json` rule when NestJS is selected.

Then install the updated dependencies and lint the project:

```shell
pnpm install
pnpm lint-fix
```

> [!IMPORTANT]
> The wizard overwrites the target ESLint config file. Back up an existing config before running it.

### Manual Setup

Install the package with ESLint:

```shell
pnpm add -D eslint @dhzh/eslint-config
```

Create `eslint.config.mjs`:

```js
import { defineConfig } from '@dhzh/eslint-config';

export default defineConfig();
```

## Customization

`defineConfig()` accepts additional ignore patterns, a source type, and options for each included config:

```js
import { defineConfig } from '@dhzh/eslint-config';

export default defineConfig({
  ignorePatterns: ['**/generated/**'],
  sourceType: 'module',
  configs: {
    typescript: {
      typeSafe: true,
      strict: true,
      overrides: {
        '@typescript-eslint/no-explicit-any': 'warn',
      },
    },
    react: {
      language: 'typescript',
      overrides: {
        hooks: {
          'react-hooks/exhaustive-deps': 'warn',
        },
      },
    },
    json: {
      indent: 2,
      packageJsonRequireType: false,
    },
    yml: {
      quotes: 'double',
    },
    imports: {
      closeOrder: false,
    },
    format: {
      enable: {
        html: true,
        css: true,
        graphql: false,
        xml: false,
        svg: false,
      },
      customPrettierOptions: {
        printWidth: 100,
      },
    },
  },
});
```

### Options

| Option | Default | Description |
|---|---|---|
| `ignorePatterns` | `[]` | Additional patterns appended to the built-in ignores. |
| `sourceType` | `'module'` | Use `'module'` or `'commonjs'` for source files. |
| `react.language` | `'typescript'` | Selects the TypeScript or JavaScript React preset. |
| `typescript.typeSafe` | `false` | Keeps unsafe TypeScript rules disabled unless enabled. |
| `typescript.strict` | `false` | Keeps selected strict rules disabled unless enabled. |
| `json.indent` | `2` | Sets JSON, JSONC, and JSON5 indentation. |
| `json.packageJsonRequireType` | `true` | Requires a `type` field in `package.json`. |
| `imports.closeOrder` | `true` | Set to `false` to enable `simple-import-sort`. |
| `format.enable` | All formats enabled | Accepts `false` to disable formatting. When passing an object, explicitly enable each desired format. |
| `format.customPrettierOptions` | `{}` | Overrides the shared Prettier options. |
| `yml.indent` / `toml.indent` | `2` | Sets YAML or TOML indentation. |
| `yml.quotes` | `'single'` | Selects single or double quotes for YAML. |
| `overrides` | `{}` | Overrides rules after the corresponding preset is applied. |

React, JSON, and disable configs expose grouped overrides for their individual rule sets. See [`src/types/index.ts`](./src/types/index.ts) for the complete option types.

## Integrations

Tailwind CSS and UnoCSS rules are enabled automatically when `tailwindcss` or `unocss` is installed in the project.

XML and SVG formatting works out of the box because `@prettier/plugin-xml` is included as a dependency.

## License

[MIT](./LICENSE) License &copy; 2022 [Lyle Zheng](https://github.com/tinywaves)
