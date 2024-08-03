export const PROJECT_TYPE_LIST = [
  'react',
  'browser',
  'node',
  'shared',
] as const;

export type ProjectType = (typeof PROJECT_TYPE_LIST)[number];
