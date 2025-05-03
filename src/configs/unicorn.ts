import pluginUnicorn from 'eslint-plugin-unicorn';
import { GLOB_SRC, RULE_PREFIX } from '../consts';
import type { Linter } from 'eslint';
import type { IUnicornConfigsOptions } from '../types';

export function unicorn(options: IUnicornConfigsOptions = {}): Linter.Config[] {
  const { overrides = {} } = options;

  return [
    {
      ...pluginUnicorn.configs.recommended,
      name: `${RULE_PREFIX}/unicorn/shared`,
      files: GLOB_SRC,
    },
    {
      name: `${RULE_PREFIX}/unicorn/customize`,
      files: GLOB_SRC,
      rules: {
        // https://github.com/sindresorhus/eslint-plugin-unicorn/issues/1109#issuecomment-782689255
        'unicorn/consistent-destructuring': 'off',
        'unicorn/prevent-abbreviations': 'off',
        // https://github.com/orgs/web-infra-dev/discussions/10
        'unicorn/prefer-top-level-await': 'off',
        'unicorn/no-unreadable-array-destructuring': 'off',
        // https://github.com/sindresorhus/meta/discussions/7
        'unicorn/no-null': 'off',
        'unicorn/consistent-empty-array-spread': 'error',
        'unicorn/error-message': 'error',
        'unicorn/escape-case': 'error',
        'unicorn/no-hex-escape': 'error',
        'unicorn/new-for-builtins': 'error',
        'unicorn/no-instanceof-builtins': 'error',
        'unicorn/no-new-array': 'error',
        'unicorn/no-new-buffer': 'error',
        'unicorn/number-literal-case': 'error',
        'unicorn/prefer-dom-node-text-content': 'error',
        'unicorn/prefer-includes': 'error',
        'unicorn/prefer-node-protocol': 'error',
        'unicorn/prefer-query-selector': 'off',
        'unicorn/prefer-number-properties': 'error',
        'unicorn/prefer-string-starts-ends-with': 'error',
        'unicorn/prefer-type-error': 'error',
        'unicorn/throw-new-error': 'error',
        ...overrides,
      },
    },
  ];
}
