export interface Base64Type {
  data: string | null;
  isLoading: boolean;
  isError: boolean;
  isValidSize: boolean;
}

export interface AllowSizes {
  maxSize: number; // in kilobytes
  minSize: number; // in kilobytes
}

interface _64ifyOptions {
  allowedTypes: string[];
  allowedSizes: AllowSizes; // required, no defaults
}

// Convert file into base64 string
const convertToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
  });
};

export const _64ify = async (
  file: File,
  { allowedTypes, allowedSizes }: _64ifyOptions
): Promise<Base64Type> => {
  const result: Base64Type = {
    data: null,
    isLoading: true,
    isError: false,
    isValidSize: false,
  };

  // Validate file type
  const isValidFileType = allowedTypes.includes(file.type);

  // Validate file size
  const fileSizeKB = file.size / 1024; // Convert size to kilobytes
  const isValidFileSize =
    fileSizeKB >= allowedSizes.minSize && fileSizeKB <= allowedSizes.maxSize;

  if (isValidFileType && isValidFileSize) {
    try {
      result.data = await convertToBase64(file);
      result.isValidSize = true;
    } catch {
      result.isError = true;
    }
  } else {
    result.isError = true;
  }

  result.isLoading = false;
  return result;
};
