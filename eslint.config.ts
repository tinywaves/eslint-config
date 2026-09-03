import { defineConfig } from './src';

export default defineConfig({
  ignorePatterns: [
    'eslint-typegen.d.ts',
    '.eslint-config-inspector',
  ],
});
