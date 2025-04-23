import pluginTailwindcss from 'eslint-plugin-tailwindcss';
import { RULE_PREFIX, GLOB_SRC } from '../consts';
import type { Linter } from 'eslint';
import type { ITailwindcssConfigsOptions } from '../types';

export function tailwindcss(options: ITailwindcssConfigsOptions = {}): Linter.Config[] {
  const { overrides = {} } = options;

  return [
    ...pluginTailwindcss.configs['flat/recommended'].map((item) => ({
      ...item,
      name: `${RULE_PREFIX}/tailwindcss/shared/${item.name?.replace('tailwindcss:', '')}`,
      files: GLOB_SRC,
    })) as Linter.Config[],
    {
      name: `${RULE_PREFIX}/tailwindcss/customize`,
      files: GLOB_SRC,
      rules: overrides,
    },
  ];
}
