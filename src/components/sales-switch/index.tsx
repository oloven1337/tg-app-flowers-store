import React from 'react';

import { Text } from "../../ui/text";

interface SaleSwitchProps {
  isOnSale: boolean;
  onSaleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SaleSwitch: React.FC<SaleSwitchProps> = ({ isOnSale, onSaleChange }) => {
  return (
      <div className="flex justify-between items-center">
        <Text variant="MEDIUM" className="font-semibold">Распродажа</Text>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
              type="checkbox"
              checked={isOnSale}
              onChange={onSaleChange}
              className="sr-only"
          />
          <div className={`w-11 h-6 bg-gray-200 rounded-full transition-colors duration-300 ${isOnSale ? 'bg-primary' : ''}`}></div>
          <span className={`absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${isOnSale ? 'translate-x-full' : ''}`}></span>
        </label>
      </div>
  );
};
