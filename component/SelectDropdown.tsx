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
    { label: "javascript", value: 63 },
    { label: "typescript", value: 74 },
    { label: "python", value: 71 },
    { label: "java", value: 62 },
    { label: "csharp", value: 51 },
    { label: "php", value: 68 },
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
                        <SelectItem className={`${item.label === value ? "text-black bg-gray-100" :""}`} key={item.label} value={item.label}>
                            {item.label} - {item.value}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
