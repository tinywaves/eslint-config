export const RULE_PREFIX = 'tinywaves';

export const GLOB_YML = '**/*.y?(a)ml';
export const GLOB_TOML = '**/*.toml';
export const GLOB_JSON = '**/*.json';
export const GLOB_JSON5 = '**/*.json5';
export const GLOB_JSONC = '**/*.jsonc';
export const GLOB_PACKAGE_JSON = '**/package.json';
export const GLOB_HTML = '**/*.htm?(l)';
export const GLOB_CSS = '**/*.css';
export const GLOB_POSTCSS = '**/*.{p,post}css';
export const GLOB_LESS = '**/*.less';
export const GLOB_SCSS = '**/*.scss';
export const GLOB_GRAPHQL = '**/*.{g,graph}ql';
export const GLOB_XML = '**/*.xml';
export const GLOB_SVG = '**/*.svg';

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

export const GLOB_EXCLUDE = [
  '**/node_modules',
  '**/dist',
  '**/package-lock.json',
  '**/yarn.lock',
  '**/pnpm-lock.yaml',
  '**/bun.lockb',
  '**/output',
  '**/coverage',
  '**/temp',
  '**/.temp',
  '**/tmp',
  '**/.tmp',
  '**/.history',
  '**/.vitepress/cache',
  '**/.nuxt',
  '**/.next',
  '**/.svelte-kit',
  '**/.vercel',
  '**/.changeset',
  '**/.idea',
  '**/.cache',
  '**/.output',
  '**/.vite-inspect',
  '**/.yarn',
  '**/vite.config.*.timestamp-*',
  '**/CHANGELOG*.md',
  '**/*.min.*',
  '**/LICENSE*',
  '**/__snapshots__',
  '**/auto-import?(s).d.ts',
  '**/components.d.ts',
];
