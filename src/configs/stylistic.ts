import { pluginAntfu } from '../plugins';
import { interopDefault } from '../utils';

import type { OptionsOverrides, StylisticConfig, TypedFlatConfigItem } from '../types';

export const StylisticConfigDefaults: StylisticConfig = {
  indent: 2,
  jsx: true,
  quotes: 'single',
  semi: true,
};

export interface StylisticOptions extends StylisticConfig, OptionsOverrides {
  lessOpinionated?: boolean;
}

export async function stylistic(
  options: StylisticOptions = {},
): Promise<TypedFlatConfigItem[]> {
  const {
    indent,
    jsx,
    lessOpinionated = false,
    overrides = {},
    quotes,
    semi,
  } = {
    ...StylisticConfigDefaults,
    ...options,
  };

  const pluginStylistic = await interopDefault(import('@stylistic/eslint-plugin'));

  const config = pluginStylistic.configs.customize({
    arrowParens: true,
    braceStyle: '1tbs',
    indent,
    jsx,
    pluginName: 'style',
    quotes,
    semi,
  });

  return [
    {
      name: 'dhzh/stylistic/rules',
      plugins: {
        antfu: pluginAntfu,
        style: pluginStylistic,
      },
      rules: {
        ...config.rules,

        'antfu/consistent-chaining': 'error',
        'antfu/consistent-list-newline': 'error',

        ...jsx
          ? {
              'style/jsx-curly-spacing': ['error', { children: true, when: 'never' }],
            }
          : {},

        ...(lessOpinionated
          ? {
              curly: ['error', 'all'],
            }
          : {
              'antfu/curly': 'off',
              'antfu/if-newline': 'error',
              'antfu/top-level-function': 'off',
              'curly': ['error', 'all'],
            }
        ),

        ...overrides,
      },
    },
  ];
}
