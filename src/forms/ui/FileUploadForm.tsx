import { useEffect, useState } from "react";
import { UseFormRegister, UseFormWatch } from "react-hook-form";

interface FileUploadFormProps {
  register: UseFormRegister<any>;
  watch: UseFormWatch<any>;
  fieldName: string;
}

export default function FileUploadForm({ register, watch, fieldName }: FileUploadFormProps) {
  const [fileName, setFileName] = useState<string>("");
  const inputId = `file-upload-${fieldName}`;
  const file = watch(fieldName);

  useEffect(() => {
    if (!file || file.length === 0) {
      setFileName("");
    }
  }, [file]);

  return (
    <div className="flex flex-col gap-2 w-full max-w-sm">
      <div className="flex items-center gap-2">
        <label
          htmlFor={inputId}
          className="cursor-pointer rounded-md bg-teal-500 px-2 py-1 text-white hover:bg-teal-600 transition-colors"
        >
          Choose File
        </label>
        <span className="text-sm text-gray-500">
          {fileName || "No file selected"}
        </span>
      </div>

      <input
        id={inputId}
        type="file"
        className="hidden"
        {...register(fieldName, {
          onChange: (e) => setFileName(e.target.files?.[0]?.name || ""),
        })}
      />
    </div>
  );
}
