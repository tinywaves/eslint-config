import configUnocss from '@unocss/eslint-config/flat';
import { isPackageExists } from 'local-pkg';
import { GLOB_SRC, RULE_PREFIX } from '../consts';
import type { Linter } from 'eslint';
import type { IUnocssConfigsOptions } from '../types';

export function unocss(options: IUnocssConfigsOptions = {}): Linter.Config[] {
  const { overrides = {} } = options;

  const isUnocssEnabled = isPackageExists('unocss');

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
