import { ReactNode } from "react";

interface CardRootProps {
    children: ReactNode;
    id?: string;  
    theme?: "primary" | "secondary" | "accent-yellow" | "accent-blue" | "accent-purple" | "bordered"
}

export function CardRoot({children, id, theme = "primary"} : CardRootProps){
    const themes = {
        primary: "bg-primary-200",
        secondary: "bg-secondary-200",
        "accent-yellow": "bg-accent-yellow-200",
        "accent-blue": "bg-accent-blue-200",
        "accent-purple": "bg-accent-purple-200",
        "bordered": "border-2 border-gray-100",
    }

    //TODO: adicionar onclick
    //TODO: adicionar cursor pointer caso tenha onclick
    return(
        <div id={id} className={`${themes[theme]} flex flex-col items-center w-64 p-5 gap-2 rounded-3xl flex-shrink-0`}>
            {children}
        </div>
    )
}