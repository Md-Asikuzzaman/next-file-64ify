## Next-File-64ify
Intro: "Base64 encoding simplifies file handling by converting binary data, like images or audio files, into ASCII characters.This transformation enables seamless integration of files into web applications, facilitating tasks such as embedding images directly into HTML or transmitting binary data over HTTP."

## Installation:
##### With NPM
 ```bash
  npm i next-file-64ify
```
#### ✔ After installation, verify the package.json file to confirm successful installation.
 ```bash
 "next-file-64ify": "^1.0.0",
  ```
#### ✔ Here's a simple example of how to use this package with React.js or Next.js.
 ```bash
 "use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { base64 } from "next-file-64ify";

const UploadFile = () => {
  // State for file upload...
  const [base64String, setBase64String] = useState<File | null>(null);

  // Log the actual base64 data...
  console.log(base64String);

  // File Change handler...
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    setBase64String(selectedFile);
  };

  // Form submit handler...
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (base64String) {
      console.log(await base64(base64String));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        // Specify the file types...
        accept="image/jpeg,image/png,image/svg+xml,image/webp"
        onChange={handleFileChange}
      />
      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadFile;

  ```
