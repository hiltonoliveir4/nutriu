import { ElementType } from "react";

interface InfoChipIconProps {
    icon: ElementType;
    theme?: "primary" | "secondary" | "bordered";
}

export function InfoChipIcon({icon: Icon, theme = "primary"} : InfoChipIconProps ){
    const themes = {
        primary: "text-primary-500",
        secondary: "text-secondary-500",
        bordered: "text-gray-300"
    }

    return(
        <Icon className={themes[theme]} size={24} strokeWidth={3}/>
    )
}