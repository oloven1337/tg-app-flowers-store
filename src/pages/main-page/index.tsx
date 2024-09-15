import { useEffect, useState } from "react";

import { MainHeader } from "./components/main-header.tsx";
import { fetchProducts } from "../../api/products";
import { ProductList } from "../../components/product-list";
import { RedirectCardList } from "../../components/redirect-card-list";
import { Search } from "../../components/search";
// import { IFilters } from "../../context/product.tsx";
import { useDebounce } from "../../hooks/useDebounce.tsx";
import { IProduct } from "../../models/IProduct.ts";
import { Text } from "../../ui/text";

export const MainPage = () => {
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

  // const [filters, setFilters] = useState<IFilters>({});
  // const [scrollPosition, setScrollPosition] = useState(0);
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts({});

      setProducts(data);
    };

    getProducts();
    // document.documentElement.style.backgroundColor = tg.initDataUnsafe.themeParams.bg_color || "#F2F2F7";

    }, []);

  return (
      <div className="p-4">
        <MainHeader />
        {/*{JSON.stringify(tg.initDataUnsafe)}*/}
        <Search search={search} setSearch={setSearch} />
        <RedirectCardList />
        <Text style={{
          color: tg.themeParams.text_color
        }} className="text-start py-4" variant="HEAD">Топ</Text>
        <ProductList products={products} />
      </div>
  );
};