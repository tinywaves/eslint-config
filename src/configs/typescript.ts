import process from 'process';
import type { Linter } from 'eslint';
import tseslint from 'typescript-eslint';
import { RULE_PREFIX, GLOB_TS_SRC } from '../consts';

export function typescriptConfigs(): Linter.Config[] {
  return [
    ...tseslint.config(
      tseslint.configs.base,
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.strictTypeChecked,
    ),
    {
      languageOptions: {
        parserOptions: {
          projectService: true,
          tsconfigRootDir: process.cwd(),
        },
      },
    },
    {
      name: `${RULE_PREFIX}/typescript/customize`,
      files: GLOB_TS_SRC,
      rules: {
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            disallowTypeAnnotations: false,
          },
        ],
        '@typescript-eslint/no-import-type-side-effects': 'error',
        '@typescript-eslint/method-signature-style': ['error', 'property'],
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': [
          'error',
          {
            allowShortCircuit: true,
            allowTernary: true,
          },
        ],
        '@typescript-eslint/no-dynamic-delete': 'off',
        '@typescript-eslint/no-empty-object-type': [
          'error',
          {
            allowInterfaces: 'with-single-extends',
            allowObjectTypes: 'never',
            allowWithName: 'Props$',
          },
        ],
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/consistent-type-exports': 'error',
        '@typescript-eslint/no-misused-promises': [
          'error',
          {
            checksVoidReturn: {
              arguments: false,
              attributes: false,
            },
          },
        ],
        '@typescript-eslint/restrict-template-expressions': ['error', {}],
        '@typescript-eslint/no-deprecated': 'warn',
      },
    },
  ] as Linter.Config[];
}
