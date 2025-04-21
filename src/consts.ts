export const RULE_PREFIX = 'tinywaves';

export const GLOB_TS_SRC = [
  '**/*.cts',
  '**/*.mts',
  '**/*.ts',
  '**/*.tsx',
];

export const GLOB_JS_SRC = [
  '**/*.cjs',
  '**/*.mjs',
  '**/*.js',
  '**/*.jsx',
];

export const GLOB_JSX_SRC = [
  '**/*.jsx',
  '**/*.tsx',
];

export const GLOB_SRC = [
  ...GLOB_TS_SRC,
  ...GLOB_JS_SRC,
];
