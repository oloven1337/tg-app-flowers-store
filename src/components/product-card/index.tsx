import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Description } from "./components/description.tsx";
import { MainInfo } from "./components/main-info.tsx";
import { Reviews } from "./components/reviews.tsx";
import { Structure } from "./components/structure.tsx";
import { SwiperImages } from "./components/swiper-images.tsx";
import { fetchProduct } from "../../api/products";
import { IProduct } from "../../models/IProduct.ts";

import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

export const ProductCard = () => {
  const params = useParams<{ id: string }>();


  const [productData, setProducts] = useState<IProduct | null>(null);
  console.log(productData)
  useEffect(() => {
    const getProducts = async () => {
      if (!params.id) return;
      const data = await fetchProduct(params.id);
      
      setProducts(data);
    };

    getProducts();
  }, []);
  
  return (
      <>
        <SwiperImages />
        <MainInfo title="Клубничный десерт" prices={[2000, 2975]} />
        <Description />
        <Structure />
        <Reviews />
      </>
  )
};
