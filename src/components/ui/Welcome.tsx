"use client"

import { LogOut } from "lucide-react"
import { signOut } from "next-auth/react"

interface WelcomeProps {
    name: string
}

export default function Welcome({ name } : WelcomeProps) {
    return (
        <section className="flex justify-between items-center px-5 text-gray-400">
            <h2 className="text-lg">
                Olá, <span className="font-medium">{ name }</span>
            </h2>
            <button>
                <div className="flex items-center gap-1" onClick={() => signOut()}>
                    <LogOut size={20}/>
                </div>
            </button>
        </section>
    )
}