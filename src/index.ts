import {
  react,
  stylistic,
  typescript,
  javascript,
  node,
  json,
  unicorn,
  imports,
  tailwindcss,
  unocss,
  yml,
  toml,
  regexp,
  ignores,
  eslintCommentsConfigs,
  disablesConfigs,
} from './configs';
import type { Linter } from 'eslint';
import type { Options } from './types';

export function defineConfig(options: Options = {}): Linter.Config[] {
  const { configs = {}, ignorePatterns = [] } = options;

  return [
    ...react(configs.react),
    ...stylistic(configs.stylistic),
    ...typescript(configs.typescript),
    ...javascript(configs.javascript),
    ...node(configs.node),
    ...json(configs.json),
    ...unicorn(configs.unicorn),
    ...imports(configs.imports),
    ...tailwindcss(configs.tailwindcss),
    ...unocss(configs.unocss),
    ...yml(configs.yml),
    ...toml(configs.toml),
    ...regexp(configs.regexp),
    ...ignores(ignorePatterns),
    ...eslintCommentsConfigs(),
    ...disablesConfigs(),
  ];
}
