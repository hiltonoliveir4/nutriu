import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import React, { useState } from 'react'



export default function EditFoodContent() {
  const [meal, setMeal] = useState('Almoço');
  const [food, setFood] = useState('Arroz Integral');
  const [quantity, setQuantity] = useState('100');
  const [unit, setUnit] = useState('Gramas (g)');

  const handleSave = () => {
    console.log({ meal, food, quantity, unit });
  };
  return (
    <div className="space-y-4">
      <div className='px-1'>
        <div>
          <Select
            label='Refeição'
            name='meal'
            required
            value={meal}
            onChange={(e) => setMeal(e.target.value)}
          >
            <option>Almoço</option>
            <option>Jantar</option>
            <option>Café da Manhã</option>
          </Select>
        </div>
        <div>
          <Input
            label="Alimento"
            required
            name='foodName'
            type="text"
            value={food}
            onChange={(e) => setFood(e.target.value)}
          />
        </div>
        <div>
          <Input
            name='quantity'
            type="text"
            value={quantity}
            label="Quantidade (g ou ml)"
            required
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div>
          <Select
            name='unit'
            value={unit}
            label="Unidade"
            required
            onChange={(e) => setUnit(e.target.value)}
          >
            <option>Gramas (g)</option>
            <option>Mililitros (ml)</option>
          </Select>
        </div>
      </div>
      <Button
        onClick={handleSave}
        className="bg-secondary-400 text-white py-5 px-7 w-full rounded-2xl text-xl"
        text="Salvar"
        type='button'
      />
    </div>
  )
}
