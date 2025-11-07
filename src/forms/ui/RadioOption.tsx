import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";

export function RadioOption({ id, value, label }: any) {
    return (
        <div className="flex items-center space-x-2">
            <RadioGroupItem value={value} id={id} />
            <Label htmlFor={id}>{label}</Label>
        </div>
    )
}