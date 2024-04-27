import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginTs from 'typescript-eslint';
import pluginImport from 'eslint-plugin-import';
import pluginUnicorn from 'eslint-plugin-unicorn';
import pluginN from 'eslint-plugin-n';
import configPrettier from 'eslint-config-prettier';

export default [
  {
    ignores: ['dist/', 'eslint.config.mjs'],
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
    languageOptions: { globals: { ...globals.node } },
    plugins: {
      import: pluginImport,
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    rules: {
      // ...importPlugin.configs['recommended'].rules,
    },
  },
  pluginJs.configs.recommended,
  ...pluginTs.configs.recommended,
  pluginUnicorn.configs['flat/recommended'],
  pluginN.configs['flat/recommended'],
  configPrettier,
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    rules: {
      'no-fallthrough': 'off',
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
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
          ignore: ['\\.(jsx|tsx)$'],
        },
      ],
      'unicorn/no-array-reduce': 'off',
      'unicorn/no-useless-undefined': 'off',
      'unicorn/prefer-module': 'off',
      'unicorn/prefer-top-level-await': 'off',
      'unicorn/prevent-abbreviations': 'off',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'n/no-missing-import': 'off',
      'n/no-unpublished-import': 'off',
      'n/no-unsupported-features/es-syntax': 'off',
    },
  },
];
