export const RULE_PREFIX = 'tinywaves';

export const GLOB_YML = '**/*.y?(a)ml';
export const GLOB_TOML = '**/*.toml';
export const GLOB_JSON = '**/*.json';
export const GLOB_JSON5 = '**/*.json5';
export const GLOB_JSONC = '**/*.jsonc';
export const GLOB_PACKAGE_JSON = '**/package.json';

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

export const GLOB_SRC_EXT = GLOB_SRC.map((item) => item.replace('**/*.', ''));

export const GLOB_TESTS = GLOB_SRC_EXT.flatMap((item) => [
  `**/__tests__/**/*.${item}`,
  `**/*.spec.${item}`,
  `**/*.test.${item}`,
  `**/*.bench.${item}`,
  `**/*.benchmark.${item}`,
]);
