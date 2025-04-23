import pluginToml from 'eslint-plugin-toml';
import parserToml from 'toml-eslint-parser';
import { RULE_PREFIX, GLOB_TOML } from '../consts';
import type { Linter } from 'eslint';
import type { ITomlConfigsOptions } from '../types';

export function toml(options: ITomlConfigsOptions = {}): Linter.Config[] {
  const { overrides = {}, indent = 2 } = options;

  return [
    ...pluginToml.configs['flat/recommended'].map((item) => ({
      ...item,
      name: `${RULE_PREFIX}/toml/shared`,
      files: [GLOB_TOML],
    })),
    {
      name: `${RULE_PREFIX}/toml/customize`,
      files: [GLOB_TOML],
      languageOptions: {
        parser: parserToml,
      },
      rules: {
        'toml/comma-style': 'error',
        'toml/keys-order': 'error',
        'toml/no-space-dots': 'error',
        'toml/no-unreadable-number-separator': 'error',
        'toml/precision-of-fractional-seconds': 'error',
        'toml/precision-of-integer': 'error',
        'toml/tables-order': 'error',
        'toml/array-bracket-newline': 'error',
        'toml/array-bracket-spacing': 'error',
        'toml/array-element-newline': 'error',
        'toml/indent': ['error', indent],
        'toml/inline-table-curly-spacing': 'error',
        'toml/key-spacing': 'error',
        'toml/padding-line-between-pairs': 'error',
        'toml/padding-line-between-tables': 'error',
        'toml/quoted-keys': 'error',
        'toml/spaced-comment': 'error',
        'toml/table-bracket-spacing': 'error',
        ...overrides,
      },
    },
  ];
}
