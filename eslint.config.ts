import styleMigrate from '@stylistic/eslint-plugin-migrate';

import { dhzh } from './src';

export default dhzh(
  {
    typescript: true,
    formatters: true,
    type: 'lib',
  },
  {
    ignores: [],
  },
  {
    files: ['src/configs/*.ts'],
    plugins: {
      'style-migrate': styleMigrate,
    },
    rules: {
      'style-migrate/migrate': ['error', { namespaceTo: 'style' }],
    },
  },
);
