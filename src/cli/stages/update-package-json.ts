import fsp from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import * as p from '@clack/prompts';
import c from 'ansis';
import pkgJson, { version } from '../../../package.json';

export async function updatePackageJson() {
  const cwd = process.cwd();
  const pathPackageJSON = path.join(cwd, 'package.json');
  p.log.step(c.cyan`Bumping @dhzh/eslint-config to v${version}`);
  const pkgContent = await fsp.readFile(pathPackageJSON, 'utf8');
  const pkg: Record<string, any> = JSON.parse(pkgContent);

  pkg.devDependencies ??= {};
  pkg.devDependencies['@dhzh/eslint-config'] = `^${version}`;
  pkg.devDependencies.eslint ??= pkgJson.devDependencies.eslint;
  await fsp.writeFile(pathPackageJSON, JSON.stringify(pkg, null, 2));
  p.log.success(c.green`Changes wrote to package.json`);
}
