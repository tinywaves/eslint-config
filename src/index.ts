import {
  react,
  vue,
  stylistic,
  typescript,
  javascript,
  node,
  json,
  unicorn,
  imports,
  format,
  tailwindcss,
  unocss,
  yml,
  toml,
  regexp,
  ignores,
  eslintComments,
  disables,
  languageOptions,
} from './configs';
import type { Linter } from 'eslint';
import type { Options } from './types';

export function defineConfig(options: Options = {}): Linter.Config[] {
  const { configs = {}, ignorePatterns = [], sourceType = 'module' } = options;

  return [
    ...react(configs.react),
    ...vue(configs.vue),
    ...stylistic(configs.stylistic),
    ...typescript(configs.typescript),
    ...javascript(configs.javascript),
    ...node(configs.node),
    ...json(configs.json),
    ...unicorn(configs.unicorn),
    ...imports(configs.imports),
    ...format(configs.format),
    ...tailwindcss(configs.tailwindcss),
    ...unocss(configs.unocss),
    ...yml(configs.yml),
    ...toml(configs.toml),
    ...regexp(configs.regexp),
    ...ignores(ignorePatterns),
    ...eslintComments(configs.eslintComments),
    ...disables(configs.disables),
    ...languageOptions({ sourceType }),
  ];
}
