import pluginTailwindcss from 'eslint-plugin-tailwindcss';
import { isPackageExists } from 'local-pkg';
import { RULE_PREFIX, GLOB_SRC } from '../consts';
import type { Linter } from 'eslint';
import type { ITailwindcssConfigsOptions } from '../types';

export function tailwindcss(options: ITailwindcssConfigsOptions = {}): Linter.Config[] {
  const { overrides = {} } = options;

  return isPackageExists('tailwindcss')
    ? [
        ...pluginTailwindcss.configs['flat/recommended'].map((item) => ({
          ...item,
          name: `${RULE_PREFIX}/tailwindcss/shared/${item.name?.replace('tailwindcss:', '')}`,
          files: GLOB_SRC,
        })) as Linter.Config[],
        {
          name: `${RULE_PREFIX}/tailwindcss/customize`,
          files: GLOB_SRC,
          rules: {
            'tailwindcss/no-custom-classname': 'off',
            ...overrides,
          },
        },
      ]
    : [];
}
