import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import React, { useState } from 'react'

export default function AddGoalContent() {

    const [macro, setMacro] = useState('Proteína');
    const [quantity, setQuantity] = useState('100');
    const [unit, setUnit] = useState('Gramas (g)');

    const handleSave = () => {
        console.log({ macro, quantity, unit });
    };
    
  return (
       <div className="space-y-4">
        <div className='px-1'>   
        <div>
          <Select
            label='Macro'
            name='macro'
            required
            value={macro}
            onChange={(e) => setMacro(e.target.value)}
          >
            <option>Proteína</option>
            <option>Carboidrato</option>
            <option>Gordura</option>
          </Select>
        </div>
        <div>
          <Input
          name='quantity'
            type="text"
            value={quantity}
            label="Quantidade diária"
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
                className="bg-secondary-400  text-white py-5 px-7 w-full rounded-2xl text-xl"
                text= "Salvar"
                type='button'
              />
      </div>
  )
}
