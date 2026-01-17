import fsp from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import c from 'ansis';
import * as p from '@clack/prompts';
import { npmignoreString } from '../constants';

export async function updateNpmignore() {
  const cwd = process.cwd();
  const npmignoreFileName = '.npmignore';
  const npmignoreFilePath = path.join(cwd, npmignoreFileName);
  await fsp.writeFile(npmignoreFilePath, npmignoreString);
  p.log.success(c.green`Created ${npmignoreFileName}`);
}
