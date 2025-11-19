import pluginReact from '@eslint-react/eslint-plugin';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReactRefresh from 'eslint-plugin-react-refresh';
import pluginReactCompiler from 'eslint-plugin-react-compiler';
import pluginReactGoogleTranslate from 'eslint-plugin-react-google-translate';
import { isPackageExists } from 'local-pkg';
import { GLOB_SRC, RULE_PREFIX, GLOB_JSX_SRC } from '../consts';
import type { ESLint, Linter } from 'eslint';
import type { IReactConfigsOptions } from '../types';

const ReactRefreshAllowConstantExportPackages = ['vite'];
const RemixPackages = [
  '@remix-run/node',
  '@remix-run/react',
  '@remix-run/serve',
  '@remix-run/dev',
];
const ReactRouterPackages = [
  '@react-router/node',
  '@react-router/react',
  '@react-router/serve',
  '@react-router/dev',
];
const NextJsPackages = ['next'];
const ExpoPackages = ['expo'];

export function react(options: IReactConfigsOptions = {}): Linter.Config[] {
  const {
    language = 'typescript',
    overrides = { compiler: {}, core: {}, hooks: {}, refresh: {}, googleTranslate: {} },
  } = options;

  const config = language === 'typescript'
    ? pluginReact.configs['recommended-type-checked']
    : pluginReact.configs.recommended;

  const isAllowConstantExport = ReactRefreshAllowConstantExportPackages.some((i) => isPackageExists(i));
  const isUsingRemix = RemixPackages.some((i) => isPackageExists(i));
  const isUsingReactRouter = ReactRouterPackages.some((i) => isPackageExists(i));
  const isUsingNext = NextJsPackages.some((i) => isPackageExists(i));
  const isUsingExpo = ExpoPackages.some((i) => isPackageExists(i));

  return [
    {
      name: `${RULE_PREFIX}/react/core/shared`,
      files: GLOB_SRC,
      plugins: {
        ...config.plugins as unknown as Record<string, ESLint.Plugin>,
      },
      rules: config.rules,
    },
    {
      name: `${RULE_PREFIX}/react/core/customize`,
      files: GLOB_SRC,
      plugins: {
        ...config.plugins as unknown as Record<string, ESLint.Plugin>,
      },
      rules: {
        '@eslint-react/dom/no-hydrate': 'error',
        '@eslint-react/no-useless-fragment': 'warn',
        '@eslint-react/hooks-extra/no-unnecessary-use-prefix': 'warn',
        '@eslint-react/naming-convention/use-state': 'warn',
        '@eslint-react/naming-convention/filename-extension': [
          'warn',
          {
            allow: 'as-needed',
            extensions: ['.jsx', '.tsx'],
            ignoreFilesWithoutCode: true,
          },
        ],
        '@eslint-react/naming-convention/context-name': 'warn',
        ...(
          language === 'typescript'
            ? {
                '@eslint-react/no-leaked-conditional-rendering': 'warn',
              }
            : {}
        ),
        ...overrides.core,
      },
    },
    {
      ...pluginReactHooks.configs['recommended-latest'] as Linter.Config,
      name: `${RULE_PREFIX}/react/hooks/shared`,
      files: GLOB_SRC,
    },
    {
      name: `${RULE_PREFIX}/react/hooks/customize`,
      files: GLOB_SRC,
      rules: overrides.hooks || {},
    },
    {
      ...(isAllowConstantExport ? pluginReactRefresh.configs.vite : pluginReactRefresh.configs.recommended) as Linter.Config,
      name: `${RULE_PREFIX}/react/refresh/shared/${isAllowConstantExport ? 'vite' : 'recommended'}`,
      files: GLOB_JSX_SRC,
    },
    {
      name: `${RULE_PREFIX}/react/refresh/customize`,
      files: GLOB_JSX_SRC,
      rules: {
        'react-refresh/only-export-components': [
          'warn',
          {
            allowConstantExport: isAllowConstantExport,
            allowExportNames: [
              ...(
                isUsingNext
                  ? [
                      'dynamic',
                      'dynamicParams',
                      'revalidate',
                      'fetchCache',
                      'runtime',
                      'preferredRegion',
                      'maxDuration',
                      'config',
                      'generateStaticParams',
                      'metadata',
                      'generateMetadata',
                      'viewport',
                      'generateViewport',
                    ]
                  : []
              ),
              ...(
                isUsingRemix || isUsingReactRouter
                  ? [
                      'meta',
                      'links',
                      'headers',
                      'loader',
                      'action',
                    ]
                  : []
              ),
              ...(
                isUsingExpo
                  ? ['unstable_settings']
                  : []
              ),
            ],
          },
        ],
        ...overrides.refresh,
      },
    },
    {
      ...pluginReactCompiler.configs.recommended,
      name: `${RULE_PREFIX}/react/compiler/shared`,
      files: GLOB_SRC,
    },
    {
      name: `${RULE_PREFIX}/react/compiler/customize`,
      files: GLOB_SRC,
      rules: overrides.compiler || {},
    },
    {
      name: `${RULE_PREFIX}/react/google-translate`,
      files: GLOB_JSX_SRC,
      plugins: {
        'react-google-translate': pluginReactGoogleTranslate as ESLint.Plugin,
      },
      rules: {
        'react-google-translate/no-conditional-text-nodes-with-siblings': 'warn',
        'react-google-translate/no-return-text-nodes': 'warn',
        ...overrides.googleTranslate,
      },
    },
  ];
}
