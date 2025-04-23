import * as pluginRegexp from 'eslint-plugin-regexp';
import { RULE_PREFIX, GLOB_SRC } from '../consts';
import type { Linter } from 'eslint';
import type { IRegexpConfigsOptions } from '../types';

export function regexp(options: IRegexpConfigsOptions = {}): Linter.Config[] {
  const { overrides = {} } = options;

  return [
    {
      ...pluginRegexp.configs['flat/recommended'],
      name: `${RULE_PREFIX}/regexp/shared`,
      files: GLOB_SRC,
    },
    {
      name: `${RULE_PREFIX}/regexp/customize`,
      files: GLOB_SRC,
      rules: overrides,
    },
  ];
}
