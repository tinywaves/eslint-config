/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// @ts-nocheck
import pluginEslintComment from '@eslint-community/eslint-plugin-eslint-comments';
import type { Linter } from 'eslint';
import { RULE_PREFIX } from '../consts';

export function eslintCommentsConfigs(): Linter.Config[] {
  return [
    {
      name: `${RULE_PREFIX}/eslint-comments/shared`,
      ...pluginEslintComment.recommended,
    },
    {
      name: `${RULE_PREFIX}/eslint-comments/customize`,
      plugins: {
        'eslint-comments': pluginEslintComment,
      },
      rules: {
        'eslint-comments/no-aggregating-enable': 'error',
        'eslint-comments/no-duplicate-disable': 'error',
        'eslint-comments/no-unlimited-disable': 'error',
        'eslint-comments/no-unused-enable': 'error',
      },
    },
  ];
}
