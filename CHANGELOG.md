# Change Log

All notable changes to the "eslint-config" will be documented in this file.

## [Unreleased]

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
