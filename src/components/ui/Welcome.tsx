"use client"

import { LogOut } from "lucide-react"
import { signOut } from "next-auth/react"
import { useState } from "react"
import Loader from "./Loader"

interface WelcomeProps {
    name: string
}

export default function Welcome({ name } : WelcomeProps) {
    const [isLoading, setIsLoading] = useState(false)

    const handleClick = async () => {
        setIsLoading(true)
        signOut()
        setIsLoading(false)
    }

    return (
        <section className="flex justify-between items-center px-5 text-gray-400">
            <h2 className="text-lg">
                Olá, <span className="font-medium">{ name }</span>
            </h2>
            <button>
                <div className="flex items-center gap-1" onClick={handleClick}>
                    {isLoading ? <Loader /> : <LogOut size={20}/>}
                </div>
            </button>
        </section>
    )
}