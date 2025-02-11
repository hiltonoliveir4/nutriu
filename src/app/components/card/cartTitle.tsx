interface CardTitleProps {
    title: string;
}
export function CardTitle({title} : CardTitleProps){
    return(
        <h5 className="text-gray-400 text-xl font-medium w-full">{title}</h5>
    )
}