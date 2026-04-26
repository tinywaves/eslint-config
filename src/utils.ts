import process from 'node:process';
import { getPackagesSync } from '@manypkg/get-packages';
import { isPackageExists } from 'local-pkg';
import type { RuleConfig, RuleLevel } from './types';

export const parserPlain = {
  meta: {
    name: 'parser-plain',
  },
  parseForESLint: (code: string) => ({
    ast: {
      body: [],
      comments: [],
      loc: {
        end: code.length,
        start: 0,
      },
      range: [0, code.length],
      tokens: [],
      type: 'Program',
    },
    scopeManager: null,
    services: {
      isPlain: true,
    },
    visitorKeys: {
      Program: [],
    },
  }),
};

export const mergeRule = (...rules: RuleConfig[]): RuleConfig => {
  let finalLevel: RuleLevel | undefined;
  let finalOptions: Record<string, any> = {};

  for (const rule of rules) {
    if (!rule) {
      continue;
    }

    if (!Array.isArray(rule)) {
      finalLevel = rule;
      continue;
    }

    const [level, options] = rule;
    finalLevel = level;
    if (options && typeof options === 'object') {
      finalOptions = {
        ...finalOptions,
        ...options,
      };
    }
  }

  if (Object.keys(finalOptions).length === 0) {
    return finalLevel!;
  }

  return [finalLevel!, finalOptions];
};

export function isPackageAvailable(name: string, cwd: string = process.cwd()): boolean {
  if (isPackageExists(name, { paths: [cwd] })) {
    return true;
  }

  try {
    return getPackagesSync(cwd).packages.some((pkg) => (
      name in (pkg.packageJson.dependencies || {})
      || name in (pkg.packageJson.devDependencies || {})
      || name in (pkg.packageJson.peerDependencies || {})
      || name in (pkg.packageJson.optionalDependencies || {})
    ));
  } catch {
    return false;
  }
}
