import { IFilters } from "../../context/product.tsx";
import axios from '../instance.ts';

export const fetchProducts = async (newFilters: IFilters) => {
  try {
    const response = await axios.get('/bouquets/', { params: newFilters });

    return response.data;
  } catch (error) {
    console.error('Error fetching products', error);
  }
};

export const fetchProduct = async (id: string) => {
  try {
    const response = await axios.get(`/bouquet/${id}`);

    return response.data;
  } catch (error) {
    console.error('Error fetching product', error);
  }
};

export const fetchReviews = async (id: string) => {
  try {
    const response = await axios.get(`/reviews/${id}`);

    return response.data;
  } catch (error) {
    console.error('Error fetching reviews', error);
  }
};

interface SendProductData {
  chat_id?: number | null;
  user_id?: number | null;
  bouquet_name?: string | null;
  price?: number | null;
  bouquet_link?: string | null;
  image_url?: string | null;
  needs_assembly?: boolean | null;
}

export const sendProduct = async (data: SendProductData) => {
  try {
    const response = await axios.post('/send_bouquet', data);

    return response.data;
  } catch (error) {
    console.error('Error sending product', error);
  }
}