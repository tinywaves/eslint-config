import * as p from '@clack/prompts';
import c from 'ansis';
import { updatePackageJson } from './stages/update-package-json';
import { updateEslintConfig } from './stages/update-eslint-config';
import { updateNpmignore } from './stages/update-npmignore';
import { updateVscodeSettings } from './stages/update-vscode-settings';
import type { ICliOptions } from '../types';

export async function run(options: ICliOptions) {
  await updatePackageJson();
  await updateEslintConfig(options);
  await updateNpmignore();
  await updateVscodeSettings();
  p.log.success(c.green`Setup completed`);
  p.outro(`Now you can update the dependencies by run ${c.blue('pnpm i')} and run ${c.blue('eslint --fix')}\n`);
}
