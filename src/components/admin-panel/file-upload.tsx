"use client";
import React, { useState } from "react";
import { FileUpload } from "../ui/file-upload";
export function FileUploadDemo() {
    const [files, setFiles] = useState<File[]>([]);
    const handleFileUpload = (files: File[]) => {
        setFiles(files);
    };
    return (
        <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-black border-neutral-800 rounded-lg">
            <FileUpload onChange={handleFileUpload} />
        </div>
    );
}
