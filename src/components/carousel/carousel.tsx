import { FC } from "react";

import { ICarouselItem } from "../../models/ICarouselItem.ts";
import { CarouselItem } from "../../ui/carousel-item";

import './styles.css';

interface CarouselProps {
  carouselData: ICarouselItem[];
}

export const Carousel: FC<CarouselProps> = ({ carouselData }) => {
  return (
      <div className="flex gap-1 overflow-x-scroll scrollbar-hide my-5">
        {carouselData.map(item => (
            <CarouselItem key={item.id} data={item} />
        ))}
      </div>
  );
};