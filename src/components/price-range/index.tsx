import React from 'react';

import { Text } from "../../ui/text";

interface PriceRangeProps {
  minPrice: string;
  maxPrice: string;
  onMinPriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onMaxPriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PriceRange: React.FC<PriceRangeProps> = ({ minPrice, maxPrice, onMinPriceChange, onMaxPriceChange }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const invalidChars = ['-', '+', 'e', 'E', '.'];
    if (invalidChars.includes(e.key)) {
      e.preventDefault(); // Отклонить ввод недопустимых символов
    }
  };

  return (
      <div className="mb-4">
        <Text variant="MEDIUM" className="font-semibold mb-3">Цена</Text>
        <div className="flex gap-2">
          <input
              type="text"
              value={minPrice}
              onChange={onMinPriceChange}
              onKeyDown={handleKeyDown}
              inputMode="numeric"
              pattern="[0-9]*"
              className="border p-2 rounded w-full"
              placeholder="от 1 000 ₽"
          />
          <input
              type="text"
              value={maxPrice}
              onChange={onMaxPriceChange}
              onKeyDown={handleKeyDown}
              inputMode="numeric"
              pattern="[0-9]*"
              className="border p-2 rounded w-full"
              placeholder="до 7 000 ₽"
          />
        </div>
      </div>
  );
};
