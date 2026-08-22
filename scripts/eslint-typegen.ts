import fs from 'node:fs/promises';
import { builtinRules } from 'eslint/use-at-your-own-risk';
import { flatConfigsToPlugins, pluginsToRulesDTS } from 'eslint-typegen/core';
import { defineConfig } from '../src';

const plugins = await flatConfigsToPlugins([
  {
    plugins: {
      '': {
        // eslint-disable-next-line @typescript-eslint/no-deprecated
        rules: Object.fromEntries(builtinRules),
      },
    },
  },
  ...(defineConfig()),
]);
const dts = await pluginsToRulesDTS(plugins, { includeAugmentation: false });
await fs.writeFile('eslint-typegen.d.ts', dts);
