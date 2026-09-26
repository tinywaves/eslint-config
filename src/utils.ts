import process from 'node:process';
import { getPackagesSync } from '@manypkg/get-packages';
import { getPackageInfoSync, isPackageExists } from 'local-pkg';
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

  return Object.keys(finalOptions).length === 0 ? finalLevel! : [finalLevel!, finalOptions];
};

export function isPackageAvailable(name: string, cwd: string = process.cwd()): boolean {
  if (isPackageExists(name, { paths: [cwd] })) {
    return true;
  }

  try {
    return getPackagesSync(cwd).packages.some((pkg) => {
      const {
        dependencies = {},
        devDependencies = {},
        peerDependencies = {},
        optionalDependencies = {},
      } = pkg.packageJson;

      return (
        Object.hasOwn(dependencies, name)
        || Object.hasOwn(devDependencies, name)
        || Object.hasOwn(peerDependencies, name)
        || Object.hasOwn(optionalDependencies, name)
      );
    });
  } catch {
    return false;
  }
}

export function getPackageVersions(name: string, cwd: string = process.cwd()): string[] {
  const versions = new Set<string>();
  const rootVersion = getPackageInfoSync(name, { paths: [cwd] })?.version;

  if (rootVersion != null) {
    versions.add(rootVersion);
  }

  try {
    for (const pkg of getPackagesSync(cwd).packages) {
      const {
        dependencies = {},
        devDependencies = {},
        peerDependencies = {},
        optionalDependencies = {},
      } = pkg.packageJson;
      const isListed = Object.hasOwn(dependencies, name)
        || Object.hasOwn(devDependencies, name)
        || Object.hasOwn(peerDependencies, name)
        || Object.hasOwn(optionalDependencies, name);

      if (!isListed) {
        continue;
      }

      const version = getPackageInfoSync(name, { paths: [pkg.dir] })?.version;
      if (version != null) {
        versions.add(version);
      }
    }
  } catch {}

  return [...versions];
}
