import fsp from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import c from 'ansis';
import * as p from '@clack/prompts';
import { eslintConfigContent } from '../constants';

export async function updateEslintFiles() {
  const cwd = process.cwd();
  const pathPackageJSON = path.join(cwd, 'package.json');
  const pkgContent = await fsp.readFile(pathPackageJSON, 'utf8');
  const pkg: Record<string, any> = JSON.parse(pkgContent);
  const configFileName = pkg.type === 'module' ? 'eslint.config.js' : 'eslint.config.mjs';
  const pathFlatConfig = path.join(cwd, configFileName);

  await fsp.writeFile(pathFlatConfig, eslintConfigContent);
  p.log.success(c.green`Created ${configFileName}`);
}
