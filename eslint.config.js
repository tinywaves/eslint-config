import { bundleRequire } from 'bundle-require';

const config = await bundleRequire({ filepath: './eslint.config.ts' });

export default config.mod.default;
