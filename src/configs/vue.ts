import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import { mergeProcessors } from 'eslint-merge-processors';
import processorVueBlocks from 'eslint-processor-vue-blocks';
import { GLOB_VUE, RULE_PREFIX } from '../consts';
import type { Linter } from 'eslint';
import type { IVueConfigsOptions } from '../types';

export function vue(options: IVueConfigsOptions = {}): Linter.Config[] {
  const { overrides = {} } = options;

  return tseslint.config(
    {
      ...js.configs.recommended,
      name: `${RULE_PREFIX}/vue/shared/javascript`,
      files: [GLOB_VUE],
    },
    tseslint.configs.recommended.map((item) => ({
      ...item,
      name: `${RULE_PREFIX}/vue/shared/typescript/${item.name?.replace('typescript-eslint/', '')}`,
      files: [GLOB_VUE],
    })),
    pluginVue.configs['flat/recommended'].map((item) => ({
      ...item,
      name: `${RULE_PREFIX}/vue/shared/${item.name?.replace('vue/', '')}`,
      files: [GLOB_VUE],
    })),
    {
      name: `${RULE_PREFIX}/vue/customize`,
      files: [GLOB_VUE],
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        globals: globals.browser,
        parserOptions: {
          parser: tseslint.parser,
        },
      },
      processor: mergeProcessors([
        pluginVue.processors['.vue'] as Linter.Processor,
        processorVueBlocks({
          blocks: {
            styles: true,
            customBlocks: true,
            script: false,
            template: false,
          },
        }),
      ]),
      rules: overrides,
    },
  ) as Linter.Config[];
}
