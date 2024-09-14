import { useEffect, useState } from "react";

import { MainHeader } from "./components/main-header.tsx";
import { fetchProducts } from "../../api/products";
import { ProductList } from "../../components/product-list";
import { RedirectCardList } from "../../components/redirect-card-list";
import { Search } from "../../components/search";
import { IFilters } from "../../context/product.tsx";
import { IProduct } from "../../models/IProduct.ts";
import { Text } from "../../ui/text";

export const MainPage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  // const [filters, setFilters] = useState<IFilters>({});
  // const [scrollPosition, setScrollPosition] = useState(0);
  // console.log(products)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // console.log(window.Telegram.WebApp.initDataUnsafe.user);
  const tg = window.Telegram.WebApp;



  // useEffect(() => {
  //   const getProducts = async () => {
  //     const data = await fetchProducts(filters);
  //     // console.log(data)
  //
  //     setProducts(data);
  //   };
  //
  //   getProducts();
  //   // document.documentElement.style.backgroundColor = tg.initDataUnsafe.themeParams.bg_color || "#F2F2F7";
  //
  //   }, []);

  return (
      <div className="p-4">
        <MainHeader />
        {/*{JSON.stringify(tg.initDataUnsafe)}*/}
        <Search />
        <RedirectCardList />
        <Text style={{
          color: tg.themeParams.text_color
        }} className="text-start py-4" variant="HEAD">Топ</Text>
        <ProductList products={products} />
      </div>
  );
};