# ESLint Config

Has a function used to create an ESLint config object.

## Usage

Create an ESLint config file, for example `.eslintrc.js`:

```js
const { getEsLintConfig } = require('@gmjs/eslint-config');

module.exports = {
  ...getEsLintConfig({ executionEnvironment: 'node'}),
};
```

## API

- `getEsLintConfig(options)`: Returns an ESLint config object.
  - `options.executionEnvironment`
    - The execution environment of the project.
    - One of:
      - `'shared'` - For projects to be used from either Node or Browser.
      - `'node'` - For Node.js projects.
      - `'browser'` - For browser projects.
      - `'react'` - For React projects.
