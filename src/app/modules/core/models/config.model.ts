export enum ErrorKeys {
    'REQUIRED' = 'required'
}

export type ValidationConfig = {
    [key in ErrorKeys]: string;
}