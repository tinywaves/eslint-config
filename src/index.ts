import {
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
    ...yml(options.yml),
    ...stylisticConfigs(),
    ...javascriptConfigs(),
    ...typescriptConfigs(),
    ...eslintCommentsConfigs(),
    ...disablesConfigs(),
  ];
}
