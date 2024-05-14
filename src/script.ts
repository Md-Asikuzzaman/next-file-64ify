export interface Base64Type {
  data?: string | null;
  isLoading: boolean;
  isError: boolean;
}

export const _64ify = async (
  file: File,
  fileType: string[]
): Promise<Base64Type> => {
  const result: Base64Type = {
    data: null,
    isLoading: true,
    isError: false,
  };

  try {
    const validateFileType = (selectedFile: File): boolean => {
      const allowedTypes = [...fileType];
      return allowedTypes.includes(selectedFile.type);
    };

    if (validateFileType(file)) {
      result.isLoading = true;
      const base64 = await convertToBase64(file);
      result.isLoading = false;
      result.data = base64;
      result.isError = false;
    } else {
      result.data = null;
      result.isLoading = false;
      result.isError = true;
    }
  } catch (error) {
    result.data = null;
    result.isLoading = false;
    result.isError = true;
  }

  return result;
};

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
