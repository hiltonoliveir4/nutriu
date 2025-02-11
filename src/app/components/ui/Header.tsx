"use client"

import Image from "next/image";
import Button from "./Button";
import { Calendar, Plus, UserRound } from "lucide-react";

export default function Header(){
    return(
        <header className="hidden md:flex justify-between items-center px-5 pt-8 pb-3 md:w-[840px] m-auto">
            <Image src={"/icons/nutriuLogo.svg"} width={94} height={48} alt="logo do site nutriu"/>
            <div className="flex gap-6 text-gray-400">
                <Button
                    type="button" 
                    text="Adicionar refeição" 
                    onClick={() => console.log("Adicionar refeição")}
                    icon={<Plus size={16}/>}
                />
                <Button
                    type="button" 
                    text="Calendário"
                    onClick={() => console.log("Calendário")}
                    icon={<Calendar size={16}/>}
                />
                <Button
                    type="button" 
                    text="Perfil" 
                    onClick={() => console.log("Perfil")}
                    icon={<UserRound size={16}/>}
                />
            </div>
        </header>
    )
}