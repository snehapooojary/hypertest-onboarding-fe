
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER/index';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/index' ? typeof import('REMOTE_ALIAS_IDENTIFIER/index') :any;