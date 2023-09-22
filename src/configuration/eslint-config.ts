import { Linter } from 'eslint';
import { EslintConfigOptions } from '../types';

export function getEsLintConfig(options: EslintConfigOptions): Linter.Config {
  const { projectType } = options;

  const isReact = projectType === 'react';
  const isNode = projectType === 'node';
  const isBrowser = projectType === 'browser';
  // const isShared = projectType === 'shared';

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
      'no-fallthrough': 'off', // handled by typescript
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/explicit-member-accessibility': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'import/no-unresolved': [
        'error',
        {
          ignore: ['^/'],
        },
      ],
      'unicorn/prefer-module': 'off',
      'unicorn/prefer-top-level-await': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/no-useless-undefined': 'off',
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
          ignore: ['\\.(jsx|tsx)$'],
        },
      ],
      ...(isReact ? REACT_RULES : {}),
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
        rules: {
          'unicorn/consistent-function-scoping': 'off',
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

export const REACT_PLUGINS = [
  'react',
  'react-hooks',
  'jsx-a11y',
  'react-refresh',
] as const;

export const REACT_EXTENDS = [
  'plugin:react/recommended',
  'plugin:react-hooks/recommended',
  'plugin:jsx-a11y/recommended',
  'plugin:storybook/recommended',
] as const;

export const REACT_RULES: Linter.RulesRecord = {
  'react/jsx-uses-react': 'off',
  'react/react-in-jsx-scope': 'off',
  'react-refresh/only-export-components': [
    'warn',
    { allowConstantExport: true },
  ],
};
