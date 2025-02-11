import { ReactNode } from "react";

interface InfoChipRootProps {
    children: ReactNode;
    theme?: "primary" | "secondary" | "bordered";
}

export function InfoChipRoot({children, theme = "primary"} : InfoChipRootProps){
    const themes = {
        primary: "bg-primary-200",
        secondary: "bg-secondary-200",
        bordered: "border-2 border-gray-100"
    }


    //TODO: adicionar onclick
    //TODO: adicionar cursor pointer caso tenha onclick
    return(
        <div className={`${themes[theme]} flex items-center gap-4 rounded-full px-5 py-3`}>
            {children}
        </div>
    )
}