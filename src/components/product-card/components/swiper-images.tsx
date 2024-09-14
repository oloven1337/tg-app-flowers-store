import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import flower from '../../../assets/images/flower2.jpg';

import 'swiper/css';
import 'swiper/css/pagination';
import '../styles.css';

export const SwiperImages = () => (
    <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
    >
      <SwiperSlide>
        <img src={flower} alt="Placeholder 1" className="full-width-image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={flower} alt="Placeholder 2" className="full-width-image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={flower} alt="Placeholder 3" className="full-width-image" />
      </SwiperSlide>
    </Swiper>
);
