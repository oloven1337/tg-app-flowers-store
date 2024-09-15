import React from 'react';

import { Text } from "../../ui/text";

interface FlowersFilterProps {
  selectedFlowers: string[];
  onFlowerToggle: (flower: string) => void;
}

export const FlowersFilter: React.FC<FlowersFilterProps> = ({ selectedFlowers, onFlowerToggle }) => {
  const flowers = ['Розы кустовые', 'Ромашки', 'Лилии', 'Тюльпаны'];

  return (
      <div className="mb-4">
        <Text variant="MEDIUM" className="font-semibold mb-3">Цветы</Text>
        <div className="flex flex-wrap gap-2">
          {flowers.map((flower) => (
              <button
                  key={flower}
                  className={`border rounded-full px-3 py-1.5 ${
                      selectedFlowers.includes(flower) ? 'bg-primary' : 'bg-gray-200'
                  }`}
                  onClick={() => onFlowerToggle(flower)}
              >
                <Text
                    variant="REGULAR"
                    className={
                  `text-center font-medium ${selectedFlowers.includes(flower) ? 'text-white' : 'text-color'}`
                    }
                >
                  {flower}
                </Text>
              </button>
          ))}
        </div>
      </div>
  );
};
