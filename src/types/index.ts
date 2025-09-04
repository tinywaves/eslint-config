import type { Linter } from 'eslint';
import type { VendoredPrettierOptions } from './prettier';

export interface IConfigsOptions {
  overrides?: Record<string, Linter.RuleEntry>;
}

export interface IReactConfigsOptions {
  language?: 'typescript' | 'javascript';
  overrides?: {
    core?: Record<string, Linter.RuleEntry>;
    hooks?: Record<string, Linter.RuleEntry>;
    refresh?: Record<string, Linter.RuleEntry>;
    compiler?: Record<string, Linter.RuleEntry>;
    googleTranslate?: Record<string, Linter.RuleEntry>;
  };
}

export interface IVueConfigsOptions extends IConfigsOptions {}

export interface IStylisticConfigsOptions extends IConfigsOptions {}

export interface ITypescriptConfigsOptions extends IConfigsOptions {
  typeSafe?: boolean;
  strict?: boolean;
  sourceType?: 'module' | 'commonjs';
}

export interface IJavascriptConfigsOptions extends IConfigsOptions {
  sourceType?: 'module' | 'commonjs';
}

export interface INodeConfigsOptions extends IConfigsOptions {}

export interface IJsonConfigsOptions {
  indent?: number;
  overrides?: {
    core?: Record<string, Linter.RuleEntry>;
    packageJson?: Record<string, Linter.RuleEntry>;
  };
  packageJsonRequireTypes?: boolean;
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
    scripts?: Record<string, Linter.RuleEntry>;
    cli?: Record<string, Linter.RuleEntry>;
    bin?: Record<string, Linter.RuleEntry>;
    dts?: Record<string, Linter.RuleEntry>;
    cjs?: Record<string, Linter.RuleEntry>;
    config?: Record<string, Linter.RuleEntry>;
  };
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
}

export interface ICliOptions {
  hasNest: boolean;
}
