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
    },
    overrides: [
      {
        files: ['*.{spec,test}.{ts,tsx,js,jsx}'],
        env: {
          jest: true,
        },
      },
    ],
  };
}

export const REACT_PLUGINS = ['react', 'react-hooks', 'jsx-a11y'] as const;

export const REACT_EXTENDS = [
  'plugin:react/recommended',
  'plugin:react-hooks/recommended',
  'plugin:jsx-a11y/recommended',
] as const;
