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