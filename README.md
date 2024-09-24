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
## Quick Start:
#### ✔ Simply connect with your Next.js or React.js application 🤝.
 ```js
"use client";

import React, { useState } from "react";
import { _64ify } from "next-file-64ify";

const MyFileUpload = () => {
  const [myFile, setMyFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (myFile) {
      const { data, isLoading, isError, isValidSize } = await _64ify(myFile, {
        allowedSizes: {
          minSize: 10,
          maxSize: 2048,
        },
        allowedTypes: ["image/jpeg", "image/png"],
      });
      console.log({ data, isLoading, isError, isValidSize });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setMyFile(e.target.files[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        accept="image/jpeg, image/png"
        onChange={handleChange}
      />
      <button type="submit">Upload File</button>
    </form>
  );
};

export default MyFileUpload;
```

## Customizing File Types and Sizes:
#### ✔ 1. Set File Size Limits

```js
const { data, isLoading, isError, isValidSize } = await _64ify(myFile, {
 allowedSizes: {
  minSize: 1024, // file size in KB
  maxSize: 1024 * 5, // file size in MB
 },
 ...
});
```

#### ✔ 2. Add More Allowed File Types (for the package)
```js
const { data, isLoading, isError, isValidSize } = await _64ify(myFile, {
 allowedTypes: ["image/jpeg", "image/png", "image/webp"],
 ...
});
```

#### ✔ 3. Update File Input to Accept More Types (for the browser)
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