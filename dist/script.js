var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const _64ify = (file, fileType) => __awaiter(void 0, void 0, void 0, function* () {
    const result = {
        data: null,
        isLoading: true,
        isError: false,
    };
    try {
        const validateFileType = (selectedFile) => {
            const allowedTypes = [...fileType];
            return allowedTypes.includes(selectedFile.type);
        };
        if (validateFileType(file)) {
            result.isLoading = true;
            const base64 = yield convertToBase64(file);
            result.isLoading = false;
            result.data = base64;
            result.isError = false;
        }
        else {
            result.data = null;
            result.isLoading = false;
            result.isError = true;
        }
    }
    catch (error) {
        result.data = null;
        result.isLoading = false;
        result.isError = true;
    }
    return result;
});
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
