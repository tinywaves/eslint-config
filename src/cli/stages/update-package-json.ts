import fsp from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import * as p from '@clack/prompts';
import c from 'ansis';
import pkgJson, { version } from '../../../package.json';
import type { ICliOptions } from '../../types';

async function ensureScript(
  scripts: Record<string, any>,
  name: string,
  command: string,
  shouldOverwrite?: boolean,
) {
  if (scripts[name] == null) {
    scripts[name] = command;
    return;
  }

  if (scripts[name] === command) {
    return;
  }

  const should = shouldOverwrite === undefined
    ? (await p.confirm({
        message: `Script "${name}" already exists as "${String(scripts[name])}". Replace it with "${command}"?`,
        initialValue: true,
      }))
    : shouldOverwrite;

  if (p.isCancel(should)) {
    p.cancel('Operation cancelled');
    throw new Error('Operation cancelled');
  }

  if (should) {
    scripts[name] = command;
  }
}

export async function updatePackageJson(options: ICliOptions) {
  const cwd = process.cwd();
  const pathPackageJSON = path.join(cwd, 'package.json');
  p.log.step(c.cyan`Bumping @dhzh/eslint-config to v${version}`);
  const pkgContent = await fsp.readFile(pathPackageJSON, 'utf8');
  const pkg: Record<string, any> = JSON.parse(pkgContent);

  // devDependencies
  pkg.devDependencies ??= {};
  pkg.devDependencies['@dhzh/eslint-config'] = `^${version}`;
  pkg.devDependencies.eslint ??= pkgJson.devDependencies.eslint;
  // scripts
  pkg.scripts ??= {};
  await ensureScript(pkg.scripts, 'lint', 'eslint', options.replaceLint);
  await ensureScript(pkg.scripts, 'lint-fix', 'eslint --fix', options.replaceLintFix);

  await fsp.writeFile(pathPackageJSON, JSON.stringify(pkg, null, 2));
  p.log.success(c.green`Changes wrote to package.json`);
}
