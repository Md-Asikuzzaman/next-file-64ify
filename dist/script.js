var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// _64ify...
export const _64ify = (file_1, fileType_1, _a) => __awaiter(void 0, [file_1, fileType_1, _a], void 0, function* (file, fileType, { minSize, maxSize }) {
    const result = {
        data: null,
        isLoading: true,
        isError: false,
        isValidSize: false,
    };
    try {
        const validateFileType = (selectedFile) => {
            const allowedTypes = [...fileType];
            return allowedTypes.includes(selectedFile.type);
        };
        const validateFileSize = (selectedFile) => {
            const fileSize = selectedFile.size / 1024; // Convert file size to kilobytes
            return fileSize >= minSize && fileSize <= maxSize;
        };
        // Validation logic
        if (validateFileType(file) && validateFileSize(file)) {
            result.isLoading = true;
            const base64 = yield convertToBase64(file);
            result.isLoading = false;
            result.data = base64;
            result.isValidSize = true;
            result.isError = false;
        }
        else {
            result.data = null;
            result.isLoading = false;
            result.isValidSize = false;
            result.isError = true;
        }
    }
    catch (error) {
        result.data = null;
        result.isLoading = false;
        result.isValidSize = false;
        result.isError = true;
    }
    return result;
});
// Convert file into base64 string
const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const base64String = reader.result;
            resolve(base64String);
        };
        reader.onerror = (error) => reject(error);
    });
};
