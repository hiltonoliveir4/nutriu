interface CardTitleProps {
    title: string;
}
export function CardTitle({title} : CardTitleProps){
    return(
        <p className="text-gray-400 text-xl font-medium w-full">{title}</p>
    )
}