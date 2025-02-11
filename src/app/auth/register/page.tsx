import Image from "next/image";
import RegisterForm from "../../components/forms/auth/RegisterForm";

export default function Login() {
    return (
        <div className="flex items-center justify-center w-full">
            <div className="hidden md:flex md:flex-col md:items-center md:gap-11">
                <Image src={"/icons/nutriuLogo.svg"} alt="Logo do Nutriu" width={134} height={60}></Image>
                <Image src={"/illustrations/auth.svg"} width={500} height={500} alt={"Celular e Homem"}></Image>
            </div>
            <div className="flex flex-col items-center justify-center min-h-screen w-full px-12 gap-8 md:max-w-md">
                <Image className="md:hidden" src={"/icons/nutriuLogo.svg"} alt="Logo do Nutriu" width={134} height={60}></Image>
                <RegisterForm />
            </div>
        </div>
    );
};