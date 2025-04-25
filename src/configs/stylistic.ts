import pluginStylistic from '@stylistic/eslint-plugin';
import pluginAntfu from 'eslint-plugin-antfu';
import pluginHyoban from 'eslint-plugin-hyoban';
import { RULE_PREFIX, GLOB_JSX_SRC, GLOB_SRC, GLOB_JSON_SRC } from '../consts';
import type { Linter } from 'eslint';
import type { IStylisticConfigsOptions } from '../types';

export function stylistic(options: IStylisticConfigsOptions = {}): Linter.Config[] {
  const { overrides = {} } = options;

  const jsxIgnoreNodes = [
    'TemplateLiteral *',
    'TSUnionType',
    'TSIntersectionType',
    'TSTypeParameterInstantiation',
    'FunctionExpression > .params[decorators.length > 0]',
    'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
  ];

  const nonJsxIgnoreNodes = [
    'JSXOpeningElement',
    'JSXClosingElement',
  ];

  const basicIndentRuleOptions = {
    ArrayExpression: 1,
    CallExpression: {
      arguments: 1,
    },
    flatTernaryExpressions: false,
    FunctionDeclaration: {
      body: 1,
      parameters: 1,
    },
    FunctionExpression: {
      body: 1,
      parameters: 1,
    },
    ignoreComments: false,
    ImportDeclaration: 1,
    MemberExpression: 1,
    ObjectExpression: 1,
    offsetTernaryExpressions: true,
    outerIIFEBody: 1,
    SwitchCase: 1,
    VariableDeclarator: 1,
  };

  return [
    {
      ...pluginStylistic.configs.customize({
        arrowParens: true,
        semi: true,
        braceStyle: '1tbs',
      }),
      name: `${RULE_PREFIX}/stylistic/shared`,
      files: [...GLOB_SRC, ...GLOB_JSON_SRC],
    },
    {
      name: `${RULE_PREFIX}/stylistic/customize`,
      files: [...GLOB_SRC, ...GLOB_JSON_SRC],
      plugins: {
        stylistic: pluginStylistic,
        antfu: pluginAntfu,
        hyoban: pluginHyoban,
      },
      rules: {
        'curly': ['error', 'all'],
        'object-shorthand': 'error',
        'prefer-destructuring': [
          'error',
          {
            VariableDeclarator: {
              array: false,
              object: true,
            },
            AssignmentExpression: {
              array: false,
              object: false,
            },
          },
          {
            enforceForRenamedProperties: false,
          },
        ],
        'prefer-template': 'error',
        'stylistic/array-bracket-newline': [
          'error',
          {
            multiline: true,
          },
        ],
        'stylistic/array-element-newline': ['error', 'consistent'],
        'stylistic/brace-style': [
          'error',
          '1tbs',
          {
            allowSingleLine: false,
          },
        ],
        'stylistic/function-call-spacing': ['error', 'never'],
        'stylistic/function-paren-newline': ['error', 'multiline'],
        'stylistic/indent': [
          'error',
          2,
          {
            ...basicIndentRuleOptions,
            ignoredNodes: [
              ...jsxIgnoreNodes,
              ...nonJsxIgnoreNodes,
            ],
          },
        ],
        'stylistic/key-spacing': [
          'error',
          {
            beforeColon: false,
            afterColon: true,
            mode: 'strict',
          },
        ],
        'stylistic/keyword-spacing': [
          'error',
          {
            before: true,
            after: true,
          },
        ],
        'stylistic/line-comment-position': [
          'error',
          {
            position: 'above',
          },
        ],
        'stylistic/linebreak-style': ['error', 'unix'],
        'stylistic/lines-around-comment': 'off',
        'stylistic/new-parens': ['error', 'always'],
        'stylistic/no-confusing-arrow': [
          'error',
          {
            allowParens: true,
            onlyOneSimpleParam: true,
          },
        ],
        'stylistic/no-extra-semi': 'error',
        'stylistic/object-property-newline': [
          'error',
          {
            allowMultiplePropertiesPerLine: true,
          },
        ],
        'stylistic/switch-colon-spacing': [
          'error',
          {
            after: true,
            before: false,
          },
        ],
        'stylistic/type-annotation-spacing': [
          'error',
          {
            before: false,
            after: true,
          },
        ],
        'stylistic/wrap-regex': 'error',
        'stylistic/quotes': [
          'error',
          'single',
          {
            allowTemplateLiterals: true,
            avoidEscape: true,
          },
        ],
        'stylistic/no-tabs': 'off',
        'antfu/consistent-chaining': 'error',
        'antfu/consistent-list-newline': 'error',
        'antfu/top-level-function': 'off',
        'antfu/curly': 'off',
        'hyoban/prefer-early-return': 'error',
        ...overrides,
      },
    },
    {
      name: `${RULE_PREFIX}/stylistic/customize/jsx`,
      files: GLOB_JSX_SRC,
      plugins: {
        stylistic: pluginStylistic,
        hyoban: pluginHyoban,
      },
      rules: {
        'stylistic/indent': [
          'error',
          2,
          {
            ...basicIndentRuleOptions,
            ignoredNodes: jsxIgnoreNodes,
          },
        ],
        'stylistic/jsx-closing-bracket-location': [
          'error',
          {
            nonEmpty: 'tag-aligned',
            selfClosing: 'tag-aligned',
          },
        ],
        'stylistic/jsx-closing-tag-location': ['error', 'tag-aligned'],
        'stylistic/jsx-curly-brace-presence': [
          'error',
          {
            props: 'never',
            children: 'never',
            propElementValues: 'always',
          },
        ],
        'stylistic/jsx-curly-newline': [
          'error',
          {
            singleline: 'consistent',
            multiline: 'consistent',
          },
        ],
        'stylistic/jsx-curly-spacing': [
          'error',
          {
            when: 'never',
            attributes: {
              when: 'never',
            },
            children: {
              when: 'never',
            },
          },
        ],
        'stylistic/jsx-first-prop-new-line': ['error', 'multiline'],
        'stylistic/jsx-one-expression-per-line': [
          'error',
          {
            allow: 'non-jsx',
          },
        ],
        'stylistic/jsx-pascal-case': [
          'error',
          {
            allowAllCaps: false,
            allowLeadingUnderscore: false,
            allowNamespace: true,
          },
        ],
        'stylistic/jsx-props-no-multi-spaces': 'error',
        'stylistic/jsx-quotes': ['error', 'prefer-double'],
        'stylistic/jsx-self-closing-comp': [
          'error',
          {
            component: true,
            html: true,
          },
        ],
        'stylistic/jsx-sort-props': 'off',
        'stylistic/jsx-indent-props': 'off',
        'hyoban/jsx-attribute-spacing': 'error',
        ...overrides,
      },
    },
  ];
}
