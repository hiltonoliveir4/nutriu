import { CalendarFold, ChefHat, ChevronRight } from "lucide-react";
import Welcome from "../components/ui/Welcome";
import { InfoChip } from "../components/infoChip";
import { Card } from "../components/card";
import { FoodItem } from "../components/foodItem";
import SectionTitle from "../components/ui/SectionTitle";

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

interface Meal {
    title: string,
    theme: "primary" | "secondary" | "accent-yellow" | "accent-blue" | "accent-purple" | "bordered"
    foods: Food[]
}

interface Food {
    name: string, 
    quantity: string, 
    unit: string 
}

const meals : Meal[] = [
    {
        title: "Café da manhã", theme: "accent-yellow",
        foods: [
            { name: "Café", quantity: "150", unit: "mL" },
            { name: "Ovo", quantity: "100", unit: "g" },
            { name: "Pão", quantity: "150", unit: "g" },
        ]
    },
    {
        title: "Almoço", theme: "secondary",
        foods: [
            { name: "Arroz Integral", quantity: "150", unit: "g" },
            { name: "Frango", quantity: "200", unit: "g" },
            { name: "Batata", quantity: "100", unit: "g" },
            { name: "Salada", quantity: "100", unit: "g" },
            { name: "Suco de uva", quantity: "100", unit: "mL" },
        ]
    },
    {
        title: "Lanche da tarde", theme: "accent-purple",
        foods: [
            { name: "Whey Protein", quantity: "30", unit: "g" },
            { name: "Leite", quantity: "250", unit: "mL" },
            { name: "Banana", quantity: "100", unit: "g" },
        ]
    },
    {
        title: "Jantar", theme: "accent-blue",
        foods: [
            { name: "Arroz Integral", quantity: "150", unit: "g" },
            { name: "Frango", quantity: "200", unit: "g" },
            { name: "Batata", quantity: "100", unit: "g" },
            { name: "Salada", quantity: "100", unit: "g" },
            { name: "Suco de uva", quantity: "100", unit: "mL" },
        ]
    },
    {
        title: "Ceia", theme: "bordered",
        foods: [
            { name: "Mingau de aveia", quantity: "200", unit: "g" },
        ]
    }
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
                    {meals.map((meal, key) =>  
                        <Card.Root key={key} theme={meal.theme}>
                            <Card.Illustration width={210} height={150} src={"/illustrations/foodanddrink.svg"} alt="Comida e bebida" />
                            <Card.Title title={meal.title} />
                            <Card.Content>
                                {meal.foods.map( (food, key) => 
                                    <FoodItem.Root key={key}>
                                        <FoodItem.Icon icon={ChefHat} />
                                        <FoodItem.Description description={food.name} />
                                        <FoodItem.Quantity quantity={food.quantity} unit={food.unit} />
                                    </FoodItem.Root>
                                )}
                            </Card.Content>
                        </Card.Root>
                    )}
                </div>
            </div>
            <div className="flex flex-col mt-10 gap-3">
                <SectionTitle title="Minha semana" />
                <div className="flex gap-3 overflow-x-auto whitespace-nowrap md:flex-wrap md:whitespace-normal">
                    {week.map((day, key) =>
                        <InfoChip.Root key={key}>
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