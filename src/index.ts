import { Linter } from 'eslint';
import { stylisticConfigs } from './configs';
import { typescriptConfigs } from './configs/typescript';

export function defineConfig(): Linter.Config[] {
  return [
    ...stylisticConfigs(),
    ...typescriptConfigs(),
  ];
}
