var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const base64 = (file) => __awaiter(void 0, void 0, void 0, function* () {
    const validateFileType = (selectedFile) => {
        const allowedTypes = ["image/jpeg", "image/png"];
        return allowedTypes.includes(selectedFile.type);
    };
    if (validateFileType(file)) {
        const base64 = yield convertToBase64(file);
        return base64;
    }
    else {
        alert("Please select a valid JPG or PNG file.");
        return null;
    }
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
