import pluginEslintComments from '@eslint-community/eslint-plugin-eslint-comments/configs';
import { RULE_PREFIX } from '../consts';
import type { Linter } from 'eslint';
import type { IEslintCommentsConfigsOptions } from '../types';

export function eslintComments(options: IEslintCommentsConfigsOptions = {}): Linter.Config[] {
  const { overrides = {} } = options;

  return [
    {
      ...pluginEslintComments.recommended,
      name: `${RULE_PREFIX}/eslint-comments/shared`,
    },
    {
      name: `${RULE_PREFIX}/eslint-comments/customize`,
      rules: overrides,
    },
  ];
}
