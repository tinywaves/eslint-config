import pluginNode from 'eslint-plugin-n';
import { GLOB_SRC, RULE_PREFIX } from '../consts';
import type { Linter } from 'eslint';
import type { INodeConfigsOptions } from '../types';

export function node(options: INodeConfigsOptions = {}): Linter.Config[] {
  const { overrides = {} } = options;

  const config = pluginNode.configs['flat/recommended'];

  return [
    {
      ...config,
      name: `${RULE_PREFIX}/node/shared`,
      files: GLOB_SRC,
    },
    {
      name: `${RULE_PREFIX}/node/customize`,
      files: GLOB_SRC,
      rules: {
        'n/handle-callback-err': ['error', '^(err|error)$'],
        'n/no-new-require': 'error',
        'n/no-path-concat': 'error',
        'n/prefer-global/buffer': ['error', 'never'],
        'n/prefer-global/process': ['error', 'never'],
        'n/no-missing-import': 'off',
        ...overrides,
      },
    },
  ];
}
