import * as p from '@clack/prompts';
import c from 'ansis';
import { defineCommand, runMain } from 'citty';
import { version } from '../../package.json';
import { run } from './run';
import type { ICliOptions } from '../types';

const cli = defineCommand({
  meta: {
    name: '@dhzh/eslint-config',
    version,
    description: 'Run the initialization or migration',
  },
  args: {
    'replace-lint': {
      type: 'boolean',
      description: 'Whether to replace a conflicting lint script',
    },
    'replace-lint-fix': {
      type: 'boolean',
      description: 'Whether to replace a conflicting lint-fix script',
    },
  },
  run: async ({ args }) => {
    console.log('\n');
    p.intro(`${c.green`@dhzh/eslint-config `}${c.dim`v${version}`}`);

    const options: ICliOptions = {
      replaceLint: args['replace-lint'],
      replaceLintFix: args['replace-lint-fix'],
    };

    try {
      await run(options);
    } catch (error) {
      p.log.error(c.inverse.red(' Failed to migrate '));
      p.log.error(c.red`✘ ${String(error)}`);
      throw error;
    }
  },
});

await runMain(cli);
