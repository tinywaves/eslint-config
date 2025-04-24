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
  eslintCommentsConfigs,
  disablesConfigs,
} from './configs';
import type { Linter } from 'eslint';
import type { Options } from './types';

export function defineConfig(options: Options = {}): Linter.Config[] {
  return [
    ...react(options.react),
    ...stylistic(options.stylistic),
    ...typescript(options.typescript),
    ...javascript(options.javascript),
    ...node(options.node),
    ...json(options.json),
    ...unicorn(options.unicorn),
    ...imports(options.imports),
    ...tailwindcss(options.tailwindcss),
    ...unocss(options.unocss),
    ...yml(options.yml),
    ...toml(options.toml),
    ...regexp(options.regexp),
    ...eslintCommentsConfigs(),
    ...disablesConfigs(),
  ];
}
