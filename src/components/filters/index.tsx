import { useState } from "react";

import { Button } from "../../ui/button";
import { Text } from "../../ui/text";
import { BouquetType } from "../bouquet-type";
import { FlowersFilter } from "../flowers-filter";
import { PriceRange } from "../price-range";
import { SaleSwitch } from "../sales-switch";

export const Filters = () => {
  const [minPrice, setMinPrice] = useState<string>('1000');
  const [maxPrice, setMaxPrice] = useState<string>('7000');
  const [isOnSale, setIsOnSale] = useState<boolean>(false);
  const [bouquetType, setBouquetType] = useState<string>('Монобукеты');
  const [selectedFlowers, setSelectedFlowers] = useState<string[]>([]);

  const handleFlowerToggle = (flower: string) => {
    setSelectedFlowers((prev) =>
        prev.includes(flower)
            ? prev.filter((f) => f !== flower)
            : [...prev, flower]
    );
  };

  const handleClick = () => {
    console.log({
      minPrice: Number(minPrice) || 0,
      maxPrice: Number(maxPrice) || 0,
      isOnSale,
      bouquetType,
      selectedFlowers,
    });
  };
  return (
      <div className="pt-7 pb-4">
        <Text className="mb-4" variant="HEAD">Фильтры</Text>
        <div className="ounded-lg">
          <div className="rounded-2xl bg-white p-3 mb-2">
            <PriceRange
                minPrice={minPrice}
                maxPrice={maxPrice}
                onMinPriceChange={(e) => setMinPrice(e.target.value.replace(/\D/g, ''))}
                onMaxPriceChange={(e) => setMaxPrice(e.target.value.replace(/\D/g, ''))}
            />
          </div>
          <div className="rounded-2xl bg-white p-3 mb-2">
            <SaleSwitch
                isOnSale={isOnSale}
                onSaleChange={(e) => setIsOnSale(e.target.checked)}
            />
          </div>
          <div className="rounded-2xl bg-white p-3 mb-2">
            <BouquetType
                bouquetType={bouquetType}
                onBouquetTypeChange={(e) => setBouquetType(e.target.value)}
            />
          </div>
          <div className="rounded-2xl bg-white p-3 mb-2">
            <FlowersFilter
                selectedFlowers={selectedFlowers}
                onFlowerToggle={handleFlowerToggle}
            />
          </div>
          <Button className="w-full bg-primary text-white py-2 rounded-xl mt-4" onClick={handleClick}>
            <Text className="text-white" variant="MEDIUM">Применить</Text>
          </Button>
        </div>
      </div>
  );
};