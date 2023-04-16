const KINDS_OF_ESLINT_EXECUTION_ENVIRONMENTS = [
  'shared',
  'node',
  'browser',
  'react',
] as const;

export type EslintExecutionEnvironment =
  (typeof KINDS_OF_ESLINT_EXECUTION_ENVIRONMENTS)[number];
