export interface Base64Type {
    data: string | null;
    isLoading: boolean;
    isError: boolean;
    isValidSize: boolean;
}
export declare const _64ify: (file: File, fileType: string[], { minSize, maxSize }: {
    minSize: number;
    maxSize: number;
}) => Promise<Base64Type>;
