import pluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss';
import { isPackageAvailable } from '../utils';
import { RULE_PREFIX, GLOB_SRC } from '../consts';
import type { ITailwindcssConfigsOptions, LinterConfig } from '../types';

export function tailwindcss(options: ITailwindcssConfigsOptions = {}): LinterConfig[] {
  const { overrides = {} } = options;

  return isPackageAvailable('tailwindcss')
    ? [
        {
          ...pluginBetterTailwindcss.configs.recommended,
          name: `${RULE_PREFIX}/tailwindcss/shared`,
          files: GLOB_SRC,
        },
        {
          name: `${RULE_PREFIX}/tailwindcss/customize`,
          files: GLOB_SRC,
          rules: overrides,
        },
      ]
    : [];
}
