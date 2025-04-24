import js from '@eslint/js';
import pluginAntfu from 'eslint-plugin-antfu';
import globals from 'globals';
import { GLOB_SRC, RULE_PREFIX } from '../consts';
import type { Linter } from 'eslint';
import type { IJavascriptConfigsOptions } from '../types';

export function javascript(options: IJavascriptConfigsOptions = {}): Linter.Config[] {
  const { overrides = {} } = options;

  return [
    {
      name: `${RULE_PREFIX}/javascript/shared`,
      files: GLOB_SRC,
      languageOptions: {
        ecmaVersion: 2022,
        globals: {
          ...globals.browser,
          ...globals.es2021,
          ...globals.node,
          document: 'readonly',
          navigator: 'readonly',
          window: 'readonly',
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          ecmaVersion: 2022,
          sourceType: 'module',
        },
        sourceType: 'module',
      },
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
      rules: js.configs.recommended.rules,
    },
    {
      name: `${RULE_PREFIX}/javascript/customize`,
      files: GLOB_SRC,
      plugins: {
        antfu: pluginAntfu,
      },
      rules: {
        'arrow-body-style': ['error', 'as-needed'],
        'func-style': [
          'warn',
          'declaration',
          {
            allowArrowFunctions: true,
          },
        ],
        'no-empty-function': 'off',
        'prefer-destructuring': 'off',
        'capitalized-comments': 'off',
        'id-length': 'off',
        'accessor-pairs': [
          'error',
          {
            enforceForClassMembers: true,
            setWithoutGet: true,
          },
        ],
        'antfu/no-top-level-await': 'error',
        // https://x.com/karlhorky/status/1773632485055680875
        'array-callback-return': 'error',
        'block-scoped-var': 'error',
        'constructor-super': 'error',
        'default-case-last': 'error',
        'dot-notation': [
          'error',
          {
            allowKeywords: true,
          },
        ],
        'eqeqeq': ['error', 'smart'],
        'new-cap': [
          'error',
          {
            capIsNew: false,
            newIsCap: true,
            properties: true,
          },
        ],
        'no-alert': 'error',
        'no-array-constructor': 'error',
        'no-async-promise-executor': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-class-assign': 'error',
        'no-compare-neg-zero': 'error',
        'no-cond-assign': ['error', 'always'],
        'no-console': [
          'error',
          {
            allow: ['warn', 'error', 'info'],
          },
        ],
        'no-const-assign': 'error',
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-delete-var': 'error',
        'no-dupe-args': 'error',
        'no-dupe-class-members': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty': [
          'error',
          {
            allowEmptyCatch: true,
          },
        ],
        'no-empty-character-class': 'error',
        'no-empty-pattern': 'error',
        'no-eval': 'error',
        'no-ex-assign': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-boolean-cast': 'error',
        'no-fallthrough': 'error',
        'no-func-assign': 'error',
        'no-global-assign': 'error',
        'no-implied-eval': 'error',
        'no-import-assign': 'error',
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-iterator': 'error',
        'no-labels': [
          'error',
          {
            allowLoop: false,
            allowSwitch: false,
          },
        ],
        'no-lone-blocks': 'error',
        'no-loss-of-precision': 'error',
        'no-misleading-character-class': 'error',
        'no-multi-str': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-native-nonconstructor': 'error',
        'no-new-wrappers': 'error',
        'no-obj-calls': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        // https://twitter.com/ryanflorence/status/1786394911895683512
        'no-param-reassign': 'warn',
        'no-proto': 'error',
        'no-prototype-builtins': 'error',
        'no-redeclare': [
          'error',
          {
            builtinGlobals: false,
          },
        ],
        'no-regex-spaces': 'error',
        'no-restricted-globals': [
          'error',
          {
            message: 'Use `globalThis` instead.',
            name: 'global',
          },
          {
            message: 'Use `globalThis` instead.',
            name: 'self',
          },
        ],
        'no-restricted-properties': [
          'error',
          {
            message: 'Use `Object.getPrototypeOf` or `Object.setPrototypeOf` instead.',
            property: '__proto__',
          },
          {
            message: 'Use `Object.defineProperty` instead.',
            property: '__defineGetter__',
          },
          {
            message: 'Use `Object.defineProperty` instead.',
            property: '__defineSetter__',
          },
          {
            message: 'Use `Object.getOwnPropertyDescriptor` instead.',
            property: '__lookupGetter__',
          },
          {
            message: 'Use `Object.getOwnPropertyDescriptor` instead.',
            property: '__lookupSetter__',
          },
        ],
        'no-restricted-syntax': [
          'error',
          'TSEnumDeclaration[const=true]',
          'TSExportAssignment',
        ],
        'no-self-assign': [
          'error',
          {
            props: true,
          },
        ],
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-shadow-restricted-names': 'error',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'no-this-before-super': 'error',
        'no-throw-literal': 'error',
        'no-undef': 'error',
        'no-undef-init': 'error',
        'no-unexpected-multiline': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unneeded-ternary': [
          'error',
          {
            defaultAssignment: false,
          },
        ],
        'no-unreachable': 'error',
        'no-unreachable-loop': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'no-unused-expressions': [
          'error',
          {
            allowShortCircuit: true,
            allowTaggedTemplates: true,
            allowTernary: true,
          },
        ],
        'no-unused-vars': [
          'error',
          {
            args: 'none',
            caughtErrors: 'none',
            ignoreRestSiblings: true,
            vars: 'all',
          },
        ],
        'no-use-before-define': [
          'error',
          {
            classes: false,
            functions: false,
            variables: true,
          },
        ],
        'no-useless-backreference': 'error',
        'no-useless-call': 'error',
        'no-useless-catch': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-constructor': 'error',
        'no-useless-rename': 'error',
        'no-useless-return': 'error',
        'no-var': 'error',
        'no-with': 'error',
        'object-shorthand': [
          'error',
          'always',
          {
            avoidQuotes: true,
            ignoreConstructors: false,
          },
        ],
        'one-var': [
          'error',
          {
            initialized: 'never',
          },
        ],
        'prefer-arrow-callback': [
          'error',
          {
            allowNamedFunctions: false,
            allowUnboundThis: true,
          },
        ],
        'prefer-const': [
          'error',
          {
            destructuring: 'all',
            ignoreReadBeforeAssign: true,
          },
        ],
        'prefer-exponentiation-operator': 'error',
        'prefer-promise-reject-errors': 'error',
        'prefer-regex-literals': [
          'error',
          {
            disallowRedundantWrapping: true,
          },
        ],
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'symbol-description': 'error',
        'unicode-bom': ['error', 'never'],
        'use-isnan': [
          'error',
          {
            enforceForIndexOf: true,
            enforceForSwitchCase: true,
          },
        ],
        'valid-typeof': [
          'error',
          {
            requireStringLiterals: true,
          },
        ],
        'vars-on-top': 'error',
        'yoda': ['error', 'never'],
        ...overrides,
      },
    },
  ];
}
