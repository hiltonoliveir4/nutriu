import { ReactNode } from "react"

interface FoodItemDescriptionProps {
    description: ReactNode
}

export default function FoodItemDescription({description} : FoodItemDescriptionProps){
    return(
        <p className="text-base w-full overflow-hidden whitespace-nowrap text-overflow-ellipsis"> {description} </p>
    )
}