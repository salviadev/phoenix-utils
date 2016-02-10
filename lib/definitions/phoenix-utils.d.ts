// Generated by dts-bundle v0.4.3
// Dependencies for this module:
//   ../../fs

declare module 'phoenix-utils' {
    export { json } from 'phoenix-utils/lib/json';
    export { http } from 'phoenix-utils/lib/http';
    export { utils } from 'phoenix-utils/lib/utils';
    export { odata } from 'phoenix-utils/lib/odata';
    export { fs } from 'phoenix-utils/lib/fs';
}

declare module 'phoenix-utils/lib/json' {
    export var json: {
        loadFromFile: (fileName: string) => Promise<any>;
    };
}

declare module 'phoenix-utils/lib/http' {
    export var http: {
        noi: (req: any, message?: string) => void;
        notfound: (req: any, message?: string) => void;
        error: (req: any, message: string, status?: number) => void;
    };
}

declare module 'phoenix-utils/lib/utils' {
    export var utils: {
        clone: (src: any, recursive: boolean) => any;
    };
}

declare module 'phoenix-utils/lib/odata' {
    export var odata: {
        queryResult: (payload: any[], count?: number) => any;
    };
}

declare module 'phoenix-utils/lib/fs' {
    import * as fileSystem from 'fs';
    export var fs: {
        stat: (filePath: string, throwOnENOENT: boolean) => Promise<fileSystem.Stats>;
    };
}

