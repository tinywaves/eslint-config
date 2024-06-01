# @dhzh/eslint-config

[![npm](https://img.shields.io/npm/v/@dhzh/eslint-config?color=444&label=)](https://npmjs.com/package/@antfu/eslint-config)

> `Special Statement`: This project comes from [`@antfu/eslint-config`](https://github.com/antfu/eslint-config). The two are almost the same, with only some differences to meet personal needs. In order to seek convenience and prevent some conflicts between the upstream branch and my own changes after forking, I chose to copy instead of fork.

Differences from [@antfu/eslint-config](./README-antfu.md):

1. With semi: `semi: true`.
2. Always arrow parens: `arrowParens: true`.
3. Explicitly use `1tbs` as brace style: `braceStyle: '1tbs'`.
4. Disabled antfu's top level function rule: `'antfu/top-level-function': 'off'`.
5. Always curly:

- `'antfu/curly': 'off'`
- `'curly': ['error', 'all']`

6. This eslint-config will enable `ts/consistent-type-imports` rule. But it will cause [compile issue](https://github.com/typescript-eslint/typescript-eslint/issues/2559) in [nest](https://nestjs.com/) projects. So I [disabled it](https://github.com/typescript-eslint/typescript-eslint/issues/2559#issuecomment-692780580) in this config in nest framework.
7. Support `'**/*.?([cm])js` and `'**/*.?([cm])jsx` files in react projects.

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
