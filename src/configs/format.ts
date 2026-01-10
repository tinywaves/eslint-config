// @ts-ignore
import pluginFormat from 'eslint-plugin-format';
import {
  RULE_PREFIX,
  GLOB_HTML,
  GLOB_CSS,
  GLOB_POSTCSS,
  GLOB_LESS,
  GLOB_SCSS,
  GLOB_GRAPHQL,
  GLOB_XML,
  GLOB_SVG,
} from '../consts';
import { parserPlain } from '../utils';
import type { Linter } from 'eslint';
import type { IFormatConfigsOptions } from '../types';
import type { VendoredPrettierOptions, VendoredPrettierRuleOptions } from '../types/prettier';

const mergePrettierOptions = (
  options: VendoredPrettierOptions,
  overrides: VendoredPrettierRuleOptions,
): VendoredPrettierRuleOptions => ({
  ...options,
  ...overrides,
  plugins: [...(overrides.plugins || [])],
});

export function format(options: IFormatConfigsOptions = {}): Linter.Config[] {
  const {
    enable = {
      html: true,
      css: true,
      graphql: true,
      xml: true,
      svg: true,
    },
    customPrettierOptions = {},
  } = options;

  const configs: Linter.Config[] = [];

  if (!enable) {
    return configs;
  }

  const prettierOptions: VendoredPrettierOptions = Object.assign(
    {
      printWidth: 120,
      tabWidth: 2,
      semi: true,
      singleQuote: true,
      quoteProps: 'consistent',
      jsxSingleQuote: false,
      trailingComma: 'all',
      bracketSpacing: true,
      bracketSameLine: false,
      arrowParens: 'always',
      useTabs: false,
      endOfLine: 'lf',
      singleAttributePerLine: false,
    } satisfies VendoredPrettierOptions,
    customPrettierOptions,
  );

  const prettierXmlOptions: VendoredPrettierOptions = {
    xmlQuoteAttributes: 'double',
    xmlSelfClosingSpace: true,
    xmlSortAttributesByKey: false,
    xmlWhitespaceSensitivity: 'ignore',
  };

  configs.push({
    name: `${RULE_PREFIX}/format`,
    plugins: {
      format: pluginFormat,
    },
  });

  if (enable.html) {
    configs.push({
      name: `${RULE_PREFIX}/format/html`,
      files: [GLOB_HTML],
      languageOptions: {
        parser: parserPlain,
      },
      rules: {
        'format/prettier': [
          'error',
          mergePrettierOptions(prettierOptions, {
            parser: 'html',
          }),
        ],
      },
    });
  }

  if (enable.css) {
    configs.push(
      {
        name: `${RULE_PREFIX}/format/css`,
        files: [GLOB_CSS, GLOB_POSTCSS],
        languageOptions: {
          parser: parserPlain,
        },
        rules: {
          'format/prettier': [
            'error',
            mergePrettierOptions(prettierOptions, {
              parser: 'css',
            }),
          ],
        },
      },
      {
        name: `${RULE_PREFIX}/format/scss`,
        files: [GLOB_SCSS],
        languageOptions: {
          parser: parserPlain,
        },
        rules: {
          'format/prettier': [
            'error',
            mergePrettierOptions(prettierOptions, {
              parser: 'scss',
            }),
          ],
        },
      },
      {
        name: `${RULE_PREFIX}/format/less`,
        files: [GLOB_LESS],
        languageOptions: {
          parser: parserPlain,
        },
        rules: {
          'format/prettier': [
            'error',
            mergePrettierOptions(prettierOptions, {
              parser: 'less',
            }),
          ],
        },
      },
    );
  }

  if (enable.graphql) {
    configs.push({
      name: `${RULE_PREFIX}/format/graphql`,
      files: [GLOB_GRAPHQL],
      languageOptions: {
        parser: parserPlain,
      },
      rules: {
        'format/prettier': [
          'error',
          mergePrettierOptions(prettierOptions, {
            parser: 'graphql',
          }),
        ],
      },
    });
  }

  if (enable.xml) {
    configs.push({
      name: `${RULE_PREFIX}/format/xml`,
      files: [GLOB_XML],
      languageOptions: {
        parser: parserPlain,
      },
      rules: {
        'format/prettier': [
          'error',
          mergePrettierOptions(
            {
              ...prettierXmlOptions,
              ...prettierOptions,
            },
            {
              parser: 'xml',
              plugins: ['@prettier/plugin-xml'],
            },
          ),
        ],
      },
    });
  }

  if (enable.svg) {
    configs.push({
      name: `${RULE_PREFIX}/format/svg`,
      files: [GLOB_SVG],
      languageOptions: {
        parser: parserPlain,
      },
      rules: {
        'format/prettier': [
          'error',
          mergePrettierOptions(
            {
              ...prettierXmlOptions,
              ...prettierOptions,
            },
            {
              parser: 'xml',
              plugins: ['@prettier/plugin-xml'],
            },
          ),
        ],
      },
    });
  }

  return configs;
}
