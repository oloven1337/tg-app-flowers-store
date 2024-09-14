import { FC } from 'react';
import { Link } from 'react-router-dom';

import flower from '../../assets/images/flower.jpg';
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
          <img className="rounded-t-2xl" src={flower} alt=""/>
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