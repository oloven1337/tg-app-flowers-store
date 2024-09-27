import { BackButton } from '@twa-dev/sdk/react';
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useQuery } from 'react-query';
import { Link, useParams } from "react-router-dom";

import { Description } from "./components/description.tsx";
import { MainInfo } from "./components/main-info.tsx";
import { Reviews } from "./components/reviews.tsx";
import { Structure } from "./components/structure.tsx";
import { SwiperImages } from "./components/swiper-images.tsx";
import { fetchProduct } from "../../api/products";
import flower from '../../assets/images/flower2.jpg';
import { IProduct } from "../../models/IProduct.ts";
import { Button } from "../../ui/button";

const PATH = import.meta.env.VITE_URL
export const ProductCardPage = () => {
  const tg = window.Telegram.WebApp;
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
      <div style={{ paddingBottom: '80px' }}> {/* Отступ снизу, чтобы контент не перекрывался кнопкой */}
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
        <Description description={productData?.bouquet_description || ''} />
        <Structure structure={productData?.structure || ''} />
        <Reviews id={params.id!} />
        <BackButton />
        <div className="z-20 fixed bottom-0 left-0 right-0 p-4" style={{
          background: tg?.themeParams?.bottom_bar_bg_color || '#F2F2F7'
        }}>
          <Link to="https://t.me/gaevskii_ilia" className="bg-primary w-full">
            <Button style={{
              color: 'white'
            }} className="bg-primary w-full py-2.5 rounded-lg">Перейти к оплате</Button>
          </Link>
        </div>
      </div>
  );
};
