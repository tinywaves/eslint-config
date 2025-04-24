import pluginImportX from 'eslint-plugin-import-x';
import pluginUnusedImports from 'eslint-plugin-unused-imports';
import pluginAntfu from 'eslint-plugin-antfu';
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import { GLOB_SRC, RULE_PREFIX } from '../consts';
import type { Linter, ESLint } from 'eslint';
import type { IImportsConfigsOptions } from '../types';

export function imports(options: IImportsConfigsOptions = {}): Linter.Config[] {
  const { overrides = {}, closeOrder = true } = options;

  return [
    {
      name: `${RULE_PREFIX}/imports/customize`,
      files: GLOB_SRC,
      plugins: {
        'antfu': pluginAntfu,
        'import-x': pluginImportX as unknown as ESLint.Plugin,
        'unused-imports': pluginUnusedImports,
        'simple-import-sort': pluginSimpleImportSort,
      },
      rules: {
        'sort-imports': 'off',
        'no-unused-vars': 'off',
        'no-duplicate-imports': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'antfu/import-dedupe': 'error',
        'antfu/no-import-dist': 'error',
        'antfu/no-import-node-modules-by-path': 'error',
        'import-x/consistent-type-specifier-style': ['error', 'prefer-top-level'],
        'import-x/first': 'error',
        'import-x/no-duplicates': 'error',
        'import-x/no-mutable-exports': 'error',
        'import-x/no-named-default': 'error',
        'import-x/no-self-import': 'error',
        'import-x/no-webpack-loader-syntax': 'error',
        'import-x/order': 'off',
        'import-x/newline-after-import': [
          'error',
          {
            count: 1,
          },
        ],
        'unused-imports/no-unused-imports': 'warn',
        'unused-imports/no-unused-vars': [
          'error',
          {
            args: 'after-used',
            argsIgnorePattern: '^_',
            ignoreRestSiblings: true,
            vars: 'all',
            varsIgnorePattern: '^_',
          },
        ],
        'simple-import-sort/imports': closeOrder ? 'off' : 'error',
        'simple-import-sort/exports': closeOrder ? 'off' : 'error',
        ...overrides,
      },
    },
  ];
}
