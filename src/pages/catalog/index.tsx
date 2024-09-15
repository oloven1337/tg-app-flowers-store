import { BackButton } from '@twa-dev/sdk/react';
import { useState } from "react";
import { useQuery } from "react-query";

import { fetchProducts } from "../../api/products";
import { Filters } from "../../components/filters";
import { ProductList } from "../../components/product-list";
import { Search } from "../../components/search";
import { useDebounce } from "../../hooks/useDebounce";
// import { IProduct } from "../../models/IProduct.ts";
import { BottomSheet } from "../../ui/bottom-sheet";
import { Button } from "../../ui/button";
import { Text } from "../../ui/text";

export const CatalogPage = () => {
  const [search, setSearch] = useState("");
  // const [products, setProducts] = useState<IProduct[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const debouncedSearch = useDebounce(search, 500);
  const { data: products } = useQuery(
      ['products', debouncedSearch],
      () => fetchProducts({
        name_filter: debouncedSearch.length > 0 ? debouncedSearch : undefined,
      }),
      {
        staleTime: 5 * 60 * 1000,
        cacheTime: 10 * 60 * 1000,
      }
  );
  // useEffect(() => {
  //   const getProducts = async () => {
  //     const data = await fetchProducts({
  //       name_filter: debouncedSearch.length > 0 ? debouncedSearch : undefined,
  //     });
  //
  //     setProducts(data);
  //   };
  //
  //   getProducts();
  //
  // }, [debouncedSearch]);

  return (
      <div className="p-4">
        <Search search={search} setSearch={setSearch}/>
        <div className="flex">
          <Button
              className="border border-blue-500 my-3 rounded-lg pt-0.5 px-2 ml-auto"
              onClick={() => setIsOpen(true)}
          >
            <Text variant="MEDIUM" className="text-right">Фильтры</Text>
          </Button>
        </div>
        <ProductList products={products}/>
        <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="space-y-4">
            <Filters />
          </div>
        </BottomSheet>
        <BackButton/>
      </div>
  );
};
