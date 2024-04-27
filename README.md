# ESLint Config

This package contains a function used to create an ESLint config object.

## Installation

```bash
npm install --save-dev @gmjs/eslint-config
```

## Usage

Create an ESLint config file, one of:

- `eslint.config.js`
- `eslint.config.cjs`
- `eslint.config.mjs`

Then use something like the following code (if using `esm` module syntax):

```js
import { getEsLintConfigs } from '@gmjs/eslint-config';

export default [
  ...getEsLintConfigs({ projectType: 'node' })
];
```

Or equivalent `commonjs` syntax:

```js
const { getEsLintConfigs } = require('@gmjs/eslint-config');

module.exports = [
  ...getEsLintConfigs({ projectType: 'node' })
];
```

## API

#### `getEsLintConfigs`

Accepts a single parameter, `options` of type [`EslintConfigOptions`](#eslintconfigoptions).

Return a list of EsLint configurations, to be used in your project.

You can specify different project types:

- `'shared'` - For projects to be used from either Node or Browser.
- `'node'` - For Node.js projects.
- `'browser'` - For browser projects.
- `'react'` - For React projects.

```js
import { getEsLintConfigs } from '@gmjs/eslint-config';

export default [...getEsLintConfigs({ projectType: 'node' })];
```

## Types

#### `EslintConfigOptions`

```ts
type ProjectType = 'shared' | 'node' | 'browser' | 'react';

interface EslintConfigOptionsBase {
  readonly projectType: ProjectType;
}

interface EslintConfigOptionsReact extends EslintConfigOptionsBase {
  readonly projectType: 'react';
  readonly storybook: boolean;
}

interface EslintConfigOptionsBrowser extends EslintConfigOptionsBase {
  readonly projectType: 'browser';
}

interface EslintConfigOptionsNode extends EslintConfigOptionsBase {
  readonly projectType: 'node';
}

interface EslintConfigOptionsShared extends EslintConfigOptionsBase {
  readonly projectType: 'shared';
}

type EslintConfigOptions =
  | EslintConfigOptionsReact
  | EslintConfigOptionsBrowser
  | EslintConfigOptionsNode
  | EslintConfigOptionsShared;
```
