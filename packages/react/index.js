module.exports = {
  extends: [
    '@denverzh/eslint-config-typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended'
  ],
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true
  },
  globals: {
    React: true,
    ReactDOM: true
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        },
        warnOnUnsupportedTypeScriptVersion: true
      }
    }
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.tsx'] }],
    'react/prop-types': 'off',
    'react/display-name': ['off', { ignoreTranspilerName: false }],
    'react/no-unknown-property': ['error', { ignore: ['css', 'jsx'] }],
    'react/jsx-boolean-value': ['error', 'never', { always: [] }],
    'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],
    'react/jsx-handler-names': [
      'off',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on'
      }
    ],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-max-props-per-line': [
      'error',
      { maximum: 1, when: 'multiline' }
    ],
    'react/jsx-no-bind': [
      'error',
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false,
        ignoreDOMComponents: true
      }
    ],
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true,
        ignore: []
      }
    ],
    'react/prefer-stateless-function': [
      'error',
      { ignorePureComponents: true }
    ],
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-variables',
          'static-methods',
          'instance-variables',
          'lifecycle',
          '/^handle.+$/',
          '/^on.+$/',
          'getters',
          'setters',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'instance-methods',
          'everything-else',
          'rendering'
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'state',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount'
          ],
          rendering: ['/^render.+$/', 'render']
        }
      }
    ],
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line'
      }
    ],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-indent': ['error', 2],
    'react/style-prop-object': 'error',
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never'
      }
    ],
    'react/no-array-index-key': 'off',
    'react/void-dom-elements-no-children': 'error',
    'react/no-unused-state': 'error',
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never', propElementValues: 'always' }
    ],
    'react/no-access-state-in-setstate': 'error',
    'react/no-this-in-sfc': 'error',
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-curly-newline': [
      'error',
      {
        multiline: 'consistent',
        singleline: 'consistent'
      }
    ],
    'react/jsx-no-script-url': [
      'error',
      [
        {
          name: 'Link',
          props: ['to', 'href']
        },
        {
          name: 'NextLink',
          props: ['href']
        }
      ]
    ],
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-no-constructed-context-values': 'error',
    'react/no-unstable-nested-components': 'error',
    'react/no-unused-class-component-methods': 'error',
    'react/hook-use-state': ['warn', { allowDestructuredState: true }],
    'react/iframe-missing-sandbox': 'warn',
    'react/jsx-no-leaked-render': 'off',
    'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
    'react/jsx-props-no-spreading': [
      'warn',
      {
        html: 'ignore',
        custom: 'ignore',
        explicitSpread: 'ignore'
      }
    ],
    'react/require-default-props': 'off',

    'class-methods-use-this': [
      'error',
      {
        exceptMethods: [
          'render',
          'getInitialState',
          'getDefaultProps',
          'getChildContext',
          'componentWillMount',
          'UNSAFE_componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'UNSAFE_componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'UNSAFE_componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
          'componentDidCatch',
          'getSnapshotBeforeUpdate'
        ]
      }
    ],
    'jsx-quotes': ['error', 'prefer-double'],

    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image']
      }
    ],
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',

    'react-hooks/rules-of-hooks': 'error'
  }
};
