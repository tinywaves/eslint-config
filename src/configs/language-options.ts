import { RULE_PREFIX, GLOB_SRC } from '../consts';
import type { Linter } from 'eslint';
import type { ILanguageOptionsConfigsOptions } from '../types';

export function languageOptions(options: ILanguageOptionsConfigsOptions = {}): Linter.Config[] {
  const { sourceType = 'module' } = options;

  return [
    {
      name: `${RULE_PREFIX}/language-options`,
      files: GLOB_SRC,
      languageOptions: {
        sourceType,
      },
    },
  ];
}
