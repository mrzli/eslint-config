import { ProjectType } from './project-type';

export interface EslintConfigOptionsBase {
  readonly projectType: ProjectType;
}

export interface EslintConfigOptionsReact extends EslintConfigOptionsBase {
  readonly projectType: 'react';
  readonly storybook: boolean;
}

export interface EslintConfigOptionsBrowser extends EslintConfigOptionsBase {
  readonly projectType: 'browser';
}

export interface EslintConfigOptionsNode extends EslintConfigOptionsBase {
  readonly projectType: 'node';
}

export interface EslintConfigOptionsShared extends EslintConfigOptionsBase {
  readonly projectType: 'shared';
}

export type EslintConfigOptionsAny =
  | EslintConfigOptionsReact
  | EslintConfigOptionsBrowser
  | EslintConfigOptionsNode
  | EslintConfigOptionsShared;
