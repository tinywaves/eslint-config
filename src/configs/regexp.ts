import * as pluginRegexp from 'eslint-plugin-regexp';
import { RULE_PREFIX, GLOB_SRC } from '../consts';
import type { IRegexpConfigsOptions, LinterConfig } from '../types';

export function regexp(options: IRegexpConfigsOptions = {}): LinterConfig[] {
  const { overrides = {} } = options;

  return [
    {
      ...pluginRegexp.configs.recommended,
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
