import { ReactNode } from "react"

interface FoodItemRootProps {
    children: ReactNode
}
export function FoodItemRoot({children} : FoodItemRootProps){
    return(
        <div className="flex justify-between items-center gap-2 text-accent-yellow-500">
            {children}
        </div>
    )
}