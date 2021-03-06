export declare class HttpError extends Error {
    status: number;
    details: any;
    constructor(message: string, status?: number);
}
export declare var http: {
    noi: (res: any, message?: string) => void;
    notfound: (res: any, message?: string) => void;
    error: (res: any, message: string, status?: number) => void;
    exception: (res: any, ex: any) => void;
    HttpError: typeof HttpError;
    throwHttpError: (ex: any, status: number, message?: string) => void;
};
