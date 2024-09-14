import { FC } from "react";

import { IProduct } from "../../models/IProduct.ts";
import { ProductCard } from "../../ui/product-card";

interface ProductListProps {
  products?: IProduct[] | null;
}

export const ProductList: FC<ProductListProps> = ({ products }) => {

  if (!products) {
    return null;
  }

  return (
      <div className="grid grid-cols-2 gap-4">
        {products?.map((product) => (
            <ProductCard
                key={product.bouquet_id}
                handleClick={() => console.log("Clicked")}
                {...product}
            />
        ))}
      </div>
  );
};