import { createContext, useContext, Dispatch, SetStateAction } from 'react';

import { IProduct } from "../models/IProduct.ts";

export interface IFilters {
  min_price_base?: number;
  max_price_base?: number;
  name_filter?: string;
  limit?: number;
  offset?: number;
}

export interface ProductContextType {
  products: IProduct[];
  setProducts: Dispatch<SetStateAction<IProduct[]>>;

  filters: IFilters;
  setFilters: Dispatch<SetStateAction<IFilters>>;

  setScrollPosition: (position: number) => void;
  scrollPosition: number;
}

export const initialStateProduct: ProductContextType = {
  products: [],
  setProducts: () => void 0,

  filters: {
    min_price_base: 0,
    max_price_base: 1000,
    name_filter: '',
    limit: 10,
    offset: 0,
  },
  setFilters: () => void 0,

  scrollPosition: 0,
  setScrollPosition: () => void 0,
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within ProductProvider');
  }
  return context;
};

export default ProductContext;