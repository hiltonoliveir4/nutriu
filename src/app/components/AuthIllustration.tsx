import Image from "next/image";

export default function AuthIllustration() {
    return (
        <div className="hidden md:flex md:flex-col md:items-center md:gap-11">
            <Image src={"/icons/nutriuLogo.svg"} alt="Logo do Nutriu" width={134} height={60}></Image>
            <Image src={"/illustrations/auth.svg"} width={500} height={500} alt={"Celular e Homem"}></Image>
        </div>
    )
}