# @dhzh/eslint-config

[![npm](https://img.shields.io/npm/v/@dhzh/eslint-config?color=444&label=)](https://npmjs.com/package/@antfu/eslint-config)

> `Special Statement`: This project comes from [`@antfu/eslint-config`](https://github.com/antfu/eslint-config). The two are almost the same, with only some differences to meet personal needs. In order to seek convenience and prevent some conflicts between the upstream branch and my own changes after forking, I chose to copy instead of fork.

Differences from [@antfu/eslint-config](./README-antfu.md):

1. With semi: `semi: true`.
2. Always arrow parens: `arrowParens: true`.
3. Explicitly use `1tbs` as brace style: `braceStyle: '1tbs'`.
4. Disabled antfu's top level function rule: `'antfu/top-level-function': 'off'`.
5. Always curly: `'curly': ['error', 'all']`.

## Usage

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
import dhzh from '@dhzh/eslint-config';

export default dhzh();
```

## License

[MIT](./LICENSE) License &copy; 2022-PRESENT [Easton Zheng](https://github.com/eastonzh)

## Todo

- Waiting for `eslint-plugin-react` team to support eslint9.
