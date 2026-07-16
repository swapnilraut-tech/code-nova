'use client'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const items = [
    { label: "javascript", value: "ES2023" },
    { label: "typescript", value: "5.8.3" },
    { label: "python", value: "3.13.5" },
    { label: "java", value: "24" },
    { label: "csharp", value: "13.0" },
    { label: "php", value: "8.4.10" },
]

export function SelectDemo({ value, setLang }:any) {
    return (
        <Select value={value} onValueChange={setLang} >
            <SelectTrigger className="w-full max-w-5xl">
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>lang</SelectLabel>
                    {items.map((item) => (
                        <SelectItem key={item.label} value={item.label}>
                            {item.label} - {item.value}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
