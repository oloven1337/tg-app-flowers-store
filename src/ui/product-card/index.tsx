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
  const { bouquet_name, price_base } = bouquet;
  return (
      <div className="rounded-2xl bg-white">
        <Link to={`/product/${bouquet.bouquet_id}`}>
          {!bouquet.main_image_path ? (
              <Skeleton width="95%" style={{
                marginLeft: '2%',
                marginTop: '1%'
              }} height={112} />
              ) : (
              <img
                  className="rounded-t-2xl w-full h-[112px] object-contain"
                  src={'https://rfflowers.ru/' + bouquet.main_image_path}
                  alt=""
              />
          )}
          <div className="p-2">
            <Text className="text-start" variant="MEDIUM">{`${price_base} ₽`}</Text>
            <Text className="text-start mb-2" variant="REGULAR">{bouquet_name}</Text>
            <Button className="px-2.5 py-1.5 rounded-2xl bg-[#F2F2F7] w-full" onClick={handleClick}>
              <Text variant="REGULAR">Купить</Text>
            </Button>
          </div>
        </Link>
      </div>
  );
};