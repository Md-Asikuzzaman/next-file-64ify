interface Base64Type {
    data: string | null;
    isLoading: boolean;
    isError: boolean;
    isValidSize: boolean;
}
interface AllowSizes {
    maxSize: number;
    minSize: number;
}
interface _64ifyOptions {
    allowedTypes: string[];
    allowedSizes: AllowSizes;
}
declare const _64ify: (file: File, { allowedTypes, allowedSizes }: _64ifyOptions) => Promise<Base64Type>;

export { type AllowSizes, type Base64Type, _64ify };
