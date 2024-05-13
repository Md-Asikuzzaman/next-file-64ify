export const base64 = async (file: File): Promise<string | null> => {
  const validateFileType = (selectedFile: File): boolean => {
    const allowedTypes = ["image/jpeg", "image/png"];
    return allowedTypes.includes(selectedFile.type);
  };

  if (validateFileType(file)) {
    const base64 = await convertToBase64(file);
    return base64;
  } else {
    alert("Please select a valid JPG or PNG file.");
    return null;
  }
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
