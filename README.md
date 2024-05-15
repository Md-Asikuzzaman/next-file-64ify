## Next-File-64ify
Intro: "Base64 encoding simplifies file handling by converting binary data, like images or audio files, into ASCII characters.This transformation enables seamless integration of files into web applications, facilitating tasks such as embedding images directly into HTML or transmitting binary data over HTTP."

## Installation:
##### With NPM
 ```bash
  npm i next-file-64ify
```
#### ✔ After installation, verify the package file, and import the package.
###### package.json
 ```bash
 "next-file-64ify": "^2.1.1",
  ```
###### Page.tsx
```bash
import { _64ify } from "next-file-64ify";
  ```
#### ✔ Here's a simple example of how to use this package with React.js or Next.js.
 ```bash
"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { _64ify } from "next-file-64ify";

const Page = () => {
  // File state
  const [myFile, setMyFile] = useState<File | null>(null);

  // Add specific file types here...
  const allowedTypes = ["image/jpeg", "image/png"];

  // Add specific file size here...
  const allowedFileSize = { minSize: 0, maxSize: 1024 }; // Use size in KB.

  // File Change handler...
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    // The state talking the current file.
    const selectedFile = e.target.files && e.target.files[0];
    setMyFile(selectedFile);
  };

  // Form submit handler with... (async)
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (myFile) {
      // Destructuring all value with... (await)
      const { data, isLoading, isError, isValidSize } = await _64ify(myFile, allowedTypes, allowedFileSize);

      console.log({ data, isLoading, isError, isValidSize }); // log all values.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        accept="image/jpeg, image/png" // Add specific file types here also.
        onChange={handleFileChange}
      />
      <button type="submit">Upload</button>
    </form>
  );
};

export default Page;

  ```

#### ✔ You can simplify the code like this way.
 ```bash
"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { _64ify } from "next-file-64ify";

const Page = () => {
  // File state
  const [myFile, setMyFile] = useState<File | null>(null);

  // Add specific file types here...
  const allowedTypes = ["image/jpeg", "image/png"];

  // Add specific file size here...
  const allowedFileSize = { minSize: 0, maxSize: 1024 }; // Use size in KB.

  // Form submit handler with... (async)
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (myFile) {
      // Destructuring all value with... (await)
      const { data, isLoading, isError, isValidSize } = await _64ify(myFile, allowedTypes, allowedFileSize);

      console.log({ data, isLoading, isError, isValidSize }); // log all values.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        accept="image/jpeg, image/png" // Add specific file types here also.
        onChange={
          (e: ChangeEvent<HTMLInputElement>) =>
            e.target.files && setMyFile(e.target.files[0]) // Pass the current file.
        }
      />
      <button type="submit">Upload File</button>
    </form>
  );
};

export default Page;

  ```

#### ✔ Follow the guide to set specific file (Size).
```bash
  // Set your own recommended file size
  const allowedFileSize = { minSize: 1024, maxSize: 5120 }; // Size used in KB.
  const allowedFileSize = { minSize: 1024 * 2, maxSize: 1024 * 5 }; // Size used in MB.
  ```

#### ✔ Follow the guide to set specific file (Type).
```bash
// Add specific file types inside the array (for package)
const allowedTypes = ["image/jpeg", "image/png", "image/svg+xml", ...];
  ```

```bash
// Add specific file types here (for browser)
<input type="file" accept="image/jpeg, image/png, image/svg+xml, ..."/>
  ```

#### ✔ Most commonly used file types.
```bash
// Copy and paste what you need
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
















