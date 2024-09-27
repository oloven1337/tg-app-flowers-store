import { useState } from "react";
import { useQuery } from 'react-query';

import { MainHeader } from "./components/main-header.tsx";
import { fetchProducts } from "../../api/products";
import { Carousel } from "../../components/carousel/carousel.tsx";
import { ProductList } from "../../components/product-list";
import { RedirectCardList } from "../../components/redirect-card-list";
import { Search } from "../../components/search";
import { useDebounce } from "../../hooks/useDebounce.tsx";
import { Text } from "../../ui/text";

export const MainPage = () => {
  const [search, setSearch] = useState("");

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

  const tg = window.Telegram.WebApp;

  return (
      <div className="p-4">
        <MainHeader />
        <Search search={search} setSearch={setSearch} />
        <Carousel />
        <RedirectCardList />
        <Text style={{
          color: tg.themeParams.text_color
        }} className="text-start py-4" variant="HEAD">Топ</Text>
        <ProductList products={products || []} />
      </div>
  );
};
