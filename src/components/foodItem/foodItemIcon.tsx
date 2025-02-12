import { ElementType } from "react"

interface FoodItemIconProps {
    icon: ElementType
}

export function FoodItemIcon({icon: Icon} : FoodItemIconProps){
    return(
        <span>
            <Icon size={14} />
        </span>
    )
}