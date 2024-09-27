import { FC } from 'react';
import Skeleton from "react-loading-skeleton";
import { Link } from 'react-router-dom';

import { IProduct } from "../../models/IProduct.ts";
import { Button } from "../button";
import { Text } from "../text";

export interface IProductCardProps extends IProduct {
  handleClick: () => void;
}

export const ProductCard: FC<IProductCardProps> = ({ handleClick, ...bouquet }) => {
  const tg = window.Telegram.WebApp;
  const { bouquet_name, price_base } = bouquet;
  return (
      <div className="rounded-2xl" style={{
        background: tg?.themeParams?.bg_color || '#F2F2F7'
      }}>
        <Link to={`/product/${bouquet.bouquet_id}`}>
          {!bouquet.main_image_path ? (
              <Skeleton width="95%" style={{
                marginLeft: '2%',
                marginTop: '1%'
              }} height={112} />
              ) : (
              <img
                  className="rounded-t-2xl w-full h-[112px] object-cover"
                  src={'https://rfflowers.ru/' + bouquet.main_image_path}
                  alt=""
              />
          )}
          <div className="p-2">
            <Text style={{
              color: tg.themeParams.text_color
            }} className="text-start" variant="MEDIUM">{`${price_base} ₽`}</Text>
            <Text style={{
              color: tg.themeParams.text_color
            }} className="text-start mb-2" variant="REGULAR">{bouquet_name}</Text>
            <Button style={{
              background: tg?.themeParams?.bottom_bar_bg_color || '#F2F2F7'
            }} className="px-2.5 py-1.5 rounded-2xl bg-[#F2F2F7] w-full" onClick={handleClick}>
              <Text style={{
                color: tg.themeParams.text_color
              }}  variant="REGULAR">Купить</Text>
            </Button>
          </div>
        </Link>
      </div>
  );
};