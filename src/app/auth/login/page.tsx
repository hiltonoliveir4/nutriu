"use client"

import Divider from "@/components/ui/Divider";
import Image from "next/image";
import LoginForm from "@/components/forms/auth/LoginForm";
import AuthIllustration from "@/components/ui/AuthIllustration";
import Button from "@/components/ui/Button";

export default function Login() {
    return (
        <div className="flex items-center justify-center w-full min-h-screen">
            <AuthIllustration />
            <div className="flex flex-col items-center justify-center w-full px-12 gap-8 md:max-w-md">
                <Image className="md:hidden m-6" src={"/icons/nutriuLogo.svg"} alt="Logo do Nutriu" width={134} height={60}></Image>
                <Button 
                    type="submit" 
                    className="border-2 border-gray-100 rounded-xl w-full p-3"
                    onClick={() => console.log("login com Google")} 
                    icon={<Image height={18} width={18} src={"/icons/googleIcon.svg"} alt="Logo do google"></Image>}
                    text={<span className="text-base text-gray-300 font-medium">Continue com o Google</span>}/>
                <Divider />
                <LoginForm />
            </div>
        </div>
    );
};