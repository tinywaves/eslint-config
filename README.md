# @dhzh/eslint-config

[![npm](https://img.shields.io/npm/v/@dhzh/eslint-config?color=444&label=)](https://www.npmjs.com/package/@dhzh/eslint-config)

An ESLint flat config preset for TypeScript-first projects with built-in support for React, Vue, JSON, YAML, TOML, Tailwind CSS, UnoCSS, and formatting rules.

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
| Tailwind CSS | [src/configs/tailwindcss.ts](./src/configs/tailwindcss.ts) | [`eslint-plugin-tailwindcss`](https://github.com/francoismassart/eslint-plugin-tailwindcss) |
| UnoCSS | [src/configs/unocss.ts](./src/configs/unocss.ts) | [`@unocss/eslint-config`](https://unocss.dev/integrations/eslint) |
| YAML | [src/configs/yml.ts](./src/configs/yml.ts) | [`eslint-plugin-yml`](https://ota-meshi.github.io/eslint-plugin-yml/) |
| TOML | [src/configs/toml.ts](./src/configs/toml.ts) | [`eslint-plugin-toml`](https://www.npmjs.com/package/eslint-plugin-toml) [`toml-eslint-parser`](https://www.npmjs.com/package/toml-eslint-parser) |
| RegExp | [src/configs/regexp.ts](./src/configs/regexp.ts) | [`eslint-plugin-regexp`](https://ota-meshi.github.io/eslint-plugin-regexp/) |
| ESLint comments | [src/configs/eslint-comments.ts](./src/configs/eslint-comments.ts) | [`@eslint-community/eslint-plugin-eslint-comments`](https://eslint-community.github.io/eslint-plugin-eslint-comments/) |
| Testing | Planned | [`eslint-plugin-vitest`](https://github.com/vitest-dev/eslint-plugin-vitest) [`eslint-plugin-jest`](https://github.com/jest-community/eslint-plugin-jest) [`eslint-plugin-no-only-tests`](https://github.com/levibuzolic/eslint-plugin-no-only-tests) |
| Markdown | Planned | [`@eslint/markdown`](https://github.com/eslint/markdown) |
| JSDoc | Planned | [`eslint-plugin-jsdoc`](https://github.com/gajus/eslint-plugin-jsdoc) |
| Ignores and language options | [src/configs/ignores.ts](./src/configs/ignores.ts), [src/configs/language-options.ts](./src/configs/language-options.ts) | Built-in config composition |

## Requirements

- Node.js `^22.13.0 || >=24`
- ESLint `^10.2.1`
- ESM-only package consumption

## Quick Start

### CLI Wizard

Use the CLI to create or migrate your flat config setup:

```shell
pnpm dlx @dhzh/eslint-config@latest
```

The wizard updates:

- `package.json`
- `eslint.config.*`
- `.vscode/settings.json`
- `.npmignore`

### Manual Setup

Install the package and ESLint:

```bash
pnpm i -D eslint @dhzh/eslint-config
```

Then create `eslint.config.mjs`:

```js
// eslint.config.mjs
import { defineConfig } from '@dhzh/eslint-config';

export default defineConfig();
```

## Customization

`defineConfig()` accepts `configs`, `ignorePatterns`, and `sourceType`.

```js
// eslint.config.mjs
import { defineConfig } from '@dhzh/eslint-config';

export default defineConfig({
  ignorePatterns: ['dist', 'coverage'],
  configs: {
    json: {
      packageJsonRequireType: false,
    },
    yml: {
      quotes: 'double',
    },
    imports: {
      closeOrder: false,
    },
  },
});
```

For the full option surface, check [src/types/index.ts](./src/types/index.ts) and the config implementations under [src/configs](./src/configs).

Rows marked as `Planned` are not wired into the current published config yet.

## License

[MIT](./LICENSE) License &copy; 2022 [Lyle Zheng](https://github.com/tinywaves)
