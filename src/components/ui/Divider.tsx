interface DividerProps {
    className?: string;
}
export default function Divider({className = "border-t-2 border-gray-100 w-full"} : DividerProps){
    return(
        <div className={`border-t ${className}`}></div>
    )
}