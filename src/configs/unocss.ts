import configUnocss from '@unocss/eslint-config/flat';
import { isPackageAvailable } from '../utils';
import { GLOB_SRC, RULE_PREFIX } from '../consts';
import type { Linter } from 'eslint';
import type { IUnocssConfigsOptions } from '../types';

export function unocss(options: IUnocssConfigsOptions = {}): Linter.Config[] {
  const { overrides = {} } = options;

  const isUnocssEnabled = isPackageAvailable('unocss');

  if (!isUnocssEnabled) {
    return [];
  }

  return [
    {
      ...configUnocss as unknown as Linter.Config,
      name: `${RULE_PREFIX}/unocss/shared`,
      files: GLOB_SRC,
    },
    {
      name: `${RULE_PREFIX}/unocss/customize`,
      files: GLOB_SRC,
      rules: overrides,
    },
  ];
}
