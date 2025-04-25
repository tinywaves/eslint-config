# @dhzh/eslint-config

[![npm](https://img.shields.io/npm/v/@dhzh/eslint-config?color=444&label=)](https://npmjs.com/package/@antfu/eslint-config)

I use ESLint to format and lint my code:

|  |  |  |
|---|---|---|
| [react](./src/configs/react.ts) | [`ESLint React`](https://eslint-react.xyz/) [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks) [`eslint-plugin-react-refresh`](https://github.com/ArnaudBarre/eslint-plugin-react-refresh) [`eslint-plugin-react-compiler`](https://www.npmjs.com/package/eslint-plugin-react-compiler) [`eslint-plugin-react-google-translate`](https://www.npmjs.com/package/eslint-plugin-react-google-translate) |
| [stylistic](./src/configs/stylistic.ts) | [`ESLint Stylistic`](https://eslint.style/) [`eslint-plugin-antfu`](https://github.com/antfu/eslint-plugin-antfu) [`eslint-plugin-hyoban`](https://github.com/hyoban/eslint-plugin-hyoban) |
| [typescript](./src/configs/typescript.ts) | [`typescript-eslint`](https://typescript-eslint.io/) |
| [javascript](./src/configs/javascript.ts) | [`@eslint/js`](https://eslint.org/docs/latest/rules) |
| [node](./src/configs/node.ts) | [`eslint-plugin-n`](https://github.com/eslint-community/eslint-plugin-n) |
| [json](./src/configs/json.ts) | [`eslint-plugin-jsonc`](https://ota-meshi.github.io/eslint-plugin-jsonc/) [`eslint-plugin-package-json`](https://github.com/JoshuaKGoldberg/eslint-plugin-package-json) [`jsonc-eslint-parser`](https://github.com/ota-meshi/jsonc-eslint-parser) |
| [unicorn](./src/configs/unicorn.ts) | [`eslint-plugin-unicorn`](https://www.npmjs.com/package/eslint-plugin-unicorn) |
| [imports](./src/configs/imports.ts) | [`eslint-plugin-import-x`](https://www.npmjs.com/package/eslint-plugin-import-x) [`eslint-plugin-unused-imports`](https://github.com/sweepline/eslint-plugin-unused-imports) [`eslint-plugin-simple-import-sort`](https://github.com/lydell/eslint-plugin-simple-import-sort) |
| [formatters](./src/configs/formatters.ts) | [`eslint-plugin-format`](https://github.com/antfu/eslint-plugin-format) [`@prettier/plugin-xml`](https://github.com/prettier/plugin-xml) | html/css/graphql/xml/svg |
| [tailwindcss](./src/configs/tailwindcss.ts) | [`eslint-plugin-tailwindcss`](https://github.com/francoismassart/eslint-plugin-tailwindcss) |
| [unocss](./src/configs/unocss.ts) | [`@unocss/eslint-config`](https://unocss.dev/integrations/eslint) |
| [yml](./src/configs/yml.ts) | [`eslint-plugin-yml`](https://ota-meshi.github.io/eslint-plugin-yml/) [`yaml-eslint-parser`](https://ota-meshi.github.io/yaml-eslint-parser/) |
| [toml](./src/configs/toml.ts) | [`eslint-plugin-toml`](https://ota-meshi.github.io/eslint-plugin-toml/) [`toml-eslint-parser`](https://ota-meshi.github.io/toml-eslint-parser/) |
| testing | [`eslint-plugin-vitest`](https://github.com/vitest-dev/eslint-plugin-vitest) [`eslint-plugin-jest`](https://github.com/jest-community/eslint-plugin-jest) [`eslint-plugin-no-only-tests`](https://github.com/levibuzolic/eslint-plugin-no-only-tests) |
| [regexp](./src/configs/regexp.ts) | [`eslint-plugin-regexp`](https://ota-meshi.github.io/eslint-plugin-regexp/) |
| [eslint-comments](./src/configs/eslint-comments.ts) | [`eslint-plugin-eslint-comments`](https://eslint-community.github.io/eslint-plugin-eslint-comments/) |
| markdown | [`@eslint/markdown`](https://github.com/eslint/markdown) |
| jsdoc | [`eslint-plugin-jsdoc`](https://github.com/gajus/eslint-plugin-jsdoc) |

## Usage

> Requires ESLint v9.5.0+

### Starter Wizard

We provided a CLI tool to help you set up your project, or migrate from the legacy config to the new flat config with one command.

```shell
pnpm dlx @dhzh/eslint-config@latest
```

### Manual Install

If you prefer to set up manually:

```bash
pnpm i -D eslint @dhzh/eslint-config
```

And create `eslint.config.mjs` in your project root:

```js
// eslint.config.mjs
import { defineConfig } from '@dhzh/eslint-config';

export default defineConfig();
```

## License

[MIT](./LICENSE) License &copy; 2022-PRESENT [Lyle Zheng](https://github.com/tinywaves)
