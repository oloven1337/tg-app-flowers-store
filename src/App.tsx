import './App.css'
import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'react-loading-skeleton/dist/skeleton.css'

import ProductContext, { initialStateProduct, ProductContextType } from "./context/product.tsx";
import UserContext, { initialStateUser } from "./context/user.tsx";
import { routes } from "./router.tsx";

import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient()
  const [avatar, setAvatar] = useState<string>(initialStateUser.avatar);
  const [products, setProducts] = useState<ProductContextType['products']>(initialStateProduct.products);
  const [filters, setFilters] = useState<ProductContextType['filters']>(initialStateProduct.filters);
  const [scrollPosition, setScrollPosition] = useState<ProductContextType['scrollPosition']>(initialStateProduct.scrollPosition);

  const router = createBrowserRouter(routes);
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.Telegram?.WebApp?.expand();
    document.documentElement.style.backgroundColor = tg.themeParams.bg_color || "#F2F2F7";
  }, []);
  return (
      <QueryClientProvider client={queryClient}>
        <ProductContext.Provider value={{
          products,
          setProducts,
          filters,
          setFilters,
          scrollPosition,
          setScrollPosition
        }}>
          <UserContext.Provider value={{avatar, setAvatar}}>
            <RouterProvider router={router}/>
          </UserContext.Provider>
        </ProductContext.Provider>
      </QueryClientProvider>
  )
}

export default App
