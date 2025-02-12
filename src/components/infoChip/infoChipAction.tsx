import { ElementType } from "react"

interface InfoChipActionProps {
    icon: ElementType;
    theme?: "primary" | "secondary" | "bordered";
    onClick?: () => void;
}

export function InfoChipAction({icon: Icon, onClick, theme = "primary"} : InfoChipActionProps){
    const themes = {
        primary: "text-primary-700",
        secondary: "text-secondary-700",
        bordered: "text-gray-400"
    }

    return(
        <Icon onClick={onClick} className={themes[theme]}/>
    )
}