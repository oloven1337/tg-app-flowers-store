import { BackButton } from '@twa-dev/sdk/react';
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useQuery } from 'react-query';
import { useParams } from "react-router-dom";

import { Description } from "./components/description.tsx";
import { MainInfo } from "./components/main-info.tsx";
import { Reviews } from "./components/reviews.tsx";
import { Structure } from "./components/structure.tsx";
import { SwiperImages } from "./components/swiper-images.tsx";
import { fetchProduct } from "../../api/products";
import flower from '../../assets/images/flower2.jpg';
import { IProduct } from "../../models/IProduct.ts";

const PATH = import.meta.env.VITE_URL

export const ProductCardPage = () => {
  const params = useParams<{ id: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: productData, isLoading } = useQuery<IProduct>(
      ['product', params.id],
      () => fetchProduct(params.id!),
      {
        enabled: !!params.id,
        staleTime: 5 * 60 * 1000,
        cacheTime: 10 * 60 * 1000,
      },
  );

  return (
      <div>
        {isLoading ? (
            <Skeleton width={416} height={436} />
        ) : (
            <SwiperImages images={productData?.image_paths?.length ? (
                productData?.image_paths.map((imageLink) => PATH + imageLink)
            ) : [flower]}/>
        )}
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
  );
};
