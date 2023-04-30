const PROJECT_TYPE_LIST = ['shared', 'node', 'browser', 'react'] as const;

export type ProjectType = (typeof PROJECT_TYPE_LIST)[number];
