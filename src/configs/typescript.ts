import process from 'node:process';
import tseslint from 'typescript-eslint';
import { RULE_PREFIX, GLOB_TS_SRC } from '../consts';
import type { Linter } from 'eslint';
import type { ITypescriptConfigsOptions } from '../types';

export function typescript(options: ITypescriptConfigsOptions = {}): Linter.Config[] {
  const { overrides = {}, typeSafe = false } = options;

  return [
    ...tseslint.config(
      tseslint.configs.base,
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ).map((item) => ({
      ...item,
      name: `${RULE_PREFIX}/typescript/shared/${item.name?.replace('typescript-eslint/', '')}`,
      files: GLOB_TS_SRC,
    })),
    {
      name: `${RULE_PREFIX}/typescript/customize`,
      files: GLOB_TS_SRC,
      languageOptions: {
        parserOptions: {
          projectService: true,
          tsconfigRootDir: process.cwd(),
        },
      },
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
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/array-type': [
          'error',
          {
            default: 'array-simple',
          },
        ],
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        ...(typeSafe
          ? {}
          : {
              '@typescript-eslint/no-unsafe-assignment': 'off',
              '@typescript-eslint/no-unsafe-member-access': 'off',
              '@typescript-eslint/no-unsafe-call': 'off',
              '@typescript-eslint/no-unsafe-return': 'off',
            }),
        ...overrides,
      },
    },
  ] as Linter.Config[];
}
