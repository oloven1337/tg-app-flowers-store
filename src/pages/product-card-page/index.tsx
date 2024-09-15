import { BackButton } from '@twa-dev/sdk/react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Description } from "./components/description.tsx";
import { MainInfo } from "./components/main-info.tsx";
import { Reviews } from "./components/reviews.tsx";
import { Structure } from "./components/structure.tsx";
import { SwiperImages } from "./components/swiper-images.tsx";
import { fetchProduct } from "../../api/products";
import { IProduct } from "../../models/IProduct.ts";

export const ProductCardPage = () => {
  const params = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);


  const [productData, setProducts] = useState<IProduct | null>(null);
  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true)

      if (!params.id) return;

      const data = await fetchProduct(params.id);

      setIsLoading(false);
      setProducts(data);
    };

    getProducts();
  }, []);

  return (
      <div>
        <SwiperImages images={productData?.image_paths} />
        <MainInfo
            isLoading={isLoading}
            title={productData?.bouquet_name || ''}
            price_build={productData?.price_build}
            price_base={productData?.price_base}
        />
        <Description />
        <Structure />
        <Reviews />
        <BackButton />
      </div>
  )
};
