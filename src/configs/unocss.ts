import configUnocss from '@unocss/eslint-config/flat';
import { GLOB_SRC, RULE_PREFIX } from '../consts';
import type { Linter } from 'eslint';

export function unocss(): Linter.Config[] {
  return [
    {
      ...configUnocss as unknown as Linter.Config,
      name: `${RULE_PREFIX}/unocss/shared`,
      files: GLOB_SRC,
    },
  ];
}
