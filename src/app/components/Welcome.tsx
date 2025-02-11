interface WelcomeProps {
    name: string
}

export default function Welcome({ name } : WelcomeProps) {
    return (
        <section className="flex justify-between">
            <h2 className="text-lg">
                Olá, <span className="font-medium">{ name }</span>
            </h2>
        </section>
    )
}