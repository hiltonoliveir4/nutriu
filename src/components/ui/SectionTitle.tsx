interface SectionTitleProps {
    title: string;
    details?: string;
    className?: string;
}

export default function SectionTitle({ title, details, className }: SectionTitleProps) {
    return (
        <h3 className={`${className} text-base font-medium`}>
            {title} 
            {details && <> {" "}
                <span className="text-gray-200 font-normal">{details}</span>
            </>}
        </h3>
    )
}