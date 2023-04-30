module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'import'],
  env: {
    'shared-node-browser': true,
    es2022: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:unicorn/recommended',
    'plugin:n/recommended',
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
      files: ['*.{ts,tsx}'],
      rules: {
        'n/no-missing-import': ['off'],
        'n/no-unsupported-features/es-syntax': ['off'],
      },
    },
  ],
};
