import Image from "next/image";

interface CardIllustrationProps {
    src: string;
    alt: string;
    width: number;
    height: number;
}
export function CardIllustration({ src, alt, width, height } : CardIllustrationProps){
    return(
        <Image width={width} height={height} src={src} alt={alt} />
    )
}