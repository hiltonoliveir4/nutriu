import { Calendar, Plus, UserRound } from "lucide-react";

export default function NavigationMenu() {
    return (
        <nav className="md:hidden fixed bottom-0 flex bg-white justify-center w-full rounded-t-3xl py-4 shadow-2xl shadow-gray-400 bg-white-500 gap-16">
            <button className="text-gray-300">
                <Calendar size={32} />
            </button>
            <button className="text-white p-3 rounded-full bg-primary-400">
                <Plus size={32} />
            </button>
            <button className="text-gray-300">
                <UserRound size={32} />
            </button>
        </nav>
    )
}