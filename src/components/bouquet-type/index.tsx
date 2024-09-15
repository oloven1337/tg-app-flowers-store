import React from 'react';

import { Text } from "../../ui/text";

interface BouquetTypeProps {
  bouquetType: string;
  onBouquetTypeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const BouquetType: React.FC<BouquetTypeProps> = ({ bouquetType, onBouquetTypeChange }) => {
  const types = ['Монобукеты', 'Букеты невесты', 'Мишки из роз', 'Цветы для интерьера'];

  return (
      <div className="mb-4">
        <Text variant="MEDIUM" className="font-semibold mb-3">Тип букетов</Text>
        {types.map((type) => (
            <div key={type} className="flex items-center mb-2">
              <input
                  type="radio"
                  id={type}
                  name="bouquetType"
                  value={type}
                  checked={bouquetType === type}
                  onChange={onBouquetTypeChange}
                  className="sr-only peer"
              />
              <label
                  htmlFor={type}
                  className={`flex items-center cursor-pointer text-gray-900 ${bouquetType === type ? 'text-primary' : ''}`}
              >
                <div
                    className={`relative inline-flex items-center justify-center w-6 h-6 border-2 rounded-full ${bouquetType === type ? 'border-primary' : 'border-gray-300'}`}
                >
                  {bouquetType === type && (
                      <div className="w-3 h-3 bg-primary rounded-full" />
                  )}
                </div>
                <Text variant="REGULAR" className="ml-2">{type}</Text>
              </label>
            </div>
        ))}
      </div>
  );
};
