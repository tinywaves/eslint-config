import type { Linter } from 'eslint';
import type { VendoredPrettierOptions } from './prettier';
import type { RuleOptions } from '../../eslint-typegen';

type RuleOption = RuleOptions & Linter.RulesRecord;
export type RuleKey = keyof RuleOption;
export type LinterConfig = Linter.Config<RuleOption>;

export interface IConfigsOptions {
  overrides?: Record<RuleKey, Linter.RuleEntry>;
}

export interface IReactConfigsOptions {
  language?: 'typescript' | 'javascript';
  overrides?: {
    core?: Record<RuleKey, Linter.RuleEntry>;
    hooks?: Record<RuleKey, Linter.RuleEntry>;
    refresh?: Record<RuleKey, Linter.RuleEntry>;
    compiler?: Record<RuleKey, Linter.RuleEntry>;
    googleTranslate?: Record<RuleKey, Linter.RuleEntry>;
  };
}

export interface IVueConfigsOptions extends IConfigsOptions {}

export interface IStylisticConfigsOptions extends IConfigsOptions {}

export interface ITypescriptConfigsOptions extends IConfigsOptions {
  typeSafe?: boolean;
  strict?: boolean;
}

export interface IJavascriptConfigsOptions extends IConfigsOptions {}

export interface INodeConfigsOptions extends IConfigsOptions {}

export interface IJsonConfigsOptions {
  indent?: number;
  overrides?: {
    core?: Record<RuleKey, Linter.RuleEntry>;
    packageJson?: Record<RuleKey, Linter.RuleEntry>;
  };
  packageJsonRequireType?: boolean;
}

export interface IUnicornConfigsOptions extends IConfigsOptions {}

export interface IImportsConfigsOptions extends IConfigsOptions {
  closeOrder?: boolean;
}

export interface IFormatConfigsOptions {
  enable?: false | {
    html?: boolean;
    css?: boolean;
    graphql?: boolean;
    xml?: boolean;
    svg?: boolean;
  };
  customPrettierOptions?: VendoredPrettierOptions;
}

export interface ITailwindcssConfigsOptions extends IConfigsOptions {}

export interface IUnocssConfigsOptions extends IConfigsOptions {}

export interface IYmlConfigsOptions extends IConfigsOptions {
  indent?: number;
  quotes?: 'single' | 'double';
}

export interface ITomlConfigsOptions extends IConfigsOptions {
  indent?: number;
}

export interface IRegexpConfigsOptions extends IConfigsOptions {}

export interface IEslintCommentsConfigsOptions extends IConfigsOptions {}

export interface IDisablesConfigsOptions {
  overrides?: {
    scripts?: Record<RuleKey, Linter.RuleEntry>;
    cli?: Record<RuleKey, Linter.RuleEntry>;
    bin?: Record<RuleKey, Linter.RuleEntry>;
    dts?: Record<RuleKey, Linter.RuleEntry>;
    cjs?: Record<RuleKey, Linter.RuleEntry>;
    config?: Record<RuleKey, Linter.RuleEntry>;
  };
}

export interface ILanguageOptionsConfigsOptions {
  sourceType?: 'module' | 'commonjs';
}

export interface Options {
  configs?: {
    react?: IReactConfigsOptions;
    vue?: IVueConfigsOptions;
    stylistic?: IStylisticConfigsOptions;
    typescript?: ITypescriptConfigsOptions;
    javascript?: IJavascriptConfigsOptions;
    node?: INodeConfigsOptions;
    json?: IJsonConfigsOptions;
    unicorn?: IUnicornConfigsOptions;
    imports?: IImportsConfigsOptions;
    format?: IFormatConfigsOptions;
    tailwindcss?: ITailwindcssConfigsOptions;
    unocss?: IUnocssConfigsOptions;
    yml?: IYmlConfigsOptions;
    toml?: ITomlConfigsOptions;
    regexp?: IRegexpConfigsOptions;
    eslintComments?: IEslintCommentsConfigsOptions;
    disables?: IDisablesConfigsOptions;
  };
  ignorePatterns?: string[];
  sourceType?: 'module' | 'commonjs';
}

export interface ICliOptions {
  hasNest: boolean;
}

export type RuleLevel = 'off' | 'warn' | 'error' | 0 | 1 | 2;

export type RuleConfig
  = | RuleLevel
    | [RuleLevel, Record<string, any>?];
