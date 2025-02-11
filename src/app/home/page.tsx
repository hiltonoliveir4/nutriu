import { CalendarFold, ChefHat, ChevronRight } from "lucide-react";
import Welcome from "../components/Welcome";
import { InfoChip } from "../components/infoChip";
import { Card } from "../components/card";
import { FoodItem } from "../components/foodItem";
import SectionTitle from "../components/SectionTitle";

const goals = [
    { nutrient: "Proteína", quantity: "150", unit: "g" },
    { nutrient: "Carboidrato", quantity: "180", unit: "g" },
    { nutrient: "Calorias", quantity: "2500", unit: "" },
    { nutrient: "Gordura", quantity: "180", unit: "g" },
    { nutrient: "Sódio", quantity: "1500", unit: "mg" },
    { nutrient: "Vitamina C", quantity: "90", unit: "mg" },
]

const week = [
    { name: 'Segunda-Feira', date: '10/02/2025' },
    { name: 'Terça-Feira', date: '11/02/2025' },
    { name: 'Quarta-Feira', date: '12/02/2025' },
    { name: 'Quinta-Feira', date: '13/02/2025' },
    { name: 'Sexta-Feira', date: '14/02/2025' },
    { name: 'Sábado', date: '15/02/2025' },
    { name: 'Domingo', date: '16/02/2025' },
]

export default function Home() {
    return (
        <main className="flex flex-col w-full bg-white md:w-[840px] m-auto px-5 py-7">
            <Welcome name="Hilton Oliveira" />
            <div className="flex flex-col mt-10 gap-3">
                <SectionTitle title="Minhas metas" />
                <div className="flex flex-wrap gap-2">
                    {goals.map((goal, key) =>
                        <InfoChip.Root key={key} theme="bordered">
                            <InfoChip.Content
                                text={goal.nutrient}
                                description={<>
                                    <span className="text-secondary-700 font-bold"> 0 </span>
                                    {" "} de {goal.quantity}{goal.unit}
                                </>}>
                            </InfoChip.Content>
                        </InfoChip.Root>
                    )}
                </div>
            </div>
            <div className="flex flex-col mt-10 gap-3">
                <SectionTitle title="Quarta-Feira" details="12/02" />
                <div className="flex items-center gap-3 overflow-x-auto whitespace-nowrap md:flex-wrap md:whitespace-normal">
                    <Card.Root theme="accent-yellow">
                        <Card.Illustration width={210} height={150} src={"/illustrations/foodanddrink.svg"} alt="Comida e bebida" />
                        <Card.Title title="Almoço" />
                        <Card.Content>
                            <FoodItem.Root>
                                <FoodItem.Icon icon={ChefHat} />
                                <FoodItem.Description description="Arroz Integral" />
                                <FoodItem.Quantity quantity="200" unit="g" />
                            </FoodItem.Root>
                        </Card.Content>
                    </Card.Root>
                </div>
            </div>
            <div className="flex flex-col mt-10 gap-3">
                <SectionTitle title="Minha semana" />
                <div className="flex gap-3 overflow-x-auto whitespace-nowrap md:flex-wrap md:whitespace-normal">
                    {week.map((day, key) =>
                        <InfoChip.Root>
                            <InfoChip.Icon icon={CalendarFold} theme="secondary"></InfoChip.Icon>
                            <InfoChip.Content text={day.name} description={day.date}></InfoChip.Content>
                            <InfoChip.Action icon={ChevronRight}></InfoChip.Action>
                        </InfoChip.Root>
                    )}
                </div>
            </div>
        </main>
    )
}