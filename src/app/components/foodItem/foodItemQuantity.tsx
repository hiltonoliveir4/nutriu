interface FoodItemQuantityProps {
    unit: string;
    quantity: string
}

export function FoodItemQuantity({unit, quantity} : FoodItemQuantityProps){
    return(
        <span className="text-sm"> {quantity}{unit} </span>
    )
}