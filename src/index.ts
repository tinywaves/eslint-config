import {
  stylistic,
  typescript,
  unicorn,
  unocss,
  yml,
  toml,
  regexp,
  javascriptConfigs,
  eslintCommentsConfigs,
  disablesConfigs,
} from './configs';
import type { Linter } from 'eslint';
import type { Options } from './types';

export function defineConfig(options: Options = {}): Linter.Config[] {
  return [
    ...stylistic(options.stylistic),
    ...typescript(options.typescript),
    ...unicorn(options.unicorn),
    ...unocss(options.unocss),
    ...yml(options.yml),
    ...toml(options.toml),
    ...regexp(options.regexp),
    ...javascriptConfigs(),
    ...eslintCommentsConfigs(),
    ...disablesConfigs(),
  ];
}
