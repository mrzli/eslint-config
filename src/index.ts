import { Linter } from 'eslint';
import { EslintConfigOptions } from './types/input';

export function getEsLintConfig(options: EslintConfigOptions): Linter.Config {
  const { executionEnvironment } = options;

  const isReact = executionEnvironment === 'react';
  const isNode = executionEnvironment === 'node';
  const isBrowser = executionEnvironment === 'browser';
  // const isShared = executionEnvironment === 'shared';

  return {
    root: true,
    plugins: [
      '@typescript-eslint',
      'import',
      'unicorn',
      ...(isNode ? NODE_PLUGINS : []),
      ...(isReact ? REACT_PLUGINS : []),
    ],
    env: {
      'shared-node-browser': true,
      es2022: true,
      node: isNode,
      browser: isBrowser || isReact,
      // commonjs: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: ['./tsconfig.json'],
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: isReact,
      },
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:import/recommended',
      'plugin:unicorn/recommended',
      ...(isNode ? NODE_EXTENDS : []),
      ...(isReact ? REACT_EXTENDS : []),
      'prettier',
    ],
    settings: {
      'import/resolver': {
        typescript: true,
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'unicorn/prefer-top-level-await': 'off',
    },
    overrides: [
      {
        files: ['*.{ts,tsx}'],
        rules: {
          ...(isNode ? NODE_RULES : {}),
        },
      },
      {
        files: ['*.{spec,test}.{ts,tsx,js,jsx}'],
        env: {
          jest: true,
        },
      },
    ],
  };
}

export const NODE_PLUGINS = [] as const;

export const NODE_EXTENDS = ['plugin:n/recommended'] as const;

export const NODE_RULES: Linter.RulesRecord = {
  'n/no-missing-import': 'off',
  'n/no-unpublished-import': 'off',
  'n/no-unsupported-features/es-syntax': 'off',
};

export const REACT_PLUGINS = ['react', 'react-hooks', 'jsx-a11y'] as const;

export const REACT_EXTENDS = [
  'plugin:react/recommended',
  'plugin:react-hooks/recommended',
  'plugin:jsx-a11y/recommended',
] as const;
