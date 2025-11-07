import { RadioGroup } from "@/components/ui/radio-group"
import { Control, Controller, UseFormRegister, useWatch } from "react-hook-form"
import { RadioOption } from "./RadioOption"
import { Textarea } from "@/components/ui/textarea"

interface YesNoFieldProps {
    name: any
    control: Control<any>
    register: UseFormRegister<any>
    detailsName?: string
    detailsPlaceholder?: string
}

export function YesNoField({ name, control, register, detailsName, detailsPlaceholder }: YesNoFieldProps) {
    const value = useWatch({ control, name })
    return (
        <div className="flex flex-col gap-2">
            <Controller
                name={name}
                control={control}
                defaultValue="No"
                render={({ field }) => (
                    <RadioGroup onValueChange={field.onChange} value={field.value} className="flex flex-wrap gap-4">
                        <RadioOption value="Yes" label="Yes" id={`${name}-yes`} />
                        <RadioOption value="No" label="No" id={`${name}-no`} />
                    </RadioGroup>
                )}
            />
            {value === "Yes" && detailsName && (
                <Textarea placeholder={detailsPlaceholder} {...register(detailsName)} className="mt-3" />
            )}
        </div>
    )
}