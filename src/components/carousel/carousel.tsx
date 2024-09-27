import { CarouselItem } from "../../ui/carousel-item";

import './styles.css';

export const Carousel = () => {
  return (
      <div className="flex gap-1 overflow-x-scroll scrollbar-hide my-5">
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </div>
  );
};