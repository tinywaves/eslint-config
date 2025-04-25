import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { green } from 'ansis';
import * as p from '@clack/prompts';
import { vscodeSettingsString } from '../constants';

export async function updateVscodeSettings() {
  const cwd = process.cwd();

  const dotVscodePath: string = path.join(cwd, '.vscode');
  const settingsPath: string = path.join(dotVscodePath, 'settings.json');

  if (!fs.existsSync(dotVscodePath)) {
    await fsp.mkdir(dotVscodePath, { recursive: true });
  }

  if (fs.existsSync(settingsPath)) {
    let settingsContent = await fsp.readFile(settingsPath, 'utf8');

    settingsContent = settingsContent.trim().replace(/\s*\}$/, '');
    settingsContent += settingsContent.endsWith(',') || settingsContent.endsWith('{') ? '' : ',';
    settingsContent += `${vscodeSettingsString}}\n`;

    await fsp.writeFile(settingsPath, settingsContent, 'utf8');
    p.log.success(green`Updated .vscode/settings.json`);
  } else {
    await fsp.writeFile(settingsPath, `{${vscodeSettingsString}}\n`, 'utf8');
    p.log.success(green`Created .vscode/settings.json`);
  }
}
