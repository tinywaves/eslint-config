import { interopDefault } from '../utils';
import type { TypedFlatConfigItem } from '../types';

export async function pnpm(): Promise<TypedFlatConfigItem[]> {
  return [
    {
      files: [
        'package.json',
        '**/package.json',
      ],
      languageOptions: {
        parser: await interopDefault(import('jsonc-eslint-parser')),
      },
      name: 'dhzh/pnpm/rules',
      plugins: {
        pnpm: await interopDefault(import('eslint-plugin-pnpm')),
      },
      rules: {
        'pnpm/enforce-catalog': 'error',
        'pnpm/prefer-workspace-settings': 'error',
        'pnpm/valid-catalog': 'error',
      },
    },
  ];
}
