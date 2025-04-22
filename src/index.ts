import type { Linter } from 'eslint';
import {
  stylisticConfigs,
  javascriptConfigs,
  typescriptConfigs,
  eslintCommentsConfigs,
} from './configs';

export function defineConfig(): Linter.Config[] {
  return [
    ...stylisticConfigs(),
    ...javascriptConfigs(),
    ...typescriptConfigs(),
    ...eslintCommentsConfigs(),
  ];
}
