import { GLOB_EXCLUDE, RULE_PREFIX } from '../consts';
import type { Linter } from 'eslint';

export function ignores(ignorePatterns: string[]): Linter.Config[] {
  return [
    {
      name: `${RULE_PREFIX}/ignores`,
      ignores: [
        ...GLOB_EXCLUDE,
        ...ignorePatterns,
      ],
    },
  ];
}
