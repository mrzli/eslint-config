import { Linter } from 'eslint';
import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginTs from 'typescript-eslint';
// import pluginImport from 'eslint-plugin-import';
import pluginUnicorn from 'eslint-plugin-unicorn';
import pluginN from 'eslint-plugin-n';
// import pluginReact from 'eslint-plugin-react';
// import pluginReactHooks from 'eslint-plugin-react-hooks';
// import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
// import pluginStorybook from 'eslint-plugin-storybook';
// import pluginReactRefresh from 'eslint-plugin-react-refresh';
import configPrettier from 'eslint-config-prettier';
import { EslintConfigOptionsAny } from '../types';

export function getEsLintConfigs(
  options: EslintConfigOptionsAny,
): readonly Linter.FlatConfig[] {
  const { projectType } = options;

  const isReact = projectType === 'react';
  const isNode = projectType === 'node';
  const isBrowser = projectType === 'browser';
  // const isShared = projectType === 'shared';

  const isStorybook = isReact && options.storybook;

  return [
    // START - general
    {
      name: 'general',
      linterOptions: {
        reportUnusedDisableDirectives: 'error',
      },
    },
    // END - general

    // START - js/ts
    pluginJs.configs.recommended,
    ...pluginTs.configs.recommended,
    {
      name: 'js/ts overrides',
      files: ['**/*.{js,jsx,ts,tsx}'],
      rules: {
        'no-fallthrough': 'off', // handled by typescript itself
      },
    },
    {
      name: 'ts-only overrides',
      files: ['**/*.{ts,tsx}'],
      rules: {
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
      },
    },
    // END - js/ts

    // START - import
    // // will possibly need to comment out until this is updated for the flat config
    // {
    //   name: 'import',
    //   plugins: {
    //     import: pluginImport,
    //   },
    //   settings: {
    //     'import/resolver': {
    //       typescript: true,
    //       node: true,
    //     },
    //   },
    //   rules: {
    //     // ...importPlugin.configs['recommended'].rules,
    //     'import/no-unresolved': [
    //       'error',
    //       {
    //         ignore: ['^/'],
    //       },
    //     ],
    //   },
    // },
    // END - import

    // START - unicorn
    pluginUnicorn.configs['flat/recommended'],
    {
      name: 'unicorn overrides',
      files: ['**/*.{js,jsx,ts,tsx}'],
      rules: {
        'unicorn/consistent-function-scoping': 'off',
        'unicorn/import-style': [
          'error',
          {
            styles: {
              path: {
                named: true,
              },
              'node:path': {
                named: true,
              },
            },
          },
        ],
        'unicorn/prefer-module': 'off',
        'unicorn/prefer-top-level-await': 'off',
        'unicorn/prevent-abbreviations': 'off',
        'unicorn/no-array-reduce': 'off',
        'unicorn/no-negated-condition': 'off',
        'unicorn/no-useless-undefined': 'off',
        'unicorn/filename-case': 'off',
      },
    },
    // END - unicorn

    // START - tests
    {
      name: 'tests',
      files: ['**/*.{spec,test}.{ts,tsx,js,jsx}'],
      rules: {
        'unicorn/consistent-function-scoping': 'off',
      },
    },
    // END - tests

    // START - specific
    ...(isNode ? getNodeConfigs() : []),
    ...(isBrowser ? getBrowserConfigs() : []),
    ...(isReact ? getReactConfigs(isStorybook) : []),
    // END - specific

    // START - prettier
    // needs to be the last configuration
    configPrettier,
    // END - prettier
  ];
}

function getNodeConfigs(): readonly Linter.FlatConfig[] {
  return [
    {
      name: 'node main',
      languageOptions: {
        globals: {
          ...globals.node,
        },
      },
    },
    pluginN.configs['flat/recommended'],
    {
      name: 'node ts-only overrides',
      files: ['**/*.{ts,tsx}'],
      rules: {
        'n/hashbang': 'off',
        'n/no-missing-import': 'off',
        'n/no-unpublished-import': 'off',
        'n/no-unsupported-features/es-syntax': 'off',
      },
    },
  ];
}

function getBrowserConfigs(): readonly Linter.FlatConfig[] {
  return [
    {
      name: 'browser main',
      languageOptions: {
        globals: {
          ...globals.browser,
        },
      },
    },
  ];
}

function getReactConfigs(isStorybook: boolean): readonly Linter.FlatConfig[] {
  return [
    // {
    //   name: 'react main',
    //   languageOptions: {
    //     parserOptions: {
    //       ecmaFeatures: {
    //         jsx: true,
    //       },
    //     },
    //     globals: {
    //       ...globals.serviceworker,
    //       ...globals.browser,
    //     },
    //   },
    // },
    // {
    //   name: 'react',
    //   files: ['**/*.{js,jsx,ts,tsx}'],
    //   plugins: {
    //     react: pluginReact,
    //   },
    //   rules: {
    //     ...pluginReact.configs.recommended.rules,
    //     'react/jsx-uses-react': 'off',
    //     'react/react-in-jsx-scope': 'off',
    //   },
    // },
    // {
    //   name: 'react-hooks',
    //   files: ['**/*.{js,jsx,ts,tsx}'],
    //   plugins: {
    //     'react-hooks': pluginReactHooks,
    //   },
    //   rules: {
    //     ...pluginReactHooks.configs.recommended.rules,
    //     'react-hooks/rules-of-hooks': 'off',
    //   },
    // },
    // {
    //   name: 'jsx-a11y',
    //   files: ['**/*.{jsx,tsx}'],
    //   plugins: {
    //     'jsx-a11y': pluginJsxA11y,
    //   },
    //   rules: {
    //     ...pluginJsxA11y.configs.recommended.rules,
    //   },
    // },
    // {
    //   name: 'react-refresh',
    //   files: ['**/*.{jsx,tsx}'],
    //   plugins: {
    //     'react-refresh': pluginReactRefresh,
    //   },
    //   rules: {
    //     'react-refresh/only-export-components': [
    //       'warn',
    //       { allowConstantExport: true },
    //     ],
    //   },
    // },
    ...(isStorybook ? getStorybookConfigs() : []),
  ];
}

function getStorybookConfigs(): readonly Linter.FlatConfig[] {
  return [
    // {
    //   name: 'storybook',
    //   files: ['**/*.stories.{js,jsx,ts,tsx}'],
    //   plugins: {
    //     storybook: pluginStorybook,
    //   },
    //   rules: {
    //     ...pluginStorybook.rules,
    //   },
    // },
  ];
}
