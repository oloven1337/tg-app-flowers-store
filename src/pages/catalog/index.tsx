import { BackButton } from '@twa-dev/sdk/react';
import { useEffect, useState } from "react";

import { fetchProducts } from "../../api/products";
import { ProductList } from "../../components/product-list";
import { Search } from "../../components/search";
import { useDebounce } from "../../hooks/useDebounce";
import { IProduct } from "../../models/IProduct.ts";

export const CatalogPage = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<IProduct[]>([]);

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts({
        name_filter: debouncedSearch.length > 0 ? debouncedSearch : undefined,
      });

      setProducts(data);
    };

    getProducts();

  }, [debouncedSearch]);

  return (
      <div className="p-4">
        <Search search={search} setSearch={setSearch} />
        <ProductList products={products} />
        <BackButton />
      </div>
  );
};
