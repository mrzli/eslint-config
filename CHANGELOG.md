# Change Log

All notable changes to the "eslint-config" will be documented in this file.

## [Unreleased]

## [0.0.39] - 2024-08-03

### Changed

- Disable `unicorn/consistent-function-scoping` rule.
- Allow named import from `path` for `unicorn/import-style` rule.
- Update npm script names.
- Change some development dependencies.
- Update dependencies to latest versions.
- Update typescript configuration to match current principles and resolve some issues.

### Fixed

- Fix some lint errors.

## [0.0.38] - 2024-06-27

### Changed

- Disable `n/hashbang` rule.

## [0.0.37] - 2024-06-27

### Changed

- Disable `unicorn/filename-case` rule.

## [0.0.36] - 2024-04-29

### Changed

- Disable all 'react' plugins until issues are resolved.

## [0.0.35] - 2024-04-29

### Changed

- Comment out 'react-refresh' due to some issue.

## [0.0.34] - 2024-04-29

### Fixed

- Republiush due to version not showing up on npm for some reason.

## [0.0.33] - 2024-04-29

### Changed

- Comment out `storybook` plugin until it is updated to work with flat EsLint configuration.

## [0.0.32] - 2024-04-27

### Changed

- Unused eslint directives now throw an error instead of a warning.

## [0.0.31] - 2024-04-27

### Changed

- Commented out `import` plugin.

## [0.0.30] - 2024-04-27

### Changed

- Add names to flat configs.

## [0.0.29] - 2024-04-27

### Changed

- Update to flat EsLint configuration.
- Update dependencies to latest versions.
- Update project configurations.

## [0.0.28] - 2023-12-21

### Changed

- Update dependencies to latest versions.

## [0.0.27] - 2023-11-25

### Changed

- Revert ts to version 5.2.\* due to an issue in later version with running tests.

## [0.0.26] - 2023-11-25

### Changed

- Update dependencies to latest versions.

## [0.0.25] - 2023-09-24

### Changed

- Disable `react-hooks/rules-of-hooks` for storybook files due to incompatilibility with CSF 3 format.

## [0.0.24] - 2023-09-23

### Changed

- Add `storybook` parameter to `react` config input.

## [0.0.23] - 2023-09-22

### Changed

- Turn off `react/jsx-uses-react` and `react/react-in-jsx-scope` rules since they are not required for newer versions of React.

## [0.0.22] - 2023-09-22

### Changed

- Add storybook plugin to react eslint config.

## [0.0.21] - 2023-09-20

### Changed

- Turn of rule `no-fallthrough` for `switch` statements since it is handled by TypeScript.

## [0.0.20] - 2023-09-18

### Changed

- Ignore `jsx` and `tsx` files in `unicorn/filename-case` (allows React component files to be Pascal cased).
- Ignore imports starting with `/` in `import/no-unresolved` (allows imports from Vite public folder).

## [0.0.19] - 2023-09-18

### Changed

- Update 'react' config.
- Change package manager to `pnpm`.
- Update dependencies to latest versions.

## [0.0.18] - 2023-08-08

### Fixed

- Fix publish process.

## [0.0.17] - 2023-08-08

### Changed

- Update dependencies to latest versions.

## [0.0.16] - 2023-07-23

### Changed

- Update publishing process.
- Update dependencies to latest versions.

## [0.0.15] - 2023-07-15

### Changed

- Update dependencies and peer dependencies to latest versions.

## [0.0.14] - 2023-07-15

### Changed

- Turn off `unicorn/consistent-function-scoping` rule for tests.

## [0.0.13] - 2023-06-09

### Changed

- Add some typescript rules.

## [0.0.12] - 2023-06-09

### Changed

- Turn off rules `unicorn/no-array-reduce`, `unicorn/no-useless-undefined`.

## [0.0.11] - 2023-06-03

### Changed

- Update dependencies.

## [0.0.10] - 2023-05-07

### Changed

- Update dependencies.

## [0.0.9] - 2023-05-02

### Changed

- Make scripts cross-platform.

## [0.0.8] - 2023-05-02

### Changed

- Include `dist` folder when publishing.
- Use `tsconfig.lib.json` for `tsc` command.
- Update keywords.

## [0.0.7] - 2023-05-01

### Changed

- Turn off rules: `unicorn/prefer-module`, `unicorn/prevent-abbreviations`.

## [0.0.6] - 2023-04-30

### Changed

- Rename 'execution environment' to 'project type'.

## [0.0.5] - 2023-04-30

### Changed

- Turned off some `eslint-plugin-unicorn` and `eslint-plugin-n` rules.

## [0.0.4] - 2023-04-30

### Added

- Add `eslint-plugin-unicorn` and `eslint-plugin-n` rules.

<!--
See: https://common-changelog.org/

## [0.0.1] - 2023-01-01

### Changed

### Added

### Removed

### Fixed
-->
