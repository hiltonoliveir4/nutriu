import { ReactNode } from "react";

interface InfoChipContentProps { 
    text: ReactNode;
    description?: ReactNode;
    theme?: "primary" | "secondary" | "bordered";
}

export function InfoChipContent({text, description, theme = "primary"} : InfoChipContentProps) {
    const themes = {
        primary: "text-primary-700",
        secondary: "text-secondary-700",
        bordered: "text-gray-700"
    }

    return (
        <div className="flex flex-col">
            <h4 className={`${themes[theme]} font-medium text-base leading-none`}> {text} </h4>
            <p className="text-xs text-gray-300 leading-none"> {description} </p>
        </div>
    )
}