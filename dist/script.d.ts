export interface Base64Type {
    data?: string | null;
    isLoading: boolean;
    isError: boolean;
}
export declare const _64ify: (file: File, fileType: string[]) => Promise<Base64Type>;
