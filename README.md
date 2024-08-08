## next-file-64ify 📁
The **"next-file-64ify"** package simplifies file handling in **Next.js/React.js** applications by converting selected files to **base64** strings. It provides easy-to-use functions for validating file types and sizes, ensuring smooth and efficient file uploads. It is ideal for image files and integrates seamlessly with React components for streamlined file management.

## Installation:
![GitHub package.json version](https://img.shields.io/github/package-json/v/Md-Asikuzzaman/next-file-64ify)
 ```bash
npm i next-file-64ify
# or
yarn add next-file-64ify
# or
pnpm i next-file-64ify
```
#### ✔ Simply connect with your Next.js or React.js application 🤝.
 ```js
"use client";

import { useState, useRef } from "react";
import { _64ify } from "next-file-64ify"; // Import _64ify package

const MyFile = () => {
  const [myFile, setMyFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (myFile) {
      try {
        const { data, isLoading, isError, isValidSize } = await _64ify(myFile, {
          allowedSizes: {
            minSize: 10, // file size in KB
            maxSize: 1024 * 2, // file size in MB
          },
          allowedTypes: ["image/jpeg", "image/png"], // Allowed file types
        });

        console.log({ data, isLoading, isError, isValidSize }); // Log results

        // Reset file input field and state
        if (inputRef.current) {
          inputRef.current.value = "";
          setMyFile(null);
        }
      } catch (error: unknown) {
        console.error("Error processing file:", error); // Log any errors
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        ref={inputRef} // Reference to file input element
        accept="image/jpeg, image/png" // Restrict file selection
        onChange={
          (e: React.ChangeEvent<HTMLInputElement>) =>
            e.target.files && setMyFile(e.target.files[0])
        } // Update state with selected file
      />
      <button type="submit">Upload File</button>
    </form>
  );
};

export default MyFile;
```


#### ✔ Follow the guide to set a specific file (Sizes).
```js
const { data, isLoading, isError, isValidSize } = await _64ify(myFile, {
 allowedSizes: {
  minSize: 1024, // file size in KB
  maxSize: 1024 * 5, // file size in MB
 },
 ...
});
```

#### ✔ 1. Add specific file types inside the array (for the package)
```bash
const { data, isLoading, isError, isValidSize } = await _64ify(myFile, {
 allowedTypes: ["image/jpeg", "image/png", "image/webp"],
 ...
});
```

#### ✔ 2. Add specific file types here (for the browser)
```js
<input type="file" accept="image/jpeg, image/png, "image/webp", ..."/>
  ```

#### ✔ Most commonly used file types.
```js
// Copy and paste what you need 😊
{
  "image/jpeg",
  "image/png",
  "image/svg+xml",
  "image/gif",
  "image/webp",
  "image/bmp",
  "image/tiff",
  "image/x-icon",
  "image/vnd.microsoft.icon",
  "image/vnd.wap.wbmp",
  "image/heic",
  "image/heif",
  "image/jxr",
}
```
















