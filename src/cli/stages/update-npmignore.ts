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
  let action = 'Created';

  try {
    await fsp.access(npmignoreFilePath);
    // File exists, read and remove trailing newlines, then append
    const existingContent = await fsp.readFile(npmignoreFilePath, 'utf8');
    const trimmedContent = existingContent.trimEnd();
    await fsp.writeFile(npmignoreFilePath, `${trimmedContent}\n${npmignoreString}`);
    action = 'Updated';
  } catch {
    // File doesn't exist, create it
    await fsp.writeFile(npmignoreFilePath, npmignoreString);
  }

  p.log.success(c.green`${action} ${npmignoreFileName}`);
}
