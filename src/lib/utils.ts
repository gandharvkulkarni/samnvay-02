import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export async function addDataToGoogleSheet(data: object, sheetName: string) {
  try {
    await fetch('/sheet-api', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, sheetName }),
    });
    
    return true;
  } catch (error) {
    console.error("Error adding data:", error);
    return false;
  }
}

export function getFormData(data: any){
  const formData = new FormData();

            Object.entries(data).forEach(([key, value]) => {
                if (!value) return;

                // ✅ Handle File Uploads
                if (value instanceof FileList && value.length > 0) {
                    formData.append(key, value[0]); // single file
                    return;
                }

                // ✅ Handle Arrays
                if (Array.isArray(value)) {
                    value.forEach((v) => formData.append(key, String(v)));
                    return;
                }

                // ✅ Handle Primitives (string, number, boolean)
                if (["string", "number", "boolean"].includes(typeof value)) {
                    formData.append(key, String(value));
                    return;
                }

                // ✅ Handle Objects
                if (typeof value === "object" && Object.keys(value).length > 0) {
                    formData.append(key, JSON.stringify(value));
                    return;
                }
            });

            // ✅ Debug log (optional)
            for (const [key, val] of formData.entries()) {
                console.log(key, val);
            }

            return formData;
}
