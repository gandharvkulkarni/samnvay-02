import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface FormFieldProps {
    label: string
    htmlFor?: string
    children: React.ReactNode
    required?: boolean
    className?: string
    error?: string
}

export function FormField({
    label,
    children,
    required,
    className,
    error,
}: FormFieldProps) {
    return (
        <div className={cn("flex flex-col gap-2", className)}>
            <Label className="font-semibold text-gray-800">
                {label} {required && <span className="text-red-500">*</span>}
            </Label>
            {children}
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>
    )
}
