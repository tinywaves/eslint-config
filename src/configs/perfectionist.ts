import { pluginPerfectionist } from '../plugins';

import type { TypedFlatConfigItem } from '../types';

/**
 * Perfectionist plugin for props and items sorting.
 *
 * @see https://github.com/azat-io/eslint-plugin-perfectionist
 */
export async function perfectionist(): Promise<TypedFlatConfigItem[]> {
  return [
    {
      name: 'dhzh/perfectionist/setup',
      plugins: {
        perfectionist: pluginPerfectionist,
      },
      rules: {
        'perfectionist/sort-exports': ['off', { order: 'asc', type: 'natural' }],
        'perfectionist/sort-imports': ['off', {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'style',
            'side-effect',
            'side-effect-style',
            'object',
            'builtin-type',
            'external-type',
            'internal-type',
            'parent-type',
            'sibling-type',
            'index-type',
            'unknown',
          ],
          newlinesBetween: 'ignore',
          order: 'asc',
          type: 'natural',
        }],
        'perfectionist/sort-named-exports': ['off', { order: 'asc', type: 'natural' }],
        'perfectionist/sort-named-imports': ['off', { order: 'asc', type: 'natural' }],
      },
    },
  ];
}
