import pluginJsonc from 'eslint-plugin-jsonc';
import pluginPackageJson from 'eslint-plugin-package-json';
import parserJsonc from 'jsonc-eslint-parser';
import pluginHyoban from 'eslint-plugin-hyoban';
import { RULE_PREFIX, GLOB_JSON, GLOB_JSONC, GLOB_JSON5, GLOB_PACKAGE_JSON } from '../consts';
import type { Linter } from 'eslint';
import type { IJsonConfigsOptions } from '../types';

export function json(options: IJsonConfigsOptions = {}): Linter.Config[] {
  const { overrides = { core: {}, packageJson: {} }, indent = 2 } = options;

  return [
    ...pluginJsonc.configs['flat/recommended-with-json'].map((item) => ({
      ...item,
      name: `${RULE_PREFIX}/json/shared/json`,
      files: [GLOB_JSON],
    })),
    ...pluginJsonc.configs['flat/recommended-with-jsonc'].map((item) => ({
      ...item,
      name: `${RULE_PREFIX}/json/shared/jsonc`,
      files: [GLOB_JSONC],
    })),
    ...pluginJsonc.configs['flat/recommended-with-json5'].map((item) => ({
      ...item,
      name: `${RULE_PREFIX}/json/shared/json5`,
      files: [GLOB_JSON5],
    })),
    {
      name: `${RULE_PREFIX}/json/shared`,
      files: [GLOB_JSON, GLOB_JSON5, GLOB_JSONC],
      languageOptions: {
        parser: parserJsonc,
      },
    },
    {
      name: `${RULE_PREFIX}/json/customize`,
      files: [GLOB_JSON, GLOB_JSON5, GLOB_JSONC],
      plugins: {
        hyoban: pluginHyoban,
      },
      rules: {
        'jsonc/array-bracket-spacing': ['error', 'never'],
        'jsonc/comma-dangle': ['error', 'never'],
        'jsonc/comma-style': ['error', 'last'],
        'jsonc/indent': ['error', indent],
        'jsonc/no-comments': 'off',
        'jsonc/key-spacing': [
          'error',
          {
            afterColon: true,
            beforeColon: false,
          },
        ],
        'jsonc/object-curly-newline': [
          'error',
          {
            consistent: true,
            multiline: true,
          },
        ],
        'jsonc/object-curly-spacing': ['error', 'always'],
        'jsonc/quote-props': 'error',
        'jsonc/quotes': 'error',
        'jsonc/no-bigint-literals': 'error',
        'jsonc/object-property-newline': [
          'error',
          {
            allowMultiplePropertiesPerLine: true,
          },
        ],
        'jsonc/no-binary-expression': 'error',
        'jsonc/no-binary-numeric-literals': 'error',
        'jsonc/no-dupe-keys': 'error',
        'jsonc/no-escape-sequence-in-identifier': 'error',
        'jsonc/no-floating-decimal': 'error',
        'jsonc/no-hexadecimal-numeric-literals': 'error',
        'jsonc/no-infinity': 'error',
        'jsonc/no-multi-str': 'error',
        'jsonc/no-nan': 'error',
        'jsonc/no-number-props': 'error',
        'jsonc/no-numeric-separators': 'error',
        'jsonc/no-octal': 'error',
        'jsonc/no-octal-escape': 'error',
        'jsonc/no-octal-numeric-literals': 'error',
        'jsonc/no-parenthesized': 'error',
        'jsonc/no-plus-sign': 'error',
        'jsonc/no-regexp-literals': 'error',
        'jsonc/no-sparse-arrays': 'error',
        'jsonc/no-template-literals': 'error',
        'jsonc/no-undefined-value': 'error',
        'jsonc/no-unicode-codepoint-escapes': 'error',
        'jsonc/no-useless-escape': 'error',
        'jsonc/space-unary-ops': 'error',
        'jsonc/valid-json-number': 'error',
        'jsonc/vue-custom-block/no-parsing-error': 'error',
        'hyoban/jsonc-inline-spacing': 'error',
        ...overrides.core,
      },
    },
    {
      ...pluginPackageJson.configs.recommended,
      name: `${RULE_PREFIX}/json/shared/package.json`,
      files: [GLOB_PACKAGE_JSON],
    },
    {
      name: `${RULE_PREFIX}/json/customize/package.json`,
      files: [GLOB_PACKAGE_JSON],
      rules: {
        'package-json/order-properties': [
          'error',
          {
            order: [
              'publisher',
              'name',
              'displayName',
              'type',
              'version',
              'private',
              'packageManager',
              'description',
              'author',
              'contributors',
              'license',
              'funding',
              'homepage',
              'repository',
              'bugs',
              'keywords',
              'categories',
              'sideEffects',
              'exports',
              'main',
              'module',
              'unpkg',
              'jsdelivr',
              'types',
              'typesVersions',
              'bin',
              'icon',
              'files',
              'engines',
              'activationEvents',
              'contributes',
              'scripts',
              'release-it',
              'peerDependencies',
              'peerDependenciesMeta',
              'dependencies',
              'optionalDependencies',
              'devDependencies',
              'pnpm',
              'overrides',
              'resolutions',
              'husky',
              'simple-git-hooks',
              'lint-staged',
              'eslintConfig',
            ],
          },
        ],
        ...overrides.packageJson,
      },
    },
  ];
}
