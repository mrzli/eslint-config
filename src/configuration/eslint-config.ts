import { Linter } from 'eslint';
import { EslintConfigOptionsAny, EslintConfigOptionsReact } from '../types';

export function getEsLintConfig(
  options: EslintConfigOptionsAny,
): Linter.Config {
  const { projectType } = options;

  const isReact = projectType === 'react';
  const isNode = projectType === 'node';
  const isBrowser = projectType === 'browser';
  // const isShared = projectType === 'shared';

  // eslint-disable-next-line unicorn/consistent-destructuring
  const isStorybook = isReact && options.storybook;

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
      ...(isReact ? getReactExtends(options) : []),
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
      ...(isStorybook
        ? ([
            {
              files: ['*.stories.tsx'],
              rules: {
                'react-hooks/rules-of-hooks': 'off',
              },
            },
          ] as Linter.ConfigOverride[])
        : []),
    ],
  };
}

const NODE_PLUGINS = [] as const;

const NODE_EXTENDS = ['plugin:n/recommended'] as const;

const NODE_RULES: Linter.RulesRecord = {
  'n/no-missing-import': 'off',
  'n/no-unpublished-import': 'off',
  'n/no-unsupported-features/es-syntax': 'off',
};

const REACT_PLUGINS = [
  'react',
  'react-hooks',
  'jsx-a11y',
  'react-refresh',
] as const;

function getReactExtends(options: EslintConfigOptionsReact) {
  const { storybook } = options;

  return [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    ...(storybook ? ['plugin:storybook/recommended'] : []),
  ];
}

const REACT_RULES: Linter.RulesRecord = {
  'react/jsx-uses-react': 'off',
  'react/react-in-jsx-scope': 'off',
  'react-refresh/only-export-components': [
    'warn',
    { allowConstantExport: true },
  ],
};
