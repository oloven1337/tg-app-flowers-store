import { BackButton } from '@twa-dev/sdk/react';
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useMutation, useQuery } from 'react-query';
import { Link, useParams } from "react-router-dom";

import { Description } from "./components/description.tsx";
import { MainInfo } from "./components/main-info.tsx";
import { Reviews } from "./components/reviews.tsx";
import { Structure } from "./components/structure.tsx";
import { SwiperImages } from "./components/swiper-images.tsx";
import { fetchProduct, sendProduct } from "../../api/products";
import flower from '../../assets/images/flower2.jpg';
import { IProduct } from "../../models/IProduct.ts";
import { Button } from "../../ui/button";
import { Text } from "../../ui/text";

export type ProductType = 'Без сборки' | 'Со сборкой';

const PATH = import.meta.env.VITE_URL

export const ProductCardPage = () => {
  // const url = window.location.href;
  const { mutate } = useMutation(sendProduct);
  const [typeProduct, setTypeProduct] = useState<ProductType>('Без сборки');
  const tg = window.Telegram.WebApp;
  const params = useParams<{ id: string }>();

  const { data: productData, isLoading } = useQuery<IProduct>(
      ['product', params.id],
      () => fetchProduct(params.id!),
      {
        enabled: !!params.id,
        staleTime: 5 * 60 * 1000,
        cacheTime: 10 * 60 * 1000,
      },
  );

  const {
    bouquet_name,
    price_base,
    price_build,
    image_paths,
    bouquet_description,
    structure
  } = productData || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBuy = () => {
    const d = {
      chat_id: tg.initDataUnsafe.user?.id,
      user_id: tg.initDataUnsafe.user?.id,
      bouquet_name: bouquet_name,
      price: typeProduct === 'Без сборки' ? price_base : price_build,
      bouquet_link: "https://rfflsowers.ru/product/10",
      image_url: 'https://rfflowers.ru/' + 'static/' + image_paths?.[0],
      needs_assembly: typeProduct === 'Со сборкой'
    };

    mutate(d);
  };

  return (
      <div style={{paddingBottom: '80px'}}>
        {isLoading ? (
            <Skeleton width={416} height={436}/>
        ) : (
            <SwiperImages images={image_paths?.length ? (
                image_paths.map((imageLink) => PATH + 'static/' + imageLink)
            ) : [flower]}/>
        )}
        <MainInfo
            typeProduct={typeProduct}
            setTypeProduct={setTypeProduct}
            isLoading={isLoading}
            title={bouquet_name || ''}
            price_build={price_build}
            price_base={price_base}
        />
        <div style={{
          background: tg?.themeParams?.bg_color || '#FFFFFF'
        }} className="mb-3 rounded-2xl p-4">
          <Link to="https://t.me/gaevskii_ilia">
            <Button
                onClick={handleBuy}
                style={{
              color: 'white',
              background: tg.themeParams.button_color || '#927BD540',
              // background: '#927BD540'
            }} className="w-full py-2.5 rounded-lg">
              <Text variant="REGULAR" style={{
                color: tg.themeParams.text_color || '#9747FF'
                // color: '#9747FF'
              }}>
                Уточнить детали
              </Text>
            </Button>
          </Link>
        </div>
        <Description description={bouquet_description || ''}/>
        <Structure structure={structure || ''}/>
        <Reviews id={params.id!}/>
        <BackButton/>
        <div className="z-20 fixed bottom-0 left-0 right-0 p-4" style={{
          // background: tg?.themeParams?.bottom_bar_bg_color || '#FFFFFF'
          background: 'transparent'
        }}>
          <Link to="https://t.me/gaevskii_ilia" className="bg-primary w-full">
            <Button
                onClick={handleBuy}
                style={{
              color: 'white',
              background: tg.themeParams.button_color || '#927BD5'
              // background: '#927BD5'
            }} className="w-full py-2.5 rounded-lg">
              <Text variant="MEDIUM" style={{
                color: 'white'
              }}>
                Купить за {typeProduct === 'Без сборки' ? price_base : price_build} ₽
              </Text>
            </Button>
          </Link>
        </div>
      </div>
  );
};
