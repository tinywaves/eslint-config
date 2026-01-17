import * as p from '@clack/prompts';
import c from 'ansis';
import { cac } from 'cac';
import { version } from '../../package.json';
import { run } from './run';
import type { ICliOptions } from '../types';

const cli = cac('@dhzh/eslint-config');

cli
  .command('', 'Run the initialization or migration')
  .action(async () => {
    console.log('\n');
    p.intro(`${c.green`@dhzh/eslint-config `}${c.dim`v${version}`}`);

    const options: ICliOptions = {
      hasNest: false,
    };

    const hasNest = await p.confirm({
      message: 'Is NestJS a part of the current project?',
      initialValue: false,
    });
    if (p.isCancel(hasNest)) {
      p.cancel('Operation cancelled');
      throw new Error('Operation cancelled');
    } else {
      options.hasNest = hasNest;
    }

    try {
      await run(options);
    } catch (error) {
      p.log.error(c.inverse.red(' Failed to migrate '));
      p.log.error(c.red`✘ ${String(error)}`);
      throw error;
    }
  });
cli.help();
cli.version(version);
cli.parse();
