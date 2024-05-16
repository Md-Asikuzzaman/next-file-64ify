export interface Base64Type {
  data: string | null;
  isLoading: boolean;
  isError: boolean;
  isValidSize: boolean;
}

// _64ify...
export const _64ify = async (
  file: File,
  fileType: string[],
  { minSize, maxSize }: { minSize: number; maxSize: number }
): Promise<Base64Type> => {
  const result: Base64Type = {
    data: null,
    isLoading: true,
    isError: false,
    isValidSize: false,
  };

  try {
    const validateFileType = (selectedFile: File): boolean => {
      const allowedTypes = [...fileType];
      return allowedTypes.includes(selectedFile.type);
    };

    const validateFileSize = (selectedFile: File): boolean => {
      const fileSize = selectedFile.size / 1024; // Convert file size to kilobytes
      return fileSize >= minSize && fileSize <= maxSize;
    };

    // Validation logic
    if (validateFileType(file) && validateFileSize(file)) {
      result.isLoading = true;
      const base64 = await convertToBase64(file);
      result.isLoading = false;
      result.data = base64;
      result.isValidSize = true;
      result.isError = false;
    } else {
      result.data = null;
      result.isLoading = false;
      result.isValidSize = false;
      result.isError = true;
    }
  } catch (error) {
    result.data = null;
    result.isLoading = false;
    result.isValidSize = false;
    result.isError = true;
  }

  return result;
};

// Convert file into base64 string
const convertToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result as string;
      resolve(base64String);
    };
    reader.onerror = (error) => reject(error);
  });
};
