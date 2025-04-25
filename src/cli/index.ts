import * as p from '@clack/prompts';
import c from 'ansis';
import { cac } from 'cac';
import { version } from '../../package.json';
import { run } from './run';

const cli = cac('@dhzh/eslint-config');

cli
  .command('', 'Run the initialization or migration')
  .action(async () => {
    console.log('\n');
    p.intro(`${c.green`@dhzh/eslint-config `}${c.dim`v${version}`}`);
    try {
      await run();
    } catch (error) {
      p.log.error(c.inverse.red(' Failed to migrate '));
      p.log.error(c.red`✘ ${String(error)}`);
      throw error;
    }
  });
cli.help();
cli.version(version);
cli.parse();
