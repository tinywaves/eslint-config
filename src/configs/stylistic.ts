import type { Linter } from 'eslint';
import pluginStylistic from '@stylistic/eslint-plugin';
import pluginAntfu from 'eslint-plugin-antfu';
import pluginHyoban from 'eslint-plugin-hyoban';
import tseslint from 'typescript-eslint';
import { RULE_PREFIX, GLOB_JSX_SRC, GLOB_SRC, GLOB_TS_SRC } from '../consts';

export function stylisticConfigs(): Linter.Config[] {
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
      name: `${RULE_PREFIX}/stylistic/shared`,
      files: GLOB_SRC,
      ...pluginStylistic.configs.customize({
        arrowParens: true,
        semi: true,
      }),
    },
    {
      name: `${RULE_PREFIX}/stylistic/customize-js/ts`,
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
        'stylistic/lines-around-comment': [
          'error',
          {
            beforeBlockComment: true,
            afterBlockComment: false,
            beforeLineComment: true,
            afterLineComment: false,
            allowBlockStart: true,
            allowBlockEnd: true,
            allowClassStart: true,
            allowClassEnd: true,
            allowObjectStart: true,
            allowObjectEnd: true,
            allowArrayStart: true,
            allowArrayEnd: true,
            afterHashbangComment: false,
          },
        ],
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
      },
    },
    {
      name: `${RULE_PREFIX}/stylistic/customize-jsx`,
      plugins: {
        stylistic: pluginStylistic,
        hyoban: pluginHyoban,
      },
      files: GLOB_JSX_SRC,
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
      },
    },
    ...tseslint.config(tseslint.configs.stylisticTypeChecked) as Linter.Config[],
    {
      name: `${RULE_PREFIX}/stylistic/typescript-eslint/customize`,
      files: GLOB_TS_SRC,
      rules: {
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/array-type': [
          'error',
          {
            default: 'array-simple',
          },
        ],
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
      },
    },
  ];
}
