import pluginYml from 'eslint-plugin-yml';
import parserYml from 'yaml-eslint-parser';
import { RULE_PREFIX, GLOB_YML } from '../consts';
import type { Linter } from 'eslint';
import type { IYmlConfigsOptions } from '../types';

export function yml(options: IYmlConfigsOptions = {}): Linter.Config[] {
  const { overrides = {}, indent = 2, quotes = 'single' } = options;

  return [
    ...pluginYml.configs['flat/recommended'].map((item) => ({
      ...item,
      name: `${RULE_PREFIX}/yml/shared`,
      files: [GLOB_YML],
    })),
    {
      name: `${RULE_PREFIX}/yml/customize`,
      files: [GLOB_YML],
      languageOptions: {
        parser: parserYml,
      },
      rules: {
        'yml/block-mapping': 'error',
        'yml/block-sequence': 'error',
        'yml/no-empty-key': 'error',
        'yml/no-empty-sequence-entry': 'error',
        'yml/no-irregular-whitespace': 'error',
        'yml/plain-scalar': 'error',
        'yml/vue-custom-block/no-parsing-error': 'error',
        'yml/block-mapping-question-indicator-newline': 'error',
        'yml/block-sequence-hyphen-indicator-newline': 'error',
        'yml/flow-mapping-curly-newline': 'error',
        'yml/flow-mapping-curly-spacing': 'error',
        'yml/flow-sequence-bracket-newline': 'error',
        'yml/flow-sequence-bracket-spacing': 'error',
        'yml/indent': ['error', indent],
        'yml/key-spacing': 'error',
        'yml/no-tab-indent': 'error',
        'yml/quotes': [
          'error',
          {
            avoidEscape: true,
            prefer: quotes,
          },
        ],
        'yml/spaced-comment': 'error',
        ...overrides,
      },
    },
    {
      name: `${RULE_PREFIX}/yml/customize/pnpm-workspace.yaml`,
      files: ['pnpm-workspace.yaml'],
      rules: {
        'yml/sort-keys': [
          'error',
          {
            order: [
              'packages',
              'overrides',
              'patchedDependencies',
              'hoistPattern',
              'catalog',
              'catalogs',
              'allowedDeprecatedVersions',
              'allowNonAppliedPatches',
              'configDependencies',
              'ignoredBuiltDependencies',
              'ignoredOptionalDependencies',
              'neverBuiltDependencies',
              'onlyBuiltDependencies',
              'onlyBuiltDependenciesFile',
              'packageExtensions',
              'peerDependencyRules',
              'supportedArchitectures',
            ],
            pathPattern: '^$',
          },
          {
            order: {
              type: 'asc',
            },
            pathPattern: '.*',
          },
        ],
      },
    },
  ];
}
