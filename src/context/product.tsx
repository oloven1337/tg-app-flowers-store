import { createContext, useContext, Dispatch, SetStateAction } from 'react';

import { IProduct } from "../models/IProduct.ts";

export interface IFilters {
  min_price_base?: number;
  max_price_base?: number;
  name_filter?: string;
  limit?: number;
  offset?: number;
}

interface ProductContextType {
  products: IProduct[];
  filters: IFilters;
  setFilters: Dispatch<SetStateAction<IFilters>>;
  fetchProducts: (newFilters?: IFilters) => Promise<void>;
  saveScrollPosition: (position: number) => void;
  scrollPosition: number;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within ProductProvider');
  }
  return context;
};