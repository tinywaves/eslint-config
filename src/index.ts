import {
  typescript,
  unicorn,
  unocss,
  yml,
  stylisticConfigs,
  javascriptConfigs,
  eslintCommentsConfigs,
  disablesConfigs,
} from './configs';
import type { Linter } from 'eslint';
import type { Options } from './types';

export function defineConfig(options: Options = {}): Linter.Config[] {
  return [
    ...typescript(options.typescript),
    ...unicorn(options.unicorn),
    ...unocss(options.unocss),
    ...yml(options.yml),
    ...stylisticConfigs(),
    ...javascriptConfigs(),
    ...eslintCommentsConfigs(),
    ...disablesConfigs(),
  ];
}
