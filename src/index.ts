import {
  unocss,
  yml,
  stylisticConfigs,
  javascriptConfigs,
  typescriptConfigs,
  eslintCommentsConfigs,
  disablesConfigs,
} from './configs';
import type { Linter } from 'eslint';
import type { Options } from './types';

export function defineConfig(options: Options = {}): Linter.Config[] {
  return [
    ...unocss(),
    ...yml(options.yml),
    ...stylisticConfigs(),
    ...javascriptConfigs(),
    ...typescriptConfigs(),
    ...eslintCommentsConfigs(),
    ...disablesConfigs(),
  ];
}
