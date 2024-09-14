import { BackButton } from '@twa-dev/sdk/react';

import { ProductCard } from "../../components/product-card";

export const ProductCardPage = () => {

  return (
      <div>
        <ProductCard />
        <BackButton />
      </div>
  );
};