import * as p from '@clack/prompts';
import c from 'ansis';
import { updateEslintConfig } from './stages/update-eslint-config';
import { updatePackageJson } from './stages/update-package-json';
import { updateVscodeSettings } from './stages/update-vscode-settings';

export async function run() {
  await updatePackageJson();
  await updateEslintConfig();
  await updateVscodeSettings();
  p.log.success(c.green`Setup completed`);
  p.outro(`Now you can update the dependencies by run ${c.blue('pnpm i')} and run ${c.blue('eslint --fix')}\n`);
}
