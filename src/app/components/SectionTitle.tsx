interface SectionTitleProps {
    title: string;
    details?: string;
}

export default function SectionTitle({ title, details }: SectionTitleProps) {
    return (
        <h3 className="text-base font-medium">
            {title} 
            {details && <> {" "}
                <span className="text-gray-200 font-normal">{details}</span>
            </>}
        </h3>
    )
}