import { GLOB_SRC, GLOB_SRC_EXT, RULE_PREFIX } from '../consts';
import type { Linter } from 'eslint';
import type { IDisablesConfigsOptions } from '../types';

export function disables(options: IDisablesConfigsOptions = {}): Linter.Config[] {
  const { overrides = { scripts: {}, cli: {}, bin: {}, dts: {}, cjs: {}, config: {} } } = options;

  return [
    {
      name: `${RULE_PREFIX}/disables/scripts`,
      files: GLOB_SRC.map((item) => `**/scripts/${item}`),
      rules: {
        'antfu/no-top-level-await': 'off',
        'no-console': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        ...overrides.scripts,
      },
    },
    {
      name: `${RULE_PREFIX}/disables/cli`,
      files: [
        ...GLOB_SRC.map((item) => `**/cli/${item}`),
        ...GLOB_SRC_EXT.map((item) => `**/cli.${item}`),
      ],
      rules: {
        'antfu/no-top-level-await': 'off',
        'no-console': 'off',
        ...overrides.cli,
      },
    },
    {
      name: `${RULE_PREFIX}/disables/bin`,
      files: [
        '**/bin/**/*',
        ...GLOB_SRC_EXT.map((item) => `**/bin.${item}`),
      ],
      rules: {
        'antfu/no-import-dist': 'off',
        'antfu/no-import-node-modules-by-path': 'off',
        ...overrides.bin,
      },
    },
    {
      name: `${RULE_PREFIX}/disables/dts`,
      files: ['**/*.d.?([cm])ts'],
      rules: {
        'eslint-comments/no-unlimited-disable': 'off',
        'import/no-duplicates': 'off',
        'no-restricted-syntax': 'off',
        'unused-imports/no-unused-vars': 'off',
        ...overrides.dts,
      },
    },
    {
      name: `${RULE_PREFIX}/disables/cjs`,
      files: ['**/*.js', '**/*.cjs'],
      rules: {
        'ts/no-require-imports': 'off',
        ...overrides.cjs,
      },
    },
    {
      name: `${RULE_PREFIX}/disables/config`,
      files: [
        ...GLOB_SRC_EXT.map((item) => `**/*.config.${item}`),
        ...GLOB_SRC_EXT.map((item) => `**/*.config.*.${item}`),
      ],
      rules: {
        'antfu/no-top-level-await': 'off',
        'no-console': 'off',
        'ts/explicit-function-return-type': 'off',
        ...overrides.config,
      },
    },
  ];
}
