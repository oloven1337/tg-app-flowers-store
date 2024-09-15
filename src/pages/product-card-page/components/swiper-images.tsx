import { FC } from "react";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import '../styles.css';

interface SwiperImagesProps {
  images: string[] | undefined | null;
}

export const SwiperImages: FC<SwiperImagesProps> = ({ images }) => {

  return (
      <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
      >
        {images?.map((imageLink, index) => (
            <SwiperSlide key={index}>
              <img className="w-full" src={imageLink} alt="flower" />
            </SwiperSlide>
        ))}
      </Swiper>
  )

}